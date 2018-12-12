/**
 * @file App routes 模块
 * @module app/app-routes
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard' }
];

export const RoutingModule = RouterModule.forRoot(routes, { useHash: false });
