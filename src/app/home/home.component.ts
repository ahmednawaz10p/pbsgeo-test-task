import { Component, OnInit } from '@angular/core';
import * as CustomOLStyles from '@app/@shared/ol-styles';
import { Map } from 'ol';
import VectorLayer from 'ol/layer/Vector';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public questionService: QuestionService) {}
  totalGraveYards: number;
  graveYardsInfo: Array<any>;
  ngOnInit() {
    this.questionService.getAllGraveYards().subscribe((data) => {
      this.graveYardsInfo = data as Array<any>;
      this.totalGraveYards = (data as Array<any>).length;
    });
  }
}
