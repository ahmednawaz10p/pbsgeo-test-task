import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LoaderComponent, MapComponent],
  exports: [LoaderComponent, MapComponent],
})
export class SharedModule {}
