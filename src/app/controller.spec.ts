import * as angular from 'angular';
import 'angular-mocks';
import { Controller } from './controller';
import { MODULE_NAME } from './app.module.name';

describe('Controller', () => {
  let controller: Controller;
  let mockService: any = {
    getMessage: jasmine.createSpy('getMessage'),
  };

  beforeEach(angular.mock.module(MODULE_NAME));

  beforeEach(inject(($controller: any, $q: any) => {
    controller = $controller('myController', {
      service: mockService,
    });
  }));

  it('should get message from service', () => {
    controller.getMessage();

    expect(mockService.getMessage).toHaveBeenCalled();
  });
});
