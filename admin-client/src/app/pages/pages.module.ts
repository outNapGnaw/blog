/**
 * @file 页面模块
 * @module app/page
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { SaModule } from '../sa.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [CommonModule, SaModule, routing],
  declarations: [PagesComponent]
})
export class PagesModule {}
