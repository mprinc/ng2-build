import {PORT, APP_DEST} from '../config';
// Live CSS Reload &amp; Browser Syncing
// https://www.npmjs.com/package/browser-sync
import * as browserSync from 'browser-sync';

let runServer = () => {
  let routes:any = {
    [`/${APP_DEST}`]: APP_DEST,
    '/node_modules': 'node_modules',
    '/bower_components': 'bower_components',
    '/app/images': 'app/images'
  };
  // https://www.browsersync.io/docs/options/
  browserSync({
    middleware: [require('connect-history-api-fallback')()],
    port: PORT,
    startPath: '/',
    server: {
      baseDir: APP_DEST,
    //   directory: true,
    //   index: "index.html",
      routes: routes
    }
  });
};

let listen = () => {
  // if (ENABLE_HOT_LOADING) {
  //   ng2HotLoader.listen({
  //     port: HOT_LOADER_PORT,
  //     processPath: file => {
  //       return file.replace(join(PROJECT_ROOT, APP_SRC), join('dist', 'dev'));
  //     }
  //   });
  // }
  runServer();
};

let changed = files => {
  if (!(files instanceof Array)) {
    files = [files];
  }
  // if (ENABLE_HOT_LOADING) {
  //   ng2HotLoader.onChange(files);
  // } else {
    browserSync.reload(files);
  //}
};

export { listen, changed };
