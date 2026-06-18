document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  const updateHeader = () => {
    if (!header) return;
    if (window.scrollY > 50) {
      header.classList.add('bg-cream-50/95', 'backdrop-blur-lg', 'shadow-soft');
      header.classList.remove('bg-transparent');
    } else {
      header.classList.remove('bg-cream-50/95', 'backdrop-blur-lg', 'shadow-soft');
      header.classList.add('bg-transparent');
    }
  };

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();

  let menuOpen = false;
  menuBtn?.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menuBtn.setAttribute('aria-expanded', String(menuOpen));
    mobileMenu?.classList.toggle('translate-x-full', !menuOpen);
    mobileMenu?.classList.toggle('translate-x-0', menuOpen);
    document.body.classList.toggle('overflow-hidden', menuOpen);
  });

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      menuOpen = false;
      menuBtn?.setAttribute('aria-expanded', 'false');
      mobileMenu?.classList.add('translate-x-full');
      mobileMenu?.classList.remove('translate-x-0');
      document.body.classList.remove('overflow-hidden');
    });
  });

  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  revealElements.forEach((el) => revealObserver.observe(el));

  const testimonialTrack = document.getElementById('testimonial-track');
  const testimonialDots = document.querySelectorAll('.testimonial-dot');
  let currentSlide = 0;
  let slideInterval: ReturnType<typeof setInterval> | undefined;

  const goToSlide = (index: number) => {
    if (!testimonialTrack) return;
    currentSlide = index;
    testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
    testimonialDots.forEach((dot, i) => {
      dot.classList.toggle('bg-sage-500', i === index);
      dot.classList.toggle('bg-sage-200', i !== index);
    });
  };

  if (testimonialTrack && testimonialDots.length) {
    testimonialDots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(() => goToSlide((currentSlide + 1) % testimonialDots.length), 6000);
      });
    });
    slideInterval = setInterval(() => goToSlide((currentSlide + 1) % testimonialDots.length), 6000);
  }

  const teamCards = document.querySelectorAll('.team-card');
  teamCards.forEach((card) => {
    card.addEventListener('click', () => {
      teamCards.forEach((c) => c.classList.remove('ring-2', 'ring-sage-400', 'scale-[1.02]'));
      card.classList.add('ring-2', 'ring-sage-400', 'scale-[1.02]');
    });
  });

  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return;
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
      if (lightbox && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
        document.body.classList.add('overflow-hidden');
      }
    });
  });

  document.getElementById('lightbox-close')?.addEventListener('click', () => {
    const lightbox = document.getElementById('lightbox');
    lightbox?.classList.add('hidden');
    lightbox?.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  });

  document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) {
      const lightbox = document.getElementById('lightbox');
      lightbox?.classList.add('hidden');
      lightbox?.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    }
  });
});
