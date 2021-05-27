import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { Task2Component } from './task2.component';
import { Task2RoutingModule } from './task2-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, Task2RoutingModule],
  declarations: [Task2Component],
})
export class Task2Module {}
