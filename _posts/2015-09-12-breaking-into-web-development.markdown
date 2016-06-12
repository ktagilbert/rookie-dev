---
layout: post
title: "Breaking Into Web Development (In Small Steps)"
date: 2015-09-12 17:00:00
image: "learning-steps.jpg"
description: >
 Here are 6 steps that can help begin breaking into web development. Read more to see what skills to begin developing while you continue to learn about the field.
excerpt: >
 To be a computer programmer you don't have to know advanced calculus, at least not to get started. If you really want to get into the field, it just requires some dedication and a willingness to learn/ask questions.
---

It used to be that the words "computer programmer" conjured up memories for me of people in the math and science building of my university. They were the people who arrived 30 minutes before class to consult with each other on complex problems. They said things like "back face curling", "code refactoring," "data flow analysis, "and heuristic evaluation." They also threw around words that sounded completely ridiculous to me (e.g unicorn, ruby gem, brain fuck, Boomerang, Emerald, etc.) What was I doing there? Waiting for my required Astronomy 101 course to start and browsing Pinterest on my phone. They were geniuses in my book.

The thing is, yes, they were smart. They were computer science majors who were taking advanced calculus. They spent all their time reading computer science textbooks and solving algorithms. Yet, to be a computer programmer you don't have to know advanced calculus, at least not to get started. You don't even need a computer science degree (although more power to you if you have one!).

If you really want to get into the field, it just requires some dedication and a willingness to learn as well as ask questions. **I recommend reading this blog post to learn how I got the courage to get into web development and to see what skills to learn first. After that, you will hopefully be able to see that breaking into web development isn't *that* scary. as long as you tackle it in small steps.**


# Moving beyond Wordpress To Create My First Project

I don't know why your are interested in web development and I'm not going to assume I do. Maybe it is because you want to do something creative and you have a strong interest in tech already. Maybe, you have been in love with web development since you were a teenager (and in this case you probably know more about the subject than I do). Or, you are like me and arrived at the idea of pursuing web development a little later in life. I do know that getting into web development is intimidating. **It shouldn't be though!**

For me, the moment I knew I wanted to be a front-end developer came one-month into unemployment. I had lost interest in much of my former career once I was no longer being paid to do it. Instead, I spent my days messing around with a Wordpress blog that I used to have. That is until the theme I was using had an update that turned my content into an enlarged, pixelated mess. (Has anyone ever had this happen to them before??)

### My Pixeleted Mess:
![Mobile UI Mock Up](/assets/pixelmess.png)

I spent two weeks re-doing the site. The funny thing is working on the redesign was the most fun I had since being employed. I didn't even mind that I was sitting at a kitchen table rather than a desk. I didn't care that I wasn't being paid to do the work. The work was just fun.

Once the site was back to how I liked it, I was even a bit proud of what I had done. In fact, the site looked even better than before because I had found a way to inspect elements and figure out their selectors to make some custom changes of my own.

I showed off my work to my S.O. at dinner once it was complete. I pulled the site up on my phone and asked him if he would take a look. He is a self-taught back-end developer who never ceases to impress me with all the cool things that he is able to do. Showing him my work was kind of intimidating to be honest because he really knows how sites should work and function. Yet, he was smiling when he saw what I had done. He then looked up at me and very carefully suggested that I go into front-end development.

The thing is, I had been thinking about the same thing for months - ever since I learned how to fix site bugs at work. That was when I first began to study HTML and Markdown. Still, I wasn't sure if I could be a front-end developer.  

I didn't think that I was smart enough to do that. You see, I studied creative writing in college. From there, I thought that I was going to spend my adult life as a secretary or admin assistant while writing a novel during coffee fueled nights. Going into web development was something I had never thought that I could do. *It simply didn't fit in with the idea I had been forming for myself.*

## Where to start - breaking the process down into small steps

That night though I said good-bye to that idea because it just wasn't working for me. Instead, My S.O. and I sat down together and went over some basic concepts. I learned about arrays, operators, and zero-based indexes in JavaScript. Then, we googled [Jekyll](http://jekyllrb.com/) together and my S.O. ran some commands to create a Jekyll powered static blog site that I could work on. **It took us about three hours for me to see that I had it in me to learn a programming language *and* that I had a means to create a site from scratch.**

My task for the next day was to learn how to add new pages to the site and begin creating a design I liked. I had to learn how to select elements for manipulation in JavaScript, how to maintain clean, modular code, and how to out specify the base stylesheet included in the Jekyll directory. This was all kind of overwhelming.

