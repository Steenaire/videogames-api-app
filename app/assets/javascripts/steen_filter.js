angular.module("app").filter('steen', [function () {
    return function(videogames) {
        if (videogames) {
            return [videogames[4]];
        }
    }
}]);