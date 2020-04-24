import './plugins/nextparticle.min';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 800;

const settings = {
  particleGap: 4,
  particleSize: 1.3,
  mouseForce: -15,
  noise: 16,
  layerCount: isMobile ? 1 : 2,
  layerDistance: 8.7
};
const valentines = document.getElementById('valentines');

let isApple = /iPhone|iPad|iPod|Safari/i.test(navigator.userAgent);
if (navigator.userAgent.indexOf('Chrome')!=-1){
  isApple = false;
}

if(valentines) {
  const getWidth = document.getElementsByClassName('section__main')[0].offsetWidth;
  const getHeight = document.getElementsByClassName('section__main')[0].offsetHeight;
  let heart = new Particle({
    renderer: isApple? 'canvas' : 'webgl',
    image: document.querySelector('#valentines'),
    width: isMobile ? getWidth : window.innerWidth,
    height: isMobile ? getWidth < 800 ? 370 : getHeight / 1.5 : window.innerHeight,
    particleGap: settings.particleGap,
    particleSize: settings.particleSize,
    mouseForce: settings.mouseForce,
    noise: settings.noise,
    layerCount: settings.layerCount,
    layerDistance: settings.layerDistance
  });


  function redraw(getWidth, getHeight) {
    heart.particleGap = settings.particleGap;
    heart.particleSize = settings.particleSize;
    heart.mouseForce = settings.mouseForce;
    heart.noise = settings.noise;
    heart.layerCount = settings.layerCount;
    heart.layerDistance = settings.layerDistance;
    heart.width = isMobile ? getWidth : window.innerWidth;
    heart.height = isMobile ? getWidth < 800 ? 370 : getHeight / 1.5 : window.innerHeight;

    heart.start({
      initPosition: 'none',
      initDirection: 'none'
    });

  };

  window.addEventListener('resize', function () {
    const getWidth = document.getElementsByClassName('section__main')[0].offsetWidth;
    const getHeight = document.getElementsByClassName('section__main')[0].offsetHeight;
    redraw(getWidth, getHeight);
  });
  window.addEventListener('orientationchange', function () {
    const getWidth = document.getElementsByClassName('section__main')[0].offsetWidth;
    const getHeight = document.getElementsByClassName('section__main')[0].offsetHeight;
    redraw(getWidth, getHeight);
  });
}
