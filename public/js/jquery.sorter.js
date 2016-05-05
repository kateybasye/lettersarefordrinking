(function ( $ ) {
 
	$.fn.sorter = function(options) {

		var defaults = {
			sorterClass: 'sorter',
			entityClass: 'entity'
		}

		var settings = $.extend({}, defaults, options);

		var table = $(this);
		var sorters = $('.' + settings.sorterClass);
		var entities = $('.' + settings.entityClass);

		table.on('click', '.' + settings.sorterClass, function(){
			var sorter = $(this);
			var sortType = sorter.attr('id');

			if(!sorter.hasClass('ascending') && !sorter.hasClass('descending')){
				$('.ascending').removeClass('ascending');
				$('.descending').removeClass('descending');
				sorter.addClass('ascending');
			}
			else if(sorter.hasClass('ascending')){
				sorter.removeClass('ascending').addClass('descending');
			}
			else if(sorter.hasClass('descending')){
				sorter.removeClass('descending').addClass('ascending');
			}

			// figure out best way to DRY this sort up
			if(sorter.hasClass('ascending')){
				entities.sort(function(a, b){
					var an = $(a).children('.' + sortType).data(sortType);
					var bn = $(b).children('.' + sortType).data(sortType);
					if(an > bn) {
						return 1;
					} else if(an < bn) {
						return -1;
					} else {
						return 0;
					}
					
				});
			}
			else if(sorter.hasClass('descending')){
				entities.sort(function(a, b){
					var an = $(a).children('.' + sortType).data(sortType);
					var bn = $(b).children('.' + sortType).data(sortType);
					if(an > bn) {
							return -1;
					} else if(an < bn) {
							return 1;
					} else {
							return 0;
					}
					
				});
			}

			entities.remove().appendTo(table);

		});

		
		return this;
	};

}( jQuery ));