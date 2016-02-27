---
layout: post
title: "Your first Bootstrap Project - (Part 1)"
date: 2016-02-20
image: "bootstrap.jpg"
excerpt: >
 Now I know, Bootstrap is old news to many. Still, if you are new to web development, it can help to immerse yourself in a front-end framework. If anything the experience will show you how to quickly make a static site.
---

![Bootstrap Tutorial](/assets/bootstrap.jpg)

Before I start talking about Bootstrap, I have some big news. **I was hired as an SEO Specialist/Web Developer a couple of weeks ago!** My new role marks the first time I feel comfortable enough to call myself a web developer (more on that later).

Yet, once I started my new role I immediately wanted to beef up on a few things. My first priority was to become more comfortable with Bootstrap. Now I know, Bootstrap is *old news* to many. Still, if you are new to web development, it can help to immerse yourself in a front-end framework. If anything the experience will show you how to quickly make a static site. Even better, you may even become more comfortable with common design patterns or methods of structuring your styles.  

Now, I had experimented with Bootstrap once before. I actually used it for my blog here for a few days just so I could see what it was all about. Though I decided to get rid of it in favor of learning how to layout out pages myself, the experience did teach me how to create a sticky footer. That alone was well worth the effort, believe me. The sticky footer problem was driving me pretty damn crazy.

This time around I decided to just create a one page example project. First, I had to remember how to download and install Bootstrap though. For someone who is new to frameworks, it can be intimidating even to install a framework and include it in a project. At least it was for me when I first started back in July. So, I want to give you guys a little walkthrough on how to get started since it can be a little confusing.

# Downloading and Installing Bootstrap 3.3.6

To start on your own Bootstrap project, go to the [Bootstrap "getting started" page](http://getbootstrap.com/getting-started/). Here you can click "download bootstrap". After that, you'll just follow the directions on the page to install it.

First, I recommend installing bower and Grunt if you don't already have them installed on your computer.
[Bower](http://bower.io/) is just a package manager that helps you keep track all of your libraries, framework, etc . It just helps you make sure you install the right version of your packages and their dependencies.

After that, you'll go back into your terminal and install Grunt. The Bootstrap getting started page shows you how to do this as well. Yet, I ran into some errors while trying to install it. So if that happens to you, simply make sure you're in your root directory and run the command ```sudo npm install -g grunt-cli```.

The sudo part is called *super user do*. It basically lets you force commands by overriding security measures that could be causing your errors. In short, it lets you act as if you are the superuser on your computer. From there, you can continue on with the installation as usual.

Grunt is important because it lets you run tests and will watch your changes as your work on your project. Plus, once you include a 'config.yml' file in the root of your project, it will let you serve up your project locally while you're developing with the command ```jekyll serve``` .

Okay, now that you have bower and Grunt installed, go ahead and unzip your Bootstrap folder. You'll see that it includes a bunch of minified CSS, JavaScript, and even some fonts.

**Here, you can see why so many people use frameworks.** They just provide a bunch of styling for you right out of the box to make building a site a little easier and faster. Fair warning though: using Bootstrap did not speed up the development process for me at all! I am so used to creating my own layouts that having to out specify some of the built-in styles was pretty time consuming and frustrating. At the end though, I was happy with the results (which I'll share here in a second).

Now, all you have to do is copy the HTML below into your project's index.html file. Then, you'll be able to start your own Bootstrap site!

{% highlight HTML %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>
    <body>

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <!-- Bootstrap -->

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
   <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>

   <!-- Include all compiled plugins (below), or include individual files as needed -->
   <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

  </head>
  </body>
</html>

{% endhighlight %}

Alright! You have bootstrap installed. Now, you can begin to create pages.

## My Bootstrap Example

I started by making just a one page example. You can [checkout the project for yourself here](https://github.com/ktagilbert/Bootstrap-Example). *And* it looks like this:

![Example bootstrap project](/assets/bootstrapExample2.jpg)

## Becoming familiar with Bootstrap

Okay, there are couple of things to know about Bootstrap before you get started. The first is that most of the styling you will do will be done in HTML Don't worry, I'm not talking about inline styles. Bootstrap just has a bunch of classes with associated styles for you to use already.

To get started, take a couple of hours to become familiar with the different classes you now have at your disposal [by taking a look at Bootstrap's CSS page](http://getbootstrap.com/css/). Then, explore the other pages the framework has for you on their [customize page](http://getbootstrap.com/customize/). If you want to override any of the existing styles you see here, you'll have to make a "styles.css" file in your css folder and include it in the head of your HTML. Then, you'll have to out-specify the Bootstrap styling.

Okay, I'll leave you with the task of installing and exploring Bootstrap for today. **Tomorrow, I'll go more in depth on how I made my example project.** Stay tuned and thanks for reading guys!
