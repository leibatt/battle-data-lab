## README

# Basic Information
* This is the repo containing bad lab's github website.
* You can find the hosted website <a href="battle-data-lab.cs.umd.edu">here</a>.
* Any questions or concerns about the website content? Please contact Deepthi > draghun1@cs.umd.edu

# So you've joined the Bad Lab...
* Add your information to *about.md*. 
Here's the basic html format you should follow: 

```html
<div class="about-items">
    <img class="about-item-img" 
        src="{{site.baseurl}}/public/MY_IMAGE.png"
        alt="ABOUT MY IMAGE"/>
    <div class="about-item-des">
        <h2>MY NAME</h2>
        THE STORY OF ME! Duis faucibus sem vel ante malesuada posuere. Donec nisl odio, consectetur eu malesuada id, lacinia volutpat mauris. Duis vitae sapien elit. Suspendisse nec erat tempus, posuere urna at, pretium diam. Cras vitae sem at ipsum tempus varius. Cras est turpis, viverra vel mauris in, fermentum hendrerit est. Nam orci nibh, bibendum id augue vitae, ullamcorper euismod lectus. Maecenas varius dolor eu aliquet euismod. Proin id rhoncus nulla. Donec sed condimentum tellus. Nullam vehicula magna nec luctus rutrum.
        <br/><p class="contact-item">Email: me(@)cs.umd.edu</p>
    </div>
</div>
```

* Add your project information (if it's not already there) to *projects.md*.
Here's the basic html format you should follow: 

```html
<div class="project-item">
	<div class="project-item-des">
		<a href="{{site.baseurl}}/projects/MY_PROJECT_DEEP_DESCRIPTION"><h2>MY_PROJECT_TITLE</h2></a>
		MY PROJECT ABSTRACT
	</div>
	<img class="project-item-img" src="{{site.baseurl}}/public/MY_PROJECT_IMG.png" alt="MY IMG ALT"/>
	<div class="caption"> MY PROJECT IMAGE CAPTION </div>
</div>
```

* You don't have to test these pages locally if you're making small changes. 
GitHub will build your changes and render the changes to our domain. 

* If you want to test your changes locally, you'll need a Windows machine, and you'll need to download Jekyll. 
Use 'jekyll serve' to view the pages redered to "localhost:4000".

# System architecture
* _ sass: This folder contains all the styles being used by our html/md pages.  
* _layouts: This folder contains all the default layouts being leveraged by our html/md pages.
When a page is specified as being "default" or "page", the html framework defined in this folder is applied
before the content is rendered. 
* Projects: This folder contains all the extensive project information. Students are free to link these pages to 
descriptions of the respective projects found in projects.md.
* Public: This folder contains all the images used for the project- including student pictures and pictures used for projects. 
* index.html: This is the root of the whole website. 
* _includes: This is the folder which contains head.html. head.html is rendered before index.html. All the dependencies
are applied in head. 
* projects/about.md: These pages contain the descriptions of people and project of Bad Lab. 

This should get you started! 
