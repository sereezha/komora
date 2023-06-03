window.addEventListener('load', function () {
  const hero = document.querySelector('.hero');
  const header = document.querySelector('.main-header');
  const headerLogo = document.querySelector('.main-header__logo');
  const mainLogo = document.querySelector('.main-logo');
  const headerHeight =
    window.clientWidth >= 768
      ? header.clientHeight + 5
      : header.clientHeight + 12;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          headerLogo.classList.remove('is-visible');
          mainLogo.classList.remove('is-hidden');
          header.classList.remove('is-active');
        } else {
          headerLogo.classList.add('is-visible');
          mainLogo.classList.add('is-hidden');
          header.classList.add('is-active');
        }
      });
    },
    {
      rootMargin: `-${headerHeight}px`,
    }
  );

  observer.observe(hero);

  const heroHeight = hero.offsetHeight;
  const mainLogoWidth = mainLogo.clientWidth;
  const headerLogoWidth = headerLogo.clientWidth;

  const startValue = 1;
  const endValue = headerLogoWidth / mainLogoWidth;
  const startScrollY = 0;
  const endScrollY = heroHeight - headerHeight;

  window.addEventListener('scroll', function () {
    if (mainLogo.classList.contains('is-hidden')) return;
    const scale =
      startValue +
      ((endValue - startValue) * (window.scrollY - startScrollY)) /
        (endScrollY - startScrollY);
    mainLogo.style.transform = `scale(${scale})`;
  });
});
