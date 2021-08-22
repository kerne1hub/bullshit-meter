
export const configurationCommon = ({ apiDomain }: { apiDomain: string }) => {
  const apiURL = `https://${apiDomain}`;

  return {
    production: true,
    api: {
      fileUploadLimits: {
        maxAvatarSize: 5120000
      },
      url: apiURL,
      allowedDomains: [
        apiDomain
      ],
      disallowedRoutes: [
        apiURL + '/auth/restore-password',
        apiURL + '/auth/forgot-password',
        apiURL + '/auth/token/check',
        apiURL + '/login'
      ]
    },
    language: {
      available: ['en'],
      default: 'en'
    },
    sentry: {
      dsn: 'https://89b8956957ad4e5c800e036c4c5ed9c2@sentry.ronasit.com/121'
    }
  };
};
