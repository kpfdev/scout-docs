---
sidebarDepth: 3
---
# KPF Compute Plugin

The KPF Compute plugin allows a user to run computational analysis on the cloud in Rhino 6.

## Installation

1. Download the plugin.
2. *Right click* on the the plugin and go to *Properties* and check *Unblock*. This ensures the plugin will be accepted by your computer.

![img](./images/tutorial/KPF_compute_properties.png)

![img](./images/tutorial/KPF_compute_unblock.jpg)

3. Close the *Properties* window, and drag the plugin into Rhino. Double check the plugin is loaded by typing *PluginManager* in the Rhino Command prompt. Scroll or search for **KPFComputePlugin** and make sure it is *enabled*.
4. Type *KPFComputePanel* in the Rhino Command prompt, the panel should appear.

:::tip
The default plugin location for Rhino plugins is `C:\Users\<user-name>\AppData\Roaming\McNeel\Rhinoceros\6.0\Plug-ins`
:::

## Running Analysis

The Plugin pulls geometry data from user-specified layers for analysis. The names of the layers can be named anything, but must match what is entered into the *Analysis Settings* page.

### Opening up the plugin 

Type `KPFComputePanel` in the Rhino Command prompt to open the panel. You can grab the panel and snap it to either the left or right side of the Rhino interface.

The plugin contains three pages:  

- *Select Analysis*
- *Analysis Settings*
- *Run Analysis*

### Prepping the Rhino File

#### 1. Obstructions

Obstructions are different from Context in that Obstructions are the context geometry that will cause meaningful obstructions of sunlight or views to the project site. 
Context is any geometry that is static in the scene, such as adjacent buildings or ground plane. It is best to include the buildings next to your site that are necessary for the analysis.

Although both polysurfaces(breo) geometry and mesh geometry are accepted. We STRONGLY Recommend using a very simple mesh

:::warning
Only use buildings that are immediately next to your site and will create meaningful obstructions. 
The larger the context model - the longer the analysis will take to process.
:::

#### 2. Building Geometry

Building geometry is the geometry you want to analyze. The building geometry can be single or multiple buildings.

:::tip
make sure the building geometry are all **Closed BREPS!**
refer to next section for more instructions on Modeling Guideline for Building
:::

#### Modeling Guideline for Building Geometry: 
Building geometries are **required** to be Close Poly-surfaces! or as grasshopper likes calling it: close breps. 
Building geometries also **need to pass** `BooleanUnion` command in rhino with no errors. 
Curved surfaces are strongly **not recommended**. 
Buildings cut into individual floors often fails `BooleanUnion`. They usually needs to be rebuilt with a bit of work. We provided some tips below: 

::: tip
good ways to rebuild geometry: 
- Use command `DupFaceBorder` to get the top or bottom face border of your geometry, then re-extrude
- when massing is cut into different floors, BooleanUnion often fails. Delete every floor but leave only one, and `Scale1D` of that geometry. 
- sometimes the top/bottom face might not be perfect parallel to the C-plane. use `DupFaceBorder` and then `ProjectToCPlane` then re-extrude your geometry
- Rebuild your curves with straight line segments using `Rebuild` command in rhino and use a `Degree` of `1`
- After using `DupFaceBorder`, use `CurveBoolean` to join regions of the curve that touches before re-extruding, sometimes `CurveBoolean` is more reliable than `BooleanUnion`. This also will catch small inaccuracies in modeling that might cause boolean union to fail. 
:::


#### How to Name Rhino Layers

This plugin uses *full paths* to reference layers.  

The full-path of a layer is all it's parent layer names concatenated with `::` to its own name.

For example, the layer "Context Geometry" is the child of layer "3DSite", then the full path of layer "Context Geometry" is "3DSite::Context Geometry".

#### 3. Analysis Surface(s)

Put Analysis surfaces into its own layer (if you have any), use the command `dir` in the Rhino command prompt to check if the normals are facing the correct direction.

### Running Single Analysis

#### 1. Analysis Selection

Select the analysis you want to run from the *Select Analysis* page by clicking the given checkboxes. Then clicking on the button *Go to Analysis Settings >>>*

#### 2. Analysis Settings

**Double check the following:**

- Context layer name matches your context layer full path* 

- Analysis tile size are reasonable, the smaller they are, the slower the analysis but more accurate the results.

- Choose climate (if applicable)

- Choose your analysis surface layers and your target surface layers (if applicable)

Click on button *Run Analysis >>>* to go to next page.

#### 3. Run Analysis

