import { MODULE_NAME } from './app.module.name';
import * as angular from 'angular';
import 'jquery-ui-bundle';
import * as $ from 'jquery';

describe('directive', function() {
  var element: any;
  var scope: ng.IScope;
  beforeEach(angular.mock.module(MODULE_NAME));
  beforeEach(inject(($rootScope: any, $compile: ng.ICompileService) => {
    // get a new scope
    scope = $rootScope.$new();

    // compile some HTML that uses the directive
    element = $compile('<my-directive></my-directive>')(scope);

    // call digest to update the view!
    scope.$digest();
  }));

  it('has controller', () => {
    expect(element.scope().vm).toBeDefined();
  });

  it('increments counter when you click', function() {
    expect(find('msg').html()).toBe(
      'You have clicked this open button 0 times'
    );

    element.scope().vm.open();

    scope.$digest();

    expect(find('msg').html()).toBe(
      'You have clicked this open button 1 times'
    );
  });

  function find(id: string) {
    return $(`#${id}`, element.html());
  }
});
