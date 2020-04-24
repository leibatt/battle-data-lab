---
layout: page
title: Our Projects
---
<div class="project-items">

    <div class="project-item">
        <div class="project-item-des">
            <h2 class="project-name">Lodestar</h2>
            Keeping abreast of current trends, technologies, and best practices in statistics, visualization, and data analysis is becoming
            increasingly difficult even for professional data scientists, and is a hopeless endeavor for domain experts lacking time and training.
            In this paper, we propose Lodestar, an interactive visualization sandbox that allows users to perform visual data analysis simply by
            selecting from a list of recommendations. Choosing a recommendation adds the corresponding Python code to the notebook and
            executes it, thus generating new output. The recommendation engine is inspired by autocomplete mechanisms, where a partial query is
            used to show suggestions for how to finish it. In our implementation, we derive our recommendations from a directed graph of analysis
            states: one manually curated from online data science tutorials, another by automatically analyzing the Python code from a corpus of
            approximately 6,000 Jupyter notebooks on data science. We evaluated Lodestar through a two-phase evaluation sequence: a formative
            study guiding our next set of improvements to the tool, followed by a summative study assessing its utility for novice data scientists.
        </div>
        <img class="project-item-img" src="{{site.baseurl}}/public/lodestarintro.PNG" alt="the lodestar system"/>
        <div class="caption"> Figure: Lodestar interface. The top panel (A) provides a data selection menu. (B) and (D) are recommendation panels (DESCRIPTION is selected for this notebook) combining suggested analysis steps from various sources (called advisors). (C) and (E) are analysis cells, each with multiple tabs: “Analysis Results” gives charts or tables, “Output Dataframe” and “Code Script” shows the outputs and current code block, and “What’s this analysis?” gives a brief description of the analyses. Outputs, code scripts, and charts can be exported into files by clicking on the associated buttons.

        </div>
    </div>

</div>

<div class="project-items">

    <div class="project-item">
        <div class="project-item-des">
            <h2 class="project-name">User Behaviour Modelling during Examination of Massive Medical Images</h2>
            Digital pathology is replacing pathological examinations performed using microscope, due to its advantage of faster examination and better collaboration among pathologists all over the world. It makes use of super-resolution whole slide images of tissues, which are maintained on a centralized server and accessed by pathologists over the internet, using a client computer (e.g., a laptop). The huge memory footprint of these images makes it difficult for pathologists to navigate and interact with them, as these images cannot be fit entirely in the main memory of the client system. A more effective approach would be to develop an image viewer that automatically and efficiently pre-fetches only the necessary parts of each image from the server, on demand. Furthermore, the system should perform this transfer of data over the network with low latency, so as to have a smooth, lag-free examination experience. We aim to predict the behaviour of pathologists during an ongoing examination session and pre-fetch the required data by training deep learning models on the interaction history of pathologists, and the tissue image itself. Using this approach, we can automatically fetch what pathologists will look for in advance, which would help in reducing perceived system delays and thus make the image browsing experience appear more interactive and smooth.
        </div>
        <img class="project-item-img" src="{{site.baseurl}}/public/openSeadragonUI.PNG" alt="image viewer"/>
        <div class="caption"> Figure: OpenSeadragon image viewer used in the experiments. The image viewer logs details about the part of the image visible in the viewer (called the viewport). Based on these details, we extract the interactions that were performed by the physicians, and the visible viewport itself. Our prediction models are then trained on this data to predict where the physician might want to go next.

        </div>
    </div>

</div>

<div class="project-items">

    <div class="project-item">
        <div class="project-item-des">
            <h2 class="project-name">Code Code Evolution</h2>
            The advent of open source computational notebooks has changed the landscape for analysts looking to document
            visualizations, code, and annotate various stages of the analysis process under one platform. The use of GitHub in conjunction
            with computational notebooks provides a unique opportunity to study the data analysis process over time. We present a threepart
            quantitative study that examines process-based data science workflows in the context of Jupyter notebooks. The first study
            demonstrates how to identify correlations between a user’s data analysis behavior and observable GitHub interactions. The second
            study establishes a methodology by which data science workflows can be characterized within notebooks: in particular, exploration and
            explanation. In the last study, we apply this methodology to investigate shifts in workflows across time. All three parts examine the
            evolving role of visualization from exploration and analysis to communication and documentation. We use these observations as an
            opportunity to encourage a design/re-design of data science and visualization tools to better support process-based workflows. Our
            data and code are available online: https://osf.io/9q4wp/?view_only=61e6f58d29194742a0aaed328afdea4d.
        </div>
    </div>

</div>

<div class="project-items">
    <div class="project-item">
        <div class="project-item-des">
            <h2 class="project-name">Beagle</h2>
            Data visualizations are used to help people understand and interpret data in efficient ways. Data Driven Documents (D3) is used to create data visualizations. The issue is many people have difficulty coding in D3. These people turn to Stack Overflow, Reddit, and GitHub for online support. Our research mainly contains two parts: data scraping and data analysis. We are using beautifulsoup and selenium to scrape data, and then we conduct qualitative analysis.

        </div>
    </div>

</div>

<div class="project-items">
    <div class="project-item">
        <div class="project-item-des">
            <h2 class="project-name">Crossfilter Benchmark</h2>
            The crossfilter benchmark project aims to create a benchmark to allow database engine builders to est their systems against some typical interactions. More specifically, we want to use real world user history log gathered from the crossfilter study to evaluate the performaces of databases with IDEBench. IDEBench is a benchmark assessing the database workloads created from interactive data exploration. In this project, we are testing several databases, including Monetdb, Postgresql, Sqlite, Hyper, Duckdb and Verdictdb.

        </div>
    </div>

</div>
