function getyMax(data, options) {
  let max = ('yMax' in options) ? options.yMax : Math.max(...data);
  return max;
}

function setBarColor(options) {
  ('barColor' in options) ?
    $('.bar').css('background-color', `#${options.barColor}`) :
    $('.bar').css('background-color', `#C297B8`);
}

function setBarLabelPosition(options) {
  if ('barLabelPosition' in options) {
    if (options.barLabelPosition === 'center') {
      $('.bar-label').css('top', `calc(50% - 0.5em)`);
    } else if (options.barLabelPosition === 'bottom') {
      $('.bar-label').css('top', `calc(100% - 1em)`);
    } else { // options.barLabelPosition === 'top'
      $('.bar-label').css('top', 0);
    }
  }
}

function setBarLabelColor(options) {
  ('barLabelColor' in options) ?
    $('.bar-label').css('color', `#${options.barLabelColor}`) :
    $('.bar-label').css('color', `#000000`);
}

function setBarSpacing(options) {
  ('barSpacing' in options) ?
    $('.bar').css('margin-right', `${options.barSpacing}px`) :
    $('.bar').css('margin-right', `10px`);
}
  
function drawBarChart(data, options, element) {

  let dataPoints = [];

  // SETS Y AXIS MAX VALUE
  let max = getyMax(data, options);

  // DRAWS ACTUAL BARS
  data.forEach((dataPoint, index) => {
    if ('xLabels' in options) {
      dataPoints.push({ 'label': options.xLabels[index], 'value': dataPoint });
    } else {
      dataPoints.push({ 'label': dataPoint, 'value': dataPoint });
    }
    element.append($(`<div><span class="bar-label">${dataPoints[index].value}</span></div>`)
      .addClass('bar')
      .css('height', `calc(600px * (${dataPoint} / ${max}))`));
  });
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




  // SETS CHART TITLE


  // SETS CHART TITLE FONT SIZE


  // SETS CHART TITLE FONT COLOUR
}

drawBarChart([1, 2, 1.85, 4, 7], {
  'yMax': 7,
  'xLabels': ['a', 'b', 'c', 'd', 'e'],
  'barColor': 'DE89BE',
  'barLabelPosition': 'center',
  'barSpacing': 50,
  // 'barLabelColor': '40434E'
}, $('div'));
// drawBarChart([1, 2, 0.5, 4, 7], {}, $('div'));
