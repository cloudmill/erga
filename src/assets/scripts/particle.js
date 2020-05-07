import './plugins/nextparticle.min';

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 800;

const userAgent = navigator.userAgent.toLowerCase();

let Safari = false;
let google = false;
const ua = navigator.userAgent.toLowerCase();
if (ua.indexOf('safari') != -1) {
  if (ua.indexOf('chrome') > -1) {
    Safari = false;
    google = true;
  } else {
    Safari = true;
    google = false;
  }
}

let InternetExplorer = false;
if((/mozilla/.test(userAgent) && !/firefox/.test(userAgent) && !/chrome/.test(userAgent) && !/safari/.test(userAgent) && !/opera/.test(userAgent)) || /msie/.test(userAgent)) {
  InternetExplorer = true;
}

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
  if(!(Safari || InternetExplorer)) {
    const getWidth = document.getElementsByClassName('section__main')[0].offsetWidth;
    const getHeight = document.getElementsByClassName('section__main')[0].offsetHeight;
    let heart = new Particle({
      renderer: isApple ? 'canvas' : 'webgl',
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
  } else {
    valentines.setAttribute("src", "/local/templates/main/assets/images/erga.jpg");
  }
}
