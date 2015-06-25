---
layout: post
title:  "How to Make a Navigation Menu From Scratch (minus gooey tutorials)"
date:   2015-06-24 16:32:21
categories: lessons
---

Making a navigation menu was one of the first things that I  learned to make using only HTML, CSS, and JavaScript. Seems simple, right? Well, I was on day two of learning web-development. In actuality, it was something that was way over my head. Yet, I was able to get some help that made the process easier to tackle. **What helped the most, was breaking the problem down into manageable steps and learning some general principles about the languages I was working with.** 

## Start by Learning Some General Principles
If you are like me and don't know much about web development or these three languages, you may approach this problem by looking at a tutorial and just copying their examples and pasting them into a text editor. Well, what if you know what elements to actually reference in order to make your menu appear and function the way you want it to? Spending some time to really learn the basic principles of the language you are working in can be super helpful. 

Before I made my nav, I spent a couple of nights studying the basics of my three chosen languages. You might want to try doing the same and really hammering down these ideas:

1. The difference between a class and an id in CSS

2. HTML syntax - just how to write it, what tags are, etc. You may want to try going over some common things you can do in HTML such as building a list, making text bold, or creating a header. *Definitely, go over what divs and containers are!* Knowing this let me get creative with the style of my menu which is what I personally love to do. Who knows, maybe you will also end up liking this part as well. If so, you  may end wanting to reference specific parts of your HTML within a div. Well, you are going to want to use the span tag for that (and it will be pretty cool!)

3. Some basic JavaScript functions. Maybe, learn what a function is as well. 

# How to Approach the Problem of Creating a Menu For Your Page
- Make a list on your page. It should look something like this in a text editor (I use Sublime Text 2 if you are looking for one to use):
{% highlight html %}
<ul>
	<li>Page 1</li>
	<li>Page 2</li>
	<li>Page 3</li>
</ul>
{% endhighlight %}

- Okay great, these are the pages that you are going to be listed in your menu! Pretty awesome, right? Next, you are just going to think about how to make these "pages" look and function they way you want them to work. 
- You can think about what to do in steps to make it easier if you want. I personally found approaching the process piece-by-piece easier to manage. It helped me become less overwhelmed by the task. 
- One place you could start is by thinking about the fact that these "pages" should be able to be click-able - you should be able to click on them to go to that page. Meaning, they should be linked. You can add the a href tag to your list to make this happen. 
{% highlight html %}
<ul>
	<li><a href="#">Page 1</li></a>
	<li><a href="#">Page 2</li></a>
	<li><a href="#">Page 3</li></a>
</ul>
{% endhighlight %}

-I've put "#""in the place of an actual link for now because I don't have content or links for these pages yet. You may not never put a link here (For example, if you have content that just loads (or becomes unhidden) on the page when you click on the element). 
- So now, depending on what you want the menu to do and look like, you can think about what to do next. 

### Here are some ideas for how you may want the menu to look
1. You may want the menu items to be laid out horizontally across your page. 
2. You may want the menu items to actually go to a different page when clicked. You can think about how to solve that problem in JavaScript
3. Maybe you a menu item should to simply display specific content when clicked. Well, you can also do that in JavaScript
4. You could simply think about the style of the menu. 
	- Maybe you want the menu to have a background color
	- Or, you want to change the font-size, font-color, or font-family of your text. 

### CSS Properties That May Help
{% highlight css %}
font-size: 
  font-size: 12px;
  font-size: 8px;
 }

color: 
	color: #fff
	color: #d3d3d3
	color: #000000
}

font-family: 
	font-family: georgia, sans-serif; - note: consider having a fall-back font
} 

text-transform:
	text-transform: uppercase;
	text-transform: lowercase;
	text-transform: capitalize
}

background: (change the color of an element's background) }

text-align:
	text-align: right;
	text-align: left;
	text-align: center;
}

display: inline (for horizantal menu items for example) }
letter-spacing (change the kerning) }
 
{% endhighlight %}
For more CSS properties, you can also [check out W3 Schools](http://www.w3schools.com/cssref/)

**One thing I can't help but share:** I ran into a problem with CSS when I was creating my practice menu. I wanted the menu to look good on a computer, tablet, or mobile device. Yet, when the width of my page got to a certain point, the menu looked ugly. I asked for help and got an awesome solution in return. 

You can actually create a rule that says "hey, when the width of  someone's screen gets to "x width,"" I want something special to happen. In this example, I wanted an element on my menu to dissapear and to make room for other items to appear nicely on a smaller screen. So cool, right?! It looks like's this in case you want to try it for yourself. 
{% highlight css %}
@media(max-width: 545px) {

	#site-title {
		display: none;
	}
}
{% endhighlight %}

In the end, I created a test site that looks like like this:
![creating a menu from scratch]({{ site.url }}/assets/test-menu.png)