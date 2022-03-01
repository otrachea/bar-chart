function getyMax(data, options) {
  let max;
  ('yMax' in options && options.yMax !== null) ?
    max = options.yMax :
    max = Math.max(...data);
  
  // let max = ('yMax' in options) ? (options.yMax) : Math.max(...data);
  return max;
}

function setBarColor(options) {
  ('barColor' in options && options.barColor !== null) ?
    $('.bar').css('background-color', `#${options.barColor}`) :
    $('.bar').css('background-color', `#C297B8`);
}

function setBarLabelPosition(options) {
  if ('barLabelPosition' in options && options.barLabelPosition !== null) {
    if (options.barLabelPosition === 'center') {
      $('.bar-label').css('top', `calc(50% - 0.5em)`);
    } else if (options.barLabelPosition === 'bottom') {
      $('.bar-label').css('top', `calc(100% - 1.5em)`);
    } else { // options.barLabelPosition === 'top'
      $('.bar-label').css('top', '0.5em');
    }
  } else {
    
    $('.bar-label').css('top', '0.5em');
  }
}

function setBarLabelColor(options) {
  ('barLabelColor' in options && options.barLabelColor !== null) ?
    $('.bar-label').css('color', `#${options.barLabelColor}`) :
    $('.bar-label').css('color', `#000000`);
}

function setBarSpacing(options) {
  if ('barSpacing' in options && options.barSpacing !== null) {
    $('.bar').css('margin-left', `${options.barSpacing}px`);
    $('.bar').last().css('margin-right', `${options.barSpacing}px`);
  } else {
    $('.bar').css('margin-left', `10px`);
    $('.bar').last().css('margin-right', '10px');
  }
}

function setAxesNames(options) {
  if ('yAxisName' in options && options.yAxisName !== null) {
    $(`<div class='y-axis-label'><p>${options.yAxisName}</p></div>`).insertBefore(".graph-container");
  }
  if ('xAxisName' in options && options.xAxisName !== null) {
    $(`<div class='x-axis-label'><p>${options.xAxisName}</p></div>`).insertBefore(".graph-container");
  }
}

function setTitleFontSize(options) {
  if ('titleFontSize' in options && options.titleFontSize !== null) {
    $('.title > h1').css('font-size', options.titleFontSize);
  }
}

function setTitleFontColor(options) {
  if ('titleFontColor' in options && options.titleFontColor !== null) {
    $('.title > h1').css('color', `#${options.titleFontColor}`);
  }
}

function setTitle(options) {
  if ('title' in options && options.title !== null) {
    $(`<div class='title'><h1>${options.title}</h1></div>`).insertBefore(".y-axis-label");
  } else if (options.title === null) {
    $(`<div class='title'><h1>Title</h1></div>`).insertBefore(".y-axis-label");
  } else {
    $(`<div class='title'></div>`).insertBefore(".y-axis-label");
  }
  setTitleFontSize(options);
  setTitleFontColor(options);
}

function drawMarkers(options, max) {
  $(`<div class='markers-container'></div>`).insertBefore('.graph-container');
  let temp;
  for (let i = 4; i >= 0; i--) {
    $('.markers-container').append(`<div class='marker'>${max * (i / 4)}</div>`);
    $(`.marker:nth-child(${5 - i})`).css('margin-right', '0.5em');
  }
}

function drawBarChart(data, options, element) {

  let dataPoints = [];

  // SETS Y AXIS MAX VALUE
  let max = getyMax(data, options);

  element.append("<div class='graph-container'></div>");

  // DRAWS ACTUAL BARS
  data.forEach((dataPoint, index) => {
    if ('xLabels' in options) {
      dataPoints.push({ 'label': options.xLabels[index], 'value': dataPoint });
    } else {
      dataPoints.push({ 'label': dataPoint, 'value': dataPoint });
    }
    $('.graph-container').append($(`<div><span class="bar-label">${dataPoints[index].value}</span></div>`)
      .addClass('bar')
      .css('height', `calc(600px * (${dataPoint} / ${max}))`));
  });

  // SETS WIDTH OF BAR
  $('.bar').css('width', `calc(400px / ${data.length})`);

  // SETS COLOUR OF BAR
  setBarColor(options);

  // SETS BAR VALUE LABEL POSITION
  setBarLabelPosition(options);

  // SETS BAR VALUE LABEL COLOUR
  setBarLabelColor(options);

  // SETS BAR SPACING
  setBarSpacing(options);

  // SET BAR CHART AXES NAMES
  setAxesNames(options);

  // SETS CHART TITLE + FONT SIZE + FONT COLOUR
  setTitle(options);

  // SETS Y AXIS MARKERS
  drawMarkers(options, max);
}

drawBarChart([16, 2, 1.85, 4, 7, 1, 16], {
  'yMax': null,
  'xLabels': ['a', 'b', 'c', 'd', 'e'],
  'barColor': 'DE89BE',
  'barLabelPosition': 'center',
  'barSpacing': 20,
  'barLabelColor': '40434E',
  'xAxisName': 'X axis',
  'yAxisName': 'Y axis humina humina aaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
  'title': 'Fuck this graph',
  'titleFontSize': '30px',
  'titleFontColor': null, //344055
}, $('#container1'));
drawBarChart([1, 2, 0.5, 4, 7], {}, $('#container2'));
