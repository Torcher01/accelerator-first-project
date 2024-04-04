const video = document.querySelector('.about-us__video');
const link = document.querySelector('.about-us__video-link');
const button = document.querySelector('.about-us__video-button');

const createIframe = () => {
  const iframe = document.createElement('iframe');
  iframe.setAttribute('loading', 'lazy');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?si=D8IS4DS_zsAcM2sE?rel=0&showinfo=0&autoplay=1');
  iframe.classList.add('about-us__video-frame');

  return iframe;
}

const addIframe = () => {
  link.remove();
  button.remove();
  video.appendChild(createIframe());
  link.removeAttribute('href');
}

video.addEventListener('click', addIframe);
