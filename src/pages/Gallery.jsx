import { useState } from 'react'
import { FiHeart } from 'react-icons/fi'
import { FaHeart } from 'react-icons/fa'

/* ─────────────────────────────────────────
   IMAGE MAP — place these in src/assets/
─────────────────────────────────────────
  gallery-hero.jpeg        → hero background
  gallery-1.jpeg           → gallery image 1
  gallery-2.jpeg           → gallery image 2
  ...up to...
  gallery-20.jpeg          → gallery image 20

  Images will have different heights to
  create the natural masonry stagger effect.
  Use portrait, landscape and square images
  mixed together for best results.
───────────────────────────────────────── */
import galleryHero from '../assets/galleryhero.png'

/* Dynamically import all gallery images.
   Since Vite requires static strings, we list them. */
import g1  from '../assets/one.png'
import g2  from '../assets/two.png'
import g3  from '../assets/three.png'
import g4  from '../assets/four.png'
import g5  from '../assets/one.png'
import g6  from '../assets/two.png'
import g7  from '../assets/three.png'
import g8  from '../assets/four.png'
import g9  from '../assets/two.png'
import g10 from '../assets/one.png'
import g11 from '../assets/three.png'
import g12 from '../assets/two.png'
import g13 from '../assets/four.png'
import g14 from '../assets/one.png'
import g15 from '../assets/two.png'
import g16 from '../assets/three.png'
import g17 from '../assets/four.png'
import g18 from '../assets/two.png'
import g19 from '../assets/one.png'
import g20 from '../assets/four.png'

/* ── Gallery data ── */
const galleryItems = [
  { id: 1,  img: g1,  title: 'Destination Weddings', couple: 'James & Ama',       likes: '3.1k', category: 'Weddings'   },
  { id: 2,  img: g2,  title: 'Destination Weddings', couple: 'Kojo & Efua',       likes: '4.2k', category: 'Weddings'   },
  { id: 3,  img: g3,  title: 'Destination Weddings', couple: 'Name of Couple',    likes: '2.9k', category: 'Weddings'   },
  { id: 4,  img: g4,  title: 'Destination Weddings', couple: 'Name of Couple',    likes: '3.4k', category: 'Corporate'  },
  { id: 5,  img: g5,  title: 'Destination Weddings', couple: 'Name of Couple',    likes: '2.4k', category: 'Weddings'   },
  { id: 6,  img: g6,  title: 'Destination Weddings', couple: 'Name of Couple',    likes: '1.8k', category: 'Birthdays'  },
  { id: 7,  img: g7,  title: 'Destination Weddings', couple: 'Name of Couple',    likes: '3.6k', category: 'Weddings'   },
  { id: 8,  img: g8,  title: 'Destination Weddings', couple: 'Name of Couple',    likes: '1.3k', category: 'Corporate'  },
  { id: 9,  img: g9,  title: 'Destination Weddings', couple: 'Name of Couple',    likes: '2.2k', category: 'Weddings'   },
  { id: 10, img: g10, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '3.0k', category: 'Birthdays'  },
  { id: 11, img: g11, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '2.6k', category: 'Weddings'   },
  { id: 12, img: g12, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '3.2k', category: 'Corporate'  },
  { id: 13, img: g13, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '1.9k', category: 'Weddings'   },
  { id: 14, img: g14, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '4.0k', category: 'Birthdays'  },
  { id: 15, img: g15, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '2.8k', category: 'Weddings'   },
  { id: 16, img: g16, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '3.3k', category: 'Corporate'  },
  { id: 17, img: g17, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '2.1k', category: 'Weddings'   },
  { id: 18, img: g18, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '1.6k', category: 'Birthdays'  },
  { id: 19, img: g19, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '3.7k', category: 'Weddings'   },
  { id: 20, img: g20, title: 'Destination Weddings', couple: 'Name of Couple',    likes: '2.5k', category: 'Corporate'  },
]

const categories = ['All', 'Weddings', 'Birthdays', 'Corporate']

/* ── Single gallery card ── */
function GalleryCard({ item }) {
  const [liked, setLiked] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        breakInside: 'avoid',
        marginBottom: '16px',
        backgroundColor: '#ffffff',
        border: '1px solid #ebebeb',
        overflow: 'hidden',
        cursor: 'pointer',
        transition: 'box-shadow 0.3s ease',
        boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.05)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <img
          src={item.img}
          alt={item.title}
          style={{
            width: '100%',
            display: 'block',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
            transform: hovered ? 'scale(1.04)' : 'scale(1)',
          }}
        />
        {/* Gold hover overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundColor: 'rgba(194,161,77,0.15)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }} />
      </div>

      {/* Caption */}
      <div style={{ padding: '10px 12px 8px' }}>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          color: '#0F0F0F',
          marginBottom: '2px',
          letterSpacing: '0.02em',
        }}>
          {item.title}
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <p style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '10px',
            color: '#aaa',
          }}>
            {item.couple}
          </p>
          {/* Like button */}
          <button
            onClick={(e) => { e.stopPropagation(); setLiked(!liked) }}
            style={{
              background: 'none', border: 'none',
              cursor: 'pointer', padding: '2px',
              display: 'flex', alignItems: 'center', gap: '4px',
              color: liked ? '#C2A14D' : '#bbb',
              transition: 'color 0.2s',
            }}
          >
            {liked
              ? <FaHeart size={10} />
              : <FiHeart size={10} />
            }
            <span style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '10px',
              color: '#bbb',
            }}>
              {item.likes}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

