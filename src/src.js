(function() {  
    'use strict';  
  
  
    angular  
        .module('myApp', ['ngAnimate'])  
        .controller('ControllerJWH', ControllerJWH)  
        .config(config);  
         
    config.$inject = ['$httpProvider'];  
    ControllerJWH.$inject = ['$http'];  
  
  
    /* @ngInject */  
    function ControllerJWH($http) {  
        var vm = this;  
        vm.title = 'ControllerJWH';  
  
  
        activate();  
  
  
        ////////////////  
  
  
        function activate() {  
            $http.get('https://JIVEURLHERE.com/api/core/v3/people/@me')  
                .then(function(result) {  
                    vm.jiveUser = result.data;  
                    console.log(result);  
                }, function(err) {  
                    console.log(err);  
                });  
  
  
        }  
    }  
    function config($httpProvider) {  
        $httpProvider.interceptors.push(function() {  
            return {  
                'request': function(config) {  
                    config.transformResponse.unshift(function(a) {  
                        var split = a.split("\n");  
                        if (a[0] === '{') {  
                            return a;  
                        } else {  
                            return a.split("\n").slice(1).join("\n");  
                        }  
                    });  
                    return config;  
                }  
            };  
        });  
    }  
})();  