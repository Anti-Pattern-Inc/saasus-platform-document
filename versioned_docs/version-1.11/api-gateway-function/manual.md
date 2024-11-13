---
title: "Setup Guide"
slug: "manual"
excerpt: ""
hidden: false
createdAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Oct 07 2024 19:00:00 GMT+0000 (Coordinated Universal Time)"
---

## API Gateway Usage Guide

This document provides the setup steps for using the API Gateway feature of the SaaSus Platform to easily publish and manage APIs.

---

### Step 1: Application for Use

1. Access the **[API Gateway Feature Beta Version Application Form](https://docs.google.com/forms/d/e/1FAIpQLSftCXrCOH-19uoVyaziajuRSdvwCzdlteqK5xLxjvYs3Lz7Ww/viewform)** and submit an application for use.

---

### Step 2: Annotation Settings in the Source Code

1. Add annotations to the methods you want to publish to configure them as API endpoints.

---

### Step 3: API Server Startup Configuration

1. To enable the `saasus-sdk` API server to start when the application launches, add the following code to the `ServletInitializer` class.

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

2. Configure the **Application Load Balancer** with the following settings:

   - **Listener**: Port **8083**
   - **Target Group**: Create a target group for port **8083**
   - **Security Group**: Allow access to port **8083** for both the ALB and the application

---

### Step 4: Integration and Compression of Source Code

Use the following shell script to compile and compress the relevant source code into a ZIP file.

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

**Usage**:

```sh
$ bash merge_java_files.sh <path_to_application>
```

Example:

```sh
$ bash merge_java_files.sh src/main/java/org/springframework/samples/petclinic
```

---

### Step 5: Upload the ZIP File

Go to the **API Gateway Feature screen** in the development console and upload the generated ZIP file.

---

### Step 6: Permission Settings

1. Go to the **Permission** tab and create the **CloudFormation for Assume Role**.
2. Register the created **Role ARN** and **External ID**.
3. Register the **VPC ID** and **Subnet IDs** for the VPC where you will create the PrivateLink (Network Load Balancer).
4. Register the **ALB ARN** of the Application Load Balancer.

Once these settings are complete, the infrastructure connecting SaaSus with your environment will be created.

---

### Step 7: API Publishing and Access

1. Publish the API to make it available for use.

#### API Access Method

- An **API Key** is required to access the API. Generate an API Key from the **Tenant Management screen** in the operation console and use it to access the API.
- As this is a beta version, domain information required for access will be sent via email by the SaaSus team.

#### Access Example

```sh
$ curl -v -X GET https://<domain>/<full_class_path>/<method_name> -H 'x-api-key:<issued_API_Key>' -H 'tenantId:<retrieved_tenantId>'
```

#### Example

```sh
$ curl -v -X GET https://xxxxxxxxxxxxxxxxxxxxx/org.springframework.samples.petclinic.owner.FindFormApi/processFindFormApi -H 'x-api-key:azydsktcf1b93Mmjxuex7CEbEoV7OjrGk0RIqgzCQtc' -H 'tenantId:dc38a950-5203-4820-a325-418c0764ec69'
```
