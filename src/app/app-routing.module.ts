import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent }      from './users/users.component';
import { TicketsComponent }      from './tickets/tickets.component';
import { AboutComponent }      from './about/about.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'months', component: TicketsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
  declarations: []
})
export class AppRoutingModule { }
