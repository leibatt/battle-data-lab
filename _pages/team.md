---
title: "Battle Data Lab - Team"
layout: gridlay
excerpt: "Battle Data Lab: Team members"
sitemap: false
permalink: /team/
---

# Lab Members

**We are looking for new members to join the team** [(see openings)]({{ site.url }}{{ site.baseurl }}/faq) **!**

Jump to [faculty](#faculty), [PhD students](#phd-students), [MSc students](#msc-students), [BSc students](#bsc-students), [alumni](#alumni), and [interns](#interns).

## Faculty

{% for member in site.data.faculty %}

<div class="clearfix teamdiv">
  <img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>Email: <{{ member.email }}><br>Website: <{{ member.website }}></i>
  <ul style="overflow: hidden">

  <li> {{ member.descr }} </li>

  </ul>
</div>

{% endfor %}

## PhD Students

{% for member in site.data.phd_students %}

<div class="clearfix teamdiv">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>Email: <{{ member.email }}><br>Website: <{{ member.website }}></i>
  <ul style="overflow: hidden">
  <li> {{ member.descr }} </li>

  </ul>
</div>

{% endfor %}

## MSc Students

{% for member in site.data.msc_students %}

<div class="clearfix teamdiv">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>Email: <{{ member.email }}><br>Website: <{{ member.website }}></i>
  <ul style="overflow: hidden">
  <li> {{ member.descr }} </li>

  </ul>
</div>

{% endfor %}

## BSc Students

{% for member in site.data.bsc_students %}

<div class="clearfix teamdiv">
<img src="{{ site.url }}{{ site.baseurl }}/images/teampic/{{ member.photo }}" class="img-responsive" width="15%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.info }}<br>Email: <{{ member.email }}><br>Website: <{{ member.website }}></i>
  <ul style="overflow: hidden">
  <li> {{ member.descr }} </li>

  </ul>
</div>

{% endfor %}

## Alumni

<!-- bsc alumni -->

<h4>BSc Students</h4>
{% assign number_printed = 0 %}
{% for member in site.data.alumni_bsc %}

{% assign even_odd = number_printed | modulo: 3 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-4 clearfix">
  {{ member.name }} <br>
  <i>{{ member.info }}</i>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 2 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 3 %}
{% if even_odd != 0 %}

</div>
{% endif %}

<!-- master alumni -->

<h4>MSc Students</h4>
{% assign number_printed = 0 %}
{% for member in site.data.alumni_msc %}

{% assign even_odd = number_printed | modulo: 3 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-4 clearfix">
  {{ member.name }} <br>
  <i>{{ member.info }}</i>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 2 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 3 %}
{% if even_odd != 0 %}

</div>
{% endif %}

<!-- phd alumni -->

<!-- <h4>PhD Students</h4>
{% assign number_printed = 0 %}
{% for member in site.data.alumni_phd %}

{% assign even_odd = number_printed | modulo: 3 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-4 clearfix">
  {{ member.name }} <br>
  <i>{{ member.info }}</i>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 2 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 3 %}
{% if even_odd != 0 %}

</div>
{% endif %} -->

<!-- interns -->

## Interns

{% assign number_printed = 0 %}
{% for member in site.data.interns %}

{% assign even_odd = number_printed | modulo: 3 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-4 clearfix">
  {{ member.name }}
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 2 %}

</div>
{% endif %}

{% endfor %}

{% assign even_odd = number_printed | modulo: 3 %}
{% if even_odd != 0 %}

</div>
{% endif %}
