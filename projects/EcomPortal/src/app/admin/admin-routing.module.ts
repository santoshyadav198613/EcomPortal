import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../common/guard/auth.guard';
import { AdminGuard } from './guard/admin.guard';
import { CategoryComponent } from './category/category.component';
import { AdminProductComponent } from './admin-product/admin-product.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'category', component: CategoryComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'product', component: AdminProductComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'orders', component: CategoryComponent, canActivate: [AuthGuard, AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
