// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// George Tiersma's portfolio website - projectsAndSkills.js
//
// Controls the functionality of the projects and skills sections of the website
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||



// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Class for a project that stores data relating to it
//
// name   -> The title of the project
// image  -> The file name of the image used for the project
// button -> The text for the button for the project. If given a blank string, the button is omitted for this project.
// link   -> The webpage that the button will lead to
// alt    -> The alternate text for the image
// desc1  -> The first paragraph of the description
// desc2  -> The second paragraph of the description. If given a blank string, the second paragraph is omitted. 
// desc3  -> The third paragraph of the description. If given a blank string, the third paragraph is omitted. 
//
// All of the above variables should be strings.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
class Project
    {
        constructor(name, image, button, link, alt, desc1, desc2, desc3)
        {
            this.name = name;
            this.image = image;
            this.button = button;
            this.link = link;
            this.alt = alt;
            this.desc1 = desc1;
            this.desc2 = desc2;
            this.desc3 = desc3;
        }
        
        get getName()
        {
            return this.name;
        }
        
        get getImage()
        {
            return this.image;
        }
        
        get getButton()
        {
            return this.button;
        }
        
        get getLink()
        {
            return this.link;
        }
        
        get getAlt()
        {
            return this.alt;
        }
        
        get getDesc1()
        {
            return this.desc1;
        }
        
        get getDesc2()
        {
            return this.desc2;
        }
        
        get getDesc3()
        {
            return this.desc3;
        }
    }

