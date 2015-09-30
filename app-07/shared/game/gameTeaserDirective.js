(function(){
  'use strict';

  angular.module('mario')
    .directive('gameTeaser', GameTeaser);

  function GameTeaser(){
    return {
      restrict: 'E',
      replace: true,
      scope: {
        data: '=data'
      },
      templateUrl: './app-07/shared/game/game-teaser.html'
      //in this example we dont't need to interact with the DOM, so the link function may be unset
      /*link: function(scope, element, attrs){}*/
    }
  }
})();
