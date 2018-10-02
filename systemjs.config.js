var version = '4.0.0';

System.config({<TEX>\bfs</TEX>
  transpiler: 'ts',<TEX>\bfe</TEX>
  typescriptOptions: {
    'experimentalDecorators': true
  },
  packages: {
    app: { defaultExtension: 'ts' },
    rxjs: { }
  },
  meta: {<TEX>\bfs</TEX>
    'typescript': { 'exports': 'ts' }<TEX>\bfe</TEX>
  },
  paths: { 'npm:': '<TEX>\bfs</TEX>https://unpkg.com/<TEX>\bfe</TEX>' },
  map: {
    '@angular/common': 'npm:@angular/common@' + version + '/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@' + version + '/bundles/compiler.umd.js',
    '@angular/core': 'npm:@angular/core@' + version + '/bundles/core.umd.js',
    '@angular/forms': 'npm:@angular/forms@' + version + '/bundles/forms.umd.js',
    '@angular/http': 'npm:@angular/http@' + version + '/bundles/http.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@' + version + '/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@' + version + '/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'npm:@angular/router@' + version + '/bundles/router.umd.js',
    'rxjs': 'npm:rxjs',
    'ts': 'npm:plugin-typescript/lib/plugin.js',
    'typescript': 'npm:typescript/lib/typescript.js'
  }
});
