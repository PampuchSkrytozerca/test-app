import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesListComponent } from './list/movies-list.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesListComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
