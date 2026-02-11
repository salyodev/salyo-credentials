import React from 'react'
import { createRoot } from 'react-dom/client'
import { Deck, DefaultTemplate, Slide, FlexBox, Heading } from 'spectacle'
import { motion } from 'motion/react'

const theme = {
  space: [0],
}

// Constants
const EMAIL = 'alan@salyo.dev'
const WEBSITE = 'https://salyo.dev'
const YEAR = 2026

const PROJECT_IMAGES_TOP = [
  '/lexa.png',
  '/pampam.png',
  '/orri.png',
  '/brutus.png',
  '/engi-on.png',
  '/themoff.png',
  '/napalm.png',
  '/international-program.png',
]

const PROJECT_IMAGES_BOTTOM = [
  '/anecdota.png',
  '/vetado.png',
  '/casa_puigarnau.png',
  '/laucusi.png',
  '/sauras_garriga.png',
  '/aladetres.png',
  '/alberto-gross.png',
  '/celix.png',
]

const PROJECTS = [
  {
    name: 'BRUTUS',
    sector: 'Alimentación',
    description: ['Marca de cerveza', 'Parte del grupo Mahou San Miguel'],
    work: [],
    image: '/brutus.png',
    url: 'https://brutusthebeer.com',
  },
  {
    name: 'ENGI-ON',
    sector: 'Ingeniería y automatización',
    description: ['Especializada en ingeniería y automatización de procesos'],
    work: ['Nueva página → Diseño moderno'],
    image: '/engi-on.png',
    url: 'https://engi-on.com',
  },
  {
    name: 'NAPALM',
    sector: 'Material Audiovisual',
    description: ['Alquiler de material audiovisual'],
    work: ['Re-implementar la página', 'Migración de 1000+ productos'],
    image: '/napalm.png',
    url: 'https://napalmrentals.com',
  },
  {
    name: 'INSTITUCIÓ INTERNACIONAL',
    sector: 'Educación',
    description: [],
    work: [
      'Nueva página unificando destinos',
      'Mapa interactivo con los destinos',
    ],
    image: '/international-program.png',
    url: 'https://instituciointernacional.org',
  },
  {
    name: 'THEMOFF',
    sector: 'Audiovisual',
    description: ['Productora Audiovisual'],
    work: ['Nueva página'],
    image: '/themoff.png',
    url: 'https://themoff.es',
  },
  {
    name: 'ORRI',
    sector: 'Immobiliaria',
    description: ['Immobiliaria en Barcelona'],
    work: ['Nueva página', 'A la altura de los clientes'],
    image: '/orri.png',
    url: 'https://orribarcelona.com',
  },
  {
    name: 'CASA PUIGARNAU',
    sector: 'Espacio Cultural',
    description: ['Espacio cultural en Terrassa'],
    work: ['Nueva página con todas las actividades y eventos'],
    image: '/casa_puigarnau.png',
    url: 'https://casapuigarnau.com',
  },
]

