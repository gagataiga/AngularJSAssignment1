(function () {
  "use strict";
  angular.module("LunchCheck", [])
    .controller("LunchCheckContoroller", LunchCheckContoroller);

  LunchCheckContoroller.$inject = ['$scope'];

  function LunchCheckContoroller($scope) { 
    $scope.textArea = "list comma separated dishes you usually have for lunch";
    // lunch items
    $scope.items = "";
    // message 
    $scope.meg = "";
    
    $scope.lunchDishCountCheck = function () { 
      // avoid empty string like that ",," 
      // it won't avoid it if user enter like this ",  ," 
      let lunchItems = $scope.items.split(",").filter(item => item.length != 0);

      if ($scope.items.length == 0) {
        $scope.meg = "Oops it is empty. Please enter dishes you usually have for lunch";
      } else if (lunchItems.length <= 3) {
        $scope.meg = "Enjoy!";
      } else { 
        // 
        $scope.meg = "Too much !";
      }

    }
  }
  
}());