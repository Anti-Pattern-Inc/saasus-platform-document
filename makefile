# Makefile

##########
# local server setup
######### 
PORT := 3000

# Docker Composeを立ち上げるターゲット
init: up install run-en

up:
	@echo "チェック中: ポート3000の使用状況..."
	@lsof -iTCP:3000 -sTCP:LISTEN > /dev/null 2>&1; \
	if [ $$? -eq 0 ]; then \
		echo "ポート3000は使用中です。使用しているコンテナを確認します..."; \
		if docker ps --filter "publish=3000" --format "{{.Names}}" | grep -q 'saasus-platform-document'; then \
			echo "ポート3000はsaasus-platform-documentコンテナによって使用されています。処理を続行します。"; \
			docker-compose up -d; \
		else \
			echo "エラー: ポート3000はsaasus-platform-document以外のプロセスによって使用されています。"; \
			exit 1; \
		fi \
	else \
		echo "Docker Composeを起動します。"; \
		docker-compose up -d; \
	fi

install:
	docker exec -it saasus-platform-document npm install
	docker exec -it saasus-platform-document npm install -g swagger-i18n-extension

run-en:
	docker exec -it saasus-platform-document npm run start -- --host 0.0.0.0

run-ja:
	docker exec -it saasus-platform-document npm run start -- --host 0.0.0.0 --locale ja

down:
	docker-compose down

##########
# new document
######### 

# 元のパスの設定
SRC_JA_PATH := i18n/ja/docusaurus-plugin-content-docs/current/
SRC_EN_PATH := docs/

# ターゲットファイルの設定
# ex) make create_new_file TARGET_FILE=saas-operation-console/test.md
create_new_file: create_ja_file create_en_file

create_ja_file:
	mkdir -p $(SRC_JA_PATH)$(dir $(TARGET_FILE))
	touch $(SRC_JA_PATH)$(TARGET_FILE)

create_en_file:
	mkdir -p $(SRC_EN_PATH)$(dir $(TARGET_FILE))
	touch $(SRC_EN_PATH)$(TARGET_FILE)

# ターゲットをクリーンアップ
clean:
	rm -f $(SRC_JA_PATH)$(TARGET_FILE)
	rm -f $(SRC_EN_PATH)$(TARGET_FILE)

########## 
# sidebar
########## 

# saasus-platform-document/sidebars.jsで追加した設定をjaにも反映
ja_sidebar:
	docker exec -it saasus-platform-document npm run write-translations -- --locale ja

########### 
# copy api file(api)
########### 

update_api_files: copy_api_files translate_ja

copy_api_files:
	rm -rf api
	mkdir api
	cp -f ../api/modules/v1/auth/controller/authapi/authapi.yml ./api/authapi.yml
	cp -f ../api/modules/v1/integration/controller/integrationapi/integration.yml ./api/integration.yml
	cp -f ../api/modules/v1/pricing/controller/pricingapi/pricingapi.yml ./api/pricingapi.yml
	cp -f ../api/modules/v1/billing/controller/billingapi/billingapi.yml ./api/billingapi.yml
	cp -f ../api/modules/v1/awsmarketplace/controller/awsmarketplaceapi/awsmarketplaceapi.yml ./api/awsmarketplaceapi.yml
	cp -f ../api/modules/v1/communication/controller/communicationapi/communicationapi.yml ./api/communicationapi.yml
	cp -f ../api/modules/v1/apilog/controller/apilogapi/apilogapi.yml ./api/apilogapi.yml

# CRLFにならないようにbashで実行
translate_ja:
	docker exec -it saasus-platform-document /bin/bash -c "swagger-i18n-extension translate ./api/authapi.yml jpn > ./api/authapi.jpn.yml"
	docker exec -it saasus-platform-document /bin/bash -c "swagger-i18n-extension translate ./api/integration.yml jpn > ./api/integrationapi.jpn.yml"
	docker exec -it saasus-platform-document /bin/bash -c "swagger-i18n-extension translate ./api/pricingapi.yml jpn > ./api/pricingapi.jpn.yml"
	docker exec -it saasus-platform-document /bin/bash -c "swagger-i18n-extension translate ./api/billingapi.yml jpn > ./api/billingapi.jpn.yml"
	docker exec -it saasus-platform-document /bin/bash -c "swagger-i18n-extension translate ./api/awsmarketplaceapi.yml jpn > ./api/awsmarketplaceapi.jpn.yml"
	docker exec -it saasus-platform-document /bin/bash -c "swagger-i18n-extension translate ./api/communicationapi.yml jpn > ./api/communicationapi.jpn.yml"
	docker exec -it saasus-platform-document /bin/bash -c "swagger-i18n-extension translate ./api/apilogapi.yml jpn > ./api/apilogapi.jpn.yml"

########### 
# version
########### 

# ex) make override_version VERSION=1.6
override_version: remove_version create_new_version ja_sidebar

# ex) make create_new_version VERSION=1.6
create_new_version:
	docker exec -it saasus-platform-document npm run docusaurus docs:version ${VERSION}
	$(MAKE) ja_sidebar

# ディレクトリとファイルのパス
VERSIONED_DOCS_DIR_EN = versioned_docs/version-$(VERSION)
VERSIONED_DOCS_DIR_JA = i18n/ja/docusaurus-plugin-content-docs/version-$(VERSION)
VERSIONS_JSON_FILE = versions.json

# ターゲット：バージョンの削除
remove_version:
	# versioned_docs/version-1.6/ ディレクトリを削除
	# i18n/ja/docusaurus-plugin-content-docs/version-1.6/ ディレクトリを削除
	rm -rf $(VERSIONED_DOCS_DIR_EN)
	rm -rf $(VERSIONED_DOCS_DIR_JA)
	# versions.json から "1.6" を削除
	jq 'del(.[] | select(. == "$(VERSION)"))' $(VERSIONS_JSON_FILE) > $(VERSIONS_JSON_FILE).tmp && mv $(VERSIONS_JSON_FILE).tmp $(VERSIONS_JSON_FILE)

.PHONY: remove_version