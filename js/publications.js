(function () {
  'use strict';

  function initPublications() {
    fetch('/data/publications.json')
      .then(function (res) { return res.json(); })
      .then(function (pubs) {
        renderPublications(pubs);
        bindCiteModals();
        if (window.MathJax && MathJax.typesetPromise) {
          MathJax.typesetPromise();
        }
      })
      .catch(function (err) {
        console.error('Failed to load publications:', err);
        var container = document.getElementById('publications-container');
        if (container) {
          container.innerHTML = '<p>Failed to load publications. Please try refreshing the page.</p>';
        }
      });
  }

  function renderPublications(publications) {
    var container = document.getElementById('publications-container');
    if (!container) return;

    var byYear = {};
    publications.forEach(function (pub) {
      if (!byYear[pub.year]) byYear[pub.year] = [];
      byYear[pub.year].push(pub);
    });

    var years = Object.keys(byYear).map(Number).sort(function (a, b) { return b - a; });
    var fragment = document.createDocumentFragment();

    years.forEach(function (year) {
      var heading = document.createElement('h3');
      heading.textContent = year;
      fragment.appendChild(heading);

      byYear[year].forEach(function (pub) {
        fragment.appendChild(createPublicationElement(pub));
      });
    });

    container.appendChild(fragment);
  }

  function createPublicationElement(pub) {
    var p = document.createElement('p');

    var h5 = document.createElement('h5');
    var b = document.createElement('b');
    b.innerHTML = pub.title;
    h5.appendChild(b);
    p.appendChild(h5);

    var authorsNode = document.createDocumentFragment();
    highlightAuthor(authorsNode, pub.authors, 'Yanai Elazar');
    p.appendChild(authorsNode);
    p.appendChild(document.createElement('br'));

    var venueText = pub.venue;
    if (pub.award) venueText += ' ' + pub.award;
    p.appendChild(document.createTextNode(venueText));

    if (pub.note) {
      p.appendChild(document.createElement('br'));
      var noteSpan = document.createElement('span');
      noteSpan.innerHTML = pub.note;
      p.appendChild(noteSpan);
    }

    p.appendChild(document.createElement('br'));
    appendBadges(p, pub);

    return p;
  }

  function highlightAuthor(parent, authorsStr, name) {
    var parts = authorsStr.split(name);
    if (parts.length === 1) {
      parent.appendChild(document.createTextNode(authorsStr));
      return;
    }
    for (var i = 0; i < parts.length; i++) {
      if (i > 0) {
        var u = document.createElement('u');
        var em = document.createElement('i');
        em.textContent = name;
        u.appendChild(em);
        parent.appendChild(u);
      }
      // Handle asterisk prefix: if part ends with '*', move it before the <u>
      var text = parts[i];
      if (i < parts.length - 1 && text.endsWith('*')) {
        parent.appendChild(document.createTextNode(text.slice(0, -1)));
        var asterisk = document.createTextNode('*');
        parent.appendChild(asterisk);
      } else {
        parent.appendChild(document.createTextNode(text));
      }
    }
  }

  function makeBadge(label, classes, href) {
    if (href) {
      var a = document.createElement('a');
      a.href = href;
      var span = document.createElement('span');
      span.className = classes;
      span.textContent = label;
      a.appendChild(span);
      return a;
    }
    var span = document.createElement('span');
    span.className = classes;
    span.textContent = label;
    return span;
  }

  function makeBibtexButton(bibFile) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'badge rounded-pill text-bg-warning btn my-1 me-1 btn-sm js-cite-modal';
    btn.setAttribute('data-filename', bibFile);
    btn.textContent = 'bibtex';
    return btn;
  }

  function appendBadges(el, pub) {
    var links = pub.links || {};

    // paper
    if (links.paper) {
      el.appendChild(makeBadge('paper', 'badge rounded-pill text-bg-primary', links.paper));
      el.appendChild(document.createTextNode('\n'));
    }

    // bibtex
    el.appendChild(makeBibtexButton(pub.bibtex));
    el.appendChild(document.createTextNode('\n'));

    // paperType
    if (pub.paperType) {
      var typeClasses = {
        journal: 'badge rounded-pill text-bg-info',
        long: 'badge rounded-pill text-bg-dark',
        short: 'badge rounded-pill text-bg-secondary',
        workshop: 'badge rounded-pill text-bg-dark'
      };
      var cls = typeClasses[pub.paperType] || 'badge rounded-pill text-bg-dark';
      el.appendChild(makeBadge(pub.paperType, cls, pub.paperTypeUrl || null));
      el.appendChild(document.createTextNode('\n'));
    }

    // code
    if (links.code) {
      el.appendChild(makeBadge('code', 'badge rounded-pill text-bg-success', links.code));
      el.appendChild(document.createTextNode('\n'));
    }

    // resource
    if (links.resource) {
      el.appendChild(makeBadge('resource', 'badge rounded-pill text-bg-danger', links.resource));
      el.appendChild(document.createTextNode('\n'));
    }

    // models
    if (links.models) {
      el.appendChild(makeBadge('models', 'badge rounded-pill badge-project', links.models));
      el.appendChild(document.createTextNode('\n'));
    }

    // featured
    if (links.featured) {
      el.appendChild(makeBadge('featured', 'badge rounded-pill badge-featured', links.featured));
      el.appendChild(document.createTextNode('\n'));
    }

    // demo
    if (links.demo) {
      el.appendChild(makeBadge('demo', 'badge rounded-pill badge-demo', links.demo));
      el.appendChild(document.createTextNode('\n'));
    }

    // extraDemos
    if (pub.extraDemos) {
      pub.extraDemos.forEach(function (d) {
        el.appendChild(makeBadge(d.label, 'badge rounded-pill badge-demo', d.url));
        el.appendChild(document.createTextNode('\n'));
      });
    }

    // webpage
    if (links.webpage) {
      el.appendChild(makeBadge('webpage', 'badge rounded-pill badge-demo', links.webpage));
      el.appendChild(document.createTextNode('\n'));
    }

    // blog
    if (links.blog) {
      el.appendChild(makeBadge('blog', 'badge rounded-pill badge-project', links.blog));
      el.appendChild(document.createTextNode('\n'));
    }

    // projectPage
    if (links.projectPage) {
      el.appendChild(makeBadge('project-page', 'badge rounded-pill badge-project', links.projectPage));
      el.appendChild(document.createTextNode('\n'));
    }

    // slides / poster
    if (links.slides) {
      var slidesLabel = links.slidesLabel || 'slides';
      el.appendChild(makeBadge(slidesLabel, 'badge rounded-pill badge-slides', links.slides));
      el.appendChild(document.createTextNode('\n'));
    }

    // video
    if (links.video) {
      el.appendChild(makeBadge('video', 'badge rounded-pill badge-video', links.video));
      el.appendChild(document.createTextNode('\n'));
    }

    // press
    if (pub.press && pub.press.length) {
      el.appendChild(document.createElement('br'));
      el.appendChild(document.createTextNode('Press: '));
      pub.press.forEach(function (item) {
        el.appendChild(makeBadge(item.name, 'badge rounded-pill text-bg-info', item.url));
        el.appendChild(document.createTextNode('\n'));
      });
    }
  }

  function bindCiteModals() {
    $(document).on('click', '.js-cite-modal', function (e) {
      e.preventDefault();
      var filename = $(this).attr('data-filename');
      if (!filename) return;

      var $modal = $('#modal');
      var $codeEl = $modal.find('.modal-body pre code');
      var $downloadBtn = $modal.find('.js-download-cite');
      var $errorEl = $modal.find('#modal-error');

      $errorEl.html('');
      $codeEl.text('Loading...');
      $downloadBtn.attr('href', filename);

      $.get(filename)
        .done(function (data) {
          $codeEl.text(data);
        })
        .fail(function () {
          $codeEl.text('');
          $errorEl.html('<div class="alert alert-danger">Could not load citation file.</div>');
        });

      $modal.modal('show');
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPublications);
  } else {
    initPublications();
  }
})();