const Presentation = () => (
  // <Deck template={() => <DefaultTemplate />}>
  <Deck theme={theme}>
    <SlideBase>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            fontSize: '96px',
            fontWeight: '300',
            fontFamily: 'var(--font-geist)',
            color: 'black',
            paddingBottom: '4px',
          }}
        >
          Salyo
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          style={{
            fontSize: '20px',
            fontWeight: '400',
            fontFamily: 'var(--font-geist)',
            color: 'var(--color-text)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          Your digital partner
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          style={{
            display: 'flex',
            gap: 10,
            flexWrap: 'wrap',
            justifyContent: 'center',
            fontSize: '13px',
            fontWeight: '400',
            fontFamily: 'var(--font-geist)',
            color: 'var(--color-text)',
            marginTop: 24,
          }}
        >
          Web development<span>·</span>SEO<span>·</span>Digital consultancy
          <span>·</span>AI partner
        </motion.p>
      </div>
    </SlideBase>
    <ContentSlide pageNumber={2}>
      <h2 style={sectionTitle}>Sobre Nosotros</h2>
      <p style={bodyText}>
        En Salyo, ayudamos a empresas y emprendedores a construir su presencia
        digital con criterio y tecnología.
      </p>
      <p style={bodyText}>
        Somos un estudio enfocado en crear soluciones que funcionan. Nos movemos
        entre el código, la estrategia y los datos para que tú puedas centrarte
        en lo que mejor sabes hacer: gestionar tu negocio. No somos un proveedor
        externo al uso, trabajamos como tu partner digital, involucrándonos en
        cada proyecto para que los resultados sean reales y sostenibles.
      </p>
      <p style={bodyText}>
        Desde el desarrollo de una plataforma robusta hasta la integración de
        inteligencia artificial, en Salyo aportamos claridad técnica y ejecución
        precisa en cada etapa del camino.
      </p>
    </ContentSlide>
    <ContentSlide pageNumber={3}>
      <h2 style={sectionTitle}>Nuestros Principios</h2>
      <p style={bulletLabel}>AI Proof</p>
      <p style={subBullet}>
        All stays in code, that is easy to read for AI. Code AI is well trained
        on.
      </p>
      <p style={bulletLabel}>Escalabilidad</p>
      <p style={subBullet}>Proyectos sin límites.</p>
      <p style={bulletLabel}>Customatización</p>
      <p style={subBullet}>Nada de plantillas o restricciones.</p>
      <p style={bulletLabel}>Tech focused</p>
      <p style={subBullet}>
        We want to remain original, we don't design, we avoid patterns. We stay
        fresh.
      </p>
    </ContentSlide>
    <ContentSlide pageNumber={4}>
      <h2 style={sectionTitle}>Servicios</h2>
      <p style={bullet}>Desarrollo Web (Design collaborators)</p>
      <p style={bullet}>SEO</p>
      <p style={bullet}>Consultoría Digital</p>
      <p style={bullet}>AI Partner</p>
    </ContentSlide>
    <ContentSlide pageNumber={5}>
      <h2 style={sectionTitle}>Colaboradores</h2>
      <p style={bulletLabel}>How we work</p>
      <p style={subBullet}>With designer companies.</p>
      <p style={bodyText}>
        Materia, Sauras Garriga, Vetado, Cortto, Atipus, Bualié Studio
      </p>
    </ContentSlide>
    <SlideBase>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: 64,
          padding: '40px 48px',
          boxSizing: 'border-box',
        }}
      >
        <ProjectGrid images={PROJECT_IMAGES_TOP} fade="down" />
        <p
          style={{
            fontSize: '82px',
            fontWeight: '300',
            fontFamily: 'var(--font-geist)',
            color: 'black',
            margin: 0,
          }}
        >
          Proyectos
        </p>
        <ProjectGrid images={PROJECT_IMAGES_BOTTOM} fade="up" />
      </div>
    </SlideBase>
    {PROJECTS.map((project, i) => (
      <ProjectSlide key={project.name} pageNumber={7 + i} {...project} />
    ))}
    <SlideBase>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            fontSize: '96px',
            fontWeight: '300',
            fontFamily: 'var(--font-geist)',
            color: 'black',
            paddingBottom: '4px',
          }}
        >
          Salyo
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          style={{
            fontSize: '20px',
            fontWeight: '400',
            fontFamily: 'var(--font-geist)',
            color: 'var(--color-text)',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
          }}
        >
          Your digital partner
        </motion.p>
      </div>
    </SlideBase>
  </Deck>
)

createRoot(document.getElementById('app')!).render(<Presentation />)

// Content slide layout and typography
const contentWrap = {
  padding: '80px 56px 72px',
  boxSizing: 'border-box' as const,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
}
const sectionTitle = {
  fontSize: '32px',
  fontWeight: 400 as const,
  fontFamily: 'var(--font-roboto)',
  color: 'black',
  margin: '0 0 24px 0',
}
const bodyText = {
  fontSize: '20px',
  fontWeight: 300 as const,
  fontFamily: 'var(--font-roboto)',
  color: 'black',
  margin: '0 0 12px 0',
  lineHeight: 1.5,
}
const bullet = {
  ...bodyText,
  margin: '0 0 8px 0',
}
const subBullet = {
  ...bodyText,
  fontSize: '18px',
  margin: '0 0 8px 24px',
}
const bulletLabel = {
  fontSize: '18px',
  fontWeight: 300 as const,
  fontFamily: 'var(--font-roboto)',
  color: 'black',
  margin: '0 0 4px 0',
}
const ContentSlide = ({
  children,
  pageNumber,
}: {
  children: React.ReactNode
  pageNumber: number
}) => (
  <SlideBase>
    <Header />
    <div style={contentWrap}>{children}</div>
    <Footer pageNumber={pageNumber} />
  </SlideBase>
)

const Header = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '24px 36px 0 36px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-geist)',
      color: 'black',
      zIndex: 1,
    }}
  >
    <span
      style={{
        fontSize: '24px',
        fontWeight: '300',
      }}
    >
      Salyo
    </span>
    <span
      style={{
        fontSize: '12px',
        fontWeight: '400',
        color: 'var(--color-text)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
      }}
    >
      Your digital partner
    </span>
  </div>
)

