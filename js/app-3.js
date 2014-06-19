
// CodeGarden app - kick off new Ionic module - inject controllers
angular.module('codegarden', ['ionic', 'codegarden.controllers'])

// Inject in the UI Router
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
    // Default route is abstract, i.e. only inherited 
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu-3.html",
      controller: 'AppCtrl'
    })
    
    // Sessions listing
    .state('app.sessions', {
        url: "/sessions/:dayId",
        views: {
            'menuContent': {
                templateUrl: "templates/sessions-3.html",
                controller: 'SessionsCtrl'
            }
        }
    })
    
    // Individual session
    .state('app.session', {
        url: "/session/:sessionId",
        views: {
            'menuContent': {
                templateUrl: "templates/session-3.html",
                controller: 'SessionCtrl'
            }
        }
    });

  // If no match, use this fallback
  $urlRouterProvider.otherwise('/app/sessions/');
})

/* 
  Watch if the device goes offline
  http://stackoverflow.com/questions/16242389/how-to-check-internet-connection-in-angularjs  
*/

.run(function($window, $rootScope) {

      $rootScope.GotoLink = function (url) {
        window.open(url,'_system');
      }

      $rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
          $rootScope.online = false;
        });
      }, false);
      $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
})

/* 
  Override default external link behaviour to open in native browser
  http://forum.ionicframework.com/t/how-to-opening-links-in-content-in-system-browser-instead-of-cordova-browser-wrapper/2427/10 (Last comment)
*/

.directive('a', function () {
    return {
        restrict: 'E',
        link: function (scope, element, attrs) {
            if ( !attrs.href ){
                return;
            }
            var externalRe = new RegExp("^(http|https)://");
            var url = attrs.href;

            if(externalRe.test(url)) {
                element.on('click',function(e){
                    e.preventDefault();
                    if(attrs.ngClick){
                        scope.$eval(attrs.ngClick);
                    }
                    window.open(encodeURI(url), '_system');
                });
            }
        }
    };
})

.directive('compile', ['$compile', function ($compile) {
  return function(scope, element, attrs) {
    scope.$watch(
      function(scope) {
        return scope.$eval(attrs.compile);
      },
      function(value) {
        element.html(value);
        $compile(element.contents())(scope);
      }
   )};
}])