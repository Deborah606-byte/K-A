import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FiInstagram, FiMail, FiPhone } from 'react-icons/fi'
import { FaPinterestP } from 'react-icons/fa'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home',            to: '/' },
  { label: 'About',           to: '/about' },
  { label: 'Plan Your Event', to: '/plan-your-event' },
  { label: 'Services',        to: '/services' },
  { label: 'Gallery',         to: '/gallery' },
  { label: 'Contact',         to: '/contact' },
]

const iconStyle = {
  color: '#0F0F0F',
  transition: 'color 0.2s',
  display: 'flex',
  alignItems: 'center',
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const hoverGold  = e => (e.currentTarget.style.color = '#C2A14D')
  const hoverBlack = e => (e.currentTarget.style.color = '#0F0F0F')

  return (
    <header style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 100,
      backgroundColor: '#ffffff',
      boxShadow: scrolled ? '0 1px 16px rgba(0,0,0,0.07)' : '0 1px 0 rgba(0,0,0,0.06)',
      transition: 'box-shadow 0.3s ease',
    }}>

      {/* ── MAIN BAR ── */}
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 32px',
        height: '72px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
      }}>

        {/* Logo */}
        <Link to="/" onClick={closeMenu} style={{ flexShrink: 0 }}>
          <img
            src={logo}
            alt="K&A Events"
            style={{ height: '54px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop nav links */}
        <nav className="desktop-nav" style={{ gap: '28px' }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop social icons */}
        <div className="desktop-nav" style={{ gap: '16px', flexShrink: 0 }}>
          {[
            { icon: <FiInstagram size={16} />, href: 'https://instagram.com',         label: 'Instagram' },
            { icon: <FaPinterestP size={15} />, href: 'https://pinterest.com',         label: 'Pinterest' },
            { icon: <FiMail size={16} />,       href: 'mailto:verafywithka@gmail.com', label: 'Email' },
            { icon: <FiPhone size={16} />,      href: 'tel:+233244330870',             label: 'Phone' },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              style={iconStyle}
              onMouseEnter={hoverGold}
              onMouseLeave={hoverBlack}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '6px',
          }}
        >
          {[
            menuOpen ? 'rotate(45deg) translate(4px, 4px)'  : 'none',
            null,
            menuOpen ? 'rotate(-45deg) translate(4px, -4px)': 'none',
          ].map((transform, i) =>
            i === 1 ? (
              <span key={i} style={{
                display: 'block', height: '1.5px', width: '24px',
                backgroundColor: '#0F0F0F',
                opacity: menuOpen ? 0 : 1,
                transition: 'opacity 0.3s',
              }} />
            ) : (
              <span key={i} style={{
                display: 'block', height: '1.5px', width: '24px',
                backgroundColor: '#0F0F0F',
                transform,
                transition: 'transform 0.3s',
              }} />
            )
          )}
        </button>
      </div>

      {/* ── MOBILE DROPDOWN ── */}
      <div className="mobile-menu" style={{
        maxHeight: menuOpen ? '420px' : '0',
        overflow: 'hidden',
        transition: 'max-height 0.35s ease',
        backgroundColor: '#ffffff',
        borderTop: menuOpen ? '1px solid #f0f0f0' : 'none',
      }}>
        <div style={{
          padding: '20px 32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={closeMenu}
              className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}

          {/* icons */}
          <div style={{
            display: 'flex', gap: '20px',
            paddingTop: '12px',
            borderTop: '1px solid #f0f0f0',
          }}>
            {[
              { icon: <FiInstagram size={16} />, href: 'https://instagram.com' },
              { icon: <FaPinterestP size={15} />, href: 'https://pinterest.com' },
              { icon: <FiMail size={16} />,       href: 'mailto:verafywithka@gmail.com' },
              { icon: <FiPhone size={16} />,      href: 'tel:+233244330870' },
            ].map((item, i) => (
              <a key={i} href={item.href} style={iconStyle}
                 onMouseEnter={hoverGold} onMouseLeave={hoverBlack}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
