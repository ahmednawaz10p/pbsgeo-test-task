import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  NgZone,
  Output,
} from '@angular/core';
import { Map, View } from 'ol';
import { Coordinate } from 'ol/coordinate';
import GeoJSON from 'ol/format/GeoJSON';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import * as olProj from 'ol/proj';
import { register } from 'ol/proj/proj4';
import OSM from 'ol/source/OSM';
import VectorSource from 'ol/source/Vector';
import proj4 from 'proj4';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: [':host { width: 100%; height: 100%; display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapComponent implements AfterViewInit {
  map: Map;
  private projectionName = 'EPSG:25832';
  @Input() center: Coordinate;
  @Input() zoom: number;
  @Input() url: string;
  @Output() mapReady = new EventEmitter<Map>();

  constructor(private zone: NgZone, private cd: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    if (!this.map) {
      this.zone.runOutsideAngular(() => this.initMap());
    }
    setTimeout(() => this.mapReady.emit(this.map));
  }

  private initMap(): void {
    proj4.defs(this.projectionName, '+proj=utm +zone=32 +ellps=GRS80 +units=m +no_defs');
    register(proj4);
    const projection = olProj.get(this.projectionName);

    const vectorSource = new VectorSource({
      format: new GeoJSON(),
      url: this.url,
    });
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });

    this.map = new Map({
      view: new View({
        projection,
        center: this.center,
        zoom: this.zoom,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      target: 'ol-map',
    });
  }
}
