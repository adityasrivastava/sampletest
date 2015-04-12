$( function() {
    
  // initialize the isotope.js 
    
  var $container = $('.foodmenu').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
      
      // For animation part
    animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
    },
  
      // For sorting data 
    getSortData: {
        name: '.name',
      type: '.type',
      price: '.price parseInt',
    }
  });


  // For Filter Option when selected from menu 
  $('#filters a').click( function() {
    var filterValue = $( this ).attr('data-filter');
    $container.isotope({ filter: filterValue });
  });

  // For Sort Option when selected from menu
  $('#sorts a').click(function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({ sortBy: sortByValue });
  });
  
  // For reseting the isostope values and checking if in use 
    
  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.click( function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
   
});
