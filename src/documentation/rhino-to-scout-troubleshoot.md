---
sidebarDepth: 3
---

# Export Rhino to Scout TroubleShoot

::: tip
## Check list

### Before Opening Gh File:
- update rhino to latest version
- update triceratops to latest version
- check if computational model has all CLOSED Brep geometry

### Before Working on File:
- check all triceratops components are present
- check if folders scout upload and scout upload / .temp and scout upload / models folders were created

### Before each Run of entire simulation space:
- clear scout upload / .temp  and scout upload / models folders of old file
- check changing the iteration slider changes computational model geometry (if not, the inputs are not hooked up corrected with computational model).
- check if any output number is > 1,000,000. if it is, divide by 1,000,000 before exporting the number (gh will write them in scientific notation and that will not be read by scout as a number)
- check if all materials’ opacity are NOT 0

:::

## Fix Missing TRICERATOPS Components
The diagram below notes all the triceratops components that were used in the example file, including those that were inside clusters. 
If the version of grasshopper was behind that of TRICERATOPS it will not load correctly even after updating grasshopper to the correct version. 
Here denotes the correct correction
- light blue box means opening up a cluster
    - you can open up a cluster by double clicking on the "taped up box" icon in the center of it
    - you can leave a cluster by going to the upper left corner of your canvas and click on the "opened box" and choose "save and close" 
- dark blue box means zooming in

![img](./images/triceratops_instances.png)