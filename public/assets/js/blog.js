document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-btn');
  const blogItems = document.querySelectorAll('.blog-item');
  const loadMoreBtn = document.getElementById('load-more');
  const itemsPerPage = 6;

  let visibleCount = 0;
  let currentCategory = 'all';

  function updateButtons(selectedBtn) {
    buttons.forEach(btn => {
      btn.classList.remove('bg-purple-600', 'text-white');
      btn.classList.add('bg-purple-100', 'text-purple-700');
      btn.setAttribute('aria-pressed', 'false');
    });
    selectedBtn.classList.add('bg-purple-600', 'text-white');
    selectedBtn.classList.remove('bg-purple-100', 'text-purple-700');
    selectedBtn.setAttribute('aria-pressed', 'true');
  }

  function filterItems(category) {
    currentCategory = category.toLowerCase().trim();
    visibleCount = 0;
    blogItems.forEach(item => item.style.display = 'none');
    showNextBatch();
  }

  function showNextBatch() {
    let shownThisBatch = 0;
    let totalShown = 0;

    for (let i = 0; i < blogItems.length; i++) {
      const item = blogItems[i];
      const categoryText = item.querySelector('.category-text')?.textContent?.trim()?.toLowerCase() || '';
      const matchesCategory = currentCategory === 'all' || categoryText === currentCategory;

      if (matchesCategory) {
        totalShown++;
        if (totalShown > visibleCount && shownThisBatch < itemsPerPage) {
          item.style.display = 'flex';
          item.classList.remove('aos-animate');
          void item.offsetWidth;
          item.classList.add('aos-animate');
          item.setAttribute('data-aos', 'fade-up');
          item.setAttribute('data-aos-delay', `${i * 100}`);
          shownThisBatch++;
        }
      }
    }

    visibleCount += shownThisBatch;

    const remaining = Array.from(blogItems).filter(item => {
      const cat = item.querySelector('.category-text')?.textContent?.trim()?.toLowerCase() || '';
      return (currentCategory === 'all' || cat === currentCategory) && item.style.display === 'none';
    });

    loadMoreBtn.style.display = remaining.length === 0 ? 'none' : 'inline-block';

    setTimeout(() => {
      if (window.AOS) AOS.refreshHard();
    }, 500);
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.getAttribute('data-category');
      updateButtons(btn);
      filterItems(cat);
    });
  });

  filterItems('all');

  loadMoreBtn.addEventListener('click', () => {
    showNextBatch();
  });
});
