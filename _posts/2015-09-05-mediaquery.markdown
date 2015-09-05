---
layout: post
title: "Learning About Media Queries"
date: 2015-09-05 17:00:00
excerpt: > Say you are working on a website and want it to look great across multiple devices. Meaning, you need your layout to look just as great on phones or tablets as it does on desktop. I mean you worked so hard to make it look wonderful on your desktop computer that you want everyone who sees it to appreciate your work no matter what device they are viewing it on, right? Well, there are ways to do this.

---
Say you are working on a website and want it to look great across multiple devices. Meaning, you need your layout to look just as great on phones or tablets as it does on desktop. I mean you worked so hard to make it look wonderful on your desktop computer that you want everyone who sees it to appreciate your work no matter what device they are viewing it on, right? Well, there are ways to do this. For examples, you could use [flex properties]("https://developer.mozilla.org/en-US/docs/Web/CSS/flex") but these will only provide a solution in modern browsers. Instead, a technique that many use are media queries.  I touched on media queries a little earlier [here](http://rookie-dev.herokuapp.com/2015/06/24/nav-bar.html) at the end of the post. **In this post, I will go into more depth, covering all of the cool things that you can do with media queries!**

# What is a media query?
You can think of media queries as a tool within CSS (or SASS) that will let you change your layout when certain conditions apply (or at certain breakpoints). For example, what if you reduce your screen size to 760px and see that now, that your two-column layout on your home page looks way to busy. Well then you would want to include a rule in your stylesheet that says that when someone views your site at a screen width of 760px, your home page should change to a one-column layout. Now your home page looks much better. Awesome!


# When to use a media query
I have found that while you are developing your site, you should consistently check how new features look at different screen sizes. If you find that a piece of your content looks ugly at a certain screen width, then you should either consider a media query or using a [more flexible unit](http://www.w3schools.com/cssref/css_units.asp) in the case of font sizes or height values. Many layout problems can be fixed by using percentages or ems, especially when it comes to defining font sizes. Yet, if your overall layout isn't working at a certain screen width, well then you have encountered a breakpoint and should probably consider using a media query.

A breakpoint is a point where your layout *breaks*, indicating that your layout should change. You can see breakpoints in action by going to a site and seeing how the layouts alter at certain points. [CSS Tricks](https://css-tricks.com/) is a great example if you want to check it out. Simply make the screen at CSS Tricks smaller and you will notice that the sidebar on the right hand of the screen become thinner and thinner until it disappears completely once your screen reaches a mobile-sized width. **Each little micro-change in the CSS Tricks layout represents a breakpoint.**

## Max width and Min Width

- The width media feature describes the width of the rendering surface of the output device (such as the width of the document window, or the width of the page box on a printer).
- replaces < > operators.
- "Most media features can be prefixed with "min-" or "max-" to express "greater or equal to" or "less than or equal to" constraints.  This avoids using the "<" and ">" symbols, which would conflict with HTML and XML.  If you use a media feature without specifying a value, the expression resolves to true if the feature's value is non-zero."

## Booleans in media queries

### portrait and landscape properties

I am most excited about these properties!

"Indicates whether the viewport is in landscape (the display is wider than it is tall) or portrait (the display is taller than it is wide) mode"
@media all and (orientation: portrait)


### What you can accomplish

#### Where to learn more

I didn't cover everything that can be done with media queries. There are still many other things you can do with media queries. For example, you could also consider color-index, aspect-ratio, and even other Mozilla specific media features. I'll let you guys look into these yourself though [over on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features).

- breakpoints - a width where the layout you have no longer works (and they layout breaks) -a point where the layout should change
- media queries just adjust layouts
- define mobile-first design
- recommended to put breakpoint based on content rather than device size (because new devices with different widths are created all the time.)
- major v. minor breaking points
