'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);
		$.get("/project/1", addProjectDetails);
	console.log("https://localhost:3001/project1")
	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(result) {
	var project HTML = '<a href="#" class = "thumbnail">' +
		'<img src="' + result['image'] + '" class="img">' +
		'<p>' + result['title'] + '</p>' +
		'<p><small>' + result['date'] + '</small></p></a>';
	$("#project-container").html(projectHTML);
	$("#project-description").html(result['summary']);
	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log(result);
}

/*
 * Make an AJAX call to retrieve a color palette for the site
 * and apply it
 */
function randomizeColors(e) {
	console.log("User clicked on color button");
}