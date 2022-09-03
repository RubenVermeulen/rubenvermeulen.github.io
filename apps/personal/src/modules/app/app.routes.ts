import {Route, RouterModule} from "@angular/router";
import {HomeViewComponent} from "./views/home/home-view.component";

const routes: Route[] = [
  {
    path: '',
    component: HomeViewComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export const appRoutes = RouterModule.forRoot(routes);
