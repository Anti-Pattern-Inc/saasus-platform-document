---
title: "User Behavior History Analysis Procedure"
slug: "user-behavior-analysis"
excerpt: ""
hidden: false
createdAt: "Mon Jun 09 2025 08:34:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Mon Jun 09 2025 08:34:00 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Platform User Behavior History Analysis Procedure

## Overview
This is a procedure manual for analyzing user behavior history data accumulated in the SaaSus Platform.

## Prerequisites
- SaaSus API MCP Server must be configured
- User behavior history data must be accumulated for analysis

## MCP Server Request Statements

### User-wise Referrer Analysis
```
Please output user-wise referrer analysis.

Lines starting with (;) are commented out and excluded from processing

[Output Settings]
Output format = CSV format (JSON format, table format, YAML format are also selectable)
No intermediate deliverables required
Script or program creation is prohibited
Output only result information
Do not use cache, always retrieve latest information

[API Usage Method]
1. Retrieve all user list using getsaasusers API
2. Execute getuserbehaviorhistories API for each user ID
3. Aggregate each user's behavior history data by referrer

[Field Settings]
User ID = true
Referrer = true
Access Count = true
First Access Date = true
Last Access Date = true

[Output Conditions]
; Analysis Period = From 2025/01 onwards to present
; Analysis Period = 2025/01/01-2025/01/31

[Field Descriptions]
User ID: Actual user identifier (use real data retrieved from API)
Referrer: Value set in Referer or X-SaaSus-Referer header, or URL automatically set by browser if not configured
Access Count: Number of accesses with the corresponding referrer
First Access Date: First access date with the corresponding referrer (YYYY-MM-DD format)
Last Access Date: Last access date with the corresponding referrer (YYYY-MM-DD format)

```

### Referrer-wise Usage Count Analysis
```
Please output referrer-wise usage count analysis.

Lines starting with (;) are commented out and excluded from processing

[Output Settings]
Output format = CSV format (JSON format, table format, YAML format are also selectable)
No intermediate deliverables required
Script or program creation is prohibited
Output only result information
Do not use cache, always retrieve latest information

[API Usage Method]
1. Retrieve all user list using getsaasusers API
2. Execute getuserbehaviorhistories API for each user ID
3. Integrate all user data and aggregate by referrer

[Field Settings]
Referrer = true
Total Access Count = true
Unique User Count = true
First Access Date = true
Last Access Date = true

[Output Conditions]
; Analysis Period = From 2025/01 onwards to present
; Analysis Period = 2025/01/01-2025/01/31
; Minimum Unique User Count = 3

[Field Descriptions]
Referrer: Value set in Referer or X-SaaSus-Referer header, or URL automatically set by browser if not configured
Total Access Count: Total number of accesses with the corresponding referrer
Unique User Count: Actual number of unique users who accessed with the corresponding referrer
First Access Date: First access date with the corresponding referrer (YYYY-MM-DD format)
Last Access Date: Last access date with the corresponding referrer (YYYY-MM-DD format)

```

## Information Retrieved

### Items Output in User-wise Referrer Analysis
- **User ID**: User identifier managed on SaaSus Platform
- **Referrer**: Value set in Referer or X-SaaSus-Referer header
- **Access Count**: Number of accesses for each referrer
- **First Access Date**: Date of first access with the corresponding referrer
- **Last Access Date**: Date of last access with the corresponding referrer

### Aggregation and Analysis Information
- **Total Access Count**: Total number of accesses by referrer
- **Unique User Count**: Number of unique users by referrer
- **First Access Date**: First access date by referrer
- **Last Access Date**: Last access date by referrer

## Important Notes

- Output data is the latest information at the time of execution
- Log retention period varies by plan. Please see the [pricing plan page](https://saasus.io/pricing) for details
- Data older than the retention period is automatically deleted and cannot be retrieved
- Analysis period is limited to the retention period of your contracted plan
- Actual user IDs are used to retrieve data
- Handle analysis results with care and implement appropriate access control

## Customization

### Adding Filter Conditions
If you want to filter data with specific conditions, add conditions to the request statement.

Example:
```
[Output Conditions]
Minimum Access Count = 5
Minimum Unique User Count = 3
```

### Changing Analysis Period
If you want to change the analysis period, specify the period in the request statement. You can specify in the following formats:

- `From 2025/01 onwards to present`: Period from the specified year/month onwards to present
- `2025/01/01-2025/01/31`: Period from the specified start date to end date

However, due to log retention period limitations, you can only specify up to the retention period of your contracted plan. Please see the [pricing plan page](https://saasus.io/pricing) for details.
