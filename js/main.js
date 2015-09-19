var $;
require(['dom', 'untappd'], function(dom, untappd) {
  'use strict';
  $(document).ready(function(){
    function init() {
      var $searchInput = $('#searchInput');

      $('#searchBtn').on('click', function() {
        var beerName = $searchInput.val();
        $searchInput.val("");
        untappd.search(beerName, function(data){
          console.log(data.response.beers.items);
          dom.buildSearch(data.response.beers.items);
        });
      });

      $('#beerContainer').on('click','.beer-div', function() {
        var beerId = $(this).data('bid');
        untappd.info(beerId, function(data){
          dom.buildInfo(data.response.beer);
        });
      });
    }

    init();
    new WOW().init();
    $('.search').removeClass('wow slideInLeft');
  });
});
