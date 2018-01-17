
$(document).ready(function(){
  $(window).scroll(function(){
   var top = $(window).scrollTop();
   var find_class_small = $.contains('#navbar-main', '.navbar-fixed-top')
   var width = window.innerWidth  || document.documentElement.clientWidth;
 
   if(top > 0 && width < 766 && find_class_small == false) {
    $('#navbar-main').addClass('navbar-fixed-top');
   }
   else {
    $('#navbar-main').removeClass('navbar-fixed-top');
   }
 
  });
});


$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

var affixElement = '#navbar-main';

$(affixElement).affix({
  offset: {
    top: function () {
      return (this.top = $(affixElement).offset().top)
    },
  }
});

$('.thumbnail').click(function(){
    $('.modal-body').empty();
    var title = $(this).parent('a').attr("title");
    $('.modal-title').html(title);
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#myModal').modal({show:true});
});

