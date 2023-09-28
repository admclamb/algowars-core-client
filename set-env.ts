const { writeFile, access, mkdir } = require('fs').promises;
const { promisify } = require('util');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const writeFilePromisified = promisify(writeFile);

const environment = process.env['ENVIRONMENT'];

const targetDir = path.join(__dirname, 'src/environments');
const targetPath = path.join(
  targetDir,
  `environment${environment ? `.${environment}` : ''}.ts`
);

const defaultTargetPath = path.join(targetDir, 'environment.ts');

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
    await access(defaultTargetPath);
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      // Directory or file does not exist, create the directory
      await mkdir(targetDir, { recursive: true });
      // Write the environment file to defaultTargetPath
      await writeFilePromisified(defaultTargetPath, envConfigFile);
      console.log(`File "${defaultTargetPath}" created successfully.`);
    } else {
      console.error(err);
      throw err;
    }
  }

  try {
    await access(targetPath);
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      // File does not exist, create the file
      await writeFilePromisified(targetPath, envConfigFile);
      console.log(`File "${targetPath}" created successfully.`);
    } else {
      console.error(err);
      throw err;
    }
  }
})();
