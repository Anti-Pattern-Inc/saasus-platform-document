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
Output each tenant's metering data for each period as separate rows
Period unit = Day or Month (change as needed)
Do not use cache, always retrieve the latest information

[Data Retrieval Method]

[Required Requirements]
Execute complete data retrieval without omissions.

[Retrieval Steps]
1. Retrieve all tenants: Get all tenant list using `gettenants` API
2. Retrieve all metering units: Get all metering unit list using `getmeteringunits` API
3. Efficient data retrieval:
   
   For daily units:
   - Execute `getmeteringunitdatecountsbytenantidanddate` API for each tenant ID × each date combination
   
   For monthly units:
   - Execute `getmeteringunitmonthcountsbytenantidandmonth` API for each tenant ID × each month combination
   
   - Only include data in CSV if it actually exists
   - Skip tenant × period combinations if data does not exist (counts array is empty)
4. Data verification: Check the contents of counts array in each API response and only adopt data if it is not an empty array

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
Period: Metering target period (monthly: 2025-8, daily: 2025-08-15)

[Export Conditions]
; Set filter conditions when exporting metering data
; Example: To export metering data for a specific tenant only, set as follows:
; Tenant Name = Specific tenant name
; Example: To export metering data for a specific period only, set as follows:
; Period = 2025-8
;
; Monthly example:
; Period unit = Month
; Period Start = 2025-6
; Period End = 2025-8
; Daily example:
; Period unit = Day
; Period Start = 2025-08-01
; Period End = 2025-08-31
; Example: To export metering data for a specific meter only, set as follows:
; Meter Name = API Calls
Period unit = Month
Period Start = 2025-6
Period End = 2025-8

[Output Example]
; Below is an example of the output CSV (monthly case)
; Tenant ID,Tenant Name,Meter Name,Usage,Period
; tenant-001,Sample Tenant 1,Active Users,13,2025-08-27
; tenant-001,Sample Tenant 1,Comments,3,2025-08-27
; tenant-002,Sample Tenant 2,Test Usage,5,2025-08-27

; Below is an example of daily output (daily case)
; Tenant ID,Tenant Name,Meter Name,Usage,Period
; tenant-001,Sample Tenant 1,API Calls,1200,2025-7
; tenant-001,Sample Tenant 1,Storage,550,2025-7
; tenant-002,Sample Tenant 2,API Calls,850,2025-7
; tenant-002,Sample Tenant 2,Storage,320,2025-7

[Important Notes]
1. Complete combination check: Execute data existence confirmation for all tenant × all period combinations
2. API usage priority: 
   - Daily: `getmeteringunitdatecountsbytenantidanddate` (get all meters for the target day in one call)
   - Monthly: `getmeteringunitmonthcountsbytenantidandmonth` (get all meters for the target month in one call)
   - Avoid individual meter unit retrieval for efficiency
3. Data quality assurance: Distinguish between cases where usage is 0 and cases where data does not exist
4. Progress reporting: Show progress like "Processing ○th/Total ○ tenant × period combinations" during data retrieval
```

## Output File Format

### CSV Header
```csv
Tenant ID,Tenant Name,Meter Name,Usage,Period
```

### Data Row Examples (Monthly)
```csv
tenant-001,Sample Tenant 1,Active Users,13,2025-08-27
tenant-001,Sample Tenant 1,Comments,3,2025-08-27
tenant-002,Sample Tenant 2,Test Usage,5,2025-08-27
```

### Data Row Examples (Daily)
```csv
tenant-001,Sample Tenant 1,API Calls,1200,2025-7
tenant-001,Sample Tenant 1,Storage,550,2025-7
tenant-002,Sample Tenant 2,API Calls,850,2025-7
tenant-002,Sample Tenant 2,Storage,320,2025-7
```

## Important Notes

- If a single tenant uses multiple meters, they will be output as separate rows for each meter
- If a single tenant has data for multiple periods, they will be output as separate rows for each period
- When a period range is specified, data for all periods within the specified range will be output
- When outputting in daily units, the number of rows may increase significantly (e.g., approximately 30 rows × number of tenants × number of meters for one month)
- When filter conditions are specified, only metering data that matches the conditions will be output
- The output data is the latest information at the time of execution (cache is not used)

## Customization

### Adding Fields
If you want to include custom attributes in the output, set the corresponding items to `true` in the [Field Settings] section.

### Changing Filter Conditions
To filter metering data by specific conditions, specify the conditions in the [Export Conditions] section. It is also possible to combine multiple conditions.