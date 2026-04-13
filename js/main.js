// ============================================
//  CYBERSEC PORTFOLIO — main.js
// ============================================

/* ── Custom Cursor ── */
(function initCursor() {
  const cursor    = document.querySelector('.cursor');
  const cursorDot = document.querySelector('.cursor-dot');
  if (!cursor || !cursorDot) return;

  let mx = 0, my = 0, cx = 0, cy = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursorDot.style.left = mx + 'px';
    cursorDot.style.top  = my + 'px';
  });

  (function loop() {
    cx += (mx - cx) * 0.12;
    cy += (my - cy) * 0.12;
    cursor.style.left = cx + 'px';
    cursor.style.top  = cy + 'px';
    requestAnimationFrame(loop);
  })();

  document.querySelectorAll('a, button, .btn, .card, .filter-btn').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
  });
})();

/* ── Typing Effect ── */
(function initTyping() {
  const el = document.querySelector('.typed-text');
  if (!el) return;

  const roles = [
    'Cybersecurity Enthusiast',
    'CTF Player',
    'Penetration Tester',
    'Data Operations Specialist',
    'Office Administrator',
    'German B1 Certified',
  ];

  let roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const current = roles[roleIdx];
    if (deleting) {
      charIdx--;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 50);
    } else {
      charIdx++;
      el.textContent = current.slice(0, charIdx);
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
      setTimeout(tick, 90);
    }
  }
  setTimeout(tick, 800);
})();

/* ── Active nav link ── */
(function setActiveNav() {
  const path = location.pathname.replace(/\/$/, '');
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').replace(/\/$/, '');
    if (path.endsWith(href) || (href === 'index.html' && (path === '' || path.endsWith('/')))) {
      a.classList.add('active');
    }
  });
})();

/* ── Mobile nav toggle ── */
(function initMobileNav() {
  const btn   = document.querySelector('.nav-menu-btn');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.addEventListener('click', () => links.classList.toggle('open'));
})();

/* ── Scroll reveal ── */
(function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('fade-up');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  items.forEach(el => io.observe(el));
})();

/* ── Filter tabs (writeups / projects) ── */
(function initFilter() {
  const btns  = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('[data-category]');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.filter;
      cards.forEach(card => {
        const match = cat === 'all' || card.dataset.category === cat;
        card.style.display = match ? '' : 'none';
      });
    });
  });
})();

/* ── Counter animation ── */
(function initCounters() {
  const nums = document.querySelectorAll('.stat-num[data-count]');
  if (!nums.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = parseInt(e.target.dataset.count);
        const suffix = e.target.dataset.suffix || '';
        let n = 0;
        const step = Math.ceil(target / 40);
        const t = setInterval(() => {
          n = Math.min(n + step, target);
          e.target.textContent = n + suffix;
          if (n >= target) clearInterval(t);
        }, 30);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  nums.forEach(el => io.observe(el));
})();
