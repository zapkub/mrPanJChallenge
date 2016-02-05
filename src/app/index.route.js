export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      resolve:{
        trips :(inspirations,$log,progressBar)=>{
          progressBar.start();
          return inspirations.get().$promise;
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}

export class ProgressBarService{

  constructor (ngProgressFactory){
    'ngInject';
    this.bar = ngProgressFactory.createInstance();
    this.bar.setColor('#1eb6e7');
  }
  start (){
    console.log('start')
    this.bar.start();
  }
  success(){
    this.bar.complete();
  }
}
