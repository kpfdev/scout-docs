(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{350:function(e,t,a){e.exports=a.p+"assets/img/KPF_compute_properties.57ec2835.png"},351:function(e,t,a){e.exports=a.p+"assets/img/KPF_compute_unblock.c8455697.jpg"},352:function(e,t,a){e.exports=a.p+"assets/img/plug-in-manager-find-file-location.76b11662.png"},353:function(e,t,a){e.exports=a.p+"assets/img/obstructionVScontext.5bca09af.png"},354:function(e,t,a){e.exports=a.p+"assets/img/meshingSettings.aea59f49.png"},355:function(e,t,a){e.exports=a.p+"assets/img/upload_to_scout.5b9f9e98.png"},356:function(e,t,a){e.exports=a.p+"assets/img/context_to_scout.ef6de9c6.png"},357:function(e,t,a){e.exports=a.p+"assets/img/ConvertUnit.71148059.png"},385:function(e,t,a){"use strict";a.r(t);var o=a(42),s=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"kpf-compute-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#kpf-compute-plugin"}},[e._v("#")]),e._v(" KPF Compute Plugin")]),e._v(" "),o("p",[e._v("The KPF Compute plugin allows a user to run computational analysis on the cloud in Rhino 6.")]),e._v(" "),o("h2",{attrs:{id:"installation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),o("ol",[o("li",[e._v("Download the plugin file: "),o("em",[e._v("KPFComputePlugin.rhp")]),e._v(". (the latest release is "),o("a",{attrs:{href:"https://github.com/kpfdev/KPFComputePlugin/releases/tag/v0.1.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("v0.1.3"),o("OutboundLink")],1),e._v(")")]),e._v(" "),o("li",[o("em",[e._v("Right click")]),e._v(" on the the plugin and go to "),o("em",[e._v("Properties")]),e._v(" and check "),o("em",[e._v("Unblock")]),e._v(". This ensures the plugin will be accepted by your computer.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(350),alt:"img"}})]),e._v(" "),o("p",[o("img",{attrs:{src:a(351),alt:"img"}})]),e._v(" "),o("ol",{attrs:{start:"3"}},[o("li",[e._v("Close the "),o("em",[e._v("Properties")]),e._v(" window, and drag the plugin into Rhino. Double check the plugin is loaded by typing "),o("em",[e._v("PluginManager")]),e._v(" in the Rhino Command prompt. Scroll or search for "),o("strong",[e._v("KPFComputePlugin")]),e._v(" and make sure it is "),o("em",[e._v("enabled")]),e._v(".")]),e._v(" "),o("li",[e._v("Type "),o("em",[e._v("KPFComputePanel")]),e._v(" in the Rhino Command prompt, the panel should appear.")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("The default plugin location for Rhino plugins is "),o("code",[e._v("C:\\Users\\<user-name>\\AppData\\Roaming\\McNeel\\Rhinoceros\\6.0\\Plug-ins")]),o("br"),e._v("\nHowever, rhino will not be moving this .rhp file into there automatically. If you would like all your plug-ins in one place, move your plug-in file into this folder first before proceeding to stop 3."),o("br"),e._v("\nThere is also nothing wrong with keeping your plug-in file in the Downloads folder. It will be perfectly happy there.")])]),e._v(" "),o("h2",{attrs:{id:"update"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[e._v("#")]),e._v(" Update")]),e._v(" "),o("ol",[o("li",[e._v("Locate the old "),o("em",[e._v("KPFComputePlugin.rhp")]),e._v(" file. You can find it's location by using the "),o("em",[e._v("PluginManager")]),e._v(" command in Rhino. Scroll or search for "),o("strong",[e._v("KPFComputePlugin")]),e._v(" and click "),o("em",[e._v("details")]),e._v(" and click on the the "),o("em",[e._v("File Name")]),e._v(". This will take you directly to the folder where your "),o("em",[e._v("KPFComputePlugin.rhp")]),e._v(" file lives.")])]),e._v(" "),o("p",[o("img",{attrs:{src:a(352),alt:"img"}})]),e._v(" "),o("ol",{attrs:{start:"2"}},[o("li",[e._v("Close Rhino. Delete the old copy of "),o("em",[e._v("KPFComputePlugin.rhp")]),e._v(".")]),e._v(" "),o("li",[e._v("Now you can follow the install instructions above OR Download the new "),o("em",[e._v("KPFComputePlugin.rhp")]),e._v(" at the same location as the old one. "),o("em",[e._v("Right click")]),e._v(" on the the plugin and go to "),o("em",[e._v("Properties")]),e._v(" and check "),o("em",[e._v("Unblock")]),e._v(". Now you should be good to go (open rhino and type in "),o("strong",[e._v("KPFComputePlugin")]),e._v(" to see if the plug-in opens).")])]),e._v(" "),o("h2",{attrs:{id:"running-analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-analysis"}},[e._v("#")]),e._v(" Running Analysis")]),e._v(" "),o("p",[e._v("The Plugin pulls geometry data from user-specified layers for analysis. The names of the layers can be named anything, but must match what is entered into the "),o("em",[e._v("Analysis Settings")]),e._v(" page.")]),e._v(" "),o("h3",{attrs:{id:"opening-up-the-plugin"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#opening-up-the-plugin"}},[e._v("#")]),e._v(" Opening up the plugin")]),e._v(" "),o("p",[e._v("Type "),o("code",[e._v("KPFComputePanel")]),e._v(" in the Rhino Command prompt to open the panel. You can grab the panel and snap it to either the left or right side of the Rhino interface.")]),e._v(" "),o("p",[e._v("The plugin contains three pages:")]),e._v(" "),o("ul",[o("li",[o("em",[e._v("Select Analysis")])]),e._v(" "),o("li",[o("em",[e._v("Analysis Settings")])]),e._v(" "),o("li",[o("em",[e._v("Run Analysis")])])]),e._v(" "),o("h3",{attrs:{id:"prepping-the-rhino-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#prepping-the-rhino-file"}},[e._v("#")]),e._v(" Prepping the Rhino File")]),e._v(" "),o("h4",{attrs:{id:"_1-obstructions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-obstructions"}},[e._v("#")]),e._v(" 1. Obstructions")]),e._v(" "),o("p",[o("strong",[e._v("Obstructions")]),e._v(" are different from Context in that Obstructions are the context geometry that will cause "),o("strong",[e._v("meaningful obstructions of sunlight or views")]),e._v(" to the project site. Only include geometry that are NECCESSARY to your analysis."),o("br"),e._v(" "),o("strong",[e._v("Context")]),e._v(" is any geometry that is static in the scene for "),o("strong",[e._v("visualization")]),e._v(" purposes, such as adjacent buildings, trees, road geometry, curbs, water, or ground plane.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(353),alt:"img"}})]),e._v(" "),o("p",[e._v("Although both polysurfaces(breo) geometry and mesh geometry are accepted. We STRONGLY Recommend using a very simple meshes.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(354),alt:"img"}})]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("The larger the context model - the longer the analysis will take to process.\nMeshes are always smaller than polysurfaces or breps.")])]),e._v(" "),o("h4",{attrs:{id:"_2-building-geometry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-building-geometry"}},[e._v("#")]),e._v(" 2. Building Geometry")]),e._v(" "),o("p",[e._v("Building geometry is the geometry you want to analyze. The building geometry can be single or multiple buildings.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("make sure the building geometry are all "),o("strong",[e._v("Closed BREPS!")]),e._v("\nrefer to next section for more instructions on Modeling Guideline for Building")])]),e._v(" "),o("h4",{attrs:{id:"modeling-guideline-for-building-geometry"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#modeling-guideline-for-building-geometry"}},[e._v("#")]),e._v(" Modeling Guideline for Building Geometry:")]),e._v(" "),o("p",[e._v("Building geometries are "),o("strong",[e._v("required")]),e._v(" to be Close Poly-surfaces! or as grasshopper likes calling it: close breps.\nBuilding geometries also "),o("strong",[e._v("need to pass")]),e._v(" "),o("code",[e._v("BooleanUnion")]),e._v(" command in rhino with no errors.\nCurved surfaces are strongly "),o("strong",[e._v("not recommended")]),e._v(".\nBuildings cut into individual floors often fails "),o("code",[e._v("BooleanUnion")]),e._v(". They usually needs to be rebuilt with a bit of work. We provided some tips below:")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("good ways to rebuild geometry:")]),e._v(" "),o("ul",[o("li",[e._v("Use command "),o("code",[e._v("DupFaceBorder")]),e._v(" to get the top or bottom face border of your geometry, then re-extrude")]),e._v(" "),o("li",[e._v("when massing is cut into different floors, BooleanUnion often fails. Delete every floor but leave only one, and "),o("code",[e._v("Scale1D")]),e._v(" of that geometry.")]),e._v(" "),o("li",[e._v("sometimes the top/bottom face might not be perfect parallel to the C-plane. use "),o("code",[e._v("DupFaceBorder")]),e._v(" and then "),o("code",[e._v("ProjectToCPlane")]),e._v(" then re-extrude your geometry")]),e._v(" "),o("li",[e._v("Rebuild your curves with straight line segments using "),o("code",[e._v("Rebuild")]),e._v(" command in rhino and use a "),o("code",[e._v("Degree")]),e._v(" of "),o("code",[e._v("1")])]),e._v(" "),o("li",[e._v("After using "),o("code",[e._v("DupFaceBorder")]),e._v(", use "),o("code",[e._v("CurveBoolean")]),e._v(" to join regions of the curve that touches before re-extruding, sometimes "),o("code",[e._v("CurveBoolean")]),e._v(" is more reliable than "),o("code",[e._v("BooleanUnion")]),e._v(". This also will catch small inaccuracies in modeling that might cause boolean union to fail.")])])]),e._v(" "),o("h4",{attrs:{id:"how-to-name-rhino-layers"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-name-rhino-layers"}},[e._v("#")]),e._v(" How to Name Rhino Layers")]),e._v(" "),o("p",[e._v("This plugin uses "),o("em",[e._v("full paths")]),e._v(" to reference layers.")]),e._v(" "),o("p",[e._v("The full-path of a layer is all it's parent layer names concatenated with "),o("code",[e._v("::")]),e._v(" to its own name.")]),e._v(" "),o("p",[e._v('For example, the layer "Context Geometry" is the child of layer "3DSite", then the full path of layer "Context Geometry" is "3DSite::Context Geometry".')]),e._v(" "),o("h4",{attrs:{id:"_3-analysis-surface-s"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-analysis-surface-s"}},[e._v("#")]),e._v(" 3. Analysis Surface(s)")]),e._v(" "),o("p",[e._v("Put Analysis surfaces into its own layer (if you have any), use the command "),o("code",[e._v("dir")]),e._v(" in the Rhino command prompt to check if the normals are facing the correct direction.")]),e._v(" "),o("h3",{attrs:{id:"running-single-analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-single-analysis"}},[e._v("#")]),e._v(" Running Single Analysis")]),e._v(" "),o("h4",{attrs:{id:"_1-analysis-selection"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-analysis-selection"}},[e._v("#")]),e._v(" 1. Analysis Selection")]),e._v(" "),o("p",[e._v("Select the analysis you want to run from the "),o("em",[e._v("Select Analysis")]),e._v(" page by clicking the given checkboxes. Then clicking on the button "),o("em",[e._v("Go to Analysis Settings >>>")])]),e._v(" "),o("h4",{attrs:{id:"_2-analysis-settings"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-analysis-settings"}},[e._v("#")]),e._v(" 2. Analysis Settings")]),e._v(" "),o("p",[o("strong",[e._v("Double check the following:")])]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Context layer name matches your context layer full path*")])]),e._v(" "),o("li",[o("p",[e._v("Analysis tile size are reasonable, the smaller they are, the slower the analysis but more accurate the results.")])]),e._v(" "),o("li",[o("p",[e._v("Choose climate (if applicable)")])]),e._v(" "),o("li",[o("p",[e._v("Choose your analysis surface layers and your target surface layers (if applicable)")])])]),e._v(" "),o("p",[e._v("Click on button "),o("em",[e._v("Run Analysis >>>")]),e._v(" to go to next page.")]),e._v(" "),o("h4",{attrs:{id:"_3-run-analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-run-analysis"}},[e._v("#")]),e._v(" 3. Run Analysis")]),e._v(" "),o("p",[e._v("Type the layer name for the building geometry you want to read from, and additional building geometry if applicable (this second field will be included in the geometry but will not be used to construct analysis points). If you do not have a podium layer or additional buildings to add, leave the field with the default value "),o("code",[e._v("_")]),e._v(".")]),e._v(" "),o("p",[e._v("Click on Run xxx Analysis to run the given analysis.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Be patient and drink some ☕ while the analysis processes. Once the analysis is done, a analysis mesh should be returned as a sublayer in your building layer along with a numerical value in the "),o("em",[e._v("Run Analysis")]),e._v(" page.")])]),e._v(" "),o("h3",{attrs:{id:"running-multiple-analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#running-multiple-analysis"}},[e._v("#")]),e._v(" Running Multiple Analysis")]),e._v(" "),o("h4",{attrs:{id:"_1-analysis-selection-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-analysis-selection-2"}},[e._v("#")]),e._v(" 1. Analysis Selection")]),e._v(" "),o("p",[e._v('Select the analysis you want to run from the "Select Analysis" page by clicking on the given checkboxes.')]),e._v(" "),o("h4",{attrs:{id:"_2-analysis-settings-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-analysis-settings-2"}},[e._v("#")]),e._v(" 2. Analysis Settings")]),e._v(" "),o("p",[e._v("Each analysis has its own settings, i.e. Harmful/Useful radiation requires a climate to be selected and Sky Exposure requires a ground surface plane to be selected.")]),e._v(" "),o("h4",{attrs:{id:"_3-run-analysis-2"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-run-analysis-2"}},[e._v("#")]),e._v(" 3. Run Analysis")]),e._v(" "),o("p",[e._v("Click on button "),o("em",[e._v("Run All Analysis")]),e._v(" to let the plug-in run all the analysis you have selected")]),e._v(" "),o("p",[e._v("To look at each individual analysis result, go back to your rhino layers and turn on/off the analysis. A analysis summary is also shown as text in one of the child layers in the building geometry layer.")]),e._v(" "),o("h3",{attrs:{id:"upload-to-scout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-to-scout"}},[e._v("#")]),e._v(" Upload to Scout")]),e._v(" "),o("p",[e._v("The plugin can be used to iteratively run analysis, but can also be used to upload the analysis, geometry, and context data to an interactive web interface named "),o("a",{attrs:{href:"https://scout.build/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Scout"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("p",[e._v("Click on button "),o("em",[e._v("Select/Create Scout Design Space")]),e._v(", this will bring up a web form to select or create a project in Scout. If you are creating a new project, you must give it a name and select the analysis that this design space will include. If you are selecting an already existing design space, it will dictate what analysis will be available. Once you are done selecting, go back to rhino and the plug-in should have already brought you to the "),o("em",[e._v("Analysis Settings")]),e._v(" page.")]),e._v(" "),o("div",{staticClass:"custom-block warning"},[o("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),o("p",[e._v("Once you create a project with the given analysis, you cannot go back. However, you can always create another project with different analysis.")])]),e._v(" "),o("h4",{attrs:{id:"run-either-single-analysis-or-multiple"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#run-either-single-analysis-or-multiple"}},[e._v("#")]),e._v(" Run either Single Analysis or Multiple")]),e._v(" "),o("p",[e._v("check the checkbox for "),o("em",[e._v("upload to scout")]),e._v(" and click on the button "),o("em",[e._v("Run All Analysis")]),e._v(". This will run all the analysis for you and upload the results automatically to Scout. (note that it will only upload to scout when clicking Run All Analysis and thus will not upload individual analysis)")]),e._v(" "),o("p",[o("img",{attrs:{src:a(355),alt:"img"}})]),e._v(" "),o("p",[e._v("If this is the first time you are uploading to scout in this rhino session, the scout web-page will open automatically once the upload is complete. If it is not the first time, a dialog box will show-up prompting you to re-fresh the already open scout web-page.")]),e._v(" "),o("p",[e._v("To upload more models, simply make-sure the name of the building layer is unique to this design space. It will add more models to your design space. If you want to replace / update an older design, just upload a new model with the same name.")]),e._v(" "),o("h4",{attrs:{id:"upload-context-to-scout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#upload-context-to-scout"}},[e._v("#")]),e._v(" Upload Context To Scout")]),e._v(" "),o("p",[e._v("After uploading your first model, your scout space will be populated with the Obstruction mesh as its context. If you would like to have a more complex context for visualization, you can upload those through a different button.")]),e._v(" "),o("p",[e._v('Scroll to the bottom of the "Run Analysis" Panel and you should see the section shown in image below.')]),e._v(" "),o("p",[e._v("Mesh all of your context geometry and put different colored meshes on different layers. Color each layer with your desired color, and now put all these layers with geometry "),o("em",[e._v("under")]),e._v(" a parent layer. Type in the "),o("em",[e._v("parent layer name")]),e._v(" in the text box and click "),o("em",[e._v("Upload Context To Scout")]),e._v(" button. This will pull all the meshes from the sub-layers of the "),o("em",[e._v("parent layer")]),e._v(" and color them with their layer color and upload to scout.")]),e._v(" "),o("p",[o("img",{attrs:{src:a(356),alt:"img"}})]),e._v(" "),o("p",[e._v("Refresh scout and you should see your updated context. (note that meshes that are invisible from behind, if you have missing mesh faces, just flip them in Rhino and re-upload)")]),e._v(" "),o("p",[e._v("You can re-upload until you are happy with it and it will just re-write the previous uploaded context.")]),e._v(" "),o("h2",{attrs:{id:"available-analysis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#available-analysis"}},[e._v("#")]),e._v(" Available Analysis")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://rhino.kpfui.dev/api/definition/Daylight_DirectSun_RH.gh",target:"_blank",rel:"noopener noreferrer"}},[e._v("Direct Sunlight Hours"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"http://kpfintranet/DAM/#!/?page=~2F~2Fkpfintranet~2FDAM~2F_content~2F_data~2FTools~2FSolar_Analysis~2FUseful_vs_Harmful_Radiation_Map~2Freadme.md&technical=true&developer=false&private=false",target:"_blank",rel:"noopener noreferrer"}},[e._v("Harmful/Useful Radiation"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"http://kpfintranet/DAM/#!/?page=~2F~2Fkpfintranet~2FDAM~2F_content~2F_data~2FTools~2FView_Analysis~2FMultiple_Landmarks_View~2Freadme.md&technical=true&developer=false&private=false",target:"_blank",rel:"noopener noreferrer"}},[e._v("Multiple Landmarks View"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"http://kpfintranet/DAM/#!/?page=~2F~2Fkpfintranet~2FDAM~2F_content~2F_data~2FTools~2FDaylight~2FSky_Exposure~2Freadme.md&technical=true&developer=false&private=false",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sky Exposure"),o("OutboundLink")],1)]),e._v(" "),o("li",[o("a",{attrs:{href:"http://kpfintranet/DAM/#!/?page=~2F~2Fkpfintranet~2FDAM~2F_content~2F_data~2FTools~2FView_Analysis~2FUnobstructed_View~2Freadme.md&technical=true&developer=false&private=false",target:"_blank",rel:"noopener noreferrer"}},[e._v("Unobstructed View"),o("OutboundLink")],1)])]),e._v(" "),o("h2",{attrs:{id:"common-issues"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#common-issues"}},[e._v("#")]),e._v(" Common Issues")]),e._v(" "),o("h3",{attrs:{id:"checking-surface-normals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#checking-surface-normals"}},[e._v("#")]),e._v(" Checking Surface Normals")]),e._v(" "),o("p",[e._v("If meshes seem incorrect in Scout, check the surface normals of the context geometry by using the command "),o("code",[e._v("dir")]),e._v(". All normals should be facing outwards.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Change the color of "),o("em",[e._v("Backface visibility")]),e._v(" by going to file > properties > View > shaded. Change the "),o("em",[e._v("Backface Settings")]),e._v(" color to visualize which faces are facing the wrong way. All faces should be facing outward from the buildings.")])]),e._v(" "),o("h3",{attrs:{id:"analysis-mesh-returns-but-with-no-result-checking-model-scale"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#analysis-mesh-returns-but-with-no-result-checking-model-scale"}},[e._v("#")]),e._v(" Analysis mesh returns but with no result: Checking Model Scale")]),e._v(" "),o("p",[e._v("Use the "),o("code",[e._v("Distance")]),e._v(" command in Rhino to make sure your model is the right size.\nIf your model unit is off, the analysis will be running on a completely incorrect scale.")]),e._v(" "),o("p",[e._v('To prevent this error:\nmake sure to click "Yes" and re-size your model when converting your model unit to Feet or Meters')]),e._v(" "),o("p",[o("img",{attrs:{src:a(357),alt:"img"}})]),e._v(" "),o("h3",{attrs:{id:"analysis-mesh-returns-but-colors-are-messed-up"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#analysis-mesh-returns-but-colors-are-messed-up"}},[e._v("#")]),e._v(" Analysis mesh returns but colors are messed up")]),e._v(" "),o("p",[e._v("This might be caused by having curved geometry as input building breps. The root cause of this is still unknown and we are investigating.")]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Use command "),o("code",[e._v("DupFaceBorder")]),e._v(" to get the top or bottom face border of your curved geometry, then\nRebuild your curves with straight line segments using "),o("code",[e._v("Rebuild")]),e._v(" command in rhino and use a "),o("code",[e._v("Degree")]),e._v(" of "),o("code",[e._v("1")]),e._v("\nRe-Extrude your poly-line")])]),e._v(" "),o("h3",{attrs:{id:"team-test"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#team-test"}},[e._v("#")]),e._v(" Team Test")]),e._v(" "),o("ol",[o("li",[e._v("Install KPFComputePlugin "),o("a",{attrs:{href:"https://kpfdev.github.io/scout-docs/documentation/KPF-compute-plugin.html#installation",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions"),o("OutboundLink")],1)]),e._v(" "),o("li",[e._v("open "),o("em",[e._v("190924_One Vanderbilt Anlaysis Model.3dm")])]),e._v(" "),o("li",[e._v("type "),o("em",[e._v("KPFComputePlugin")]),e._v(" to open panel - you can snap the panel to any side of the Rhino Interface.")]),e._v(" "),o("li",[e._v("The version of the panel should be "),o("code",[e._v("V 0.1.3(loadbalancer test)")])]),e._v(" "),o("li",[e._v("Click on "),o("em",[e._v("I'm using Scout!")])]),e._v(" "),o("li",[e._v("type in "),o("em",[e._v("0002-0-NYC")]),e._v(" - should show up in the autocomplete")]),e._v(" "),o("li",[e._v("click on the blue button "),o("em",[e._v("Select from existing projects")]),e._v(" and select "),o("em",[e._v("ui-team-lb-test")])]),e._v(" "),o("li",[e._v("click on green button "),o("em",[e._v("use existing project")])]),e._v(" "),o("li",[e._v("Go back to Rhino")]),e._v(" "),o("li",[e._v("leave all analysis settings as default")]),e._v(" "),o("li",[e._v("click on "),o("em",[e._v("run analysis")])]),e._v(" "),o("li",[e._v("hide the "),o("em",[e._v("Tower")]),e._v(" layer")]),e._v(" "),o("li",[e._v("design your own building on the site")]),e._v(" "),o("li",[e._v("check "),o("em",[e._v("upload all to scout")])]),e._v(" "),o("li",[e._v("Run each analysis for your building independently or click on "),o("em",[e._v("Run All Analysis")]),e._v(" to run them all and upload directly to Scout")])]),e._v(" "),o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("Your design will only upload to Scout when you click on "),o("em",[e._v("Run All Analysis")]),e._v(". Which allows you to iterate on your design scheme without uploading to the team Scout.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);