---
layout: post
title: "A Client Side Search Function Made with jQuery"
date: 2016-01-30
image: "searchFunction.jpg"
excerpt: >
 There are a TON of ways to make a search function. So that's why I had to sit down and think about what I could make using only the tools that I had at my disposal.The end result is a simple search function that does exactly what I need it to do. Here's how:
---
![Client side search function tutorial](/assets/searchFunction.jpg)

A few months ago, I wanted to make a search function for a site I was working on. I didn't know where to start so I [rubber ducked the problem](http://www.rubberduckdebugging.com/). My thought process went something like this:

1.  I've seen search functions before. A LOT of them actually. Hmmmm! What do I like about the search functions that I have seen and used?
2. Well, they let me find posts that I have either read before and what to find again *or* they let me discover new articles based on words that I predict will be in the post's title.
3. I search by a post's title and always have!
4. Okay, so I want to create a search function that will let a user find an article based on the words in that article's title.
5. I also want to create my search function using the tools that I have at my disposal: SCSS, HTML, and JavaScript/jQuery. So, I guess it has to be a search function that runs totally on the browser.
6. I think that's possible! I'm going to try it.

# How I made a client side search function
I went to my desk and called my fiance over to help me figure out what to do. Again, I needed to do some more rubber ducking and it usually helps me to talk out the problem with someone in order to get my thoughts in order. So we did some pair programming to figure out what to do:

The first step was to create a search field that would allow a user to enter in a search term. This a simple, un-intimidating step that will help you get the ball rolling. All you need to know is some CSS and HTML to make your search field look and function they way you want it to.

**Here is how we made ours using a search icon from [font-awesome](https://fortawesome.github.io/Font-Awesome/):** (note: I ended up using the search function for this site as well so you can see it in action on [my home page!](http://ktgilbert.herokuapp.com/)):

{% highlight html%}
<div class="search">
  <i class="fa fa-search"></i>
  <input type="text" id="search-text" name="search">
</div>

<div id="no-results">
  <p>Sorry, there are no results for that search. Try again?</p>
</div>

<ul class="post-list">

{% endhighlight %}

So you can see that we created a container for a search field in my "index.html" file. Next, I included a search icon from font awesome. Finally, I created a text input area where a user can type in a word that they want to search for. You'll also notice that the input element is an ID because it a unique element with one purpose. Alright, totally simple! Here is the SCSS we used to make the search field look nice:

{% highlight SCSS %}

.search {
  overflow: hidden;
  height: 80px;
}

#search-text {
  float: right;
  margin: 1%;
  outline: none;
  width: 18%;
  padding: 5px;
  font-size: 0.7em;
  display: none;
}

#no-results {
  display: none;
  text-align: center;
}

.fa-search {
  float: right;
  padding: 1.5% 2% 0 0;
  float: right;
  cursor: pointer;
  color: $blue;

  &:hover {
    color: #666;
  }
}

{% endhighlight %}


Here, I have removed the outer glow of the text-field, set an adequate width for the input area, and have styled the font of the user's input as well as the font for what will show up when there are no matching articles.

**One note:** I've  also included "display: none" because right away I knew that I would add some jQuery later on to make the input field display after a user clicks on the icon. But I'll get to that in a second. For now, let's go into adding functionality to the search field.

## Creating a client side search function with jQuery
Right now, the search field does next to nothing. A user can type in it and that's all. So, now you are going to want to make it actually search for something. **My fiance helped me figure out how to add some functionality to my search function using jQuery. Here's what we came up with:**

{% highlight javascript %}
$('.fa-search').on('click', function(event) { // on click of search icon
  $('#search-text').animate({width: 'toggle'}, '700'); // make the search field's width expand (aka reveal the search field slowly)
});

var $articleTitles = $('.post-link');
var searchTerm = "";


function search() {

  $articleTitles.each(function(i, elem) { // search through each '.post-link' (aka the title of each post)
    if ($(elem).text().toUpperCase().indexOf(searchTerm) === -1) { // if index of the user's input(aka. the string) is -1, that means the article does not match the search query
      $(elem).closest('.article').hide();  //hide all articles that do not match the query
      $('.article').css({
        'width': '90%',
        'margin': '0 5%'
      });
    } else { // else (if the string is greater -1)
      $(elem).closest('.article').show(); // show the closest article in the search results
      $('.article').css({
        'width': '25%',
        'margin': '0'
      });
    }
  });
  if ($('.article:hidden').length === $articleTitles.length) { //if no articles match the user's input, then show "no results found"
    $('#no-results').show();
   }
 }

 $("#search-text").on('keydown', function(e) { // this essentially watches which keys on the keyboard a user enters into the search field.
   if (e.keyCode === 8) { //if a user presses keyCode 8 (aka backspace/delete)
     if (searchTerm.length > 0) { // if the user's input doesn't contain anything
       searchTerm = searchTerm.substring(0, searchTerm.length - 1); // extract the character from index position -1
       $('#no-results').hide(); //hide "show no result"
       search(); //run search function
     }
   } else {
     searchTerm += String.fromCharCode(e.keyCode); // search term = the value of the string that is generated from the user's key presses.
     search(); // run search function
   }
 });
{% endhighlight %}


## Some more info about the jQuery methods we used in the search function:
We used some specific methods to help us create the search functionality. I had never heard of some of these methods before so I thought it would be worth it to tell you more about them:

- [keydown():](https://api.jquery.com/keydown/) A shortcut for the ```.on( "keydown", handler);```

- [String.fromCharCode():](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode) MDN explains that this method "returns a string created by using the specified sequence of Unicode values."

- [toUpperCase():](http://www.w3schools.com/jsref/jsref_touppercase.asp) Transforms text to all capitalized letters. This helps prevent your code from breaking/prevents a user from having to worry about their input being case sensitive.

- [indexOf():](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf) Returns the index value of a character within a string. -1 will be returned is a value is not found.

- [substring():](http://www.w3schools.com/jsref/jsref_substring.asp) Extracts certain characters from a string that you can dictate to the browser.

## Take away lessons:
When I was tasked with creating this search function, I was overwhelmed. There are a TON of ways to make a search function. So that's why **I had to sit down and think about what I could make using only the tools that I had at my disposal.** The end result is a simple search function that does exactly what I need it to do.

It's not fancy. It's not especially innovative. *But* it works for my static blog and it accomplishes the function I need it do. And that's totally fine. Plus, pair programming with my fiance helped me learn a bunch of cool new methods so I truly enjoyed the process of making this.

**Thanks for reading guys!** I hope this tutorial helps. Again, if you want to see the search function in action, just go to [my home page](http://ktgilbert.herokuapp.com/) and click the search icon. Also, let me know in the comments if you have any questions!
