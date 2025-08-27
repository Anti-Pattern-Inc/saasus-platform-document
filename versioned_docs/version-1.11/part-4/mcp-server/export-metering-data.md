---
title: "Metering Data CSV Export Procedure"
slug: "export-metering-data"
excerpt: "How to export metering values for each tenant and month using MCP Server"
hidden: false
createdAt: "Wed Aug 27 2025 01:00:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Wed Aug 27 2025 01:00:00 GMT+0000 (Coordinated Universal Time)"
---

# SaaSus Platform Metering Data CSV Export Procedure

## Overview
This document describes the procedure for retrieving metering values for each tenant and month in SaaSus Platform and exporting them in CSV format.

## Prerequisites
- SaaSus API MCP Server must be configured

## Request Text for MCP Server

### Basic Request Text
```
Please export metering data to CSV.

[Export Settings]
Output format = CSV
Filename = saasus_metering_data.csv
Intermediate deliverables not required
Output the result CSV file directly
Output each tenant's metering data for each month as separate rows
Do not use cache, always retrieve the latest information

[Field Settings]
Tenant ID = true
Tenant Name = true
Meter Name = true
Usage = true
Period = true
; If there are other custom attributes, please add them below
; Custom Attribute 1 = true
; Custom Attribute 2 = true

[Field Descriptions]
Tenant ID: Unique identifier for the tenant
Tenant Name: Display name of the tenant
Meter Name: Display name of the metering unit (display_name)
Usage: Usage amount for the specified period
Period: Metering target period (e.g., 2025-8)

[Export Conditions]
; Set filter conditions when exporting metering data
; Example: To export metering data for a specific tenant only, set as follows:
; Tenant Name = Specific tenant name
; Example: To export metering data for a specific period only, set as follows:
; Period = 2025-8
; Example: To export metering data for a specified period range, set as follows:
; Period Start = 2025-6
; Period End = 2025-8
; Example: To export metering data for a specific meter only, set as follows:
; Meter Name = API Calls
Period Start = 2025-6
Period End = 2025-8

[Output Example]
; Below is an example of the output CSV (for period range specification from June to August 2025)
; Tenant ID,Tenant Name,Meter Name,Usage,Period
; tenant-001,Sample Corporation,API Calls,1000,2025-6
; tenant-001,Sample Corporation,Storage,500,2025-6
; tenant-001,Sample Corporation,API Calls,1200,2025-7
; tenant-001,Sample Corporation,Storage,550,2025-7
; tenant-001,Sample Corporation,API Calls,1100,2025-8
; tenant-001,Sample Corporation,Storage,480,2025-8
; tenant-002,Test Company,API Calls,800,2025-6
; tenant-002,Test Company,Storage,300,2025-6
; tenant-002,Test Company,API Calls,850,2025-7
; tenant-002,Test Company,Storage,320,2025-7
; tenant-002,Test Company,API Calls,900,2025-8
; tenant-002,Test Company,Storage,280,2025-8
```

## Output File Format

### CSV Header
```csv
Tenant ID,Tenant Name,Meter Name,Usage,Period
```

### Data Row Examples
```csv
tenant-001,Sample Corporation,API Calls,1000,2025-12
tenant-001,Sample Corporation,Storage,500,2025-12
tenant-002,Test Company,API Calls,800,2025-12
tenant-002,Test Company,Storage,300,2025-12
```

## Important Notes

- If a single tenant uses multiple meters, they will be output as separate rows for each meter
- If a single tenant has data for multiple periods, they will be output as separate rows for each period
- When a period range is specified, data for all periods within the specified range will be output
- When filter conditions are specified, only metering data that matches the conditions will be output
- The output data is the latest information at the time of execution (cache is not used)

## Customization

### Adding Fields
If you want to include custom attributes in the output, set the corresponding items to `true` in the [Field Settings] section.

### Changing Filter Conditions
To filter metering data by specific conditions, specify the conditions in the [Export Conditions] section. It is also possible to combine multiple conditions.