require(['dom', 'untappd'], function(dom, untappd) {
  'use strict';
  $(document).ready(function(){
    var $searchInput = $('#searchInput');
    var $searchBtn = $('#searchBtn');

    function init() {
      $searchBtn.click(function() {
        var beerName = $searchInput.val();
        var searchResult = untappd.search(beerName, function(data){
          console.log(data.response.beers);
          dom.buildSearch(data.response.beers);
        });
      });
    }
    init();
  });
});
