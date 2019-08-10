// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// George Tiersma's portfolio website - main.js
//
// Performs the website's general functionality
//
// This document is property of George Tiersma.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|



// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Executes once the webpage is loaded
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
$(document).ready( function()
{
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // Listener for the button's animation for when a cursor is hovered over the button.
    // The reason why the listener is placed on the button's animation instead of the button itself is because the button animation always seems to be positioned on top of the button, even when its z-index is changed in CSS.
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $(".buttonAnimation").hover( function()
    {
        $(this).siblings("button").css("background-color", "#CCFFCC");
        
        $(this).css("border-width", "5px");
        $(this).css("height", "100px");
        $(this).css("opacity", "0");
        $(this).css("top", "-20px");
        $(this).css("width", "60vw");
        
        // The resume button's animated div needs to transition to a slightly different relative position than the other buttons in order to be centered.
        if ($(this).attr("id") === "resumeButton")
        {
            $(this).css("left", "20vw");
        }
        else
        {
            $(this).css("left", "10vw");
        }
    },
    function()
    {
        $(this).siblings("button").css("background-color", "#FFFFFF");
        
        $(this).css("border-width", "0");
        $(this).css("height", "60px");
        $(this).css("opacity", "1");
        $(this).css("top", "0");
        $(this).css("width", "30vw");
        
        if ($(this).attr("id") === "resumeButton")
        {
            $(this).css("left", "35vw");
        }
        else
        {
            $(this).css("left", "25vw");
        }
    });
    
    // Event listeners for the navigation menu links
    $("#navHome").click( function(){ goToElement($("#home")); });
    $("#navAbout").click( function(){ goToElement($("#about")); });
    $("#navProjects").click( function(){ goToElement($("#projects")); });
    $("#navSkills").click( function(){ goToElement($("#skills")); });
    
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // Animations for when the navigation's bar is hovered over by the cursor
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $("#nav").hover( function()
    {
        $(this).css("background", "#FFFFFF");
        
        // This helps keep the navigation bar from awkwardly growing and shrinking while the cursor is hovering over the menu options
        $(this).css("height", $(this).height());
    },
    function() 
    {
        $(this).css("background", "#AAFFAAEE");
        
        
        // This helps keep the navigation bar from awkwardly growing and shrinking as well
        $(this).css("height", "auto");
    });
    
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // Animations for when an option in the navigation menu is hovered-over by the cursor. Using a CSS transition property like the other animations does not seem to work, so the jQuery transition method used here is different.
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $("#nav li h5").hover( function()
    {
        $(this).css({border: "0 solid #119911"}).animate
        ({
            borderBottomWidth: 3
        }, 500);
    },
    function() 
    {
        $(this).animate
        ({
            borderBottomWidth: 0
        }, 500);
    });
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
    window.scrollTo({
        top: position - navHeight,
        behavior: "smooth",
    });
}