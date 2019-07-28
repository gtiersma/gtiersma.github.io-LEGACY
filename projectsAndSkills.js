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

// The size in pixels of the arrow buttons used to browse the projects
const ARROW_BUTTON_SIZE = window.innerWidth / 10;

// _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
// 
// Executes once the webpage is loaded
// _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
//  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
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
        
        // Center the arrow buttons with the height of the project's preview image after waiting a short time. If the function was to not sleep here, the arrows will usually be centered with the previous image. The function must wait for the new image to update, and then center the buttons.
        sleep(100).then(() =>
        {
            centerArrow($(this));
            centerArrow($(this).siblings(".previous"));
        });
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
        
        // Center the arrow buttons with the height of the project's preview image after waiting a short time. If the function was to not sleep here, the arrows will usually be centered with the last image in view. The function must wait for the new image to update, and then center the buttons.
        sleep(100).then(() =>
        {
            centerArrow($(this));
            centerArrow($(this).siblings(".next"));
        });
    });

    // _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_ _||_
    // 
    // Event listener for the buttons used to show or hide the content relating to a project or skill
    // _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _ _  _
    //  ||   ||   ||   ||   ||   ||   ||   ||   ||   ||
    $(".showHide").click(function()
    {
        // If the button clicked is a "+" button...
        if ($(this).text() == "+")
        {
            // ...show the content it was hiding.
            $(this).siblings(".projectContent").show();
            $(this).siblings(".skillContent").show();
            // Switch it to a "-" button
            $(this).text("-");
            
            centerArrow($(this).siblings(".projectContent").children(".next"));
            centerArrow($(this).siblings(".projectContent").children(".previous"));
        }
        // ...otherwise, it must be a "-" button...
        else
        {
            // ...show the content it was hiding.
            $(this).siblings(".projectContent").hide();
            $(this).siblings(".skillContent").hide();
            // Switch it to a "+" button
            $(this).text("+");
        }
    });
});

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
    var bottomMargin = (imageHeight / 2) - (ARROW_BUTTON_SIZE / 2);
    
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
    crcl.css("cx", "5vw");
    crcl.css("cy", "5vw");
    crcl.css("r", "4.5vw");
    crcl.css("stroke", "#119911");
    crcl.css("stroke-width", "3");
    crcl.css("fill-opacity", "0");
    
    // Construct the arrow
    var arrow = $("<polygon/>").attr("points", arrowPoints);
    arrow.css("fill", "#119911");
    
    // Set the size of the button
    arrows.css("width", ARROW_BUTTON_SIZE);
    arrows.css("height", ARROW_BUTTON_SIZE);
    
    // Add the shapes to the SVG element
    arrows.append(crcl);
    arrows.append(arrow);
    
    // This is necessary for the arrow buttons to be displayed correctly.
    container.html(container.html());
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
    projectContainer.children(".previewImage").attr("src", project.getImage);
    projectContainer.children(".previewImage").attr("alt", project.getAlt);
    
    // If the project should have a button...
    if (project.getButton !== "")
    {
        // ...show the button if it is hidden.
        projectContainer.children("button").show();
        // Get the button's text
        projectContainer.children("button").text(project.getButton);
        // Get the button's destination link
        projectContainer.children("button").attr("onclick", "location.href='" + project.getLink + "'");
    }
    // ...otherwise...
    else
    {
        // ...hide the button if it is not hidden.
        projectContainer.children("button").hide();
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
        listItem.append(showHide, title, content);
        
        // Load it into the DOM
        skillContainer.append(listItem);
    }
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