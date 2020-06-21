//###::::::###::::::###::::::###::::::###::::::###
//
// George Tiersma's portfolio website - title.js
//
// Constructs and animates the website's title
//
//###::::::###::::::###::::::###::::::###::::::###



(function($)
{
    // As long as IE and Edge is not being used...
    if (!(document.documentMode || /Edge/.test(navigator.userAgent) || /Edg/.test(navigator.userAgent)))
    {
    
    //###::::::###::::::###::::::###::::::###::::::###
    //
    // GLOBAL CONSTANTS
    //
    // All of these are used in the light animation effect. To optimize performance, these are declared outside of the "lightEffect" repeated method.
    //
    //###::::::###::::::###::::::###::::::###::::::###
    
    // The least and most amount of time (in milliseconds) to wait before possibly animating another light
    const MIN_LIGHT_DELAY = 2000;
    const MAX_LIGHT_DELAY = 3000;
    
    // The least and most bright the light can be. Each value should be below 256. 0 is black. 255 is white.
    const MIN_LIGHT_BRIGHTNESS = 63;
    const MAX_LIGHT_BRIGHTNESS = 255;
    
    // The least and most saturation that the light may have. Each value should be below 256. 0 is colorless. 255 is neon.
    const MIN_LIGHT_SATURATION = 127;
    const MAX_LIGHT_SATURATION = 255;
    
    // The least and most amount of time (in milliseconds) that a light may animate before it disappears. This includes both the time that the light grows and shrinks.
    const MIN_LIGHT_LIFE = 1000;
    const MAX_LIGHT_LIFE = 5000;
        
    // The smallest and largest size that a light can grow to be in pixels.
    const MIN_LIGHT_SIZE = 50;
    const MAX_LIGHT_SIZE = 700;
    
    // The most lights that can be animating at the same time. This should be equal to the number of circle elements in the light pattern in the DOM. That number cannot be retrieved from the DOM at this point due to the fact that the DOM has not yet been rendered at this point in time. This variable also must be declared here rather than in the "lightEffect" method to help maintain optimal performance.
    var MAX_LIGHTS = 5;
    
    // Used to keep track of which circle elements are currently in animation and which are currently inactive
    var activeLights = Array(MAX_LIGHTS).fill(false);

    // Will stop the light animation if something is going wrong
    var abortAnimation = false;
    
    
//###::::::###::::::###::::::###::::::###::::::###
//
// Executes once the webpage is loaded
//
//###::::::###::::::###::::::###::::::###::::::###
$(document).ready( function()
{
    preparePatterns();
    
    // The light effect only seems to function properly in Chrome
    if (navigator.userAgent.search("Chrome") >= 0)
    {
        lightEffect();
    }
    
    adjustWindow();
    
    // RWD
    $(window).resize(function()
    {
        adjustWindow();
    });
});

    
    
    
    
//###::::::###::::::###::::::###::::::###::::::###
//
// FUNCTIONS (sorted alphabetically)
//
//###::::::###::::::###::::::###::::::###::::::###
    
//###::::::###::::::###::::::###::::::###::::::###
//
// Resizes and repositions the elements relating to the website's title in response to the window's size
//
//###::::::###::::::###::::::###::::::###::::::###
function adjustWindow()
{
    var tenthWidth = $(window).width() / 10;
    var tenthHeight = $(window).height() / 10;
    
    var tenthAverage = (tenthWidth + tenthHeight) / 2;
    
    var firstName = $(".firstName");
    var lastName = $(".lastName");
    
    // These are SVG elements, so vw and vh units will not work with these, which is why their position in pixels is calculated here in JavaScript
    firstName.attr("x", (tenthWidth * 3.5) + "px");
    lastName.attr("x", (tenthWidth * 4.5) + "px");
    
    // Repositions the height of the title when the window is not wide
    if ($(window).width() < 500)
    {
        firstName.attr("y", (tenthAverage * 1.3) + "px");
        lastName.attr("y", (tenthAverage * 2.5) + "px");
    }
    else
    {
        firstName.attr("y", (tenthAverage * 2.8) + "px");
        lastName.attr("y", (tenthAverage * 4) + "px");
    }
}
    
//###::::::###::::::###::::::###::::::###::::::###
//
// Animates a light animate
//
// light -> jQuery DOM SVG Circle Element -> The element to be used as the light
// animationLength -> Number -> The amount of time (in milliseconds) that it should take for the light to grow or shrink
// size -> Number -> The size in pixels that the light will grow to
//
//###::::::###::::::###::::::###::::::###::::::###
function animateLight(light, animationLength, size)
{
    // The time at which the animation begins
    var startTime = new Date();
    
    // A very short pause must exist for the CSS transition property to begin working
    sleep(100).then(() =>
    {
        // Begin scaling the light to size
        light.css("transform", "scale(1) translate(0, 0)");
        light.css("opacity", "1.0");
        
        // Once the light has reached its full size and opacity...
        sleep(animationLength).then(() =>
        {
            // ...shrink it back.
            light.css("transform", "scale(0.1) translate(" + size + "px, " + size + ")");
            light.css("opacity", "0");
            
            // The time at which the light finishes growing to its maximum size
            var middleTime = new Date();
            
            // If the time it took to grow is unreasonably longer than it should be...
            if (((middleTime - startTime) / animationLength) > 1.2)
            {
                // ...something is wrong. End the animation. This is used to prevent the animation from running in case of incredibly high CPU usage (which can happen in some versions of FireFox), a memory leak (which can happen in older versions of Chrome) or if the computer lacks the available resources.
                abortAnimation = true;
                
                // Remove the light effect elements from the DOM to clean up any excessive RAM it was using
                $(".nameLayer2").remove();
            }
        });
    });
}
    
//###::::::###::::::###::::::###::::::###::::::###
//
// Creates a polygon SVG element of a hexagon for the hexagon pattern
//
// size -> Number -> Determines the size of the hexagon
// spacing -> Number -> The amount of space that should exist between each hexagon
// xOffset -> Number -> The number of pixels that the hexagon should be shifted horizontally (not taking spacing into consideration)
// yOffset -> Number -> The number of pixels that the hexagon should be shifted vertically (not taking spacing into consideration)
//
//###::::::###::::::###::::::###::::::###::::::###
function getHexagon(size, spacing, xOffset, yOffset)
{
    // Used as a unit of measurement in the plotting of the hexagon's points
    let oneTenthSize = size / 10;
    
    let hexagonPoints = 
        (2 * oneTenthSize + spacing)  + "," + (oneTenthSize + spacing) + " " +
        (8 * oneTenthSize + spacing)  + "," + (oneTenthSize + spacing) + " " +
        (10 * oneTenthSize + spacing) + "," + (5 * oneTenthSize + spacing) + " " +
        (8 * oneTenthSize + spacing)  + "," + (9 * oneTenthSize + spacing) + " " +
        (2 * oneTenthSize + spacing)  + "," + (9 * oneTenthSize + spacing) + " " +
        spacing + ","                       + (5 * oneTenthSize + spacing);
    
    let hexagon = $("<polygon>");
    
    hexagon.attr("points", hexagonPoints);
    
    hexagon.css("transform", "translate(" + xOffset + "px, " + yOffset + "px)");
    
    return hexagon;
}

//###::::::###::::::###::::::###::::::###::::::###
//
// Gets a random, whole number between the values provided
//
// min -> Number -> The smallest possible value to be returned
// max -> Number -> The largest possible value to be returned
//
//###::::::###::::::###::::::###::::::###::::::###
function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min - 1)) + min;
}