Type the layer name for the building geometry you want to read from, and additional building geometry if applicable (this second field will be included in the geometry but will not be used to construct analysis points). If you do not have a podium layer or additional buildings to add, leave the field with the default value `_`.

Click on Run xxx Analysis to run the given analysis.

:::tip
Be patient and drink some ☕ while the analysis processes. Once the analysis is done, a analysis mesh should be returned as a sublayer in your building layer along with a numerical value in the *Run Analysis* page.
:::

### Running Multiple Analysis

#### 1. Analysis Selection

Select the analysis you want to run from the "Select Analysis" page by clicking on the given checkboxes. 

#### 2. Analysis Settings

Each analysis has its own settings, i.e. Harmful/Useful radiation requires a climate to be selected and Sky Exposure requires a ground surface plane to be selected.

#### 3. Run Analysis

Click on button *Run All Analysis* to let the plug-in run all the analysis you have selected 

To look at each individual analysis result, go back to your rhino layers and turn on/off the analysis. A analysis summary is also shown as text in one of the child layers in the building geometry layer.

### Upload to Scout

The plugin can be used to iteratively run analysis, but can also be used to upload the analysis, geometry, and context data to an interactive web interface named [Scout](https://scout.build/).

Click on button *Select/Create Scout Design Space*, this will bring up a web form to select or create a project in Scout. If you are creating a new project, you must give it a name and select the analysis that this design space will include. If you are selecting an already existing design space, it will dictate what analysis will be available. Once you are done selecting, go back to rhino and the plug-in should have already brought you to the *Analysis Settings* page.

:::warning
Once you create a project with the given analysis, you cannot go back. However, you can always create another project with different analysis.
:::

#### Run either Single Analysis or Multiple

check the checkbox for *upload to scout* and click on the button *Run All Analysis*. This will run all the analysis for you and upload the results automatically to Scout.  

If this is the first time you are uploading to scout in this rhino session, the scout web-page will open automatically once the upload is complete. If it is not the first time, a dialog box will show-up prompting you to re-fresh the already open scout web-page.  

To upload more models, simply make-sure the name of the building layer is unique to this design space. It will add more models to your design space. If you want to replace / update an older design, just upload a new model with the same name

## Available Analysis

- [Direct Sunlight Hours](https://rhino.kpfui.dev/api/definition/Daylight_DirectSun_RH.gh)
- [Harmful/Useful Radiation](http://kpfintranet/DAM/#!/?page=~2F~2Fkpfintranet~2FDAM~2F_content~2F_data~2FTools~2FSolar_Analysis~2FUseful_vs_Harmful_Radiation_Map~2Freadme.md&technical=true&developer=false&private=false)
- [Multiple Landmarks View](http://kpfintranet/DAM/#!/?page=~2F~2Fkpfintranet~2FDAM~2F_content~2F_data~2FTools~2FView_Analysis~2FMultiple_Landmarks_View~2Freadme.md&technical=true&developer=false&private=false)
- [Sky Exposure](http://kpfintranet/DAM/#!/?page=~2F~2Fkpfintranet~2FDAM~2F_content~2F_data~2FTools~2FDaylight~2FSky_Exposure~2Freadme.md&technical=true&developer=false&private=false)
- [Unobstructed View](http://kpfintranet/DAM/#!/?page=~2F~2Fkpfintranet~2FDAM~2F_content~2F_data~2FTools~2FView_Analysis~2FUnobstructed_View~2Freadme.md&technical=true&developer=false&private=false)

## Common Issues

### Checking Surface Normals

If meshes seem incorrect in Scout, check the surface normals of the context geometry by using the command `dir`. All normals should be facing outwards. 

::: tip
Change the color of *Backface visibility* by going to file > properties > View > shaded. Change the *Backface Settings* color to visualize which faces are facing the wrong way. All faces should be facing outward from the buildings. 
:::

### Analysis mesh returns but with no result: Checking Model Scale

Use the `Distance` command in Rhino to make sure your model is the right size. 
If your model unit is off, the analysis will be running on a completely incorrect scale. 

To prevent this error: 
make sure to click "Yes" and re-size your model when converting your model unit to Feet or Meters
![img](./images/computePlugin/ConvertUnit.png)

### Analysis mesh returns but colors are messed up

This might be caused by having curved geometry as input building breps. The root cause of this is still unknown and we are investigating. 

::: tip
Use command `DupFaceBorder` to get the top or bottom face border of your curved geometry, then
Rebuild your curves with straight line segments using `Rebuild` command in rhino and use a `Degree` of `1`
Re-Extrude your poly-line
:::
