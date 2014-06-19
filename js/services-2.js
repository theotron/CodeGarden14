
// CodeGarden app Services module
angular.module('codegarden.services', [])

.factory('Sessions', function($http) {
  
  return {
    
    // The job of the factory is to get us the schedule
    schedule: function(){
      
    // Note: $http.get returns the promise of data, not the data itself 
        return $http
          .get('http://codegarden14.local/umbraco/api/sessionapi/getschedule')
          .then(function(response){
              return response.data;
          });   
      }      
  }
});

