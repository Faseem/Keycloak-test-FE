import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { KeycloakService } from "./services/keycloak/keycloak.service";
import { KEYCLOAK_HTTP_PROVIDER } from "./services/keycloak/keycloak.http";
import { RestService } from "./services/rest-services/restService";
import { Http } from "@angular/http";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    KEYCLOAK_HTTP_PROVIDER,
    KeycloakService,
    RestService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
