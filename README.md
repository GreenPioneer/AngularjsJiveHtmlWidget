# AngularjsJiveHtmlWidget
Angularjs Jive Html Widget
 

## Angularjs: How to get data back from jive ( secret sauce )
```bash
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
```
 
## Credits
  * <a href="http://www.jasonhumphrey.com">Jason W. Humphrey</a> Creator.
  
 
## Resources
* Visit <a href="https://developers.jivesoftware.com/api/v3/cloud/rest/index.html">Jive Rest API</a> for more information.
* Visit <a href="https://community.jivesoftware.com/welcome">Jive Community</a> for more information.