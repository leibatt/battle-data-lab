---
title: "Battle Data Lab - Videos"
layout: gridlay
excerpt: "Battle Data Lab -- Videos"
sitemap: false
permalink: /videos/
---

# Videos

## Paper Presentations

{% assign number_printed = 0 %}
{% for video in site.data.video_presentation %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit><h4><b>{{ video.title }}</b></h4></pubtit>
  <p></p>
  <iframe width="420" height="290" src="{{ video.link }}"></iframe>
  <p>{{ video.presenter }}, <em>{{ video.date }}</em></p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}

</div>
{% endif %}
