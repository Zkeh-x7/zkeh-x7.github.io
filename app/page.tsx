import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  ContactRound,
  Database,
  Download,
  GitBranch,
  Layers3,
  Mail,
  MapPin,
  Server,
  ShieldCheck,
  Sparkles,
  WalletCards,
} from "lucide-react";

const backendTags = [
  "Node.js",
  "Express",
  "PostgreSQL",
  "Sequelize",
  "JWT",
  "Multer",
];

const frontendTags = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Bootstrap",
  "jQuery",
  "localStorage",
];

const foundationsTags = [
  "JavaScript",
  "Funciones",
  "Arreglos",
  "Objetos",
  "Ciclos",
  "Validación",
];

const caseMetrics = [
  ["3", "módulos integrados"],
  ["11", "operaciones de API"],
  ["2", "recursos con CRUD"],
  ["19", "commits progresivos"],
];

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <a className="monogram" href="#inicio" aria-label="Ir al inicio">
          JR<span>.</span>
        </a>

        <nav aria-label="Navegación principal">
          <a href="#perfil">Perfil</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#caso-estudio">Caso de estudio</a>
        </nav>

        <a
          className="header-link"
          href="https://github.com/Zkeh-x7"
          target="_blank"
          rel="noreferrer"
        >
          <GitBranch aria-hidden="true" size={17} />
          GitHub
        </a>
      </header>

      <main id="contenido">
        <section className="hero section-frame" id="inicio">
          <div className="hero-copy">
            <p className="availability">
              <span aria-hidden="true" />
              Perfil trainee · Santiago de Chile · Modalidad remota
            </p>

            <h1>
              Desarrollo experiencias digitales donde la lógica y lo visual
              <em> trabajan juntos.</em>
            </h1>

            <p className="hero-intro">
              Soy <strong>Johanna Romero</strong>, Desarrolladora Full Stack
              JavaScript Trainee y estudiante de Ingeniería en Animación 3D.
              Combino programación, estructura y sensibilidad visual para
              convertir ideas en productos digitales claros y funcionales.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="#proyectos">
                Explorar proyectos
                <ArrowRight aria-hidden="true" size={18} />
              </a>

              <a
                className="text-link"
                href="https://github.com/Zkeh-x7"
                target="_blank"
                rel="noreferrer"
              >
                Ver código en GitHub
                <ArrowUpRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>

          <aside className="profile-console" aria-label="Resumen técnico">
            <div className="console-topbar">
              <div aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p>johanna.profile</p>
              <span>JS</span>
            </div>

            <dl className="console-list">
              <div>
                <dt>rol</dt>
                <dd>Full Stack JavaScript Trainee</dd>
              </div>
              <div>
                <dt>enfoque</dt>
                <dd>Desarrollo web + creatividad digital</dd>
              </div>
              <div>
                <dt>stack</dt>
                <dd>JavaScript · Node.js · PostgreSQL</dd>
              </div>
              <div>
                <dt>formación</dt>
                <dd>Ingeniería en Animación 3D</dd>
              </div>
              <div>
                <dt>ubicación</dt>
                <dd>
                  <MapPin aria-hidden="true" size={15} />
                  Santiago, Chile
                </dd>
              </div>
            </dl>

            <div className="console-footer">
              <span>const</span> learning = <strong>true</strong>;
            </div>
          </aside>
        </section>

        <section
          className="learning-path section-frame"
          aria-labelledby="trayectoria-title"
        >
          <div className="section-heading compact-heading">
            <p>Trayectoria técnica</p>
            <h2 id="trayectoria-title">De la interfaz a una API segura.</h2>
          </div>

          <ol className="path-list">
            <li>
              <span>M02</span>
              <div>
                <strong>Experiencia Front-End</strong>
                <p>Interfaces responsive, eventos y persistencia local.</p>
              </div>
            </li>
            <li>
              <span>M03</span>
              <div>
                <strong>Fundamentos JavaScript</strong>
                <p>Lógica, funciones, estructuras de datos y validación.</p>
              </div>
            </li>
            <li>
              <span>M06–08</span>
              <div>
                <strong>Desarrollo Back-End</strong>
                <p>API REST, base de datos, seguridad y arquitectura.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="profile-section section-frame" id="perfil">
          <div className="section-heading">
            <p>Perfil</p>
            <h2>Una mirada técnica con formación creativa.</h2>
          </div>

          <div className="profile-grid">
            <article className="profile-statement">
              <Sparkles aria-hidden="true" size={24} />
              <p>
                Me interesa participar en equipos interdisciplinarios donde el
                desarrollo, el diseño y la comunicación se conecten. Trabajo de
                manera organizada, documento lo que aprendo y avanzo mediante
                iteraciones pequeñas que puedo probar y mejorar.
              </p>
            </article>

            <div className="skills-panel">
              <div>
                <span>Desarrollo</span>
                <p>HTML · CSS · JavaScript · Node.js · Express</p>
              </div>
              <div>
                <span>Datos y seguridad</span>
                <p>PostgreSQL · Sequelize · JWT · bcrypt</p>
              </div>
              <div>
                <span>Flujo de trabajo</span>
                <p>Git · GitHub · Postman · documentación técnica</p>
              </div>
              <div>
                <span>Perfil creativo</span>
                <p>Animación 3D · diseño visual · producción audiovisual</p>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section section-frame" id="proyectos">
          <div className="section-heading projects-heading">
            <div>
              <p>Proyectos seleccionados</p>
              <h2>Tres etapas de un mismo crecimiento.</h2>
            </div>
            <p>
              Proyectos desarrollados durante el curso Desarrollo de
              Aplicaciones Full Stack JavaScript Trainee.
            </p>
          </div>

          <div className="projects-grid">
            <article className="project-card featured-project">
              <div className="project-card-top">
                <span className="project-number">01</span>
                <Server aria-hidden="true" size={28} />
              </div>

              <div>
                <p className="project-kicker">Back-End · Módulos 6, 7 y 8</p>
                <h3>CreativeFlow Backend</h3>
                <p className="project-description">
                  API RESTful para administrar usuarios y proyectos creativos.
                  Integra persistencia relacional, operaciones CRUD,
                  autenticación y carga validada de imágenes.
                </p>
              </div>

              <ul className="project-highlights">
                <li>
                  Arquitectura separada por rutas, controladores, servicios y
                  modelos.
                </li>
                <li>
                  Relación uno-a-muchos, filtros, paginación y transacciones.
                </li>
                <li>
                  Contraseñas cifradas, tokens JWT y rutas protegidas.
                </li>
              </ul>

              <div className="tag-list" aria-label="Tecnologías utilizadas">
                {backendTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href="#caso-estudio">
                  Leer caso de estudio
                  <ArrowRight aria-hidden="true" size={17} />
                </a>
                <a
                  href="https://github.com/Zkeh-x7/creativeflow-backend"
                  target="_blank"
                  rel="noreferrer"
                >
                  Repositorio
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
            </article>

            <article className="project-card">
              <div className="project-card-top">
                <span className="project-number">02</span>
                <WalletCards aria-hidden="true" size={28} />
              </div>

              <div>
                <p className="project-kicker">Front-End · Módulo 2</p>
                <h3>Alke Wallet</h3>
                <p className="project-description">
                  Billetera digital responsive con inicio de sesión simulado,
                  saldo, depósitos, transferencias, contactos e historial de
                  movimientos persistente.
                </p>
              </div>

              <div className="tag-list" aria-label="Tecnologías utilizadas">
                {frontendTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                className="project-source-link"
                href="https://github.com/Zkeh-x7/alke-wallet"
                target="_blank"
                rel="noreferrer"
              >
                Ver repositorio
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </article>

            <article className="project-card">
              <div className="project-card-top">
                <span className="project-number">03</span>
                <Code2 aria-hidden="true" size={28} />
              </div>

              <div>
                <p className="project-kicker">JavaScript · Módulo 3</p>
                <h3>Gestor de operaciones</h3>
                <p className="project-description">
                  Calculadora interactiva con historial, filtros y estadísticas
                  que demuestra el uso de funciones, ciclos, objetos, arreglos
                  y validación de entradas.
                </p>
              </div>

              <div className="tag-list" aria-label="Conceptos aplicados">
                {foundationsTags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <a
                className="project-source-link"
                href="https://github.com/Zkeh-x7/proyecto-modulo-3-javascript"
                target="_blank"
                rel="noreferrer"
              >
                Ver repositorio
                <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </article>
          </div>
        </section>

        <section className="case-study section-frame" id="caso-estudio">
          <div className="case-intro">
            <p className="section-label">Caso de estudio</p>
            <h2>CreativeFlow: construir una base que pudiera crecer.</h2>
            <p>
              Elegí este proyecto porque muestra con claridad la evolución de
              mis habilidades: partió como un servidor Express y terminó como
              una API conectada a PostgreSQL, organizada por capas y protegida
              con autenticación.
            </p>

            <a
              className="primary-button compact-button"
              href="https://github.com/Zkeh-x7/creativeflow-backend"
              target="_blank"
              rel="noreferrer"
            >
              Explorar CreativeFlow
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>

          <div className="case-content">
            <article className="case-block">
              <div className="case-icon">
                <Layers3 aria-hidden="true" size={22} />
              </div>
              <div>
                <span>01 · Actividad y desafío</span>
                <h3>Pasar de una estructura inicial a persistencia segura.</h3>
                <p>
                  El desafío fue integrar tres módulos sin perder lo ya
                  construido: conectar una base relacional, modelar usuarios y
                  proyectos, completar el CRUD y sumar seguridad manteniendo
                  responsabilidades claras en el código.
                </p>
              </div>
            </article>

            <article className="case-block">
              <div className="case-icon">
                <Database aria-hidden="true" size={22} />
              </div>
              <div>
                <span>02 · Solución propuesta</span>
                <h3>Una API modular respaldada por PostgreSQL.</h3>
                <p>
                  Organicé la aplicación en rutas, controladores, servicios y
                  modelos. Implementé Sequelize para la relación entre usuarios
                  y proyectos, validaciones, filtros, paginación y una
                  transacción con rollback para proteger la consistencia.
                </p>
              </div>
            </article>

            <article className="case-block">
              <div className="case-icon">
                <ShieldCheck aria-hidden="true" size={22} />
              </div>
              <div>
                <span>03 · Seguridad y herramientas</span>
                <h3>Autenticación, datos sensibles y archivos controlados.</h3>
                <p>
                  Apliqué bcrypt para contraseñas, JWT para autenticar
                  solicitudes y Multer para limitar imágenes por tipo, cantidad
                  y tamaño. Probé los endpoints con Postman y documenté la
                  configuración mediante variables de entorno seguras.
                </p>
              </div>
            </article>

            <article className="case-block">
              <div className="case-icon">
                <Sparkles aria-hidden="true" size={22} />
              </div>
              <div>
                <span>04 · Aprendizajes</span>
                <h3>Diseñar para mantener, probar y explicar.</h3>
                <p>
                  Aprendí a traducir requisitos en modelos y endpoints, depurar
                  la conexión con PostgreSQL, proteger información sensible y
                  documentar decisiones para que otra persona pueda instalar y
                  comprender el proyecto.
                </p>
              </div>
            </article>

            <div className="metrics-grid" aria-label="Métricas del proyecto">
              {caseMetrics.map(([value, label]) => (
                <div key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-frame" id="contacto">
          <div>
            <p className="section-label">Contacto</p>
            <h2>¿Construimos algo que conecte tecnología y creatividad?</h2>
          </div>

          <div className="contact-copy">
            <p>
              Estoy interesada en oportunidades trainee o junior, especialmente
              en equipos remotos e interdisciplinarios donde pueda seguir
              aprendiendo y aportar desde el desarrollo y la comunicación
              visual.
            </p>

            <div className="contact-actions" aria-label="Enlaces de contacto">
              <a
                className="primary-button"
                href="mailto:uranoanimations@gmail.com"
              >
                Escribir por correo
                <Mail aria-hidden="true" size={18} />
              </a>

              <a
                className="contact-link"
                href="https://www.linkedin.com/in/uranoanimations"
                target="_blank"
                rel="noreferrer"
              >
                <ContactRound aria-hidden="true" size={18} />
                LinkedIn
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>

              <a
                className="contact-link"
                href="https://github.com/Zkeh-x7"
                target="_blank"
                rel="noreferrer"
              >
                <GitBranch aria-hidden="true" size={18} />
                GitHub
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>

              <a
                className="contact-link"
                href="/Johanna-Romero-CV.pdf"
                download
              >
                <Download aria-hidden="true" size={18} />
                Descargar CV
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-frame">
        <p>Johanna Romero · Desarrollo Full Stack JavaScript + Animación 3D</p>
        <p>Diseñado y desarrollado en Santiago de Chile.</p>
      </footer>
    </div>
  );
}
