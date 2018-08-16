import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { KeycloakService } from "./app/services/keycloak/keycloak.service";

if (environment.production) {
  enableProdMode();
}

KeycloakService.init()
.then(() => {
  if (KeycloakService.auth.loggedIn) {
    platformBrowserDynamic().bootstrapModule(AppModule);
  } else {
    KeycloakService.init();
  }
})
.catch((e: string) => {
  console.log('Error Logging : ' + e);
});
