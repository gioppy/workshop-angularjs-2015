(function(){
  'use strict';

  angular.module('mario')
    .factory('GamesFactory', GamesFactory);

  GamesFactory.$inject = ['$q', '$http'];

  function GamesFactory($q, $http){
    return {
      all: All
    };

    function All(){
      var deferred = $q.defer();

      $http({
        method: 'GET',
        url: './app-07/shared/resources/games.json',
        cache: true
      }).success(function(response){
        deferred.resolve(response);
      }).error(function(error){
        deferred.reject(error);
      });

      return deferred.promise;
    }
  }
})();
