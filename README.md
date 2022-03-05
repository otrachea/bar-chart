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
> `barSpacing` is an int value that represents in pixels the spacing between bars. Default value is 10px.
> 
> `barLabelColor`is a string or array of strings representing the hex code of the color of the bar's label color. Default value is `#000000`.
> 
> `xAxisName`is a string representing the title of the X axis. No default value.
> 
> `yAxisName` is a string representin the title of the Y axis. No default value.
> 
> `title` is a string representing the title of the bar chart. If `null` title is 'Title' if the key is missing then no title.
> 
> `titleFontSize`is a string representing the size of the font of the title. The string should includes the units. Default value is font size of `h1`.
> 
> `titleFontColor` is a string representing the hex code of the color for the title. Default value is value for `h1`.
> 
> `graphBG`is a string representing the hex code the color for the background of the bar chart. Default value is white with a 2px solid black border. If a value is given then there is no border for the background.

### Known issues / bugs
### To be implemented features