(function($)
{
    // As long as IE and Edge is not being used...
    if (!(document.documentMode || /Edge/.test(navigator.userAgent) || /Edg/.test(navigator.userAgent)))
    {

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Executes once the webpage is loaded
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
$(document).ready( function()
{
    // The viewport width when the webpage is first launched. Used when the window is resized
    const INITIAL_VIEWPORT_WIDTH = $(window).width();
    
    // Arrays of project objects
    let programs = getProjects(0);
    let graphics = getProjects(1);
    let databases = getProjects(2);

    // Ratings for the technical skills
    let hardRatings = [8, 7, 7, 6, 5];

    // Ratings for the social skills
    let softRatings = [9, 9, 8, 7, 7];

    // Put the project arrays into a master array
    let projects = [programs, graphics, databases];
    
    // Keeps track of the indexes of the currently active projects. The first projects (0) are loaded initially.
    let currentProjects = [0, 0, 0];
    
    // Remove all of the elements in the DOM that are only meant to be shown if JavaScript fails to load or run
    $(".noJavaScript").remove();
    
    // Creates the arrow buttons for each project-viewer
    createArrows(true);
    createArrows(false);
    
    // Loads the initial projects into the DOM
    var projectTypeAmount = currentProjects.length;
    for (var i = 0; i < projectTypeAmount; i++)
    {
        currentProject = currentProjects[i];
        loadProject(i, projects[i][currentProject]);
    }
    
    // Create the star graphics for the skills
    createSkillRatings(true, hardRatings);
    createSkillRatings(false, softRatings);
    
    // Show the DOM elements that should only be shown if JavaScript is being used
    showJavaScriptStuff();
    
    // These variables are used in the scroll event listener. If they were declared in the event listening function, they would continuously redefine themselves, needlessly consuming a large amount of resources. To prevent this, they are declared globally.
    // Whether or not the user has scrolled down to the bottom skill or not
    var reachedLastSkill = false;
    // Each container for the skill ratings.
    var ratings = $(".ratingContainer");
    // The number of skills
    var skillsAmount = $(".skill").length;
    
    // Minimize the projects and skills
    $(".projectContent").hide();
    $(".skillContent").hide();
    
    // Adjust the elements' size based upon the window size
    adjustWindow(INITIAL_VIEWPORT_WIDTH);
    
    

    
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // EVENT LISTENERS (sorted by class/id)
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Animates the arrow buttons when hovered upon
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".arrowCircle, polygon").hover(function()
    {
        // The SVG element
        var svg = $(this).parent();
        
        svg.children(".arrowCircle").css("stroke-width", 0);
        svg.children(".arrowCircle").css("opacity", 0);
    },
    function()
    {
        var svg = $(this).parent();
        
        svg.children(".arrowCircle").css("stroke-width", 3);
        svg.children(".arrowCircle").css("opacity", 1);
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Animates the arrow buttons when clicked
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".arrowCircle, polygon").on("mousedown", function()
    {
        $(this).parent().children("polygon").css("fill", "#FFF");
    });
    $(".arrowCircle, polygon").on("mouseup", function()
    {
        $(this).parent().children("polygon").css("fill", "#060");
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Displays the next or previous project when an arrow button is clicked
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".next, .previous").click(function()
    {
        // The index for the project type
        let type = getProjectType(projects.length, $(this).parent());
        
        // The index of the project that will be shown
        let newIndex;
        
        // The index of the project currently being shown
        let currentProject = currentProjects[type];
        
        let projectContainer = $(this).parent();
        
        // If the clicked button is for the next project...
        if ($(this).hasClass("next"))
        {
            // ...get the index of the next project.
            newIndex = getNextProjectIndex(currentProject, projects[type].length);
        }
        // ...otherwise, the clicked button must be for the previous project, so...
        else
        {
            // ...get the index for the previous project.
            newIndex = getPreviousProjectIndex(currentProject, projects[type].length);
        }
        
        // Load the next project into the DOM
        loadProject(type, projects[type][newIndex]);
        
        // Store the current project
        currentProjects[type] = newIndex;
        
        growContainer(projectContainer);
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Enlarges a project image to fit the viewport, covering the webpage and fixes it to the viewport. If the image is already enlarged, it is shrunk back to its original size and position.
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".previewImage").click(function()
    {
        // If the webpage is darkened (which would mean an image is currently enlarged)...
        if ($("#darkBackground").length)
        {
            // ...shrink it back.
            hideEnlargedPreview($(this));
        }
        // ...otherwise...
        else
        {
            // ...enlarge it.
            showEnlargedPreview($(this));
        }
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Shows or hides the content related to a project or skill for when the show/hide button is clicked.
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".showHide").click(function()
    {
        // The DOM container that performs a fade effect when shown or hidden
        let fadeContainer;
        // The DOM container that flattens when minimized
        let shrinkContainer;
        
        // If this button is for a project...
        if ($(this).siblings(".projectContent").length === 1)
        {
            // ...the "projectContent" container performs both the fade and shrink effect.
            fadeContainer = $(this).siblings(".projectContent");
            shrinkContainer = $(this).siblings(".projectContent");
        }
        // ...otherwise, if it's for a skill...
        else
        {
            // ...the skill's container performs the fade effect.
            fadeContainer = $(this).siblings(".skillContent");
            // The list item for this skill performs the shrink effect.
            shrinkContainer = $(this).parent();
        }
        
        // If the button clicked is a "+" button...
        if ($(this).text() == "+")
        {
            // ...show it.
            showContent(fadeContainer, shrinkContainer);
            
            // Switch button to a "-" button
            $(this).children("span").text("-");
            $(this).attr("alt", "Hide Content");
        }
        // ...otherwise, it must be a "-" button, so...
        else
        {
            // ...hide it.
            hideContent(fadeContainer, shrinkContainer);
            
            // Switch it to a "+" button
            $(this).children("span").text("+");
            $(this).attr("alt", "Show Content");
        }
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Animates the show/hide button when hovered upon
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".showHide").hover(function()
    {
        $(this).css("box-shadow", "3px 3px #000");
        $(this).css("text-shadow", "3px 3px #000");
    },
    function()
    {
        $(this).css("box-shadow", "5px 5px #000");
        $(this).css("text-shadow", "0 0");
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Performs actions when the viewport is scrolled.
    // More specifically, this listener animates the skill rating graphics when they come in or go out of view.
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(window).on("scroll", function()
    {
        // If the user has yet to scroll to the last rating...
        if (!reachedLastSkill)
        {
            // The "y" position of the bottom of the viewport
            var viewportBottom = $(window).scrollTop() + $(window).height();
            
            // The y position of the bottom rating
            var lastRatingPosition = ratings.eq(skillsAmount - 1).offset().top;
            
            // If the user has now scrolled to reach the last skill...
            if (viewportBottom > lastRatingPosition)
            {
                reachedLastSkill = true;
            }
        
            animateRatings(ratings, hardRatings, softRatings);
        }
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // RWD
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(window).resize(function()
    {
        adjustWindow(INITIAL_VIEWPORT_WIDTH);
    });
});
    
    
    
    
    
// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// FUNCTIONS (sorted alphabetically)
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Resizes and repositions the elements relating to projects or skills in response to the window's size
//
// initialWidth -> Number -> The width of the webpage (in pixels) at the time that the webpage was loaded
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function adjustWindow(initialWidth)
{
    // A percentage of how much the height compares to the width. Anything more than 1 means that the window is in landscape orientation. Anything less than 1 means that the window is in portrait orientation.
    var ratio = $(window).width() / $(window).height();
    
    // A percentage of how wide the window currently is, compared to how wide it was when it first loaded the webpage. Anything more than 1 means that the window is wider than when the webpage was loaded. Anything less than 1 means that the window is narrower than when the webpage was loaded.
    var widthChange = $(window).width() / initialWidth;
    
    $(".next, .previous").children().css("transform", "scale(" + widthChange + ")");
    
    // If the window is in portrait orientation...
    if (ratio < 1)
    {
        // ...abbreviate the project group titles.
        $("#projects h2").eq(0).text("Programming");
        $("#projects h2").eq(1).text("Graphics");
        $("#projects h2").eq(2).text("Database");
    }
    // ...otherwise...
    else
    {
        // ...do not.
        $("#projects h2").eq(0).text("Computer Programming");
        $("#projects h2").eq(1).text("Graphic Design");
        $("#projects h2").eq(2).text("Database Development");
    }
    
    // If a project preview is currently enlarged...
    if ($("#close").length > 0)
    {
        // ...resize it.
        resizeEnlargedPreview($("#close").siblings(".previewImage"));
    }
    
    // For each skill...
    $(".skill").each(function()
    {
        // ...get whether or not it is minimized or maximized.
        var buttonState = $(this).siblings(".showHide").children("span").text();
        
        // If it is minimized...
        if (buttonState == "+")
        {
            // ...get its container.
            var container = $(".skill").parent();
            
            // Make it the correct size
            resizeSkill(container);
        }
    });
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Animates the skill rating graphics that are currently in view (or above view)
//
// ratings -> jQuery Div Element Array -> The containers holding the rating graphics
// hardRatings -> Number Array -> The ratings for the technical skills
// softRatings -> Number Array -> The ratings for the soft skills
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function animateRatings(ratings, hardRatings, softRatings)
{
    // The "y" position of the bottom of the viewport
    var viewportBottom = $(window).scrollTop() + $(window).height();
    
    // For each rating...
    ratings.each(function(i)
    {
        // The "y" position of the rating graphic
        var skillPosition = $(this).offset().top;
        
        // If the viewport has reached the graphic...
        if (skillPosition < viewportBottom)
        {
            var rating;
            // The index in the array of skills to be retrieved.
            var index = i;
            
            // If the incrementing variable is within the number of ratings for hard skills...
            if (i < hardRatings.length)
            {
                // ...the rating needed is a rating for a hard skill.
                rating = hardRatings[index];
            }
            // ...otherwise...
            else
            {
                // ...the rating needed must be for a soft skill. Since the index currently counts hard skills AND soft skills, the number of hard skills must be subtracted to get the index into the correct range for retrieving a rating for a soft skill.
                index = index - hardRatings.length;
                
                rating = softRatings[index];
            }
            
            // The number of stars for the skill. Since the rating is from 1-10, but there are only 5 stars, the number of stars (including half-stars) is half of the rating, rounded up.
            var starsAmount = Math.ceil(rating / 2);
    
            // For each star graphic in the skill's rating...
            for (var j = 0; j < starsAmount; j++)
            {
                // ...animate it.
                animateStar(i, j);
            }
        }
    });
}
    
// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Animates a star graphic either into view or out of view
//
// skillIndex -> Number -> The zero-based number of which skill the star being animated belongs too (ordered by position in the DOM)
// starIndex -> Number -> The zero-based number of which star in the rating graphic should be animated (ordered by position from left to right)
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function animateStar(skillIndex, starIndex)
{
    // This was not working correctly with jQuery, so it is not used here.
    var ratingContainer = document.getElementsByClassName("ratingContainer")[skillIndex];
    // The SVG graphic containing the star with the hexagon behind it.
    var svg = ratingContainer.children[starIndex].children[1];
    
    // Wait a little, allowing the stars to animate into view sequentially, then...
    sleep(500 * starIndex).then(() =>
    {
        // ...horizontally stretch the hexagon into shape.
        svg.children[0].style.transform = "scaleX(1.0)";
        
        // For the star and each shadow on it...
        var polygonAmount = svg.children.length;
        for (var i = 1; i < polygonAmount; i++)
        {
            // ...animate it into view.
            svg.children[i].style.transform = "rotate(0) scale(0.8) translate(5px, 5px)";
        }
    });
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Centers an arrow button with the preview image
//
// arrow -> jQuery DOM Element -> The arrow button to be centered
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function centerArrow(arrow)
{
    let imageHeight = arrow.siblings(".previewImage").height();
    
    // The button must be in the middle of the top and bottom of the image. That middle point is half of the image's height.
    let halfImageHeight = imageHeight / 2;
    // The middle of the button graphic should approximately line up with the middle of the image, so this is used to raise the button a little so that can happen.
    let offset = arrow.height() / 2;
    
    let marginPixels = halfImageHeight - offset;
    
    // Convert it from px to vh
    let marginPercentage = marginPixels / $(window).height() * 100;
    arrow.css("margin-bottom", marginPercentage + "vh");
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Event listeners for the close button that appears when a preview image is enlarged. These event listeners must exist here in this function instead of the load method with the others. The close button does not exist when the load method is executed, therefore these event listeners would not be assigned to the button if they were placed in the load method.
//
// closeButton -> jQuery Button Element -> The button to close an enlarged project preview image
// imagePreview -> jQuery Image Element -> The project preview that has been enlarged
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function closeButtonListeners(closeButton, imagePreview)
{
    // When the close button is clicked...
    closeButton.click(function()
    {
        // ...return the image to it's normal state.
        hideEnlargedPreview(imagePreview);
    });
    
    // Animate the close button's colors when hovered
    closeButton.hover(function()
    {
        closeButton.css("border-width", 0);
        closeButton.css("background-color", "#FFF");
    },
    function()
    {
        closeButton.css("border-width", "3px");
        closeButton.css("background-color", "#0000");
    });
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Creates the arrow buttons for the projects
//
// next -> Boolean -> If true, the "next" buttons will be created. If false, the "previous" buttons will be created.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function createArrows(next)
{
    // Array of svg elements to be used as the buttons
    let arrows;
    
    // Array of numbers used in the arrow's coordinates that vary depending on whether the "next or "previous" buttons are being created
    let varyingPoints;
    
    // If the "next" buttons are being created...
    if (next)
    {
        // ...get the correct svg elements and points.
        arrows = $(".next");
        varyingPoints = [3, 8];
    }
    else
    {         
        arrows = $(".previous");
        varyingPoints = [7, 2];
    }
    
    // 1% of the screen width. Polygons in SVG cannot be created with "%" or "vw" units for some reason, so the conversion of "px" to "%" is handled programatically.
    let centScreenWidth = window.innerWidth / 100;
    
    // The x and y position that the circle is placed at
    let circlePosition = centScreenWidth * 5;
    // The x and y position that the shadow is placed at
    let shadowPosition = centScreenWidth * 5.2;
    let radius = centScreenWidth * 4;
    
    // The polygon element of the arrow shape
    let arrow = getArrowGraphic(varyingPoints);
    // The circle surrounding the arrow
    let circle = getArrowCircle(circlePosition, radius, "#060");
    // The circle's shadow
    let circleShadow = getArrowCircle(shadowPosition, radius, "#000");
    
    let container = $(".projectContent");
    
    // Add the shapes to the SVG element
    arrows.append(circleShadow);
    arrows.append(circle);
    arrows.append(arrow);
    
    // This is necessary for the arrow buttons to be displayed correctly.
    container.html(container.html());
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Creates the rating graphics for either the soft skills or the hard skills 
//
// hard -> Boolean -> Whether or not the graphics are being created for the hard skills
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function createSkillRatings(hard, ratings)
{
    // The ul element to contain the skills
    let skillContainer;
    
    // If the technical skills are being loaded...
    if (hard)
    {
        // ...get the ones for technical skills.
        skillContainer = $("#skills .showButtonList").eq(0);
    }
    // ...otherwise...
    else
    {
        // ...get the other ones.
        skillContainer = $("#skills .showButtonList").eq(1);
    }
    
    // For each skill to be loaded...
    var skillsAmount = ratings.length;
    for (var i = 0; i < skillsAmount; i++)
    {
        // ...get the skill's container.
        let content = skillContainer.children("li").eq(i).children(".skillContent");
        
        // Get the graphic
        let graphic = getRatingGraphic(ratings[i]);
        
        // The text describing the skill that can be shown by the user
        let text;
        
        // If the skill is hard...
        if (hard)
        {
            // ...the text is in the form of a list.
            text = content.children("ul").children("li");
        }
        // ...otherwise, the skill must be soft, so...
        else
        {
            // ...it is a paragraph.
            text = content.children("p");
        }
        
        // Insert the graphic into the correct position in the DOM
        graphic.insertBefore(content);
        
        // Make the text describing the skill initially invisible, so that they can fade in when shown. This is done here instead of in CSS so that the skills will still be visible if JavaScript is disabled.
        text.css("opacity", "0");
    }
    
    // This is necessary for the rating graphic to be displayed correctly.
    skillContainer.html(skillContainer.html());
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Using CSS, fades in the given list of statements for a skill
//
// list -> jQuery li Element Array -> Statements belonging to a skill
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function fadeInList(list)
{
    // The scope of the incremental variable from the for loop does not pass into the sleep promise below. Therefore, a duplicate incremental variable must be created here for use within the promise.
    var i2 = 0;
    
    // For each item in the skill's list...
    var listLength = list.length;
    for (var i = 0; i < listLength; i++)
    {   
        // After the previous item on the list has begun to fade in...
        sleep(300 * (i + 1)).then(() =>
        {
            // ...fade in the next item.
            list.eq(i2).css("opacity", "1");
            
            i2 = i2 + 1;
        });
    }
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Gets a circle SVG element for use with the project preview arrow buttons
//
// position -> Number -> How many pixels the circle should be placed from the SVG element's origin.
// radius -> Number -> The radius of the circle
// color -> String -> The CSS-compatible color value for the circle
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getArrowCircle(position, radius, color)
{
    // Some of their CSS properties cause syntax errors when used within the style file, but when defined here in JS, they work as expected.
    var circle = $("<circle/>");
    circle.addClass("arrowCircle");
    circle.css("cx", position + "px");
    circle.css("cy", position + "px");
    circle.css("r", radius + "px");
    circle.css("stroke", color);
    circle.css("stroke-width", "3");
    circle.css("fill-opacity", "0");
    
    return circle;
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Gets a polygon element of an arrow for use with the project preview's arrow buttons
//
// varyingPoints -> Number Array -> An array of the point coordinates that change depending on which direction the arrow is facing.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getArrowGraphic(varyingPoints)
{
    // 1% of the screen width. Polygons in SVG cannot be created with "%" or "vw" units for some reason, so the conversion of "px" to "%" is handled programatically.
    let centScreenWidth = window.innerWidth / 100;
    
    // Points used to create the arrow shape
    let arrowPoints =
        (varyingPoints[0] * centScreenWidth) + "," + (4 * centScreenWidth) + " " +
        (5 * centScreenWidth) + "," +                 (4 * centScreenWidth) + " " +
        (5 * centScreenWidth) + "," +                 (3 * centScreenWidth) + " " +
        (varyingPoints[1] * centScreenWidth) + "," + (5 * centScreenWidth) + " " +
        (5 * centScreenWidth) + "," +                 (7 * centScreenWidth) + " " +
        (5 * centScreenWidth) + "," +                 (6 * centScreenWidth) + " " +
        (varyingPoints[0] * centScreenWidth) + "," + (6 * centScreenWidth);
    
    // Construct the arrow
    let arrow = $("<polygon/>").attr("points", arrowPoints);
    arrow.css("fill", "#060");
    
    return arrow;
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Creates and returns a graphic for a skill rating
//
// full -> Number -> How full the star in the hexagon graphic should be. 2 will return a full star. 1 will return a half of a star. 0 will return the background hexagon with no star.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getHexagonGraphic(full)
{
    var hexagonPoints =
        "10,5 " +
        "40,5 " +
        "50,25 " +
        "40,45 " +
        "10,45 " +
        "0,25";
    
    // The SVG element to contain the entire graphic
    var graphic = $("<svg></svg>");
    
    var hexagon = $("<polygon/>");
    var star = $("<polygon/>");
    
    // If there should be no star...
    if (full === 0)
    {
        // ...only a grey hexagon is created.
        hexagon.css("fill", "#CCC");
        
        hexagon.addClass("starHexagonBack");
        hexagon.attr("points", hexagonPoints);
        
        graphic.append(hexagon);
    }
    // ...otherwise, there should be a star, so...
    else 
    {
        // ...if it should be a half of a star...
        if (full === 1)
        {
            // ...modify the hexagon's points to create a half of a hexagon.
            hexagonPoints = hexagonPoints.replace(
                "40,5 50,25 40,45",
                "25,5 25,45");
            hexagon.css("fill", "#060");
        
            // Get a half of a star
            star = getStarGraphic(false);
            starShading = getStarShading(false);
        }
        // ...otherwise, it should be a full star, so...
        else
        {
            // ...get a full hexagon and a star.
            hexagon.css("fill", "#060");
        
            star = getStarGraphic(true);
            starShading = getStarShading(true);
        }
        
        hexagon.addClass("starHexagonFront");
        hexagon.attr("points", hexagonPoints);
        
        graphic.append(hexagon);
        graphic.append(star);
        
        // For each shadow on the star...
        var shadingAmount = starShading.length;
        for (var i = 0; i < shadingAmount; i++)
        {
            // ...add it as well.
            graphic.append(starShading[i]);
        }
    }
    
    return graphic;
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Gets the index of the next project, reverting back to 0 if there is not a next index
//
// currentIndex -> Number -> The index of the project currently in view
// projectAmount -> Number -> The number of projects of the same type that currentIndex belongs to
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getNextProjectIndex(currentIndex, projectAmount)
{
    let nextIndex = currentIndex + 1;
    
    // If the next project index exceeds the number of indexes there are...
    if (nextIndex === projectAmount)
    {
        // ...make the next index the first index.
        nextIndex = 0;
    }
    
    return nextIndex;
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Gets the index of the previous project, jumping forward to the last index if the current index is the first index (0)
//
// currentIndex -> Number -> The index of the project currently in view
// projectAmount -> Number -> The number of projects of the same type that currentIndex belongs to
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getPreviousProjectIndex(currentIndex, projectAmount)
{
    let previousIndex = currentIndex - 1;
    
    // If there is not a previous index...
    if (previousIndex < 0)
    {
        // ...set the previous index to the last one.
        previousIndex = projectAmount - 1;
    }
    
    return previousIndex;
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Gets the data of projects of a specific type from the DOM. This data is stored in an array of project objects.
//
// index -> Number -> The 0-based index of which type of project (programming, art, etc) should data be returned for. They are ordered the same as in the DOM.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getProjects(index)
{
    var projects = [];
    
    // Get the div for each project from the DOM
    var projectContainer = $("#projects").children(".noJavaScript").children("li").eq(index).children(".projectContent");
    
    // For each project of the given type...
    var projectAmount = projectContainer.length;
    for (var i = 0; i < projectAmount; i++)
    {
        // ...create a new project object.
        var project = new Project
        (
            projectContainer.eq(i).children("h3").text(),
            projectContainer.eq(i).children("img").attr("src"),
            projectContainer.eq(i).children("form").children("button").text(),
            projectContainer.eq(i).children("form").attr("action"),
            projectContainer.eq(i).children("img").attr("alt"),
            projectContainer.eq(i).children("p").eq(0).text(),
            projectContainer.eq(i).children("p").eq(1).text(),
            projectContainer.eq(i).children("p").eq(2).text()
        );
        
        // Add it to the array
        projects.push(project);
    }
    
    return projects;
}
    
// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Returns the index of the projects array of the type of project that the given container element of a project's content belongs to.
//
// typesAmount -> Number -> The number of different project types
// container -> jQuery Div Element -> Container of elements of which the index is being returned for.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getProjectType(typesAmount, container)
{
    // Index of the project type that the container element belongs to
    var type;
    // The title text of the given container
    var containerTitle = container.children("h3").text();
    
    // For each type of project...
    for (var i = 0; i < typesAmount; i++)
    {
        // ...get that type's title text.
        var projectTypeTitle = $(".projectContent").eq(i).children("h3").text();
        
        // ...if the title texts match...
        if (containerTitle == projectTypeTitle)
        {
            // ...the correct type has been found.
            type = i;
            // Exit the loop
            i = projects.length;
        }
    }
    
    return type;
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Creates and returns a container of the graphics for a skill's rating
//
// rating -> Number -> A number that must be 0-10 that represents how strong the skill is
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getRatingGraphic(rating)
{
    // The highest star rating that a skill could have
    const MAX_STARS = 5;
    // How much of a numerical rating that a full star is worth
    const FULL_STAR_WORTH = 2;
    
    // A decrementing counter for the rating
    var rtng = rating;
    
    // The container for the graphic
    var container = $("<div></div>");
    container.addClass("ratingContainer");
    container.attr("alt", "Self-Evaluated Rating: " + rating);
    
    // For each spot a star could be placed...
    for (var i = 0; i < MAX_STARS; i++)
    {
        // Div to contain a single star's graphic
        var singleStarContainer = $("<div></div>");
        // The background behind a star's graphic
        var starBack = getHexagonGraphic(0);
        // The star's graphic
        var star = $("<svg></svg>");
        
        // If the rating counter has yet to reach 1...
        if (rtng > 1)
        {
            // ...get a graphic for a full star.
            star = getHexagonGraphic(2);
        }
        // ...otherwise, if the rating counter has reached exactly 1...
        else if (rtng === 1)
        {
            // ...get a half of a star.
            star = getHexagonGraphic(1);
        }
        
        singleStarContainer.addClass("starContainer");
        starBack.addClass("starBack");
        star.addClass("starFront");
        
        singleStarContainer.append(starBack, star);
        
        container.append(singleStarContainer);
        
        // Decrement rating for next star. 1 is a half of a star. 2 is a full star, so 2 is decremented.
        rtng = rtng - FULL_STAR_WORTH;
    }
    
    return container;
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Creates and returns a star for a skill rating's graphic
//
// full -> Boolean -> Whether or not a full or a half of a star is to be created
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getStarGraphic(full)
{
    var starPoints =
        "0,20 " +
        "18,15 " +
        "25,0 " +
        "33,15 " +
        "50,20 " +
        "38,30 " +
        "40,50 " +
        "25,40 " +
        "10,50 " +
        "13,30";
    
    var star = $("<polygon/>");
    
    star.css("fill", "#CFC");
    
    // If the star being created is to be a half of a star...
    if (!full)
    {
        // ...remove some points from the star to remove the right half.
        starPoints = starPoints.replace(
            "33,15 50,20 38,30 40,50",
            "");
    }
    
    star.addClass("star");
    star.attr("points", starPoints);
    
    return star;
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Creates and returns the shading graphic for a star
//
// full -> Boolean -> Whether or not the shadow is being created for a full star
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getStarShading(full)
{
    // The points for each shadow
    var starShading =
        ["25,0 25,25 33,15",
        "50,20 25,25 40,50 38,30",
        "25,40 25,25 10,50",
        "13,30 25,25 0,20"];
    
    // The polygons to make up the 4 shadows on the star
    var shadows = [$("<polygon/>"), $("<polygon/>"), $("<polygon/>"), $("<polygon/>")];
    
    // For each shadow...
    var shadowsAmount = shadows.length;
    for (var i = 0; i < shadowsAmount; i++)
    {
        //...a half of a star should not have the first 2 shadows, so as long as that is not the case...
        if (full || i > 1)
        {
            // ...prepare the polygon.
            shadows[i].css("fill", "#090");
            shadows[i].addClass("star");
            shadows[i].attr("points", starShading[i]);
        }
    }
    
    return shadows;
}
    
// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Grows (as an animation) the provided container to the correct height to show all of its content
//
// container -> jQuery Div Element -> Container of elements to resize
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function growContainer(container)
{
    let initialHeight = container.height();
    
    // Make the container the correct height to show the content. Since this is being set to auto, it will not animate.
    container.css("height", "auto");
    
    // After the DOM resizes the container...
    sleep(10).then(() =>
    {
        // ...get the number of pixels high the container is.
        let heightToGrow = container.height();
        
        // Set the container back to its original height
        if (container.hasClass("projectContent"))
        {
            container.css("height", initialHeight);
        }
        else
        {
            resizeSkill(container);
        }
                
        // After it is minimized...
        sleep(10).then(() =>
        {
            // ...set the container's height to the number of pixels it should grow. Since it is not being set to "auto", it will animate.
            container.css("height", heightToGrow + "px");
        });
    });
}
    
// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Hides content belonging to a project or skill
//
// fadeContainer -> jQuery Element -> The elements to be faded out
// shrinkContainer -> jQuery Div Element -> The container that is to use a shrinking animation
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function hideContent(fadeContainer, shrinkContainer)
{
    // If this is for a skill...
    if (fadeContainer.hasClass("skillContent"))
    {
        // ...fade the list out
        fadeContainer.children("ul").children("li").css("opacity", "0");
        // Unless the skill has a paragraph, then fade that out
        fadeContainer.children("p").css("opacity", "0");
        
        // Shrink the skill content to its minimized size
        resizeSkill(shrinkContainer);
    }
    // ...otherwise, it must be for a project...
    else
    {
        // ...shrink the container's height completely.
        shrinkContainer.css("height", "0");
            
        // Fade the container out
        fadeContainer.css("opacity", "0");
    }
            
    // When the animations are approximately done...
    sleep(1000).then(() =>
    {
        // ...hide the content.
        fadeContainer.hide();
    });
}
    
// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Repositions and resizes a project's preview image to its original state. Executed when the user chose to enlarge the image by clicking it and now wishes to revert it back.
//
// imagePreview -> jQuery Image Element -> The project's preview image
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function hideEnlargedPreview(imagePreview)
{
    // Darkens the background behind the preview image
    let darkBackground = $("#darkBackground");
    
    // Fade the preview image and dark background out
    imagePreview.css("opacity", 0);
    darkBackground.css("opacity", 0);
    
    // After the preview has faded out...
    sleep(1000).then(() =>
    {
        // ...return its CSS properties to their original state.
        imagePreview.css("display", "inline-block");
        imagePreview.css("left", "0");
        imagePreview.css("top", "0");
        imagePreview.css("height", "auto");
        imagePreview.css("width", "50vw");
        imagePreview.css("margin", "0 1vh 0 1vh");
        imagePreview.css("opacity", 1);
        imagePreview.css("position", "inherit");
    
        $("body").css("overflow-y", "visible");
        
        // Show the navigation menu
        $("#nav").show();
            
        // Remove the dark background and the close button
        darkBackground.remove();
        imagePreview.siblings("#close").remove();
    });
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Transitions a given project preview image into the provided image element
//
// imagePreview -> jQuery DOM Image Element -> Element to display image of project preview
// imageName -> String -> File name of the image
// imageAlt -> String -> Alternate text for image
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function loadImagePreview(imagePreview, imageName, imageAlt)
{
    // Make the current preview image fade out
    imagePreview.css("opacity", "0");
    
    // After the image approximately becomes completely invisible...
    sleep(1000).then(() =>
    {
        // ...change the preview image.
        imagePreview.attr("src", imageName);
        // Fade the new preview image in
        imagePreview.css("opacity", "1");
        
        // Wait a little to ensure that the new image has been completely loaded
        sleep(100).then(() =>
        {
            let projectContent = imagePreview.parent();
            
            // Automatically resizes the container. However, if the property was left to this value, it would not perform a shrink animation.
            projectContent.css("height", "auto");
            
            // Set the container's height to the number of pixels of it's height. Since this property is now no longer set to "auto", the container can perform a vertically-shrinking animation.
            projectContent.css("height", projectContent.height() + "px");
            
            // Center the arrow buttons with the height of the project's preview image.
            centerArrow(imagePreview.siblings(".next"));
            centerArrow(imagePreview.siblings(".previous"));
        });
    });
    
    imagePreview.attr("alt", imageAlt);
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Loads a project's data into the webpage
//
// Note: This function does NOT show the project content if the project is hidden.
//
// type -> Number -> The index of the type of project to be loaded
// project -> Project -> The project to be loaded into the DOM
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function loadProject(type, project)
{
    // Get the correct container to hold the projects array
    let projectContainer = $(".projectContent").eq(type);
    
    let preview = projectContainer.children(".previewImage");
    
    // Load the project title
    projectContainer.children("h3").text(project.getName);
    
    // Load the project image
    loadImagePreview(preview, project.getImage, project.getAlt);
    
    // Get the view project button
    let button = projectContainer.children(".buttonContainer").children("button");
    
    // If the project should have a button...
    if (project.getButton !== "")
    {
        // The text used in the button's "onclick" attribute
        let linkHref = "location.href='" + project.getLink + "'";
        
        // ...show the button if it is hidden.
        button.show();
        // Show the button's animation div. Even though it is "shown", it remains hidden on the button and doesn't show itself until the mouse is hovered over it.
        button.siblings(".buttonAnimation").show();
        // Get the button's text
        button.text(project.getButton);
        // Get the button's URL
        button.attr("onclick", linkHref);
        // Set up the click event listener. The reason why the listener is placed on the button's animation instead of the button itself is because the button animation always seems to be positioned on top of the button, even when its z-index is changed in CSS.
        button.siblings(".buttonAnimation").attr("onclick", linkHref);
    }
    // ...otherwise...
    else
    {
        // ...hide the button and the animation if it is not already hidden.
        button.hide();
        button.siblings("#buttonAnimation").hide();
    }
    
    // Get the first description paragraph
    projectContainer.children("p").eq(0).text(project.getDesc1);
    
    // If the project should have a second paragraph...
    if (project.getDesc2 !== "")
    {
        // ...get it.
        projectContainer.children("p").eq(1).text(project.getDesc2);
        
        // If it should have a third...
        if (project.getDesc3 !== "")
        {
            // ...get it.
            projectContainer.children("p").eq(2).text(project.getDesc3);
        }
        // ...otherwise...
        else
        {
            // ...hide it if it's not hidden.
            projectContainer.children("p").eq(2).hide();
        }
    }
    // ...otherwise...
    else
    {
        // ...hide the second and third paragraphs if they aren't hidden.
        projectContainer.children("p").eq(1).hide();
        projectContainer.children("p").eq(2).hide();
    }
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Resizes an image preview (that has been enlarged) to fit the window size
//
// imagePreview -> jQuery Image Element -> The image preview
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function resizeEnlargedPreview(imagePreview)
{
    // Percentage that the image must grow to fit the viewport horizontally
    var widthIncrease = 0.9 - (imagePreview.width() / $(window).width());
    // Percentage that the image must grow to fit the viewport vertically
    var heightIncrease = 0.9 - (imagePreview.height() / $(window).height());
            
    // If the image has less room to grow horizontally than vertically...
    if (widthIncrease < heightIncrease)
    {
        // ...fit the image to the left and right sides of the viewport.
        imagePreview.css("height", "auto");
        imagePreview.css("width", "90vw");
        imagePreview.css("left", "2vw");
        
        // After the image has been resized...
        sleep(100).then(() =>
        {
            // ...center it.
            imagePreview.css("top", (($(window).height() - imagePreview.height()) / 2) + "px");
        });
    }
    // ...otherwise...
    else
    {
        // ...fit the image to the top and bottom sides of the viewport.
        imagePreview.css("height", "90vh");
        imagePreview.css("width", "auto");
        imagePreview.css("top", "5vh");
        
        sleep(100).then(() =>
        {
            imagePreview.css("left", (($(window).width() - imagePreview.width()) / 2) + "px");
        });
    }
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Resizes a skill's container to what it should be if it is minimized
//
// container -> jQuery List Item Element -> The container of elements belonging to a skill
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function resizeSkill(container)
{
    const SCREEN_WIDTH = $(window).width();
    const SINGLE_LINE_MIN_WIDTH = 1000;
    
    if (SCREEN_WIDTH < SINGLE_LINE_MIN_WIDTH)
    {
        container.css("height", "150px");
    }
    else
    {
        container.css("height", "70px");
    }
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Shows the content of the provided fadeContainer, animating it into view
//
// fadeContainer -> jQuery Element -> The parent element to be shown. It will be faded in.
// shrinkContainer -> jQuery Div Element -> An element that contains some (or all) of the content. It will grow vertically into place.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function showContent(fadeContainer, shrinkContainer)
{
    // Show it
    fadeContainer.show();
     
    // Have the container grow into place
    growContainer(shrinkContainer);
    
    // Fade the container in
    fadeContainer.css("opacity", "1");
            
    // If this is for a project...
    if (fadeContainer.hasClass("projectContent"))
    {
        // ...ensure that the "next" and "previous" buttons are centered with the project preview image.
        centerArrow(fadeContainer.children(".next"));
        centerArrow(fadeContainer.children(".previous"));
    }
    // ...otherwise, it must be for a skill, so...
    else
    {
        // ...fade the skill's list in as well.
        fadeInList(fadeContainer.children("ul").children("li"));
        // Unless the skill has a paragraph instead, then fade that in
        fadeContainer.children("p").css("opacity", "1");
    }
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Enlarges a project's preview image to fit the viewport and fixes it to the viewport. Used to give the user a closer view of the image at the expense of covering the webpage.
//
// imagePreview -> jQuery DOM Element -> A project's preview image
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function showEnlargedPreview(imagePreview)
{
    // Disable the image's fade transition
    imagePreview.css("transition", "opacity 0s linear");
    imagePreview.css("-webkit-transition", "opacity 0s linear");
    
    // Make the image invisible
    imagePreview.css("opacity", 0);
    
    imagePreview.css("display", "initial");
    imagePreview.css("position", "fixed");
    
    // Hide the navigation menu
    $("#nav").hide();
    
    // Set it to the correct size
    resizeEnlargedPreview(imagePreview);
    
    // Re-enable the fading transition
    imagePreview.css("transition", "opacity 1s linear");
    imagePreview.css("-webkit-transition", "opacity 1s linear");
    
    // Create a div to darken the background behind the image to give all attention to the preview image
    let darkenBackground = $("<div></div>");
    darkenBackground.attr("id", "darkBackground");
    
    // Give a little time for the transition to fully re-enable itself
    sleep(100).then(() =>
    {
        // Fade the image and background in
        imagePreview.css("opacity", "1");
        darkenBackground.css("opacity", "0.8");
    });
    
    // Create a close button
    var closeButton = $("<button></button>");
    closeButton.text("X");
    closeButton.attr("id", "close");
    closeButton.attr("alt", "Close Image Preview");
            
    // Add these elements to the DOM
    imagePreview.parent().append(darkenBackground, closeButton);
    
    // Hide the vertical scroll bar
    $("body").css("overflow-y", "hidden");
    
    closeButtonListeners(closeButton, imagePreview);
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Shows the elements that should only be visible if JavaScript is active and running properly
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function showJavaScriptStuff()
{
    $(".buttonContainer").css("visibility", "visible");
    $("#projects .showButtonList").css("height", "auto");
    $("#projects .showButtonList").css("visibility", "visible");
    $(".showHide").css("visibility", "visible");
    $(".divider").css("visibility", "visible");
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Javascript does not included a built in method to halt execution, so a user-defined method to do so is defined here.
//
// time -> Number -> The number of milliseconds that execution should pause
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function sleep (time)
{
    return new Promise((resolve) => setTimeout(resolve, time));
}
        
}})(jQuery);