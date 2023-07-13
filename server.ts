import 'zone.js/dist/zone-node';

import { APP_BASE_HREF } from '@angular/common';
import {LOCALE_ID} from '@angular/core';
import '@angular/localize/init';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';


import { existsSync } from 'fs';

import { AppServerModule } from './src/main.server';
import * as path from 'path';
import {join} from 'path';
import {SERVER_PROFILE} from '@core/state-transfer-factory';



// The Express app is exported so that it can be used by serverless Functions.
// export const USER_PROFILE = new InjectionToken<object>('user data');
// export const JWT_ID = new InjectionToken<string>('myToken');
export function app(language, distFolder): express.Express {
  const server = express();
  const indexHtml = existsSync(path.join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';


  server.engine('html',
    ngExpressEngine({
      bootstrap: AppServerModule,
      providers: [{provide: LOCALE_ID, useValue: language}, {provide: SERVER_PROFILE, useValue: {jwt: 'ds345345erejjgf'}}],
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);
  // server.use(express.static(distFolder));

  server.get('/restricted.html', (req, res) => {
    console.log('restricted.html');
    return res.sendFile(path.join(process.cwd(), `dist/TradeMF/browser/en-US/restricted.html`));
  });
  server.get('/', (req, res) => {
    console.log(language, `-#######HOME_____baseUrl`, req.baseUrl, `-#######_____Url`, req.url);
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }, {provide: SERVER_PROFILE, useValue: {jwt: '022223333444444'}}] });
  });
  server.get('*.html', (req, res) => {
    console.log(language, `-#######*html_____baseUrl`, req.baseUrl, `-#######_____Url`, req.url);
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }, {provide: SERVER_PROFILE, useValue: {jwt: '0022223333444444'}}] });
  });


  server.get('*', (req, res) => {
    return res.sendFile(path.join(process.cwd(), `dist/TradeMF/browser/en-US`, req.url));
  });


  console.log(`_____require server for language ${language}`);
  return server;
}

function run(): void {
  const distFolder = join(process.cwd(), 'dist/TradeMF/browser/en-US');
  const server = app('en-US', distFolder);
  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port} `);
  });
}
// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
