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
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 24,
          }}
        >
          <p
            style={{
              fontSize: '96px',
              fontWeight: 300,
              fontFamily: 'var(--font-geist)',
              color: 'black',
              paddingBottom: '4px',
              margin: 0,
            }}
          >
            Salyo
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 24,
            paddingRight: 56,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              maxWidth: '100%',
              width: '100%',
            }}
          >
            <p style={{ ...bodyText, fontSize: '30px', fontWeight: 500, marginBottom: 24 }}>
              En Salyo, ayudamos a empresas y emprendedores a construir su
              presencia digital con criterio y{'\u00a0'}tecnología.
            </p>
            <p style={{ ...bodyText, fontSize: '17px' }}>
              Somos un estudio enfocado en crear soluciones que funcionan. Nos
              movemos entre el código, la estrategia y los datos para que tú
              puedas centrarte en lo que mejor sabes hacer: gestionar tu
              negocio. No somos un proveedor externo al uso, trabajamos como tu
              partner digital, involucrándonos en cada proyecto para que los
              resultados sean reales y sostenibles.
            </p>
            <p style={{ ...bodyText, fontSize: '17px' }}>
              Desde el desarrollo de una plataforma robusta hasta la integración
              de inteligencia artificial, en Salyo aportamos claridad técnica y
              ejecución precisa en cada etapa del camino.
            </p>
          </div>
        </div>
      </div>
    </ContentSlide>
    <ContentSlide pageNumber={3}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 24,
          }}
        >
          <p
            style={{
              fontSize: '96px',
              fontWeight: 300,
              fontFamily: 'var(--font-geist)',
              color: 'black',
              paddingBottom: '4px',
              margin: 0,
            }}
          >
            Principios
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 24,
            paddingRight: 56,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              maxWidth: '100%',
              width: '100%',
            }}
          >
            <p
              style={{
                ...bodyText,
                fontSize: '30px',
                fontWeight: 500,
                margin: 0,
                marginBottom: 24,
              }}
            >
              Nuestros principios se basan en la claridad técnica, la libertad
              creativa y la preparación para el futuro.
            </p>
            <p style={{ ...bodyText, fontSize: '17px' }}>
              En Salyo, aplicamos una filosofía{' '}
              <strong style={{ fontWeight: 600 }}>AI Proof</strong>, escribiendo
              código limpio y estandarizado que facilita la integración y el
              entrenamiento de modelos de inteligencia artificial. Apostamos por
              la <strong style={{ fontWeight: 600 }}>escalabilidad real</strong>
              , desarrollando arquitecturas sólidas que permiten que tus
              proyectos crezcan sin encontrar techos técnicos.
            </p>
            <p style={{ ...bodyText, fontSize: '17px' }}>
              Nos alejamos de las soluciones genéricas mediante una{' '}
              <strong style={{ fontWeight: 600 }}>personalización total</strong>
              ; no dependemos de plantillas ni aceptamos restricciones
              preestablecidas que limiten tu visión. Somos un equipo{' '}
              <strong style={{ fontWeight: 600 }}>Tech focused</strong>:
              centramos nuestra actividad exclusivamente en el desarrollo
              técnico; este enfoque nos permite mantener la agilidad y el
              frescor necesarios para entregar resultados de máxima calidad.
            </p>
          </div>
        </div>
      </div>
    </ContentSlide>
    <ContentSlide pageNumber={4}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          flex: 1,
          minHeight: 0,
        }}
      >
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingRight: 24,
          }}
        >
          <p
            style={{
              fontSize: '96px',
              fontWeight: 300,
              fontFamily: 'var(--font-geist)',
              color: 'black',
              paddingBottom: '4px',
              margin: 0,
            }}
          >
            Servicios
          </p>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 24,
            paddingRight: 56,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              width: '100%',
              maxWidth: 560,
            }}
          >
            {[
              {
                num: 1,
                title: 'Web Development',
                description:
                  'Construimos sitios y aplicaciones rápidas, seguras y fáciles de gestionar.',
              },
              {
                num: 2,
                title: 'SEO',
                description:
                  'Optimizamos tu estructura para que tus clientes te encuentren donde importa.',
              },
              {
                num: 3,
                title: 'Digital Consultancy',
                description:
                  'Te asesoramos sobre qué herramientas y caminos tomar para optimizar tus recursos.',
              },
              {
                num: 4,
                title: 'AI Partner',
                description:
                  'Implementamos soluciones de IA prácticas que ahorran tiempo y mejoran tus procesos.',
              },
            ].map(({ num, title, description }) => (
              <div
                key={num}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'stretch',
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 100,
                    minWidth: 100,
                    alignSelf: 'stretch',
                    border: '1px solid black',
                    borderRadius: 8,
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-geist)',
                      fontSize: '40px',
                      fontWeight: 600,
                      color: 'black',
                    }}
                  >
                    {String(num).padStart(2, '0')}
                  </span>
                </div>
                <div
                  style={{
                    flex: 1,
                    minHeight: 80,
                    alignSelf: 'stretch',
                    border: '1px solid black',
                    borderRadius: 8,
                    background: 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    padding: '12px 16px',
                  }}
                >
                  <span
                    style={{
                      ...bodyText,
                      margin: 0,
                      fontSize: '17px',
                      lineHeight: 1.4,
                      whiteSpace: 'normal',
                    }}
                  >
                    <strong style={{ fontWeight: 600 }}>{title}</strong>. {description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ContentSlide>
    <ContentSlide pageNumber={5}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          flex: 1,
          minHeight: 0,
          gap: 28,
        }}
      >
        {/* Bloque arriba de Equipo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flex: '0 0 auto',
          }}
        >
          <div style={{ flex: 1 }} />
          <div
            style={{
              flex: 1,
              paddingLeft: 24,
              paddingRight: 56,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              minWidth: 0,
            }}
          >
            <p style={{ ...bodyText, fontSize: '26px', fontWeight: 500, margin: 0 }}> </p>
            <p style={{ ...bodyText, fontSize: '17px', margin: 0 }}> </p>
          </div>
        </div>
        {/* Equipo */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flex: 1,
            minHeight: 0,
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 24,
            }}
          >
            <p
              style={{
                fontSize: '96px',
                fontWeight: 300,
                fontFamily: 'var(--font-geist)',
                color: 'black',
                paddingBottom: '4px',
                margin: 0,
              }}
            >
              Equipo
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 24,
              paddingRight: 56,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                maxWidth: '100%',
                width: '100%',
              }}
            >
              <p style={{ ...bodyText, fontSize: '17px', lineHeight: 1.5, margin: 0 }}>
                <strong style={{ fontWeight: 600 }}>CEO Alan Douglas. Web Developer and Project Manager.</strong>{' '}
                Como líder de Salyo, Alan coordina la arquitectura técnica y la
                gestión de proyectos, asegurando que cada línea de código cumpla
                con los estándares de calidad del estudio. Su enfoque combina la
                precisión del desarrollo con una visión estratégica orientada a la
                entrega de productos digitales sólidos y eficientes.
              </p>
            </div>
          </div>
        </div>
        {/* Partners */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flex: 1,
            minHeight: 0,
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 24,
            }}
          >
            <p
              style={{
                fontSize: '96px',
                fontWeight: 300,
                fontFamily: 'var(--font-geist)',
                color: 'black',
                paddingBottom: '4px',
                margin: 0,
              }}
            >
              Partners
            </p>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 24,
              paddingRight: 56,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                maxWidth: '100%',
                width: '100%',
              }}
            >
              <p style={{ ...bodyText, fontSize: '17px', lineHeight: 1.5, margin: 0 }}>
                <strong style={{ fontWeight: 600 }}>
                  Materia, Sauras Garriga, Vetado, Cortto, Atipus, Bualié Studio.
                </strong>
              </p>
            </div>
          </div>
        </div>
        {/* Bloque abajo de Partners */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            flex: '0 0 auto',
          }}
        >
          <div style={{ flex: 1 }} />
          <div
            style={{
              flex: 1,
              paddingLeft: 24,
              paddingRight: 56,
              display: 'flex',
              flexDirection: 'column',
              gap: 12,
              minWidth: 0,
            }}
          >
            <p style={{ ...bodyText, fontSize: '26px', fontWeight: 500, margin: 0 }}> </p>
            <p style={{ ...bodyText, fontSize: '17px', margin: 0 }}> </p>
          </div>
        </div>
      </div>
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
            fontSize: '96px',
            fontWeight: '300',
            fontFamily: 'var(--font-geist)',
            color: 'black',
            margin: 0,
            paddingBottom: '4px',
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

