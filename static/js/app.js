// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    let metadata = data.metadata;
    // Filter the metadata for the object with the desired sample number
    let metadata_filtered = metadata.filter(each => parseInt(each.id) === parseInt(sample))[0]; //[0] to access first element in array

    // Use d3 to select the panel with id of `#sample-metadata`
    let sample_metadata = d3.select('#sample-metadata');

    // Use `.html("") to clear any existing metadata
    sample_metadata.html('');
    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(metadata_filtered).forEach(([key, value]) => {
      sample_metadata.append('p').text(key + ": " + value);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    let samples = data.samples;

    // Filter the samples for the object with the desired sample number
    let samples_filtered = samples.filter(each => parseInt(each.id) === parseInt(sample))[0]; //[0] to access first element in array
    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = samples_filtered.otu_ids;
    let otu_labels = samples_filtered.otu_labels;
    let sample_values = samples_filtered.sample_values;
    // Build a Bubble Chart

    //trace
    let trace1 = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,   // Size of bubbles based on sample_values
        color: otu_ids,        // Color of bubbles based on otu_ids
        colorscale: 'Earth'    // Color scale for the bubbles
      }
    }

    // Create the layout for the chart
    let layout = {
      title: 'Bacteria Cultures Per Sample',
      xaxis: { title: 'OTU IDs' },
      yaxis: { title: 'Number of Bacteria' }
    };

    // Combine trace into a data array
    let plot_data = [trace1];

    // Render the Bubble Chart
    Plotly.newPlot('bubble', plot_data, layout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    let names = data.names;

    // Use d3 to select the dropdown with id of `#selDataset`
    let selDataset_element = d3.select('#selDataset');

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.
    names.forEach(name => {
      selDataset_element.append('option').text(name).property('value', name);
    });

    // Get the first sample from the list
    let first_child_text = selDataset_element.property('value');

    // Build charts and metadata panel with the first sample

    buildCharts(first_child_text);
    buildMetadata(first_child_text);




  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected
  if (parseInt(newSample) > 0) {  //this prevents error triggered by change event from initial population of dynamic option elements
    buildMetadata(newSample);
  }
}

//event listener for change in select element
d3.select('#selDataset').on('change', optionChanged(this.value));

// Initialize the dashboard
init();