//###::::::###::::::###::::::###::::::###::::::###
//
// Gets a string representation of a color of green
//
// brightness -> Number -> A value from 0-255 of how bright the color should be
// saturation -> Number -> A value from 0-255 of how colorful the color should be
//
//###::::::###::::::###::::::###::::::###::::::###
function getShadeOfGreen(brightness, saturation)
{
    var green = brightness + saturation;
    
    // Each color value cannot exceed 255
    if (green > 255)
    {
        green = 255;
    }
    
    var color = "rgb(" + brightness + ", " + green + ", " + brightness + ")";
    
    return color;
}

//###::::::###::::::###::::::###::::::###::::::###
//
// May create a light for the title's text effect if certain conditions within this method are met.
//
//###::::::###::::::###::::::###::::::###::::::###
function lightEffect()
{
    // After waiting a random amount of time...
    sleep(getRandomNumber(MIN_LIGHT_DELAY, MAX_LIGHT_DELAY)).then(() =>
	{
        // ...as long as there are no problems with the animation...
        if (!abortAnimation)
        {
            // ...begin possibly animating another light.
            requestAnimationFrame(lightEffect);
        }
	});
    
    // The circle element to be used as the light
    var light;
    
    // Determines which circle element is being used
    var lightNumber;
        
    // Get a circle element for a light from the pool of circles
    for (var i = 0; i < MAX_LIGHTS; i++)
    {
        // As long as the circle is not currently in use...
        if (activeLights[i] === false)
        {
            // ...get it.
            light = $(".titleLight").eq(i);
            
            // Set it to being used
            activeLights[i] = true;
            
            lightNumber = i;
            
            // Exit the loop
            i = MAX_LIGHTS;
        }
    }
        
    // If a light was returned...
    if (typeof light !== typeof undefined)
    {
        // The light spends half of its life growing and half shrinking
        var animationLength = getRandomNumber(MIN_LIGHT_LIFE, MAX_LIGHT_LIFE) / 2;
        
        var size = getRandomNumber(MIN_LIGHT_SIZE, MAX_LIGHT_SIZE);
        
        prepareLight(light, animationLength, size);
                
        animateLight(light, animationLength, size);
        
        // Once the light has approximately finished animating...
        sleep(animationLength * 2 + 100).then(() =>
        {
            // ...set it to being inactive.
            activeLights[lightNumber] = false;
        });
    }
}

