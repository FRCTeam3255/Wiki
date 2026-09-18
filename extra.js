document.addEventListener('DOMContentLoaded', function () {
    var breadcrumbs = document.querySelector('div[role="navigation"] ul.wy-breadcrumbs');
    if (!breadcrumbs) return;

    var btnItem = document.createElement('li');
    btnItem.className = 'wy-breadcrumbs-aside';

    var btn = document.createElement('a');
    btn.href = '#';
    btn.innerHTML = 'Present as Slides';
    btn.style.cssText = 'background: #2980b9; color: white; padding: 3px 10px; border-radius: 4px; font-weight: bold; text-decoration: none; font-size: 12px;';

    btn.addEventListener('click', function (e) {
        e.preventDefault();
        launchSlidePresentation();
    });

    btnItem.appendChild(btn);
    breadcrumbs.appendChild(btnItem);
});

function launchSlidePresentation() {
    // Grab main article content
    var article = document.querySelector('div[itemprop="articleBody"]');
    if (!article) return;

    // Build slides overlay
    var overlay = document.createElement('div');
    overlay.id = 'slide-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;background:#1e1e1e;color:#ffffff;z-index:99999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px;box-sizing:border-box;font-family:sans-serif;';

    // Split content by H1, H2, or HR elements into separate slide chunks
    var children = Array.from(article.children);
    var slides = [];
    var currentSlide = document.createElement('div');

    children.forEach(function (child) {
        var tag = child.tagName.toLowerCase();
        if ((tag === 'h1' || tag === 'h2' || tag === 'hr') && currentSlide.children.length > 0) {
            slides.push(currentSlide);
            currentSlide = document.createElement('div');
        }
        if (tag !== 'hr') {
            currentSlide.appendChild(child.cloneNode(true));
        }
    });
    if (currentSlide.children.length > 0) slides.push(currentSlide);

    var currentIndex = 0;

    function renderSlide(index) {
        overlay.innerHTML = '';

        // Close button
        var closeBtn = document.createElement('button');
        closeBtn.innerText = '✕ Exit';
        closeBtn.style.cssText = 'position:absolute;top:20px;right:20px;background:#e74c3c;color:#fff;border:none;padding:8px 16px;border-radius:4px;cursor:pointer;font-weight:bold;';
        closeBtn.onclick = function () {
            document.body.removeChild(overlay);
            document.removeEventListener('keydown', handleKey);
        };
        overlay.appendChild(closeBtn);

        // Slide Counter
        var counter = document.createElement('div');
        counter.innerText = (index + 1) + ' / ' + slides.length;
        counter.style.cssText = 'position:absolute;bottom:20px;right:30px;font-size:14px;color:#888;';
        overlay.appendChild(counter);

        // Slide Container
        var container = slides[index].cloneNode(true);
        container.style.cssText = 'max-width:900px;width:100%;font-size:1.6em;line-height:1.6;';

        // Ensure headings stand out inside dark slides
        var headings = container.querySelectorAll('h1, h2, h3');
        headings.forEach(function (h) { h.style.color = '#3498db'; });

        overlay.appendChild(container);
    }

    function handleKey(e) {
        if (e.key === 'ArrowRight' || e.key === 'Space') {
            if (currentIndex < slides.length - 1) {
                currentIndex++;
                renderSlide(currentIndex);
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentIndex > 0) {
                currentIndex--;
                renderSlide(currentIndex);
            }
        } else if (e.key === 'Escape') {
            if (document.getElementById('slide-overlay')) {
                document.body.removeChild(overlay);
                document.removeEventListener('keydown', handleKey);
            }
        }
    }

    document.addEventListener('keydown', handleKey);
    document.body.appendChild(overlay);
    renderSlide(0);
}