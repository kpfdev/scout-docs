# KPF Compute Plugin refactor details

Refactor split the plug-in into 9 modules (projects): 
1. KPFComputePlugin
2. KPFComputePlugin.Analysis
3. KPFComputePlugin.AnalysisTemplates
4. KPFComputePlugin.ComputeInputConstructor
5. KPFComputePlugin.Core
6. KPFComputePlugin.Extensions
7. KPFComputePlugin.RhinoCompute
8. KPFComputePlugin.Scout
9. KPFComputePlugin.UI

Each of these sections contains it's own responsibilities and depend on each-other. 
The responsibility of each section is described below: 

## 1. KPFComputePlugin
This is the main rhino plug-in object. It handles the plug-in instance, plug-in main function for application entry, and rhino command that triggers the plug-in to run. 

## 2. KPFComputePlugin.Analysis
This project is responsible for 
- gathering input for a Compute Analysis
  - it knows which input each analysis needs from the AnalysisTemplate object described in section 3
- running the analysis
- bake output mesh to rhino layer
- parse result numbers

## 3. KPFComputePlugin.AnalysisTemplates
This project defines the JSON format for defining inputs to a grasshopper scripts
- `AllAnalysisTemplates.cs` contains the global settings and each analysis as a `AnalysisTemplate` that are available. 
- `AnalysisTemplate.cs` is for each analysis, it contains information of the grasshopper file name / location, and the specific inputs special to this analysis
- `GrasshopperInputTemplate.cs` defines each individual grasshopper inputs. Both the global settings in `AllAnalysisTemplates` and the individual specific settings in `AnalysisTemplate` are of this type. It holds information regarding the type of input expected (brep, mesh, number, string), the text prompt displayed on the plugin, the default value, and the grasshopper input name it should be matched to. 
- `GrasshopperInputTypes` is a enum that defines all the types of input the plug-in can handle. Currently it handles the following: 
    - Bool
    - Brep
    - Mesh
    - Surface
    - ClosedBrep (plug-in will run BooleanUnion on this to check if the breps are closed)
    - Point
    - Number
    - NumberUnit (this will be converted to model unit from meters)
    - NumberList (numbers separated by ",")
    - Text
    - TextList (text separated by ",")
    - Select (a drop down menu, the input will be passed to grasshopper by the index)

## 4. KPFComputePlugin.ComputeInputConstructor
This project constructs the grasshopper tree input objects from information given in the `GrasshopperInputTemplate`
When it is a geometry from layer input, it will pull that geometry from rhino layer. 
When it is other kinds of input, it will convert those input into it's primitive types (string, double, bool) from the inputs in the plug-in UI
Then all inputs will be serialized into a `GrasshopperObject` as dictated by the Rhino.Compute. 

## 5. KPFComputePlugin.Core
Core of plugin. Currently doesn't have much, mostly handles web request functions. 

## 6. KPFComputePlugin.Extensions
Static extension methods for: 
- Color (convert to hex string)
- Geometry (brep solid checking)
- Layer (grab geometry from layers, write to layers, change layer property)
- Numeric (parse doubles, double lists)
- String (parse string)


The layer section can be seriously refactored. 

## 7. KPFComputePlugin.RhinoCompute
Functions from Mcneel and other helper functions to call Rhino Compute
Some minor refactor is possible. 

## 8. Scout
Handles all scout related functionalities 
- start listener to listen for scout basket from https://rhino.kpfui.dev/
- uploads analysis to scout
- uploads context meshs to scout

## 9. KPFComputePlugin.UI
User Interface of the plug in, currently uses ETO forms. 
Will / should be replaced with WPF in the future. Thus will be completely re-written.  
