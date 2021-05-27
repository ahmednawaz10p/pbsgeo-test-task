import { Component, OnInit } from '@angular/core';
import { Map } from 'ol';
import * as CustomOLStyles from '@shared/ol-styles';
import VectorLayer from 'ol/layer/Vector';
@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
})
export class Task2Component {
  map: Map;
  infoToggle: boolean = true;
  buttonText: string = 'Show Expired Graves';

  constructor() {}

  toggleInfo() {
    this.infoToggle = !this.infoToggle;
    if (this.infoToggle) {
      this.buttonText = 'Show Expired Graves';
      (this.map.getLayers().getArray()[1] as VectorLayer).setStyle(CustomOLStyles.simpleStyle);
    } else {
      this.buttonText = 'Show All Graves';
      (this.map.getLayers().getArray()[1] as VectorLayer).setStyle(CustomOLStyles.filterExpiredGraveStyle);
    }
  }

  public onMapReady(map: Map) {
    this.map = map;
    (this.map.getLayers().getArray()[1] as VectorLayer).setStyle(CustomOLStyles.simpleStyle);
  }
}
