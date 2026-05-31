const yearNode = document.getElementById('year');
const currentYear = new Date().getFullYear();

if (yearNode) {
  yearNode.textContent = `© ${currentYear} Sudhanshu Dwivedi`;
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${entry.target.id}`;
        link.style.color = active ? 'var(--text)' : 'var(--muted)';
      });
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => observer.observe(section));

const certificateLinks = Array.from(document.querySelectorAll('[data-cert-src]'));
const certificateLightbox = document.getElementById('certificateLightbox');
const certificateLightboxBody = document.getElementById('certificateLightboxBody');
const certificateLightboxTitle = document.getElementById('certificateLightboxTitle');
const prevCertificateButton = document.querySelector('[data-prev-certificate]');
const nextCertificateButton = document.querySelector('[data-next-certificate]');
const closeCertificateButtons = document.querySelectorAll('[data-close-certificate]');

let activeCertificateIndex = 0;

function renderCertificate(index) {
  if (!certificateLinks.length) {
    return;
  }

  activeCertificateIndex = (index + certificateLinks.length) % certificateLinks.length;
  const link = certificateLinks[activeCertificateIndex];
  const type = link.dataset.certType;
  const src = link.dataset.certSrc;
  const title = link.dataset.certTitle || 'Certificate';

  certificateLightboxTitle.textContent = title;
  certificateLightboxBody.innerHTML = '';

  if (type === 'pdf') {
    const pdfPanel = document.createElement('div');
    pdfPanel.className = 'certificate-lightbox-pdf';
    pdfPanel.innerHTML = `
      <div class="certificate-pdf-badge certificate-pdf-badge-large" aria-hidden="true">PDF</div>
      <strong>${title}</strong>
      <p>Preview not shown inside the page. Open the PDF in a new tab to view it clearly.</p>
      <a class="certificate-open-btn" href="${src}" target="_blank" rel="noreferrer">Open PDF</a>
    `;
    certificateLightboxBody.appendChild(pdfPanel);
    return;
  }

  const image = document.createElement('img');
  image.src = src;
  image.alt = title;
  certificateLightboxBody.appendChild(image);
}

function openCertificate(index) {
  if (!certificateLightbox || !certificateLinks.length) {
    return;
  }

  renderCertificate(index);
  certificateLightbox.classList.add('is-open');
  certificateLightbox.setAttribute('aria-hidden', 'false');
}

function closeCertificate() {
  if (!certificateLightbox) {
    return;
  }

  certificateLightbox.classList.remove('is-open');
  certificateLightbox.setAttribute('aria-hidden', 'true');
  certificateLightboxBody.innerHTML = '';
}

certificateLinks.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openCertificate(index);
  });
});

prevCertificateButton?.addEventListener('click', () => renderCertificate(activeCertificateIndex - 1));
nextCertificateButton?.addEventListener('click', () => renderCertificate(activeCertificateIndex + 1));
closeCertificateButtons.forEach((button) => button.addEventListener('click', closeCertificate));

document.addEventListener('keydown', (event) => {
  if (!certificateLightbox?.classList.contains('is-open')) {
    return;
  }

  if (event.key === 'Escape') {
    closeCertificate();
  }

  if (event.key === 'ArrowLeft') {
    renderCertificate(activeCertificateIndex - 1);
  }

  if (event.key === 'ArrowRight') {
    renderCertificate(activeCertificateIndex + 1);
  }
});
