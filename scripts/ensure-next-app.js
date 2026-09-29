const fs = require('fs');
const path = require('path');

const root = process.cwd();
const rootApp = path.join(root, 'app');
const srcApp = path.join(root, 'src', 'app');
const srcHome = path.join(srcApp, 'page.tsx');

if (fs.existsSync(rootApp) && fs.existsSync(srcHome)) {
  fs.rmSync(rootApp, { recursive: true, force: true });
  console.log('[SM Associate] Removed stale root app/ directory. Using src/app as the App Router.');
}
