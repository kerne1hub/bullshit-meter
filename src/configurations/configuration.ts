import { configurationCommon } from './configuration.common';

const commonConfig = configurationCommon({
  apiDomain: 'dev.api.ranktruth.ronasit.com'
});

export const configuration = {
  ...commonConfig,
  production: false
};
