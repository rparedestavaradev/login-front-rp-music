import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { TitleServiceAdapter } from './adapters/title-service-adapter';
import { TitleService } from './core/shared/services/title.service';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"",
    component: LoginComponent
  },
  {
    path: "register",
    loadChildren: () => import('./features/register/register.module').then((m) => m.RegisterModule)
  },
  {
    path: "**",
    loadChildren: () => import('./features/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: TitleServiceAdapter, useClass: TitleService }
  ]
})
export class AppRoutingModule { }
