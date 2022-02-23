function drawBarChart(data, options, element) {

  let userOptions = Object.keys(options);

  let max = Math.max(...data);

  // DRAWS ACTUAL BARS
  data.forEach((dataPoint, index) => {
    element.append($('<div></div>')
      .addClass('bar')
      .css('height', `calc(600px * (${dataPoint} / ${max}))`));
  });
  $('.bar').css('width', `calc(400px / ${data.length})`);

  // SETS COLOUR OF BAR
  if (userOptions.includes('barColor')) {
    $('.bar').css('background-color', `#${barColor}`)
  } else {
    $('.bar').css('background-color', `#40434E`);
  }

}

drawBarChart([1, 2, 0.5, 4, 7], {}, $('div'));