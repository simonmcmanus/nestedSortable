/* nestedListSort.js */

//Create global variable for list data
var newOrderData= "";

$(document).ready(function() {
	$("#masterList").sortable({ 
		items: "li",
		helper: 'original',
		placeholder: 'placeholder',
		stop: function(event, ui) { alert('boo'); }
	   
	});	
	
	$("#listSubmit").click(function () {
		//Disable the submit button to prevent a double-click
		$(this).attr("disabled","disabled");
		//Initialize the variable that will contain the data to submit to the form
		newOrderData= "";
		//All direct descendants of the masterList will have a parentId of 0
		var parentId= 0;		
		//Walk through the direct descendants of the masterList <ul>
		$("#masterList").children().each(function () {
			if ($(this).attr("id")){
				/*Build a string of data with the child's ID and parent ID, 
				 using the "|" as a delimiter between the two IDs and the "^" 
				 as a record delimiter (these delimiters were chosen in case the data
				 involved includes more common delimiters like commas within the content)
				*/
				newOrderData= newOrderData + $(this).attr("id") + "|" + "0" + "^";
			 	//Process the child elements of the container
			  	processChildren($(this).attr("id"));
			}		
		}); //end of masterList children loop
		//Write the newOrderData string out to the listResults form element
		$("#listResults").val(newOrderData);
		return false;
	});
});  //end of document.ready event assignment

function processChildren(parentId) {
	//Loop through the children of the UL element defined by the parentId
	var ulParentID= "UL_" + parentId;
	$("#" + ulParentID).children().each(function () {		
		if ($(this).attr("id")){
				/*Build a string of data with the child's ID and parent ID, 
				 using the "|" as a delimiter between the two IDs and the "^" 
				 as a record delimiter (these delimiters were chosen in case the data
				 involved includes more common delimiters like commas within the content)
				*/
				newOrderData= newOrderData + $(this).attr("id") + "|" + parentId + "^";
				//Process the child elements of the container
				processChildren($(this).attr("id"));
		}			
	});  //end of children loop
} //end of processChildren function


