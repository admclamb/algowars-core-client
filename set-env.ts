const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const environment = process.env['ENVIRONMENT'];
console.log('ENVIROMENT: ', environment);

const targetDir = path.join(__dirname, 'src/environments');
const targetPath = path.join(
  targetDir,
  `environment${
    environment
      ? environment === 'production'
        ? `.${environment.slice(0, 4)}`
        : `.${environment}`
      : ''
  }.ts`
);

const defaultTargetPath = path.join(targetDir, 'environment.ts');

const envConfigFile = `export const environment = {
  production: '${process.env['ENVIRONMENT']}',
  auth0: {
    domain: '${process.env['AUTH0_DOMAIN']}',
    clientId: '${process.env['AUTH0_CLIENT_ID']}',
    authorizationParams: {
      audience: '${process.env['AUTH0_AUDIENCE']}',
      redirect_uri: '${process.env['AUTH0_CALLBACK_URL']}',
    },
    errorPath: '/callback',
  },
  api: {
    serverUrl: '${process.env['API_SERVER_URL']}',
  },
};
`;
console.log(
  'T: ',
  targetPath,
  'ENV: ',
  envConfigFile,
  'TARGET: ',
  defaultTargetPath
);
if (fs.existsSync(targetPath)) {
  fs.writeFileSync(targetPath, envConfigFile);
} else {
  fs.writeFile(targetPath, envConfigFile, (err: unknown) => {});
}
if (fs.existsSync(defaultTargetPath)) {
  fs.writeFileSync(defaultTargetPath, envConfigFile);
} else {
  fs.writeFile(defaultTargetPath, envConfigFile, (err: unknown) => {});
}
