// global javascript

// set up any date picker form elements
Date.format = "yyyy-mm-dd";
(function($) {
	$(document).ready(function () {
		$('.date-pick').each(function (){
			var di = $(this);
			$(this).datepicker({
				defaultDate: new Date(),
				dateFormat: "yy-mm-dd"
			});
			if ($(this).hasClass('.date-pick-optional')) {
				$(this).after('<a href="#"><img style="margin-left: 3px;" src="/images/calendar-clear.png" width="16" height="16" alt="Clear date" /></a>');
				$(this).next('a').click(function () { $(di).val(""); return false;});
			}
			$(this).after('<a href="#"><img style="margin-left: 3px;" src="/images/calendar.png" width="16" height="16" alt="Choose date" /></a>');
			$(this).next('a').click(function () { di.datepicker("show"); return false;});
			$(this).css({cursor: 'pointer'});
			$(this).focus(function () {
				$(this).blur();
				$(this).datepicker("show");
			});
		});
	});
})(jQuery);
