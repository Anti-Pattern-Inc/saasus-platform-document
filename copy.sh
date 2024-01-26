rm -rf api
mkdir api
cp -f ../api/modules/v1/auth/controller/authapi/authapi.yml ./api/authapi.yml
cp -f ../api/modules/v1/integration/controller/integrationapi/integration.yml ./api/integration.yml
cp -f ../api/modules/v1/pricing/controller/pricingapi/pricingapi.yml ./api/pricingapi.yml
cp -f ../api/modules/v1/billing/controller/billingapi/billingapi.yml ./api/billingapi.yml
cp -f ../api/modules/v1/awsmarketplace/controller/awsmarketplaceapi/awsmarketplaceapi.yml ./api/awsmarketplaceapi.yml
cp -f ../api/modules/v1/communication/controller/communicationapi/communicationapi.yml ./api/communicationapi.yml
cp -f ../api/modules/v1/apilog/controller/apilogapi/apilogapi.yml ./api/apilogapi.yml