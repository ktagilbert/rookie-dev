---
layout: page
title: Blog
permalink: /blog/
---
<div class="blog-page">

<div class="page-header">
  <h1 class="header-1">Technical Marketing Blog</h1>
</div>


<div class="container">
<div class="search">
  <i class="fa fa-search"></i>
  <input type="text" id="search-text" name="search">
</div>
</div>

<div id="no-results">
<p>Sorry, there are no results for that search. Try again?</p>
</div>

<div class="container blog-page-articles">
<ul class="post-list">
  {% for post in site.posts %}
    <li class="article">
      <h3 itemscope itemtype="http://schema.org/Article">

      <a itemprop="url" class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      <a href="{{ post.url | prepend: site.baseurl }}">
          <img class="col-md-4" itemprop="image" src="{{ site.baseurl }}/assets/{{ post.image }}" class="index-img" alt="Velocity Marketing Partners Digital Marketing Blog"/>
      </a>
      </h3>
      <p class="col-md-8">{{ post.excerpt }}</p>
      <span class="post-meta pull-right">{{ post.date | date: "%b %-d, %Y" }}</span>
    </li>
    </span>
  {% endfor %}
</ul>
</div>
</div>
