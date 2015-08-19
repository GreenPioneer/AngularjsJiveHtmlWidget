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

## Dist: Can be plugged right into your html widget in Jive

## Mock: We mock the api call to jive with a simple response.
```bash
	//https://JIVEURLHERE.com/api/core/v3/people/@me
  	var responseJive = "throw 'allowIllegalResourceCall.'; \n" + ' {"name":"Jason"}';
	$httpBackend.whenGET('/v3/people/@me').respond(function (method, url, data) {
	    console.log("jives");
	    return [200, responseJive, {}];
	});
	
```

## Src: In version 0.2.0 of this example we will have gulp place the code for us
```bash
	<script>  
	// Use gulp later in 0.2.0 to place js code here
	</script>  
	
```
 
## Credits
  * <a href="http://www.jasonhumphrey.com">Jason W. Humphrey</a> Creator.
  
 
## Resources

* Visit <a href="http://jsfiddle.net/greenpioneer/bhrywdxd/2/">JS Fiddle</a> Live Look.
* Visit <a href="https://developers.jivesoftware.com/api/v3/cloud/rest/index.html">Jive Rest API</a> for more information.
* Visit <a href="https://community.jivesoftware.com/welcome">Jive Community</a> for more information.