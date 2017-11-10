// const texte = $(".text");

// jQuery(window).load(function(){
//     texte.addClass('showing');
// });


$(document).ready(function(){
	let text = $("#text")
	$('#navmenu').click(function(){
		$(this).toggleClass('open');
	});
		text.animate({opacity:1}, 1500)
		
	});
	
	$.fn.characterize = function (wrapper, options) {
		var txt = this.text(),
			self = this;
	  
		this.empty();
		
		wrapper = wrapper || '<span />';
		options = options || {};
	  
		Array.prototype.forEach.call(txt, function (c) {
		  options.text = c;
		  self.append($(wrapper, options));
		});
	  };
	  
	  
	  function animate () {
		let become = $("#become");
	  
		become.characterize('<span />', {
		  class: 'fd',
		  css: {
			opacity: 0
		  }
		});
		
		become.css('opacity', 1);
	  
		$('.fd').each(function (i) {
		  $(this).animate({opacity: 1}, (i + 1) * 200);
		});
	  }
	  
	  
	  animate();



	let dropcont = $(".dropdown-content")
	function dropdown(){
		dropcont.toggleClass("dropdownopen")
	}

	  let dropbtn = $(".dropbtn")
		dropbtn.click(dropdown)
		











