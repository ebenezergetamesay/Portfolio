import { motion } from 'framer-motion';
import me from './assets/me.jpg';

export function AboutMePage() {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '40+', label: 'Projects Completed' },
    { number: '15+', label: 'Clients Worked With' },
    { number: '100%', label: 'Passion Driven' },
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Started Full Stack Development',
      desc: 'Focused on backend systems, ASP.NET, databases, and modern frontend frameworks.',
    },
    {
      year: '2022',
      title: 'Entered Creative Media',
      desc: 'Expanded into cinematic editing, 3D rendering, branding, and visual storytelling.',
    },
    {
      year: '2023',
      title: 'Built AI Projects',
      desc: 'Started integrating AI systems into scalable products and automation workflows.',
    },
    {
      year: '2024',
      title: 'Freelance & Product Growth',
      desc: 'Worked with startups and creators building modern, visually striking digital experiences.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,115,0,0.12),transparent_45%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="uppercase tracking-[0.3em] text-orange-400 text-xs mb-4">
              Get To Know Me
            </p>

            <h1 className="text-6xl md:text-7xl font-black leading-[0.95] mb-8">
              About
              <span className="text-orange-500"> Me.</span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              I’m a developer and digital creator obsessed with building experiences that feel modern, cinematic, and impactful.
            </p>

            <p className="text-zinc-500 leading-relaxed mb-8">
              My workflow blends software engineering, visual design, AI systems, and content creation into one unified creative process. I enjoy creating products that are both technically strong and visually unforgettable.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-6 shadow-2xl shadow-black/40 hover:shadow-orange-500/10 hover:-translate-y-2 transition duration-500"
                >
                  <h3 className="text-4xl font-black text-orange-400 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-zinc-500 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[420px] h-[420px] bg-orange-500/20 blur-3xl rounded-full" />

            <img
              src="/mnt/data/Gemini_Generated_Image_pukvzppukvzppukv.png"
              alt="about portrait"
              className="relative z-10 rounded-[2rem] object-cover h-[700px] w-full max-w-[520px] border border-orange-500/20 shadow-[0_0_90px_rgba(255,115,0,0.25)] hover:scale-[1.02] transition duration-700"
            />
          </div>
        </div>

        <section className="mb-20">
          <h2 className="text-4xl font-black mb-10">
            My <span className="text-orange-500">Journey</span>
          </h2>

          <div className="space-y-6">
            {timeline.map((item) => (
              <div
                key={item.year}
                className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-8 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 transition duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <span className="text-orange-400 font-semibold text-lg">
                    {item.year}
                  </span>
                </div>

                <p className="text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {[
            'Creative Development',
            'AI Automation',
            'Cinematic Storytelling',
          ].map((skill) => (
            <div
              key={skill}
              className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10 transition duration-500"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-3xl text-orange-400 mb-6">
                ✦
              </div>

              <h3 className="text-2xl font-bold mb-4">{skill}</h3>

              <p className="text-zinc-500 leading-relaxed">
                Building visually immersive and technically advanced digital experiences.
              </p>
            </div>
          ))}
        </section>
      </div>
    </motion.div>
  );
}

