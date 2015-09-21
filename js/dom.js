var $;
define(function() {
  'use strict';
  function carousel() {
    $('.responsive').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });
  }
  var $wrap = $('#beerContainer');
  function buildSearch(beerArray) {
    $wrap.empty();
    var beerHtml = beerArray.map(function(item) {
      var $beerLabel = $('<img>').attr('src', item.beer.beer_label).addClass('center-block');
      var $beerName = $('<h4>').text(item.beer.beer_name).addClass('beer-name');
      var $beerStyle = $('<h5>').text('Style: ' + item.beer.beer_style);
      var $brewery = $('<h5>').text(item.brewery.brewery_name);
      var $beerDiv = $('<div>').data('bid', item.beer.bid).addClass('beer-div');
      $beerDiv.append($beerLabel).append($beerName).append($brewery).append($beerStyle);
      return $beerDiv;
    });
    var $slick = $('<div>').addClass('responsive');
    $slick.append(beerHtml);
    $wrap.append($slick);
    carousel();
  }
  var $beerInfo = $('#beerInfo');

  function buildInfo(beer) {
    $beerInfo.empty();
    var $name = $('<h3>').text(beer.beer_name).addClass('beer-name');
    var $abv = $('<h5>').text('Alcohol Content: ' + beer.beer_abv + '%');
    var $ratingScore = $('<h5>').text('Rating Avg: ' + beer.rating_score.toFixed(2));
    var $ratingCount = $('<h5>').text('Rating Count: ' + beer.rating_count);
    var $description = $('<p>').text(beer.beer_description);
    var $img = $('<img>').attr('src', beer.beer_label);
    $beerInfo.append($img).append($name).append($abv).append($ratingScore).append($ratingCount).append($description);
    $beerInfo.addClass('wow bounceInUp border');
    new WOW().init();
  }

  return {
    buildSearch: buildSearch,
    buildInfo: buildInfo,
  };
});
