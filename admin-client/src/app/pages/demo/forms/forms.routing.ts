/**
 * @file Demo 表单演示路由
 * @module app/page/demo/component/forms/routes
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Routes, RouterModule } from '@angular/router';

import { FormsComponent } from './forms.component';
import { InputsComponent } from './components/inputs/inputs.component';
import { LayoutsComponent } from './components/layouts/layouts.component';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
    children: [
      { path: 'inputs', component: InputsComponent },
      { path: 'layouts', component: LayoutsComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
