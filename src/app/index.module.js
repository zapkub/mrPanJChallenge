/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import {inspirationsTripsResourceFactoryLongNameForMypleasure} from './main/main.controller';
import {headerDirectiveForThisChallengeIReallyLoveAngularJSSuchALongName555} from './components/header/header.directive.js';

angular.module('mrPanJchallenge', ['ngAnimate', 'ngTouch', 'ngSanitize','ngProgress', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr','ngProgress'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .factory('inspirations',inspirationsTripsResourceFactoryLongNameForMypleasure)
  .directive('header',headerDirectiveForThisChallengeIReallyLoveAngularJSSuchALongName555)
  .controller('MainController', MainController)