What helped was focusing on one task at a time. For example, if I could just learn what the DOM was before learning how to traverse it, I could prevent a panic attack. This approach helped A LOT! I started off by learning three basic skills. HTML, CSS, and JavaScript.

It may help you to take this same approach. **Here are some steps to help you get started!**  

#### Note: You can learn these in whatever order you want/need.  


## Step One: Make a GitHub account

If you want to begin a project of your own, I first suggest you make a GitHub account. Someone once told me "GitHub or get out." They meant, you need to have a GitHub account before an interviewer will take you seriously. It's smart advice. Having a GitHub account helps employers know that you have worked on a project before, that you know a little something about [version control](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control), and that you're interested in what others in the development community are up to.

Just go to [github.com](https://github.com/) and create an account. You can then create a new repository for the project you want to work on and go from there!

## Step Two: Learn Some HTML

HTML, or Hypertext Markup Language, is just a way to create a skeleton for how your site will look. For example, it will help you declare where headers will go and where certain blocks of content will be placed on your page. Here are some great steps to help you master it:

- **Read up on how to write HTML:** [W3Schools](http://www.w3schools.com/html/default.asp) is a great first place to look!
- Learn the difference between a div and a span: You can think of a div as a dividing element in your markup. It contains and divides certain sections of your layout. A span, on the other hand, is a way to group inline-elements in your document.
- **Mess around with HTML to create your own custom layouts:** You can try by working on your own project or creating something in a [codepen](http://codepen.io/pen/).
- **Harness the power of the list! Seriously, you can do a lot with lists when they are combined with CSS.**
- **Learn how to indent properly:** Elements within element should be indented.
- **Just know that when someone says "show me your markup,"  - this just means show them your HTML file:** I'll admit, I didn't know this for a *long* time!

## Step Three: Tackle SCSS

I recommend learning [SCSS](http://rookie-dev.herokuapp.com/2015/07/20/sass.html) first. It will make it easier when you are ready to switch to [SASS](http://sass-lang.com/) (a very marketable skill).

- **Pull up a local version of your project and make changes in the browser:** This will help you identify your class and ID names. It will also help you better visualize what needs to be tweaked. This way, you can experiment with what some properties do. Seriously, sometimes I just experiment with properties until my layout does what I want it to do. Keep in mind that I always use W3 Schools to check that the solution I arrive is a sustainable/pragmatic choice before actually implementing it.
- Look at other websites that you admire and dissect their source code. While you are at, find what you like about their site and try to implement those features yourself.

## Step Four: Get Started With JavaScript

- Check out some great resources [here](http://rookie-dev.herokuapp.com/2015/08/05/resources.html)
- **Begin by learning about operators**: Operators are just ways to perform math or declare conditional statements.
- **Dive into the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript):** Here, you can find out how to traverse your DOM and discover cool new methods!
- **Look into jQuery**
- **Add some events using jQuery to your website.**
- Solve some algorithms - [(easy ones)](http://adriann.github.io/programming_problems.html)
- **THEN learn more advanced concepts**
- **find a project that you want to implement using JavaScript**

## Step Five: Learn Some Git Commands

Yes, you need to know about version control. This is your first project, meaning you are most likely the only contributor. Yet, if you picture yourself working in web development, you will be working on a team and they will be using some kind of version control. Version control is a way to prevent people from erasing new implementations accidentally or stepping on each other's toes during development. For Jekyll specific projects, you will really only need to know a few commands to test your site and make sure all of it's features work properly. If you want to know some more though, I often reference this list [here](https://gist.github.com/hofmannsven/6814451).

1. **cd (change directory):** You need to let your command line know what files you will be working with. To do this, you cd into the correct directory. The directory will be the name of folder all of your project files are in.
2. **jekyll serve:** start up your local server.
3. **git check out *branch name*:**  Switch to the branch you want to be working in.
4. **git branch:** Find out what branch you are currently in.
5. **git status:** See what files have been modified since your last commit.
6. **git diff:** See what changes you have made to so far.
6. **git add:** Add your changes to a new commit.
7. **git commit -m "*insert message here indicating what you are committing"*:** Commit your changes to your current branch.
8. **git push origin *branch name*:** Push your changes to a live environment.

Okay, now you have some great steps to focus on. If you are like me, these steps will be able to help A LOT. A common problem I had while learning was not knowing what to do next. I wanted to make this post to help others avoid this problem. Once you have all of these steps mastered, we can talk about overcoming imposter syndrome! **Thanks for reading guys!**
