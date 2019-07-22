# Parental Discretion is Advised

> ***Unsemantic*** - The act of not being semantic

<DETAILS><SUMMARY>
DEPENDENCY hell is bad enough
</SUMMARY>
DIV hell is even worse
</DETAILS>

Modular static site building template with jQuery, Boostrap, Font-Awesome, Github, CDNJS, and WorkBox.

~~Source layout for the site on [fonzacus.github.io](//fonzacus.github.io) `master`. Live (*minimized*) sites built in `gh-pages`.~~

As an example; where `_` is a space, 189 - bits - 152:

```
<section>                    |<section>
__<div>THIS                  |__<div>THIS
____<div>THAT                |____<div>THAT
______<div>HERE</div>        |______<div>HERE</div>
______<div>THERE             |______<div>THERE
________<div>EVERYWHERE</div>|________<div>EVERYWHERE</div>
________<div>ANYWHERE</div>  |________<div>ANYWHERE</div>
______</div>                 |</section> <- HEAD SHOT
____</div>
__</div>
</section>
```

We saved 37 bits, where 1 space is 1 bit, and a new line is 2. In the short term, this may not mean much, but on the long term the savings can be huge. If we also minimize all spaces in a still human readable format, we get 118 bits. Remove the lines, and we get the total at 104 bits!

Most modern browsers will display pages like these well enough, and when browsing through the source pages, will automatically close elements. Many people have also started excluding `<head>` and `<body>` elements for a while, well, I felt like pushing beyond that boundaries.

You may want to add just a final `<div>` before the closing `</section>`, but wouldn't it be easier to start fresh again on another `<section>`? This may not even be trendy as most seasoned programmers find this messy, but IMHO, it is easier to work with than fumbling about which is not closed yet.

<DETAILS><SUMMARY>
ASSET
</SUMMARY>
<PRE>
index.html
index.js
index.json
favicon.ico
wb.js

a/ - asset are empty
 /c - css
 /j - js
 /f - fonts
 /i - image
 /t - text
 /v - video
</PRE></DETAILS>
