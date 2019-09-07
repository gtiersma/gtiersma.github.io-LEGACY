//###::::::###::::::###::::::###::::::###::::::###
//
// George Tiersma's portfolio website - title.js
//
// Constructs and animates the website's title
//
// This document is property of George Tiersma.
//
//###::::::###::::::###::::::###::::::###::::::###



(function($)
{

//###::::::###::::::###::::::###::::::###::::::###
//
// Executes once the webpage is loaded
//
//###::::::###::::::###::::::###::::::###::::::###
$(document).ready( function()
{
    // The least amount of time in milliseconds that there should be between the creation of 2 lights in the text
    const MIN_LIGHT_DELAY = 500;
    
    // For each layer of the title text...
    for (var i = 0; i < $(".firstName").length; i++)
    {
        // ...set it up correctly.
        prepareTitleText(i);
    }
    
    preparePatterns();
    
    // Possibly create a new light in the text each time the given amount of time passes
    setInterval(lightEffect, MIN_LIGHT_DELAY, MIN_LIGHT_DELAY);
});

//###::::::###::::::###::::::###::::::###::::::###
//
// Creates a polygon SVG element of a hexagon
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
    var oneTenthSize = size / 10;
    
    var hexagonPoints = 
        (2 * oneTenthSize + spacing)  + "," + (oneTenthSize + spacing) + " " +
        (8 * oneTenthSize + spacing)  + "," + (oneTenthSize + spacing) + " " +
        (10 * oneTenthSize + spacing) + "," + (5 * oneTenthSize + spacing) + " " +
        (8 * oneTenthSize + spacing)  + "," + (9 * oneTenthSize + spacing) + " " +
        (2 * oneTenthSize + spacing)  + "," + (9 * oneTenthSize + spacing) + " " +
        spacing + ","                       + (5 * oneTenthSize + spacing);
    
    var hexagon = $("<polygon>");
    
    hexagon.attr("points", hexagonPoints);
    
    hexagon.css("transform", "translate(" + xOffset + "px, " + yOffset + "px)");
    
    return hexagon;
}

//###::::::###::::::###::::::###::::::###::::::###
//
// Gets a circle element for a light from the pool of circles in the light pattern. It will return an undefined variable if all of the circles in the pool are currently in use.
//
//###::::::###::::::###::::::###::::::###::::::###
function getLight()
{
    // The circle element to be returned
    var light;
    
    var lightPattern = $("#nameLights");
    
    // For each circle in the pool...
    for (var i = 0; i < lightPattern.children().length; i++)
    {
        // ...if the circle is not currently in use...
        if (lightPattern.children().eq(i).attr("active") === "false")
        {
            // ...set it to be active.
            lightPattern.children().eq(i).attr("active", "true");
            // Get it
            light = lightPattern.children().eq(i);
            // Exit the loop
            i = lightPattern.children().length + 1;
        }
    }
    
    return light;
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
    var red = brightness;
    
    var green = brightness + saturation;
    // Each color value cannot exceed 255
    if (green > 255)
    {
        green = 255;
    }
    
    var blue = brightness;
    
    var color = "rgb(" + red + ", " + green + ", " + blue + ")";
    
    return color;
}

//###::::::###::::::###::::::###::::::###::::::###
//
// May create a light for the title's text effect if certain conditions within this method are met.
//
// minDelay -> Number -> The least amount of time that should exist before another light appears
//
//###::::::###::::::###::::::###::::::###::::::###
function lightEffect(minDelay)
{
    // The most amount of time that should exist before another light appears
    const MAX_DELAY = 5000;
    
    // Gets a number to determine whether or not this function should create a light or if it is still too early
    var wait = getRandomNumber(0, MAX_DELAY / minDelay);
    
    // If the random number retrieved is less than 2, a light should be created now.
    if (wait < 2)
    {
        // Get a circle element for a light from the pool of circles
        var light = getLight();
        
        // If a light was not returned...
        if (light == undefined)
        {
            // ...all of the circles in the pool must currently be in use, so another light will not be created.
            return;
        }
        
        const MIN_BRIGHTNESS = 0;
        const MAX_BRIGHTNESS = 255;
    
        const MIN_SATURATION = 127;
        const MAX_SATURATION = 255;
    
        // How long the light will be visible in milliseconds. This includes both the time taken for the light to brighten and dim.
        const MIN_LIFE = 1000;
        const MAX_LIFE = 5000;
        
        // Size of the light in pixels
        const MIN_SIZE = 10;
        const MAX_SIZE = 500;
        
        var brightness = getRandomNumber(MIN_BRIGHTNESS, MAX_BRIGHTNESS);
        var saturation = getRandomNumber(MIN_SATURATION, MAX_SATURATION);
        var life = getRandomNumber(MIN_LIFE, MAX_LIFE);
        var size = getRandomNumber(MIN_SIZE, MAX_SIZE);
        
        var color = getShadeOfGreen(brightness, saturation);
        
        // Gets a random position within the pattern
        var x = getRandomNumber(0, ($(window).width() / 3) * 2);
        var y = getRandomNumber(0, $(window).height() / 2);
        
        // The light spends half of its life growing and half shrinking
        var animationLength = life / 2;
        
        light.attr("cx", x);
        light.attr("cy", y);
        light.attr("r", size);
        light.attr("fill", color);
        light.attr("filter", "blur");
        
        // A scaling animation of a light gives the appearance that the light is moving. A translating animation is given to counter the appearance of movement.
        light.css("transform", "scale(0.1) translate(" + size + "px, " + size + ")");
        
        light.css("transition", "all " + animationLength + "ms linear");
        
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
            
                // Once the light is no longer visible...
                sleep(animationLength).then(() =>
                {
                    // ...disactivate it to be used again later.
                    light.attr("active", "false");
                });
            });
        });
    }
}

