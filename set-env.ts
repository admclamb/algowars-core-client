const { writeFile, access } = require('fs').promises;
const { promisify } = require('util');
const dotenv = require('dotenv');

dotenv.config();

const writeFilePromisified = promisify(writeFile);

const environment = process.env['ENVIRONMENT'];

const targetPath = `src/environments/environment${
  environment ? `.${environment}` : ''
}.ts`;

const envConfigFile = `export const environment = {
  production: false,
  auth0: {
    domain: '${process.env['AUTH0_DOMAIN']}',
    clientId: '${process.env['AUTH0_CLIENT_ID']}',
    authorizationParams: {
      redirect_uri: '${process.env['AUTH0_CALLBACK_URL']}',
    },
    audience: '${process.env['AUTH0_AUDIENCE']}',
    errorPath: '/callback',
  },
  api: {
    serverUrl: '${process.env['API_SERVER_URL']}',
  },
};
`;

(async () => {
  try {
    await access(targetPath);

    await writeFilePromisified(targetPath, envConfigFile);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      await writeFile(targetPath, envConfigFile, 'utf-8');
      console.log(`File "${targetPath}" created successfully.`);
    } else {
      console.error(err);
      throw err;
    }
  }
})();
