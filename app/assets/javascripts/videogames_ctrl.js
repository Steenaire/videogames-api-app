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
                $scope.videogames.push(response.data);
            });
        }

        $scope.deleteVideogame = function(videogameIndex,videogame) {

            var videogameId = videogame.id;

            $scope.videogames.splice(videogameIndex,1);

            $http.delete("/api/v1/videogames/"+videogameId);
        }

        $scope.editVideogame = function(videogame,index,name,releaseDate,gameplay,steenRating,genre) {

            var videogameId = videogame.id;

            var videogameData = {
                name: name,
                release_date: releaseDate,
                gameplay: gameplay,
                steen_rating: steenRating,
                genre: genre,
                id: videogame.id
            };

            $scope.videogames.splice(index,1);
            $scope.videogames.push(videogameData);

            $http.patch("/api/v1/videogames/"+videogameId,videogameData);

        }
    });
})();