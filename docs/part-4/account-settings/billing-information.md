---
title: "Billing and Payment Methods"
slug: "billing-information"
excerpt: ""
hidden: false
createdAt: "Thu Aug 15 2025 02:18:00 GMT+0000 (Coordinated Universal Time)"
updatedAt: "Thu Aug 15 2025 02:18:00 GMT+0000 (Coordinated Universal Time)"
---

This page explains billing and payment methods for SaaSus Platform paid plans.

## Billing Overview

SaaSus Platform offers flexible billing options to accommodate various business needs.

- **Monthly billing cycles**: Starting from the subscription date
- **Automatic renewal**: Continues unless cancelled
- **Multiple payment methods**: Supports credit cards and AWS Marketplace

## Payment Methods

### Credit Card Payment (via Stripe)

When you subscribe to a paid plan through the SaaS Development Console, payments are processed securely through Stripe.

- **Accepted cards**: Visa, Mastercard, American Express, JCB
- **Automatic billing**: Monthly billing from registration date
- **Invoice delivery**: Digital invoices sent via email
- **Currency**: Japanese Yen (¥) - All prices exclude tax

### AWS Marketplace Payment

- **Consolidated billing**: Charges appear on your AWS bill
- **AWS payment methods**: Use your existing AWS payment setup
- **Private offers**: Enterprise plans can be set with custom pricing
- **Currency**: Billing follows your AWS account currency settings

## Invoice Management

### Viewing Invoices

1. **Stripe customers**: Access invoices through the billing portal in Account Settings
2. **AWS Marketplace customers**: View charges in your AWS billing dashboard

### Invoice Details

Each invoice includes the following:
- SaaSus Platform base fees
- Usage-based charges (Smart API Gateway calls, uploads)
- Monthly Active User (MAU) charges (Starter plan)
- Tax calculations (where applicable)
- Detailed usage breakdowns

### Billing Process (Stripe)

For paid plans subscribed through the SaaS Development Console, billing works as follows:

Example) If you subscribe to the Starter plan on August 1, 2025:
Initial billing date: August 1, 2025
One hour after contract, an invoice for ¥5,500 will be issued.
Payment due date (invoice due date): August 30, 2025
The payment due date is 30 days after the billing date, and payment will be processed on the day you register your card information with Stripe.

#### Billing for subsequent months
For the credit card registered during the initial billing, charges will be made on the same date each month and automatic deduction will be executed.
Billing date: Same date of the following month as the initial billing date (e.g., August 1, 2025)
※ For months without the corresponding date (e.g., months without the 31st), the last day of that month becomes the billing date.

#### Usage-based billing
Regarding usage-based billing:
For example, the August 1, 2025 bill includes the monthly fee of ¥5,500 for August 1, 2025 to September 1, 2025, and usage-based charges for July 1, 2025 to August 1, 2025.

## Usage-Based Billing

### Upload Charges

- **Free uploads**: Limits vary by plan
- **Overage rates**: ¥20-¥50 per upload beyond limits
- **Usage monitoring**: Monitor uploads in the SaaS Operations Console (development, staging, production environments)
※ For details, please check the [pricing plan page](https://saasus.io/pricing).

### API Call Count

- **Free tier**: 10,000 calls per month included in all paid plans
- **Overage rates**: Vary by plan (¥7-¥20 per 10,000 calls)
- **Usage monitoring**: Monitor usage in the SaaS Operations Console (development, staging, production environments)
- **Target services**: Smart API Gateway / Smart MCP Server
※ For details, please check the [pricing plan page](https://saasus.io/pricing).

### Monthly Active Users (MAU)

For Starter plan:
- **Base fee**: ¥5,500 per month
- **MAU charge**: ¥800 per active user per month
- **Definition**: Users who authenticate at least once during the billing period (production environment)
- **Usage monitoring**: Monitor usage in the SaaS Operations Console (production environment)
※ For details, please check the [pricing plan page](https://saasus.io/pricing).

## Tax Information

### Consumption Tax

- **Rate**: 10% consumption tax applies to customers
- **Invoice display**: Tax shown separately on invoices

## Invoice Information

### Billing Information

- **Invoice downloads**: All invoices are available in PDF format.
- **Retention period**: Billing data is retained for 7 years.

## Support and Contact

For billing-related inquiries, please contact our support team through the following methods:

- **Starter**: Submit inquiries through the admin console
- **Standard/Standard Plus/Advanced Plus/Enterprise**: Contact via Slack Connect or scheduled meetings

### Required Information

When contacting support about billing, please provide the following information:
- Account ID or email address
- Invoice number (if applicable)
- Detailed description of the issue

---

**Note**: Billing terms and conditions are subject to change. Please refer to the latest Terms of Service for complete details.