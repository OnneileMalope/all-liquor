/* ============================================================
   ELEPHANT LIQUOR — MAIN JAVASCRIPT
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ============================================================
  // MOBILE NAVIGATION
  // ============================================================
  const hamburger = document.querySelector('.hamburger');
  const navDrawer = document.querySelector('.nav-drawer');

  hamburger?.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navDrawer?.classList.toggle('open');
    document.body.style.overflow = navDrawer?.classList.contains('open') ? 'hidden' : '';
  });

  navDrawer?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger?.classList.remove('open');
      navDrawer?.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ============================================================
  // ACTIVE NAV LINK
  // ============================================================
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // ============================================================
  // SEARCH & FILTER FUNCTIONALITY
  // ============================================================
  const searchInput = document.getElementById('searchInput');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  let currentFilter = 'all';
  let currentSearchTerm = '';

  // Filter by category
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  // Search functionality
  searchInput?.addEventListener('input', (e) => {
    currentSearchTerm = e.target.value.toLowerCase();
    applyFilters();
  });

  // Apply both search and category filters
  function applyFilters() {
    let visibleCount = 0;

    productCards.forEach(card => {
      const category = card.dataset.category;
      const name = card.dataset.name.toLowerCase();
      const brand = card.dataset.brand?.toLowerCase() || '';

      const matchesFilter = currentFilter === 'all' || category === currentFilter;
      const matchesSearch = !currentSearchTerm || 
                           name.includes(currentSearchTerm) || 
                           brand.includes(currentSearchTerm);

      if (matchesFilter && matchesSearch) {
        card.style.display = '';
        card.style.animation = 'fadeIn 0.4s ease forwards';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    // Show no results message if needed
    updateNoResultsMessage(visibleCount);
  }

  // No results message
  function updateNoResultsMessage(count) {
    let noResultsMsg = document.getElementById('noResultsMessage');
    
    if (count === 0) {
      if (!noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.id = 'noResultsMessage';
        noResultsMsg.style.cssText = `
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
          color: var(--text-muted);
          font-size: 1.1rem;
        `;
        noResultsMsg.innerHTML = `
          <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
          <p>No products found matching your search.</p>
          <p style="font-size: 0.9rem; margin-top: 0.5rem;">Try different keywords or clear filters.</p>
        `;
        document.querySelector('.product-grid')?.appendChild(noResultsMsg);
      }
    } else {
      noResultsMsg?.remove();
    }
  }

  // ============================================================
  // SMOOTH SCROLL
  // ============================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

});
