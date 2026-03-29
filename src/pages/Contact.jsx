import { useState } from 'react'
import { FiCheck, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

/* ─────────────────────────────────────────
   IMAGE MAP — place these in src/assets/
─────────────────────────────────────────
  contact-hero.jpeg   → hero background (laptop with "Contact Us")
───────────────────────────────────────── */
import contactHero from '../assets/contacthero.png'

const topics = [
  'Select Topic',
  'Wedding Planning',
  'Engagement Planning',
  'Bridal Shower',
  'Baby Shower',
  'Birthday Event',
  'Proposal Planning',
  'Corporate Event',
  'Funeral Planning',
  'General Inquiry',
]

/* ── shared styles ── */
const labelStyle = {
  display: 'block',
  fontFamily: "'Jost', sans-serif",
  fontSize: '12px',
  color: '#555',
  marginBottom: '6px',
  letterSpacing: '0.04em',
}

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  fontFamily: "'Jost', sans-serif",
  fontSize: '13px',
  color: '#0F0F0F',
  backgroundColor: '#ffffff',
  border: '1px solid #ddd',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

const infoLabelStyle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: '1.15rem',
  fontWeight: 600,
  color: '#6B7C3E',
  marginBottom: '6px',
}

const infoTextStyle = {
  fontFamily: "'Jost', sans-serif",
  fontSize: '13px',
  color: '#555',
  lineHeight: '1.8',
}

