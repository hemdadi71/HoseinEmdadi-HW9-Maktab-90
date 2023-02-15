'use strict';
const container = document.getElementById('container');
const tooltip = document.querySelectorAll('.tooltips');

// ....................................................................................
const showTooltip = e => {
  if (e.currentTarget.childNodes[1]) return;
  const toolTipText = document.createElement('div');
  toolTipText.className =
    'fs-6 bg-dark w-50 p-2 rounded-2 position-absolute text-center m-auto start-0 end-0 text-white';
  toolTipText.id = 'tooltiptext';
  toolTipText.innerHTML = `This Tooltip For ${e.currentTarget.innerText}`;
  toolTipText.style.zIndex = '1';
  e.currentTarget.append(toolTipText);

  if (
    e.currentTarget.getBoundingClientRect().top <
    parseInt(getComputedStyle(toolTipText).height)
  ) {
    toolTipText.style.bottom = '-45px';
  } else {
    toolTipText.style.bottom = '40px';
  }
  
  // console.log(parseInt(getComputedStyle(toolTipText).height));
  // console.log(e.currentTarget.getBoundingClientRect().top);
};
// ................................................................................
const hideTooltip = e => {
  e.currentTarget.childNodes[1].remove();
};
// ....................................................................................
tooltip.forEach(element => element.addEventListener('mouseenter', showTooltip));
tooltip.forEach(element => element.addEventListener('mouseleave', hideTooltip));

