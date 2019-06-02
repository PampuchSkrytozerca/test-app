import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordRoutingModule } from './password-routing.module';
import { PasswordComponent } from './password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    imports: [
        CommonModule,
        PasswordRoutingModule,
        MatInputModule,
        MatButtonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [PasswordComponent]
})
export class PasswordModule { }