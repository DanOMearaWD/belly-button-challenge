# Belly Button Biodiversity Dashboard

## Background
In this assignment, I built an interactive dashboard to explore the [**Belly Button Biodiversity**](https://robdunnlab.com/projects/belly-button-biodiversity/) dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs) were present in more than 70% of people, while the rest were relatively rare.

## Project Objective
The goal of this project was to create an interactive web dashboard that displays the following information:
- A **bar chart** showing the top 10 OTUs found in a sample.
- A **bubble chart** displaying the distribution of samples across different OTUs.
- A **metadata panel** displaying an individual’s demographic information.
- The ability to update all charts and metadata when a new sample is selected from a dropdown menu.

---

## Files

The following files were provided to help get started:

- `index.html` - The HTML structure for the dashboard.
- `samples.json` - Contains the sample data for the OTUs and metadata.
- `static/js/app.js` - Contains the JavaScript code for the dashboard.

---

## Summary of Operations

### 1. **Bar Chart**
- Created a **horizontal bar chart** that displays the top 10 OTUs found in an individual sample.
- Used `sample_values` as the **bar chart values**.
- Used `otu_ids` as the **bar chart labels**.
- Used `otu_labels` as the **hover text**.

### 2. **Bubble Chart**
- Created a **bubble chart** that displays each sample.
- Used `otu_ids` for the **x values**.
- Used `sample_values` for the **y values**.
- Used `sample_values` for the **marker size**.
- Used `otu_ids` for the **marker colors**.
- Used `otu_labels` for the **text values**.

### 3. **Metadata Panel**
- Displayed the sample's metadata, such as an individual's demographic information.
- Looped through each key-value pair from the `metadata` object and created a text string.
- Appended this information to the `#sample-metadata` panel.

### 4. **Update All Plots**
- Updated all the plots (Bar and Bubble charts) and the metadata panel when a new sample is selected from the dropdown menu.

### 5. **Deployment**
- Deployed the dashboard to **GitHub Pages** to host the static page.
- The link to the deployed app and GitHub repository can be found below.

---

## GitHub Page

You can view the deployed app at the following link:

[**Belly Button Biodiversity Dashboard**](https://danomearawd.github.io/belly-button-challenge/)

---

## Technologies Used
- **D3.js** for data manipulation and visualization.
- **Plotly.js** for creating interactive charts.
- **GitHub Pages** for hosting the static website.

