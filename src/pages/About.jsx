import { Link } from 'react-router-dom'
import { FiInstagram, FiMail } from 'react-icons/fi'
import { FaPinterestP } from 'react-icons/fa'

/* ─────────────────────────────────────────
   IMAGE MAP — place these in src/assets/
   and rename to match exactly:
─────────────────────────────────────────
  about-hero.png        → hero background (elegant event / styled shoot)
  about-story.png       → Our Story section — left portrait image
  about-team-k.png      → Team card — K (founder 1)
  about-team-a.png      → Team card — A (founder 2)
  about-mission.png     → full-width mission/mood image
───────────────────────────────────────── */
import aboutHero    from '../assets/homehero.png'
import aboutStory   from '../assets/division1.png'
import teamK        from '../assets/division1.png'
import teamA        from '../assets/division1.png'
import aboutMission from '../assets/division1.png'

/* ── Values data ── */
const values = [
  {
    number: '01',
    title: 'Intentionality',
    body: 'Every detail we touch is placed with purpose. We believe the smallest choices shape the most lasting memories.',
  },
  {
    number: '02',
    title: 'Elegance',
    body: 'We bring a refined eye to every event — marrying beauty with function so each moment feels effortlessly curated.',
  },
  {
    number: '03',
    title: 'Reliability',
    body: 'From first consultation to final farewell, we show up fully — on time, on brief, and beyond expectation.',
  },
  {
    number: '04',
    title: 'Connection',
    body: 'We take time to truly know our clients. Your story, your people, your vision — that\'s where every plan begins.',
  },
]

/* ── Stats ── */
const stats = [
  { value: '200+', label: 'Events Planned' },
  { value: '8',    label: 'Event Categories' },
  { value: '5★',   label: 'Client Rating' },
  { value: '6+',   label: 'Years of Experience' },
]

/* ── Team ── */
const team = [
  {
    src: teamK,
    name: 'K —',
    role: 'Co-Founder & Creative Director',
    bio: 'With an eye for storytelling through design, K brings the vision to life — transforming spaces into experiences that linger long after the last guest leaves.',
  },
  {
    src: teamA,
    name: 'A —',
    role: 'Co-Founder & Operations Lead',
    bio: 'Detail-obsessed and unflappable under pressure, A is the engine behind every seamless execution — the person who makes sure nothing is left to chance.',
  },
]

