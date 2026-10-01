import { useEffect, useState } from 'react';
import profilePhoto from '../WhatsApp Image 2026-10-01 at 18.54.58.jpeg';

const skills = ['C++', 'PHP', 'Python', 'HTML', 'CSS', 'JavaScript', 'IoT'];
const leadership = [
  {
    role: 'Koordinator Komisi',
    organization: 'MPK',
    period: '2024–2025',
  },
  {
    role: 'Ketua Ekstrakurikuler',
    organization: 'Petanque',
    period: '2025–2026',
  },
];
const experiences = [
  {
    name: 'RevoU — Web Development Training',
    type: 'Pelatihan',
    period: '17–24 Agustus 2026',
    description: 'Mengikuti pelatihan Web Development dengan mempelajari dasar pembuatan website, programming, serta proses pengembangan aplikasi web melalui latihan dan praktik.',
  },
  {
    name: 'Rolling Vol. 13 — Basic IoT System Training',
    type: 'Workshop',
    period: '2026',
    description: 'Mengikuti pelatihan mengenai dasar sistem IoT, termasuk cara kerja sensor, mikrokontroler, serta bagaimana perangkat elektronik dapat terhubung dan bekerja sebagai sebuah sistem.',
  },
  {
    name: 'MaestroFest — IoT Competition',
    type: 'Kompetisi',
    period: '21 Agustus 2026 – sekarang',
    description: 'Mengikuti kompetisi IoT dengan mengembangkan sebuah sistem berbasis IoT, mulai dari perancangan konsep, perakitan perangkat, integrasi sensor dan mikrokontroler, hingga pengembangan serta pengujian prototype.',
  },
  {
    name: 'LKS CRSI — Training bersama Alpha Mechatronics',
    type: 'Pelatihan',
    period: '14–16 September 2026',
    description: 'Mengikuti pelatihan Collaborative Robot System Integration untuk mempelajari pengoperasian, pemrograman, dan integrasi robot kolaboratif dengan sistem otomasi.',
  },
  {
    name: 'Samsung Innovation Campus — Batch 8',
    type: 'Program',
    period: '18 Agustus – 30 September 2026',
    description: 'Mengikuti program pelatihan teknologi yang berfokus pada programming dan computational thinking melalui pembelajaran serta latihan coding sebagai persiapan menuju pembelajaran IoT dan AI.',
  },
  {
    name: 'Inception Trisakti — School Profile Website',
    type: 'Proyek',
    period: '24 September 2026 – sekarang',
    description: 'Mengikuti kegiatan pengembangan website dengan membuat website profil sekolah, mulai dari perancangan tampilan, pengembangan fitur, hingga implementasi website agar dapat menyajikan informasi sekolah secara interaktif.',
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="shell topbar">
      <nav
        className={`nav-links${isMenuOpen ? ' is-open' : ''}`}
        id="site-nav"
        aria-label="Navigasi utama"
      >
        <a href="#tentang" onClick={closeMenu}>Tentang</a>
        <a href="#pengalaman" onClick={closeMenu}>Pengalaman</a>
        <a href="#proyek" onClick={closeMenu}>Proyek</a>
        <a href="#kontak" onClick={closeMenu}>Kontak</a>
      </nav>
      <a className="nav-contact" href="mailto:rizkizain71@gmail.com">
        Hubungi saya <span aria-hidden="true">↗</span>
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
        aria-expanded={isMenuOpen}
        aria-controls="site-nav"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        ☰
      </button>
    </header>
  );
}

