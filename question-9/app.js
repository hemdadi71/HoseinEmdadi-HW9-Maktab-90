'use strict';
const container = document.getElementById('container');
const tooltip = document.getElementById('tooltip');

// ....................................................................................
const showTooltip = e => {
  if (e.currentTarget.childNodes[1]) return;
  const toolTipText = document.createElement('div');
  toolTipText.className =
    'fs-6 bg-dark bg-opacity-25 w-25 p-2 rounded-2 position-absolute text-center m-auto start-0 end-0 text-dark';
  toolTipText.id = 'tooltiptext';
  toolTipText.innerHTML = 'Tooltip text';
  tooltip.append(toolTipText);

  if (
    getComputedStyle(tooltip).marginTop > getComputedStyle(toolTipText).height
  ) {
    toolTipText.style.bottom = '40px';
  } else {
    toolTipText.style.bottom = '-45px';
  }
  // console.log(getComputedStyle(tooltip).marginTop);
  // console.log(getComputedStyle(toolTipText).height);
};
// ................................................................................
const hideTooltip = e => {
  e.currentTarget.childNodes[1].remove();
};
// ....................................................................................
tooltip.addEventListener('mouseenter', showTooltip);
tooltip.addEventListener('mouseleave', hideTooltip);
