---
title: "設定手順"
slug: "manual"
excerpt: ""
hidden: false
createdAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
---

## API Gateway 利用手順

SaaSus Platform の API Gateway 機能を利用して、API を簡単に公開・管理するための設定手順を以下に示します。

---

### Step 1: 利用申請

1. **API Gateway 機能 β 版利用申請フォーム**にアクセスし、利用申請を行います。

---

### Step 2: ソースコードへのアノテーション設定

1. 公開対象のメソッドにアノテーションを追加し、API エンドポイントとして使用できるように設定します。

---

### Step 3: API Server の起動設定

1. アプリケーションの起動時に `saasus-sdk` の API サーバーが起動するよう、以下のコードを `ServletInitializer` クラスに追加してください。

```java
import saasus.sdk.util.apiserver.ApiServer;

/**
 * PetClinic Spring Boot Application.
 *
 * @author Dave Syer
 *
 */
@SpringBootApplication
@ImportRuntimeHints(PetClinicRuntimeHints.class)
public class PetClinicApplication {

	public static void main(String[] args) {

		try {
			ApiServer.start(8083);
		}
		catch (Exception e) {
			e.printStackTrace();
			System.exit(1);
		}

		SpringApplication.run(PetClinicApplication.class, args);
	}

}
```

2. **Application Load Balancer** に対して、以下の設定が必要です：

   - **リスナー**: ポート **8083**
   - **ターゲットグループ**: ポート **8083** のターゲットグループを作成
   - **セキュリティグループ**: ALB とアプリケーションにポート **8083** へのアクセスを許可

---

### Step 4: ソースコードの統合と圧縮

対象のソースコードを以下のシェルスクリプトでまとめ、ZIP ファイルに圧縮します。

```bash
#!/bin/bash

# Usage: $0 <directory>

DIRECTORY=$1
OUTPUT_FILE="generated_file_name.txt"

if [ -f "$OUTPUT_FILE" ]; then
    rm "$OUTPUT_FILE"
fi

find "$DIRECTORY" -type f -name "*.java" -print0 | while IFS= read -r -d '' file; do
    echo "===== $file =====" >> "$OUTPUT_FILE"
    cat "$file" >> "$OUTPUT_FILE"
    echo -e "\n" >> "$OUTPUT_FILE"
done

ZIP_FILE="generated_file_name.zip"
if [ -f "$ZIP_FILE" ]; then
    rm "$ZIP_FILE"
fi

zip "$ZIP_FILE" "$OUTPUT_FILE"
echo "All Java files have been merged and zipped into $ZIP_FILE"
```

**使用方法**:

```sh
$ bash merge_java_files.sh <アプリケーションのパス>
```

例:

```sh
$ bash merge_java_files.sh src/main/java/org/springframework/samples/petclinic
```

---

### Step 5: ZIP ファイルのアップロード

開発コンソールの **API Gateway 機能の画面**にアクセスし、生成した ZIP ファイルをアップロードします。

---

### Step 6: 権限の設定

1. **Permission タブ**に移動し、**Assume Role 用の CloudFormation** を作成します。
2. 作成した **Role ARN** と **External ID** を登録します。
3. Application Load Balancer の **VPC ID** と **Subnet IDs** を登録します。
4. Application Load Balancer の **ALB ARN** を登録します。

設定が完了すると、SaaSus とお客様の環境を接続するインフラが作成されます。

---

### Step 7: API の公開とアクセス

1. API を公開し、利用可能になります。

#### API アクセス方法

- API のアクセスには **API Key** が必要です。運用コンソールの **テナント管理画面**で API Key を発行し、アクセスに利用します。
- β 版のため、アクセスに必要なドメイン情報は SaaSus 運営側からメールにて送付されます。

#### アクセス例

```sh
$ curl -v -X GET https://<ドメイン>/<クラスのフルパス>/<メソッド名> -H 'x-api-key:<発行したAPI Key>' -H 'tenantId:<取得した tenantId>'
```

#### Example

```sh
$ curl -v -X GET https://xxxxxxxxxxxxxxxxxxxxx/org.springframework.samples.petclinic.owner.FindFormApi/processFindFormApi -H 'x-api-key:azydsktcf1b93Mmjxuex7CEbEoV7OjrGk0RIqgzCQtc' -H 'tenantId:dc38a950-5203-4820-a325-418c0764ec69'
```
