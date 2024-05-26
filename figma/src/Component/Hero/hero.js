
const navclick = () => {

  const sliderLinks = document.querySelectorAll('.slider-link');
  const sliderContent = document.getElementById('slider-content');
  const sliderHeading = document.getElementById('slider-heading');
  const sliderText = document.getElementById('slider-text');

  sliderLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const heading = this.getAttribute('data-heading');
      const text = this.getAttribute('data-text');

      // Slide out current content
      sliderContent.classList.add('slide-leave-active');

      // Wait for the slide out animation to complete
      setTimeout(() => {

        sliderHeading.textContent = heading;
        sliderText.textContent = text;


        sliderContent.classList.remove('slide-leave-active');
        sliderContent.classList.add('slide-enter');


        void sliderContent.offsetWidth;

        sliderContent.classList.remove('slide-enter');
        sliderContent.classList.add('slide-enter-active');

        setTimeout(() => {
          sliderContent.classList.remove('slide-enter-active');
        }, 500);
      }, 500);
    });
  });
}