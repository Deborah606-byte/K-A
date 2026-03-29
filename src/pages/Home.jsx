import { Link } from 'react-router-dom'
import { FiPlay } from 'react-icons/fi'

/* ─────────────────────────────────────────
   IMAGE MAP — place these in src/assets/
   and name them exactly as below.
─────────────────────────────────────────
  hero1.jpeg          → main hero background
  video-thumb1.jpeg   → first video section
  section1.jpeg       → right image in gold split
  video-thumb2.jpeg   → second video (about section)
  plan-bg.jpeg        → plan your event banner bg
  services1.jpeg      → services left image
  services2.jpeg      → services right image
  insta1.jpeg         → instagram grid (1–8)
  insta2.jpeg
  insta3.jpeg
  insta4.jpeg
  insta5.jpeg
  insta6.jpeg
  insta7.jpeg
  insta8.jpeg
───────────────────────────────────────── */
import hero1       from '../assets/homehero.png'
import videoThumb1 from '../assets/video1.png'
import section1    from '../assets/division1.png'
import videoThumb2 from '../assets/division2.png'
import planBg      from '../assets/division3.png'
import services1   from '../assets/ourservices.png'
import services2   from '../assets/ourservices.png'
import insta1      from '../assets/pic1.png'
import insta2      from '../assets/pic2.png'
import insta3      from '../assets/pic3.png'
import insta4      from '../assets/pic4.png'
import insta5      from '../assets/pic5.png'
import insta6      from '../assets/pic1.png'
import insta7      from '../assets/pic1.png'
import insta8      from '../assets/pic1.png'

const instaGrid = [insta1, insta2, insta3, insta4, insta5, insta6, insta7, insta8]

