import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:"",redirectTo:"login",pathMatch:"full"},
{path:"login",component:LoginComponent},
{path:"home",component:HomeComponent,canActivate:[AuthGuard]},
{path:"products",component:ProductListComponent,canActivate:[AuthGuard]},
{path:"product-detail/:id",component:ProductDetailsComponent,}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
