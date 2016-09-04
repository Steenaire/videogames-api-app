(function() {
    'use strict';
    angular.module("app").controller("videogamesCtrl", function($scope, $http) {
        $scope.setup = function() {
            $http.get("/api/v1/videogames.json").then(function(response) {
                $scope.videogames = response.data;
            });
        }

        $scope.newVideogame = function(name,releaseDate,gameplay,steenRating,genre) {
            var videogameData = {
                name: name,
                release_date: releaseDate,
                gameplay: gameplay,
                steen_rating: steenRating,
                genre: genre
            };


            $http.post("/api/v1/videogames.json", videogameData).then(function(response) {
                $scope.videogames.push(videogameData);
            });
        }
    });
})();