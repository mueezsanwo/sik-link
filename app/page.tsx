const services = [
  { icon: "⌨", title: "Web Development", body: "We build fast, responsive and modern websites that deliver results." },
  { icon: "▤", title: "Printing & Branding", body: "High quality printing and branding solutions that promote your business." },
  { icon: "◉", title: "IT Support", body: "Reliable IT support and maintenance to keep your business running." },
  { icon: "▣", title: "Digital Payment Solutions", body: "We supply, install and maintain secure digital payment devices." },
  { icon: "✎", title: "Graphics Design", body: "Creative and professional designs that bring your ideas to life." },
  { icon: "▥", title: "General Contracts", body: "General contract services for office, infrastructure and technology." },
];

const projects = [
  { kind: "Web Development", title: "Corporate Website", art: "web" },
  { kind: "Printing & Branding", title: "Company Rebranding", art: "print" },
  { kind: "Digital Payment Solution", title: "POS Installation", art: "pos" },
  { kind: "Graphics Design", title: "Brand Identity", art: "brand" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="SIKLINK home">
          <img src="/siklink-logo.jpeg" alt="" />
          <span><b>SIK<span>LINK</span></b><small>TECHNOLOGY. CONNECTED.</small></span>
        </a>
        <nav aria-label="Main navigation">
          <a className="selected" href="#home">Home</a><a href="#about">About Us</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#blog">Blog</a><a href="#contact">Contact</a>
        </nav>
        <a className="quote-button" href="#contact">Get a Quote <span>→</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-network" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">WELCOME TO SIKLINK</p>
          <h1>Solutions That<br /><em>Connect</em> Your World</h1>
          <p className="hero-description">We provide innovative IT services, creative design, printing, and digital solutions that help businesses grow and stand out in a connected world.</p>
          <div className="hero-buttons"><a className="orange-button" href="#services">Explore Services <span>→</span></a><a className="outline-button" href="#contact">Contact Us <span>→</span></a></div>
        </div>
        <div className="device-scene" aria-label="SIKLINK displayed on a laptop and phone">
          <div className="device-glow" />
          <div className="laptop"><div className="laptop-screen"><div className="screen-shape" /><div className="screen-copy"><img src="/siklink-logo.jpeg" alt="SIKLINK" /><b>Technology.<br />Connected.</b></div></div><div className="laptop-base" /></div>
          <div className="phone"><div className="phone-camera" /><img src="/siklink-logo.jpeg" alt="" /><small>SIKLINK</small><i /></div>
          <span className="device-tag">TECHNOLOGY · DESIGN · PRINT</span>
        </div>
        <div className="hero-corner" />
      </section>

      <section className="services section" id="services">
        <div className="section-title"><span>WHAT WE DO</span><h2>Our Services</h2><i /></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.title}><div className="service-icon">{service.icon}</div><h3>{service.title}</h3><p>{service.body}</p><a href="#contact">Read More <span>→</span></a></article>)}</div>
      </section>

      <section className="about section" id="about">
        <div className="about-visual"><div className="office-lights" /><div className="office-wall"><div className="office-sign"><img src="/siklink-logo.jpeg" alt="" /><b>SIK<span>LINK</span></b><small>TECHNOLOGY. CONNECTED.</small></div><div className="office-window" /></div><div className="office-desk" /><a className="play-button" href="#projects" aria-label="View our projects">▶</a><span className="visual-caption">A CONNECTED PARTNER FOR YOUR BUSINESS</span></div>
        <div className="about-copy"><span className="kicker">ABOUT US</span><h2>We Are SIKLINK</h2><p>SIKLINK is a forward-thinking company delivering innovative technology, creative and digital solutions tailored to meet the needs of modern businesses and organizations.</p><ul><li>Customer Focused</li><li>Quality &amp; Reliability</li><li>Innovation &amp; Creativity</li><li>On-time Delivery</li></ul></div>
        <div className="stats"><div><b>⌑</b><strong>150+</strong><span>Projects Completed</span></div><div><b>☺</b><strong>98%</strong><span>Client Satisfaction</span></div><div><b>♧</b><strong>5+</strong><span>Years Experience</span></div><div><b>♧</b><strong>50+</strong><span>Happy Clients</span></div></div>
      </section>

      <section className="projects section" id="projects">
        <div className="section-title"><span>FEATURED PROJECTS</span><h2>Our Recent Projects</h2></div>
        <div className="project-grid">{projects.map((project) => <a href="#contact" className={`project-card ${project.art}`} key={project.title}><div className="project-image"><div className="project-art-content"><span className="mock-brand">SIK<span>LINK</span></span><i /><b>{project.art === "pos" ? "₦" : project.art === "print" ? "BRAND\nSTUDIO" : project.art === "web" ? "DIGITAL\nSOLUTIONS" : "YOUR\nIDENTITY"}</b></div></div><div className="project-label"><small>{project.kind}</small><strong>{project.title}</strong></div></a>)}</div>
        <a className="all-projects" href="#contact">View All Projects <span>→</span></a>
      </section>

      <section className="trust-strip"><div><b>◇</b><span><strong>Trusted by</strong><small>Businesses</small></span></div><div><b>♧</b><span><strong>Quality Services</strong><small>You Can Rely On</small></span></div><div><b>◷</b><span><strong>We Deliver</strong><small>On Time</small></span></div><div><b>◉</b><span><strong>24/7 Support</strong><small>Always Here</small></span></div></section>

      <section className="contact-banner" id="contact"><div className="contact-mark">↗</div><div><h2>Ready to start your project with us?</h2><p>Let’s build something amazing together.</p></div><a href="mailto:info@siklink.com?subject=Get%20a%20quote">Get a Free Quote <span>→</span></a></section>

      <footer className="footer" id="blog"><div className="footer-main"><div className="footer-about"><a className="brand" href="#home"><img src="/siklink-logo.jpeg" alt="" /><span><b>SIK<span>LINK</span></b><small>TECHNOLOGY. CONNECTED.</small></span></a><p>We provide technology, creative and digital solutions that connect ideas to the world.</p><div className="socials"><a href="#contact">f</a><a href="#contact">𝕏</a><a href="#contact">in</a><a href="#contact">◎</a></div></div><div className="footer-column"><h3>Quick Links</h3><a href="#home">Home</a><a href="#about">About Us</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#blog">Blog</a><a href="#contact">Contact</a></div><div className="footer-column"><h3>Our Services</h3><a href="#services">Web Development</a><a href="#services">Printing &amp; Branding</a><a href="#services">IT Support</a><a href="#services">Digital Payment Solutions</a><a href="#services">Graphics Design</a><a href="#services">General Contracts</a></div><div className="footer-column contact-details"><h3>Contact Us</h3><span>⌖ &nbsp; Lagos, Nigeria</span><a href="mailto:info@siklink.com">✉ &nbsp; info@siklink.com</a><a href="#contact">↗ &nbsp; Let’s discuss your project</a></div><div className="newsletter"><h3>Newsletter</h3><p>Subscribe to get updates and latest news.</p><form action="mailto:info@siklink.com" method="get"><input aria-label="Your email" type="email" placeholder="Enter your email" /><button aria-label="Subscribe">➤</button></form></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} SIKLINK. All Rights Reserved.</span><a href="#home">Back to top ↑</a></div></footer>
    </main>
  );
}
