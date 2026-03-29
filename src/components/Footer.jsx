import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import { FiStar } from 'react-icons/fi'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F0F0F', color: '#ffffff' }}>

      {/* ── TOP: CTA STRIP ── */}
      <div style={{
        padding: '72px 24px',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
      }}>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.6rem, 4vw, 2.4rem)',
          fontWeight: 600,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#ffffff',
          marginBottom: '12px',
        }}>
          Eventify With K&amp;A
        </h2>

        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '12px',
          color: 'rgba(255,255,255,0.5)',
          lineHeight: '1.8',
          marginBottom: '4px',
        }}>
          Hello, we are K&amp;A, trying to make an effort to put the right people for you to get the best results.
        </p>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '12px',
          fontStyle: 'italic',
          color: 'rgba(255,255,255,0.4)',
          marginBottom: '40px',
        }}>
          Just Insight
        </p>

        {/* Links row */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '40px' }}>
          <Link
            to="/services"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#C2A14D'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <FiStar size={12} style={{ color: '#6B7C3E' }} />
            Services
          </Link>

          <Link
            to="/contact"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.6)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = '#C2A14D'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            <span style={{
              width: '8px', height: '8px',
              borderRadius: '50%',
              backgroundColor: '#C2A14D',
              display: 'inline-block',
            }} />
            Contact
          </Link>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '28px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '20px',
      }}>

        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="K&A Events"
            style={{ height: '72px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Copyright */}
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.05em',
          textAlign: 'center',
          flex: 1,
        }}>
          © 2026 K&amp;A. All Rights Reserved.
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {[
            { icon: <FaFacebookF size={12} />, href: 'https://facebook.com',  label: 'Facebook' },
            { icon: <FaLinkedinIn size={12} />, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: <FaTwitter size={12} />,    href: 'https://twitter.com',  label: 'Twitter'  },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              aria-label={item.label}
              target="_blank"
              rel="noreferrer"
              style={{
                width: '32px', height: '32px',
                borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C2A14D'
                e.currentTarget.style.color = '#C2A14D'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
              }}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
