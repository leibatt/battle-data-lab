---
layout: page
title: Our Projects
---
<div class="project-items">
    <div class="project-item">
        <div class="project-item-des">
            <h2 class="project-name">Lodestar</h2>
            Keeping abreast of current trends, technologies, and best practices in statistics, visualization, and data analysis is becomingincreasingly difficult even for professional data scientists, and is a hopeless endeavor for domain experts lacking time and trainingin these methods.  In this paper, we propose Lodestar, an interactive visualization notebook that allows the user to perform visualdata analysis by selecting from a list of recommendations. Selecting a recommendation adds the corresponding Python code to thenotebook and executes it, thus generating new output; no programming expertise is required on behalf of the user. The recommendationmechanism is inspired byautocompletemechanisms, where a partial query is used to show suggestions for how to finish the query. Inour implementation, we derive our recommendations from a directed graph of analysis states: one manually curated from online datascience tutorials, another by automatically analyzing the Python code from a corpus of approximately 6,000 Jupyter notebooks on datascience. We demonstrate the Lodestar approach through a set of examples involving statistics, machine learning, and visualization.
        </div>
        <img class="project-item-img" src="{{site.baseurl}}/public/lodestarintro.PNG" alt="the lodestar system"/>
        <div class="caption"> Figure: Lodestar interface. The top panel (A) provides a data selection menu. (B) and (D) are recommendation panels (DESCRIPTION is selected for this notebook) combining suggested analysis steps from various sources (called advisors). (C) and (E) are analysis cells, each with multiple tabs: “Analysis Results” gives charts or tables, “Output Dataframe” and “Code Script” shows the outputs and current code block, and “What’s this analysis?” gives a brief description of the analyses. Outputs, code scripts, and charts can be exported into files by clicking on the associated buttons.
        </div>
    </div>
</div>

<div class="project-items">
    <div class="project-item">
        <div class="project-item-des">
            <h2 class="project-name">Notebook Evolution</h2>
Computational notebooks are a popular medium for data analysts to record the methods and observations of the data analysis process. The increasing number of notebooks being added to GitHub not only show the popularity of this platform but also provide for a great resource to observe the trends in Data Analysis. Leveraging the snapshot nature of GitHub repositories can help us understand the analysis process across time. Given what we know about the data analysis process, how well do the tools of today perform in aiding analysts? We scrape all of the public notebooks from GitHub and observe: the trends in API usage and data analysts behavior with computation notebooks across time. We use this data to study whether popular data analysis tools support these behaviors. We use this as a means to evaluate the efficacy of those tools.
        </div>
    </div>
</div>
