$(function(){
	
	$('.portfolio-item-thumbnail-wrap').tooltip();
	
	$("a[rel^='prettyPhoto']").prettyPhoto({
		"theme": "dark_square",
		"social_tools": false
	});

	$('.moreInfo-tgl').click(function(e){
		e.preventDefault();
		var divId = $(this).attr('href');
		var a = $(this);
		$(divId).toggle(function(){
			if ($(this).css('display') == 'none') {
				a.html('More info');
			} else {
				a.html('Less info');
			}
		});
	});
});
