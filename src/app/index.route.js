export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main',
      resolve:{
        trips :(inspirations,$log,ngProgressFactory)=>{
          progressbar.start();
          return inspirations.get().$promise;
        }
      }
    });

  $urlRouterProvider.otherwise('/');
}
