/* ==========================================================================
   Sidra Holidays & Cabs — site scripts (vanilla JS, no dependencies except
   Bootstrap's bundle for the modal / accordion components).
   ========================================================================== */
(function () {
  'use strict';

  /* ======================================================================
     1. PACKAGE DATA
     ----------------------------------------------------------------------
     Replace the values below with real package information. Each key is
     referenced from the markup via data-package="<key>" on the
     "View Package" buttons. Prices are placeholders.
     ====================================================================== */
  var PACKAGES = {
    'weekend-getaway': {
      name: 'Weekend Getaway',
      destination: 'Nearby hill station or beach town (to be confirmed)',
      duration: '2 Days / 1 Night',
      price: '₹0,000',
      priceNote: 'per person (placeholder)',
      image: 'https://images.unsplash.com/photo-1494822493217-c9840aba840c?auto=format&fit=crop&w=1200&q=70',
      imageAlt: 'Tree-lined road leading out of the city for a short weekend trip',
      summary: 'A short, refreshing break for travellers who want to leave on Friday evening and be back by Sunday night, without a long planning process.',
      itinerary: [
        { title: 'Day 1 — Departure & arrival', text: 'Pick-up from your doorstep, drive to the destination with a refreshment stop, hotel check-in and an evening at leisure.' },
        { title: 'Day 2 — Sightseeing & return', text: 'Breakfast, half-day local sightseeing with your driver, lunch break and a comfortable drive home.' }
      ],
      accommodation: 'Accommodation placeholder — 1 night in a 3-star hotel or comparable property, twin sharing.',
      transport: 'Air-conditioned sedan or SUV with an experienced driver, for the full duration of the trip.',
      inclusions: ['Private cab with driver', 'Fuel, tolls and parking', '1 night accommodation', 'Daily breakfast', 'Driver allowance'],
      exclusions: ['Lunch and dinner', 'Monument and activity tickets', 'Personal expenses', 'Anything not listed under inclusions']
    },
    'family-holiday': {
      name: 'Family Holiday',
      destination: 'Family-friendly destination of your choice',
      duration: '5 Days / 4 Nights',
      price: '₹00,000',
      priceNote: 'per person (placeholder)',
      image: 'https://images.unsplash.com/photo-1496275068113-fff8c90750d1?auto=format&fit=crop&w=1200&q=70',
      imageAlt: 'Family walking together along the shoreline at golden hour',
      summary: 'A relaxed itinerary built around children and elders — shorter driving hours, flexible start times and stays close to the main attractions.',
      itinerary: [
        { title: 'Day 1 — Arrival', text: 'Airport or railway station pick-up, hotel check-in and an easy evening nearby.' },
        { title: 'Day 2 & 3 — Sightseeing', text: 'Guided local sightseeing at a comfortable pace, with rest breaks and family-friendly meal stops.' },
        { title: 'Day 4 — Free day', text: 'A day at leisure for the beach, a park or shopping, with the cab available on request.' },
        { title: 'Day 5 — Departure', text: 'Check-out and a timely transfer back to the airport or station.' }
      ],
      accommodation: 'Accommodation placeholder — 4 nights in family rooms at a 3-star or 4-star hotel.',
      transport: 'Spacious SUV or tempo traveller depending on group size, with driver, for the full trip.',
      inclusions: ['All transfers and sightseeing by private vehicle', '4 nights accommodation', 'Daily breakfast', 'Toll, parking and driver allowance', 'On-trip support number'],
      exclusions: ['Flight and train fares', 'Lunch and dinner', 'Entry tickets and activities', 'Travel insurance']
    },
    'romantic-escape': {
      name: 'Romantic Escape',
      destination: 'Scenic hill or lakeside destination',
      duration: '3 Days / 2 Nights',
      price: '₹00,000',
      priceNote: 'per couple (placeholder)',
      image: 'https://images.unsplash.com/photo-1532932371123-928bc0091ec0?auto=format&fit=crop&w=1200&q=70',
      imageAlt: 'Couple standing together on a green mountain meadow',
      summary: 'A quiet short break for couples, with private transfers and unhurried days rather than a packed sightseeing schedule.',
      itinerary: [
        { title: 'Day 1 — Arrival', text: 'Private pick-up, scenic drive and check-in, followed by a free evening.' },
        { title: 'Day 2 — Exploring together', text: 'A half-day drive to viewpoints and local spots, with the rest of the day at leisure.' },
        { title: 'Day 3 — Departure', text: 'Late check-out where available and a relaxed drive back.' }
      ],
      accommodation: 'Accommodation placeholder — 2 nights in a boutique hotel or resort, couple room.',
      transport: 'Private air-conditioned sedan with driver throughout.',
      inclusions: ['Private cab and transfers', '2 nights accommodation', 'Daily breakfast', 'Welcome assistance on arrival'],
      exclusions: ['Meals other than breakfast', 'Activity and entry fees', 'Personal expenses']
    },
    'honeymoon-special': {
      name: 'Honeymoon Special',
      destination: 'Beach or hill honeymoon destination',
      duration: '6 Days / 5 Nights',
      price: '₹00,000',
      priceNote: 'per couple (placeholder)',
      image: 'https://images.unsplash.com/photo-1465188035480-cf3a60801ea5?auto=format&fit=crop&w=1200&q=70',
      imageAlt: 'Couple looking out over a mountain valley at sunrise',
      summary: 'A complete honeymoon plan — stays, private transfers, sightseeing and a few thoughtful extras arranged in advance so nothing needs to be organised on the trip.',
      itinerary: [
        { title: 'Day 1 — Arrival & welcome', text: 'Private airport transfer, assisted check-in and an evening free to settle in.' },
        { title: 'Day 2 & 3 — Sightseeing', text: 'Curated half-day drives to the best viewpoints, beaches or gardens, planned around your preferred timings.' },
        { title: 'Day 4 — Experience day', text: 'An optional add-on such as a candlelight dinner, boat ride or spa session, arranged on request.' },
        { title: 'Day 5 — At leisure', text: 'A full free day, with the cab available for short local trips.' },
        { title: 'Day 6 — Departure', text: 'Check-out and private transfer to the airport or station.' }
      ],
      accommodation: 'Accommodation placeholder — 5 nights in a honeymoon room at a 4-star hotel or resort.',
      transport: 'Private air-conditioned vehicle with driver for all transfers and sightseeing.',
      inclusions: ['Private airport transfers', '5 nights accommodation', 'Daily breakfast', 'All sightseeing transfers', 'Honeymoon room request at the hotel'],
      exclusions: ['Airfare', 'Lunch and dinner', 'Optional experiences and entry tickets', 'Travel insurance and personal expenses']
    },
    'corporate-travel': {
      name: 'Corporate Travel Package',
      destination: 'Any business destination, city or outstation',
      duration: 'Flexible — per day, per week or monthly',
      price: '₹0,000',
      priceNote: 'per day (placeholder)',
      image: 'https://images.unsplash.com/photo-1504150558240-0b4fd8946624?auto=format&fit=crop&w=1200&q=70',
      imageAlt: 'Business traveller with luggage walking through an airport terminal',
      summary: 'A transport plan for companies — airport pick-ups, daily employee movement, client visits and event travel, billed on a single monthly invoice.',
      itinerary: [
        { title: 'Requirement review', text: 'We map your routes, timings, vehicle types and expected monthly volume.' },
        { title: 'Allocation', text: 'Vehicles and trained drivers are assigned, with backups for peak days.' },
        { title: 'Daily operations', text: 'Scheduled pick-ups and drops with trip confirmations to your travel desk.' },
        { title: 'Monthly reporting', text: 'Consolidated trip sheets and a single invoice at the end of each cycle.' }
      ],
      accommodation: 'Accommodation placeholder — hotel bookings can be arranged alongside transport on request.',
      transport: 'Sedans, SUVs and tempo travellers on a per-trip, per-day or monthly contract basis.',
      inclusions: ['Dedicated vehicles and drivers', 'Airport and hotel transfers', 'Monthly consolidated billing', 'Priority booking support'],
      exclusions: ['Interstate permits where applicable', 'Waiting beyond agreed free time', 'Accommodation unless separately booked']
    },
    'international-holiday': {
      name: 'International Holiday',
      destination: 'Overseas destination of your choice',
      duration: '7 Days / 6 Nights',
      price: '₹0,00,000',
      priceNote: 'per person (placeholder)',
      image: 'https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1200&q=70',
      imageAlt: 'Travellers photographing hot air balloons at sunrise on an overseas holiday',
      summary: 'End-to-end assistance for an overseas trip — itinerary planning, stays, local transport and documentation guidance.',
      itinerary: [
        { title: 'Day 1 — Departure & arrival', text: 'Domestic transfer to the airport, and an arranged transfer to your hotel on arrival.' },
        { title: 'Day 2 to 5 — Guided touring', text: 'City tours, day excursions and free time, planned around your interests and travel pace.' },
        { title: 'Day 6 — Leisure & shopping', text: 'A relaxed day for shopping or an optional excursion.' },
        { title: 'Day 7 — Return', text: 'Airport transfer overseas and a cab waiting for you when you land back home.' }
      ],
      accommodation: 'Accommodation placeholder — 6 nights in centrally located 3-star or 4-star hotels.',
      transport: 'Airport transfers and local sightseeing transport overseas, plus your domestic airport cab.',
      inclusions: ['Itinerary planning and hotel bookings', 'Overseas airport transfers', 'Sightseeing as per the final itinerary', 'Visa documentation guidance', 'Domestic airport cab both ways'],
      exclusions: ['International airfare', 'Visa fees and travel insurance', 'Meals not mentioned', 'Personal expenses and optional tours']
    }
  };

  /* Expose for easy replacement / debugging */
  window.SIDRA_PACKAGES = PACKAGES;

  var docEl = document.documentElement;

  function $(selector, scope) { return (scope || document).querySelector(selector); }
  function $$(selector, scope) { return Array.prototype.slice.call((scope || document).querySelectorAll(selector)); }

  /* ======================================================================
     2. STICKY HEADER
     ====================================================================== */
  function initStickyHeader() {
    var header = $('.site-header');
    if (!header) return;
    var ticking = false;

    function update() {
      header.classList.toggle('is-stuck', window.scrollY > 8);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });
    update();
  }

  /* ======================================================================
     3. MOBILE NAVIGATION
     ====================================================================== */
  function initMobileNav() {
    var toggle = $('.nav-toggle');
    var drawer = $('#mobileNav');
    var backdrop = $('.nav-backdrop');
    if (!toggle || !drawer) return;

    var lastFocused = null;

    function openNav() {
      lastFocused = document.activeElement;
      drawer.classList.add('is-open');
      if (backdrop) backdrop.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      drawer.removeAttribute('aria-hidden');
      document.body.classList.add('nav-open');
      var firstLink = $('a, button', drawer);
      if (firstLink) firstLink.focus();
    }

    function closeNav(returnFocus) {
      drawer.classList.remove('is-open');
      if (backdrop) backdrop.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      drawer.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('nav-open');
      if (returnFocus !== false) {
        (lastFocused || toggle).focus();
      }
    }

    toggle.addEventListener('click', function () {
      if (drawer.classList.contains('is-open')) closeNav();
      else openNav();
    });

    if (backdrop) backdrop.addEventListener('click', function () { closeNav(); });

    /* Close after choosing a destination */
    $$('a', drawer).forEach(function (link) {
      link.addEventListener('click', function () { closeNav(false); });
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeNav();
      }
      /* Simple focus trap while the drawer is open */
      if (event.key === 'Tab' && drawer.classList.contains('is-open')) {
        var focusables = $$('a[href], button:not([disabled]), input, select, textarea', drawer);
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 992 && drawer.classList.contains('is-open')) closeNav(false);
    });
  }

  /* ======================================================================
     4. SMOOTH SCROLLING FOR IN-PAGE LINKS (with sticky-header offset)
     ====================================================================== */
  function initSmoothScroll() {
    $$('a[href^="#"]').forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href || href === '#' || link.getAttribute('data-bs-toggle')) return;

      link.addEventListener('click', function (event) {
        var target = document.getElementById(href.slice(1));
        if (!target) return;
        event.preventDefault();
        var headerHeight = ($('.site-header') || {}).offsetHeight || 76;
        var top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
        var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: top, behavior: reduced ? 'auto' : 'smooth' });
        target.setAttribute('tabindex', '-1');
        target.focus({ preventScroll: true });
        if (history.replaceState) history.replaceState(null, '', href);
      });
    });
  }

  /* ======================================================================
     5. ACTIVE SECTION HIGHLIGHT (home page anchors)
     ====================================================================== */
  function initScrollSpy() {
    var spyLinks = $$('[data-spy-link]');
    if (!spyLinks.length || !('IntersectionObserver' in window)) return;

    var sections = spyLinks
      .map(function (link) { return document.getElementById(link.getAttribute('data-spy-link')); })
      .filter(Boolean);
    if (!sections.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        spyLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('data-spy-link') === entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ======================================================================
     6. SCROLL REVEAL
     ====================================================================== */
  function initReveal() {
    var items = $$('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(function (item) { item.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var delay = parseInt(entry.target.getAttribute('data-reveal-delay') || '0', 10);
        setTimeout(function () { entry.target.classList.add('is-visible'); }, delay);
        obs.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (item) { observer.observe(item); });
  }

  /* ======================================================================
     7. BACK TO TOP
     ====================================================================== */
  function initBackToTop() {
    var button = $('.back-to-top');
    if (!button) return;
    var ticking = false;

    function update() {
      button.classList.toggle('is-visible', window.scrollY > 500);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }, { passive: true });

    button.addEventListener('click', function () {
      var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
      var brand = $('.brand');
      if (brand) brand.focus({ preventScroll: true });
    });
    update();
  }

  /* ======================================================================
     8. PACKAGE DETAILS MODAL
     ====================================================================== */
  function buildList(values, extraClass) {
    return '<ul class="tick-list ' + (extraClass || '') + '">' +
      values.map(function (value) { return '<li>' + value + '</li>'; }).join('') +
      '</ul>';
  }

  function initPackageModal() {
    var modalEl = document.getElementById('packageModal');
    if (!modalEl) return;

    var triggers = $$('[data-package]');
    if (!triggers.length) return;

    var bodyEl = $('#packageModalBody', modalEl);
    var titleEl = $('#packageModalLabel', modalEl);

    function render(key) {
      var data = PACKAGES[key];
      if (!data) return false;

      titleEl.textContent = data.name;

      bodyEl.innerHTML =
        '<div class="modal-hero mb-4">' +
        '<img src="' + data.image + '" alt="' + data.imageAlt + '" loading="lazy" width="1200" height="514">' +
        '</div>' +
        '<p class="mb-4">' + data.summary + '</p>' +
        '<div class="row g-3 mb-4">' +
        '<div class="col-sm-6"><div class="p-3" style="background:#f3f7f6;border-radius:6px;">' +
        '<div class="field-label mb-1">Destination</div><div style="font-size:.93rem;color:#3d4852;">' + data.destination + '</div></div></div>' +
        '<div class="col-sm-6"><div class="p-3" style="background:#f3f7f6;border-radius:6px;">' +
        '<div class="field-label mb-1">Duration</div><div style="font-size:.93rem;color:#3d4852;">' + data.duration + '</div></div></div>' +
        '</div>' +
        '<h3 class="h5 mb-3">Suggested itinerary</h3>' +
        '<div class="mb-4">' + data.itinerary.map(function (step) {
          return '<div class="itinerary-step"><h5>' + step.title + '</h5><p>' + step.text + '</p></div>';
        }).join('') + '</div>' +
        '<h3 class="h5 mb-2">Accommodation</h3><p class="mb-4" style="color:#667085;font-size:.94rem;">' + data.accommodation + '</p>' +
        '<h3 class="h5 mb-2">Transportation</h3><p class="mb-4" style="color:#667085;font-size:.94rem;">' + data.transport + '</p>' +
        '<div class="row g-4 mb-4">' +
        '<div class="col-md-6"><h3 class="h5 mb-2">Inclusions</h3>' + buildList(data.inclusions) + '</div>' +
        '<div class="col-md-6"><h3 class="h5 mb-2">Exclusions</h3>' + buildList(data.exclusions, 'tick-list--cross') + '</div>' +
        '</div>' +
        '<div class="d-flex align-items-center justify-content-between flex-wrap gap-3 p-3" style="background:#f3f7f6;border-radius:6px;">' +
        '<div><span class="price-tag">' + data.price + '<small>Starting from · ' + data.priceNote + '</small></span></div>' +
        '<p class="form-note mb-0" style="max-width:34ch;">Pricing shown is a placeholder. Final cost depends on dates, group size and hotel category.</p>' +
        '</div>';

      return true;
    }

    triggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        render(trigger.getAttribute('data-package'));
      });
    });
  }

  function initImageLightbox() {
    var images = $$('.package-card__figure img, #packages .media-card__figure img');
    if (!images.length) return;

    var lightbox = document.createElement('div');
    lightbox.className = 'image-lightbox';
    lightbox.hidden = true;
    lightbox.setAttribute('role', 'dialog');
    lightbox.setAttribute('aria-modal', 'true');
    lightbox.setAttribute('aria-label', 'Enlarged package image');
    lightbox.innerHTML = '<button class="image-lightbox__close" type="button" aria-label="Close enlarged image">&times;</button><img class="image-lightbox__image" alt="">';
    document.body.appendChild(lightbox);

    var enlargedImage = $('.image-lightbox__image', lightbox);
    var closeButton = $('.image-lightbox__close', lightbox);
    var lastFocused = null;

    function close() {
      lightbox.hidden = true;
      document.body.style.removeProperty('overflow');
      if (lastFocused) lastFocused.focus();
    }

    function open(image) {
      lastFocused = image;
      enlargedImage.src = image.currentSrc || image.src;
      enlargedImage.alt = image.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    }

    images.forEach(function (image) {
      image.tabIndex = 0;
      image.addEventListener('click', function () { open(image); });
      image.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open(image);
        }
      });
    });

    closeButton.addEventListener('click', close);
    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) close();
    });
    document.addEventListener('keydown', function (event) {
      if (!lightbox.hidden && event.key === 'Escape') close();
    });
  }

  /* ======================================================================
     9. FORM VALIDATION (enquiry + hero search)
     ====================================================================== */
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  var PHONE_RE = /^[0-9]{10,15}$/;

  function setError(field, message) {
    var wrapper = field.closest('[data-field]');
    if (!wrapper) return;
    var errorEl = $('.field-error', wrapper);
    if (message) {
      field.classList.add('is-invalid');
      field.setAttribute('aria-invalid', 'true');
      if (errorEl) {
        errorEl.textContent = message;
        errorEl.classList.add('is-visible');
      }
    } else {
      field.classList.remove('is-invalid');
      field.removeAttribute('aria-invalid');
      if (errorEl) {
        errorEl.textContent = '';
        errorEl.classList.remove('is-visible');
      }
    }
  }

  function validateField(field) {
    var value = (field.value || '').trim();
    var type = field.getAttribute('data-validate');
    var label = field.getAttribute('data-label') || 'This field';

    if (field.hasAttribute('required') && !value) {
      setError(field, label + ' is required.');
      return false;
    }
    if (!value) { setError(field, ''); return true; }

    switch (type) {
      case 'name':
        if (value.length < 2) { setError(field, 'Please enter your full name.'); return false; }
        break;
      case 'email':
        if (!EMAIL_RE.test(value)) { setError(field, 'Please enter a valid email address, for example name@example.com.'); return false; }
        break;
      case 'phone': {
        var digits = value.replace(/[\s()+-]/g, '');
        if (!PHONE_RE.test(digits)) { setError(field, 'Please enter a valid phone number with 10 to 15 digits.'); return false; }
        break;
      }
      case 'date': {
        var chosen = new Date(value);
        if (isNaN(chosen.getTime())) { setError(field, 'Please choose a valid travel date.'); return false; }
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        if (chosen < today) { setError(field, 'Travel date cannot be in the past.'); return false; }
        var limit = new Date();
        limit.setFullYear(limit.getFullYear() + 2);
        if (chosen > limit) { setError(field, 'Please choose a date within the next two years.'); return false; }
        break;
      }
      case 'travellers': {
        var count = parseInt(value, 10);
        if (isNaN(count) || count < 1 || count > 60) { setError(field, 'Enter a number of travellers between 1 and 60.'); return false; }
        break;
      }
      case 'message':
        if (value.length < 10) { setError(field, 'Please add a little more detail (at least 10 characters).'); return false; }
        if (value.length > 1000) { setError(field, 'Please keep your message under 1000 characters.'); return false; }
        break;
      default:
        break;
    }

    setError(field, '');
    return true;
  }

  function initForm(formId) {
    var form = document.getElementById(formId);
    if (!form) return;

    var fields = $$('[data-validate]', form);
    var successAlert = $('.form-alert--success', form);
    var errorAlert = $('.form-alert--error', form);

    fields.forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.classList.contains('is-invalid')) validateField(field);
      });
    });

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var firstInvalid = null;
      fields.forEach(function (field) {
        var ok = validateField(field);
        if (!ok && !firstInvalid) firstInvalid = field;
      });

      if (successAlert) successAlert.classList.remove('is-visible');
      if (errorAlert) errorAlert.classList.remove('is-visible');

      if (firstInvalid) {
        if (errorAlert) {
          errorAlert.classList.add('is-visible');
          errorAlert.focus();
        }
        firstInvalid.focus();
        return;
      }

      /* No backend is connected in this build. Replace the block below with
         a fetch() call to your form handler or CRM endpoint. */
      if (successAlert) {
        successAlert.classList.add('is-visible');
        successAlert.focus();
      }
      form.reset();
      fields.forEach(function (field) { setError(field, ''); });
    });
  }

  /* Minimum travel date = today, on every date input */
  function initDateLimits() {
    var today = new Date().toISOString().split('T')[0];
    $$('input[type="date"]').forEach(function (input) {
      if (!input.getAttribute('min')) input.setAttribute('min', today);
    });
  }

  /* ======================================================================
     10. CURRENT YEAR IN FOOTER
     ====================================================================== */
  function initYear() {
    $$('[data-current-year]').forEach(function (el) {
      el.textContent = String(new Date().getFullYear());
    });
  }

  /* ======================================================================
     11. GLOBAL VISITOR COUNTER  (shared by every visitor, worldwide)
     ----------------------------------------------------------------------
     Uses CounterAPI — free, no signup, no API key, no backend needed.
     Every visitor on every device hits the same URL and sees the same number.

     HTML elements this script looks for:
       <strong data-visitor-count>0</strong>  -> today's visitor count (shared)
       <span data-visitor-total>0</span>      -> all-time total (shared)
       <time data-visitor-date></time>        -> today's date

     • Today's count  -> key changes every day, so it auto-resets at midnight
     • Total count    -> fixed key, never resets
     • If the network fails, it falls back to a local count so the widget
       never shows blank or zero.
     ====================================================================== */
  var VISITOR_COUNTER = {
    /* Unique namespace for Sidra Holidays & Cabs.
       This is what separates our counter from every other site using
       the same free service. Do not change it unless you want a fresh
       count from zero. */
    namespace: 'sidra-holidays-cabs-bengaluru-v1',

    todayPrefix: 'day-',        // becomes  day-2026-09-24
    totalKey:    'all-time',    // never resets

    apiBase: 'https://api.counterapi.dev/v1',

    /* Local fallback (only used if the API is unreachable) */
    fallbackKey:  'sidraVisitorFallback',
    sessionKey:   'sidraVisitorSession',
    countOncePerSession: true,

    selectors: {
      today: '[data-visitor-count]',
      total: '[data-visitor-total]',
      date:  '[data-visitor-date]'
    },
    dateLocale: undefined,
    dateOptions: { day: 'numeric', month: 'short', year: 'numeric' }
  };

  function getLocalDateKey(date) {
    var d = date || new Date();
    var year = d.getFullYear();
    var month = String(d.getMonth() + 1).padStart(2, '0');
    var day = String(d.getDate()).padStart(2, '0');
    return year + '-' + month + '-' + day;
  }

  function safeStorage(type) {
    try {
      var storage = window[type];
      var testKey = '__sidra_test__';
      storage.setItem(testKey, '1');
      storage.removeItem(testKey);
      return storage;
    } catch (error) {
      return null;
    }
  }

  var visitorLocalStorage = safeStorage('localStorage');
  var visitorSessionStorage = safeStorage('sessionStorage');

  function readVisitorFallback() {
    var todayKey = getLocalDateKey();
    var data = { date: todayKey, today: 0, total: 0 };

    if (visitorLocalStorage) {
      var raw = null;
      try { raw = visitorLocalStorage.getItem(VISITOR_COUNTER.fallbackKey); } catch (e) { raw = null; }
      if (raw) {
        try { data = JSON.parse(raw) || data; } catch (e) { /* keep default */ }
      }
    }

    if (typeof data.today !== 'number' || data.today < 0) data.today = 0;
    if (typeof data.total !== 'number' || data.total < 0) data.total = 0;
    if (data.date !== todayKey) {
      data.date = todayKey;
      data.today = 0;
    }
    return data;
  }

  function writeVisitorFallback(data) {
    if (!visitorLocalStorage) return;
    try {
      visitorLocalStorage.setItem(VISITOR_COUNTER.fallbackKey, JSON.stringify(data));
    } catch (e) {
      /* Storage may be full or blocked. */
    }
  }

  function shouldCountVisit(todayKey) {
    if (!VISITOR_COUNTER.countOncePerSession) return true;

    var key = VISITOR_COUNTER.sessionKey + ':' + todayKey;

    if (visitorLocalStorage) {
      try {
        if (visitorLocalStorage.getItem(key)) return false;
        visitorLocalStorage.setItem(key, '1');
        return true;
      } catch (e) {
        // fall through to the default behavior below
      }
    }

    if (!visitorSessionStorage) return true;
    try {
      if (visitorSessionStorage.getItem(key)) return false;
      visitorSessionStorage.setItem(key, '1');
      return true;
    } catch (e) {
      return true;
    }
  }

  function formatVisitorDate(dateKey) {
    var parts = dateKey.split('-');
    var date = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    try {
      return date.toLocaleDateString(VISITOR_COUNTER.dateLocale, VISITOR_COUNTER.dateOptions);
    } catch (e) {
      return dateKey;
    }
  }

  function renderVisitorCounter(today, total, dateKey) {
    $$(VISITOR_COUNTER.selectors.today).forEach(function (el) {
      el.textContent = Number(today || 0).toLocaleString();
    });

    $$(VISITOR_COUNTER.selectors.total).forEach(function (el) {
      el.textContent = Number(total || 0).toLocaleString();
    });

    $$(VISITOR_COUNTER.selectors.date).forEach(function (el) {
      el.textContent = formatVisitorDate(dateKey);
      el.setAttribute('datetime', dateKey);
    });
  }

  function counterApiRequest(key, action) {
    var url = VISITOR_COUNTER.apiBase + '/' +
      encodeURIComponent(VISITOR_COUNTER.namespace) + '/' +
      encodeURIComponent(key) + '/' + action;

    return fetch(url, { cache: 'no-store' })
      .then(function (response) {
        if (!response.ok) throw new Error('HTTP ' + response.status);
        return response.json();
      })
      .then(function (json) {
        var n = json && (json.count != null ? json.count
                 : json.value != null ? json.value
                 : json.up_count != null ? json.up_count : null);
        if (n == null) throw new Error('No count in response');
        return Number(n) || 0;
      });
  }

  function initVisitorCounter() {
    var targets = $$(
      VISITOR_COUNTER.selectors.today + ',' +
      VISITOR_COUNTER.selectors.total + ',' +
      VISITOR_COUNTER.selectors.date
    );

    if (!targets.length) return;

    var todayKey = getLocalDateKey();
    var todayApiKey = VISITOR_COUNTER.todayPrefix + todayKey;
    var shouldIncrementToday = shouldCountVisit(todayKey);

    /* ---- 1. Paint the local fallback instantly (never blank) ---- */
    var local = readVisitorFallback();
    if (shouldIncrementToday) {
      local.today += 1;
      local.total += 1;
      writeVisitorFallback(local);
    }
    renderVisitorCounter(local.today, local.total, todayKey);

    /* ---- 2. Fetch the real shared numbers from CounterAPI ---- */
    if (shouldIncrementToday) {
      Promise.all([
        counterApiRequest(todayApiKey, 'up'),                     // increment today's shared count
        counterApiRequest(VISITOR_COUNTER.totalKey, 'up')         // increment shared total
      ])
        .then(function (results) {
          var sharedToday = results[0];
          var sharedTotal = results[1];

          writeVisitorFallback({ date: todayKey, today: sharedToday, total: sharedTotal });
          renderVisitorCounter(sharedToday, sharedTotal, todayKey);
        })
        .catch(function (err) {
          if (window.console && console.warn) {
            console.warn('[visitor-counter] using local fallback:', err.message || err);
          }
          /* Local values are already on screen — nothing more to do */
        });
    }

    /* ---- 3. If the tab stays open past midnight, refresh ---- */
    (function scheduleVisitorReset() {
      var now = new Date();
      var nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 1, 0);
      var delay = nextMidnight.getTime() - now.getTime();

      window.setTimeout(function () {
        var newDay = getLocalDateKey();

        var fresh = readVisitorFallback();
        fresh.date = newDay;
        fresh.today = 0;
        var shouldIncrementNewDay = shouldCountVisit(newDay);
        if (shouldIncrementNewDay) {
          fresh.today += 1;
          fresh.total += 1;
        }
        writeVisitorFallback(fresh);
        renderVisitorCounter(fresh.today, fresh.total, newDay);

        if (shouldIncrementNewDay) {
          Promise.all([
            counterApiRequest(VISITOR_COUNTER.todayPrefix + newDay, 'up'),
            counterApiRequest(VISITOR_COUNTER.totalKey, 'up')
          ])
            .then(function (results) {
              writeVisitorFallback({ date: newDay, today: results[0], total: results[1] });
              renderVisitorCounter(results[0], results[1], newDay);
            })
            .catch(function () { /* keep local values */ });
        }

        scheduleVisitorReset();
      }, delay);
    })();

    /* ---- Public helper for debugging ---- */
    window.SIDRA_VISITOR_COUNTER = {
      get data() { return readVisitorFallback(); },
      resetLocal: function () {
        var current = { date: getLocalDateKey(), today: 0, total: 0 };
        writeVisitorFallback(current);
        renderVisitorCounter(current.today, current.total, current.date);
      }
    };
  }

  /* ======================================================================
     BOOT
     ====================================================================== */
  function boot() {
    docEl.classList.add('js');
    initStickyHeader();
    initMobileNav();
    initSmoothScroll();
    initScrollSpy();
    initReveal();
    initBackToTop();
    initPackageModal();
    initImageLightbox();
    initDateLimits();
    initForm('enquiryForm');
    initForm('heroSearchForm');
    initYear();
    initVisitorCounter();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
