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

        $scope.searchVideogames(search) {
            $http.get("/api/v1/videogames.json").then(function(response) {
                $scope.videogames = response.data;
            }
        }

        $scope.toggleByAttribute = function(attribute) {
            if (attribute == $scope.orderAttribute) {
                $scope.descending = !$scope.descending
                if ($scope.descending) {
                    if (attribute == "name") {
                        $scope.nameArrow = "^";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "release_date") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "^";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "gameplay") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "^";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "steen_rating") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "^";
                        $scope.genreArrow = "";
                    } else if (attribute == "genre") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "^";
                    }
                } else {
                    if (attribute == "name") {
                        $scope.nameArrow = "v";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "release_date") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "v";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "gameplay") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "v";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "steen_rating") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "v";
                        $scope.genreArrow = "";
                    } else if (attribute == "genre") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "v";
                    }
                }
            } else {
                $scope.orderAttribute = attribute;
                if ($scope.descending) {
                    if (attribute == "name") {
                        $scope.nameArrow = "^";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "release_date") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "^";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "gameplay") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "^";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "steen_rating") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "^";
                        $scope.genreArrow = "";
                    } else if (attribute == "genre") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "^";
                    }
                } else {
                    if (attribute == "name") {
                        $scope.nameArrow = "v";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "release_date") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "v";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "gameplay") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "v";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "";
                    } else if (attribute == "steen_rating") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "v";
                        $scope.genreArrow = "";
                    } else if (attribute == "genre") {
                        $scope.nameArrow = "";
                        $scope.releaseDateArrow = "";
                        $scope.gameplayArrow = "";
                        $scope.steenRatingArrow = "";
                        $scope.genreArrow = "v";
                    }
                }
            }
        }
    });
})();