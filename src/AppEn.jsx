import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  UtensilsCrossed,
  Flame,
  Trees,
  Users,
  Wine,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Award,
  Upload,
  CheckCircle2,
  Calendar,
  ChevronRight
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Highlights', href: '#services' },
  { label: 'Our Story', href: '#filosofi' },
  { label: 'Experience', href: '#proces' },
  { label: 'Menu', href: '#menu-grid' },
  { label: 'Reservations', href: '#kontakt' },
]

const SERVICES_FULL = [
  {
    icon: UtensilsCrossed,
    title: 'Cypriot Meze Feast',
    text: 'Our famous multi-course feast. Homemade dips, grilled halloumi, sheftalia, kleftiko, and warm flatbreads.',
  },
  {
    icon: Flame,
    title: 'Authentic Clay Oven Kleftiko',
    text: 'A classic Cypriot signature dish. Lamb shoulder slow-baked in traditional outdoor clay ovens for over 8 hours with bay leaves and lemon.',
  },
  {
    icon: Flame,
    title: 'Charcoal Grill (Souvla & Souvlaki)',
    text: 'Juicy pork and chicken skewers grilled over authentic Cypriot charcoal. Served with fresh lemons and golden roast potatoes.',
  },
  {
    icon: Trees,
    title: 'Al Fresco Courtyard',
    text: 'Dine under lush, fragrant lemon trees in our atmospheric backyard. A quiet, rustic oasis in the middle of Ayia Napa.',
  },
  {
    icon: Users,
    title: 'Private Events & Parties',
    text: 'Celebrate your big moments, family gatherings, or birthdays with true Cypriot hospitality and custom menus.',
  },
  {
    icon: Wine,
    title: 'Local Wines & Commandaria',
    text: 'Taste the wine heritage of Cyprus. We offer selected local wines, traditional Commandaria, and the classic Brandy Sour.',
  },
]

/* ----------------------------------------------------------------
   Navbar
---------------------------------------------------------------- */
function Navbar({ onSwitchLanguage }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass shadow-xl shadow-primary/5'
            : 'bg-transparent'
        } rounded-full px-4 sm:px-6 py-2.5 w-[calc(100%-2rem)] max-w-5xl`}
      >
        <div className="flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-2 group">
            <img src="/6b08b95f-f56f-45a2-97c6-c79166443ce5.jpg" alt="Logo" className="h-12 w-12 object-cover rounded-full shadow-lg border-2 border-white/20" />
            <span
              className={`font-display font-extrabold tracking-tight text-base sm:text-lg ${
                scrolled ? 'text-ink' : 'text-white'
              } transition-colors`}
            >
              Tony's Taverna
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold tracking-tight lift-on-hover ${
                  scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
                } transition-colors`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onSwitchLanguage}
              className={`font-bold text-sm lift-on-hover ${
                scrolled ? 'text-ink/70 hover:text-primary' : 'text-white/90 hover:text-white'
              } transition-colors`}
              aria-label="Switch to Greek"
            >
              🇨🇾 EL
            </button>
            <a
              href="#kontakt"
              className="magnetic-btn items-center gap-1.5 bg-accent text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/25 hover:bg-accent-dark transition-all inline-flex"
            >
              Book a Table
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.5} />
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onSwitchLanguage}
              className={`font-bold text-sm ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
            >
              🇨🇾 EL
            </button>
            <button
              onClick={() => setOpen(true)}
              className={`p-2 rounded-full ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-500 lg:hidden ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-deep/90 backdrop-blur-2xl"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 left-0 right-0 bg-background rounded-b-5xl px-6 pt-8 pb-12 transition-transform duration-500 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex items-center justify-between mb-8">
            <span className="font-display font-extrabold text-xl text-ink">Tony's Taverna</span>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full bg-divider"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-bold text-ink py-2.5 border-b border-divider"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            className="mt-8 magnetic-btn flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-full font-bold w-full shadow-lg"
          >
            Book a Table
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </>
  )
}

