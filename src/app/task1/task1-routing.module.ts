import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { Shell } from '@app/shell/shell.service';
import { Task1Component } from './task1.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'task1', component: Task1Component, data: { title: marker('Task 1') } }]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class Task1RoutingModule {}
