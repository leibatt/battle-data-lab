---
title: "Battle Data Lab - Publications"
layout: gridlay
excerpt: "Battle Data Lab -- Publications."
sitemap: false
permalink: /publications/
---

# Publications

<!-- ## Group highlights

(For a full list see [below](#full-list) or go to [Google Scholar](https://scholar.google.com/citations?hl=en&user=9ghHK7sAAAAJ))

{% assign number_printed = 0 %}
{% for publi in site.data.publist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if publi.highlight == 1 %}

{% if even_odd == 0 %}

<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit>{{ publi.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/pubpic/{{ publi.image }}" class="img-responsive" width="33%" style="float: left" />
  <p>{{ publi.description }}</p>
  <p><em>{{ publi.authors }}</em></p>
  <p><strong><a href="{{ publi.link.url }}">{{ publi.link.display }}</a></strong></p>
  <p class="text-danger"><strong> {{ publi.news1 }}</strong></p>
  <p> {{ publi.news2 }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}

</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}

</div>
{% endif %}

<p> &nbsp; </p> -->

## Full List

### Conference and Journal Papers

{% for publi in site.data.pub_conf_jrnl %}

<p>
<b>{{ publi.title }}</b> <br />
{{ publi.authors }}<br />
<em>{{ publi.where }}</em><br />
<a href="{{ publi.pdf.url }}" target="_blank">{{ publi.pdf.display }}</a>
<span>&nbsp;|&nbsp;</span><a href="{{ site.url }}{{ site.baseurl }}/bibtex/{{ publi.bib.url }}" target="_blank">{{ publi.bib.display }}</a>
{% for appx in publi.appx %}
<span>&nbsp;|&nbsp;</span><a href="{{ appx[1] }}" target="_blank">{{ appx[0] }}</a>
{% endfor %}
</p>
{% endfor %}

### Workshop Papers

{% for publi in site.data.pub_wksh %}

<p>
<b>{{ publi.title }}</b> <br />
{{ publi.authors }}<br />
<em>{{ publi.where }}</em><br />
<a href="{{ publi.pdf.url }}" target="_blank">{{ publi.pdf.display }}</a>
<span>&nbsp;|&nbsp;</span><a href="{{ site.url }}{{ site.baseurl }}/bibtex/{{ publi.bib.url }}" target="_blank">{{ publi.bib.display }}</a>
</p>
{% endfor %}
