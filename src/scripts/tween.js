import './plugins/TweenMax.min';

if($('.aboutZoom svg').length) {
  const svg = document.querySelector(".aboutZoom svg");
  const pt = svg.createSVGPoint();

  function getPoint(evt) {
    pt.x = evt.clientX;
    pt.y = evt.clientY;

    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  function mouseMove(evt) {
    const newPoint = getPoint(evt);
    TweenMax.to(".ring, .masker", 0.88, {attr: {cx: newPoint.x, cy: newPoint.y}, ease: Power2.easeOut});
  }


  window.addEventListener("mousemove", mouseMove);
}


if($('.aboutZoom2 svg').length) {
  const svg = document.querySelector(".aboutZoom2 svg");
  const pt = svg.createSVGPoint();

  function getPoint(evt) {
    pt.x = evt.clientX;
    pt.y = evt.clientY;

    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  function mouseMove(evt) {
    const newPoint = getPoint(evt);
    TweenMax.to(".ring2, .masker2", 0.88, {attr: {cx: newPoint.x, cy: newPoint.y}, ease: Power2.easeOut});
  }


  window.addEventListener("mousemove", mouseMove);
}

