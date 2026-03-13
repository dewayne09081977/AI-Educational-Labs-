==> Cloning from https://github.com/dewayne09081977/AI-Educational-Labs-
==> Checking out commit ad6cc231f64993e54fd1bb973ac95408381e113b in branch main
==> Using Node.js version 22.22.0 (default)
==> Docs on specifying a Node.js version: https://render.com/docs/node-version
==> Running build command 'cd ../client && npm install && npm run build && cd ../server && npm install'...
added 478 packages, and audited 479 packages in 4s
130 packages are looking for funding
  run `npm fund` for details
6 vulnerabilities (3 moderate, 3 high)
To address issues that do not require attention, run:
  npm audit fix
To address all issues (including breaking changes), run:
  npm audit fix --force
Run `npm audit` for details.
> aieducationallabs-client@0.0.0 build
> vite build
vite v5.4.21 building for production...
transforming...
✓ 37 modules transformed.
rendering chunks...
computing gzip size...
dist/registerSW.js               0.13 kB
dist/manifest.webmanifest        0.35 kB
dist/index.html                  0.52 kB │ gzip:  0.33 kB
dist/assets/index-3ZfrXT46.js  165.84 kB │ gzip: 54.08 kB
✓ built in 933ms
PWA v0.19.8
mode      generateSW
precache  5 entries (162.59 KiB)
files generated
  dist/sw.js
  dist/workbox-8c29f6e4.js
added 102 packages, and audited 103 packages in 1s
22 packages are looking for funding
  run `npm fund` for details
found 0 vulnerabilities
==> Uploading build...
==> Uploaded in 4.5s. Compression took 2.9s
==> Build successful 🎉
==> Deploying...
==> Setting WEB_CONCURRENCY=1 by default, based on available CPUs in the instance
==> Running 'node app.js'
Serving frontend from: /client/dist
Server is running on port 10000
Error sending index.html: [Error: ENOENT: no such file or directory, stat '/client/dist/index.html'] {
  errno: -2,
  code: 'ENOENT',
  syscall: 'stat',
  path: '/client/dist/index.html',
Menu
  expose: false,
  statusCode: 404,
  status: 404
}
==> Your service is live 🎉
==> 
==> ///////////////////////////////////////////////////////////
==> 
==> Available at your primary URL https://ai-educational-labs-1.onrender.com + 1 more domain
==> 
==> ///////////////////////////////////////////////////////////
