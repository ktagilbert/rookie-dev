---
layout: post
title: "Your first Bootstrap Project - (Part 2)"
date: 2016-02-21
image: "wireframe.jpg"
excerpt: >
 Yesterday, I showed you how to install and set up your first Bootstrap project. So today, I am going to go over the benefits of using the framework and will go over a few elements that I found the most useful.
---
![frameworks for web designers](/assets/wireframe.jpg)
Yesterday, I showed you [how to install and set up your first Bootstrap project]({% post_url 2016-02-20-bootstrapExample %}). So today, I am going to go over the benefits of using the framework and will also introduce a few elements that I found the most useful.

# Benefits of using the Bootstrap framework

The fact is, Bootstrap is just one framework you can choose from. It looks nice, it speeds up the development process, and it comes with responsive elements to help make sure your site looks great across different platforms.

These are all great features. Still, there are other frameworks to choose from. For example, I personally like [Materialize](http://materializecss.com/) by Google, [Foundation](http://foundation.zurb.com/learn/about.html), and [Skeleton](http://getskeleton.com/). Still, there is a reason Bootstrap seems to be the most popular framework out there.

## 7 features that make Bootstrap useful

- It pushes out new versions regularly to keep up with new compilers and versions of JavaScript.
- It has official themes for dashboards, web apps, and marketing pages
- The framework includes tons of built in components to save you time including glyphicons, dropdown menus, buttons, and nav bars (plus tons more!)
- It includes a solution for pagination (which I think is super cool)
- People love the fonts included with Bootstrap.  
- Probably the most useful aspect is that Bootstrap comes with a grid system and containers with uniform widths. The grid system helps remove many of the complications involved in creating layouts. Plus it's fluid to make responsive design *super* easy
- It has a huge support community that will be able to help you answer most of your questions. This is especially awesome for those who choose Bootstrap as their first framework!

## The process of learning Bootstrap
To get started with Bootstrap, I really only had to become familiar with the different classes that would help me design my one page [example project](https://github.com/ktagilbert/Bootstrap-Example). I just started by reading about the Bootstrap grid system and components. From there, it was easy to start building my site.

There a ton of resources out there to help you learn these classes as well so I'm not going to try and cover everything you need to know about the framework. Instead, I'm just going to tell you about the elements that I think have the most common use cases.


##1. Jumbotron

![Jumbotron](/assets/jumbotron.png)

I used the Jumbotron class to make my containers with blue backgrounds. Here's an example:

{% highlight HTML %}
<div class="jumbotron">
  <ul>
    <li class="left-li pull-left">
      <img class="half-width-img" src="assets/webDesign.jpg" />
    </li>
    <li class="right-li pull-right">
      <span class="half-width-txt">
        <h2 class="text-center">Thanks for visiting!</h2>
        <p>
          Artisan brooklyn selvage next level vegan. Farm-to-table whatever organic slow-carb,
          marfa butcher pinterest beard tumblr austin kombucha intelligentsia distillery pour-over. Try-hard letterpress
        </p>
      </span>
  </li>
</ul>
</div>
{% endhighlight %}

Here you can see that the Jumbotron class gave me a uniform and fluid container with pre-set padding so that any text or headers within the container aren't just floating at the top left by default. That way all you have to do is include your headers and text. Then you can move on to the next part of your layout.

## 2. Containers
- ``<div class="container-fluid">`` : a responsive container that spans the entire width of a window.
- ``<div class="container">`` : a responsive fixed-width container.


## 3. Columns
![Two Column Layout](/assets/twoColumnLayout.png)

Columns were my favorite elements. All you have to do to create columns with Bootstrap is use ```<div class="col-md">```. You also have to define a width for the column that all together adds up to 12. For example, if you want three columns you will use ```<div class="col-md-4">```. Likewise, two columns would be ```<div class="col-md-12">``` and four columns would be ```<div class="col-md-3">```. For mobile layouts you can also use  the```<div class="col-sm">``` element or even ```<div class="col-xs">```.

Here is an example of the how to make the two column layout above:

{% highlight HTMl %}
<section id="intro-content">
  <div class="col-lg-12 text-center">
      <h1>Welcome to my sample project</h1>
      </br>
  </div>
  <div class="col-lg-4 col-lg-offset-2">
      <p class="margin-text">Salvia aesthetic organic, trust fund man bun photo booth small batch cred heirloom
        chicharrones tacos pickled hashtag vegan quinoa. Typewriter sartorial twee, 90's neutra art party mixtape
        keffiyeh kinfolk fixie DIY. Neutra bushwick everyday carry yuccie kale chips hashtag drinking vinegar portland.
      </p>
  </div>
  <div class="col-lg-4">
      <p class="margin-text"> Cold-pressed pour-over affogato +1 hella hammock. Leggings hammock +1 food truck,
        pour-over XOXO pabst letterpress offal migas. Kale chips disrupt cronut mumblecore irony. Photo booth blue
        bottle slow-carb, tumblr DIY health goth kogi butcher gochujang man braid readymade..
      </p>
  </div>
</section>
{% endhighlight %}



## 4. Images
![Responsive Image Class](/assets/responsiveImgClass.png)

The framework also comes with image styling that I found particular useful. There are a few different image classes that may help you out:

- ```<img class="img-responsive">``` : will automatically adjust to different screen widths.
- ```<img class="thumbnail">``` : will give you an image with a slight border.
- ```<img class="img-circle"``` : gives you a perfectly circular image so you don't have to mess around with border-radius.


## 5. Glyphicons
![Bootstrap Glyphicons](/assets/glyphicon.png)

Glyphicons are icons you can use for your site. Instead of pulling in a separate library, Bootstrap has done that work for you. To include an icon on your site, you will use an element that look like this: ```<span class="glyphicon glyphicon-search" aria-hidden="true"></span>```

##6 Navbars
![Bootstrap Navbar](/assets/navBar.png)

With just the inclusions of ```<nav class="navbar navbar-default">``` You can have a nav bar on your site. You just have to go in and create links from there. Plus, the Bootstrap navbars are responsive. They will collapse on mobile size screens and will toggle to a horizontal bar as a user's viewport increases.

##Starting your own project

Alright! I would now say that you know enough about Bootstrap to start on your own project. Again, learning Bootstrap really just involves becoming familiar with the different classes unique to the framework. So once you can do that, you'll be on your way to building your own site.


**Thanks for reading guys! And as always, let me know if you have any questions by leaving a comment below.**
