---
layout: page
---

  <div class="main-content">
  <div class="post-wrapper">

    <div class="search">
      <i class="fa fa-search"></i>
      <input type="text" id="search-text" name="search">
    </div>

    <div id="no-results">
      <p>Sorry, I haven't blogged about that yet. Try again?</p>
    </div>

  <ul class="post-list">
    {% for post in paginator.posts %}
      <li class="article">
        <!-- <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span> -->
        <h3 itemscope itemtype="http://schema.org/Article">
          <a itemprop="url" class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
          <a href="{{ post.url | prepend: site.baseurl }}">
            <img itemprop="image" src="{{ site.baseurl }}/assets/{{ post.image }}" class="index-img">
          </a>
        </h3>
        <p class="excerpt">{{ post.excerpt }}</p>
      </li>
    {% endfor %}

  </ul>

{% if paginator.total_pages > 1 %}
<div class="pagination col-md-12 text-center">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | append: "#article-content" | replace: '//', '/' }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}

  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ paginator.previous_page_path | prepend: site.baseurl | append: "#article-content" | replace: '//', '/' }}">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | prepend: site.baseurl | append: "#article-content" | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | append: "#article-content" |  replace: '//', '/' }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
  </div>
{% endif %}
</div>
</div>
