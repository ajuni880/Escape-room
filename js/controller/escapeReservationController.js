// jQuery code
$(document).ready(function () {

});

//Angular code
(function (){
	angular.module('escapeRoomApp').controller('escapeReservationController', ['$scope', '$window', function($scope, $window) {
		//Properties
		$scope.reservation = new reservationObj();
		$scope.reservation.setTotalPrice(50);

		$scope.reservation.setCheckInDate(new Date());
		$scope.reservation.setCheckOutDate(new Date().setDate(new Date().getDate()+1));
		//Scope variables
		$scope.showAction;
		$scope.specialRequests=["Breakfast in the room", "Dinner on the roof ", "Romantic visit of the city"];
		$scope.checkInTime = ["00:00", "01:00","02:00"];
		$scope.checkOutTime = ["00:00", "01:00","02:00"];

		//Date pickers scope variables and functions
		$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
		$scope.format = $scope.formats[0];
		$scope.dateOptions = {
			dateDisabled: disabled,
			formatYear: 'yyyy',
			maxDate: new Date(2020, 5, 22),
			minDate: new Date(),
			startingDay: 1
		};

		$scope.checkInDate = {
			opened: false
		};

		$scope.checkOutDate = {
			opened: false
		};
		$scope.openCheckInDate = function() {
			$scope.checkInDate.opened = true;
		};

		$scope.openCheckOutDate = function() {
			$scope.checkOutDate.opened = true;
		};

		$scope.submit=function(){
			console.log($scope.reservation);
		}
		$scope.validateDates = function(){



		}

	}]);

	// angular.module('hotelbApp').directive("hotelReservationForm", function (){
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl:"view/templates/hotel-reservation-form.html",
	// 		controller:function(){
	//
	// 		},
	// 		controllerAs: 'hotelReservationForm'
	// 	};
	// });
})();


//Own code
/*
	Datepicker functions
*/
// Disable weekend selection
function disabled(data) {
	var date = data.date,
	mode = data.mode;
	return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
}
