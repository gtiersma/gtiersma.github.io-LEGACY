// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// George Tiersma's portfolio website - projectsAndSkills.js
//
// Controls the functionality of the projects and skills sections of the website
//
// This document is property of George Tiersma.
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

// Array of project objects relating to programming
var programs =
    [
        new Project
        (
            "Project Scaper (Title Pending)",
            "",
            "View on GitHub",
            "",
            "Project Scaper Screenshot",
            "Project Scaper allows graphic designers that have no 3D modeling experience to create 3D environments. It imports images designed by the user and uses the images as maps to generate the 3D shape.",
            "It is programmed in Java with the help of the JavaFX platform.",
            ""
        ),
        new Project
        (
            "Stayton Animal Supply Excel Inventory Management System",
            "",
            "",
            "",
            "Screenshot of an inventory management system built in Excel",
            "While working at Stayton Animal Supply, I was given the opportunity to design an inventory management system for the business to use, since the business wanted to become more computerized.",
            "Coded in Visual Basic, it provided the basic necessities for managing products, such as creating, deleting, editing and searching for items. It was successfully used to calculate the business's product inventory at the end of the fiscal year. It was used for 1-2 months. Management was satisfied with the inventory system, however, they decided to deprecate the project because of a better opportunity to invest in a professional, server-based inventory system.",
            "The code is not available online, however I can present it in person upon request."
        ),
        new Project
        (
            "Mod Manager",
            "modManager.png",
            "View on Game Banana",
            "https://gamebanana.com/tools/6663",
            "Mod Manager Screenshot",
            "Mod Manager is a file manager allowing users of mods (modified video game files) to easily switch between them. It has received positive feedback from the mod community for the video game, Mario Kart 8.",
            "It is programmed in Java with the help of the JavaFX platform. It also uses CSS to stylize the GUI.",
            ""
        )
    ];

// Array of project objects relating to graphic design
var graphics = 
    [
        new Project
        (
            "History's Role for the Future",
            "historysRole.png",
            "",
            "",
            "Composition Preview",
            "These compositions were created to contrast the effects that knowledge has on society through time. The top image shows history being studied and a good future on the wall. The bottom image displays history being ignored and a threatening future on the wall.",
            "They take place during the early Renaissance, while the pictures on the wall portray the what will come of future in perspective of the Renaissance, specifically the late 1800s and early 1900s.",
            "The compositions were created in Photoshop. They are composed of dozens of separate layers. The photos in the background were provided by the Library of Congress. The subject's face was created in Daz 3D, while her hair was painted directly in Photoshop and the armor was created from manipulated photos of a metal pen. All other elements were created from photos I shot."
        ),
        new Project
        (
            "Nature Rules",
            "natureRules.jpg",
            "",
            "",
            "Composition Preview",
            'This is a Photo Illustration class exercise that is a personal recreation of a composition titled, "Nature Rules", created by the instructor, Bret Malley.' + " He supplied the artwork's source photography, which consisted of a basic photo of a city, a field, a mountain and a sky. I then completed the remaining work with Photoshop. A guide to follow was given, however I did quite a bit of work outside of the guide to enhance the shading, lighting and color.",
            "",
            ""
        )
    ];

// Array of project objects relating to database development
var databases = 
    [
        new Project
        (
            "Bicycle Rental Business ER Diagram",
            "erd.png",
            "View DDL Script",
            "bicyclyDDL.txt",
            "ER Diagram",
            'As a project for a database class, I worked in a group with two other individuals to develop a database system for a fictional bicycle rental business. Our group name was the "Cyber Centurions".',
            "The diagram was not directly designed by me, however I played a big part in discussing how the data should be organized to optimize the business's capabilities.",
            "My team decided that I should be tasked with the creation of the database's SQL Data-Definition script. It was used to automate the creation of the entity tables within Access."
        ),
        new Project
        (
            "Bicycle Rental Business Access Database Form",
            "databaseForm.png",
            "Download Database File",
            "bicycleDatabase.accdb",
            "Screenshot of a form in Access",
            "As a project for a database class, I worked in a group with two other individuals to develop a database system for a fictional bicycle rental business.",
            "The database was implemented in Microsoft Access, complete with data-entry forms and reports that could be generated.",
            "It was my job to design the database. I had a tight deadline to complete it, so this form was created in a rush, but I made certain that it had the necessities and was functional."
        )
    ];

