// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('hotelbApp').controller('hotelMainController', ['$scope', '$window', function($scope, $window) {
			$scope.action=0;
	}]);

	angular.module('hotelbApp').directive("hotelReservationForm", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/hotel-reservation-form.html",
			controller:function(){

			},
			controllerAs: 'hotelReservationForm'
		};
	});
})();
