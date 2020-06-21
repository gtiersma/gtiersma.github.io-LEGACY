// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// George Tiersma's portfolio website - main.js
//
// Performs the website's general functionality
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|



(function($)
{
    // As long as IE and Edge is not being used...
    if (!(document.documentMode || /Edge/.test(navigator.userAgent) || /Edg/.test(navigator.userAgent)))
    {

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Executes once the webpage is loaded
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
$(document).ready( function()
{
    // The width of the window when the webpage is initially loaded
    const INITIAL_VIEWPORT_WIDTH = $(window).width();
    
    // How far each divider's position should be translated in vh
    var dividerTops = [20, -30, -30, -50];
    
    // Create the section divider SVG graphics
    createDivider1();
    createDivider2();
    createDivider3();
    createDivider4();
    
    // Remove unnecessary href attributes
    removeNavHref();
    
    // Animate occupation title
    $(".animatedOccupation").css("letter-spacing", "8px");
    $(".animatedOccupation").css("opacity", "1");
    
    var dividers = $(".divider");
    // Each polygon used in each divider
    var dividerShapes = dividers.children();
    
    adjustWindow(dividerShapes, dividers, dividerTops, INITIAL_VIEWPORT_WIDTH);
    
    
    

    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // EVENT LISTENERS (sorted by class/ID name)
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // Animates a standard button when hovered upon.
    // The reason why the listener is placed on the button's animation as well as the button itself is because the button animation seems to be positioned on top of the button in some instances. Changing its z-index in CSS does not seem to change the order for some reason.
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $(".buttonAnimation, .textButton").hover( function()
    {
        $(this).siblings("button").css("background-color", "#CFC");
        
        $(this).css("border-width", "5px");
        $(this).css("height", "100px");
        $(this).css("opacity", "0");
        $(this).css("top", "-20px");
        $(this).css("width", "60vw");
        
        // The resume button's animated div needs to transition to a slightly different relative position than the other buttons in order to be centered.
        if ($(this).hasClass("resumeButton"))
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
        $(this).siblings("button").css("background-color", "#FFF");
        
        $(this).css("border-width", "0");
        $(this).css("height", "60px");
        $(this).css("opacity", "1");
        $(this).css("top", "0");
        $(this).css("width", "30vw");
        
        if ($(this).hasClass("resumeButton"))
        {
            $(this).css("left", "35vw");
        }
        else
        {
            $(this).css("left", "25vw");
        }
    });
    
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // Scrolls the viewport to the correct section when the user uses the tab key to focus an option on the navigation menu and then presses the enter key to select it.
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $(document).keypress( function()
    {
        // If the enter key has been pressed...
        if (event.keyCode == 13)
        {
            // ...and the tab focus is on a navigation menu element...
            if ($(document.activeElement).attr("id") === "navHome")
            {
                // ...go to that section.
                goToElement($("#home"));
            }
            else if ($(document.activeElement).attr("id") === "navAbout")
            {
                goToElement($("#about"));
            }
            else if ($(document.activeElement).attr("id") === "navProjects")
            {
                goToElement($("#projects"));
            }
            else
            {
                goToElement($("#skills"));
            }
        }
    });
    
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // Animations for when the navigation's bar is hovered over by the cursor
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $("#nav").hover( function()
    {
        $(this).css("background", "#FFF");
        $(this).css("opacity", "1.0");
        
        // This helps keep the navigation bar from awkwardly growing and shrinking while the cursor is hovering over the menu options
        $(this).css("height", $(this).height() + "px");
    },
    function() 
    {
        $(this).css("background", "#9F9");
        $(this).css("opacity", "0.9");
        
        // This helps keep the navigation bar from awkwardly growing and shrinking as well
        $(this).css("height", "auto");
    });
    
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    //
    // Animations for when an option in the navigation menu is hovered-over by the cursor. Using a CSS transition property like the other animations does not seem to work, so the jQuery transition method used here is different.
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $("#nav li a").hover( function()
    {
        $(this).css({border: "0 solid #060"}).animate
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
    
    // Event listeners for the navigation menu links
    $("#navAbout").click( function(){ goToElement($("#about")); });
    $("#navHome").click( function(){ goToElement($("#home")); });
    $("#navProjects").click( function(){ goToElement($("#projects")); });
    $("#navSkills").click( function(){ goToElement($("#skills")); });
    
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    // 
    // RWD
    //
    // |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    $(window).resize(function()
    {
        adjustWindow(dividerShapes, dividers, dividerTops, INITIAL_VIEWPORT_WIDTH);
    });
});
    
    
    
    

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// FUNCTIONS (sorted alphabetically)
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
    
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Resizes and repositions the elements relating to the dividers in response to the window's size
//
// dividerShapes -> jQuery Polygon Element Array -> The polygons used in the creation of the dividers
// dividers -> jQuery SVG Element Array -> The background graphics used to divide the sections of the website
// dividerTops -> Number Array -> How far each divider should be vertically translated in vh
// initialWidth -> Number -> The width of the webpage (in pixels) at the time that the webpage was loaded
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function adjustWindow(dividerShapes, dividers, dividerTops, initialWidth)
{
    // A percentage of how much the height compares to the width. Anything more than 1 means that the window is in landscape orientation. Anything less than 1 means that the window is in portrait orientation.
    var ratio = $(window).width() / $(window).height();
    
    // A percentage of how wide the window currently is, compared to how wide it was when it first loaded the webpage. Anything more than 1 means that the window is wider than when the webpage was loaded. Anything less than 1 means that the window is narrower than when the webpage was loaded.
    var widthChange = $(window).width() / initialWidth;
    
    // For each divider...
    dividers.each(function(i)
    {
        // ...adjust its position based upon the window's ratio.
        $(this).css("top", (dividerTops[i] * ratio) + "vh");           
    });
    
    // Scale each divider so that its width matches the window's width
    dividerShapes.css("transform", "scale(" + widthChange + ")");
    
    resizeBottomDivider();
}
    
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Creates the divider graphic that exists between the "home" and the "about" sections.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function createDivider1()
{
    // The webpage's background color above the graphic
    const TOP_COLOR = "#FFF";
    // The webpage's background color below the graphic
    const BOTTOM_COLOR = "#CFC";
    
    // Get the correct divider SVG element
    let svg = $(".divider").eq(0);
    
    // This divider must have a greater height than normal to ensure that the bottom of the graphic will almost always at least reach the "about" section. Other dividers do not have this issue.
    svg.css("height", "160vh");
    
    // Covers the SVG element with a background color
    let background = getDividerBackground(svg.width(), svg.height(), TOP_COLOR);
    
    // A polygon forming a group of hexagons
    let chunk1Points = [0,   2,
                        1,   2,
                        1.5, 2.5,
                        1,   3,
                        0,   3];
    let hexagonChunk1 = getHexagonChunk(chunk1Points, BOTTOM_COLOR);
    
    // Another group of hexagons
    let chunk2Points = [7.5,  3.5,
                        8.5,  3.5,
                        9,    3,
                        10,   3,
                        10.5, 3.5,
                        10,   4,
                        9,    4,
                        8.5,  4.5,
                        7.5,  4.5,
                        7,    4];
    let hexagonChunk2 = getHexagonChunk(chunk2Points, BOTTOM_COLOR);
    
    // This particular divider must have its bottom polygon have an extended height to ensure that the bottom of this polygon will almost always at least reach the "about" element.
    const SIZE_SCALE = 1.8;
    let chunk3Points = [0,    5,
                        1,    5,
                        1.5,  5.5,
                        1,    6,
                        1.5,  6.5,
                        1,    7,
                        1.5,  7.5,
                        1,    8,
                        1.5,  8.5,
                        2.5,  8.5,
                        3,    8,
                        2.5,  7.5,
                        3,    7,
                        2.5,  6.5,
                        3,    6,
                        2.5,  5.5,
                        3,    5,
                        2.5,  4.5,
                        3,    4,
                        4,    4,
                        4.5,  4.5,
                        5.5,  4.5,
                        6,    4,
                        7,    4,
                        7.5,  4.5,
                        7,    5,
                        7.5,  5.5,
                        7,    6,
                        6,    6,
                        5.5,  6.5,
                        6,    7,
                        5.5,  7.5,
                        6,    8,
                        7,    8,
                        7.5,  8.5,
                        8.5,  8.5,
                        9,    8,
                        8.5,  7.5,
                        7.5,  7.5,
                        7,    7,
                        7.5,  6.5,
                        8.5,  6.5,
                        9,    6,
                        10,   6,
                        10.5, 5.5,
                        11.5, 5.5,
                        12,   5,
                        13,   5,
                        13.5, 4.5,
                        14.5, 4.5,
                        14.5, 6.5,
                        13.5, 6.5,
                        13,   6,
                        13.5, 6.5,
                        14.5, 6.5];
    let hexagonChunk3 = getHexagonChunk(chunk3Points, BOTTOM_COLOR, svg.width() * SIZE_SCALE, svg.height() * SIZE_SCALE);
    
    let chunk4Points = [6,   6,
                        7,   6,
                        7.5, 6.5,
                        7,   7,
                        7.5, 7.5,
                        8.5, 7.5,
                        9,   8,
                        8.5, 8.5,
                        7.5, 8.5,
                        7,   8,
                        6,   8,
                        5.5, 7.5,
                        6,   7,
                        5.5, 6.5];
    var hexagonChunk4 = getHexagonChunk(chunk4Points, TOP_COLOR);
    
    let chunk5Points = [10.5, 7.5,
                    11.5, 7.5,
                    12,   7,
                    13,   7,
                    13.5, 7.5,
                    13,   8,
                    12,   8,
                    11.5, 8.5,
                    10.5, 8.5,
                    10,   8];
    let hexagonChunk5 = getHexagonChunk(chunk5Points, TOP_COLOR);
    
    svg.append(background, hexagonChunk1, hexagonChunk2, hexagonChunk3, hexagonChunk4, hexagonChunk5);
    // This is necessary for the graphic to be displayed
    svg.html(svg.html());
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Creates the divider graphic that exists between the "about" and the "projects" sections. This method has been left mostly undocumented due to its excessive similarity to "createDivider1". See that method for information.
//
// Although it would be possible to combine these methods into a single method, it would require the long point arrays for each polygon for all of the dividers be declared in the same area, which would cause the root method to appear over-complicated. Not to mention, a couple of these divider methods have slight differences that would be difficult to implement neatly into a single method.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function createDivider2()
{
    const TOP_COLOR = "#CFC";
    const BOTTOM_COLOR = "#FFF";
    
    let svg = $(".divider").eq(1);
    
    // This divider must have a shorter height and have the background shifted down to prevent it from overlapping divider #1 in certain window sizes
    let backgroundHeight = (svg.height() / 5) * 4;
    let background = getDividerBackground(svg.width(), backgroundHeight, TOP_COLOR);
    background.attr("y", svg.height() / 5);
    
    let chunk1Points = [13.5, 1.5,
                        14.5, 1.5,
                        14.5, 2.5,
                        13.5, 2.5,
                        13,   2];
    let hexagonChunk1 = getHexagonChunk(chunk1Points, BOTTOM_COLOR);
    
    let chunk2Points = [4.5, 2.5,
                        5.5, 2.5,
                        6,   3,
                        5.5, 2.5,
                        4.5, 2.5,
                        4,   3,
                        3,   3,
                        2.5, 2.5,
                        3,   2,
                        4,   2];
    var hexagonChunk2 = getHexagonChunk(chunk2Points, BOTTOM_COLOR);
    
    let chunk3Points = [0,   4,
                        1,   4,
                        1.5, 4.5,
                        1,   5,
                        1.5, 5.5,
                        1,   6,
                        0,   6];
    let hexagonChunk3 = getHexagonChunk(chunk3Points, BOTTOM_COLOR);
    
    let chunk4Points = [4.5, 4.5,
                        5.5, 4.5,
                        6,   4,
                        7,   4,
                        7.5, 4.5,
                        7,   5,
                        6,   5,
                        5.5, 5.5,
                        4.5, 5.5,
                        4,   5];
    let hexagonChunk4 = getHexagonChunk(chunk4Points, BOTTOM_COLOR);
    
    let chunk5Points = [0,    7,
                        1,    7,
                        1.5,  6.5,
                        2.5,  6.5,
                        3,    7,
                        4,    7,
                        4.5,  6.5,
                        5.5,  6.5,
                        6,    6,
                        7,    6,
                        7.5,  5.5,
                        8.5,  5.5,
                        9,    5,
                        10,   5,
                        10.5, 5.5,
                        11.5, 5.5,
                        12,   5,
                        13,   5,
                        13.5, 4.5,
                        14.5, 4.5];
    let hexagonChunk5 = getHexagonChunk(chunk5Points, BOTTOM_COLOR, svg.width(), svg.height());
    
    svg.append(background, hexagonChunk1, hexagonChunk2, hexagonChunk3, hexagonChunk4, hexagonChunk5);
    svg.html(svg.html());
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Creates the divider graphic that exists between the "projects" and the "skills" sections. This method has been left undocumented due to its excessive similarity to "createDivider1". See that method for information.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function createDivider3()
{
    const TOP_COLOR = "#FFF";
    const BOTTOM_COLOR = "#CCC";
    
    let svg = $(".divider").eq(2);
    
    let background = getDividerBackground(svg.width(), svg.height(), TOP_COLOR);
    
    let chunk1Points = [7.5, 1.5,
                        8.5, 1.5,
                        9,   2,
                        8.5, 2.5,
                        7.5, 2.5,
                        7,   2];
    let hexagonChunk1 = getHexagonChunk(chunk1Points, BOTTOM_COLOR);
    
    let chunk2Points = [10.5, 1.5,
                        11.5, 1.5,
                        12,   2,
                        11.5, 2.5,
                        12,   3,
                        11.5, 3.5,
                        10.5, 3.5,
                        10,   3,
                        10.5, 2.5,
                        10,   2];
    let hexagonChunk2 = getHexagonChunk(chunk2Points, BOTTOM_COLOR);
    
    let chunk3Points = [0,   3,
                        1,   3,
                        1.5, 3.5,
                        2.5, 3.5,
                        3,   3,
                        4,   3,
                        4.5, 2.5,
                        5.5, 2.5,
                        6,   3,
                        5.5, 2.5,
                        6,   3,
                        5.5, 3.5,
                        4.5, 3.5,
                        4,   4,
                        3,   4,
                        2.5, 4.5,
                        1.5, 4.5,
                        1,   4,
                        0,   4];
    let hexagonChunk3 = getHexagonChunk(chunk3Points, BOTTOM_COLOR);
    
    let chunk4Points = [7.5, 3.5,
                        8.5, 3.5,
                        9,   4,
                        8.5, 4.5,
                        7.5, 4.5,
                        7,   4];
    let hexagonChunk4 = getHexagonChunk(chunk4Points, BOTTOM_COLOR);
    
    let chunk5Points = [0,    6,
                        1,    6,
                        1.5,  5.5,
                        2.5,  5.5,
                        3,    5,
                        4,    5,
                        4.5,  5.5,
                        5.5,  5.5,
                        6,    5,
                        7,    5,
                        7.5,  5.5,
                        7,    6,
                        6,    6,
                        5.5,  6.5,
                        6,    7,
                        5.5,  7.5,
                        6,    8,
                        7,    8,
                        7.5,  7.5,
                        8.5,  7.5,
                        9,    8,
                        10,   8,
                        10.5, 7.5,
                        10,   7,
                        9,    7,
                        8.5,  6.5,
                        9,    6,
                        8.5,  5.5,
                        9,    5,
                        10,   5,
                        10.5, 5.5,
                        10,   6,
                        10.5, 6.5,
                        11.5, 6.5,
                        12,   6,
                        11.5, 5.5,
                        12,   5,
                        13,   5,
                        13.5, 4.5,
                        14.5, 4.5];
    let hexagonChunk5 = getHexagonChunk(chunk5Points, BOTTOM_COLOR, svg.width(), svg.height());
    
    let chunk6Points = [12,   7,
                        13,   7,
                        13.5, 7.5,
                        13,   8,
                        12,   8,
                        11.5, 7.5];
    let hexagonChunk6 = getHexagonChunk(chunk6Points, TOP_COLOR);
    
    svg.append(background, hexagonChunk1, hexagonChunk2, hexagonChunk3, hexagonChunk4, hexagonChunk5, hexagonChunk6);
    svg.html(svg.html());
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Creates the divider graphic that exists between the "skills" and the footer sections. This method has been left undocumented due to its excessive similarity to "createDivider1". See that method for information.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function createDivider4()
{
    const TOP_COLOR = "#CCC";
    const BOTTOM_COLOR = "#060";
    
    let svg = $(".divider").eq(3);
    
    let background = getDividerBackground(svg.width(), svg.height(), TOP_COLOR);
    
    let chunk1Points = [1.5, 1.5,
                        2.5, 1.5,
                        3,   2,
                        2.5, 2.5,
                        3,   3,
                        2.5, 3.5,
                        3,   4,
                        2.5, 4.5,
                        1.5, 4.5,
                        1,   4,
                        1.5, 3.5,
                        1,   3,
                        1.5, 2.5,
                        1,   2];
    let hexagonChunk1 = getHexagonChunk(chunk1Points, BOTTOM_COLOR);
    
    let chunk2Points = [6,   1,
                        7,   1,
                        7.5, 1.5,
                        7,   2,
                        6,   2,
                        5.5, 1.5];
    let hexagonChunk2 = getHexagonChunk(chunk2Points, BOTTOM_COLOR);
    
    let chunk3Points = [0,    6,
                        1,    6,
                        1.5,  6.5,
                        2.5,  6.5,
                        3,    6,
                        2.5,  5.5,
                        3,    5,
                        4,    5,
                        4.5,  5.5,
                        5.5,  5.5,
                        6,    5,
                        7,    5,
                        7.5,  4.5,
                        8.5,  4.5,
                        9,    5,
                        8.5,  5.5,
                        9,    6,
                        10,   6,
                        10.5, 6.5,
                        11.5, 6.5,
                        12,   6,
                        11.5, 5.5,
                        10.5, 5.5,
                        10,   5,
                        10.5, 4.5,
                        11.5, 4.5,
                        12,   5,
                        13,   5,
                        13.5, 5.5,
                        14.5, 5.5,
                        14.5, 6.5,
                        13.5, 6.5,
                        13,   7,
                        13.5, 7.5,
                        14.5, 7.5];
    let hexagonChunk3 = getHexagonChunk(chunk3Points, BOTTOM_COLOR, svg.width(), svg.height());
    
    let chunk4Points = [10.5, 2.5,
                    11.5, 2.5,
                    12,   3,
                    13,   3,
                    13.5, 3.5,
                    13,   4,
                    12,   4,
                    11.5, 3.5,
                    10.5, 3.5,
                    10,   3];
    let hexagonChunk4 = getHexagonChunk(chunk4Points, TOP_COLOR);
    
    let chunk5Points = [4.5, 3.5,
                        5.5, 3.5,
                        6,   4,
                        5.5, 4.5,
                        4.5, 4.5,
                        4,   4];
    let hexagonChunk5 = getHexagonChunk(chunk5Points, TOP_COLOR);
    
    svg.append(background, hexagonChunk1, hexagonChunk2, hexagonChunk3, hexagonChunk4, hexagonChunk5);
    svg.html(svg.html());
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Gets a square element that is used to act as the background for a svg divider element
//
// width -> Number -> The width that the background should be
// height -> Number -> The height that the background should be
// color -> String -> A compatible string representation of the color that the background should be
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function getDividerBackground(width, height, color)
{
    let background = $("<rect/>");
    
    background.attr("width", width);
    background.attr("height", height);
    background.css("fill", color);
    
    return background;
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Gets a polygon element to be used as a graphic of a group of hexagons
//
// points -> Number Array -> Each vertex coordinate on the polygon
// color -> String -> A compatible string representation of the color that the background should be
// width -> Optional Number -> How wide the SVG element is. For use if the polygon is to cover the bottom of the SVG element.
// height -> Optional Number -> How high the SVG element is. For use if the polygon is to cover the bottom of the SVG element.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function getHexagonChunk(points, color, width, height)
{
    let chunk = $("<polygon/>");
    
    let pointsAttribute = getPointsAttribute(points);
    
    // If a value for the width parameter was provided...
    if (width)
    {
        // ...add 2 last coordinates to the points that stretch the polygon out to covering the bottom of the SVG element.
        pointsAttribute = pointsAttribute + " " + width + "," + height + " " + 0 + "," + height;
    }
    
    chunk.attr("points", pointsAttribute);
    
    chunk.css("fill", color);
    
    return chunk;
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Gets the points for use in a polygon's points' HTML attribute.
//
// coords -> Number Array -> Each vertex coordinate on the polygon. Every 2 indexes make up a coordinate. The even indexes are the x position. The odd indexes are the y position. The coordinates do not use pixels as a unit, but rather halves of hexagons (so 1 = a half of a hexagon, 2 = 1 hexagon, etc).
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function getPointsAttribute(coords)
{
    // The size of each hexagon in pixels used in the dividers
    const HEXAGON_SIZE = $(window).width() / 14.5;
    
    // Start off with getting the x coordinate of the first point, with a comma. If this first point was to go through the loop, a space would be added before it, corrupting the attribute value.
    var pointsAttribute = (coords[0] * HEXAGON_SIZE) + ",";
    
    // For each x and y value (except the first one)...
    var coordAmount = coords.length;
    for (var i = 1; i < coordAmount; i++)
    {
        // ...get its value in pixels.
        var coord = coords[i] * HEXAGON_SIZE;
        
        // Whether the current value is an x or a y position
        var remainder = i % 2;
        
        // If the value is an x position...
        if (remainder === 0)
        {
            // ...add the value with a space and a comma surrounding it.
            pointsAttribute = pointsAttribute + " " + coord + ",";
        }
        // ...otherwise, it must be a y position, so...
        else
        {
            // ...add just the value.
            pointsAttribute = pointsAttribute + coord;
        }
    }
    
    return pointsAttribute;
}
    
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Moves the viewport to the given element
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function goToElement(elmnt)
{
    // The height of the navigation menu
    let navHeight = $("#nav").height();
    // The position of the element the viewport is to be moved to
    let position = elmnt.offset().top;
    
    // Scrolls the viewport so that the top of the element is just under the navigation menu
    window.scrollTo({
        top: position - navHeight
    });
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Removes the href attribute from the navigation menu's options.
// 
// Functionality has been provided for a smooth-transitional navigation, so these attributes can be removed. These attributes are left in the HTML document for when the user is not using or cannot use JavaScript.
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function removeNavHref()
{
    // The navigation menu options
    let options = $(".nav").children();
    
    // For each option...
    options.each(function()
    {
        // ...remove the href attribute.
        $(this).children("a").removeAttr("href");
    });
}

// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
//
// Resizes the divider at the bottom of the webpage so that it does not allow the user to awkwardly scroll a little past the footer
//
// |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#| |#|
function resizeBottomDivider()
{
    // The position (in pixels) of the bottom of the footer
    var footerBottomPosition = $("footer").offset().top + $("footer").height();
    // The position (in pixels) of the last divider graphic
    var lastDividerPosition = $(".divider").eq(3).offset().top;
    
    // The height that the last divider must be if it is to not expand the length of the webpage
    var lastDividerNewHeight = footerBottomPosition - lastDividerPosition;
    
    $(".divider").eq(3).css("height", lastDividerNewHeight + "px");
}

}})(jQuery);