function Hero() {
  return (
    <section className="shell hero" id="home">
      <div className="hero-text reveal">
        <div className="eyebrow">Siswa RPL SMKN 1 Jakarta</div>
        <h1>Membangun hal <span>berguna</span> dari rasa ingin tahu.</h1>
        <p className="hero-copy">
          Saya Muhammad Rizki Zain, siswa Rekayasa Perangkat Lunak yang senang merangkai kode,
          teknologi, dan ide menjadi proyek yang punya dampak nyata.
        </p>
        <div className="hero-actions">
          <a className="button-primary" href="#proyek">Lihat proyek saya <span aria-hidden="true">↘</span></a>
          <a className="text-link" href="#tentang">Kenali saya</a>
        </div>
      </div>
      <div className="hero-visual reveal">
        <img
          className="hero-photo"
          src={profilePhoto}
          alt="Muhammad Rizki Zain mengenakan seragam olahraga di lapangan"
          fetchPriority="high"
        />
        <span className="photo-label">Muhammad Rizki Zain</span>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section className="skills-band" aria-label="Teknologi yang saya pelajari">
      <div className="shell skills-inner">
        <span className="skills-label">Bidang yang saya pelajari</span>
        <ul className="skill-list">
          {skills.map((skill) => <li className="skill-chip" key={skill}>{skill}</li>)}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="shell section reveal" id="tentang">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Sedikit tentang saya</p>
          <h2>Belajar dengan<br />cara membangun.</h2>
        </div>
        <p className="section-intro">
          Buat saya, cara terbaik memahami teknologi adalah menggunakannya untuk menjawab persoalan
          di sekitar kita.
        </p>
      </div>
      <div className="about-grid">
        <div className="about-aside">
          <p>Saat ini menempuh pendidikan di SMKN 1 Jakarta, jurusan Rekayasa Perangkat Lunak.</p>
          <span className="index">01 — 03</span>
        </div>
        <div className="about-copy">
          <p>Saya tertarik pada pertemuan antara software, perangkat, dan kehidupan sehari-hari.</p>
          <p>
            Ketertarikan itu membawa saya membuat proyek IoT untuk pemanfaatan energi terbarukan,
            dengan pemantauan melalui web. Dari merancang alur data sampai menyusun antarmuka, saya
            menikmati proses mengubah ide menjadi sesuatu yang bisa dicoba dan terus dikembangkan.
          </p>
          <div className="about-facts">
            <div className="fact"><strong>Rekayasa Perangkat Lunak</strong><span>Bidang yang saya pelajari</span></div>
            <div className="fact"><strong>Web &amp; IoT</strong><span>Area eksplorasi utama</span></div>
            <div className="fact"><strong>Terus bertumbuh</strong><span>Belajar lewat proyek nyata</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Project() {
  return (
    <section className="project-section" id="proyek">
      <div className="shell project-layout project-layout--solo">
        <div className="project-copy reveal">
          <p className="section-kicker">Proyek pilihan · 01</p>
          <h2>Pemantauan energi terbarukan berbasis IoT.</h2>
          <p>
            Eksperimen IoT yang menghubungkan pemanfaatan energi terbarukan dengan pemantauan
            melalui web. Proyek ini menjadi ruang belajar saya untuk menghubungkan perangkat,
            mengolah data, dan menampilkan informasi secara lebih mudah dipahami.
          </p>
          <div className="project-meta">
            <span>Internet of Things</span>
            <span>Web monitoring</span>
            <span>Energi berkelanjutan</span>
          </div>
          <a
            className="project-link"
            href="https://github.com/rizkizain71-dotcom?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            Jelajahi repositori <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="shell experience-section" id="pengalaman">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Pengalaman sekolah &amp; luar sekolah</p>
          <h2>Belajar lewat<br />pengalaman.</h2>
        </div>
        <p className="section-intro">
          Pengalaman berorganisasi dan mengikuti kegiatan teknologi membentuk cara saya belajar,
          bekerja sama, dan mengambil tanggung jawab.
        </p>
      </div>
      <h3 className="experience-group-title">Organisasi &amp; Kepemimpinan</h3>
      <div className="experience-list experience-list--leadership">
        {leadership.map((position, index) => (
          <article className="experience-item" key={position.organization}>
            <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="experience-details">
              <div className="experience-heading">
                <h3>{position.role}</h3>
                <span className="experience-type">{position.period}</span>
              </div>
              <p>{position.organization}</p>
            </div>
          </article>
        ))}
      </div>
      <h3 className="experience-group-title">Workshop, Kompetisi &amp; Program</h3>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-item" key={experience.name}>
            <span className="experience-number">{String(index + 1).padStart(2, '0')}</span>
            <div className="experience-details">
              <div className="experience-heading">
                <h3>{experience.name}</h3>
                <span className="experience-type">{experience.type} · {experience.period}</span>
              </div>
              <p>{experience.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="kontak">
      <div className="shell contact-content reveal">
        <div>
          <p className="section-kicker">Terbuka untuk terhubung</p>
          <h2>Punya ide menarik? Mari ngobrol.</h2>
          <p className="contact-copy">
            Saya senang bertemu orang baru, bertukar ide, dan belajar dari proyek berikutnya.
          </p>
        </div>
        <div className="contact-links" aria-label="Informasi kontak">
          <a href="mailto:rizkizain71@gmail.com">
            <span className="contact-link-label">Email</span>
            <span className="contact-link-value">rizkizain71@gmail.com</span>
          </a>
          <a href="https://github.com/rizkizain71-dotcom?tab=repositories" target="_blank" rel="noreferrer">
            <span className="contact-link-label">GitHub</span>
            <span className="contact-link-value">rizkizain71-dotcom ↗</span>
          </a>
          <a href="https://www.instagram.com/zann____91/" target="_blank" rel="noreferrer">
            <span className="contact-link-label">Instagram</span>
            <span className="contact-link-value">@zann____91 ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="shell footer-inner">
        <span>© {new Date().getFullYear()} Muhammad Rizki Zain</span>
        <div className="socials">
          <a href="https://github.com/rizkizain71-dotcom?tab=repositories" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.instagram.com/zann____91/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <a href="mailto:rizkizain71@gmail.com">Email ↗</a>
        </div>
      </div>
    </footer>
  );
}

function useRevealOnScroll() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useRevealOnScroll();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <About />
        <Experience />
        <Project />
        <Contact />
      </main>
      <Footer />
    </>
  );
}