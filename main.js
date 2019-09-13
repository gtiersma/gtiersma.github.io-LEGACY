// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// George Tiersma's portfolio website - main.js
//
// Performs the website's general functionality
//
// This document is property of George Tiersma.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|



(function($)
{

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Executes once the webpage is loaded
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
$(document).ready( function()
{
    // The size of each hexagon used in the dividers
    const HEXAGON_SIZE = $(window).width() / 14.5;
    
    // Create the section divider SVG graphics
    createDivider1(HEXAGON_SIZE);
    createDivider2(HEXAGON_SIZE);
    createDivider3(HEXAGON_SIZE);
    createDivider4(HEXAGON_SIZE);
    
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // Listener for the button's animation for when a cursor is hovered over the button.
    // The reason why the listener is placed on the button's animation as well as the button itself is because the button animation seems to be positioned on top of the button in some instances. Changing its z-index in CSS does not seem to change the order for some reason.
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $("#buttonAnimation, #textButton").hover( function()
    {
        $(this).siblings("button").css("background-color", "#CCFFCC");
        
        $(this).css("border-width", "5px");
        $(this).css("height", "100px");
        $(this).css("opacity", "0");
        $(this).css("top", "-20px");
        $(this).css("width", "60vw");
        
        // The resume button's animated div needs to transition to a slightly different relative position than the other buttons in order to be centered.
        if ($(this).attr("class") === "resumeButton")
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
        
        if ($(this).attr("class") === "resumeButton")
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
// Creates the divider graphic that exists between the "home" and the "about" sections.
//
// hexagonSize -> Number -> The height of each hexagon in the graphic (also one-half of the width)
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function createDivider1(hexagonSize)
{
    // Get the correct divider SVG element
    var svg = $(".divider").eq(0);
    
    svg.css("top", "50vh");
    
    // Covers the SVG element with a background color
    var background = $("<rect/>");
    background.attr("width", svg.width());
    background.attr("height", svg.height());
    background.css("fill", "#FFFFFF");
    
    // A group of hexagons
    var hexagonChunk1 = $("<polygon/>");
    hexagonChunk1.css("fill", "#CCFFCC");
    
    hexagonChunk1.attr("points",
        0 + "," + (hexagonSize * 2) + " " +
        hexagonSize + "," + (hexagonSize * 2) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 2.5) + " " +
        hexagonSize + "," + (hexagonSize * 3) + " " +
        0 + "," + (hexagonSize * 3));
    
    // Another group of hexagons
    var hexagonChunk2 = $("<polygon/>");
    hexagonChunk2.css("fill", "#CCFFCC");
    
    hexagonChunk2.attr("points",
        (hexagonSize * 7.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 4));
    
    var hexagonChunk3 = $("<polygon/>");
    hexagonChunk3.css("fill", "#CCFFCC");
    
    hexagonChunk3.attr("points",
        0 + "," + (hexagonSize * 5) + " " +
        hexagonSize + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 5.5) + " " +
        hexagonSize + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 6.5) + " " +
        hexagonSize + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 7.5) + " " +
        hexagonSize + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 8.5) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 8.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 8.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 8.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 6.5) + " " +
        svg.width() + "," + svg.height() + " " +
        0 + "," + svg.height());
    
    var hexagonChunk4 = $("<polygon/>");
    hexagonChunk4.css("fill", "#FFFFFF");
    
    hexagonChunk4.attr("points",
        (hexagonSize * 6) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 8.5) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 8.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 6.5)
        );
    
    var hexagonChunk5 = $("<polygon/>");
    hexagonChunk5.css("fill", "#FFFFFF");
    
    hexagonChunk5.attr("points",
        (hexagonSize * 10.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 8.5) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 8.5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 8)
        );
    
    svg.append(background, hexagonChunk1, hexagonChunk2, hexagonChunk3, hexagonChunk4, hexagonChunk5);
    // This is necessary for the graphic to be displayed
    svg.html(svg.html());
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Creates the divider graphic that exists between the "about" and the "projects" sections. This method has been left undocumented due to its excessive similarity to "createDivider1". See that method for information.
//
// Although it would be possible to combine these methods into a single method, due to the strong differences between majority of the properties in the vector graphics, it has been decided that doing so will result in an increase of code complexity with little performance gain.
//
// hexagonSize -> Number -> The height of each hexagon in the graphic (also one-half of the width)
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function createDivider2(hexagonSize)
{
    var svg = $(".divider").eq(1);
    
    svg.css("top", "-50vh");
    
    var background = $("<rect/>");
    background.attr("width", svg.width());
    background.attr("height", svg.height());
    background.css("fill", "#CCFFCC");
    
    var hexagonChunk1 = $("<polygon/>");
    hexagonChunk1.css("fill", "#FFFFFF");
    
    hexagonChunk1.attr("points",
        (hexagonSize * 13.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 2));
    
    var hexagonChunk2 = $("<polygon/>");
    hexagonChunk2.css("fill", "#FFFFFF");
    
    hexagonChunk2.attr("points",
        (hexagonSize * 4.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 2) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 2));
    
    var hexagonChunk3 = $("<polygon/>");
    hexagonChunk3.css("fill", "#FFFFFF");
    
    hexagonChunk3.attr("points",
        0 + "," + (hexagonSize * 4) + " " +
        hexagonSize + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 4.5) + " " +
        hexagonSize + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 5.5) + " " +
        hexagonSize + "," + (hexagonSize * 6) + " " +
        0 + "," + (hexagonSize * 6));
    
    var hexagonChunk4 = $("<polygon/>");
    hexagonChunk4.css("fill", "#FFFFFF");
    
    hexagonChunk4.attr("points",
        (hexagonSize * 4.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 5));
    
    var hexagonChunk5 = $("<polygon/>");
    hexagonChunk5.css("fill", "#FFFFFF");
    
    hexagonChunk5.attr("points",
        0 + "," + (hexagonSize * 7) + " " +
        hexagonSize + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 4.5) + " " +
        svg.width() + "," + svg.height() + " " +
        0 + "," + svg.height());
    
    svg.append(background, hexagonChunk1, hexagonChunk2, hexagonChunk3, hexagonChunk4, hexagonChunk5);
    svg.html(svg.html());
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Creates the divider graphic that exists between the "projects" and the "skills" sections. This method has been left undocumented due to its excessive similarity to "createDivider1". See that method for information.
//
// hexagonSize -> Number -> The height of each hexagon in the graphic (also one-half of the width)
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function createDivider3(hexagonSize)
{
    var svg = $(".divider").eq(2);
    
    svg.css("top", "-50vh");
    
    var background = $("<rect/>");
    background.attr("width", svg.width());
    background.attr("height", svg.height());
    background.css("fill", "#FFFFFF");
    
    var hexagonChunk1 = $("<polygon/>");
    hexagonChunk1.css("fill", "#EEEEEE");
    
    hexagonChunk1.attr("points",
        (hexagonSize * 7.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 2) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 2));
    
    var hexagonChunk2 = $("<polygon/>");
    hexagonChunk2.css("fill", "#EEEEEE");
    
    hexagonChunk2.attr("points",
        (hexagonSize * 10.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 2) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 2));
    
    var hexagonChunk3 = $("<polygon/>");
    hexagonChunk3.css("fill", "#EEEEEE");
    
    hexagonChunk3.attr("points",
        0 + "," + (hexagonSize * 3) + " " +
        hexagonSize + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 4.5) + " " +
        hexagonSize + "," + (hexagonSize * 4) + " " +
        0 + "," + (hexagonSize * 4));
    
    var hexagonChunk4 = $("<polygon/>");
    hexagonChunk4.css("fill", "#EEEEEE");
    
    hexagonChunk4.attr("points",
        (hexagonSize * 7.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 4));
    
    var hexagonChunk5 = $("<polygon/>");
    hexagonChunk5.css("fill", "#EEEEEE");
    
    hexagonChunk5.attr("points",
        0 + "," + (hexagonSize * 6) + " " +
        hexagonSize + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 4.5) + " " +
        svg.width() + "," + svg.height() + " " +
        0 + "," + svg.height());
    
    var hexagonChunk6 = $("<polygon/>");
    hexagonChunk6.css("fill", "#FFFFFF");
    
    hexagonChunk6.attr("points",
        (hexagonSize * 12) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 8) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 7.5));
    
    svg.append(background, hexagonChunk1, hexagonChunk2, hexagonChunk3, hexagonChunk4, hexagonChunk5, hexagonChunk6);
    svg.html(svg.html());
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Creates the divider graphic that exists between the "skills" and the footer sections. This method has been left undocumented due to its excessive similarity to "createDivider1". See that method for information.
//
// hexagonSize -> Number -> The height of each hexagon in the graphic (also one-half of the width)
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function createDivider4(hexagonSize)
{
    var svg = $(".divider").eq(3);
    
    svg.css("top", "-75vh");
    
    var background = $("<rect/>");
    background.attr("width", svg.width());
    background.attr("height", svg.height());
    background.css("fill", "#EEEEEE");
    
    var hexagonChunk1 = $("<polygon/>");
    hexagonChunk1.css("fill", "#005500");
    
    hexagonChunk1.attr("points",
        (hexagonSize * 1.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 2) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 4.5) + " " +
        hexagonSize + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 3.5) + " " +
        hexagonSize + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 2.5) + " " +
        hexagonSize + "," + (hexagonSize * 2));
    
    var hexagonChunk2 = $("<polygon/>");
    hexagonChunk2.css("fill", "#005500");
    
    hexagonChunk2.attr("points",
        (hexagonSize * 6) + "," + hexagonSize + " " +
        (hexagonSize * 7) + "," + hexagonSize + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 1.5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 2) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 2) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 1.5));
    
    var hexagonChunk3 = $("<polygon/>");
    hexagonChunk3.css("fill", "#005500");
    
    hexagonChunk3.attr("points",
        0 + "," + (hexagonSize * 6) + " " +
        hexagonSize + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 1.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 2.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 3) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 7) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 7.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 8.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 9) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 6) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 5) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 5.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 6.5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 7) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 7.5) + " " +
        (hexagonSize * 14.5) + "," + (hexagonSize * 7.5) + " " +
        svg.width() + "," + svg.height() + " " +
        0 + "," + svg.height());
    
    var hexagonChunk4 = $("<polygon/>");
    hexagonChunk4.css("fill", "#005500");
    
    hexagonChunk4.attr("points",
        (hexagonSize * 10.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 2.5) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 3) + " " +
        (hexagonSize * 13.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 13) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 12) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 11.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 10.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 10) + "," + (hexagonSize * 3));
    
    var hexagonChunk5 = $("<polygon/>");
    hexagonChunk5.css("fill", "#005500");
    
    hexagonChunk5.attr("points",
        (hexagonSize * 4.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 3.5) + " " +
        (hexagonSize * 6) + "," + (hexagonSize * 4) + " " +
        (hexagonSize * 5.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 4.5) + "," + (hexagonSize * 4.5) + " " +
        (hexagonSize * 4) + "," + (hexagonSize * 4));
    
    svg.append(background, hexagonChunk1, hexagonChunk2, hexagonChunk3, hexagonChunk4, hexagonChunk5);
    svg.html(svg.html());
}

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

})(jQuery);