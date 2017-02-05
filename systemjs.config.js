System.config({
  transpiler: 'ts',
  typescriptOptions: {
    'experimentalDecorators': true
  },
  packages: {
    app: { defaultExtension: 'ts' },
    rxjs: { }
  },
  meta: {
    'typescript': { 'exports': 'ts' }
  },
  paths: { 'npm:': 'https://unpkg.com/' },
  map: {
    '@angular/common': 'npm:@angular/common@4.0.0-beta.6/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@4.0.0-beta.6/bundles/compiler.umd.js',
    '@angular/core': 'npm:@angular/core@4.0.0-beta.6/bundles/core.umd.js',
    '@angular/forms': 'npm:@angular/forms@4.0.0-beta.6/bundles/forms.umd.js',
    '@angular/http': 'npm:@angular/http@4.0.0-beta.6/bundles/http.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@4.0.0-beta.6/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@4.0.0-beta.6/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'npm:@angular/router@4.0.0-beta.6/bundles/router.umd.js',
    'rxjs': 'npm:rxjs',
    'ts': 'npm:plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'npm:typescript@2.0.3/lib/typescript.js'
  }
});
