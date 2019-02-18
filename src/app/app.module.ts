import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainMenuComponent} from './component/main-menu/main-menu.component';
import {SubMenuComponent} from './component/sub-menu/sub-menu.component';

import {
  MatIconModule
} from '@angular/material';
import {MainContentComponent} from './component/main-content/main-content.component';
import {StorageService} from './services/storage-service.service';

@NgModule({
  exports: [
    MatIconModule
  ],
  declarations: [
    AppComponent,
    MainMenuComponent,
    SubMenuComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [ StorageService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
