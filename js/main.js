var $;
require(['dom', 'untappd'], function(dom, untappd) {
  'use strict';
  $(document).ready(function(){
    function init() {
      var $searchInput = $('#searchInput');

      $('#searchBtn').on('click', function() {
        event.preventDefault();
        var beerName = $searchInput.val();
        $searchInput.val('');
        untappd.search(beerName, function(data){
          if (data.response.beers.count) {
            dom.buildSearch(data.response.beers.items);
          } else {
            $('#searchInput').popover('show');
          }
        });
      });

      $('#beerContainer').on('click','.beer-div', function() {
        $('#searchInput').popover('hide');
        var beerId = $(this).data('bid');
        untappd.info(beerId, function(data){
          dom.buildInfo(data.response.beer);
        });
      });
    }
    init();
    new WOW().init();
    $('header .wow').removeClass('wow slideInLeft');
  });
});
