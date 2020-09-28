# Introduction

Scout is an advanced computational web visualization analytics platform to explore iterative design spaces. Where a visitor can simulate 1000(s) of different design along with performance analysis to understand trade-off decisions and gain insight into the design process.



## Folder Structure

Each project consists of the following files:

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

Each project will always have the following files:

- `data.csv`
- `settings.json`
- `context.json` 
- and various geometry files named `#_option.json`, where `#` denotes the iteration number or design option. 
