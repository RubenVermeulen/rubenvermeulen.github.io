import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import {AppModule} from "../modules/app/app.module";
import {AppViewComponent} from "../modules/app/views/app/app-view.component";

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  bootstrap: [AppViewComponent],
})
export class AppServerModule {}