/* ── Reusable play button ── */
function PlayButton({ size = 64 }) {
  return (
    <div
      style={{
        width: size, height: size,
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.92)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
    >
      <FiPlay size={size * 0.32} style={{ color: '#C2A14D', marginLeft: '3px' }} />
    </div>
  )
}

export default function Home() {
  return (
    <main style={{ paddingTop: '72px' }}>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        height: '90vh', minHeight: '560px',
        overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <img src={hero1} alt="Elegant event setup" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,15,15,0.65) 0%, rgba(15,15,15,0.08) 55%, transparent 100%)',
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
            fontSize: 'clamp(3.5rem, 8vw, 7rem)',
            fontWeight: 300, color: '#ffffff',
            letterSpacing: '0.08em', lineHeight: 1,
          }}>
            HOME
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. TAGLINE + INTRO
      ══════════════════════════════════════ */}
      <section style={{
        padding: '72px 24px',
        textAlign: 'center',
        maxWidth: '780px', margin: '0 auto',
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 500, fontStyle: 'italic',
          color: '#0F0F0F', marginBottom: '24px', lineHeight: 1.5,
        }}>
          Turning Your Ideas Into Unforgettable Experiences
        </h2>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '13px', color: '#888', lineHeight: '2',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, fringilla vitae uma
          sed, lobortis interdum diam. Morbi risus urna, accumsan vitae purus quis, malesuada malesuada dolor.
          Praesent ut tortor nec neque cursus accumsan eu volutpat nisl. Maecenas ultrices placerat dignissim.
          Vestibulum at ultrices odio. Morbi mollis est fringilla nec. Suspendisse sed tempor nunc. Morbi
          mollis est fringilla nec ultrices. Morbi accumsan.
        </p>
      </section>

      {/* ══════════════════════════════════════
          3. VIDEO BLOCK 1
      ══════════════════════════════════════ */}
      <section style={{ padding: '0 64px 8px' }}>
        <div style={{
          position: 'relative', overflow: 'hidden',
          width: '100%', aspectRatio: '16/9', maxHeight: '500px',
        }}>
          <img src={videoThumb1} alt="Event planning video" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(15,15,15,0.22)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <PlayButton size={68} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. GOLD SPLIT — text left | image right
      ══════════════════════════════════════ */}
      <section style={{ display: 'flex', minHeight: '380px' }}>

        {/* Gold side */}
        <div style={{
          flex: 1, backgroundColor: '#C2A14D',
          padding: '56px 64px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px', color: 'rgba(255,255,255,0.92)',
            lineHeight: '2', marginBottom: '36px',
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, fringilla vitae uma
            sed, lobortis interdum diam.{' '}
            <strong style={{ color: '#ffffff', fontWeight: 600 }}>
              Morbi risus urna, accumsan vitae purus quis, malesuada malesuada dolor.
            </strong>{' '}
            Praesent ut tortor nec neque cursus accumsan eu volutpat nisl. Maecenas ultrices placerat
            dignissim. Vestibulum at ultrices odio. Morbi mollis est fringilla nec. Suspendisse sed tempor
            nunc. Morbi mollis est al nisl et. Morbi accumsan.
          </p>
          <Link to="/services" className="btn btn-olive" style={{ alignSelf: 'flex-start' }}>
            View Services
          </Link>
        </div>

        {/* Image side */}
        <div style={{ flex: 1, minHeight: '320px' }}>
          <img src={section1} alt="Event decoration" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. VIDEO 2 | ABOUT US
      ══════════════════════════════════════ */}
      <section style={{ display: 'flex', minHeight: '400px' }}>

        {/* Video side */}
        <div style={{ flex: 1, position: 'relative', minHeight: '320px' }}>
          <img src={videoThumb2} alt="About K&A" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(15,15,15,0.28)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <PlayButton size={58} />
          </div>
        </div>

        {/* Olive side */}
        <div style={{
          flex: 1, backgroundColor: '#6B7C3E',
          padding: '56px 64px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 600, color: '#ffffff', marginBottom: '20px',
          }}>
            About Us
          </h3>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px', color: 'rgba(255,255,255,0.88)',
            lineHeight: '2', marginBottom: '36px',
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi risus urna, accumsan etos
            main vitae purus quis, malesuada malesuada dolor. Proin nec ullamcorper nunc. Praesent ut
            tortor nec neque cursus tincidunt at luctus. Suspendisse sed tempor nunc. Morbi mollis est
            a nisl, tortor mi ex. Suspendisse sed tempor nunc. Morbi mollis est al nisl et est aliquet
            condimentum. Morbi accumsan.
          </p>
          <Link to="/about" className="btn btn-gold" style={{ alignSelf: 'flex-start' }}>
            Follow us
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. PLAN YOUR EVENT — full-width banner
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 0' }}>
        <img src={planBg} alt="Plan your event" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(194,161,77,0.78)',
        }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '680px', padding: '0 64px' }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px', color: 'rgba(255,255,255,0.93)',
            lineHeight: '2', marginBottom: '36px',
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, fringilla vitae
            uma sed, lobortis interdum diam. Morbi risus urna, accumsan vitae purus quis, malesuada
            malesuada dolor. Praesent ut tortor nec neque cursus accumsan eu volutpat nisl. Maecenas
            ultrices placerat dignissim. Vestibulum at ultrices odio. Morbi mollis est fringilla nec.
            Suspendisse sed tempor nunc. Morbi mollis est. Morbi accumsan.
          </p>
          <Link to="/plan-your-event" className="btn btn-outline-white">
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. OUR SERVICES — text left | images right
      ══════════════════════════════════════ */}
      <section style={{ display: 'flex', minHeight: '400px' }}>

        {/* Text side */}
        <div style={{
          flex: 1, backgroundColor: '#f9f7f3',
          padding: '56px 64px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 600, color: '#0F0F0F', marginBottom: '16px',
          }}>
            Our Services
          </h3>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px', color: '#888',
            lineHeight: '2', marginBottom: '36px',
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, fringilla vitae
            uma sed, lobortis interdum diam. Morbi risus urna, accumsan vitae purus quis, malesuada
            malesuada dolor. Praesent ut tortor nec neque cursus accumsan eu volutpat nisl. Maecenas
            ultrices placerat dignissim. Vestibulum at ultrices odio. Morbi mollis est fringilla nec.
            Suspendisse sed tempor. Morbi accumsan.
          </p>
          <Link to="/services" className="btn btn-olive" style={{ alignSelf: 'flex-start' }}>
            View Our Services
          </Link>
        </div>

        {/* 2-col image grid */}
        <div style={{
          flex: 1,
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          minHeight: '320px',
        }}>
          <img src={services1} alt="Service 1" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
          <img src={services2} alt="Service 2" style={{
            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
          }} />
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. INSTAGRAM / SOCIAL GRID
      ══════════════════════════════════════ */}
      <section style={{ padding: '80px 24px', textAlign: 'center' }}>
        <p className="section-label" style={{ display: 'block', marginBottom: '6px' }}>
          Follow us to see behind the scenes:
        </p>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '10px', letterSpacing: '0.28em',
          textTransform: 'uppercase', color: '#aaa',
          marginBottom: '48px',
        }}>
          Connected by K&amp;A
        </p>

        {/* 4-col × 2-row grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '6px',
          maxWidth: '1000px', margin: '0 auto',
        }}>
          {instaGrid.map((img, i) => (
            <div
              key={i}
              style={{ aspectRatio: '1', overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
              onMouseEnter={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1.06)'
                e.currentTarget.querySelector('.tint').style.opacity = '1'
              }}
              onMouseLeave={e => {
                e.currentTarget.querySelector('img').style.transform = 'scale(1)'
                e.currentTarget.querySelector('.tint').style.opacity = '0'
              }}
            >
              <img src={img} alt={`Behind the scenes ${i + 1}`} style={{
                width: '100%', height: '100%',
                objectFit: 'cover', display: 'block',
                transition: 'transform 0.5s ease',
              }} />
              <div className="tint" style={{
                position: 'absolute', inset: 0,
                backgroundColor: 'rgba(194,161,77,0.28)',
                opacity: 0, transition: 'opacity 0.3s ease',
              }} />
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
