onLoad();


function onLoad() {
  // SETUP TRIANGLE WIDTH
  const triangle = document.querySelector('#logo-triangle');
  const triHeight = triangle.offsetHeight;
  //const triProperties = triangle.getBoundingClientRect();

  triangle.setAttribute('style',`width:${1.5*triHeight}px`);

  
}

