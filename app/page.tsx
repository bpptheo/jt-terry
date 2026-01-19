import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-deep-blue font-bold text-xl tracking-tight">
              Terry<span className="text-sunny-yellow">.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-deep-blue/70 hover:text-deep-blue transition-colors text-sm font-medium">
                About
              </a>
              <a href="#work" className="text-deep-blue/70 hover:text-deep-blue transition-colors text-sm font-medium">
                Work
              </a>
              <a href="#contact" className="text-deep-blue/70 hover:text-deep-blue transition-colors text-sm font-medium">
                Contact
              </a>
            </div>
            <a
              href="#contact"
              className="bg-deep-blue text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-soft-blue transition-colors"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Text Content */}
            <div className="order-2 lg:order-1">
              <h1 className="opacity-0 animate-fade-in-up animation-delay-200 text-5xl md:text-6xl lg:text-7xl font-bold text-deep-blue leading-[1.1] tracking-tight">
                I am Terry
                <br />
                <span className="relative">
                  Agbenyo
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 200 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 8.5C50 2.5 150 2.5 198 8.5"
                      stroke="#F7B32B"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="opacity-0 animate-fade-in-up animation-delay-400 text-deep-blue/60 text-lg md:text-xl mt-8 max-w-md leading-relaxed">
                Professional housekeeper and real estate agent.
                Based in Accra, Ghana, serving clients with excellence.
              </p>

              <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-wrap gap-4 mt-10">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 bg-sunny-yellow text-deep-blue px-7 py-4 rounded-full font-semibold hover:bg-sunny-yellow/90 transition-all hover:shadow-lg hover:shadow-sunny-yellow/25"
                >
                  View My Work
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center gap-2 border-2 border-deep-blue/20 text-deep-blue px-7 py-4 rounded-full font-semibold hover:border-deep-blue/40 transition-colors"
                >
                  About Me
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-12 mt-16 pt-8 border-t border-deep-blue/10">
                <div>
                  <p className="text-3xl font-bold text-deep-blue">5+</p>
                  <p className="text-deep-blue/50 text-sm mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-deep-blue">50+</p>
                  <p className="text-deep-blue/50 text-sm mt-1">Properties Managed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-deep-blue">30+</p>
                  <p className="text-deep-blue/50 text-sm mt-1">Happy Clients</p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Background decorative elements */}
                <div className="absolute -top-6 -right-6 w-full h-full bg-sunny-yellow/60 rounded-[60px] rotate-6"></div>
                <div className="absolute -bottom-6 -left-6 w-full h-full bg-deep-blue/50 rounded-[60px] -rotate-6"></div>

                {/* Main image container */}
                <div className="absolute inset-0 overflow-hidden rounded-[50px] shadow-2xl z-10">
                  <Image
                    src="/pictures/terry_professional.jpg"
                    alt="Terry Agbenyo"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white px-5 py-3 rounded-2xl shadow-xl z-20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-deep-blue font-medium text-sm">Available for work</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section Teaser */}
      <section id="about" className="py-20 bg-cream/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-sunny-yellow font-semibold text-sm tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue leading-tight">
              Dedicated to providing exceptional housekeeping and real estate services.
            </h2>
            <p className="text-deep-blue/60 text-lg mt-6 leading-relaxed">
              With years of experience in property management and real estate, I help clients
              find their perfect home and keep properties in pristine condition. Your satisfaction
              is my priority.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-deep-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got a project in mind?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Let&apos;s work together and create something amazing.
          </p>
          <a
            href="mailto:hello@terryagbenyo.com"
            className="inline-flex items-center gap-2 bg-sunny-yellow text-deep-blue px-8 py-4 rounded-full font-semibold hover:bg-sunny-yellow/90 transition-all hover:shadow-lg hover:shadow-sunny-yellow/25"
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-deep-blue border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Terry Agbenyo. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
