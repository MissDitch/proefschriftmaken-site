$(document).foundation();

function hoverSecondChild(element) {
	var elementChildren = element.children;
    elementChildren[1].setAttribute('src', 'img/pijl_wit.png');
}
function unhoverSecondChild(element) {
	var elementChildren = element.children;
    elementChildren[1].setAttribute('src', 'img/pijl_blauw.png');
}

function hoverIcoonButton() {
//	$('#instagramIcoon').addClass('oranje');
//	$('#instagramIcoon').('.fa').css('color', '#F16821');
	$('#instagramIcoon').css('color', '#F16821');	
	//var elementChild = element.children;
	//elementChild[0].style.color="F16821";
	//elementChildren[0]('.fa').css('color', '#F16821');
}
function unhoverIcoonButton() {
//		$('#instagramIcoon').removeClass('oranje');
//	$('#instagramIcoon').('.fa').css('color', '#ffffff');
	$('#instagramIcoon').css('color', '#ffffff');
	//var elementChild = element.children;
	//elementChild[0].style.color="ffffff";
   // elementChildren[0]('.fa').css('color', '#ffffff');
}


$(document).ready(function() {
  function checkSize(){
  var rwd_tabs      = $('.responsive-tabs') ;
  var toggl_type    = $('.toggleType') ;
  var tab_wrap      = $('.tab-wrap');
  var tab_title     = $('.tabs-title');
  var active_tab    = $('.tabs .is-active');
 // var window_size = window.matchMedia('(max-width: 39.9375em)'));

  // small only
  if (window.matchMedia('(max-width: 39.9375em)')).matches){
    if ( rwd_tabs.hasClass('tabs-content') ) {
      tab_wrap.css('display', 'none');
      rwd_tabs.removeClass('tabs-content');
      rwd_tabs.addClass('accordion');
      toggl_type.addClass('accordion-item');
      tab_wrap.addClass('accordion-content');
      rwd_tabs.attr('data-accordion');
      toggl_type.removeClass('tabs-panel');
      $('.toggleType.is-active').children('.tab-wrap').css('display', 'block');
    }

    $('.accordion-title').on('click', function() {
      $(this).children('tab-wrap').css('display', 'none');
      var shared_id = $(this).attr('id') ;
      $('.tabs-title.is-active').removeClass('is-active');
      $('ul.tabs li.' + shared_id).addClass('is-active');
      $('.tabs-title.is-active a').attr('aria-selected', 'true');
    })
  }

  // medium
  else {
    if ( rwd_tabs.hasClass('accordion') ) {
      rwd_tabs.removeAttr('data-accordion');
      rwd_tabs.removeClass('accordion');
      tab_wrap.removeClass('accordion-content');
      toggl_type.removeClass('accordion-item');
      rwd_tabs.addClass('tabs-content');
      toggl_type.addClass('tabs-panel');
      tab_wrap.css('display', '');
    }
  }
}
  $(window).resize(checkSize);
});


