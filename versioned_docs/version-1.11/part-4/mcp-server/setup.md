---
title: "SaaSus API MCP Server Setup Guide"
slug: "setup"
excerpt: ""
hidden: false
createdAt: "Fri Jan 20 2023 01:47:47 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed May 22 2024 15:16:11 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus API MCP Server Setup Guide

## Overview
SaaSus API MCP Server operates as a Model Context Protocol (MCP) server, enabling SaaSus API to be used from MCP-compatible clients such as Claude Desktop and Cursor.

## Prerequisites
- Node.js (v16 or higher required, v20 or higher recommended)
- npm (included with Node)

## Installation Steps

### 1. Clone the Repository
Clone the project with the following command:

```bash
git clone https://github.com/saasus-platform/saasus-api-mcp-server.git
cd saasus-api-mcp-server
```

### 2. Install Dependencies
Run the following command in the project root directory:

```bash
npm install
```

### 3. Check Available Tools
To check the description and parameters of generated tools, run the following command:

```bash
node index.js tools
```

Example output:
```
Available Tools:
Workspace: saasus-auth-api-schema
  Collection: get-basic-configurations.js
    get_basic_configurations
      Description: Get basic configurations including domain name and CNAME records.
      Parameters:
    [...]
```

## Claude Desktop Configuration

### 1. Check Local Environment

Check the node path:
```bash
which node
```

Check the mcpServer.js path:
```bash
realpath mcpServer.js
```

### 2. Obtain SaaSus Platform API Key Information

To use SaaSus API MCP Server, you need to set the following environment variables.
These values can be obtained from the SaaSus Platform SaaS Development Console.

- `SAASUS_PLATFORM_SAASID`: SaaS ID
- `SAASUS_PLATFORM_APIKEY`: API Key
- `SAASUS_PLATFORM_SECRETKEY`: Secret Key

### 3. MCP Server Configuration
Add the information obtained in steps 1 and 2 to the configuration file:

```json
{
  "mcpServers": {
    "saasusapis": {
      "command": "node path",
      "args": ["mcpServer.js path"],
      "env": {
        "SAASUS_PLATFORM_SAASID": "SaaS ID",
        "SAASUS_PLATFORM_APIKEY": "API Key",
        "SAASUS_PLATFORM_SECRETKEY": "Secret Key"
      }
    }
  }
}
```

**Note:**  
Replace `node path` with the full path.  
Replace `mcpServer.js path` with the actual full path to the cloned directory.

### 4. Restart Claude Desktop
Restart Claude Desktop to apply the configuration.

### 5. Verify Operation in Claude Desktop
Please ask "Get SaaSus basic information".  
If the basic information is successfully retrieved, the setup is complete.

## Available Features

SaaSus API MCP Server provides access to all SaaSus Platform API endpoints.  
Main features include:

### Auth API
- Get and update basic configurations
- User management
- Tenant management
- Authentication settings

### Pricing API
- Metering
- Feature menu management
- Plan management

### Other APIs
- Billing API
- Communication API
- API Log API
- AWS Marketplace API
- Integration API

## Troubleshooting

### Common Issues

#### 1. Server Won't Start
- Check Node.js version (v16 or higher required, v20 or higher recommended)
- Verify dependencies are correctly installed
- Check if environment variables are correctly set

#### 2. API Key Error
- Verify SaaSus Platform API key is correctly configured
- Check if API key permissions are properly set
- Verify SaaS ID is correctly configured

#### 3. MCP Connection Error
- Verify the path in Claude Desktop or Cursor configuration file is correct
- Check if the configuration file JSON format is valid
- Restart the application

### Check Tool List
To check available tools:

```bash
node index.js tools
```

This command allows you to check all available API endpoints and their parameters.
