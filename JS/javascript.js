let $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  getSortData: {
    nombre: '.nombre',
   /* simbolo: '.simbolo',
    numero: '.numero parseInt',
    category: '[data-category]',
    peso: function( itemElem ) {
      var peso = $( itemElem ).find('.peso').text();
      return parseFloat( peso.replace( /[\(\)]/g, '') );
    }*/
  }
});



// filtros
let filterFns = {
  // muestra el nombre si acaba en -ium
  cadenaIum: function() {
    let nombre = $(this).find('.nombre').text();
    console.log(nombre);
    return nombre.match( /ium$/ );
  }

  
};

//Enlaza el click con los filtros a través del atributo data-filter
$('#filtros').on( 'click', 'button', function() {
  let filterValue = $( this ).attr('data-filter');
  console.log(filterValue);
  // usa filterFn si coincide con el valor
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});





  
