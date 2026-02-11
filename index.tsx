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
    description: [
      'Brutus | Marca de cerveza (Grupo Mahou San Miguel)',
      'Una firma de culto con el respaldo de Mahou San Miguel que desafía los códigos del sector, proyectando una identidad visual sofisticada más propia de una marca de moda que de una cervecera convencional.',
    ],
    work: [
      'A partir de un diseño entregado, nos encargamos de la programación y la integración de contenido audiovisual buscando un acabado limpio y profesional. Actualmente seguimos colaborando con ellos, realizando el mantenimiento técnico y las actualizaciones de contenido a medida que la marca necesita.',
    ],
    image: '/brutus.png',
    url: 'https://brutusthebeer.com',
  },
  {
    name: 'ENGI-ON',
    sector: 'Ingeniería y automatización',
    description: [
      'ENGI-ON | Ingeniería y automatización de procesos',
      'Una consultoría técnica de referencia que transforma la eficiencia industrial mediante soluciones avanzadas de ingeniería, automatización y optimización de procesos complejos.',
    ],
    work: [
      'Programamos su nueva plataforma digital para reconceptualizar su imagen clásica hacia una estética moderna, sofisticada y acorde a los tiempos actuales. Nos centramos en una ejecución técnica impecable que no solo hace la web más atractiva, sino que la convierte en una herramienta mucho más competitiva dentro de su sector.',
    ],
    image: '/engi-on.png',
    url: 'https://engi-on.com',
  },
  {
    name: 'NAPALM RENTALS',
    sector: 'Material Audiovisual',
    description: [
      'Napalm Rentals | Alquiler de material audiovisual',
      'Empresa de referencia en Barcelona para el alquiler de equipos de cámara e iluminación, reconocida por su solvencia técnica y su amplio catálogo para producciones profesionales.',
    ],
    work: [
      'Reconceptualizamos y programamos íntegramente su plataforma para solucionar los problemas de sostenibilidad que presentaba su sistema anterior al escalar. Llevamos a cabo la migración crítica de más de 1.000 productos, optimizando drásticamente la velocidad de carga y el sistema de búsqueda. El resultado es una herramienta profesional, robusta y fácil de gestionar que permite a Napalm Rentals operar con una eficiencia competitiva a la altura de su volumen de negocio.',
    ],
    image: '/napalm.png',
    url: 'https://napalmrentals.com',
  },
  {
    name: 'INSTITUCIÓ INTERNACIONAL',
    sector: 'Educación',
    description: [
      'Institució Internacional | Programas y movilidad académica',
      'Institución de prestigio dedicada a la gestión de redes académicas y movilidad global para estudiantes y profesionales.',
    ],
    work: [
      'Programamos una plataforma unificada para centralizar y ordenar toda su oferta internacional. Desarrollamos un buscador avanzado con mapa interactivo y filtros por escuela, género y localización, permitiendo al usuario encontrar su programa ideal de forma visual, rápida y clara.',
    ],
    image: '/international-program.png',
    url: 'https://instituciointernacional.org',
  },
  {
    name: 'THEMOFF',
    sector: 'Audiovisual',
    description: [
      'Themoff | Productora Audiovisual',
      'Productora audiovisual con base en Barcelona, especializada en crear contenido de impacto y narrativas con una identidad visual propia.',
    ],
    work: [
      'Programamos una plataforma a medida para centralizar su portfolio sin depender de reproductores externos, logrando un display de vídeo rápido y fluido. Además, desarrollamos una landing page optimizada para la captación de leads y conversión de negocio.',
    ],
    image: '/themoff.png',
    url: 'https://themoff.es',
  },
  {
    name: 'ORRI',
    sector: 'Inmobiliaria',
    description: [
      'Orri | Inmobiliària en Barcelona',
      'Inmobiliaria familiar de referencia que combina un servicio de alto standing con la confianza y cercanía necesarias para la gestión de inmuebles exclusivos en la ciudad.',
    ],
    work: [
      'Programamos una nueva plataforma digital diseñada para diferenciar a la marca en un sector altamente competitivo. Realizamos la integración técnica con Inmovilla para sincronizar sus propiedades en tiempo real. También implementamos un sistema de newsletter automatizado para la fidelización de clientes. Actualmente, nos encargamos de su estrategia mensual de SEO para mantener su visibilidad y competitividad en el mercado.',
    ],
    image: '/orri.png',
    url: 'https://orribarcelona.com',
  },
  {
    name: 'CASA PUIGARNAU',
    sector: 'Espacio Cultural',
    description: [
      'Casa Puigarnau | Espacio Cultural',
      'Referente cultural en Terrassa dedicado a la dinamización artística y social a través de una programación diversa de eventos y actividades.',
    ],
    work: [
      'Creamos desde cero una identidad visual atractiva y programamos una plataforma a medida con un diseño 100% personalizado. Implementamos un CMS intuitivo que permite al propietario gestionar su agenda de eventos y actualizar contenidos de forma autónoma y sencilla. El resultado es un ecosistema digital dinámico y funcional que traslada la esencia del espacio físico al entorno online.',
    ],
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
            <p
              style={{
                ...bodyText,
                fontSize: '30px',
                fontWeight: 500,
                marginBottom: 24,
              }}
            >
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
                    <strong style={{ fontWeight: 600 }}>{title}</strong>.{' '}
                    {description}
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
              textAlign: 'center',
            }}
          >
            Equipo y Colaboradores
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
              maxWidth: '100%',
              width: '100%',
            }}
          >
            <img
              src="/myself.jpeg"
              alt="Alan Douglas"
              style={{
                width: 'auto',
                maxWidth: 200,
                height: 'auto',
                objectFit: 'cover',
                borderRadius: 8,
                display: 'block',
              }}
            />
            <p
              style={{
                ...bodyText,
                fontSize: '17px',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              <strong style={{ fontWeight: 600 }}>
                Alan Douglas:{' '}
                <span style={{ color: 'var(--color-gray)', fontWeight: 500 }}>
                  Fullstack Developer &amp; Project Manager.
                </span>
              </strong>{' '}
            </p>
            <p
              style={{
                ...bodyText,
                fontSize: '17px',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              Como líder de Salyo, Alan coordina la arquitectura técnica y la
              gestión de proyectos, asegurando que cada línea de código cumpla
              con los estándares de calidad del estudio. Su enfoque combina la
              precisión del desarrollo con una visión estratégica orientada a la
              entrega de productos digitales sólidos y eficientes.
            </p>
            <p
              style={{
                ...bodyText,
                fontSize: '17px',
                lineHeight: 1.5,
                margin: 0,
              }}
            >
              <strong style={{ fontWeight: 600 }}>Colaboradores:</strong>{' '}
              Materia, SaurasGarriga, Vetado, Cortto, Atipus, Bualié Studio.
            </p>
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
          maxWidth: '48%',
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
                  fontSize: '14px',
                  fontWeight: i === 0 ? '600' : '300',
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
              }}
            >
              El trabajo realizado
            </p>
            {work.map((w, i) => (
              <p
                key={i}
                style={{
                  fontSize: '14px',
                  fontWeight: '300',
                  fontFamily: 'var(--font-roboto)',
                  color: 'black',
                  margin: 0,
                }}
              >
                {w}
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
