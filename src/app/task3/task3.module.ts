import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@shared';
import { Task3Component } from './task3.component';
import { Task3RoutingModule } from './task3-routing.module';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, Task3RoutingModule],
  declarations: [Task3Component],
})
export class Task3Module {}
