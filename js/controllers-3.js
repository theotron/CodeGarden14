// Module controllers, inject services
angular.module('codegarden.controllers', ['codegarden.services'])

// App controller (for abstract route) gets list of days
.controller('AppCtrl', function($scope, Sessions, Favs, $rootScope) {
  Sessions.schedule().then(function(days){
    $scope.days = days;
  });

  // Load favourites
  $rootScope.favs = Favs.get();
})

// Sessions controler gets list of sessions for a day 
.controller('SessionsCtrl', function($scope, $stateParams, Sessions, Favs) {  

  // For artificial Id = 0, show favourites
  if ($stateParams.dayId == -1){
      $scope.day = Favs.get();
  }
  // Get sessions for that day
  else {
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
  }
})

// Session detail controller, loop through the records and find by Id
.controller('SessionCtrl', function($scope, $stateParams, Sessions, Favs, $rootScope) {
	 Sessions.schedule().then(function(days){
		days.forEach(function(day){
      day.sessions.forEach(function(session){
        if (session.id == $stateParams.sessionId){
          $scope.session = session;            
        }
      });
  	});
  }); 

  // Add or remove session from favs array
  $scope.toggleFavs = function(){    
    
    var exists = $scope.findFav($scope.session.id),
        favs = Favs.get().sessions;

    if (exists == -1){
        favs.push($scope.session);
    } else {
       favs.splice(exists, 1);
    }
    Favs.save(favs);
    $rootScope.favs = Favs.get();    
  };

  // Find current session in the favourites 
  $scope.findFav = function(){
    var favIndex = -1; // Return -1 if not found
    if ($scope.session){
      Favs.get().sessions.forEach(function(fav, index){
        if (fav.id == $scope.session.id){
          favIndex = index;
        }
      });
    } 
    return favIndex;
  };
});
