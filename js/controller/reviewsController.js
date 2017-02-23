
//Angular code
(function (){
	angular.module('escapeRoomApp').controller('reviewsController', ['$scope', '$window', function($scope, $window) {
		//Properties
		$scope.showForm=1;
		$scope.review = new Review();
		$scope.rates = [1,2,3,4,5];
	}]);



	angular.module('escapeRoomApp').directive("reviewsTemplate", function (){
		return {
			restrict: 'E',
			templateUrl:"view/templates/reviews-template.html",
			controller:function(){

			},
			controllerAs: 'reviewsTemplate'
		};
	});
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
