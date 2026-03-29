import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LuClipboardList, LuPalette, LuCalendarCheck, LuHeartHandshake } from 'react-icons/lu'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

/* ─────────────────────────────────────────
   IMAGE MAP — place these in src/assets/
   and rename to match exactly:
─────────────────────────────────────────
  services-hero.png        → hero background (two women with clipboard)

  Each service needs TWO images:
  svc-weddings-main.png        svc-weddings-inset.png
  svc-engagements-main.png     svc-engagements-inset.png
  svc-bridal-main.png          svc-bridal-inset.png
  svc-baby-main.png            svc-baby-inset.png
  svc-birthdays-main.png       svc-birthdays-inset.png
  svc-proposals-main.png       svc-proposals-inset.png
  svc-corporate-main.png       svc-corporate-inset.png
  svc-funerals-main.png        svc-funerals-inset.png
───────────────────────────────────────── */
import servicesHero       from '../assets/servicehero.png'
import weddingsMain       from '../assets/wedding.png'
import weddingsInset      from '../assets/wedding2.png'
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

/* ── Services data ── */
const services = [
  {
    title: 'WEDDINGS',
    main: weddingsMain,
    inset: weddingsInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall
Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold: `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    title: 'ENGAGEMENTS',
    main: engagementsMain,
    inset: engagementsInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall
Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold: `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    title: 'BRIDAL SHOWERS',
    main: bridalMain,
    inset: bridalInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall
Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold: `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    title: 'BABY SHOWERS',
    main: babyMain,
    inset: babyInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall
Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold: `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    title: 'BIRTHDAYS',
    main: birthdaysMain,
    inset: birthdaysInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall
Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold: `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    title: 'PROPOSALS',
    main: proposalsMain,
    inset: proposalsInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall
Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold: `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    title: 'CORPORATE EVENTS',
    main: corporateMain,
    inset: corporateInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall
Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold: `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
  {
    title: 'FUNERALS',
    main: funeralsMain,
    inset: funeralsInset,
    body1: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall
Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s,`,
    bold: `When An Unknown Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book.
It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting,
Remaining Essentiall`,
    body2: `Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The 1500s, When An Unknown
Printer Took A Galley Of Type And Scrambled It To Make A Type Specimen Book. It Has Survived
Not Only Five Centuries, But Also The Leap Into Electronic Typesetting, Remaining Essentiall`,
  },
]

/* ── Approach steps ── */
const approachSteps = [
  { icon: <LuClipboardList size={30} />, label: 'Consultation and\nplanning',        highlight: false },
  { icon: <LuPalette size={30} />,       label: 'Design and\nconceptualization',      highlight: true  },
  { icon: <LuCalendarCheck size={30} />, label: 'Execution and\ncoordination',        highlight: false },
  { icon: <LuHeartHandshake size={30} />,label: 'Follow-up',                          highlight: false },
]

export default function Services() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

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
      ══════════════════════════════════════ */}
      <section style={{
        padding: '88px 64px 0',
        maxWidth: '1280px',
        margin: '0 auto',
        position: 'relative',
      }}>

        {/* Slide content — fades in/out on change */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '48px',
          opacity: animating ? 0 : 1,
          transition: 'opacity 0.22s ease',
        }}>

          {/* ── LEFT: olive bg + gold border + portrait ── */}
          <div style={{
            flex: '0 0 42%',
            position: 'relative',
            minHeight: '520px',
          }}>
            {/* Olive background block */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '74%', height: '80%',
              backgroundColor: '#6B7C3E',
              zIndex: 0,
            }} />
            {/* Gold border frame */}
            <div style={{
              position: 'absolute',
              top: '28px', left: '20px',
              width: '62%', height: '68%',
              border: '2px solid #C2A14D',
              zIndex: 1,
            }} />
            {/* Main portrait image */}
            <img
              key={`main-${current}`}
              src={svc.main}
              alt={svc.title}
              style={{
                position: 'absolute',
                top: '44px', left: '36px',
                width: '60%', height: '66%',
                objectFit: 'cover',
                zIndex: 2,
                display: 'block',
              }}
            />
          </div>

          {/* ── RIGHT: title, text, inset image ── */}
          <div style={{ flex: 1, paddingTop: '8px' }}>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 600,
              color: '#6B7C3E',
              letterSpacing: '0.06em',
              marginBottom: '28px',
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

            {/* Inset photo */}
            <img
              key={`inset-${current}`}
              src={svc.inset}
              alt={`${svc.title} detail`}
              style={{
                width: '62%',
                aspectRatio: '4/3',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* ── Pagination dots + arrow controls ── */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          padding: '52px 0 72px',
        }}>
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous service"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px', color: '#aaa',
              transition: 'color 0.2s',
              display: 'flex', alignItems: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#C2A14D'}
            onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
          >
            <FiChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {services.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to ${services[i].title}`}
                style={{
                  background: 'none', border: 'none', cursor: 'pointer',
                  padding: '4px 0',
                  display: 'flex', alignItems: 'center',
                }}
              >
                <span style={{
                  display: 'block',
                  width: i === current ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: i === current ? '#C2A14D' : '#ddd',
                  transition: 'all 0.3s ease',
                }} />
              </button>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next service"
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '4px', color: '#aaa',
              transition: 'color 0.2s',
              display: 'flex', alignItems: 'center',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#C2A14D'}
            onMouseLeave={e => e.currentTarget.style.color = '#aaa'}
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* Slide counter (optional — matches design aesthetic) */}
        <div style={{
          position: 'absolute',
          bottom: '72px', right: '64px',
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px', letterSpacing: '0.12em',
          color: '#bbb',
        }}>
          {String(current + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. OUR APPROACH
      ══════════════════════════════════════ */}
      <section style={{
        padding: '80px 64px 96px',
        backgroundColor: '#fafaf8',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
          fontStyle: 'italic',
          color: '#C2A14D',
          letterSpacing: '0.06em',
          marginBottom: '56px',
        }}>
          Our Approach
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          maxWidth: '880px',
          margin: '0 auto',
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
                lineHeight: 1.7,
                whiteSpace: 'pre-line',
                textAlign: 'center',
                margin: 0,
              }}>
                {step.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. FOOTER CTA BAND
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#0F0F0F',
        padding: '80px 64px',
        textAlign: 'center',
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          fontWeight: 300, color: '#ffffff',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>
          EVENTIFY WITH K&amp;A
        </h2>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '12px', color: 'rgba(255,255,255,0.5)',
          letterSpacing: '0.04em',
          lineHeight: 1.9, marginBottom: '36px',
        }}>
          Hello, we are K&amp;A, trying to make an effort to put the right people for you to get the best results.<br />
          Just Insight
        </p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/services" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#ffffff',
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            ◎ Services
          </Link>
          <Link to="/contact" style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', letterSpacing: '0.12em',
            textTransform: 'uppercase', color: '#C2A14D',
            textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px',
          }}>
            ✦ Contact
          </Link>
        </div>
      </section>

    </main>
  )
}
