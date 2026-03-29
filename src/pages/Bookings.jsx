import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiCheck } from 'react-icons/fi'

/* ─────────────────────────────────────────
   IMAGE MAP — place these in src/assets/
─────────────────────────────────────────
  bookings-hero.jpeg     → hero background
  book-funerals.jpeg     → funerals card
  book-birthdays.jpeg    → birthdays card
  book-bridal.jpeg       → bridal showers card
───────────────────────────────────────── */
import bookingsHero  from '../assets/bookingshero.png'
import bookFunerals  from '../assets/funeral.png'
import bookBirthdays from '../assets/birthdays.png'
import bookBridal    from '../assets/shower.png'

const services = [
  'Weddings',
  'Engagements',
  'Bridal Showers',
  'Baby Showers',
  'Birthdays',
  'Proposals',
  'Corporate Events',
  'Funerals',
]

const industries = [
  'Default',
  'Hospitality',
  'Corporate',
  'Non-Profit',
  'Government',
  'Healthcare',
  'Education',
  'Other',
]

/* ── Each card links to /services#slug so the Services page
   reads the hash, activates that slide, and scrolls to it ── */
const eventCards = [
  { label: 'Funerals',       img: bookFunerals,  to: '/services#funerals'       },
  { label: 'Birthdays',      img: bookBirthdays, to: '/services#birthdays'      },
  { label: 'Bridal Showers', img: bookBridal,    to: '/services#bridal-showers' },
]

/* ── Shared input styles ── */
const labelStyle = {
  display: 'block',
  fontFamily: "'Jost', sans-serif",
  fontSize: '12px', color: '#555',
  marginBottom: '6px', letterSpacing: '0.04em',
}

