---
sidebarDepth: 3
---


# Data Structure

Each project consists of a context.json, data.csv, settings.json, and a series geometry and analysis models. Each of these files are discussed below with examples.

## Folder Structure

```
<project-name>/
-- context.json
-- data.csv
-- settings.json
-- models/
---- 0_option.json
---- 0_analysis.json
---- 1_option.json
---- 1_analysis.json
---- ...
```

Each file type is described below



## Settings.json

The settings.json is a file saved in [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) with settings for Scout to properly setup the visualization. The file is setup into two main objects, `inputInfo` and `metricInfo`. Each object contains a series of key/value pairs which act for settings for inputs and metric respectively.

The settings.json has the following structure.

```JSON
{
  "inputInfo":{
    "in_inputName": {
      "labels": ["0","1","2"],
      "label": "Label"
    },
  },
  "metricInfo":{
    "metricName":{
      "analysisMesh": true,
      "colorRamp": ["#ffffff", "#ffffff", "#ffffff"],
      "description": "I am a description, look at me!",
      "label": "Label",
      "materialType": "MeshBasicMaterial",
      "maxBound": 0,
      "minBound": 1,
      "ticks": ["none", "few" , "some", "most"],
      "units":"",
      "zeroScale": false
    },
  }
}

```

### inputInfo

| key name | type   | description                                 | notes |
|----------|--------|---------------------------------------------|-------|
| labels   | array  | list of labels for input sliders as strings |       |
| label    | string | pretty label of input                       |       |


### metricInfo

| key           | type    | description                                                | notes                                             |
|---------------|---------|------------------------------------------------------------|---------------------------------------------------|
| analysis_mesh | boolean | whether the metric has an analysis mesh associated with it |                                                   |
| colorRamp     | array   | list of hex color values for analysis mesh                 |                                                   |
| description   | string  | description of analysis                                    |                                                   |
| label         | string  | pretty label of analysis mesh                              |                                                   |
| materialType  | string  | Type of material to be rendered                            | default is MeshBasicMaterial which should be used |
| maxBound      | number  | maximum bound of analysis mesh value range                 |                                                   |
| minBound      | number  | minimum bound of analysis mesh value range                 |                                                   |
| ticks         | array   | list of ticks of analysis range                            | ["none", "few","some","most"]                     |
| units         | string  | units of analysis                                          |                                                   |
| zeroScale     | boolean | whether metric should include or exclude 0's from color gradient |                                             |


## Data.csv

The file contains the iteration number, inputs, and outputs from the design space.

- The headers of the file follow snake case which writes compound words or phrases separated  by underscore `_` .
- The header for the iteration column should be `iteration`.
- Inputs should start with `in_` and then followed by the name of the given input. 
- Outputs should start with `out_` and then followed by the name of the given output.
  - the names of outputs excluding the prefix `out_` should exactly match the naming used for a analysis mesh. 
    - example if the output in the data.csv reads `out_unobstructed_views_to_empire_state_building` then the corresponding analysis mesh should read `#_unobstructed_views_to_empire_state_building`. Where `#` corresponds to the given iteration value of the analysis mesh and the following text exactly matches the header name in the data.csv.

Example data.csv for an iterative design space. 

| iteration | in_location | in_rotation | out_views | out_unobstructed_view | 
|-----------| ------------|-------------|-----------|-----------------------|
| 0 | 20 | 40 | 40 | 90 |
| 1 | 40 | 60 | 50 | 100 |