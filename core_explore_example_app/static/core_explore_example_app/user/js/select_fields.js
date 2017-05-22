// Save the selected fields
var saveFields = function()
{
    // Need to Set input values explicitly before sending innerHTML for save
    var elements = $("#xsd_form").find("input");
    for(var i = 0; i < elements.length; i++) {
    	// sent attribute to property value
    	elements[i].setAttribute("value", elements[i].checked);
    	if(elements[i].checked == true)
    	{
    		elements[i].setAttribute("checked","checked");
    	}
    }
    $('select option').each(function(){ this.defaultSelected = this.selected; });
    formContent = $("#xsd_form").html();
    save_fields(formContent);
};


/**
 * AJAX call, save the selected fields and redirects to perform search
 * @param formContent
 */
var save_fields = function(formContent){
	$.ajax({
        url : saveFieldsUrl,
        type : "POST",
        dataType: "json",
        data : {
        	formContent : formContent
        },
        success: function(data){
        	window.location = buildQueryUrl;
        }
    });
};

/**
 * Load form into the page
 */
var loadForm = function(){
    // get template id from the page
    var template_id = $("#template_id").html();
    // load the form
    load_form(template_id);
};


/**
 * AJAX call, get the form and loads it into the page
 * @param template_id
 */
var load_form = function(template_id){
	$.ajax({
        url : loadFormUrl,
        type : "POST",
        dataType: "json",
        data : {
        	templateID : template_id
        },
        success: function(data){
            // add form to html
        	$("#xsd_form").html(data.xsd_form);
        	// show save button
        	$("button.save-fields").removeClass("hidden");
        	// hide remove and add buttons
            $(".remove").hide();
            $(".add").hide();
        },
        error: function(data){
            $("#xsd_form").html("An unexpected error occurred while loading the form.");
        }
    });
}

//Load controllers for enter data
$(document).ready(function() {
    $('.btn.save-fields').on('click', saveFields);

    loadForm();
});