export default function About() {
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
        <img src={aboutHero} alt="About K&A Events" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,15,15,0.60) 0%, rgba(15,15,15,0.05) 60%, transparent 100%)',
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
            ABOUT
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. INTRO — centred tagline
      ══════════════════════════════════════ */}
      <section style={{
        padding: '80px 24px',
        textAlign: 'center',
        maxWidth: '720px',
        margin: '0 auto',
      }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px', letterSpacing: '0.32em',
          textTransform: 'uppercase', color: '#C2A14D',
          marginBottom: '20px',
        }}>
          Who We Are
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          fontWeight: 500, fontStyle: 'italic',
          color: '#0F0F0F',
          lineHeight: 1.5, marginBottom: '28px',
        }}>
          We are K&amp;A — event planners who believe every gathering deserves to feel like a once-in-a-lifetime moment.
        </h2>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '13px', color: '#888',
          lineHeight: '2',
        }}>
          Based in Ghana and serving clients across the continent and beyond, K&amp;A Events is a full-service
          event planning and management company. From intimate proposals to large-scale corporate gatherings,
          we bring creativity, precision and heart to everything we do.
        </p>
      </section>

      {/* ══════════════════════════════════════
          3. OUR STORY — image left | text right
          (mirrors the Home gold split layout)
      ══════════════════════════════════════ */}
      <section style={{ display: 'flex', minHeight: '420px' }}>

        {/* Image side */}
        <div style={{ flex: 1, minHeight: '360px', position: 'relative' }}>
          <img src={aboutStory} alt="Our Story" style={{
            width: '100%', height: '100%',
            objectFit: 'cover', display: 'block',
          }} />
          {/* Gold corner accent */}
          <div style={{
            position: 'absolute',
            bottom: '32px', right: '32px',
            width: '80px', height: '80px',
            border: '2px solid #C2A14D',
            opacity: 0.7,
          }} />
        </div>

        {/* Olive text side */}
        <div style={{
          flex: 1, backgroundColor: '#6B7C3E',
          padding: '72px 64px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', letterSpacing: '0.32em',
            textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
            marginBottom: '16px',
          }}>
            Our Story
          </p>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
            fontWeight: 600, color: '#ffffff',
            marginBottom: '24px',
          }}>
            Born from a passion for people and beautiful moments.
          </h3>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px', color: 'rgba(255,255,255,0.85)',
            lineHeight: '2', marginBottom: '16px',
          }}>
            K&amp;A Events was founded on a simple belief — that every person deserves an event that
            truly reflects who they are. What started as a shared passion between two friends grew into
            a company trusted by hundreds of clients to deliver moments that matter.
          </p>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '13px', color: 'rgba(255,255,255,0.75)',
            lineHeight: '2',
          }}>
            Over the years we have planned weddings, styled proposals, coordinated corporate
            galas, and held space for families during their most tender moments. Through it all,
            our commitment to excellence and care has never wavered.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. STATS BAR
      ══════════════════════════════════════ */}
      <section style={{
        backgroundColor: '#0F0F0F',
        padding: '56px 64px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '24px',
        textAlign: 'center',
      }}>
        {stats.map((s, i) => (
          <div key={i}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
              fontWeight: 600, color: '#C2A14D',
              marginBottom: '8px', lineHeight: 1,
            }}>
              {s.value}
            </p>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px', letterSpacing: '0.18em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)',
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </section>

      {/* ══════════════════════════════════════
          5. OUR VALUES
      ══════════════════════════════════════ */}
      <section style={{
        padding: '96px 64px',
        maxWidth: '1280px',
        margin: '0 auto',
      }}>
        {/* Section heading */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', letterSpacing: '0.32em',
            textTransform: 'uppercase', color: '#C2A14D',
            marginBottom: '12px',
          }}>
            What Drives Us
          </p>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
            fontWeight: 500, fontStyle: 'italic',
            color: '#0F0F0F',
          }}>
            Our Values
          </h3>
        </div>

        {/* 4-col value cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
        }}>
          {values.map((v, i) => (
            <div key={i} style={{
              padding: '40px 32px',
              backgroundColor: i === 1 ? '#C2A14D' : i === 2 ? '#6B7C3E' : '#fafaf8',
              display: 'flex', flexDirection: 'column', gap: '16px',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '2.2rem', fontWeight: 300,
                color: (i === 1 || i === 2) ? 'rgba(255,255,255,0.3)' : '#e8e1d4',
                lineHeight: 1,
              }}>
                {v.number}
              </p>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.25rem', fontWeight: 600,
                color: (i === 1 || i === 2) ? '#ffffff' : '#0F0F0F',
                letterSpacing: '0.04em',
              }}>
                {v.title}
              </h4>
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '12px',
                color: (i === 1 || i === 2) ? 'rgba(255,255,255,0.82)' : '#888',
                lineHeight: 1.9,
              }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. MISSION — full-width image + overlay text
          (mirrors the "Plan Your Event" banner on Home)
      ══════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
        <img src={aboutMission} alt="Our mission" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(15,15,15,0.60)',
        }} />
        <div style={{
          position: 'relative', zIndex: 2,
          maxWidth: '640px',
          margin: '0 auto',
          textAlign: 'center',
          padding: '0 32px',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', letterSpacing: '0.32em',
            textTransform: 'uppercase', color: '#C2A14D',
            marginBottom: '20px',
          }}>
            Our Mission
          </p>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
            fontWeight: 300, color: '#ffffff',
            lineHeight: 1.45, marginBottom: '28px',
            letterSpacing: '0.04em',
          }}>
            To turn every occasion into an experience that is felt long after the last guest has gone home.
          </h3>
          <Link to="/plan-your-event" className="btn btn-outline-white">
            Start Planning
          </Link>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. MEET THE TEAM
      ══════════════════════════════════════ */}
      <section style={{
        padding: '96px 64px',
        maxWidth: '1280px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px', letterSpacing: '0.32em',
          textTransform: 'uppercase', color: '#C2A14D',
          marginBottom: '12px',
        }}>
          The People Behind the Magic
        </p>
        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
          fontWeight: 500, fontStyle: 'italic',
          color: '#0F0F0F',
          marginBottom: '64px',
        }}>
          Meet the Team
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '48px',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {team.map((member, i) => (
            <div key={i} style={{ textAlign: 'left' }}>
              {/* Photo */}
              <div style={{
                overflow: 'hidden',
                aspectRatio: '3/4',
                marginBottom: '24px',
                position: 'relative',
              }}>
                <img
                  src={member.src}
                  alt={member.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover', display: 'block',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Gold bottom border accent */}
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  height: '3px', backgroundColor: '#C2A14D',
                }} />
              </div>

              {/* Name */}
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: '1.5rem', fontWeight: 600,
                color: '#0F0F0F', marginBottom: '4px',
              }}>
                {member.name}
              </h4>
              {/* Role */}
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '10px', letterSpacing: '0.22em',
                textTransform: 'uppercase', color: '#C2A14D',
                marginBottom: '16px',
              }}>
                {member.role}
              </p>
              {/* Bio */}
              <p style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: '12px', color: '#888',
                lineHeight: '2',
              }}>
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. SOCIAL CTA — mirrors Home insta section tone
      ══════════════════════════════════════ */}
      <section style={{
        padding: '72px 24px',
        backgroundColor: '#fafaf8',
        textAlign: 'center',
      }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px', letterSpacing: '0.32em',
          textTransform: 'uppercase', color: '#888',
          marginBottom: '8px',
        }}>
          Follow our journey
        </p>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
          fontStyle: 'italic', color: '#0F0F0F',
          marginBottom: '32px',
        }}>
          Behind the scenes with K&amp;A
        </p>
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
          {[
            { icon: <FiInstagram size={18} />, href: 'https://instagram.com',         label: 'Instagram' },
            { icon: <FaPinterestP size={17} />, href: 'https://pinterest.com',         label: 'Pinterest' },
            { icon: <FiMail size={18} />,       href: 'mailto:verafywithka@gmail.com', label: 'Email' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={{
                width: '44px', height: '44px',
                border: '1px solid #ddd',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#0F0F0F',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#C2A14D'
                e.currentTarget.style.borderColor = '#C2A14D'
                e.currentTarget.style.color = '#ffffff'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = '#ddd'
                e.currentTarget.style.color = '#0F0F0F'
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>

    </main>
  )
}
