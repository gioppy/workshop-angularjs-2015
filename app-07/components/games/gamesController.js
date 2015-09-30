(function(){
  'use strict';

  angular.module('mario')
    .controller('GamesController', GamesController);

  GamesController.$inject = ['$log', 'GamesFactory'];

  function GamesController($log, GamesFactory){
    var self = this;

    self.games = [];
    self.selectedPoster = null;
    self.showPoster = showPoster;

    GamesFactory.all().then(function(result){
      self.games = result.results;
    }, function(error){
      $log.log(error);
    });

    function showPoster(index){
      self.selectedPoster = self.games[index].image.medium_url
    }
  }
})();
