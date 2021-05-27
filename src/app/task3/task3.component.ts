import { Component, OnInit } from '@angular/core';
import { Map } from 'ol';
import * as CustomOLStyles from '@shared/ol-styles';
import VectorLayer from 'ol/layer/Vector';
@Component({
  selector: 'task3',
  templateUrl: './task3.component.html',
})
export class Task3Component {
  public onMapReady(map: Map) {
    (map.getLayers().getArray()[1] as VectorLayer).setStyle(CustomOLStyles.filterAtLeastOneDeceasedPersonStyle);
  }
}
