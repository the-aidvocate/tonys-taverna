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
  { label: 'Αρχική', href: '#home' },
  { label: 'Υπηρεσίες', href: '#services' },
  { label: 'Η Ιστορία μας', href: '#filosofi' },
  { label: 'Εμπειρία', href: '#proces' },
  { label: 'Μενού', href: '#menu-grid' },
  { label: 'Κρατήσεις', href: '#kontakt' },
]

const SERVICES_FULL = [
  {
    icon: UtensilsCrossed,
    title: 'Κυπριακός Μεζές',
    text: 'Η φημισμένη μας πανδαισία πιάτων. Σπιτικά ντιπ, ψητό χαλούμι, σεφταλιά, κλέφτικο και ζεστές πίτες.',
  },
  {
    icon: Flame,
    title: 'Αυθεντικό Κλέφτικο σε Ξυλόφουρνο',
    text: 'Ένα κλασικό κυπριακό πιάτο. Αρνί σιγοψημένο σε παραδοσιακούς ξυλόφουρνους για πάνω από 8 ώρες με δάφνη και λεμόνι.',
  },
  {
    icon: Flame,
    title: 'Ψητά στα Κάρβουνα (Σούβλα & Σουβλάκι)',
    text: 'Ζουμερά σουβλάκια χοιρινού και κοτόπουλου ψημένα σε αυθεντικά κυπριακά κάρβουνα. Σερβίρονται με φρέσκο λεμόνι και χρυσαφένιες πατάτες.',
  },
  {
    icon: Trees,
    title: 'Αυλή κάτω από τα Δέντρα',
    text: 'Δειπνήστε κάτω από καταπράσινες, μυρωδάτες λεμονιές στην ατμοσφαιρική μας αυλή. Μια ήσυχη, ρουστίκ όαση στο κέντρο της Αγίας Νάπας.',
  },
  {
    icon: Users,
    title: 'Ιδιωτικές Εκδηλώσεις & Πάρτι',
    text: 'Γιορτάστε τις μεγάλες σας στιγμές, οικογενειακές συγκεντρώσεις ή γενέθλια με αληθινή κυπριακή φιλοξενία και ειδικά μενού.',
  },
  {
    icon: Wine,
    title: 'Τοπικά Κρασιά & Κουμανδαρία',
    text: 'Γευτείτε την οινική κληρονομιά της Κύπρου. Προσφέρουμε επιλεγμένα τοπικά κρασιά, παραδοσιακή Κουμανδαρία και το κλασικό Brandy Sour.',
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
            <img src="/6b08b95f-f56f-45a2-97c6-c79166443ce5.jpg" alt="Logo" className="h-14 sm:h-16 w-14 sm:w-16 object-cover rounded-full shadow-xl ring-2 ring-white/30" />
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
              aria-label="Αλλαγή σε Αγγλικά"
            >
              🇬🇧 EN
            </button>
            <a
              href="#kontakt"
              className="magnetic-btn items-center gap-1.5 bg-accent text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-accent/25 hover:bg-accent-dark transition-all inline-flex"
            >
              Κάντε Κράτηση
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
              🇬🇧 EN
            </button>
            <button
              onClick={() => setOpen(true)}
              className={`p-2 rounded-full ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
              aria-label="Άνοιγμα μενού"
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
            Κάντε Κράτηση
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
            Από το 1980
          </p>

          <h1 className="font-display font-extrabold text-white leading-[0.95] tracking-tight">
            <span className="hero-line-1 block text-4xl sm:text-6xl md:text-7xl">
              Καλωσορίσατε.
            </span>
            <span
              className="hero-line-2 block font-serif italic font-medium text-accent text-5xl sm:text-7xl md:text-8xl lg:text-9xl mt-2"
              style={{ lineHeight: '0.92' }}
            >
              Αυθεντικές Κυπριακές Γεύσεις.
            </span>
          </h1>

          <p className="hero-meta mx-auto max-w-xl text-white/75 text-base sm:text-lg mt-8 leading-relaxed">
            Βυθιστείτε σε ένα αληθινό κυπριακό ταξίδι γεύσεων στην <span className="text-white font-semibold">Tony's Taverna</span>. Η οικογενειακή μας αυλή προσφέρει λαχταριστούς μεζέδες, σιγοψημένο κλέφτικο και ζουμερά ψητά, σερβιρισμένα με ζεστή φιλοξενία.
          </p>

          <div className="hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#kontakt"
              className="magnetic-btn group inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-full shadow-2xl shadow-accent/30 transition-all"
            >
              Κάντε Κράτηση
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
          <span className="font-mono uppercase text-[9px] tracking-[0.3em] text-accent">Κυλιση</span>
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
      title: 'Ιστορία',
      target: 33,
      suffix: '+',
      label: 'Χρόνια Παράδοσης',
      desc: 'Από το 1980, η οικογένειά μας σερβίρει τοπικά πιάτα σε ταξιδιώτες και ντόπιους στην καρδιά της Αγίας Νάπας.',
    },
    {
      n: '02',
      title: 'Ποιότητα',
      target: 100,
      suffix: '%',
      label: 'Σπιτικά',
      desc: 'Κάθε ντιπ, ψωμί, κεμπάπ και μαγειρευτό παρασκευάζεται καθημερινά από την αρχή με φρέσκα κυπριακά υλικά.',
    },
    {
      n: '03',
      title: 'Πλούσιος Μεζές',
      target: 20,
      suffix: '+',
      label: 'Διαφορετικά Πιάτα',
      desc: 'Ο μεζές μας είναι μια θρυλική οδύσσεια γεύσεων που εκτείνεται σε πάνω από είκοσι μπουκιές από τα καλύτερα προϊόντα της Κύπρου.',
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
              ∕ Η Αλήθεια των Αριθμών
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink leading-[1.05] tracking-tight">
              Η αγάπη πίσω
              <span className="block font-serif italic font-medium text-accent">από κάθε γεύμα.</span>
            </h2>
          </div>
          <p className="text-muted text-lg leading-relaxed max-w-md lg:text-right">
            Πίσω από τις κατσαρόλες βρίσκεται η οικογένειά μας, και πίσω από αυτούς τους αριθμούς κρύβονται χιλιάδες αναμνήσεις, ζεστές βραδιές και αληθινή φιλοξενία.
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
      title: 'Παρέα & Ποτά',
      tagline: 'Καλώς ήρθατε Αυθεντικές Κυπριακές Γεύσεις.',
      text: 'Καθίστε στην ολάνθιστη αυλή μας, στη σκιά των λεμονόδεντρων. Η βραδιά σας ξεκινάει με την "Παρέα" – να είστε μαζί με αυτούς που αγαπάτε. Σερβίρουμε δροσερό κυπριακό Brandy Sour, τοπική μπύρα ΚΕΟ ή μια κρύα κανάτα κρασί του σπιτιού, συνοδευόμενα από ζεστές πίτες, φρέσκιες ελιές και ντιπ.',
      image: '/photo.jpg',
      alt: 'Ρουστίκ ατμόσφαιρα στην αυλή της Tonys Taverna',
      meta: 'Το Δείπνο Ξεκινά',
    },
    {
      num: '02',
      title: 'Το Ταξίδι του Μεζέ',
      tagline: 'Μια ήσυχη αφθονία γεύσεων.',
      text: 'Στον Tony δεν υπάρχει βιασύνη. Τις επόμενες δύο ώρες, οι σερβιτόροι μας θα σας φέρουν πάνω από είκοσι διαφορετικά παραδοσιακά κυπριακά πιάτα σε άνετο ρυθμό. Από ζεστό ψητό χαλούμι, τραγανή λούντζα και πικάντικη σεφταλιά, μέχρι φρέσκες ντομάτες και ηλιόλουστη φέτα.',
      image: '/meze.jpg',
      alt: 'Κυπριακός μεζές με ντιπ, πίτα και ψητά πιάτα',
      meta: 'Το Κυρίως Πιάτο',
    },
    {
      num: '03',
      title: 'Το Μυστικό του Φούρνου',
      tagline: 'Σιγοψημένη αγάπη από το 1980.',
      text: 'Η πραγματική κορύφωση του γεύματος. Οι εξωτερικοί μας ξυλόφουρνοι ανάβουν τα χαράματα. Το θρυλικό αρνί (Κλέφτικο) καρυκεύεται απαλά και σφραγίζεται, στη συνέχεια σιγοψήνεται για 8 ώρες. Το κρέας είναι τόσο τρυφερό που πέφτει από το κόκαλο με ένα άγγιγμα, και σερβίρεται με νόστιμες κυπριακές πατάτες.',
      image: '/tonys-taverna-182479.webp',
      alt: 'Κλασικό τρυφερό και ζουμερό Αρνί Κλέφτικο με πατάτες λεμονάτες',
      meta: 'Το Σήμα Κατατεθέν μας',
    },
  ]

  return (
    <section id="proces" ref={containerRef} className="relative px-4 sm:px-6 py-20 bg-background">
      <div className="max-w-7xl mx-auto mb-16 px-2 sm:px-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
          ∕ Ενα βραδυ στην Αγια Ναπα
        </span>
        <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight max-w-3xl">
          Η Εμπειρία της Ταβέρνας.
          <span className="block font-serif italic font-medium text-accent">
            Πιάτο προς πιάτο.
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
                    Πρωτόκολλο του Tony
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
                    Βήμα {step.num}
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
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">∕ Το Μενού μας</span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl mt-4 leading-[1.05] tracking-tight">
              Παραδοσιακά Πιάτα,
              <span className="block font-serif italic font-medium text-accent mt-1">
                φτιαγμένα με αγάπη.
              </span>
            </h2>
          </div>
          <p className="text-white/60 max-w-md text-sm sm:text-base leading-relaxed">
            Κάθε μπουκιά φέρει το σημάδι πανάρχαιων οικογενειακών συνταγών. Χρησιμοποιούμε μόνο τα καλύτερα τοπικά υλικά και κρέας ψημένο σε ανοιχτή φωτιά.
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
                    Κάρτα {String(i + 1).padStart(2, '0')}
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
      title: "Επιλογή Ταξιδιωτών TripAdvisor",
      text: 'Τιμημένοι και προτεινόμενοι χρόνο με τον χρόνο από τους επισκέπτες μας για την αξεπέραστη εξυπηρέτηση και τις αυθεντικές κυπριακές γεύσεις.',
    },
    {
      Icon: ShieldCheck,
      title: 'Τρεις Γενιές Συνταγών',
      text: 'Ο Tony έμαθε να μαγειρεύει από τη γιαγιά του, και εμείς προστατεύουμε τις παλιές παραδόσεις απέναντι στις σημερινές τάσεις του fast-food.',
    },
    {
      Icon: Clock,
      title: 'Ζεστή Φιλοξενία',
      text: 'Σε εμάς δεν είστε απλώς πελάτης· είστε καλεσμένος στο σπίτι μας. Ανυπομονούμε να σας καλωσορίσουμε σαν έναν παλιό φίλο.',
    },
  ]

  return (
    <section ref={ref} className="relative py-16 sm:py-24 px-6 bg-white border-t border-divider">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-primary">
            ∕ Γιατί να μας επισκεφθείτε
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-ink mt-3 tracking-tight">
            Κάτι Περισσότερο Από Ένα Δείπνο.
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
            Κλείστε το Τραπέζι σας Τώρα
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
    guests: '2 άτομα',
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
              ∕ Κράτηση Τραπεζιού
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-ink mt-4 leading-[1.05] tracking-tight">
              Κλείστε Τραπέζι
              <span className="block font-serif italic font-medium text-accent">
                Για Απόψε.
              </span>
            </h2>
            <p className="text-muted text-base sm:text-lg mt-6 leading-relaxed max-w-md">
              Στείλτε μας το αίτημά σας για κράτηση. Θα επιβεβαιώσουμε την κράτησή σας το συντομότερο δυνατόν μέσω SMS ή e-mail.
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
                    Καλέστε μας
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
                    Στείλτε μας e-mail
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
                    Βρείτε μας εδώ
                  </span>
                  <span className="font-display font-semibold text-ink text-base sm:text-lg">
                    Λεωφόρος Νησί 10, Αγία Νάπα, Κύπρος
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
                  Άνοιγμα χάρτη <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              {/* Interactive map placeholder */}
              <div className="relative h-28 bg-primary/5 rounded-2xl border border-divider/40 flex items-center justify-center text-center px-4 overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute h-8 w-8 rounded-full bg-accent/20 animate-ping" />
                <div className="relative z-10">
                  <MapPin className="h-6 w-6 text-accent mx-auto mb-1.5" />
                  <p className="text-[11px] font-bold text-ink">Tony's Taverna Αγία Νάπα</p>
                  <p className="text-[9px] text-muted">Λεωφόρος Νησί, απέναντι από το μοναστήρι</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-3xl bg-accent/5 border border-accent/15">
              <p className="font-mono text-[10px] uppercase tracking-widest text-accent mb-1.5 font-bold">
                Πολιτική Κρατήσεων
              </p>
              <p className="text-xs text-muted leading-relaxed">
                Κρατάμε τα τραπέζια για 15 λεπτά το πολύ. Εάν καθυστερήσετε, παρακαλούμε καλέστε μας. Για παρέες άνω των 10 ατόμων, επικοινωνήστε μαζί μας τηλεφωνικά.
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
                      label="Το Όνομά σας"
                      required
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                    <Field
                      label="Διεύθυνση Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                    <Field
                      label="Αριθμός Τηλεφώνου"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(v) => setForm({ ...form, phone: v })}
                    />
                    <div>
                      <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
                        Αριθμός Ατόμων *
                      </label>
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full bg-background border border-divider rounded-2xl px-4 py-3.5 text-ink focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition font-body font-medium"
                      >
                        <option>1 άτομο</option>
                        <option>2 άτομα</option>
                        <option>3 άτομα</option>
                        <option>4 άτομα</option>
                        <option>5 άτομα</option>
                        <option>6 άτομα</option>
                        <option>7 άτομα</option>
                        <option>8 άτομα</option>
                        <option>9 άτομα</option>
                        <option>10+ άτομα</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-5">
                    <Field
                      label="Επιθυμητή Ημερομηνία & Ώρα *"
                      type="text"
                      required
                      placeholder="Π.χ. Σάββατο 15 Αυγούστου στις 19:30"
                      value={form.date}
                      onChange={(v) => setForm({ ...form, date: v })}
                    />
                  </div>

                  <div className="mt-5">
                    <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted mb-2 block">
                      Ειδικές Απαιτήσεις ή Αλλεργίες
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={4}
                      placeholder="Γράψτε εδώ αν έχετε αλλεργίες, αν χρειάζεστε παιδικά καρεκλάκια, ή αν προτιμάτε τραπέζι στην αυλή..."
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
                        Επισυνάψτε επιλογές μενού ή αιτήματα (προαιρετικό)
                      </p>
                      <p className="text-[10px] text-muted mt-0.5">
                        Κάντε κλικ ή σύρετε αρχεία εδώ (έως 5 εικόνες)
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
                      Θα σας απαντήσουμε το συντομότερο δυνατό. Τα πεδία με * είναι υποχρεωτικά.
                    </p>
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="magnetic-btn inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-full shadow-lg shadow-accent/25 disabled:opacity-50"
                    >
                      {status === 'sending' ? 'Αποστολή...' : 'Αποστολή αιτήματος'}
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
                    Το αίτημα κράτησης στάλθηκε!
                  </h3>
                  <p className="text-muted max-w-md mx-auto text-sm leading-relaxed">
                    Σας ευχαριστούμε πολύ! Θα ελέγξουμε άμεσα τη διαθεσιμότητα και θα σας στείλουμε επιβεβαίωση μέσω e-mail ή SMS το συντομότερο δυνατό. Τα λέμε κάτω από τις λεμονιές!
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
            Παραδοσιακό φαγητό,
            <span className="font-serif italic font-medium text-accent block">
              ζεστό καλωσόρισμα.
            </span>
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mt-8 gap-6">
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              Ζήστε την αυθεντική κυπριακή φιλοξενία στην Αγία Νάπα, στην Tony's Taverna. Ανάβουμε τα κάρβουνα κάθε βράδυ και σας υποδεχόμαστε σαν οικογένεια.
            </p>
            <a
              href="#kontakt"
              className="magnetic-btn inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-7 py-3.5 rounded-full self-start sm:self-auto shadow-lg"
            >
              Κλείστε Τραπέζι
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Detailed links grid */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-9 w-9 rounded-full bg-accent flex items-center justify-center">
                <img src="/6b08b95f-f56f-45a2-97c6-c79166443ce5.jpg" alt="Logo" className="h-12 sm:h-14 w-12 sm:w-14 object-cover rounded-full shadow-md" />
              </span>
              <span className="font-display font-bold text-lg">Tony's Taverna</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Από το 1980, η οικογένειά μας σερβίρει αυθεντικούς μεζέδες, τραγανή σούβλα και το καλύτερο κλέφτικο στην ολάνθιστη αυλή μας στην Αγία Νάπα.
            </p>
            <p className="font-mono text-[9px] uppercase tracking-widest text-white/30 mt-6">
              ΑΦΜ: CY1009893T
            </p>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4 font-bold">
              Μενού
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
              Η Ταβέρνα
            </p>
            <ul className="space-y-2.5">
              <li><a href="#filosofi" className="text-white/65 hover:text-accent transition text-sm">Οι Πυλώνες μας</a></li>
              <li><a href="#proces" className="text-white/65 hover:text-accent transition text-sm">Η Εμπειρία</a></li>
              <li><a href="#kontakt" className="text-white/65 hover:text-accent transition text-sm">Κρατήσεις</a></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-4 font-bold">
              Επικοινωνία
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
                Λεωφόρος Νησί 10,<br />
                5330 Αγία Νάπα, Κύπρος
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
              Η Ταβέρνα είναι Ανοιχτή · Ανάβουμε τα κάρβουνα
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-white/50 text-xs font-mono">
            <Link to="/privacy" className="hover:text-accent transition">
              Πολιτική Απορρήτου
            </Link>
            <Link to="/terms" className="hover:text-accent transition">
              Όροι
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
export default function AppEl({ onSwitchLanguage }) {
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









