---
layout: post
title: "Learning About Media Queries"
date: 2015-09-05 17:00:00
image: "designer-board-typo-word.jpg"
description: If you're a beginning front-end developer, a key skills is going to be learning how to make a mobile-friendly website. Use media queries to begin creating responsive layouts. 
excerpt: >
 Say you are working on a website and want it to look great across multiple devices. Meaning, you need your layout to look just as great on phones or tablets as it does on desktop.                                                                                                                                                                   
---

Say you are working on a website and want it to look great across multiple devices. Meaning, you need your layout to look just as great on phones or tablets as it does on desktop. I mean you worked so hard to make it look wonderful on your desktop computer that you want everyone who sees it to appreciate your work no matter what they are viewing it on, right?

Well, there are ways to do this. For example, you could use [flex properties]("/2015/09/05/mediaquery.html"). Alternatively, a technique that many use are media queries. Media queries are something that I imagine you will always use, so it's worth learning about them early on.

First, let's start thinking about your site's layout. When thinking about a layout, you can start by thinking about the way it will look on a desktop.

![Learning about media queries](/assets/mediaQuery.jpg)

### Desktop layout
![Mobile UI Mock Up](/assets/rookiedevmockup.jpg)

After your desktop layout is perfect, you will want to think about how that same site will look on a smaller screen. Ideally, you will think about the problem of a smaller screen before development. For example, you can think about how your layout will look on a mobile device. In the case of the blog here, I changed my home page from a three-column layout to a single layout and created a dropdown menu that I've indicated with a navicon. **In development, you can make these layout changes with the help media queries.**

### Mobile layout
![Mobile UI Mock Up](/assets/rookiedevmobile.jpg)


# What is a media query?

You can think of media queries as a tool that will let you change your layout when certain conditions apply (or at certain breakpoints). For example, what if you reduce your screen size to 760px and see that your two-column layout on your home page looks way to busy. Well, then you would want to include a rule in your stylesheet that says that when someone views your site at a screen width of 760px, your home page should change to a one-column layout. Now your home page looks much better. Awesome!

To help you gain a grasp on what a media query looks like, you can checkout the example here.

{% highlight CSS %}
@media(max-width: 457px) {
	.page-heading {
		font-size: 30px;
	}
	#line-one {
		font-size: 3em;
		padding-top: 40px;
	}
	#line-two {
		font-size: 4em;
	}
}
{% endhighlight %}

This is an example of a media query I used to help make this blog's logo. I made it to help make the surrounding div shrink once a user's screen size reaches 457px or smaller. I reached the number 457 by basically shrinking my window until the logo and page-heading div looked ugly. That was my breakpoint and the width at which I needed to make a new rule within my stylesheet.

## When to use a media query
I have found that while you are developing your site, you should consistently check how new features look at different screen sizes. If you find that a piece of your content looks ugly at a certain screen width, then you should either consider using a media query. **Just remember to base your media query rules on how your content looks rather than on popular device widths.** If you base your rules on device widths, you will have to keep adding more and more rules as new products emerge. This can quickly lead to overly complex code and a lot of wasted time (which I know you don't want).

Yet, before you define a media query rule, it can also help to remember that many layout problems can be fixed by using more flexible measurement units. For example, using percentages [or ems](https://css-tricks.com/why-ems/) when it comes to defining font sizes. Yet, if your overall layout isn't working at a certain screen width, well then you have encountered a breakpoint and should probably consider using a media query.

A breakpoint is a point where your layout *breaks*, indicating that your layout should change. You can see breakpoints in action by going to a site and seeing how the layouts alter at certain points. [CSS Tricks](https://css-tricks.com/) is a great example if you want to check it out. Simply make the screen at CSS Tricks smaller. You will notice that the sidebar on the right hand of the screen becomes thinner and thinner until it disappears completely at mobile-sized width. **Each little micro-change in the CSS Tricks layout represents a breakpoint.**

Now, let's look at the different kinds of media queries that you can use for your own project.

## Max width and min width

 **Here is a technical definition:** The width media feature describes the width of the rendering surface of the output device (such as the width of the document window, or the width of the page box on a printer).

 What this really means is that you can make a media query rule that determines what happens to your layout at a certain width. You can think of Min and Max as replacements for the '<' and '>' operators. You can see the Max width media query in action in my example above.  

 - Min will change layouts when the change should occur at a length that is greater or equal to the pixel width you define.

 - Max width will apply at a width that is less than or equal to the width you define.


## Portrait and landscape properties
I am most excited about these properties! I just recently learned about portrait and landscape properties myself thanks to [Treehouse](http://teamtreehouse.com). If you are making a mobile first design, then you probably want rules that will make your layout look great on smaller screen sizes. Well, if you have been considering breakpoints while implementing new features, then I am sure you will have this covered.

Yet, what if your user wants to view your project in a landscape mode? For example, what will happen to your layout when a user rotates their phone or tablet? Well, you can make rules for these instances as well. You can see examples of the portrait and landscape properties in action over on [Stephen Gilbert's site here](http://stephen.io/mediaqueries/). In general, you can begin defining style rules following the syntax below:

{% highlight CSS %}
@media all and (orientation: portrait)
@media all and (orientation: portrait)
{% endhighlight %}


## Media query syntax
I bet you noticed that in the portrait and landscape example we used the word "and" as well as further specifiied our media query within a set of parentheses. One thing I have found is that if you are having trouble remembering how to write out a media query rule, you can draw on what you know about [operators](http://www.w3schools.com/js/js_operators.asp). For example, if you want two rules that apply at once, you should use "and" in the same way you would use && in JavaScript. You will even see that you can even write something with multiple specifications like this:

{% highlight CSS %}
@media handheld and (grid) and (max-width: 15em)
{% endhighlight %}


## Where to learn more

Okay, now I've shown you some key media query properties that you can use while working on your current or next project. I didn't cover everything that can be done with media queries. There are still many other things you can do. For example, you could also consider color-index, aspect-ratio, and even other Mozilla specific media features. I'll let you guys look into these yourself though [over on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features).

**Thanks for reading guys! Hope this post helps.**