export default function PortfolioWebsite() {
  const services = [
    {
      title: 'Web Applications',
      desc: 'Scalable and modern web platforms built with clean architecture and performance in mind.',
      icon: '</>',
    },
    {
      title: '3D Renders',
      desc: 'High-quality 3D visuals and cinematic product renders using Blender and modern pipelines.',
      icon: '◫',
    },
    {
      title: 'Video Editing',
      desc: 'Engaging edits optimized for YouTube, TikTok, and cinematic storytelling.',
      icon: '▶',
    },
    {
      title: 'AI-Powered Apps',
      desc: 'Intelligent automation and AI integrations for real-world products.',
      icon: 'AI',
    },
  ];

  const projects = [
    {
  title: 'Crypto Spatial Arbitrage Bot',
  desc: 'Automated trading bot that scans price differences across exchanges and executes spatial arbitrage opportunities in real time.',
  image:
    'https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1200&auto=format&fit=crop',
},
    {
      title: 'KidSafe AI Platform',
      desc: 'AI moderation and safety platform for video communication systems.',
      image:
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Analytics Dashboard',
      desc: 'Modern dashboard with live metrics and detailed business insights.',
      image:
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: '3D Product Renders',
      desc: 'Photorealistic product visuals for marketing and branding.',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const tools = [
    'C#',
    '.NET',
    'SQL',
    'JavaScript',
    'React',
    'Node.js',
    'Blender',
    'CapCut',
    'GitHub',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-black text-white font-sans overflow-x-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,115,0,0.25),transparent_35%)] pointer-events-none" />

      <header className="sticky top-0 z-50 backdrop-blur border-b border-orange-500/10 bg-black/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Hello<span className="text-orange-500">.</span>
          </h1>

          <nav className="hidden md:flex gap-8 text-sm text-zinc-300">
            <a href="#home" className="hover:text-orange-400 transition">Home</a>
            <a href="#about" className="hover:text-orange-400 transition">About</a>
            <a href="#projects" className="hover:text-orange-400 transition">Projects</a>
            <a href="#tools" className="hover:text-orange-400 transition">Tools</a>
            <a href="#contact" className="hover:text-orange-400 transition">Contact</a>
          </nav>

            <a
              href="https://www.linkedin.com/in/ebenezer-getamesay-228018292/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-orange-500 text-orange-400 px-5 py-2 rounded-xl hover:bg-orange-500 hover:text-black hover:shadow-lg hover:shadow-orange-500/20 transition duration-300 font-medium inline-block"
            >
              Contact Me
            </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pt-14 pb-20 relative z-10">
        <section
          id="home"
          className="grid lg:grid-cols-2 gap-10 items-center mb-14"
        >
          <div>
            <p className="uppercase tracking-[0.3em] text-orange-400 text-xs mb-4">
              ASP.NET Developer & Creative Tech Enthusiast
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
              I Build.
              <br />
              Design.
              <br />
              Render.
              <span className="text-orange-500"> Edit.</span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-8">
              Creating immersive digital experiences with clean code, cinematic visuals, and scalable systems.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="https://github.com/ebenezergetamesay"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 border border-orange-500/30 px-5 py-2 rounded-xl hover:bg-orange-500 hover:text-black transition inline-block"
              >
                View All Projects
              </a>

              <button className="border border-zinc-700 hover:border-orange-500 hover:text-orange-400 transition px-6 py-3 rounded-2xl">
                Download CV
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/ebenezergetamesay"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-sm text-zinc-300 hover:border-orange-500 hover:text-orange-400 transition"
              >
                G
              </a>

              <a
                href="https://www.linkedin.com/in/ebenezer-getamesay-228018292/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-sm text-zinc-300 hover:border-orange-500 hover:text-orange-400 transition"
              >
                L
              </a>

              <a
                href="https://x.com/Tenget_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-sm text-zinc-300 hover:border-orange-500 hover:text-orange-400 transition"
              >
                X
              </a>

              <a
                href="mailto:ebenezergetamesay@gmail.com"
                className="w-12 h-12 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-sm text-zinc-300 hover:border-orange-500 hover:text-orange-400 transition"
              >
                @
              </a>
              
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="absolute w-[420px] h-[420px] bg-orange-500/20 blur-3xl rounded-full" />

            <img
              src={me}
              alt="portrait"
              className="relative z-10 rounded-[2rem] object-cover h-[680px] w-full max-w-[520px] border border-orange-500/20 shadow-[0_0_80px_rgba(255,115,0,0.25)] hover:scale-[1.02] transition duration-700"
            />
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-14">
          <div
            id="about"
            className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl shadow-black/40 hover:shadow-orange-500/10 hover:-translate-y-1 transition duration-500 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold mb-5">About Me</h3>

            <p className="text-zinc-400 leading-relaxed mb-5">
              I’m a passionate developer focused on building modern digital products with strong design and scalable backend systems.
            </p>

            <p className="text-zinc-500 leading-relaxed mb-8">
              Outside development, I bring ideas to life through 3D rendering, cinematic visuals, and creative storytelling.
            </p>

            <button className="text-orange-400 border border-orange-500/30 hover:bg-orange-500 hover:text-black transition px-5 py-3 rounded-xl font-medium">
              More About Me
            </button>
          </div>

          <div className="lg:col-span-2 bg-zinc-950 border border-zinc-900 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8">What I Build</h3>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-black/40 border border-zinc-800 rounded-2xl p-5 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 hover:-translate-y-2 transition duration-500 backdrop-blur-lg"
                >
                  <div className="text-orange-400 text-2xl font-bold mb-4">
                    {service.icon}
                  </div>

                  <h4 className="font-semibold text-lg mb-3">
                    {service.title}
                  </h4>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mb-14">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold">Featured Projects</h3>

            <a
            href="https://github.com/ebenezergetamesay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 border border-orange-500/30 px-5 py-2 rounded-xl hover:bg-orange-500 hover:text-black transition inline-block"
          >
            View All Projects
          </a>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group bg-zinc-950/90 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-orange-500/20 transition duration-500 backdrop-blur-xl"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover group-hover:scale-105 transition duration-700"
                />

                <div className="p-5">
                  <h4 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h4>

                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-3 gap-6 mb-14">
          <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl shadow-black/40 hover:shadow-orange-500/10 hover:-translate-y-1 transition duration-500 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-6">Achievements</h3>

            <div className="space-y-5">
              <div className="border border-zinc-800 rounded-2xl p-5 bg-black/40">
                <h4 className="font-semibold text-orange-400 mb-2">
                  AI Video Platform
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Built a scalable AI-powered video moderation system with advanced safety detection.
                </p>
              </div>

              <div className="border border-zinc-800 rounded-2xl p-5 bg-black/40">
                <h4 className="font-semibold text-orange-400 mb-2">
                  Dashboard Integrations
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Developed secure APIs and analytics pipelines for modern enterprise systems.
                </p>
              </div>
            </div>
          </div>

          <div
            id="tools"
            className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl shadow-black/40 hover:shadow-orange-500/10 hover:-translate-y-1 transition duration-500 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold mb-6">Tech Stack & Tools</h3>

            <div className="grid grid-cols-3 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool}
                  className="bg-black/40 border border-zinc-800 rounded-2xl py-5 text-center text-zinc-300 hover:border-orange-500/40 hover:text-orange-400 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-105 transition duration-500 backdrop-blur-md"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-950/90 border border-zinc-800 rounded-3xl p-8 shadow-2xl shadow-black/40 hover:shadow-orange-500/10 hover:-translate-y-1 transition duration-500 backdrop-blur-xl">
            <h3 className="text-2xl font-bold mb-6">Current Goals</h3>

            <div className="space-y-6">
              {[
                ['Networking & IT', '68%'],
                ['Machine Learning', '70%'],
                ['Cinematic Editing', '60%'],
              ].map(([name, value]) => (
                <div key={name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span>{name}</span>
                    <span className="text-orange-400">{value}</span>
                  </div>

                  <div className="h-3 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: value }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="border border-zinc-900 rounded-3xl bg-zinc-950 px-8 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-4xl font-black leading-tight mb-3">
              Let’s build something amazing together.
            </h3>

              <a
                href="https://www.linkedin.com/in/ebenezer-getamesay-228018292/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-orange-500 text-orange-400 px-5 py-2 rounded-xl hover:bg-orange-500 hover:text-black hover:shadow-lg hover:shadow-orange-500/20 transition duration-300 font-medium inline-block"
              >
                Contact Me
              </a>
          </div>

          <div className="text-zinc-500 space-y-2 text-sm">
            <p>Email: ebenezergetamesay@example.com</p>
            <p>Location: Ethiopia</p>
            <p>Availability: Open to opportunities</p>
          </div>
        </footer>
      </main>
    </motion.div>
  );
}
