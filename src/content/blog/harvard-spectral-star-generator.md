---
templateKey: blog-post
title: Harvard Spectral Star Generator
pubDate: 2021-01-15
featuredpost: true
listed: true
heroImage: '../../assets/harvard-spectral-featured.png'
description: Tag along as I walk through how I made the Harvard spectral star generator
tags:
  - JavaScript
  - CSS
  - Dev Blog
---

I love space! Well, I love the idea of space. It's a very cold and inhospitable place after all. Before my days of web I started in game design and development. Many of my projects were space themed. Along the way I built a few galaxy generation systems. Though these were always built in C#, the concepts transferred over to JavaScript pretty easily.

In this blog post I'll walk through how I built the [Harvard Spectral Star Generator](https://codepen.io/joshsalazar/full/PvwpLK) with hopes you'll learn something new and find some inspiration along the way.

By no means am I an astronomer. I'll attempt some scientific accuracy in the generator but this is simply for fun and education. It may be laughable by anyone with a basic understanding of astronomy. Either way, let's have some fun!

## Harvard spectral classification

I'll be using the modern Harvard spectral classification to generate the galaxy with a degree of realistic accuracy. Below is the chart I found from the [Harvard spectral classification wiki page](https://en.wikipedia.org/wiki/Stellar_classification#Harvard_spectral_classification). I'll use this chart to set the values of our stars during generation.

<table class="table is-bordered">
<thead>
<tr>
<th>Class</th>
<th>Effective Temperature</th>
<th>Chromaticity</th>
<th>Solar Masses</th>
<th>Solar Radii</th>
<th>Luminosity</th>
<th>Fraction of all main-sequence stars</th>
</tr>
</thead>
<tbody>
<tr>
<td>O</td>
<td>&gt;= 30,000 K</td>
<td>blue</td>
<td>&gt;= 16 M</td>
<td>&gt;= 6.6 R</td>
<td>&gt;= 30,000 L</td>
<td>~0.00003%</td>
</tr>
<tr>
<td>B</td>
<td>10,000 - 30,000 K</td>
<td>blue white</td>
<td>2.1 - 16 M</td>
<td>1.8-6.6 R</td>
<td>25 - 30,000 L</td>
<td>.13%</td>
</tr>
<tr>
<td>A</td>
<td>7,500 - 10,000 K</td>
<td>white</td>
<td>1.4 - 2.1 M</td>
<td>1.4 - 1.8 R</td>
<td>5 - 25 L</td>
<td>.6%</td>
</tr>
<tr>
<td>F</td>
<td>6,000 - 7,500 K</td>
<td>yellow white</td>
<td>1.04 - 1.4 M</td>
<td>1.15 - 1.4 R</td>
<td>1.5 - 5 L</td>
<td>3%</td>
</tr>
<tr>
<td>G</td>
<td>5,200 - 6,000 K</td>
<td>yellow</td>
<td>.8 - 1.04 M</td>
<td>.96 - 1.15 R</td>
<td>.6 - 1.5 L</td>
<td>7.6%</td>
</tr>
<tr>
<td>K</td>
<td>3,700 - 5,200</td>
<td>light orange</td>
<td>.45 - .8 M</td>
<td>.7 - .96 R</td>
<td>.08 - .6 L</td>
<td>12.1%</td>
</tr>
<tr>
<td>M</td>
<td>2,400 - 3,700</td>
<td>orange red</td>
<td>.08 - .45 M</td>
<td>&lt;= .7 R</td>
<td>&lt;= .08 L</td>
<td>76.45%</td>
</tr>
</tbody>
</table>

## Galaxy generator
Now I have a chart to model my generator after. Next up is writing the logic for the galaxy. It's really more of a star cluster since we're not going to have too many stars. To make performance best, I'll start with just 100 stars.

The galaxy generator is a function that will do a few things:

1. Generate a star
2. Add the star to an array
3. Randomly select a point within the user's view
4. Spawn the proper div element for the star

### 1. Generate a star

First up next is writing the logic for the star generator itself. This is where most of the logic for the generator will take place. Each star will be an object with the following set of properties:

- Type
- Color
- CSS color
- Temperature
- Mass
- Radius
- Luminosity

Each star will also have descriptor text for each property. I'll use this descriptor text to populate the UI when the user clicks on a star.

- Type description
- Color description
- Temperature description
- Mass description
- Radius description
- Luminosity description

All of this data, after it's generated, will be passed back to a GenerateGalaxy() function I have yet to create. Here's what the function looks like so far.

```javascript
function GenerateStar() {
 var type;
 var color;
 var cssColor;
 var temperature;
 var mass;
 var radius;
 var luminosity;
 var typeDesc;
 var colorDesc;
 var tempDesc;
 var massDesc;
 var radiusDesc;
 var lumiDesc;
 
 return [
   type,
   color,
   cssColor,
   temperature,
   mass,
   radius,
   luminosity,
   typeDesc,
   colorDesc,
   tempDesc,
   massDesc,
   radiusDesc,
   lumiDesc
 ]; 
}
```