/* ── Lightbox ── */
function Lightbox({ item, onClose }) {
  if (!item) return null
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0,
        backgroundColor: 'rgba(15,15,15,0.92)',
        zIndex: 999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '32px',
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{ position: 'relative', maxWidth: '820px', width: '100%' }}
      >
        <img src={item.img} alt={item.title} style={{
          width: '100%', display: 'block',
          maxHeight: '80vh', objectFit: 'contain',
        }} />
        {/* Caption */}
        <div style={{
          backgroundColor: '#0F0F0F',
          padding: '14px 20px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <div>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '12px', fontWeight: 600,
              color: '#ffffff', marginBottom: '2px',
            }}>
              {item.title}
            </p>
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px', color: 'rgba(255,255,255,0.5)',
            }}>
              {item.couple}
            </p>
          </div>
          <div style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: '11px', color: '#C2A14D',
            display: 'flex', alignItems: 'center', gap: '5px',
          }}>
            <FaHeart size={11} /> {item.likes}
          </div>
        </div>
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: '-16px', right: '-16px',
            width: '36px', height: '36px',
            borderRadius: '50%',
            backgroundColor: '#C2A14D',
            border: 'none', cursor: 'pointer',
            color: '#ffffff',
            fontFamily: "'Jost', sans-serif",
            fontSize: '18px', lineHeight: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxItem, setLightboxItem]     = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  /* Split into 4 columns for masonry */
  const columns = [[], [], [], []]
  filtered.forEach((item, i) => columns[i % 4].push(item))

  return (
    <main style={{ paddingTop: '72px' }}>

      {/* ══════════════════════════════════════
          1. HERO
      ══════════════════════════════════════ */}
      <section style={{
        position: 'relative',
        height: '50vh', minHeight: '380px',
        overflow: 'hidden',
        display: 'flex', alignItems: 'flex-end',
      }}>
        <img src={galleryHero} alt="Gallery" style={{
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
            GALLERY
          </h1>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. HEADING + SUBTEXT
      ══════════════════════════════════════ */}
      <section style={{
        padding: '64px 64px 40px',
        textAlign: 'center',
        maxWidth: '900px', margin: '0 auto',
      }}>
        <p className="section-label" style={{ display: 'block', marginBottom: '16px' }}>
          Check Our Latest Gallery
        </p>
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontSize: '13px', color: '#888', lineHeight: '2',
        }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ligula velit, fringilla vitae sed,
          lobortis interdum diam. Morbi risus urna, accumsan vitae purus quis, malesuada malesuada dolor.
          Praesent ut tortor nec neque cursus accumsan eu volutpat nisl.
        </p>
      </section>

      {/* ══════════════════════════════════════
          3. FILTER TABS
      ══════════════════════════════════════ */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        padding: '0 64px 48px',
        flexWrap: 'wrap',
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              padding: '8px 24px',
              border: '1px solid',
              borderColor: activeCategory === cat ? '#C2A14D' : '#ddd',
              backgroundColor: activeCategory === cat ? '#C2A14D' : 'transparent',
              color: activeCategory === cat ? '#ffffff' : '#888',
              cursor: 'pointer',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              if (activeCategory !== cat) {
                e.currentTarget.style.borderColor = '#C2A14D'
                e.currentTarget.style.color = '#C2A14D'
              }
            }}
            onMouseLeave={e => {
              if (activeCategory !== cat) {
                e.currentTarget.style.borderColor = '#ddd'
                e.currentTarget.style.color = '#888'
              }
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ══════════════════════════════════════
          4. MASONRY GRID
      ══════════════════════════════════════ */}
      <section style={{ padding: '0 48px 96px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          alignItems: 'start',
        }}>
          {columns.map((col, colIndex) => (
            <div key={colIndex}>
              {col.map(item => (
                <div key={item.id} onClick={() => setLightboxItem(item)}>
                  <GalleryCard item={item} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 24px' }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.5rem', color: '#ccc',
            }}>
              No items in this category yet.
            </p>
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════
          5. LIGHTBOX
      ══════════════════════════════════════ */}
      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />

    </main>
  )
}
