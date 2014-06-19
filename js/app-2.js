
// CodeGarden app - kick off new Ionic module - inject controllers
angular.module('codegarden', ['ionic', 'codegarden.controllers'])

// Inject in the UI Router
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    
    // Default route is abstract, i.e. only inherited 
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu-2.html",
      controller: 'AppCtrl'
    })
    
    // Sessions listing
    .state('app.sessions', {
        url: "/sessions/:dayId",
        views: {
            'menuContent': {
                templateUrl: "templates/sessions-2.html",
                controller: 'SessionsCtrl'
            }
        }
    })

    // Individual session
    .state('app.session', {
        url: "/session/:sessionId",
        views: {
            'menuContent': {
                templateUrl: "templates/session-2.html",
                controller: 'SessionCtrl'
            }
        }
    });

  // If no match, use this fallback
  $urlRouterProvider.otherwise('/app/sessions/');
});

