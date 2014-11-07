/////////////////////////////////////////////////////////////////////
// Services index (shortcut for future inclusions)
/////////////////////////////////////////////////////////////////////
define(["./module", "tools"], function (services, tools) {

    /////////////////////////////////////////////////////////////////////
    services.value("version", "0.1");
    
    /////////////////////////////////////////////////////////////////////
    services.factory("Repositories", ["$http", "$q", "growl", function($http, $q, growl) {
        var repos = {};
        return {
            all: function(username) {
                var deferred = $q.defer();
                if(tools.isEmpty(repos)) {
                    growl.info("Loading repositories from REST");
                    $http.get("https://api.github.com/users/"+username+"/repos").success(function(data, status, headers, config) {
                        growl.success("Repositories loaded from REST");
                        repos = data;
                        deferred.resolve(repos);
                    });
                }
                else {
                    growl.success("Repositories loaded from cache");
                    deferred.resolve(repos);
                }
                return deferred.promise;
            }
        }
    }]);

    /////////////////////////////////////////////////////////////////////
    services.factory("Reddits", ["$http", "$q", "growl", function($http, $q, growl) {
        var reddits = {"next":0, "items":[]};
        return {
            from: function(after) {
                var deferred = $q.defer();
                if(reddits.items.length == 0 || after !== 0) {
                    growl.info("Loading reddits from REST");
                    var newReddits = {"next":0, "items":[]};
                    $http.jsonp("http://api.reddit.com/hot?after=" + after + "&jsonp=JSON_CALLBACK").success(function(data) {
                        var items = data.data.children;
                        var next = "t3_" + items[items.length - 1].data.id;
                        for (var i = 0; i < items.length; i++) {
                            var finalItem = items[i].data;
                            reddits.items.push(finalItem);
                            newReddits.items.push(finalItem);
                        }
                        reddits.next = next;
                        newReddits.next = next;
                        deferred.resolve(newReddits);
                    });
                }
                else {
                    growl.success("Reddits loaded from cache");
                    deferred.resolve(reddits);
                }
                return deferred.promise;
            }
        }
    }]);

    /////////////////////////////////////////////////////////////////////
    // another service
    // if too many, use one file per service

});