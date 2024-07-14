import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from '../auth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from '../../spinner/spinner.component';


@NgModule({
    declarations: [
        AuthComponent,
        SpinnerComponent
    ],
    exports: [
        AuthComponent,
        SpinnerComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class AuthModule { }
