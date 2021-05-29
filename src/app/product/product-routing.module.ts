import { ProductListComponent } from '.././product/product-list/product-list.component';
import { ProductDetailsComponent } from '.././product/product-details/product-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '.././auth.guard';

const routes: Routes = [
{path:"",component:ProductListComponent,canActivate:[AuthGuard]},
{path:":id",component:ProductDetailsComponent,}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }

