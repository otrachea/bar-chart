function drawBarChart(data, options, element) {

  let dataPoints = [];

  // SETS Y AXIS MAX VALUE
  let max;
  ('yMax' in options) ? max = options.yMax : max = Math.max(...data);

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
  if ('barColor' in options) {
    $('.bar').css('background-color', `#${options.barColor}`)
  } else {
    $('.bar').css('background-color', `#C297B8`);
  }

  // SETS BAR VALUE LABEL POSITION
  if ('barLabelPosition' in options) {
    if (options.barLabelPosition === 'center') {
      $('.bar-label').css('top', `calc(50% - 0.5em)`);
    } else if (options.barLabelPosition === 'bottom') {
      $('.bar-label').css('top', `calc(100% - 1em)`);
    } else { // options.barLabelPosition === 'top'
      $('.bar-label').css('top', 0);
    }
  }

  // SETS BAR VALUE LABEL COLOUR


  // SETS BAR SPACING


  // SET BAR CHART AXES NAMES




  // SETS CHART TITLE


  // SETS CHART TITLE FONT SIZE


  // SETS CHART TITLE FONT COLOUR
}

drawBarChart([1, 2, 1.85, 4, 7], {
  'yMax': 7,
  'xLabels': ['a', 'b', 'c', 'd', 'e'], 'barLabelPosition': 'top'
}, $('div'));
// drawBarChart([1, 2, 0.5, 4, 7], {}, $('div'));
