import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { ExitGuard } from '../guards/exit.guard';
import { LayoutComponent } from './components/layout/layout.component';
import { CategoryComponent } from './pages/category/category.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MyCartComponent } from './pages/my-cart/my-cart.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RecoveryComponent } from './pages/recovery/recovery.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'category',
        loadChildren: () => import('./pages/category/category.module').then((m) => m.CategoryModule),
        data: {
          preload: true
        }
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'my-cart',
        component: MyCartComponent
      },
      {
        path: 'profile',
        canActivate: [ AuthGuard ],
        component: ProfileComponent
      },
      {
        path: 'recovery',
        component: RecoveryComponent
      },
      {
        path: 'register',
        canDeactivate: [ ExitGuard ],
        component: RegisterComponent
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
