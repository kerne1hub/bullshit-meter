import { configurationCommon } from './configuration.common';

const commonConfig = configurationCommon({
  apiDomain: 'insert-PROD-API-domain-here'
});

export const configuration = {
  ...commonConfig,
  production: true
};
