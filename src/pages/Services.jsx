import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LuClipboardList, LuPalette, LuCalendarCheck, LuHeartHandshake } from 'react-icons/lu'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

/* ─────────────────────────────────────────
   IMAGE MAP — place these in src/assets/
─────────────────────────────────────────
  servicehero.png          → hero background
  wedding.png              → main image (replace per service)
  wedding2.png             → inset image (replace per service)
───────────────────────────────────────── */
import servicesHero    from '../assets/servicehero.png'
import weddingsMain    from '../assets/wedding.png'
import weddingsInset   from '../assets/wedding2.png'
import engagementsMain    from '../assets/wedding.png'
import engagementsInset   from '../assets/wedding2.png'
import bridalMain         from '../assets/wedding.png'
import bridalInset        from '../assets/wedding2.png'
import babyMain           from '../assets/wedding.png'
import babyInset          from '../assets/wedding2.png'
import birthdaysMain      from '../assets/wedding.png'
import birthdaysInset     from '../assets/wedding2.png'
import proposalsMain      from '../assets/wedding.png'
import proposalsInset     from '../assets/wedding2.png'
import corporateMain      from '../assets/wedding.png'
import corporateInset     from '../assets/wedding2.png'
import funeralsMain       from '../assets/wedding.png'
import funeralsInset      from '../assets/wedding2.png'

