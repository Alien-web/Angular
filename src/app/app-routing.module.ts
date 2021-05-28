import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:"",redirectTo:"login",pathMatch:"full"},
{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent},
{path:"home",component:HomeComponent,canActivate:[AuthGuard]},
{path:"products",loadChildren:()=>import('./product/product.module').then(m=>m.ProductModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
