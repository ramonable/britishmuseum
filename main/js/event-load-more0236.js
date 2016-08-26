/*
 * Seeks `.load-more` elements, on click, they change
 * the `display` of the element specfied in its `data-load-element`
 * attribute.
 */
$('.load-more-hidden').hide();
$('.load-more').css('display', 'inline-block').on('click', function(e){
	var $target, $element, selector;

	e.preventDefault();

	$target = $(e.currentTarget);

	selector = $target.attr('data-load-element');
	if(!selector){
		return;
	}

	$element = $(selector);
	if(!$element){
		return;
	}

	$target.hide();
	$element.show();
});
