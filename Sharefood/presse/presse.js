
$(document).ready(function(){
	let text = $("#text")
	$('#navmenu').click(function(){
		$(this).toggleClass('open');
	});
		text.animate({opacity:1}, 1500)
		
	});



	let dropcont = $(".dropdown-content")
	function dropdown(){
		dropcont.toggleClass("dropdownopen")
	}

	  let dropbtn = $(".dropbtn")
	  dropbtn.click(dropdown)