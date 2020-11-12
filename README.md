## Basic Information

- This is the repo containing bad lab's github website.
- You can find the hosted website <a href="battle-data-lab.cs.umd.edu">here</a>.
- Changes will be shown only when you modify the "gh-pages" branch.
- Any questions or concerns about the website content? Please contact Zehua > zzeng@cs.umd.edu

### How to run it locally?

- Have Jekyll installed in your pc
- Go to battle-data-lab folder in CMD, and then run

```
jekyll serve
```

- visit http://localhost:4000/ to check out the website

## Website Framework

### Folders

- \_data > all text content
- images > all media content
- \_includes > head, header, footer, and news
- \_pages > home, team, projects, publications, videos, faq, 404
- bibtex > bibtex for each publication

### Add a new page

- Add a new md in the \_pages folder
- Change header.html under \_includes to add the new page to the navigation bar

### Add information to the Team Page

- Find the correct file in \_data folder to add / change information
  - Faculty > faculty.yml
  - Current students > bsc_students.yml, msc_students.yml, phd_students.yml
  - Alumni > alumni_bsc.yml, alumni_msc.yml, alumni_phd.yml
  - Interns > interns.yml
- Follow the same structure of the content already there to add / modify
- Put pictures under images/teampic folder

### Add your project to the Project Page

- Find the correct file in \_data folder to add / change information
  - Ongoing project > current_projects.yml
  - Past project > past_projects.yml
- Follow the same structure of the content already there to add / modify
- Put pictures under images/projpic folder

### Others

- Add / change news > \_data/news.yml
- Add / change videos > \_data/video_presentation.yml
- Add / change publications > \_data/pub_conf_jrnl.yml or \_data/pub_wksh.yml
