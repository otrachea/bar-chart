# Bar Chart Generator Project
## About
This project was created as my submission for the Lighthouse Labs prep module stretch project. The project can generate a regular or stacked bar charts and can be customized accordingly. 
## Usage
The function takes in 3 parameters `drawBarChart(data, options, element)`. `data` is an array or nested array of ints that represents the datapoints given. If a nested array, each nested array represents one bar in the chart where the first value in the nested array is the top stacked bar and so forth. `options` is an object that contains all the possible ways to customize the chart. `element` is the element in the DOM where the graph will reside.

## Customizing bar charts
If a key is missing in the `options` parameter, a default value/style is used for the given chart. The `options` parameter has the following keys:

> `yMax` is the max value on the Y axis. Values can be `null` or any `int`. Default value is the tallest bar.
>
> `xLabels` is an array of strings that are the labels for each bar. Default does not label bars
> 
> `barColor`can be a string or array of strings representing the hex code of the color for the bars. If stacked bars are not given individual colours then all stacked bars will be the same color.
> 
> `barLabelPosition`is string that is either `top`, `bottom` or `center` with `top` being the defalut position. If stacked bars then has to be array of strings of the given options.
> 
> `barSpacing`
> 
> `barLabelColor`
> 
> `xAxisName`
> 
> `yAxisName`
> 
> `title`
> 
> `titleFontSize`
> 
> `titleFontColor`
> 
> `graphBG`

### Known issues / bugs
### To be implemented features
