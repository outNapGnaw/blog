/**
 * @file 页面组件
 * @module app/componnents-page
 * @author outNapGnaw <https://github.com/outNapGnaw>
 */

import { Component, ViewEncapsulation } from '@angular/core';
import { blog } from '@/environments/environment';
import { Blog } from '@app/pages/pages.constants';
@Component({
  selector: 'app-pages',
  encapsulation: ViewEncapsulation.Emulated,
  styles: [],
  template: `
    <sa-sidebar></sa-sidebar>
    <sa-page-top></sa-page-top>
    <div class="al-main">
      <div class="al-content">
        <sa-content-top></sa-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-md-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="{{_blog.host}}">NodePress</a> 2018</div>
        <ul class="al-share clearfix" *ngIf="false">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li>
            <a href="https://github.com/outNapGnaw-china" target="_blank"><i class="socicon socicon-github"></i></a>
          </li>
        </ul>
      </div>
    </footer>
    <sa-back-top position="200"></sa-back-top>
    `
})
export class PagesComponent {

  public _blog: Blog = blog;
  constructor() {}
}
