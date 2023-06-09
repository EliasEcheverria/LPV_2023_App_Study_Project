import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'themes',
    loadChildren: () => import('./themes/themes.module').then( m => m.ThemesPageModule)
  },
  {
    path: 'topics',
    loadChildren: () => import('./topics/topics.module').then( m => m.TopicsPageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-theme/view-theme.module').then( m => m.ViewThemePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-theme/view-theme.module').then( m => m.ViewThemePageModule)
  },
  {
    path: 'edit-theme/:id',
    loadChildren: () => import('./edit-theme/edit-theme.module').then( m => m.EditThemePageModule)
  },
  {
    path: 'edit-user/:id',
    loadChildren: () => import('./edit-user/edit-user.module').then( m => m.EditUserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
