import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { /*TEX:\bfs*/AppModule/*TEX:\bfe*/ } from './app.module';
/*TEX:\bfs*/
const platform = platformBrowserDynamic();/*TEX:\bfe*/
platform.bootstrapModule(/*TEX:\bfs*/AppModule/*TEX:\bfe*/);