// Array of the array of projects
var projects = [programs, graphics, databases];

// The array of technical skills. Each skill is an array of its own, containing the skill's title, rating and bulleted facts for the skill.
var hardSkills =
    [
        [
            "Graphic Design",
            8,
            "Very familiar with Adobe Photoshop",
            "Very familiar with Gimp",
            "Practices non-destructive design in image editors whenever possible",
            "Skilled in typography",
            "Skilled in logo design",
            "Skilled with user interface creation"
        ],
        [
            "Computer Programming",
            7,
            "Familiar with Java, JavaScript, Visual Basic and Python",
            "Somewhat familiar with C++",
            "Knows how to use JavaFX with FXML",
            "Understands object-oriented concepts such as inheritance and polymorphism",
            "Prioritizes organizing code and documentation",
            "Knows how to utilize multiple threads in code",
            "Strong with mental mathematics",
            "Usually fast at researching programming-related topics on the Internet"
        ],
        [
            "Web Development",
            7,
            "Familiar with the HTML, CSS, JavaScript and XML languages",
            "Understands the importance of progressive enhancement, responsive web design and accessibility",
            "Separates structural code into HTML, UI code into CSS and functional code into Javascript"
        ],
        [
            "Database Development",
            6,
            "Familiar with SQL",
            "Familiar with Microsoft Access",
            "Knows how to read and create ER Diagrams"
        ],
        [
            "Computer Hardware",
            5,
            "Has successfully built a PC",
            "Can diagnose many hardware-related issues"
        ]
    ];