const Footer = ({ pageNumber }: { pageNumber: number }) => (
  <div
    style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 36px 24px 36px',
      boxSizing: 'border-box',
      fontFamily: 'var(--font-geist)',
    }}
  >
    <span
      style={{
        fontSize: '12px',
        fontWeight: '400',
        color: 'var(--color-text)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
      }}
    >
      {EMAIL}
    </span>
    <span
      style={{
        fontSize: '12px',
        fontWeight: '400',
        color: 'var(--color-text)',
        textTransform: 'uppercase',
        letterSpacing: '1.5px',
      }}
    >
      {pageNumber}
    </span>
  </div>
)

const SlideBase = ({ children }: { children: React.ReactNode }) => (
  <Slide backgroundColor="white" padding={0}>
    <div
      style={{
        position: 'relative',
        height: '100%',
        background:
          'radial-gradient(circle at center, white 0%, rgba(59,130,246,0.6) 100%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/noise.webp)',
          backgroundSize: '100px 100px',
          backgroundRepeat: 'repeat',
          opacity: 0.4,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
          border: `0.5px solid var(--color-frame)`,
        }}
      >
        {children}
      </div>
    </div>
  </Slide>
)

const ProjectSlide = ({
  pageNumber,
  name,
  sector,
  description,
  work,
  image,
  url,
}: {
  pageNumber: number
  name: string
  sector: string
  description: string[]
  work: string[]
  image?: string
  url?: string
}) => (
  <SlideBase>
    <Header />
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        padding: '60px 48px 60px 48px',
        boxSizing: 'border-box',
        gap: 40,
        alignItems: 'center',
      }}
    >
      {/* Left: Info */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 24,
        }}
      >
        <p
          style={{
            fontSize: '48px',
            fontWeight: '600',
            fontFamily: 'var(--font-geist)',
            color: 'black',
            margin: 0,
          }}
        >
          {name}
        </p>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: 'var(--font-geist)',
              color: 'white',
              backgroundColor: 'rgb(59,130,246)',
              padding: '4px 12px',
              borderRadius: 999,
            }}
          >
            {sector}
          </span>
        </div>
        {description.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {/* <p
              style={{
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: 'var(--font-geist)',
                color: 'var(--color-text)',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Empresa
            </p> */}
            {description.map((d, i) => (
              <p
                key={i}
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  fontFamily: 'var(--font-geist)',
                  color: 'var(--color-text)',
                  margin: 0,
                }}
              >
                {d}
              </p>
            ))}
          </div>
        )}
        {work.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <p
              style={{
                fontSize: '14px',
                fontWeight: '600',
                fontFamily: 'var(--font-geist)',
                color: 'var(--color-text)',
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              Trabajo realizado
            </p>
            {work.map((w, i) => (
              <p
                key={i}
                style={{
                  fontSize: '18px',
                  fontWeight: '400',
                  fontFamily: 'var(--font-geist)',
                  color: 'var(--color-text)',
                  margin: 0,
                }}
              >
                • {w}
              </p>
            ))}
          </div>
        )}
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontSize: '14px',
              fontWeight: '500',
              fontFamily: 'var(--font-geist)',
              color: 'rgb(59,130,246)',
              textDecoration: 'none',
              border: '1px solid rgb(59,130,246)',
              padding: '8px 16px',
              borderRadius: 999,
              width: 'fit-content',
            }}
          >
            Visitar web ↗
          </a>
        )}
      </div>
      {/* Right: Image */}
      {image && <ProjectImage image={image} name={name} url={url} />}
    </div>
    <Footer pageNumber={pageNumber} />
  </SlideBase>
)

const ProjectGrid = ({
  images,
  fade,
}: {
  images: string[]
  fade?: 'up' | 'down'
}) => {
  const maskImage =
    fade === 'down'
      ? 'linear-gradient(to bottom, black 0%, transparent 100%)'
      : fade === 'up'
        ? 'linear-gradient(to top, black 0%, transparent 100%)'
        : undefined

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gap: 16,
        width: '100%',
        maskImage,
        WebkitMaskImage: maskImage,
      }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          style={{
            overflow: 'hidden',
            borderRadius: 6,
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          <img
            src={src}
            alt=""
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      ))}
    </div>
  )
}

const ProjectImage = ({
  image,
  name,
  url,
}: {
  image: string
  name: string
  url?: string
}) => {
  const img = (
    <img
      src={image}
      alt={name}
      className="project-image"
      style={{
        maxWidth: '100%',
        maxHeight: '400px',
        objectFit: 'contain',
        borderRadius: 8,
        boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
        transition: 'transform 0.2s ease',
      }}
    />
  )
  return (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {img}
        </a>
      ) : (
        img
      )}
    </div>
  )
}