Now I'll use the "fraction of all main sequence stars" from the table above to determine what star to generate. The above chart has numbers in the hundred thousanths, but I'll round off to the hundreths. First I'll need to select a random number between .01 and 100. Instead of dealing with decimals, I'll just choose a random number between 1 and 10,000

```javascript
...
 var massDesc;
 var radiusDesc;
 var lumiDesc;
 
 <strong>var typePercent = Math.floor(Math.random() * 10000);</strong>
 
 return [
   type,
   color,
   cssColor,
...
```

Now I use a series of if else statements to populate the star variables depending on the value of typePercent.

I won't share the entire generator on this page as there is a lot of code here, but I'll show the first star and break down what's happening. If you'd like to see each star, feel free to take a look at my final [Harvard Spectral Star Generator](https://codepen.io/joshsalazar/full/PvwpLK) on CodePen.

The first if is checking to see if the value is 1. Since O-type stars have a ~0.00003% chance of existing, I'm rounding up to my smallest possible value of 1. Therefore, there's a 1 out of 10,000 chance to spawn an O-type star.

The temperature, mass, radius, and luminosity follow the same Math.random pattern using values from the chart above.

```javascript
...
var lumiDesc;

var typePercent = Math.floor(Math.random() * 10000);
if (typePercent == 1) {
   type = "O";
   color = "Blue";
   cssColor = "blue";
   temperature = Math.floor(Math.random() * (50000 - 30000)) + 30000;
   mass = (Math.floor(Math.random() * (2300 - 1600)) + 1600) / 100;
   radius = (Math.floor(Math.random() * (1000 - 660)) + 660) / 100;
   luminosity = (Math.floor(Math.random() * (5000000 - 3000000)) + 3000000) / 100;
 }
 
 return [
   type,
   color,
   cssColor,
...
```

Now comes the description text. I want the final result to be a bit educational and fun. Instead of just showing the final numbers, I'd like there to be another level of exploration for each variable to learn more about what it means. For this, I'll do a bit of googling to help me explain each value and get a bit creative with my writing.

Here's the series of description strings for the O-type star:

```javascript
...
   radius = (Math.floor(Math.random() * (1000 - 660)) + 660) / 100;
   luminosity = (Math.floor(Math.random() * (5000000 - 3000000)) + 3000000) / 100;
   typeDesc =
      "Wow! You found an O-type star. O-type stars are very hot and extremely luminous, with most of their radiated output in the ultraviolet range. These are the rarest of all main-sequence stars. About 1 in 3,000,000 (0.00003%) of the main-sequence stars in the solar neighborhood are O-type stars. Some of the most massive stars lie within this spectral class. O-type stars frequently have complicated surroundings that make measurement of their spectra difficult.";
      
    colorDesc =
      "Vega-relative chromaticity: An objective specification of the quality of a color regardless of its luminance. Chromaticity consists of two independent parameters, often specified as hue (h) and colorfulness (s), where the latter is alternatively called saturation, chroma, intensity,[1] or excitation purity. This number of parameters follows from trichromacy of vision of most humans, which is assumed by most models in color science.";
      
    tempDesc =
      "The effective temperature of a body such as a star or planet is the temperature of a black body that would emit the same total amount of electromagnetic radiation. Effective temperature is often used as an estimate of a body's surface temperature when the body's emissivity curve (as a function of wavelength) is not known. The effective temperature of our Sun is around 5780 K. Stars have a decreasing temperature gradient, going from their central core up to the atmosphere. The core temperature of the Sun—the temperature at the centre of the Sun where nuclear reactions take place—is estimated to be 15,000,000 K. \n\nThis star has a temperature of " +
      temperature +
      "K. That is about " +
      Math.round(temperature / 5780 * 100) / 100 +
      " times the temperature of the Sun.";
      
    massDesc =
      "The solar mass (M☉) is a standard unit of mass in astronomy, equal to approximately 2×10^30 kg. It is used to indicate the masses of other stars, as well as clusters, nebulae, and galaxies. It is equal to the mass of the Sun (denoted by the solar symbol ⊙︎). This equates to about two nonillion (two quintillion in the long scale) kilograms.\nThis star has a mass of " +
      mass +
      "M☉, which means it is " +
      mass +
      " times the mass of our sun.";
      
    radiusDesc =
      "Solar radius is a unit of distance used to express the size of stars in astronomy relative to the Sun. Therefore, the Sun's solar radius is 1 R⊙︎. 1 R⊙︎ is equal to about 695,700 kilometres (432,300 miles). This is approximately 10 times the average radius of Jupiter, about 109 times the radius of the Earth, and 1/215th of an astronomical unit, the distance of the Earth from the Sun. It varies slightly from pole to equator due to its rotation, which induces an oblateness in the order of 10 parts per million.\n\nThe radius of this star is about " +
      Math.round(radius * 659700) +
      "km.";
      
    lumiDesc =
      "Absolute magnitude is a measure of the luminosity of a celestial object, on a logarithmic astronomical magnitude scale. An object's absolute magnitude is defined to be equal to the apparent magnitude that the object would have if it were viewed from a distance of exactly 10 parsecs (32.6 light-years), with no extinction (or dimming) of its light due to absorption by interstellar dust particles. By hypothetically placing all objects at a standard reference distance from the observer, their luminosities can be directly compared on a magnitude scale.";
  }
 
 return [
   type,
   color,
   cssColor,
...
```

This really took the most time. Building strings in JavaScript is always a chore. At the very end of putting this all together, I simply return all the initial star variables.

Within a new GenerateGalaxy() function, I'll create set the stars[] array. On the next line, I want to remove any stars that exist in the scene. When page first loads, this shouldn't do anything. But at some point I'm going to want to let the user regenerate the galaxy.

Then I'll use a simple for loop to generate each star. This is where most of the generator logic is going to take place.

### 2. Generate a star

Great! the star generator is built. But I'm not currently doing anything with that function. Now I need to set up a new function to contain all the stars. I'll call this function GenerateGalaxy() because that seems to fit.

```javascript
var numOfStars = 100;

var stars = [];

function GenerateGalaxy() {
  stars = [];
  $("div.star").remove();

  for (var i = 0; i < numOfStars; i++) {
    var newStarInfo = GenerateStar();

    var star = {
      type: newStarInfo[0],
      color: newStarInfo[1],
      cssColor: newStarInfo[2],
      temperature: newStarInfo[3],
      mass: newStarInfo[4],
      radius: newStarInfo[5],
      luminosity: newStarInfo[6],
      typeDesc: newStarInfo[7],
      colorDesc: newStarInfo[8],
      tempDesc: newStarInfo[9],
      massDesc: newStarInfo[10],
      radiusDesc: newStarInfo[11],
      lumiDesc: newStarInfo[12]
    };

    stars.push(star);
  }
}
```

## 3. Randomly select a point within the user's view

Picking a point within the user's viewport is as simple as selecting a random pixel value based on the window width and window height. I'll use jQuery to reference $(window). This will come after 

```javascript
...
    };

    stars.push(star);

    <strong>var posLeft = Math.floor(Math.random() * $(window).width() - 3);
    var posTop = Math.floor(Math.random() * $(window).height() - 3);</strong>
  }
}
```

## 4. Spawn the proper div element for the star
 
 Now it's time to step away from JavaScript for a minute and get the style of the stars and scene set up. 
 
 The stars will have a color that closely matches that within the table above. I'll use a box-shadow to give the stars a bit of glow.
 
```css
  .star {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;

    &:hover {
      cursor: pointer;
    }

    &.blue {
      background-color: #00f;
      box-shadow: 0 0 20px #589bff, 0 0 20px #afc8ee;
    }

    &.blueWhite {
      background-color: #55f;
      box-shadow: 0 0 20px #70aeff, 0 0 40px #b7d6ff;
    }

    &.white {
      background-color: #fff;
      box-shadow: 0 0 20px #accdff, 0 0 40px #dfecff;
    }

    &.yellowWhite {
      background-color: #fff585;
      box-shadow: 0 0 20px #f7f5ff, 0 0 40px #f7f5ff;
    }

    &.yellow {
      background-color: #ff0;
      box-shadow: 0 0 20px #fff0d9, 0 0 50px #fffcf7;
    }

    &.yellowOrange {
      background-color: #ffae00;
      box-shadow: 0 0 20px #ffdb3a, 0 0 50px #feeda1;
    }

    &.orangeRed {
      background-color: #ff5a00;
      box-shadow: 0 0 20px #fa8a4a, 0 0 50px #b9a018;
    }
}
```

Now, back into JavaScript it's time to build and spawn the div elements. To close out the GenerateGalaxy() function:

```javascript
$(".frame").append(
  &lt;div class='star " +
    stars[i].cssColor +
    "' id='" +
    i +
    "' style='left:" +
    posLeft +
    "px; top:" +
    posTop +
    "px;' onClick='OpenPanel(this.id)'></div>"
);
```

Now all I need to do is call the GenerateGalaxy() function and I should have a star scape!

The interaction with the stars and displaying of the star info is not included in this write up. View the final [Harvard Spectral Star Generator](https://codepen.io/joshsalazar/full/PvwpLK) CodePen (or view it below) to see how that is all set up.

<div class="spacer-sm"></div>
<iframe height="600" style="width: 100%;" scrolling="no" title="Harvard Spectral Star Generator" src="https://codepen.io/joshsalazar/embed/PvwpLK?default-tab=result&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/joshsalazar/pen/PvwpLK">
  Harvard Spectral Star Generator</a> by Joshua Salazar (<a href="https://codepen.io/joshsalazar">@joshsalazar</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>
<div class="spacer-sm"></div>
