import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersListComponent } from './components/users-list/users-list.component';


const routes: Routes = [
  { path:'', redirectTo:'authorization', pathMatch:'full'},
  {path:'authorization', component: AuthorizationComponent },
  {path:'user-details', component: UserDetailsComponent},
  {path:'users-list', component: UsersListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
