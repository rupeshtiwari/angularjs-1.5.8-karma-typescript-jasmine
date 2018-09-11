export class Directive {
  template: string;
  controller: string;
  controllerAs: string;
  restrict: string;
  constructor() {
    this.template = `
        <div>
            <label id="msg">You have clicked this open button {{vm.counter}} times</label>
            <button id="opener" ng-click="vm.open()">open the dialog</button>
            <div id="dialog" title="Dialog Title">I'm a dialog</div>
        </div>
    `;
    this.controllerAs = 'vm';
    this.restrict = 'E';
    this.controller = 'myController';
  }
}
