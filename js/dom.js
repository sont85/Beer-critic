var $;
define(function() {
  'use strict';
  var $wrap = $('#beerContainer');
  var $beerInfo = $('#beerInfo');

  function buildSearch(beerArray) {
    $wrap.empty();
    var html = beerArray.map(function(item){
      var $beerLabel = $('<img>').attr('src', item.beer.beer_label);
      var $beerName = $('<h4>').text(item.beer.beer_name).addClass('beer-name');
      var $beerStyle = $('<h5>').text('Style: '+item.beer.beer_style);
      var $brewery = $('<h5>').text(item.brewery.brewery_name);
      var $beerDiv = $('<div>').data('bid', item.beer.bid).addClass('beer-div')
      $beerDiv.append($beerLabel).append($beerName).append($brewery).append($beerStyle);
      return $beerDiv;
    });
    console.log(html);
    $wrap.append(html);
    $('.multiple-items').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3
    });
  }
  function buildInfo(beer) {
    console.log(beer);
    $beerInfo.empty();
    var $name = $('<h4>').text(beer.beer_name);
    var $abv = $('<h4>').text('Alcohol Content: '+beer.beer_abv+'%');
    var $ratingScore = $('<h4>').text('Rating Avg: ' + beer.rating_score);
    var $ratingCount = $('<h4>').text('Rarting Count: ' + beer.rating_count);
    var $description = $('<p>').text(beer.beer_description);
    var $img = $('<img>').attr('src', beer.beer_label);
    $beerInfo.append($img).append($name).append($abv).append($ratingScore).append($ratingCount).append($description);
    $beerInfo.addClass('wow bounceInUp')
    new WOW().init();
    
  }



  return {
    buildSearch: buildSearch,
    buildInfo: buildInfo,
  };
});
