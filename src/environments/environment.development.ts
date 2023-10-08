export const environment = {
  production: 'development',
  auth0: {
    domain: 'dev-wohn3vi7elsj4682.us.auth0.com',
    clientId: '23LWnq8CJzgZBmG50a4i4vx9urY1S7qC',
    authorizationParams: {
      audience: 'https://algo-wars.core.com',
      redirect_uri: 'http://localhost:4040/callback',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: 'http://localhost:6060',
  },
};
