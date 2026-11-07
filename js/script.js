// Kopi Nusantara — interaksi sederhana tanpa database.
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.kn-navbar');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  const updateNavbar = () => {
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 30);
  };
  updateNavbar();
  window.addEventListener('scroll', updateNavbar, { passive: true });

  // Tutup menu mobile setelah salah satu tautan navigasi dipilih.
  document.querySelectorAll('#mainNav .nav-link, #mainNav .btn').forEach((link) => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      if (nav && nav.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Ganti nomor di bawah dengan nomor WhatsApp resmi kedai (format internasional tanpa +).
  const whatsappNumber = '6280000000000';
  const whatsappLink = document.getElementById('whatsappLink');
  if (whatsappLink) {
    whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Kopi Nusantara, saya ingin bertanya tentang menu.')}`;
  }
});
