import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {PuppyLoveAppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(PuppyLoveAppComponent, [HTTP_PROVIDERS]);
