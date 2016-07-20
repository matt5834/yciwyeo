'use strict';

(function(){

class MusicComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yciwyeoApp')
  .component('music', {
    templateUrl: 'app/music/music.html',
    controller: MusicComponent,
    controllerAs: 'musicCtrl'
  });

})();