/* ----------------------------------------------------------------
   Hero
---------------------------------------------------------------- */
function Hero() {
  const heroRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', {
        y: 45,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3,
      })
      gsap.from('.hero-line-2', {
        y: 65,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.5,
      })
      gsap.from('.hero-cta, .hero-meta', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.8,
        stagger: 0.12,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center"
    >
      {/* Background image & gradient overlay */}
      <div className="absolute inset-0">
        <img
          src="/ty5pmcm0zj52eqwl9gv6.jpg"
          alt="Tony's Taverna exterior in Ayia Napa"
          className="w-full h-full object-cover brightness-[0.4]"
        />
        {/* Blending the top with the nav, matching brand primary color */}
        <div className="absolute inset-0 bg-gradient-to-tr from-deep/90 via-deep/55 to-primary-dark/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" />
      </div>

      {/* Decorative floating warm spark particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-[15%] h-2.5 w-2.5 rounded-full bg-white/60 animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-[50%] right-[8%] h-1.5 w-1.5 rounded-full bg-primary-light/60 animate-float" style={{ animationDelay: '1.8s' }} />
        <div className="absolute top-[35%] right-[22%] h-2 w-2 rounded-full bg-accent/50 animate-float" style={{ animationDelay: '3.2s' }} />
      </div>

      {/* Top frame line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-16 pt-24">
        <div className="max-w-4xl">
          <p className="hero-meta font-mono text-xs uppercase tracking-[0.25em] text-accent font-bold mb-5">
            Established in Ayia Napa Since 1980
          </p>

          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-6xl md:text-7xl">
              Καλωσορίσατε. Welcome.
            </span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-accent text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              To Our Family Table.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            Dive into a true Cypriot journey of flavors at <span className="text-white font-semibold">Tony's Taverna</span>. Our family courtyard offers sizzling meze, slow-roasted kleftiko, and crisp grills served with heartwarming hospitality.
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-accent/30 transition-all"
            >
              Book a Table
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:+35723722515"
              className="lift-on-hover inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/20 font-semibold px-8 py-4 rounded-full"
            >
              <Phone className="h-4 w-4" />
              +357 23 722 515
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-6 sm:right-12 hidden md:flex flex-col items-center gap-2 text-white/50">
          <span className="font-mono uppercase text-[9px] tracking-[0.3em] text-accent">Scroll</span>
          <div className="h-10 w-px bg-gradient-to-b from-accent to-transparent" />
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   CountUp — Animated Counter Component
---------------------------------------------------------------- */
function CountUp({ target, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const elemRef = useRef(null)
  const startedRef = useRef(false)

  useEffect(() => {
    const el = elemRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true
            const startTime = performance.now()
            const animate = (now) => {
              const elapsed = now - startTime
              const progress = Math.min(elapsed / duration, 1)
              const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
              setCount(Math.floor(target * eased))
              if (progress < 1) {
                requestAnimationFrame(animate)
              } else {
                setCount(target)
              }
            }
            requestAnimationFrame(animate)
          }
        })
      },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={elemRef}>{count}</span>
}

/* ----------------------------------------------------------------
   Pillars — Three core statistics
---------------------------------------------------------------- */
function Pillars() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const pillars = [
    {
      n: '01',
      title: 'History',
      target: 33,
      suffix: '+',
      label: 'Years of Tradition',
      desc: 'Since 1980, our family has been serving regional dishes to travelers and locals in the heart of Ayia Napa.',
    },
    {
      n: '02',
      title: 'Quality',
      target: 100,
      suffix: '%',
      label: 'Homemade',
      desc: 'Every dip, bread, kebab, and stew is prepared from scratch with fresh Cypriot ingredients daily.',
    },
    {
      n: '03',
      title: 'Meze Richness',
      target: 20,
      suffix: '+',
      label: 'Different Dishes',
      desc: 'Our meze is a legendary odyssey of flavors spanning over twenty bites of Cyprus\' finest produce.',
    },
  ]

  return (
    <section id="filosofi" ref={ref} className="relative py-28 sm:py-36 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 grid-bg opacity-50 animate-pulse-slow" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[44rem] rounded-full bg-primary/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 sm:mb-24 transition-all duration-1000 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs uppercase tracking-[0.3em] text-primary mb-5">
              ∕ The Truth in Numbers
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              The love behind
              <span className="block font-serif italic font-medium text-accent">every meal.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Behind the pots stands our family, and behind these numbers hide thousands of memories, cozy evenings, and true hospitality.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-divider rounded-5xl overflow-hidden border border-divider shadow-xl shadow-accent/5">
          {pillars.map((p, i) => (
            <article
              key={i}
              style={{ transitionDelay: visible ? `${i * 150}ms` : '0ms' }}
              className={`pillar-card relative bg-surface p-9 sm:p-12 group overflow-hidden transition-all duration-1000 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted font-bold">
                  {p.n} / {p.title}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent/40 group-hover:bg-accent group-hover:scale-150 transition-all duration-500" />
              </div>

              {/* Number */}
              <div className="flex items-end gap-1 leading-none">
                <span className="font-display font-extrabold text-[5.5rem] sm:text-[7.5rem] md:text-[8.5rem] leading-[0.85] text-ink tabular-nums tracking-tight">
                  <CountUp target={p.target} duration={1800 + i * 200} />
                </span>
                <span className="font-serif italic font-medium text-4xl sm:text-5xl md:text-6xl text-accent mb-3 sm:mb-4">
                  {p.suffix}
                </span>
              </div>

              {/* Sub-label */}
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent font-bold mt-5">
                {p.label}
              </p>

              {/* Desc */}
              <p className="text-muted text-[14px] sm:text-[15px] mt-6 leading-relaxed max-w-xs">
                {p.desc}
              </p>

              {/* Animated baseline line */}
              <div className="absolute bottom-0 left-9 right-9 sm:left-12 sm:right-12 h-px bg-divider overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-transparent via-accent to-transparent"
                  style={{
                    animation: `pillar-sweep 4.5s ease-in-out ${i * 0.4}s infinite`,
                  }}
                />
              </div>

              <span className="absolute top-9 right-9 sm:top-12 sm:right-12 font-mono text-[9px] uppercase tracking-widest text-accent/20 font-bold">
                Tony's Napa
              </span>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pillar-sweep {
          0%   { transform: translateX(-100%); }
          50%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  )
}

/* ----------------------------------------------------------------
   Protocol — Sticky Stacking Cards (The Experience)
---------------------------------------------------------------- */
function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.forEach((card, i) => {
        if (i === cards.length - 1) return
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top top+=110',
            endTrigger: cards[cards.length - 1],
            end: 'top top+=130',
            scrub: 1,
          },
          scale: 0.93,
          filter: 'blur(5px) saturate(0.8)',
          opacity: 0.55,
          ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      num: '01',
      title: 'Parea & Drinks',
      tagline: 'Welcome under the lemon trees.',
      text: 'Settle into our flower-filled courtyard in the shade of the lemons. Your evening starts with "Parea" – togetherness with those you care about. We serve a cool Cypriot Brandy Sour, a local Keo beer, or a cold jug of house wine, accompanied by warm flatbreads and our fresh olives and dips.',
      image: '/photo.jpg',
      alt: 'Rustic courtyard atmosphere at Tonys Taverna',
      meta: 'The Dinner Starts',
    },
    {
      num: '02',
      title: 'The Meze Journey',
      tagline: 'A quiet horn of plenty.',
      text: 'There is no rush at Tony\'s. Over the next two hours, our waiters will bring you over twenty different traditional Cypriot dishes at a comfortable pace. From sizzling grilled halloumi, crispy fried lountza and spicy sheftalia sausages, to fresh tomatoes and sun-ripened feta.',
      image: '/meze.jpg',
      alt: 'Cypriot meze arrangement with dips, pita and grill dishes',
      meta: 'The Main Act',
    },
    {
      num: '03',
      title: 'The Secret of the Oven',
      tagline: 'Slow-baked love since 1980.',
      text: 'The true climax of the meal. Our outdoor clay ovens are lit at dawn. The legendary lamb (Kleftiko) is gently seasoned and sealed, then slow-baked for 8 hours. The meat is so tender it falls right off the bone at a touch, and is served with tasty Cypriot potatoes.',
      image: '/caption.jpg',
      alt: 'Classic tender and juicy Lamb Kleftiko with lemon potatoes',
      meta: 'The Signature Dish',
    },
  ]

  return (
    <section id="proces" ref={containerRef} className="relative px-4 sm:px-6 py-20 bg-background">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          ∕ An evening in Ayia Napa
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          The Taverna Experience.
          <span className="block font-serif italic font-medium text-accent">
            Dish by dish.
          </span>
        </h2>
      </div>

      <div className="space-y-8">
        {steps.map((step, idx) => (
          <article
            key={idx}
            className="protocol-card sticky top-24 sm:top-28 mx-auto max-w-6xl bg-gradient-to-br from-surface to-background border border-divider rounded-6xl overflow-hidden shadow-2xl shadow-accent/5"
          >
            <div className="grid lg:grid-cols-5 gap-0 min-h-[55vh] lg:min-h-[65vh]">
              {/* Left content */}
              <div className="lg:col-span-3 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted font-bold">
                    {step.meta}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-accent bg-accent/10 px-2.5 py-1 rounded-full font-bold">
                    Tony's Protocol
                  </span>
                </div>

                <div className="my-10">
                  <span className="font-display font-extrabold text-[6rem] sm:text-[8.5rem] leading-none text-accent/15 -mb-4 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05] tracking-tight">
                    {step.title}
                  </h3>
                  <p className="font-serif italic text-accent text-xl sm:text-2xl mt-2">
                    {step.tagline}
                  </p>
                </div>

                <p className="text-muted text-sm sm:text-base leading-relaxed max-w-lg">
                  {step.text}
                </p>
              </div>

              {/* Right visual image */}
              <div className="lg:col-span-2 relative overflow-hidden min-h-[260px] lg:min-h-full bg-deep">
                <img
                  src={step.image}
                  alt={step.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-deep/10" />
                
                {/* Step label */}
                <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/95 backdrop-blur-sm rounded-full pl-3 pr-4 py-1.5 shadow-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-ping" />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-ink font-bold">
                    Step {step.num}
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-widest text-white/75">
                  {step.num} / Tony's Taverna
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   All Services Grid (Detailed Menu Highlights)
---------------------------------------------------------------- */
function ServicesGrid() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 88%', once: true },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: 0.06,
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="menu-grid" ref={ref} className="relative py-24 px-6 sm:px-10 lg:px-16 bg-deep text-white overflow-hidden rounded-t-6xl">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 -left-20 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">∕ Our Menu</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Traditional Dishes,
              <span className="block font-serif italic font-medium text-accent mt-1">
                made with love.
              </span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm sm:text-base leading-relaxed">
            Hver bid bærer præg af ældgamle familieopskrifter. Vi bruger kun de fineste lokale ingredienser og kød tilberedt over åben ild.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 rounded-4xl overflow-hidden">
          {SERVICES_FULL.map((svc, i) => {
            const Icon = svc.icon
            return (
              <div
                key={i}
                className="svc-tile group bg-deep p-8 sm:p-10 hover:bg-white/[0.02] transition-colors duration-500 relative"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="h-12 w-12 rounded-2xl bg-accent/15 border border-accent/25 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                    <Icon className="h-5 w-5 text-accent group-hover:text-white" strokeWidth={2} />
                  </div>
                  <span className="font-mono text-[10px] text-white/35 uppercase tracking-widest font-bold">
                    Card {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-display font-bold text-xl sm:text-2xl mb-3">{svc.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{svc.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Trust Signals
---------------------------------------------------------------- */
function TrustSignals() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const badges = [
    {
      Icon: Award,
      title: "TripAdvisor Traveler's Choice",
      text: 'Honored and recommended year after year by our guests for our unsurpassed service and authentic Cypriot flavors.',
    },
    {
      Icon: ShieldCheck,
      title: 'Three Generations of Recipes',
      text: 'Tony learned to cook from his grandmother, and we protect the old traditions against today\'s fast-food trends.',
    },
    {
      Icon: Clock,
      title: 'Heartwarming Hospitality',
      text: 'With us, you are not just a customer; you are a guest in our home. We look forward to welcoming you like an old friend.',
    },
  ]

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-6 bg-white border-t border-divider">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            ∕ Why visit us
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            More Than Just A Dinner.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {badges.map(({ Icon, title, text }, i) => (
            <div
              key={i}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
              className={`bg-background border border-divider rounded-4xl p-6 sm:p-8 hover:border-accent/40 transition-all duration-700 ease-out shadow-sm hover:shadow-lg ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <Icon className="h-6 w-6 text-accent mb-3.5" strokeWidth={1.8} />
              <h3 className="font-display font-bold text-lg text-ink mb-2">{title}</h3>
              <p className="text-muted text-xs sm:text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#kontakt"
            className="magnetic-btn inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3.5 rounded-full shadow-xl shadow-accent/25 transition-colors"
          >
            Reserve Your Table Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------
   Contact Form (Reservation and Location Details)
---------------------------------------------------------------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2 people',
    date: '',
    message: '',
  })
  const [files, setFiles] = useState([])
  const [status, setStatus] = useState('idle') // idle | sending | sent
  const dropRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.date) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const handleFiles = (newFiles) => {
    setFiles((prev) => [...prev, ...Array.from(newFiles)].slice(0, 5))
  }

  return (
    <section id="kontakt" className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Contact card & Info */}
          <div className="lg:col-span-5">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
              ∕ Table Reservation
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Save A Table
              <span className="block font-serif italic font-medium text-accent">
                For Tonight.
              </span>
            </h2>
            <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed max-w-md">
              Send us a reservation request. We will confirm your reservation as soon as possible via SMS or e-mail.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href="tel:+35723722515"
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Phone className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-muted">
                    Call directly
                  </span>
                  <span className="font-display font-semibold text-ink text-base sm:text-lg">
                    +357 23 722 515
                  </span>
                </span>
              </a>

              <a
                href="mailto:info@tonystaverna.com"
                className="lift-on-hover flex items-center gap-4 group"
              >
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Mail className="h-5 w-5 text-primary group-hover:text-white" />
                </span>
                <span>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-muted">
                    Write to us
                  </span>
                  <span className="font-display font-semibold text-ink text-base sm:text-lg">
                    info@tonystaverna.com
                  </span>
                </span>
              </a>

              <div className="flex items-center gap-4">
                <span className="h-12 w-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </span>
                <span>
                  <span className="block font-mono text-[9px] uppercase tracking-widest text-muted">
                    Find us here
                  </span>
                  <span className="font-display font-semibold text-ink text-base sm:text-lg">
                    Nissi Avenue 10, Ayia Napa, Cyprus
                  </span>
                </span>
              </div>
            </div>

            {/* Google Location & map link preview block */}
            <div className="mt-8 overflow-hidden rounded-3xl border border-divider shadow-sm bg-white p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] uppercase tracking-widest text-accent font-bold">Google Maps</span>
                <a 
                  href="https://maps.google.com/?q=Tony's+Taverna+Ayia+Napa" 
                  target="_blank" 
                  rel="noreferrer"
                  className="font-mono text-[9px] uppercase text-primary hover:underline font-bold inline-flex items-center gap-0.5"
                >
                  Open map <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              {/* Interactive map placeholder */}
              <div className="relative h-28 bg-primary/5 rounded-2xl border border-divider/40 flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute h-8 w-8 rounded-full bg-accent/20 animate-ping" />
                <div className="relative z-10">
                  <MapPin className="h-6 w-6 text-accent mx-auto mb-1.5" />
                  <p className="text-[11px] font-bold text-ink">Tony's Taverna Ayia Napa</p>
                  <p className="text-[9px] text-muted">Nissi Avenue, opposite the monastery</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-3xl bg-accent/5 border border-accent/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1.5 font-bold">
                Table Policy
              </p>
              <p className="text-xs text-muted leading-relaxed">
                We hold reserved tables for a maximum of 15 minutes. If you are delayed, please call us. For parties over 10 people, please contact us directly by phone.
              </p>
            </div>
          </div>

          {/* Right: Reservation Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-divider rounded-5xl p-7 sm:p-10 shadow-xl shadow-accent/5"
            >
              {status !== 'sent' ? (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Your Name"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="Email Address"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                    <Field
                      label="Phone Number"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
                        Number of Guests *
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body font-medium"
                      >
                        <option>1 person</option>
                        <option>2 people</option>
                        <option>3 people</option>
                        <option>4 people</option>
                        <option>5 people</option>
                        <option>6 people</option>
                        <option>7 people</option>
                        <option>8 people</option>
                        <option>9 people</option>
                        <option>10+ people</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Field
                      label="Desired Date &amp; Time *"
                      type="text"
                      required
                      placeholder="E.g. Saturday August 15th at 19:30"
                      value={form.date}
                      onChange={(v) => setForm({ ...form, date: v })}
                    />
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
                      Special Requests or Allergies
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      placeholder="Write here if you have allergies, need high chairs, or prefer a table in the courtyard..."
                      className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/60 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition resize-none font-body text-sm"
                    />
                  </div>

                  {/* Drag-drop file zone */}
                  <div
                    ref={dropRef}
                    onDragOver={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.add('!border-accent', '!bg-accent/5')
                    }}
                    onDragLeave={() => {
                      dropRef.current?.classList.remove('!border-accent', '!bg-accent/5')
                    }}
                    onDrop={(e) => {
                      e.preventDefault()
                      dropRef.current?.classList.remove('!border-accent', '!bg-accent/5')
                      handleFiles(e.dataTransfer.files)
                    }}
                    className="mt-5 border-2 border-dashed border-divider rounded-3xl p-5 text-center hover:border-accent/40 transition-colors cursor-pointer"
                  >
                    <input
                      type="file"
                      multiple
                      id="file-up"
                      className="hidden"
                      onChange={(e) => handleFiles(e.target.files)}
                      accept="image/*"
                    />
                    <label htmlFor="file-up" className="cursor-pointer block">
                      <Upload className="h-5 w-5 mx-auto text-accent mb-2" />
                      <p className="font-display font-semibold text-ink text-xs sm:text-sm">
                        Attach menu choices or requests (optional)
                      </p>
                      <p className="text-[10px] text-muted mt-0.5">
                        Click or drag files here (max 5 images)
                      </p>
                      {files.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5 justify-center">
                          {files.map((f, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 bg-accent/10 text-accent-dark text-[10px] px-2.5 py-1 rounded-full font-mono"
                            >
                              <CheckCircle2 className="h-3 w-3" />
                              {f.name.length > 20 ? f.name.slice(0, 20) + '…' : f.name}
                            </span>
                          ))}
                        </div>
                      )}
                    </label>
                  </div>

                  <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <p className="text-[11px] text-muted">
                      We will answer you as soon as possible. Fields with * are required.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-accent/25 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Sending...' : 'Send request'}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="text-center py-10">
                  <div className="h-16 w-16 mx-auto rounded-full bg-accent/15 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-accent-dark" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-ink mb-2">
                    Reservation request sent!
                  </h3>
                  <p className="text-muted max-w-md mx-auto text-sm leading-relaxed">
                    Thank you very much! We will check the seating plan immediately and send you a confirmation by e-mail or SMS as soon as possible. See you under the lemon trees?
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, type = 'text', required, placeholder, value, onChange }) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
        {label} {required && '*'}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink placeholder-muted/50 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body text-sm font-medium"
      />
    </div>
  )
}

