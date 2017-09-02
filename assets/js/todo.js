//Toggle Input
$("#dropInp").on("click", function () {
	$("input").fadeToggle(200)
	$("#dropInp").toggleClass("fa-minus fa-plus")
})

//Add To Dos and empty the input when Enter is pressed
$("input").on("keypress", function (event) {
	if (event.which === 13){
		if ($(this).val().length > 0) {
			$("ul").append(`<li><span class="del"><i class="fa fa-trash" aria-hidden="true"></i></span>${$(this).val()}<span class="checkOff"><i class="fa fa-square-o" aria-hidden="true"></i></span></li>`)
			$(this).val("")
		}		
	}
})

$(document)
	//Check off a To Do
	.on("click", ".checkOff", function () {
		$(this).children().toggleClass("fa-square-o fa-check-square-o")
		$(this).parent().toggleClass("done")
	})	
	//Remove a To Do
	.on("click", ".del", function (event) {
		$(this).parent().fadeOut(500, function(){
			$(this).remove()
		})
		event.stopPropagation()	
	})
	//Edit a To Do
	.on("mouseenter", "li", function (){
		$(this).prop("contentEditable", true)
	})
	.on("mouseleave", "li", function (){
		$(this).prop("contentEditable", false)
	})