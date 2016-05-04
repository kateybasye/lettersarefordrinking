(function ( $ ) {
 
	$.fn.sorter = function() {
		// headerRow is 'this' because it is what is selected in main.js
		var headerRow = this;

		// on the click of the header row...
		headerRow.on('click', function(){

			// the specific cell that got clicked on
			var headerCell = $(this);

			if(!headerCell.hasClass('ascending') && !headerCell.hasClass('descending')){
				$('.ascending').removeClass('ascending');
				$('.descending').removeClass('descending');
				headerCell.addClass('ascending');
			}
			else if(headerCell.hasClass('ascending')){
				headerCell.removeClass('ascending').addClass('descending');
			}
			else if(headerCell.hasClass('descending')){
				headerCell.removeClass('descending').addClass('ascending');
			}

			// the column that we want to srt
			var sortType = headerCell.attr('id');

			// convert to options/settings later
			var barsWrapper = $('#bar-container')
			var bars = $('tr.bar');

			if(headerCell.hasClass('ascending')){
				bars.sort(function(a, b){
					var an = $(a).children('.' + sortType).data(sortType);
					var bn = $(b).children('.' + sortType).data(sortType);
					console.log('hi')
					if(an > bn) {
						return 1;
					} else if(an < bn) {
						return -1;
					} else {
						return 0;
					}
					
				});
			}
			else if(headerCell.hasClass('descending')){
				bars.sort(function(a, b){
					var an = $(a).children('.' + sortType).data(sortType);
					var bn = $(b).children('.' + sortType).data(sortType);
					console.log('hi')
					if(an > bn) {
							return -1;
					} else if(an < bn) {
							return 1;
					} else {
							return 0;
					}
					
				});
			}

			bars.remove().appendTo(barsWrapper);
		})
		
		return this;
	};

}( jQuery ));