import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { forkJoin } from 'rxjs';

const routes = {
  gravesData: (graveID: string) => environment.baseUrl + 'grab?friedhofId=' + graveID,
  gravesPlotData: (graveID: string) => environment.baseUrl + 'grabstelle?friedhofId=' + graveID,
  allGraveYards: environment.baseUrl + 'friedhof',
};

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {}

  getAllGraveYards() {
    return this.httpClient.get(routes.allGraveYards);
  }

  getAllGravesFromGraveyards(allGraveYards: any[]) {
    const observables = allGraveYards.map((graveyard) => {
      return this.httpClient.get(routes.gravesPlotData(graveyard.friedhofId));
    });
    return forkJoin(observables);
  }

  getUnassignedGraves(graves: any) {
    return graves.features.filter((gravePlot: any) => gravePlot.properties.verstorbene.length === 0);
  }
}