// The array of soft skills. Each skill is an array of its own, containing the skill's title, rating and description for the skill.
var softSkills =
    [
        [
            "Teamwork",
            9,
            "When working in a team, I make a much higher priority of completing my share of the workload. Whenever a team member needs assistance and I am available to help, I take action to help. I do not allow my convictions and beliefs to hinder the progress of the team. Avoiding conflict in a team is much more important to me than being treated fairly."
        ],
        [
            "Written Communication",
            9,
            "When writing (or typing) instructions or information, I spend extra time re-reading everything I wrote, and I usually re-write my sentences a few times to ensure that it is easy to understand. If I was to create a manual for some software, I would prioritize step-by-step instructions and complete sentences throughout. When programming, I document and explain any code that has even a slight possibility of being misunderstood by any skilled programmer (which makes up nearly all of the code I type)"
        ],
        [
            "Perseverance",
            8,
            "Whenever I am given a task, I do not give up. Even if it takes hours of research, I do not stop searching for a solution. However, if it becomes apparent that a solution does not exist or that it is not worth the time required, I devise an alternative solution."
        ],
        [
            "Organization",
            7,
            "Whether it is code and files on my computer or physical papers and documents, I make sure to place things where I can remember them and sort them when needed. Thanks to organization, I rarely lose anything, and I can quickly find what I need."
        ],
        [
            "Troubleshooting",
            7,
            "If a computer is not working as it should, I can usually discover a solution for it rather quickly. While working at Stayton Animal Supply, I am the employee that is tasked with fixing any computer-related issues that arise. I also troubleshoot any PC issues that occur within my household as well."
        ]
    ];

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Executes once the webpage is loaded
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
(function($){

$(document).ready( function()
{
    // Keeps track of the indexes of the currently active projects. The first projects (0) are loaded initially.
    var currentProjects = [0, 0, 0];
    
    // Creates the arrow buttons for each project-viewer
    createArrows(true);
    createArrows(false);
    
    // Loads the initial projects into the DOM
    for (var i = 0; i < currentProjects.length; i++)
    {
        loadProject(currentProjects[i], i);
    }
    
    // The projects are hidden when the webpage is first loaded
    $(".projectContent").hide();
    
    // Loads the skills into the DOM
    loadSkills(true);
    loadSkills(false);
    
    // The skills are hidden as well
    $(".skillContent").hide();
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Event listener for the arrow buttons to view the next project
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".next").click(function()
    {
        // Get the index for the project type
        var type = getType($(this).parent());
        
        // If there is another project after the one currently in view...
        if ((currentProjects[type] + 1) < projects[type].length)
        {
            // ...set the current project to the next one.
            currentProjects[type] = currentProjects[type] + 1;
        }
        // ...otherwise...
        else
        {
            // ...set the current project to the first one.
            currentProjects[type] = 0;
        }
        
        // Load the next project into the DOM
        loadProject(currentProjects[type], type);
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Event listener for the arrow buttons to view the previous project
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".previous").click(function()
    {
        // Get the index for the project type
        var type = getType($(this).parent());
        
        // If there is a project before the one currently in view...
        if (currentProjects[type] > 0)
        {
            // ...set the current project to the previous one.
            currentProjects[type] = currentProjects[type] - 1;
        }
        // ...otherwise...
        else
        {
            // ...set the current project to the last one.
            currentProjects[type] = projects[type].length - 1;
        }
            
        // Load the previous project into the DOM
        loadProject(currentProjects[type], type);
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Event listener for the buttons used to show or hide the content relating to a project or skill
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".showHide").click(function()
    {
        // The DOM container that performs a fade effect when shown or hidden
        var fadeContainer;
        // The DOM container that flattens when minimized
        var shrinkContainer;
        
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
            // ...the "skillContent" container performs the fade effect.
            fadeContainer = $(this).siblings(".skillContent");
            // The list item performs the shrink effect.
            shrinkContainer = $(this).parent();
        }
        
        // If the button clicked is a "+" button...
        if ($(this).text() == "+")
        {
            // ...show the content.
            fadeContainer.show();
            
            // This container must also be opac before the height can be retrieved. This line also begins the fade animation
            fadeContainer.css("opacity", "1");
            
            // Resize the container, allowing for the shrink animation
            adjustForShrink(shrinkContainer);
            
            // Switch it to a "-" button
            $(this).text("-");
            
            // If this is for a project...
            if (fadeContainer.hasClass("projectContent"))
            {
                // ...ensure that the "next" and "previous" buttons are centered with the project preview image.
                centerArrow(fadeContainer.children(".next"));
                centerArrow(fadeContainer.children(".previous"));
            }
        }
        // ...otherwise, it must be a "-" button...
        else
        {
            // If this is for a skill...
            if (fadeContainer.hasClass("skillContent"))
            {
                // ...shrink the container's height so that the show/hide button and the skill title are still visible.
                shrinkContainer.css("height", ($(this).height() + 10) + "px");
            }
            // ...otherwise, it must be for a project...
            else
            {
                // Shrink the container's height completely
                shrinkContainer.css("height", 0);
            }
            
            // Fade this container out
            fadeContainer.css("opacity", "0");
            
            // When the animations are approximately done...
            sleep(1000).then(() =>
            {
                // ...hide the content.
                fadeContainer.hide();
            });
            
            // Switch it to a "+" button
            $(this).text("+");
        }
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Animates the show/hide button when hovered upon
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".showHide").hover(function()
    {
        $(this).css("box-shadow", "3px 3px #000000");
        $(this).css("text-shadow", "3px 3px #000000");
    },
    function()
    {
        $(this).css("box-shadow", "5px 5px #000000");
        $(this).css("text-shadow", "0 0");
    });
    
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
        svg.children(".arrowShadow").css("stroke-width", 0);
    },
    function()
    {
        var svg = $(this).parent();
        
        svg.children(".arrowCircle").css("stroke-width", 3);
        svg.children(".arrowCircle").css("opacity", 1);
        svg.children(".arrowShadow").css("stroke-width", 3);
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Animates the arrow buttons when clicked
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".arrowCircle, polygon").on("mousedown", function()
    {
        $(this).parent().children("polygon").css("fill", "#FFFFFF");
    });
    $(".arrowCircle, polygon").on("mouseup", function()
    {
        $(this).parent().children("polygon").css("fill", "#119911");
    });
    
    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Performs actions when the viewport is scrolled.
    // More specifically, this listener animates the skill rating graphics when they come in or go out of view.
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(window).on("scroll", function()
    {
        // The "y" position of the top of the viewport and the bottom of the viewport
        var viewportTop = $(this).scrollTop();
        var viewportBottom = $(this).scrollTop() + $(this).height();
        
        // Each container for the skill ratings
        var skillRatings = $(".ratingContainer");
        
        // For each rating...
        for (var i = 0; i < skillRatings.length; i++)
        {
            // A boolean of whether or not the animation should be reversed or not
            var reverseAnimate;
            
            // The "y" position of the rating graphic
            var skillPosition = skillRatings.eq(i).offset().top;
            
            // The number of stars in the rating graphic.
            var starsAmount = getAmountOfStars(i);
            
            // If the skill graphic is currently in the viewport...
            if (skillPosition > viewportTop && skillPosition < viewportBottom)
            {
                // ...the animation should not be reversed.
                reverseAnimate = false;
            }
            // ...otherwise...
            else
            {
                // ...it should be reversed.
                reverseAnimate = true;
            }
    
            // For each star graphic in the skill's rating...
            for (var j = 0; j < starsAmount; j++)
            {
                // ...animate it.
                animateStar(reverseAnimate, i, j);
            }
        }
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
});

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Automatically adjusts a given element's height while allowing it to have a vertically shrinking transition animation.
// Commonly used by the div containers in the webpage that can be shown/hidden.
//
// elmnt -> jQuery DOM Element -> The element to be automatically resized
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function adjustForShrink(elmnt)
{
    // Automatically resizes the element. However, if the property was left to this value, it would not perform a shrink animation.
    elmnt.css("height", "auto");
            
    // Get the height in pixels of the automatically-sized element
    var height = elmnt.height();
            
    // Set the element's height to the number of pixels of it's height. Since this property is now no longer set to "auto", the element can perform a vertically-shrinking animation.
    elmnt.css("height", height + "px");
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Animates a star graphic either into view or out of view
//
// reverse -> Boolean -> Whether or not the animation should be reversed
// skillIndex -> Number -> The zero-based number of which skill the star being animated belongs too (ordered by position in the DOM)
// starIndex -> Number -> The zero-based number of which star in the rating graphic should be animated (ordered by position from left to right)
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function animateStar(reverse, skillIndex, starIndex)
{
    // The SVG graphic containing the star with the hexagon behind it
    var svg = document.getElementsByClassName("ratingContainer")[skillIndex].children[starIndex].children[1];
        
    // If the animation is to be reversed...
    if (reverse)
    {
        // ...horizontally squish the hexagon.
        svg.children[0].style.transform = "scaleX(0)";
        
        // For the star and each shadow on it...
        for (var i = 1; i < svg.children.length; i++)
        {
            // ...animate it out of view.
            svg.children[i].style.transform = "rotate(180deg) scale(0.5) translate(0, 0)";
        }
    }
    // ...otherwise...
    else
    {
        // ...wait a little, allowing the stars to animate into view sequentially, then...
        sleep(500 * starIndex).then(() =>
        {
            // ...horizontally stretch the hexagon into shape.
            svg.children[0].style.transform = "scaleX(1.0)";
            
            // For the star and each shadow on it...
            for (var i = 1; i < svg.children.length; i++)
            {
                // ...animate it into view.
                svg.children[i].style.transform = "rotate(0) scale(0.8) translate(5px, 5px)";
            }
        }); 
    }
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
    var imageHeight = arrow.siblings(".previewImage").height();
    
    // In order for the button to be centered, its bottom margin must be adjusted to the result of this calculation.
    var bottomMargin = (imageHeight / 2) - ((window.innerWidth / 10) / 2);
    
    arrow.css("margin-bottom", bottomMargin);
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
    var arrows;
    
    // Array of numbers used in the arrow's coordinates that vary depending on whether the "next or "previous" buttons are being created
    var variablePoints;
    
    // If the "next" buttons are being created...
    if (next)
    {
        // ...get the correct svg elements and varying points.
        arrows = $(".next");
        variablePoints = [3, 8];
    }
    // ...otherwise, if the "previous" buttons are being created...
    else
    {         
        // ...get these other ones.
        arrows = $(".previous");
        variablePoints = [7, 2];
    }
    
    // 1% of the screen width. Polygons in SVG cannot be created with "%" or "vw" units for some reason, so the conversion of "px" to "%" is handled programatically.
    var centScreenWidth = window.innerWidth / 100;
    
    // Points used to create the arrow shape
    var arrowPoints =
        (variablePoints[0] * centScreenWidth) + "," + (4 * centScreenWidth) + " " +
        (5 * centScreenWidth) + "," +                 (4 * centScreenWidth) + " " +
        (5 * centScreenWidth) + "," +                 (3 * centScreenWidth) + " " +
        (variablePoints[1] * centScreenWidth) + "," + (5 * centScreenWidth) + " " +
        (5 * centScreenWidth) + "," +                 (7 * centScreenWidth) + " " +
        (5 * centScreenWidth) + "," +                 (6 * centScreenWidth) + " " +
        (variablePoints[0] * centScreenWidth) + "," + (6 * centScreenWidth);
    
    var container = $(".projectContent");
    
    // The circle surrounding the arrow. Unlike polygons, circles can be created with "vw" units through CSS.
    var crcl = $("<circle/>");
    crcl.addClass("arrowCircle");
    crcl.css("cx", "5vw");
    crcl.css("cy", "5vw");
    crcl.css("r", "4.5vw");
    crcl.css("stroke", "#119911");
    crcl.css("stroke-width", "3");
    crcl.css("fill-opacity", "0");
    
    // The circle's shadow
    var circleShadow = $("<circle/>");
    circleShadow.addClass("arrowShadow");
    circleShadow.css("cx", "5.1vw");
    circleShadow.css("cy", "5.1vw");
    circleShadow.css("r", "4.5vw");
    circleShadow.css("stroke", "#000000");
    circleShadow.css("stroke-width", "3");
    circleShadow.css("fill-opacity", "0");
    
    // Construct the arrow
    var arrow = $("<polygon/>").attr("points", arrowPoints);
    arrow.css("fill", "#119911");
    
    // Set the size of the button
    arrows.css("width", window.innerWidth / 10);
    arrows.css("height", window.innerWidth / 10);
    
    // Add the shapes to the SVG element
    arrows.append(circleShadow);
    arrows.append(crcl);
    arrows.append(arrow);
    
    // This is necessary for the arrow buttons to be displayed correctly.
    container.html(container.html());
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Gets the number of stars that should appear in the rating graphic.
// NOTE: Half stars are counted as 1 star in this function.
//
// index -> Number -> The zero-based number of which skill the number of stars should be checked for (ordered by placement in the DOM)
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getAmountOfStars(index)
{
    var numStars = 0;
    
    // The first 5 indexes are hard skills. The rest are soft skills.
    if (index < 5)
    {
        numStars = Math.ceil(hardSkills[index][1] / 2);
    }
    else
    {
        // The number of hard skills is subtracted from the index to get the index into the correct range.
        numStars = Math.ceil(softSkills[index - 5][1] / 2);
    }
    
    return numStars;
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
    
    // The SVG element to contain the whole graphic
    var graphic = $("<svg></svg>");
    
    var hexagon = $("<polygon/>");
    var star = $("<polygon/>");
    
    // If there should be no star...
    if (full === 0)
    {
        // ...only a grey hexagon is created.
        hexagon.css("fill", "#EEEEEE");
        
        hexagon.addClass("starHexagonBack");
    }
    // ...otherwise, if it should be a half of a star...
    else if (full === 1)
    {
        // ...modify the hexagon's points to create a half of a hexagon.
        hexagonPoints = hexagonPoints.replace(
            "40,5 50,25 40,45",
            "25,5 25,45");
        hexagon.css("fill", "#119911");
        
        hexagon.addClass("starHexagonFront");
        
        // Get a half of a star
        star = getStarGraphic(false);
        starShading = getStarShading(false);
    }
    // ...otherwise, it should be a full star.
    else
    {
        // Get a full hexagon and a star
        hexagon.css("fill", "#119911");
        
        hexagon.addClass("starHexagonFront");
        
        star = getStarGraphic(true);
        starShading = getStarShading(true);
    }
    
    hexagon.attr("points", hexagonPoints);
    
    graphic.append(hexagon);
    
    // If there is a star in the graphic...
    if (full !== 0)
    {
        // ...add the star to the graphic.
        graphic.append(star);
        
        // For each shadow on the star...
        for (var i = 0; i < starShading.length; i++)
        {
            // ...add it as well.
            graphic.append(starShading[i]);
        }
    }
    
    return graphic;
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
    // A decrementing counter for the rating
    var rtng = rating;
    
    // The container to contain the graphic
    var container = $("<div></div>");
    container.addClass("ratingContainer");
    
    // For each spot a star could be placed...
    for (var i = 0; i < 5; i++)
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
        rtng = rtng - 2;
    }
    
    // This is necessary for the rating graphic to be displayed correctly.
    container.html(container.html());
    
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
    
    star.css("fill", "#CCFFCC");
    
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
// Creates and returns the shadow graphic for a star
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
    
    var shadows = [$("<polygon/>"), $("<polygon/>"), $("<polygon/>"), $("<polygon/>")];
    
    // For each shadow...
    for (var i = 0; i < shadows.length; i++)
    {
        //...a half of a star should not have the first 2 shadows, so as long as that is not the case...
        if (full || i > 1)
        {
            // ...prepare the polygon.
            shadows[i].css("fill", "#66CC66");
            shadows[i].addClass("star");
            shadows[i].attr("points", starShading[i]);
        }
    }
    
    return shadows;
}
    
// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Returns the index of the projects array of the type of project that the given container element of a project's content belongs to.
//
// controlsParent -> jQuery DOM Element -> Container of elements of which the index is being returned for.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function getType(controlsParent)
{
    // Index of projects array that the container element belongs to
    var type;
    
    // For each type of project...
    for (var i = 0; i < projects.length; i++)
    {
        // ...if the title in given container is the same title of the project of this type...
        if (controlsParent.children("h3").text() === $(".projectContent").eq(i).children("h3").text())
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
// Repositions and resizes a project's preview image to its original state. Executed when the user chose to enlarge the image by clicking it and now wishes to revert it back.
//
// controlsParent -> jQuery DOM Element -> Container of elements of which the index is being returned for.
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function hideEnlargedPreview(imagePreview)
{
    // Fade the preview image out
    imagePreview.css("opacity", 0);
    
    // After the preview has faded out...
    sleep(1000).then(() =>
    {
        // ...return its CSS properties to their original state.
        imagePreview.css("display", "inline-block");
        imagePreview.css("left", "0");
        imagePreview.css("top", "0");
        imagePreview.css("height", "auto");
        imagePreview.css("width", "50vw");
        imagePreview.css("margin", "0 5vh 0 5vh");
        imagePreview.css("opacity", 1);
        imagePreview.css("position", "inherit");
        imagePreview.css("z-index", "0");
            
        // Remove the dark background and the close button
        imagePreview.siblings("#darkBackground").remove();
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
function loadPreview(imagePreview, imageName, imageAlt)
{
    // Make the current preview image fade out
    imagePreview.css("opacity", "0");
    
    // After the image approximately becomes completely invisible...
    sleep(1000).then(() =>
    {
        // ...change the preview image.
        imagePreview.attr("src", "previews/" + imageName);
        // Fade the new preview image in
        imagePreview.css("opacity", "1");
        
        // Wait a little to ensure that the new image has been completely loaded
        sleep(100).then(() =>
        {
            // Resizes the container to fit the new image and content
            adjustForShrink(imagePreview.parent());
            
            // Center the arrow buttons with the height of the project's preview image.
            centerArrow(imagePreview.siblings(".next"));
            centerArrow(imagePreview.siblings(".previous"));
        });
    });
    
    imagePreview.attr("alt", imageAlt);
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Loads a project into the webpage
//
// Note: This function does NOT show the project content if the project is hidden.
//
// indexToLoad -> Number -> The index of the project to be loaded
// type  -> Number -> The index of the type of project to be loaded
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function loadProject(indexToLoad, type)
{
    // Get the project to be loaded from the projects array
    var project = projects[type][indexToLoad];
    
    // Get the correct container to hold the projects array
    var projectContainer = $(".projectContent").eq(type);
    
    // Load the project title
    projectContainer.children("h3").text(project.getName);
    
    // Load the project image
    loadPreview(projectContainer.children(".previewImage"), project.getImage, project.getAlt);
    
    // Get the view project button
    var bttn = projectContainer.children(".buttonContainer").children("button");
    
    // If the project should have a button...
    if (project.getButton !== "")
    {
        // ...show the button if it is hidden.
        bttn.show();
        // Show the button's animation div. Even though it is "shown", it remains hidden on the button and doesn't show itself until the mouse is hovered over it.
        bttn.siblings("#buttonAnimation").show();
        // Get the button's text
        bttn.text(project.getButton);
        // Get the button's URL
        bttn.attr("onclick", "location.href='downloads/" + project.getLink + "'");
        // Set up the click event listener. The reason why the listener is placed on the button's animation instead of the button itself is because the button animation always seems to be positioned on top of the button, even when its z-index is changed in CSS.
        bttn.siblings("#buttonAnimation").attr("onclick", "location.href='" + project.getLink + "'");
    }
    // ...otherwise...
    else
    {
        // ...hide the button and the animation if it is not already hidden.
        bttn.hide();
        bttn.siblings("#buttonAnimation").hide();
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
// Loads either hard skills or soft skills into the webpage
//
// Note: This function does NOT show any of the skills' content if the skills are hidden.
//
// hard -> Boolean -> True if technical skills are to be loaded. False for soft skills
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function loadSkills(hard)
{
    // Reference variable to the array of skills to be loaded
    var sklls;
    
    // The ul element to contain the technical skills
    var skillContainer;
    
    // If the technical skills are being loaded...
    if (hard)
    {
        // ...get the ones for technical skills.
        skillContainer = $("#skills .list").eq(0);
        sklls = hardSkills;
    }
    // ...otherwise...
    else
    {
        // ...get the other ones.
        skillContainer = $("#skills .list").eq(1);
        sklls = softSkills;
    }
    
    // For each skill to be loaded...
    for (var i = 0; i < sklls.length; i++)
    {
        // ...create a list item to store the skill's elements.
        var listItem = $("<li></li>");
        
        // Button to show or hide the skill
        var showHide = $("<button></button>").text("+");
        showHide.attr("class", "showHide");
        
        // Title of the skill
        var title = $("<h2></h2>").text(sklls[i][0]);
        title.attr("class", "skill");
        
        var rating = getRatingGraphic(sklls[i][1]);
        
        // Container for the skill's facts
        var content = $("<div></div>").attr("class", "skillContent");
        
        var facts;
        
        // If technical skills are being loaded...
        if (hard)
        {
            // ...the facts are stored in a bulleted list.
            facts = $("<ul></ul>").attr("class", "bulleted");
        
            // For each fact...
            for (var j = 2; j < sklls[i].length; j++)
            {
                // ...place it inside a list item.
                var fact = $("<li><h4></h4></li>").text(sklls[i][j]);
        
                facts.append(fact);
            }
        }
        // ...otherwise...
        else
        {
            // ...place the soft skill's facts in the form of a paragraph.
            facts = $("<p></p>").text(sklls[i][2]);
        }
        
        // Put the skill's content together
        content.append(facts);
        listItem.append(showHide, title, rating, content);
        
        // Load it into the DOM
        skillContainer.append(listItem);
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
    // Percentage that the image must grow to fit the viewport horizontally
    var widthIncrease = 0.9 - (imagePreview.width() / $(window).width());
    // Percentage that the image must grow to fit the viewport vertically
    var heightIncrease = 0.9 - (imagePreview.height() / $(window).height());
    
    // Disable the image's fade transition
    imagePreview.css("transition", "opacity 0s linear");
    // Make the image invisible
    imagePreview.css("opacity", 0);
    
    imagePreview.css("display", "initial");
    imagePreview.css("left", "50%");
    imagePreview.css("top", "50%");
    imagePreview.css("position", "fixed");
    imagePreview.css("z-index", "20");
            
    // If the image has less room to grow horizontally than vertically...
    if (widthIncrease < heightIncrease)
    {
        // ...fit the image to the left and right sides of the viewport.
        imagePreview.css("height", "auto");
        imagePreview.css("width", "90vw");
        imagePreview.css("margin", "-" + (imagePreview.height() / 2) + "px 0 0 -45vw");
    }
    // ...otherwise...
    else
    {
        // ...fit the image to the top and bottom sides of the viewport.
        imagePreview.css("height", "90vh");
        imagePreview.css("width", "auto");
        imagePreview.css("margin", "-45vh 0 0 -" + (imagePreview.width() / 2) + "px");
    }
    
    // Re-enable the fading transition
    imagePreview.css("transition", "opacity 1s linear");
    
    // Give a little time for the transition to fully re-enable itself
    sleep(100).then(() =>
    {
        // Fade the image in
        imagePreview.css("opacity", 1);
    });
    
    // Create a div to darken the background behind the image to give all attention to the preview image
    var darkenBackground = $("<div></div>");
    darkenBackground.attr("id", "darkBackground");
    
    // Create a close button
    var closeButton = $("<button></button>");
    closeButton.text("X");
    closeButton.attr("id", "close");
            
    // Add these elements to the DOM
    imagePreview.parent().append(darkenBackground, closeButton);
    
    // These event listeners must exist here instead of the load method with the others. The close button does not exist when the load method is executed, therefore these event listeners would not be assigned to the button if they were placed in the load method.
    
    // When the close button is clicked...
    $("#close").click(function()
    {
        // ...return the image to it's normal state.
        hideEnlargedPreview($(this).siblings(".previewImage"));
    });
    
    // Animate the close button's colors when hovered
    $("#close").hover(function()
    {
        $(this).css("border-width", 0);
        $(this).css("background-color", "#FFFFFF");
    },
    function()
    {
        $(this).css("border-width", "3px");
        $(this).css("background-color", "#00000000");
    });
}

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Javascript does not included a built in method to hault execution, so a user-defined method to do so is defined here.
//
// time -> Number -> The number of milliseconds that execution should pause
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
function sleep (time)
{
    return new Promise((resolve) => setTimeout(resolve, time));
}

})(jQuery);