$("document").ready(function(){


	function addTask(){
		var taskText = $("#task").val();
		if (taskText=="") {
			$("#control").html("Please, type in a task you would like to add");
		}else{
			$("#control").html("");
			$("#list").append('<div class="task"><div class="taskCheck"></div>' + taskText + '</div><br>');		
			$("#task").val("");
			$(".taskCheck").click(function(){
				var index = $(".taskCheck").index(this);
				//var task = $(".task")[index];
				console.log("hi");
				console.log(index);
				$(this).addClass("checked");
				$(this).text("V");
 				$(".task")[index].className+=" done";
			});
		}
	}

//	function changeClass(){

//	}

	$("#addStuff").click(addTask);	

})