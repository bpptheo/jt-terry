import Image from "next/image";
import { CONTACT } from "./config";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="text-deep-blue font-bold text-xl tracking-tight flex items-center gap-2">
              <svg className="w-7 h-7 text-sunny-yellow" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              Terry Agbenyo
            </a>
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
            <div className="order-2 lg:order-1 text-center lg:text-left">
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

              <p className="opacity-0 animate-fade-in-up animation-delay-400 text-deep-blue/70 text-lg md:text-xl mt-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Terry Agbenyo is a trusted real estate and property management professional in Accra, offering end-to-end solutions across the entire property lifecycle. From construction and interior finishing to sales, rentals, Airbnb management, and cleaning services, every detail is expertly handled under one roof.
              </p>

              <div className="opacity-0 animate-fade-in-up animation-delay-600 flex flex-wrap justify-center lg:justify-start gap-4 mt-10">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-sunny-yellow/75 text-deep-blue px-7 py-4 rounded-full font-semibold hover:bg-sunny-yellow transition-all hover:shadow-lg hover:shadow-sunny-yellow/25"
                >
                  What I Do
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
              <div className="flex justify-center lg:justify-start gap-12 mt-16 pt-8 border-t border-deep-blue/10">
                <div>
                  <p className="text-3xl font-bold text-deep-blue">10+</p>
                  <p className="text-deep-blue/50 text-sm mt-1">Years Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-deep-blue">20+</p>
                  <p className="text-deep-blue/50 text-sm mt-1">Properties Managed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-deep-blue">7+</p>
                  <p className="text-deep-blue/50 text-sm mt-1">Airbnbs Managed</p>
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

      {/* Services Section */}
      <section id="services" className="pt-20 pb-20 bg-sunny-yellow/70">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-8 -mt-36">
            {/* Card 1 - Real Estate */}
            <div className="bg-white rounded-3xl rounded-br-xl p-4 shadow-2xl hover:shadow-3xl transition-shadow ring-1 ring-deep-blue/20 border border-deep-blue/90">
              <div className="w-full h-48 bg-cream rounded-2xl rounded-br-lg overflow-hidden relative mb-6">
                <Image
                  src="/properties/prop1.jpg"
                  alt="Real Estate"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-3 px-4">Real Estate</h3>
              <p className="text-deep-blue/60 leading-relaxed px-4 pb-4">
                I help property owners and investors build, maintain, and profit from high-quality real estate through strategic planning, hands-on management, and uncompromising standards.
              </p>
            </div>

            {/* Card 2 - House Keeping */}
            <div className="bg-white rounded-3xl rounded-br-xl p-4 shadow-2xl hover:shadow-3xl transition-shadow ring-1 ring-deep-blue/20 border border-deep-blue/90">
              <div className="w-full h-48 bg-cream rounded-2xl rounded-br-lg overflow-hidden relative mb-6">
                <Image
                  src="/pictures/cleaning.png"
                  alt="House Keeping & Cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-3 px-4">House Keeping & Cleaning</h3>
              <p className="text-deep-blue/60 leading-relaxed px-4 pb-4">
                Professional cleaning services to keep your home or office spotless. Reliable, thorough, and always on time.
              </p>
            </div>

            {/* Card 3 - Tourguide */}
            <div className="bg-white rounded-3xl rounded-br-xl p-4 shadow-2xl hover:shadow-3xl transition-shadow ring-1 ring-deep-blue/20 border border-deep-blue/90">
              <div className="w-full h-48 bg-cream rounded-2xl rounded-br-lg overflow-hidden relative mb-6">
                <Image
                  src="/pictures/tourguide.jpg"
                  alt="Tourguide"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-deep-blue mb-3 px-4">Tourguide</h3>
              <p className="text-deep-blue/60 leading-relaxed px-4 pb-4">
                Discover the beauty of Ghana with a local expert. Personalized tours to the best sights and hidden gems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-blue text-center mb-16">
            My Journey
          </h2>

          <div className="relative">
            {/* Timeline center line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
              <div className="h-full bg-gradient-to-b from-sunny-yellow via-sunny-yellow/50 to-sunny-yellow border-l-2 border-dashed border-sunny-yellow/30"></div>
            </div>

          <div className="space-y-16 md:space-y-24 relative">
            {/* Timeline Item 1 - MTN */}
            <div className="group flex flex-col md:flex-row items-center gap-8 md:gap-24 relative">
              {/* Timeline dot with year */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                <div className="w-4 h-4 rounded-full bg-sunny-yellow border-4 border-white shadow-lg"></div>
                <span className="mt-2 text-xs font-bold text-sunny-yellow bg-white px-2 py-1 rounded-full shadow">2016</span>
              </div>
              <div className="w-full md:w-1/2 animate-fade-in-up">
                <div className="relative bg-sunny-yellow/20 rounded-3xl p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-cream rounded-2xl overflow-hidden aspect-[3/4] relative">
                    <Image
                      src="/pictures/mtn.jpg"
                      alt="MTN Ghana"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="text-sunny-yellow/90 font-semibold text-sm tracking-widest uppercase">Fiberoptic Technician & Realtor</span>
                <h3 className="text-2xl font-bold text-deep-blue mt-2 mb-4">MTN Fiberoptic and Realtor</h3>
                <p className="text-deep-blue/60 leading-relaxed">
                  Experienced fiberoptic technician at MTN Ghana, installing and maintaining high-speed network infrastructure.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 - Airbnb */}
            <div className="group flex flex-col md:flex-row-reverse items-center gap-8 md:gap-24 relative">
              {/* Timeline dot with year */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                <div className="w-4 h-4 rounded-full bg-sunny-yellow border-4 border-white shadow-lg"></div>
                <span className="mt-2 text-xs font-bold text-sunny-yellow bg-white px-2 py-1 rounded-full shadow">2020</span>
              </div>
              <div className="w-full md:w-1/2 animate-fade-in-up">
                <div className="relative bg-[#FF5A5F]/30 rounded-3xl p-4 -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-cream rounded-2xl overflow-hidden aspect-[4/3] relative">
                    <Image
                      src="/properties/prop4.jpg"
                      alt="Airbnb Management"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <span className="text-[#FF5A5F] font-semibold text-sm tracking-widest uppercase">Hospitality</span>
                <h3 className="text-2xl font-bold text-deep-blue mt-2 mb-4">Airbnb Management</h3>
                <p className="text-deep-blue/60 leading-relaxed">
                  Full-service Airbnb management for property owners. From guest relations to cleaning, I ensure every stay is exceptional.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 - Real Estate */}
            <div className="group flex flex-col md:flex-row items-center gap-8 md:gap-24 relative">
              {/* Timeline dot with year */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                <div className="w-4 h-4 rounded-full bg-sunny-yellow border-4 border-white shadow-lg"></div>
                <span className="mt-2 text-xs font-bold text-sunny-yellow bg-white px-2 py-1 rounded-full shadow">2021</span>
              </div>
              <div className="w-full md:w-1/2 animate-fade-in-up">
                <div className="relative bg-deep-blue/20 rounded-3xl p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-cream rounded-2xl overflow-hidden aspect-[4/3] relative">
                    <Image
                      src="/properties/prop2.jpg"
                      alt="Real Estate Ghana"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left">
                <span className="text-deep-blue/80 font-semibold text-sm tracking-widest uppercase">Real Estate</span>
                <h3 className="text-2xl font-bold text-deep-blue mt-2 mb-4">Property Sales in Accra</h3>
                <p className="text-deep-blue/60 leading-relaxed">
                  Helping clients find their dream homes in Ghana. From apartments to family houses, I connect people with the perfect property.
                </p>
              </div>
            </div>

            {/* Timeline Item 4 - Housekeeping */}
            <div className="group flex flex-col md:flex-row-reverse items-center gap-8 md:gap-24 relative">
              {/* Timeline dot with year */}
              <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-10">
                <div className="w-4 h-4 rounded-full bg-sunny-yellow border-4 border-white shadow-lg"></div>
                <span className="mt-2 text-xs font-bold text-sunny-yellow bg-white px-2 py-1 rounded-full shadow">2024</span>
              </div>
              <div className="w-full md:w-1/2 animate-fade-in-up">
                <div className="relative bg-emerald-500/30 rounded-3xl p-4 -rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="bg-cream rounded-2xl overflow-hidden aspect-[4/3] relative">
                    <Image
                      src="/properties/prop3.jpg"
                      alt="Housekeeping Excellence"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 text-center md:text-right">
                <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Professional Service</span>
                <h3 className="text-2xl font-bold text-deep-blue mt-2 mb-4">Housekeeping Excellence</h3>
                <p className="text-deep-blue/60 leading-relaxed">
                  Professional property care — from cleaning and maintenance to security checks and preventive repairs. Peace of mind for property owners.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-deep-blue">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Got Your Interest?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Let&apos;s work together and create something amazing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={CONTACT.instagram.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-all hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href={CONTACT.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#20BD5A] transition-all hover:shadow-lg"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
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
              <a href={CONTACT.instagram.link} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href={CONTACT.email.link} className="text-white/40 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
