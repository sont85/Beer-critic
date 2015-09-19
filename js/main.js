var $;
require(['dom', 'untappd'], function(dom, untappd) {
  'use strict';
  $(document).ready(function(){
    init();
    new WOW().init();
    function init() {
      var $searchInput = $('#searchInput');
      var $searchBtn = $('#searchBtn');
      var $beerContainer = $('#beerContainer');
      $searchBtn.click(function() {
        var beerName = $searchInput.val();
        var searchResult = untappd.search(beerName, function(data){
          console.log(data);
          dom.buildSearch(data.response.beers.items);
        });
      });
      $beerContainer.on('click','.beer-div', function() {
        console.log($(this).data('bid'));
      });
    }
  });
});
