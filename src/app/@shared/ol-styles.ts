import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';

export const styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: 'black',
      width: 1,
    }),
    fill: new Fill({
      color: 'rgba(255, 255, 0, 0.1)',
    }),
  }),
  Polygon: new Style({
    stroke: new Stroke({
      color: 'red',
      lineDash: [4],
      width: 3,
    }),
    fill: new Fill({
      color: 'rgba(0, 0, 255, 0.1)',
    }),
  }),
};

export const filterAtLeastOneDeceasedPersonStyle = (feature: any) => {
  if ((feature.values_.verstorbene as Array<any>).length > 0) {
    return styles[feature.getGeometry().getType()];
  }
};

export const filterExpiredGraveStyle = (feature: any) => {
  if (Date.parse(feature.values_.nutzungsfristende) < new Date().valueOf()) {
    return styles[feature.getGeometry().getType()];
  }
};

export const simpleStyle = (feature: any) => {
  return styles[feature.getGeometry().getType()];
};
