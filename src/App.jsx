import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import './App.css'
import './Dashboard.css'

const modulos = [
  {
    id: 1,
    title: "Bases de Datos",
    description: "Fundamentos de modelado y consultas SQL",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    title: "Programación Web",
    description: "React en el frontend y Laravel en el backend",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    title: "Robótica",
    description: "Arduino y control de circuitos electrónicos",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80",
  },
]

function Tarjetas() {
  return (
    <div className="tarjetas-container">
      {modulos.map((modulo) => (
        <article key={modulo.id} className="tarjeta">
          <img src={modulo.image} alt={modulo.title} />
          <div className="tarjeta-body">
            <h3>{modulo.title}</h3>
            <p>{modulo.description}</p>
            <button type="button" className="btn">Suscribirse</button>
          </div>
        </article>
      ))}
    </div>
  )
}

function Inicio() {
  return (
    <section>
      <h2 className="section-title">Módulos disponibles</h2>
      <p>Aquí se verán tarjetas estadísticas.</p>
    </section>
  )
}

function MisClases() {
  return (
    <section>
      <h2 className="section-title">Módulos disponibles</h2>
      <Tarjetas />
    </section>
  )
}

function Docentes() {
  return (
    <section>
      <h2 className="section-title">Docentes</h2>
      <p>Módulo de docentes asignados.</p>
    </section>
  )
}
// Funcion principal de la aplicación
export default function App() {
  return (
    <div className="layout"> 
      <aside className="sidebar">
        <div className="sidebar-user">Usuario: Jurgen</div>
        <nav>
          <NavLink to="/"  className="nav-link">Inicio</NavLink>
          <NavLink to="/mis-clases" className="nav-link">Mis Clases</NavLink>
          <NavLink to="/docentes" className="nav-link">Docentes</NavLink>
        </nav>
      </aside>
      <div className="main">
        <header className="topbar">
          <h1>Asignación Clases</h1>
        </header>

        <main className="content">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/mis-clases" element={<MisClases />} />
            <Route path="/docentes" element={<Docentes />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}
