# Export Rhino to Scout

This is the workflow of running a example-arbitrary-computational-model in grasshopper and **simultaneously** exporting **inputs**, **outputs**, and **settings** to files scout can read. These exported files will then be **uploaded** to scout through our [uploader](https://scoutbeta.kpfui.dev/). 

Here is a [example](https://scoutbeta.kpfui.dev/?project=Dice) of the end result after following this tutorial. 

## Prerequisite

1. Rhino 6 with grasshopper installed 
2. [TRICERATOPS](https://www.food4rhino.com/app/triceratops) plug-in for grasshopper (by Amelia Harvey)

## Tutorial

### Download Examples Files
TODO: these links don't work right now!!! 

#### files to work with
[Rhino]()

[Grasshopper]()

#### example exported files
[settings.json]()

[data.csv]()

[0_option.json]()

[0_volume.json]()

<!-- <a href="files/ScoutDemo_CompDesign.3dm" download>Rhino File</a> -->

### Step 0. Open Files

Open Rhino and Grasshopper file and make sure no plug-in is missing. 
You should see something like this: 
![img](./images/tutorial/start_screen.png)

#### Grasshopper Color Code
Different colors were used to denote different meanings in the grasshopper file. 
![img](./images/tutorial/color_code.png)

* *pink* indicates input required from the user (thus needed to be changed)
* *white* are notes for you to read
* *bright* green indicate "actions" required from the user, it might be a button to be clicked or a slider to be moved
* *grey* and black are components that shouldn't be changed, the darker the color the less we recommend changing 
* *dark green* means if you made a copy of a new group, you should connect the new group to the components circled in *dark green*


### Step 1. Computational Model

Take a look at the Computational Model we generated and understand that 
all the **inputs** for this model are **cross-referenced** so they can each be controlled by a slider.  
There are 2 types of **outputs** for each analysis:  
  1. a **numerical number** indicating the performance of this iteration as a whole  
  1. a **colored analysis grid**, the analysis grid requires:   
      * a list of exploded individual meshes  
      * a list of values that will be used to color the meshes  

### Step 2. Decare Input and Output Names

In the 2 *pink* text panels, type in the name of all of your inputs and outputs respectively.   
* The names that are used here are only for your use to construct files and won't show-up in Scout so you can use shortened names  
* make sure there are no empty lines
* note the index of each of the input and output, those will be referenced later on in the file. 

![img](./images/tutorial/2.png)

### Step 3. Set All Inputs

For each input: 
1. Set input Index *(upper left pink panel)* = the current input you want to set's **index** in the text panel you edited in Step 2 
1. the inputs that are used for your computational model *(lower left pink group)*
    * these can be any type that make up inputs for your computational model, the script will automatically convert them into indexes when generating the data.csv
    * these can be ordered arbitrarily, the order shows up here will be the order it will be displayed on the slider from left to right
1. the title of this slider in scout *(upper right pink panel)*
1. the text tick marks of this slider in scout *(lower right pink panel)*
    * make sure there are exactly a tick for each input increment
    * the order of the tick will be displayed on the slider from left to right

![img](./images/tutorial/3zoom.png)
![img](./images/tutorial/3scout.png)




![img](./images/tutorial/3.png)
