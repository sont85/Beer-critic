var $;

define(function() {
  'use strict';
  var $wrap = $('#beerContainer');


  function buildSearch(beerArray) {
    var html = beerArray.map(function(item){
      var $beerLabel = $('<img>').attr('src', item.beer.beer_label);
      var $beerName = $('<h4>').text(item.beer.beer_name).addClass('beer-name');
      var $beerStyle = $('<h5>').text('Style: '+item.beer.beer_style);
      var $brewery = $('<h5>').text(item.brewery.brewery_name);
      var $beerListing = $('<div>').data('bid',item.beer.bid).addClass('col-xs-3 beer-div');
      $beerListing.append($beerLabel).append($beerName).append($brewery).append($beerStyle);
      return $beerListing;
    });
    console.log(html);
    $wrap.append(html);
  }
  function buildInfo() {
  }



  return {
    buildSearch: buildSearch,
    buildInfo: buildInfo,
  };
});
