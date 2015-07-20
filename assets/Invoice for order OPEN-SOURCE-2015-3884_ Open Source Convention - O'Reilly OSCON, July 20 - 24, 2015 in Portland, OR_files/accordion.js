/********Accordion Widget***********/
(function($){
 $.fn.accordion = function(options) {
    
  var defaults = {
    containerClass: 'module',
    clickTitle: 'a',
    onClass: 'open',
    offClass: 'closed',
    contentClass: 'content',
    slideTime: 'slow',
    hideAll: false
  };
  
  var options = $.extend(defaults, options);
  
  return $(this).each(function (i) {

    $(this).click(function(e){
//    alert($(this).attr("class"));
      if ($(this).hasClass(options.offClass)) {
        if (options.hideAll) {$(this).parent("."+options.containerClass).siblings("."+options.containerClass).children(options.clickTitle).removeClass(options.onClass).addClass(options.offClass).siblings("."+options.contentClass).hide();}
        $(this).removeClass(options.offClass);
        $(this).addClass(options.onClass);
        $(this).siblings("."+options.contentClass).slideToggle(options.slideTime);
      }
      else if ($(this).hasClass(options.onClass)) {
        $(this).removeClass(options.onClass);
        $(this).addClass(options.offClass);
        $(this).siblings("."+options.contentClass).slideToggle(options.slideTime);
        
      }
      return false;
    });
    
});
};
})(jQuery);
/********Accordion Widget***********/