/* ----------------------------------------------------------------
   Footer
---------------------------------------------------------------- */
function Footer() {
  return (
    <footer className="relative bg-deep text-white rounded-t-6xl mt-12 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-accent/10 blur-3xl animate-pulse" />

      <div className="relative px-6 sm:px-10 lg:px-16 pt-20 pb-10 max-w-7xl mx-auto">
        {/* Top tagline block */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <h2 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.92] tracking-tight">
            Traditional food,
            <span className="font-serif italic font-medium text-accent block">
              warm welcome.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              Experience genuine Cypriot heartwarming hospitality in Ayia Napa at Tony's Taverna. We light the charcoal every evening and welcome you as family.
            </p>
            <a
              href="#kontakt"
              className="magnetic-btn inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-full self-start sm:self-auto shadow-lg"
            >
              Book a Table
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Detailed links grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-accent flex items-center justify-center">
                <img src="/6b08b95f-f56f-45a2-97c6-c79166443ce5.jpg" alt="Logo" className="h-10 w-10 object-cover rounded-full" />
              </span>
              <span className="font-display font-bold text-lg">Tony's Taverna</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Since 1980, our family has served authentic meze dishes, crispy souvla and the best lamb kleftiko in our blooming courtyard in Ayia Napa.
            </p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/30 mt-6">
              VAT ID: CY1009893T
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4 font-bold">
              Menus
            </p>
            <ul className="space-y-2.5">
              {SERVICES_FULL.slice(0, 4).map((s, i) => (
                <li key={i}>
                  <a
                    href="#menu-grid"
                    className="text-white/65 hover:text-accent transition text-xs sm:text-sm"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4 font-bold">
              The Taverna
            </p>
            <ul className="space-y-2.5">
              <li><a href="#filosofi" className="text-white/65 hover:text-accent transition text-sm">Our Pillars</a></li>
              <li><a href="#proces" className="text-white/65 hover:text-accent transition text-sm">The Experience</a></li>
              <li><a href="#kontakt" className="text-white/65 hover:text-accent transition text-sm">Reservations</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4 font-bold">
              Contact us
            </p>
            <ul className="space-y-2.5">
              <li>
                <a href="tel:+35723722515" className="text-white/65 hover:text-accent transition text-sm block">
                  +357 23 722 515
                </a>
              </li>
              <li>
                <a href="mailto:info@tonystaverna.com" className="text-white/65 hover:text-accent transition text-sm block">
                  info@tonystaverna.com
                </a>
              </li>
              <li className="text-white/65 text-xs sm:text-sm leading-snug">
                Nissi Avenue 10,<br />
                5330 Ayia Napa, Cyprus
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright and live status */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/60 font-bold">
              Taverna is Open · We are firing up the coals
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-accent transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent transition">
              Terms
            </Link>
            <span>© 2026 Tony's Taverna</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ----------------------------------------------------------------
   App Root
---------------------------------------------------------------- */
export default function AppEn({ onSwitchLanguage }) {
  useEffect(() => {
    const t1 = setTimeout(() => ScrollTrigger.refresh(), 200)
    const t2 = setTimeout(() => ScrollTrigger.refresh(), 1000)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar onSwitchLanguage={onSwitchLanguage} />
      <main>
        <Hero />
                <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}