// Content slide layout and typography (aligned with ProjectSlide / Brutus)
const contentWrap = {
  padding: '60px 48px 72px',
  boxSizing: 'border-box' as const,
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column' as const,
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  gap: 24,
}
const sectionTitle = {
  fontSize: '48px',
  fontWeight: 600 as const,
  fontFamily: 'var(--font-geist)',
  color: 'black',
  margin: 0,
}
const bodyText = {
  fontSize: '18px',
  fontWeight: 400 as const,
  fontFamily: 'var(--font-roboto)',
  color: 'black',
  margin: 0,
  lineHeight: 1.5,
}
const bullet = {
  fontSize: '18px',
  fontWeight: 400 as const,
  fontFamily: 'var(--font-roboto)',
  color: 'black',
  margin: 0,
}
const subBullet = {
  fontSize: '18px',
  fontWeight: 400 as const,
  fontFamily: 'var(--font-roboto)',
  color: 'black',
  margin: 0,
}
const bulletLabel = {
  fontSize: '14px',
  fontWeight: 600 as const,
  fontFamily: 'var(--font-roboto)',
  color: 'black',
  margin: 0,
  textTransform: 'uppercase' as const,
  letterSpacing: '0.05em',
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
            fontWeight: 300,
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
                  fontFamily: 'var(--font-roboto)',
                  color: 'black',
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
                fontFamily: 'var(--font-roboto)',
                color: 'black',
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
                  fontFamily: 'var(--font-roboto)',
                  color: 'black',
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