//###::::::###::::::###::::::###::::::###::::::###
//
// Prepares a light element to be animated
//
// light -> jQuery DOM SVG Circle Element -> The element to be used as a light
// animationLength -> Number -> The amount of time (in milliseconds) that it should take for the light to grow or shrink
// size -> Number -> The size in pixels that the light will grow to
//
//###::::::###::::::###::::::###::::::###::::::###
function prepareLight(light, animationLength, size)
{
    var color = getShadeOfGreen(getRandomNumber(MIN_LIGHT_BRIGHTNESS, MAX_LIGHT_BRIGHTNESS),   getRandomNumber(MIN_LIGHT_SATURATION, MAX_LIGHT_SATURATION));
    
    // Get a random position approximately within the range of the title text
    light.attr("cx", getRandomNumber(0, ($(window).width() / 3) * 2));
    light.attr("cy", getRandomNumber(0, $(window).height() / 2));
    
    light.attr("r", size);
    light.attr("fill", color);
        
    // A scaling animation of a light gives the appearance that the light is moving. A translating animation is given to counter the appearance of movement.
    light.css("transform", "scale(0.1) translate(" + size + "px, " + size + ")");
        
    light.css("transition", "all " + animationLength + "ms linear");
}

//###::::::###::::::###::::::###::::::###::::::###
//
// Prepares the hexagon and light effect patterns for use
//
//###::::::###::::::###::::::###::::::###::::::###
function preparePatterns()
{
    // The approximate size of each hexagon in pixels
    const HEXAGON_SIZE = $(window).width() / 50;
    // The spacing between each hexagon in pixels
    const SPACING = 1;
    
    // Used as a unit of measurement
    let tenthHexagon = HEXAGON_SIZE / 10;
    
    // The size of each segment of the hexagonal pattern
    let unitWidth = (tenthHexagon * 16) + (SPACING * 2);
    let unitHeight = (tenthHexagon * 8) + (SPACING * 2);
    
    // The x position of the hexagons on the right side of a pattern segment
    let positiveOffsetX = (tenthHexagon * 11) + (SPACING * 2);
    // The y position of the hexagons on the bottom of a pattern segment
    let positiveOffsetY = (tenthHexagon * 3) + (SPACING * 2);
    // The x position of the hexagons on the left side of a pattern segment
    let negativeOffsetX = tenthHexagon * -5;
    // The y position of the hexagons on the top of a pattern segment
    let negativeOffsetY = tenthHexagon * -5;
    
    let pattern = $("#hexagonPattern");
    let lightBox = $("#nameLights");
    
    pattern.attr("width", unitWidth);
    pattern.attr("height", unitHeight);
    
    // This should be set to the size of the SVG text elements, but it is difficult to retrieve those values, so instead they are slightly over-estimated here.
    lightBox.attr("width", ($(window).width() / 3) * 2);
    lightBox.attr("height", $(window).height() / 2);
    
    // Create the hexagons for each pattern segment. There is 1 in the middle and 4 for each corner.
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, (tenthHexagon * 3) + SPACING, (tenthHexagon * -1) + SPACING));
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, negativeOffsetX, negativeOffsetY));
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, positiveOffsetX, negativeOffsetY));
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, negativeOffsetX, positiveOffsetY));
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, positiveOffsetX, positiveOffsetY));
    
    // This is necessary for the hexagonal pattern to appear
    $(pattern).html($(pattern).html());
}

//###::::::###::::::###::::::###::::::###::::::###
// 
// Javascript does not included a built in method to halt execution, so a user-defined method to do so is defined here.
//
// time -> Number -> The number of milliseconds that execution should pause
//
//###::::::###::::::###::::::###::::::###::::::###
function sleep (time)
{
    return new Promise((resolve) => setTimeout(resolve, time));
}
                  
}})(jQuery);