export default function Contact() {
  const [form, setForm] = useState({
    topic: '',
    email: '',
    country: '',
    organisation: '',
    industry: '',
    phone: '',
  })
  const [focused, setFocused]   = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
  }

  const getFocusStyle = (name) => ({
    ...inputStyle,
    borderColor: focused === name ? '#C2A14D' : '#ddd',
  })

  const selectStyle = (name) => ({
    ...getFocusStyle(name),
    appearance: 'none',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23999' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right 14px center',
    paddingRight: '36px',
    cursor: 'pointer',
  })

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
        <img src={contactHero} alt="Contact K&A" style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
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
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 300, color: '#ffffff',
            letterSpacing: '0.08em', lineHeight: 1,
          }}>
            CONTACT
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. CONTACT INFO
      ══════════════════════════════════════ */}
      <section style={{
        padding: '80px 64px 64px',
        maxWidth: '1100px', margin: '0 auto',
      }}>
        {/* Heading */}
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
          fontWeight: 600, color: '#6B7C3E',
          marginBottom: '16px',
        }}>
          Contact K&amp;A
        </h2>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '13px', color: '#888',
          lineHeight: '2', maxWidth: '460px',
          marginBottom: '48px',
        }}>
          Nam eget viverra libero. Nullam ac gravida dui. Sed scelerisque odio nec dui feugiat viverra.
          Proin nec ullamcorper mi. In pellentesque nulla vel libero mollis, et lobortis libero faucibus.
          Praesent dapibus enim risus, in iaculis quam semper et.
        </p>

        {/* Info grid — 2 columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '40px 80px',
          marginBottom: '48px',
        }}>

          {/* Address */}
          <div>
            <p style={infoLabelStyle}>Address</p>
            <p style={infoTextStyle}>
              Proin nec ullamcorper mi. In<br />
              pellentesque nulla vel libero mollis.
            </p>
          </div>

          {/* Phone */}
          <div>
            <p style={infoLabelStyle}>Phone</p>
            <p style={infoTextStyle}>
              (+233) 0244-330-870 / (+233) 0559-733-986
            </p>
          </div>

          {/* Personal Email */}
          <div>
            <p style={infoLabelStyle}>Personal Email</p>
            <a
              href="mailto:verafywithka@gmail.com"
              style={{ ...infoTextStyle, color: '#C2A14D', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              verafywithka@gmail.com
            </a>
          </div>

          {/* Contact Us (WhatsApp / direct) */}
          <div>
            <p style={infoLabelStyle}>CONTACT US</p>
            <a
              href="tel:+233244217828"
              style={{ ...infoTextStyle, color: '#C2A14D', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
              onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
            >
              0244217828 / 0544169345
            </a>
          </div>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {[
            { icon: <FaFacebookF size={14} />,  href: 'https://facebook.com',  label: 'Facebook'  },
            { icon: <FaLinkedinIn size={14} />, href: 'https://linkedin.com',  label: 'LinkedIn'  },
            { icon: <FaInstagram size={14} />,  href: 'https://instagram.com', label: 'Instagram' },
            { icon: <FaTwitter size={14} />,    href: 'https://twitter.com',   label: 'Twitter'   },
            { icon: <FaYoutube size={14} />,    href: 'https://youtube.com',   label: 'YouTube'   },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '36px', height: '36px',
                borderRadius: '50%',
                border: '1px solid #ddd',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#888',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C2A14D'
                e.currentTarget.style.color = '#C2A14D'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = '#ddd'
                e.currentTarget.style.color = '#888'
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. DIVIDER
      ══════════════════════════════════════ */}
      <div style={{ borderTop: '1px solid #ebebeb', margin: '0 64px' }} />

      {/* ══════════════════════════════════════
          4. CONSULTATION FORM
      ══════════════════════════════════════ */}
      <section style={{
        padding: '80px 64px 96px',
        maxWidth: '1100px', margin: '0 auto',
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
          fontWeight: 600,
          color: '#C2A14D',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          textAlign: 'center',
          marginBottom: '48px',
        }}>
          Consultation
        </h2>

        {submitted ? (
          /* ── SUCCESS STATE ── */
          <div style={{
            textAlign: 'center',
            padding: '80px 24px',
            border: '1px solid #ebebeb',
            backgroundColor: '#fafaf8',
            maxWidth: '560px',
            margin: '0 auto',
          }}>
            <div style={{
              width: '64px', height: '64px',
              borderRadius: '50%',
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
              Message Sent!
            </h3>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '13px', color: '#888', lineHeight: '2',
            }}>
              Thank you for reaching out. The K&amp;A team will get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ maxWidth: '680px', margin: '0 auto' }}>

            {/* Topic label */}
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px', color: '#555',
              marginBottom: '8px', letterSpacing: '0.04em',
            }}>
              I want to talk to you about:
            </p>

            {/* Topic dropdown — full width */}
            <div style={{ marginBottom: '20px' }}>
              <select
                name="topic"
                value={form.topic}
                onChange={handleChange}
                onFocus={() => setFocused('topic')}
                onBlur={() => setFocused('')}
                style={selectStyle('topic')}
                required
              >
                {topics.map(t => (
                  <option key={t} value={t === 'Select Topic' ? '' : t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>

            {/* Subtext */}
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px', color: '#aaa',
              lineHeight: '1.9', marginBottom: '20px',
            }}>
              Nam consequat, nunc ut porttitor pulvinar, neque felis efficitur purus, et ornare sem enim in diam.
              Maecenas ultrices placerat dignissim. Vestibulum at ultrices odio.
            </p>

            {/* Email — full width */}
            <div style={{ marginBottom: '16px' }}>
              <input
                type="email" name="email"
                placeholder="Enter your email address"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused('email')}
                onBlur={() => setFocused('')}
                style={getFocusStyle('email')}
                required
              />
            </div>

            {/* Country */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Country</label>
              <input
                type="text" name="country"
                placeholder="Enter your country"
                value={form.country}
                onChange={handleChange}
                onFocus={() => setFocused('country')}
                onBlur={() => setFocused('')}
                style={getFocusStyle('country')}
              />
            </div>

            {/* Organisation */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Organisation</label>
              <input
                type="text" name="organisation"
                placeholder="Enter your organisation name"
                value={form.organisation}
                onChange={handleChange}
                onFocus={() => setFocused('organisation')}
                onBlur={() => setFocused('')}
                style={getFocusStyle('organisation')}
              />
            </div>

            {/* Industry */}
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Industry</label>
              <input
                type="text" name="industry"
                placeholder="Enter the industry you are in"
                value={form.industry}
                onChange={handleChange}
                onFocus={() => setFocused('industry')}
                onBlur={() => setFocused('')}
                style={getFocusStyle('industry')}
              />
            </div>

            {/* Phone Number */}
            <div style={{ marginBottom: '32px' }}>
              <label style={labelStyle}>Phone Number</label>
              <input
                type="tel" name="phone"
                placeholder="Enter your phone number"
                value={form.phone}
                onChange={handleChange}
                onFocus={() => setFocused('phone')}
                onBlur={() => setFocused('')}
                style={getFocusStyle('phone')}
              />
            </div>

            {/* Disclaimer */}
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px', color: '#aaa',
              lineHeight: '1.9', marginBottom: '12px',
            }}>
              K&amp;A will use the information you provide to contact you regarding your event request and discuss
              how we can support your planning needs. Your information will be handled with care and in accordance
              with our Privacy Policy. You may update your details, opt out of future communications, or raise any
              concerns at any time by contacting us.
            </p>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px', color: '#aaa',
              lineHeight: '1.9', marginBottom: '40px',
            }}>
              By clicking Submit, you agree to be contacted by K&amp;A regarding your event. We respect your privacy
              and will only use your information to provide the services you have requested. Occasionally, we may
              share information about other services or offerings that may be relevant to you.
            </p>

            {/* Submit */}
            <div style={{ textAlign: 'center' }}>
              <button
                type="submit"
                className="btn btn-olive"
                style={{ padding: '14px 64px', fontSize: '12px', letterSpacing: '0.15em' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#82994c'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#6B7C3E'}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </section>

    </main>
  )
}
