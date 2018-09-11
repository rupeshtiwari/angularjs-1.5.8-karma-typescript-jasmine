import * as $ from 'jquery';

import { Service } from './service';

export class Controller {
  counter = 0;
  constructor(private service: Service) {}

  $onInit() {
    ($('#dialog') as any).dialog({ autoOpen: false });
  }
  public getMessage(): angular.IPromise<string> {
    return this.service.getMessage();
  }
  open() {
    this.counter += 1;
    ($('#dialog') as any).dialog('open');
  }
}