//###::::::###::::::###::::::###::::::###::::::###
//
// Prepares the hexagon and light effect patterns for use
//
//###::::::###::::::###::::::###::::::###::::::###
function preparePatterns()
{
    // The approximate size of each hexagon in pixels
    const HEXAGON_SIZE = 25;
    // The spacing between each hexagon in pixels
    const SPACING = 1;
    
    // Used as a unit of measurement
    var oneTenthSize = HEXAGON_SIZE / 10;
    
    // The size of each segment of the hexagonal pattern
    var unitWidth = (oneTenthSize * 16) + (SPACING * 2);
    var unitHeight = (oneTenthSize * 8) + (SPACING * 2);
    
    // The position of the hexagon in the middle of a pattern segment
    var neutralOffsetX = (oneTenthSize * 3) + SPACING;
    var neutralOffsetY = (oneTenthSize * -1) + SPACING;
    // The x position of the hexagons on the right side of a pattern segment
    var positiveOffsetX = (oneTenthSize * 11) + (SPACING * 2);
    // The y position of the hexagons on the bottom of a pattern segment
    var positiveOffsetY = (oneTenthSize * 3) + (SPACING * 2);
    // The x position of the hexagons on the left side of a pattern segment
    var negativeOffsetX = oneTenthSize * -5;
    // The y position of the hexagons on the top of a pattern segment
    var negativeOffsetY = oneTenthSize * -5;
    
    var pattern = $("#hexagonPattern");
    var lightBox = $("#nameLights");
    
    pattern.attr("width", unitWidth);
    pattern.attr("height", unitHeight);
    
    // This should be set to the size of the SVG text elements, but it is difficult to retrieve those values, so instead they are slightly over-estimated here.
    lightBox.attr("width", ($(window).width() / 3) * 2);
    lightBox.attr("height", $(window).height() / 2);
    
    // Create the hexagons for each pattern segment. There is 1 in the middle and 4 for each corner.
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, neutralOffsetX, neutralOffsetY));
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, negativeOffsetX, negativeOffsetY));
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, positiveOffsetX, negativeOffsetY));
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, negativeOffsetX, positiveOffsetY));
    pattern.append(getHexagon(HEXAGON_SIZE, SPACING, positiveOffsetX, positiveOffsetY));
    
    // This is necessary for the hexagonal pattern to appear
    $(pattern).html($(pattern).html());
}

//###::::::###::::::###::::::###::::::###::::::###
//
// Positions a layer of the title text correctly
//
// layerIndex -> Number -> The number of the layer to be positioned. The bottom layer is "0" with each layer after it incrementing sequentially.
//
//###::::::###::::::###::::::###::::::###::::::###
function prepareTitleText(layerIndex)
{
    // One percent of the viewport's size. Used as a unit of measurement.
    var viewportWidthPercent = $(window).width() / 100;
    var viewportHeightPercent = $(window).height() / 100;
    
    var firstName = $(".firstName").eq(layerIndex);
    var lastName = $(".lastName").eq(layerIndex);
    
    firstName.attr("x", 40 * viewportWidthPercent);
    firstName.attr("y", 30 * viewportHeightPercent);
    
    lastName.attr("x", 50 * viewportWidthPercent);
    lastName.attr("y", 45 * viewportHeightPercent);
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