/* ── Services data — each has a unique slug used as the URL hash ── */
const services = [
  {
    slug:  'weddings',
    title: 'WEDDINGS',
    main:  weddingsMain,
    inset: weddingsInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold:  `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    slug:  'engagements',
    title: 'ENGAGEMENTS',
    main:  engagementsMain,
    inset: engagementsInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold:  `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    slug:  'bridal-showers',
    title: 'BRIDAL SHOWERS',
    main:  bridalMain,
    inset: bridalInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold:  `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    slug:  'baby-showers',
    title: 'BABY SHOWERS',
    main:  babyMain,
    inset: babyInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold:  `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    slug:  'birthdays',
    title: 'BIRTHDAYS',
    main:  birthdaysMain,
    inset: birthdaysInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold:  `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    slug:  'proposals',
    title: 'PROPOSALS',
    main:  proposalsMain,
    inset: proposalsInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold:  `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    slug:  'corporate-events',
    title: 'CORPORATE EVENTS',
    main:  corporateMain,
    inset: corporateInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold:  `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    slug:  'funerals',
    title: 'FUNERALS',
    main:  funeralsMain,
    inset: funeralsInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold:  `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
]

const approachSteps = [
  { icon: <LuClipboardList size={30} />,   label: 'Consultation and\nplanning',   highlight: false },
  { icon: <LuPalette size={30} />,         label: 'Design and\nconceptualization', highlight: true  },
  { icon: <LuCalendarCheck size={30} />,   label: 'Execution and\ncoordination',   highlight: false },
  { icon: <LuHeartHandshake size={30} />,  label: 'Follow-up',                     highlight: false },
]

export default function Services() {
  const location = useLocation()
  const [current,   setCurrent]   = useState(0)
  const [animating, setAnimating] = useState(false)

  /* ── On load, check the URL hash and jump to that service ── */
  useEffect(() => {
    const hash = location.hash.replace('#', '')   // e.g. "funerals"
    if (hash) {
      const index = services.findIndex(s => s.slug === hash)
      if (index !== -1) {
        setCurrent(index)
        // Small delay so the page has painted before scrolling
        setTimeout(() => {
          const el = document.getElementById('service-display')
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location.hash])

  const goTo = (index) => {
    if (animating || index === current) return
    setAnimating(true)
    setTimeout(() => {
      setCurrent(index)
      setAnimating(false)
    }, 220)
  }

  const prev = () => goTo(current === 0 ? services.length - 1 : current - 1)
  const next = () => goTo(current === services.length - 1 ? 0 : current + 1)

  const svc = services[current]

  return (
    <main style={{ paddingTop: '72px' }}>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        height: '50vh', minHeight: '360px',
        overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <img src={servicesHero} alt="K&A Services" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,15,15,0.55) 0%, rgba(15,15,15,0.05) 60%, transparent 100%)',
        }} />
        <div className="fade-up" style={{ position: 'relative', zIndex: 2, padding: '48px 64px' }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', letterSpacing: '0.35em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)',
            marginBottom: '8px',
          }}>
            K&amp;A Events
          </p>
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 300, color: '#ffffff',
            letterSpacing: '0.08em', lineHeight: 1,
          }}>
            SERVICES
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. SERVICE SLIDER
          id="service-display" ← scroll target
      ══════════════════════════════════════ */}
      <section
        id="service-display"
        style={{
          padding: '88px 64px 0',
          maxWidth: '1280px',
          margin: '0 auto',
          position: 'relative',
          scrollMarginTop: '80px',   /* offset for fixed navbar */
        }}
      >
        {/* Slide content */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '48px',
          opacity: animating ? 0 : 1,
          transition: 'opacity 0.22s ease',
        }}>

          {/* LEFT: olive bg + gold border + portrait */}
          <div style={{ flex: '0 0 42%', position: 'relative', minHeight: '580px' }}>

            {/* 1. Olive green block — anchored top-left, extends to bottom-right */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '78%',
              height: '90%',
              backgroundColor: '#6B7C3E',
              zIndex: 0,
            }} />

            {/* 2. Gold border — inset inside olive, a gap shows on all 4 sides */}
            <div style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              width: 'calc(78% - 32px)',
              height: 'calc(90% - 32px)',
              border: '2px solid #C2A14D',
              zIndex: 1,
            }} />

            {/* 3. Photo — inset further inside the gold border */}
            <img
              key={`main-${current}`}
              src={svc.main}
              alt={svc.title}
              style={{
                position: 'absolute',
                top: '28px',
                left: '28px',
                width: 'calc(78% - 56px)',
                height: 'calc(90% - 56px)',
                objectFit: 'cover',
                objectPosition: 'center top',
                zIndex: 2,
                display: 'block',
              }}
            />
          </div>

          {/* RIGHT: title, text, inset image */}
          <div style={{ flex: 1, paddingTop: '8px' }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 600, color: '#6B7C3E',
              letterSpacing: '0.06em', marginBottom: '28px',
            }}>
              {svc.title}
            </h2>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '13px', color: '#666',
              lineHeight: '2', marginBottom: '20px',
            }}>
              {svc.body1}{' '}
              <strong style={{ color: '#0F0F0F', fontWeight: 600 }}>
                {svc.bold}
              </strong>
            </p>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '13px', color: '#666',
              lineHeight: '2', marginBottom: '32px',
            }}>
              {svc.body2}
            </p>
            <img
              key={`inset-${current}`}
              src={svc.inset}
              alt={`${svc.title} detail`}
              style={{
                width: '62%', aspectRatio: '4/3',
                objectFit: 'cover', display: 'block',
              }}
            />
          </div>
        </div>

        {/* Pagination dots + arrows */}
        <div style={{
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '16px',
          padding: '52px 0 72px',
        }}>
          <button onClick={prev} aria-label="Previous service" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px', color: '#aaa', transition: 'color 0.2s',
            display: 'flex', alignItems: 'center',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#C2A14D'}
            onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
          >
            <FiChevronLeft size={18} />
          </button>

          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${s.title}`}
                title={s.title}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '4px 0', display: 'flex', alignItems: 'center',
                }}
              >
                <span style={{
                  display: 'block',
                  width: i === current ? '24px' : '8px',
                  height: '8px', borderRadius: '4px',
                  backgroundColor: i === current ? '#C2A14D' : '#ddd',
                  transition: 'all 0.3s ease',
                }} />
              </button>
            ))}
          </div>

          <button onClick={next} aria-label="Next service" style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: '4px', color: '#aaa', transition: 'color 0.2s',
            display: 'flex', alignItems: 'center',
          }}
            onMouseEnter={e => e.currentTarget.style.color = '#C2A14D'}
            onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Slide counter */}
        <div style={{
          position: 'absolute', bottom: '72px', right: '64px',
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px', letterSpacing: '0.12em', color: '#bbb',
        }}>
          {String(current + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. OUR APPROACH
      ══════════════════════════════════════ */}
      <section style={{
        padding: '80px 64px 96px',
        backgroundColor: '#fafaf8', textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
          fontStyle: 'italic', color: '#C2A14D',
          letterSpacing: '0.06em', marginBottom: '56px',
        }}>
          Our Approach
        </p>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px', maxWidth: '880px', margin: '0 auto',
        }}>
          {approachSteps.map((step, i) => (
            <div key={i} style={{
              padding: '40px 20px 36px',
              backgroundColor: step.highlight ? '#C2A14D' : '#ffffff',
              border: step.highlight ? 'none' : '1px solid #ebebeb',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '18px',
            }}>
              <div style={{ color: step.highlight ? '#ffffff' : '#6B7C3E' }}>
                {step.icon}
              </div>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '12px',
                color: step.highlight ? '#ffffff' : '#666',
                lineHeight: 1.7, whiteSpace: 'pre-line',
                textAlign: 'center', margin: 0,
              }}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
