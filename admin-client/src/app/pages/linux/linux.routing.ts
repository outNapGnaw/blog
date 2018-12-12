/**
 * @file 服务器管理页面路由
 * @module app/page/linux/routes
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Routes, RouterModule } from '@angular/router';
import { LinuxComponent } from './linux.component';

const routes: Routes = [
  { path: '', component: LinuxComponent }
];

export const routing = RouterModule.forChild(routes);
