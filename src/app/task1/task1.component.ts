import { Component, OnInit } from '@angular/core';
import { Map } from 'ol';
import * as CustomOLStyles from '@shared/ol-styles';
import VectorLayer from 'ol/layer/Vector';
@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.scss'],
})
export class Task1Component {
  public onMapReady(map: Map) {
    (map.getLayers().getArray()[1] as VectorLayer).setStyle(CustomOLStyles.simpleStyle);
  }
}
