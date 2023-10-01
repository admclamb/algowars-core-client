import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'problems',
    loadChildren: () =>
      import('./features/problems/problems.module').then(
        (m) => m.ProblemsModule
      ),
  },
  {
    path: 'problem/:problemId',
    loadChildren: () =>
      import('./features/problem/problem.module').then((m) => m.ProblemModule),
  },
  {
    path: 'problem/create',
    loadChildren: () =>
      import('./features/create-problem/create-problem.module').then(
        (m) => m.CreateProblemModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
  {
    path: '*',
    loadChildren: () =>
      import('./features/not-found/not-found.module').then(
        (m) => m.NotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
