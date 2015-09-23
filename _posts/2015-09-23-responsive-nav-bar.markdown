---
layout: post
title: "Tutorial: Making a Responsive Navigation Bar"
date: 2015-09-12 17:00:00
excerpt: >
 If you want to incorporate some jQuery into your site, you can take it one step further with a nav bar that has some functionality. Here is a tutorial the will help.
---

Earlier, I showed you [how to make a nav bar from scratch using just HTML and CSS](http://rookie-dev.herokuapp.com/2015/06/24/nav-bar.html). I really believe creating a nav bar is a great first project for anyone learning about HTML and CSS/SCSS. Now, if you want to incorporate some jQuery into your site, you can take the project one step further with a nav bar that has some functionality.

When I redesigned Rookie Dev my nav bar was the first thing I wanted to change. I had a simple, static navigation that was pretty boring. So I took a look at other sites and noticed that their nav bars changed colors as users scrolled down.

Now, I didn't want a nav bar that changed colors just for the fun of it. I wanted it to solve a problem I was having. I was really looking for a super clean, all white nav bar. Yet, when that same element reached some text or an image, the menu text overlapped and became unreadable. **I realized that I needed the nav bar to change colors when it reached these elements.**

In the end, I was able to create a nav bar that changed colors when the user scrolled down to a certain element on the window. This is what I started out with.

### Nav Bar to Start With

![Simple Nav Bar](/assets/normalnavbar.png)


#How to Approach the Problem

If you are looking to build a great, responsive nav bar that utilizes some jQuery here is how to start. First, you can navigate to where you are including your javascript. You can start by making sure you have a jQuery library included along with your other script tags. (I keep mine in my head.html file.)

{% highlight JavaScript %}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
{% endhighlight %}

Next, let's review some of the markup you will need for this project.

{% highlight HTML %}
<ul id="menu">
  <li class="menu-item"><a href="menu-item">Menu Item 1</li>
  <li class="menu-item"><a href="/menu-item2">Menu Item 2</a></li>
  <li class="menu-item"><a href="/menu-item3">Menu Item 3</a></li>
<ul>
{% endhighlight %}

Here is some SCSS as well:

{% highlight CSS %}
#menu {
	text-align: left;
	padding: 10px 0 0 10px;
	color: $brown;
  height: 40px;
  position: fixed;
  background-color: transparent;
	margin: 0;
	top: 0%;
	z-index: 2000;
}

.menu-item {
	padding: 0 10px;
	list-style: none;
	display: inline-block;
	font-size: 14px;
}
{% endhighlight %}

**Okay, now you have a static menu to work with.**

## Set Up Your Problem

Next, you can start by commenting out what you will need to do to make the nav bar change colors. Commenting out the problem is a great first step in solving your problem. I know that for me, it helps prevent me from getting overwhelmed by a problem. Instead, I can just start by simply solving the first step and then go from there until the problem is solved.

{% highlight JavaScript %}
//desktop nav bar
  //when user scrolls
  //and they reach an element (first <p> tag && first<h1> in my case)
    //change #menu.css background color
    //change .menu-item color
  // else
    //#menu.css should have a transparent color
    //.menu-item.css should have color: #1D1E18 - brown
{% endhighlight %}    


So far, we know what we want our menu item to do. To solve it though, you can try and store some variables to make things a little easier. Here, you can store 3 sets of info:

1. where a user will start their scrolling
2. When the nav bar should change color
3. What the offset will be


{% highlight JavaScript %}
var scroll_start = 0;
var startchange = $('p:first');
var offset = startchange.offset();
{% endhighlight %}

Okay, now you can go in and fill in the rest of your commented out steps. First, you know that you are going to want an if/else statement. We know this because you have two case scenarios for your nav bar depending on where the user is scrolled to on the window. So we can write something that looks like this:

{% highlight JavaScript %}
if (startchange.length || $('img')) {

  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();

    if(scroll_start > offset.top) {
      $("#menu").css('background-color', '#111');
      $('.menu-item').css("color", "#fff");
      $('.menu-item').children().css("color", "#fff");
{% endhighlight %}

You'll notice that at the beginning of my if statement, I used the or operator. You don't have to include an or statement if you don't need it.  I include it here because when I tested my nav bar I noticed that on my about page, the first element was actually an image. Meaning, I needed the nav to change to black when it reached this image and when it reached the first <p> tags on a page. For you, it will help to look at your pages and see what elements your nav will hit first. It is likely that this will either be the first div tog or the first h1 tag. Either way, just make sure to indicate this at the beginning of your if statement.


Next, you can write your else statement. The else statement will provide the css info you need to change when the menu goes back to it's initial state at the top of a window. Now, you are not declaring what the menu will look like normally. Instead, the else statement will help your menu toggle back to its normal state if a user scrolls *back up* to the top of the screen.

{% highlight JavaScript %}
    } else {
      $('#menu').css('background-color', 'transparent');
      $('.menu-item').children().css("color", "#1D1E18");
    }
  });
}
{% endhighlight %}

**Now you're done!** In the end, you will get a nav bar that changes state on scroll. It will look something like this:

### Nav Bar that Changes on scroll

![Responsive Nav Bar](/assets/navbaronchange.png)

Alright, hope this helps guys! **Let me know how your nav bar turns out. I'd love to see links to your end results.**
