---
layout: post
title: "Learning About Flexbox (And Why It's a Great Tool)"
date: 2016-01-15 12:43:21
image: "tooldbox.jpg"
description: >
 Flex properties are just a way for you to position elements along a vertical and horizontal axis. They also help you proportion elements. Read more to get started with flex properties today.
excerpt: >
 Flex properties are just a way for you to position elements along a vertical and horizontal axis. They also help you proportion elements, which I think is super cool. All you have to do to get started is declare a flex container.
---

Before I begin telling you about flexbox properties, I want to fill you in on a debate surrounding the tool. When I first started learning about web development, the internet told me not to use flexbox. People were ADAMANT that flexbox was not the best tool to use because modern browsers didn't support it and there were other tools to use to achieve the same layout results. I saw the rants on reddit and I believed them without doing any research of my own.

Then, when I was working on my about page, I found myself wrestling with absolute positioning, z-index, and clear properties. It was a huge pain that involved *way* too many lines of css. So, I reconsidered my uninformed stance on flexbox. I pulled up a new tab and began researching which browsers supported flex properties (btw, this is what I should have done in the first place!).

**In a couple of seconds I found that 95.31% of browsers support flexbox properties.** Wow, okay, that's good. AND, because my targeted audience are a bunch of awesome nerds who mostly use Chrome, I quickly decided that I could overlook that remaining 5.69% because I'm pretty sure those who use IE 8 or 9 won't be visiting my blog anytime soon....or ever.

# What browsers support flexbox:

![What Browsers Support FlexBox?](/assets/canIUseFlexbox.png)


I go to [Can I Use](http://caniuse.com/) to see which browsers and operating systems will/will not support different methods or tools. A quick search on their site showed me exactly which browsers would not be compatible with flexbox properties. **Here is what I found:**

- Android does not support the flex-wrap property and I must use the -webkit preface if I went to use other flexbox properties.
- Internet Explore only supports 2012 syntax
- IE 8 and 9 do not support flexbox at all.

## Using analytics to help determine which tools to use

To see if I could go forward with using flexbox properties, I took a look at my Google Analytics page to see which browsers my visitors typically use. **A quick look under the Technology tab told me that 0% of my visitors use Internet Explore and around 14% use Android.** That told me that I would only need to consider the -webkit prefix moving forward and find a work around for flex-wrap. No problem!

## The Lesson to be learned

[![Learning About New Web Development Tools](/assets/webDevTip1.jpg)](
https://twitter.com/intent/tweet?text={{ page.title }} url=http://bit.ly/1Sn3ppa &via=KT_a_Gilbert)

I wanted to tell you all of this before teaching you about flex properties because I learned two awesome lessons here:

1) You should always research new tools yourself before believing what anyone else has to say about them.

2) Take the time to see which browsers and operating systems will support any new tools or methods you want to use before going ahead and using them. A quick look at Google Analytics will then tell you what accommodations you'll need to make for your users.

## Learning about Flex Properties

Flex properties are just a way for you to position elements along a vertical and horizontal axis. They also help you proportion elements, which I think is super cool. All you have to do to get started is declare a flex container. Then, you declare flex-properties for your flex items. Here is some more info to help:

> [Treehouse]() helps explain that flexbox just gives you a flexible way to layout page content that ends up taking less time and involves fewer changes to your markup.

**Flex Containers:** These can be inline element such as a div, unordered list, or span element.

**Flex items:** Flex items are anything inside of your flex containers. They are just your children elements.

You first step will be to declare a flex container. It will look something like this:

{% highlight css %}
.your-list {
  display: flex
}
{% endhighlight %}

That's all there is to it! After that, you can think about how you want your flex items to behave. Do you want them to be inline elements? Or should they appear in a column? Should any be larger in width than others? What should happen to them on different screen sizes? These are all things that flexbox properties can help you figure out.

## Get flexible with flex items
When it comes to creating the layout you want, you'll need to make a few more declarations to get things exactly how you want them. Here a few to get you started:

- **flex-basis:** This one is my favorites! Flex-basis allows you to determine the proportions of your flex items. Instead of declaring set widths for elements that require multiple media queries at the bottom of your stylesheet to maintain, use flex-basis instead. You can set a length using rem, em, or a percentage to make a particular element bigger or smaller than the others around it.

{% highlight css %}
#large-picture {
  flex-basis: 30%;
}
{% endhighlight %}

- **flex-direction:** flex items run along the main axis (x) and cross axis (y). If you want to change this, declare a flex-direction in your flex container. Use row, row-reverse, column, or column reverse. Row will give you inline elements and "column" will you give you...well, columns. If you want to flip which items appear first in your layout, then tack on "reverse" to make it happen.

{% highlight css %}
.your-list {
  display: flex;
  flex-direction: column;
{% endhighlight %}

- **flex-wrap:**
![example of flex-wrap](/assets/flexWrap.png)
 flex items, by default, all try to squeeze into one line. If you want them to wrap (say for different resolutions), you can use flex-wrap to make them move down to different lines as needed.

 Okay, this should get you well on your way to using flexbox!! Thanks for reading guys. Remember, if you have any questions, leave a comment below.
