import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppViewComponent} from './views/app/app-view.component';
import {UnderlineModule} from "./directives/link-styled/underline.module";
import {appRoutes} from "./app.routes";
import {HomeViewComponent} from "./views/home/home-view.component";

@NgModule({
  declarations: [AppViewComponent, HomeViewComponent],
  imports: [BrowserModule.withServerTransition({appId: 'serverApp'}), appRoutes, UnderlineModule],
  providers: [],
  bootstrap: [AppViewComponent],
})
export class AppModule {
}
