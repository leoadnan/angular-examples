import {NgModule, ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "app/home/home.component";
import {UsersComponent} from "app/users/users.component";
import {UserComponent} from "app/users/user/user.component";
import {ServersComponent} from "app/servers/servers.component";
import {ServerComponent} from "app/servers/server/server.component";
import {EditServerComponent} from "app/servers/edit-server/edit-server.component";
import {PageNotFoundComponent} from "app/page-not-found/page-not-found.component";
import {AuthGuard} from "app/auth-guard.guard";
import {CanDeactivedGuard} from './servers/edit-server/can-deactived.guard';
import {ErrorPageComponent} from "app/error-page/error-page.component";
import {ServerResolverService} from "app/servers/server/server-resolver.service";

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'users', component: UsersComponent, children: [
    {path: ':id/:name', component: UserComponent}
  ]},
  {path: 'servers', canActivateChild: [AuthGuard], component: ServersComponent, children: [
    {path: ':id', component: ServerComponent, resolve: {server: ServerResolverService}},
    {path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivedGuard]}
  ]},
  // {path: 'not-found', component: PageNotFoundComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {useHash: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