const inputStyle = {
  width: '100%', padding: '12px 14px',
  fontFamily: "'Jost', sans-serif",
  fontSize: '13px', color: '#0F0F0F',
  backgroundColor: '#ffffff',
  border: '1px solid #ddd',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

const selectStyle = {
  ...inputStyle,
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center',
  paddingRight: '36px',
  cursor: 'pointer',
}

export default function Bookings() {
  const [form, setForm] = useState({
    fullName: '', email: '', phone: '',
    service: '', company: '', industry: '',
    callPurpose: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focused,   setFocused]   = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  const focus  = name => ({ ...inputStyle, borderColor: focused === name ? '#C2A14D' : '#ddd' })
  const focusSel = name => ({ ...selectStyle, borderColor: focused === name ? '#C2A14D' : '#ddd' })

  return (
    <main style={{ paddingTop: '72px' }}>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        height: '55vh', minHeight: '380px',
        overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <img src={bookingsHero} alt="Book an event" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center top',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,15,15,0.6) 0%, rgba(15,15,15,0.05) 60%, transparent 100%)',
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
            fontSize: 'clamp(2.5rem, 7vw, 5.5rem)',
            fontWeight: 300, color: '#ffffff',
            letterSpacing: '0.06em', lineHeight: 1,
          }}>
            BOOK AN EVENT
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. HEADING + SUBTEXT
      ══════════════════════════════════════ */}
      <section style={{
        padding: '72px 24px 48px',
        textAlign: 'center',
        maxWidth: '780px', margin: '0 auto',
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
          fontWeight: 600, color: '#C2A14D',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: '20px',
        }}>
          Book An Event
        </h2>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '13px', color: '#888', lineHeight: '2',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat, nunc ut porttitor pulvinar,
          neque felis efficitur purus, et ornare sem enim in diam. Maecenas ultrices placerat dignissim.
          Vestibulum at ultrices odio.
        </p>
      </section>

      {/* ══════════════════════════════════════
          3. BOOKING FORM
      ══════════════════════════════════════ */}
      <section style={{ padding: '0 64px 80px', maxWidth: '1100px', margin: '0 auto' }}>

        {submitted ? (
          <div style={{
            textAlign: 'center', padding: '80px 24px',
            border: '1px solid #ebebeb', backgroundColor: '#fafaf8',
          }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              backgroundColor: '#6B7C3E',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 24px',
            }}>
              <FiCheck size={28} color="#fff" />
            </div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '2rem', fontWeight: 600,
              color: '#0F0F0F', marginBottom: '12px',
            }}>
              Thank you!
            </h3>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '13px', color: '#888', lineHeight: '2',
            }}>
              We've received your booking request. A member of the K&amp;A team will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            {/* Row 1 — Name | Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={labelStyle}>Full name</label>
                <input type="text" name="fullName" placeholder="Enter your name"
                  value={form.fullName} onChange={handleChange}
                  onFocus={() => setFocused('fullName')} onBlur={() => setFocused('')}
                  style={focus('fullName')} required />
              </div>
              <div>
                <label style={labelStyle}>Email address</label>
                <input type="email" name="email" placeholder="Enter your email address"
                  value={form.email} onChange={handleChange}
                  onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                  style={focus('email')} required />
              </div>
            </div>

            {/* Row 2 — Phone | Service type */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={labelStyle}>Phone number</label>
                <input type="tel" name="phone" placeholder="Enter your phone number"
                  value={form.phone} onChange={handleChange}
                  onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
                  style={focus('phone')} />
              </div>
              <div>
                <label style={labelStyle}>Type of event / service</label>
                <select name="service" value={form.service} onChange={handleChange}
                  onFocus={() => setFocused('service')} onBlur={() => setFocused('')}
                  style={focusSel('service')} required>
                  <option value="" disabled>Select your event type</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* Row 3 — Company | Industry */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
              <div>
                <label style={labelStyle}>Company <span style={{ color: '#bbb' }}>(optional)</span></label>
                <input type="text" name="company" placeholder="Enter your company's name"
                  value={form.company} onChange={handleChange}
                  onFocus={() => setFocused('company')} onBlur={() => setFocused('')}
                  style={focus('company')} />
              </div>
              <div>
                <label style={labelStyle}>Industry</label>
                <select name="industry" value={form.industry} onChange={handleChange}
                  onFocus={() => setFocused('industry')} onBlur={() => setFocused('')}
                  style={focusSel('industry')}>
                  {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                </select>
              </div>
            </div>

            {/* Row 4 — Purpose | Message */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
              <div>
                <label style={labelStyle}>Purpose of call</label>
                <input type="text" name="callPurpose" placeholder="What would you like to discuss?"
                  value={form.callPurpose} onChange={handleChange}
                  onFocus={() => setFocused('callPurpose')} onBlur={() => setFocused('')}
                  style={focus('callPurpose')} />
              </div>
              <div>
                <label style={labelStyle}>Additional message</label>
                <textarea name="message" placeholder="Enter the message here"
                  value={form.message} onChange={handleChange}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
                  rows={4} style={{ ...focus('message'), resize: 'vertical', minHeight: '100px' }} />
              </div>
            </div>

            {/* Disclaimer */}
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: '#aaa', lineHeight: '1.9', marginBottom: '12px' }}>
              K&amp;A will use the information you provide to contact you regarding your event request and discuss how
              we can support your planning needs. Your information will be handled with care and in accordance with
              our Privacy Policy. You may update your details, opt out of future communications, or raise any concerns
              at any time by contacting us.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: '11px', color: '#aaa', lineHeight: '1.9', marginBottom: '40px' }}>
              By clicking Submit, you agree to be contacted by K&amp;A regarding your event. We respect your privacy
              and will only use your information to provide the services you have requested. Occasionally, we may
              share information about other services or offerings that may be relevant to you.
            </p>

            {/* Submit */}
            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn btn-olive"
                style={{ padding: '14px 56px', fontSize: '12px', letterSpacing: '0.15em' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#82994c'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6B7C3E'}>
                Submit
              </button>
            </div>
          </form>
        )}
      </section>

      {/* ══════════════════════════════════════
          4. EXPLORE MORE SERVICES
          Cards link to /services#slug
      ══════════════════════════════════════ */}
      <section style={{ padding: '0 64px 96px', maxWidth: '1100px', margin: '0 auto' }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '13px', color: '#888',
          lineHeight: '2', marginBottom: '40px',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat, nunc ut porttitor pulvinar,
          neque felis efficitur purus, et ornare sem enim in diam. Maecenas ultrices placerat dignissim.
          Vestibulum at ultrices odio.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {eventCards.map((card, i) => (
            <div key={i}>
              {/* Image */}
              <div style={{ overflow: 'hidden', aspectRatio: '4/3', marginBottom: '14px' }}
                onMouseEnter={e => e.currentTarget.querySelector('img').style.transform = 'scale(1.05)'}
                onMouseLeave={e => e.currentTarget.querySelector('img').style.transform = 'scale(1)'}
              >
                <img src={card.img} alt={card.label} style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  transition: 'transform 0.5s ease',
                }} />
              </div>

              {/* Label arrow — uses Link with hash */}
              <Link
                to={card.to}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: '11px', letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#C2A14D',
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  textDecoration: 'none',
                  transition: 'gap 0.2s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.gap = '14px'}
                onMouseLeave={e => e.currentTarget.style.gap = '8px'}
              >
                {card.label} →
              </Link>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
