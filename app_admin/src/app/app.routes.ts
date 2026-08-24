import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Admin } from './admin/admin';
import { Login } from './login/login';
import { authGuard } from './auth.guard';

export const routes: Routes = [

  {
    path: '',
    component: Home
  },

  {
    path: 'login',
    component: Login
  },

 {
  path: 'admin',
  component: Admin,
  canActivate: [authGuard]
}

];