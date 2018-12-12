/**
 * @file 登陆页面模块
 * @module app/page/auth/module
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaModule } from '@/app/sa.module';
import { routing } from './auth.routing';
import { AuthComponent } from './auth.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SaModule,
    routing
  ],
  declarations: [
    AuthComponent
  ]
})
export default class AuthModule {}
