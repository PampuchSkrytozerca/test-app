import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesListComponent } from './list/movies-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        MoviesRoutingModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [MoviesListComponent]
})
export class MoviesModule { }
