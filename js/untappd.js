'use strict';
var $;
define(function(){
  var
  baseUrl = 'https://api.untappd.com/v4/',
  client_id = 'D31F4ABDDA803C84D7F9C23D141D5C21B81A9001',
  client_secret = 'F2FDE3EF56B5371F0E677EA0350755D6073BE49F';
  function search(beerName) {
    $.getJSON(baseUrl + 'search/beer',{
      client_id: client_id,
      client_secret: client_secret,
      q: beerName
    }, function(data){
      console.log(data.response.beers);
      return data.response.beers;
    });
  }

  function info(beerId) {
    $.getJSON(baseUrl + 'beer/info/'+ beerId,{
      client_id: client_id,
      client_secret: client_secret
    }, function(data){
      console.log(data);
      return data.response
    });
  }
  return {
    search: search,
    info: info
  };
});
