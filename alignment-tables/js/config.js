$(document).ready(function() {

	// Expand / Collapse
	
	// Expandable notes
	$('.expander').bind("click", function() {
		$(this).parent().next('.expandable').slideToggle(400).removeClass("hidden");
		//$(this).parent().parent().find('.expandable').slideToggle(400).removeClass("hidden");
		// $("i", this).toggleClass("fa-caret-down fa-caret-right");
		return false;
	});
	
	
	// Expandable row info (folio:line)
	$('.expander-row').bind("click", function() {
		$(this).parent().parent().parent().find('.expandable-row').slideToggle(400).removeClass("hidden");
		// $("i", this).toggleClass("fa-caret-down fa-caret-right");
		return false;
	});
	
	
});
