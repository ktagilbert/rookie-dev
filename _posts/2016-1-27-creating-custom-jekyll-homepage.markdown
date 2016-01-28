---
layout: post
title: "How I Customized My Jekyll Home Page Layout"
date: 2016-01-27 12:43:21
image: "jekyllDefaultSite.jpg"
excerpt: >
 When you start work on your new Jekyll powered site, you’ll have a super clean layout to work with. It’s pretty awesome. But, if you want to make your site look a little different, you’ll need to make some customizations yourself. Let's get started.

---

![Default Jekyll Layout](/assets/jekyllDefaultSite.jpg)
When you start work on your new [Jekyll powered site](https://jekyllrb.com/), you’ll have a super clean layout to work with. It’s pretty awesome. But, if you want to make your site look a little different, you’ll need to make some customizations yourself. To get started, you can open your "index.html" file in the root of your repo to make some layout changes.

#Customizing your Jekyll powered home page

At first, I didn’t know what I wanted layout wise for my home page. [(see my post here for more info on thinking about your UI Design before coding!)]({% post_url 2015-10-17-UI %}) I tried a lot of different options resulting in weeks of work. In the end I didn't like anything I tried out but hey, at least I got a lot of practice in SCSS out of the process. Yet, I  was *finally* able to settle on **a three column desktop layout to help display my posts they way I wanted to.**

## Step 1: Creating columns

![Three Column Blog Layout](/assets/threeColumnLayout.jpg)

I used [flexbox properties]({% post_url 2016-1-15-learning-flexbox %}) to achieve my three column layout. I chose three columns because I wanted to stick with larger images to really showcase each post on my home page. Plus, I just thought that four columns looked too cluttered and boring. The four columns layout was reminiscent of a newspaper spread with two many articles on the page.

## Here’s how I made columns using flexbox:

I went into my "sass" folder and created a file called "style.scss" to help contain all of my custom style changes. (Note: I had to include this new stylesheet in the head of my site.) Here is what the SCSS looks like:

{% highlight scss %}
.post-list {
  list-style: none;
  margin-bottom: 0px;
  display: inline-flex;
  flex-wrap: wrap;
  margin-bottom: 5%;

  li {
    width: 25%;
    padding: 30px;
    clear: none;
    display: inline-block;
    align-items: center;
  }
  img, .post-img {
    align-items: center;
    display: inline-flex;
    overflow: hidden;
  }
  .excerpt {
    align-items: baseline;
  }
}
{% endhighlight %}

If you don’t want to use flexbox, you can achieve the same effect using styled lists and [media queries]({% post_url 2015-09-05-mediaquery %}).

## Step 2: Including post excerpts in Jekyll
Out of the box, a Jekyll site displays posts with the help of a post title and post link. But I wanted to include excerpts on my home page with the goal of getting more visitors to click on my posts. I mean, why spend hours writing blog articles if no one clicks on them, right? **I learned that if you give vistors an idea of what they are going to read, they will typically be more apt to click on that post and continue reading if they like the content they've been shown already.**  

Thankfully, Jekyll uses liquid templating to help you include dynamic features throughout your site. All you have to do is reference whatever file you want to include with a liquid tag. If you want, you can check out [Jekyll's documentation on liquid templating here.](http://jekyllrb.com/docs/templates/)

In this case, I didn’t have to create any markup of my own. All I had to do was include some meta info for each of my posts. So, now each of my posts contain some neat meta info that I can reference in my markup:

{% highlight html %}
---
layout: post
title: "How I Customized My Jekyll Home Page Layout"
date: 2016-01-27 12:43:21
image: "jekyllDefaultSite.jpg"
excerpt: >
 Flex properties are just a way for you to position elements along a vertical and horizontal axis. They also help you proportion elements, which I think is super cool. All you have to do to get started is declare a flex container.
---
{% endhighlight %}


## Step 3: Using liquid tags to include images

For a while I was cool with just having a post title, link to the post, and an excerpt in this three column layout. But, after a while I realized that all that text was boring. A simple solution was to include some images.

They're a bunch of way to include images for each of your post but I went with what I think is the easiest option. **In the same way that you can include excerpts with liquid tags, you can associate each of your posts with an image.** Just include “image” in your meta info and pair it with a file in your “assets” folder. Then, you'll include your liquid tag in the "index.html" file in the root of your site. You can see how I've included an image for each of my post in the code snippet above.

## Optimize Your photos for the web first

**PRO TIP: To make sure all of your images appear uniformly, make sure you give them a uniform width and height.** I resized all of my images in Photoshop as either 1300px by 750px or 650px by 375px (for smaller original images) and then clicked “save for web" when I was all done.

When I save my photos I also like to make sure they load progressively and I adjust the quality of the photos to help reduce the image’s file size (this will reduce your image's load time!). [Here’s some more info on optimizing photos.](http://madefreshly.com/blog/howto/how-to-properly-optimize-images-for-web-in-photoshop/)

Once my images were in place, I was finally happy with my home page! Believe me, it took months to get my site to look exactly how I wanted it to. Of course, that was my own fault for not mocking up a design before implementing layouts. Plus, I think I spent two whole days just learning how to associate my posts with an image. In the end though, the time was well worth it and I ended up learning a ton.

**Let me know how your layouts turns out and if you have any questions, feel free post it in the comments below.** Thanks for reading guys!
