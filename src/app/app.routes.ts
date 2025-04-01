import { Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

export const routes: Routes = [
  { path: 'child', component: ChildComponent }, // Trang chủ
  { path: 'parent', component: ParentComponent }, // Trang About
];
