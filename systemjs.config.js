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
    '@angular/common': 'npm:@angular/common@2.1.0/bundles/common.umd.js',
    '@angular/compiler': 'npm:@angular/compiler@2.1.0/bundles/compiler.umd.js',
    '@angular/core': 'npm:@angular/core@2.1.0/bundles/core.umd.js',
    '@angular/forms': 'npm:@angular/forms@2.1.0/bundles/forms.umd.js',
    '@angular/http': 'npm:@angular/http@2.1.0/bundles/http.umd.js',
    '@angular/platform-browser': 'npm:@angular/platform-browser@2.1.0/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic@2.1.0/bundles/platform-browser-dynamic.umd.js',
    '@angular/router': 'npm:@angular/router@3.1.0/bundles/router.umd.js',
    'rxjs': 'npm:rxjs',
    'ts': 'npm:plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'npm:typescript@2.0.3/lib/typescript.js'
  }
});
