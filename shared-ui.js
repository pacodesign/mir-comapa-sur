// Custom Select — replaces native <select> with a styled dropdown
(function () {
  function buildChevron() {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.classList.add('csel-chevron');
    var poly = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    poly.setAttribute('points', '6 9 12 15 18 9');
    svg.appendChild(poly);
    return svg;
  }

  function initCustomSelect(sel) {
    if (sel._cselInit) return;
    sel._cselInit = true;

    var isFilter = sel.classList.contains('filter-select');

    var wrap = document.createElement('div');
    wrap.className = 'csel-wrap' + (isFilter ? ' csel-filter' : '');

    var trigger = document.createElement('button');
    trigger.type = 'button';
    trigger.className = 'csel-trigger';

    var labelEl = document.createElement('span');
    labelEl.className = 'csel-label';
    trigger.appendChild(labelEl);
    trigger.appendChild(buildChevron());

    var dropdown = document.createElement('div');
    dropdown.className = 'csel-dropdown';

    wrap.appendChild(trigger);
    wrap.appendChild(dropdown);

    sel.parentNode.insertBefore(wrap, sel);
    sel.style.display = 'none';

    function syncLabel() {
      var opt = sel.options[sel.selectedIndex];
      if (!opt || opt.value === '') {
        var ph = sel.querySelector('option[value=""]');
        labelEl.textContent = ph ? ph.text : '—';
        trigger.classList.add('csel-placeholder');
      } else {
        labelEl.textContent = opt.text;
        trigger.classList.remove('csel-placeholder');
      }
    }

    function buildOptions() {
      dropdown.innerHTML = '';
      Array.from(sel.options).forEach(function (opt) {
        var item = document.createElement('div');
        var isPlaceholder = opt.value === '' || opt.disabled;
        item.className = 'csel-option'
          + (opt.value === sel.value && opt.value !== '' ? ' selected' : '')
          + (isPlaceholder ? ' csel-ph' : '');
        item.textContent = opt.text;
        if (!isPlaceholder) {
          item.addEventListener('click', function (e) {
            e.stopPropagation();
            sel.value = opt.value;
            sel.dispatchEvent(new Event('change', { bubbles: true }));
            close();
            syncLabel();
            buildOptions();
          });
        }
        dropdown.appendChild(item);
      });
      syncLabel();
    }

    function open() {
      document.querySelectorAll('.csel-wrap.open').forEach(function (w) {
        if (w !== wrap) w.classList.remove('open');
      });
      buildOptions();
      wrap.classList.add('open');
    }

    function close() {
      wrap.classList.remove('open');
    }

    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      wrap.classList.contains('open') ? close() : open();
    });

    dropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    document.addEventListener('click', close);

    trigger.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); wrap.classList.contains('open') ? close() : open(); }
      if (e.key === 'Escape') close();
    });

    // Rebuild when options are dynamically repopulated (e.g. cascading selects)
    new MutationObserver(function () {
      buildOptions();
    }).observe(sel, { childList: true });

    buildOptions();
  }

  function initAllCustomSelects(root) {
    var ctx = root || document;
    ctx.querySelectorAll('select.form-select, select.filter-select').forEach(initCustomSelect);
  }

  window.initCustomSelect = initCustomSelect;
  window.initAllCustomSelects = initAllCustomSelects;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { initAllCustomSelects(); });
  } else {
    initAllCustomSelects();
  }
})();
