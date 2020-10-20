---
sidebarDepth: 3
---


# Data Structure

Each project consists of a context.json, data.csv, settings.json, and a series geometry and analysis models. Each of these files are discussed below with examples.

## Folder Structure

```
<project-name>/
| context.json
| data.csv
| settings.json
| models/
|-- 0_option.json
|-- 0_analysis.json
|-- 1_option.json
|-- 1_analysis.json
|-- ...
```


## Settings.json 

<a href="https://github.com/kpfdev/scout-docs/blob/master/src/documentation/files/settings.json" download target="_blank">example</a>

The settings.json is a file saved in [JSON format](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) with settings for Scout to properly setup the visualization. The file is setup into two main objects, `inputInfo` and `metricInfo`. Each object contains a series of key/value pairs which act as settings for inputs and metrics respectively.

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

| key | type   | description                                 | notes |
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


:::tip

There are numerous free tools to check a JSON for errors - such as [Prettify JSON](https://marketplace.visualstudio.com/items?itemName=mohsen1.prettify-json) available in [VSCode](https://code.visualstudio.com/)
:::

## Data.csv 

<a href="https://github.com/kpfdev/scout-docs/blob/master/src/documentation/files/data.csv" download target="_blank">example</a>

The data.csv is a square matrix with rows representing each design iteration and columns the various properties of the design iteration. The first column should always be labeled `iteration` which is a unique string identifier for each given iteration row. 

The headers of the file follow snake case which writes compound words or phrases separated  by underscore `_` . 

| key | type | description | example |
| ----| -----|-------------|-------|
| iteration | int | unique identifer of the iteration row | 0 |
| in_ | float, int | any input should be prefixed with `in_` | `in_rotation` |  
| out_ | float, int | any output should be prefixed with `out_` | `out_views` |

:::tip
If the header in the data.csv reads `out_unobstructed_views_to_empire_state_building` then the corresponding analysis mesh should read `#_unobstructed_views_to_empire_state_building`. Where `#` corresponds to the given iteration value of the analysis mesh and the following text exactly matches the header name in the data.csv.
:::

test