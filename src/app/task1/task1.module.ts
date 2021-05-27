import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '@app/@shared';
import { Task1RoutingModule } from './task1-routing.module';
import { Task1Component } from './task1.component';

@NgModule({
  imports: [CommonModule, TranslateModule, Task1RoutingModule, SharedModule],
  declarations: [Task1Component],
})
export class Task1Module {}
