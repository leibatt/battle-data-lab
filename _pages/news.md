---
title: "News"
layout: textlay
excerpt: "Battle Data at University of Maryland."
sitemap: false
permalink: /news/
---

# News

{% for article in site.data.news %}

<p>{{ article.date }} <br>
<em>{{ article.headline }}</em></p>
{% endfor %}
