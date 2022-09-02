import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppViewComponent } from './views/app/app-view.component';
import {UnderlineModule} from "./directives/link-styled/underline.module";

@NgModule({
  declarations: [AppViewComponent],
    imports: [BrowserModule.withServerTransition({ appId: 'serverApp' }), UnderlineModule],
  providers: [],
  bootstrap: [AppViewComponent],
})
export class AppModule {}
