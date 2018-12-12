/**
 * @file 公告管理路由
 * @module app/page/annoucement/routes
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Routes, RouterModule } from '@angular/router';
import { AnnouncementComponent } from './announcement.component';

const routes: Routes = [
  { path: '', component: AnnouncementComponent }
];

export const routing = RouterModule.forChild(routes);
