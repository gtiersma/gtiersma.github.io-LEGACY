// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// George Tiersma's portfolio website - main.js
//
// Performs the website's general functionality
//
// This document is property of George Tiersma.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
$(document).ready( function()
{
    // Event listeners for the navigation menu links
    $("#navHome").click( function(){ goToElement($("#home")); });
    $("#navAbout").click( function(){ goToElement($("#about")); });
    $("#navProjects").click( function(){ goToElement($("#projects")); });
    $("#navSkills").click( function(){ goToElement($("#skills")); });
});

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Moves the viewport to the given element
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function goToElement(elmnt)
{
    // The height of the navigation menu
    var navHeight = $("#nav").height();
    // The position of the element the viewport is to be moved to
    var position = elmnt.offset().top;
    
    // Scrolls the viewport so that the top of the element is just under the navigation menu
    window.scrollTo(0, position - navHeight);
}