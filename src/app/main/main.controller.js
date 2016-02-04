export class MainController {
  constructor ($timeout, toastr,trips) {
    'ngInject';
    this.inspirations_layouts = trips.inspiration_layouts;
  }

}

export function inspirationsTripsResourceFactoryLongNameForMypleasure ($resource,$log){
  'ngInject';
  return $resource('https://www.takemetour.com/api/home');
}
