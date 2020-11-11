---
title: "Battle Data Lab - Projects"
layout: gridlay
excerpt: "Battle Data Lab -- Projects"
sitemap: false
permalink: /projects/
---

# Projects

## Ongoing Projects

{% for proj in site.data.current_projects %}

<div class="well">
  <pubtit><h4><b>{{ proj.name }}</b></h4></pubtit>
  {% if proj.photo_ldscp == 1 %}
  <img src="{{ site.url }}{{ site.baseurl }}/images/projpic/{{ proj.photo }}" class="img-responsive" width="45%" style="float: left" />
  {% endif %}
  {% if proj.photo_ldscp == 0 %}
  <img src="{{ site.url }}{{ site.baseurl }}/images/projpic/{{ proj.photo }}" class="img-responsive" width="30%" style="float: left" />
  {% endif %}
  <p><em>{{ proj.term }}</em></p>
  <p><b>Members:</b> <em>{{ proj.members }}</em></p>
  {% if proj.past_members_exist == 1 %}
  <p><b>Past Members:</b> <em>{{ proj.past_members }}</em></p>
  {% endif %}
  {% for appx in proj.appx %}
  <span><a href="{{ appx[1] }}" target="_blank">{{ appx[0] }}</a></span>
  {% endfor %}
  <p>{{ proj.description }}</p>
</div>

{% endfor %}

## Past Projects

{% for proj in site.data.past_projects %}

<div class="well">
  <pubtit><h4><b>{{ proj.name }}</b></h4></pubtit>
  {% if proj.photo_ldscp == 1 %}
  <img src="{{ site.url }}{{ site.baseurl }}/images/projpic/{{ proj.photo }}" class="img-responsive" width="45%" style="float: left" />
  {% endif %}
  {% if proj.photo_ldscp == 0 %}
  <img src="{{ site.url }}{{ site.baseurl }}/images/projpic/{{ proj.photo }}" class="img-responsive" width="30%" style="float: left" />
  {% endif %}
  <p><em>{{ proj.term }}</em></p>
  <p><b>Members:</b> <em>{{ proj.members }}</em></p>
  {% for appx in proj.appx %}
  <span><a href="{{ appx[1] }}" target="_blank">{{ appx[0] }}</a></span>
  {% endfor %}
  <p>{{ proj.description }}</p>
</div>

{% endfor %}
