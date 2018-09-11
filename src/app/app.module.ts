import * as angular from 'angular';
import { Controller } from './controller';
import { Service } from './service';
import { Directive } from './directive';
import { MODULE_NAME } from './app.module.name';

export const moduleName = angular
  .module(MODULE_NAME, [])
  .service('service', Service)
  .controller('myController', Controller)
  .directive('myDirective', [() => new Directive()]).name;
