(function() {
    'use strict';
    angular.module("app").controller("videogamesCtrl", function($scope, $http) {
        $scope.setup = function() {
            $http.get("/api/v1/videogames.json").then(function(response) {
                $scope.videogames = response.data;
            }, function(error) {
                console.log("sad path");
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
            }, function(error) {
                $scope.errors = error.data.errors;
            });
        }

        $scope.deleteVideogame = function(videogame) {

            var videogameId = videogame.id;
            

            $http.delete("/api/v1/videogames/"+videogameId).then(function(response) {
                var videogameIndex = $scope.videogames.indexOf(videogame);
                $scope.videogames.splice(videogameIndex,1);
            }, function(error) {
                $scope.deleteErrors = error.data.errors;
            });
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

        $scope.toggleByAttribute = function(attribute) {
            if (attribute == $scope.orderAttribute) {
                $scope.descending = !$scope.descending
            } else {
                $scope.orderAttribute = attribute;
            }
        }
    });
})();