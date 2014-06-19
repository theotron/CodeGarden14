
// CodeGarden app Controllers module - inject services
angular.module('codegarden.controllers', ['codegarden.services'])

// App controller (for abstract route) gets list of days
.controller('AppCtrl', function($scope, Sessions) {
	Sessions.schedule().then(function(days){
		$scope.days = days;
	});
})

// Sessions controler gets list of sessions for a day 
.controller('SessionsCtrl', function($scope, $stateParams, Sessions) {
	Sessions.schedule().then(function(days){
		
		if (!$stateParams.dayId){
			$scope.day = days[0]; // By default show the first day
		} else {
			days.forEach(function(day){
		    	if (day.id == $stateParams.dayId){
		      		$scope.day = day; 
		    	}
			});
		}
	}); 
})

// Session detail controller, loop through the records and find by Id
.controller('SessionCtrl', function($scope, $stateParams, Sessions) {
	Sessions.schedule().then(function(days){
		days.forEach(function(day){
  			day.sessions.forEach(function(session){
		        if (session.id == $stateParams.sessionId){
		          $scope.session = session;            
		        }
  			});
		});
	});
});
