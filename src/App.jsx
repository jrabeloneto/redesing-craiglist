import React, { useState } from 'react'
import './App.css'
import ListingsPage from './components/ListingsPage'

// Componente Header
const Header = ({ onLogoClick }) => {
  return (
    <header style={{
      backgroundColor: 'white',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
      borderBottom: '1px solid #e5e7eb'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '4rem'
      }}>
        {/* Logo */}
        <div 
          style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          onClick={onLogoClick}
        >
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2563EB',
            margin: 0
          }}>craigslist</h1>
          <span style={{
            marginLeft: '0.5rem',
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>brasília</span>
        </div>
        
        {/* Search Bar */}
        <div style={{
          flex: 1,
          maxWidth: '32rem',
          margin: '0 2rem',
          position: 'relative'
        }}>
          <input
            type="text"
            placeholder="Buscar em brasília..."
            className="input"
            style={{ paddingRight: '3rem' }}
          />
          <button style={{
            position: 'absolute',
            right: '0.75rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'none',
            border: 'none',
            color: '#9ca3af',
            cursor: 'pointer'
          }}>
            <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
        
        {/* User Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button style={{
            color: '#4b5563',
            background: 'none',
            border: 'none',
            cursor: 'pointer'
          }}>minha conta</button>
          <button className="btn-primary">postar anúncio</button>
        </div>
      </div>
    </header>
  )
}

// Componente Hero Section
const HeroSection = () => {
  return (
    <section style={{
      background: 'linear-gradient(to right, #2563EB, #2563EB)',
      color: 'white',
      padding: '4rem 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>Encontre tudo em Brasília</h2>
        <p style={{
          fontSize: '1.25rem',
          marginBottom: '2rem',
          opacity: 0.9
        }}>Compre, venda, alugue e conecte-se com sua comunidade local</p>
        
        {/* Search Bar Principal */}
        <div style={{ maxWidth: '32rem', margin: '0 auto' }}>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              placeholder="O que você está procurando?"
              style={{
                flex: 1,
                padding: '1rem 1.5rem',
                color: '#1f2937',
                borderRadius: '0.5rem 0 0 0.5rem',
                border: 'none',
                outline: 'none'
              }}
            />
            <button className="btn-secondary" style={{
              padding: '1rem 2rem',
              borderRadius: '0 0.5rem 0.5rem 0'
            }}>
              Buscar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente Categories
const Categories = ({ onCategoryClick }) => {
  const categories = [
    { name: 'Para Venda', icon: '🛍️', count: '1,234' },
    { name: 'Imóveis', icon: '🏠', count: '567' },
    { name: 'Empregos', icon: '💼', count: '890' },
    { name: 'Serviços', icon: '🔧', count: '456' },
    { name: 'Comunidade', icon: '👥', count: '234' },
    { name: 'Gigs', icon: '🎵', count: '123' },
    { name: 'Currículos', icon: '📄', count: '345' },
    { name: 'Fóruns', icon: '💬', count: '678' }
  ]

  return (
    <section style={{
      padding: '4rem 0',
      backgroundColor: '#f9fafb'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>Explore por Categoria</h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {categories.map((category, index) => (
            <div 
              key={index} 
              className="card" 
              style={{
                textAlign: 'center',
                cursor: 'pointer'
              }}
              onClick={() => onCategoryClick(category.name)}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: '1rem'
              }}>{category.icon}</div>
              <h4 style={{
                fontWeight: '600',
                color: '#1f2937',
                margin: '0 0 0.5rem 0'
              }}>
                {category.name}
              </h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                margin: 0
              }}>{category.count} anúncios</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Featured Listings
const FeaturedListings = () => {
  const listings = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max 256GB',
      price: 'R$ 6.500',
      location: 'Asa Norte',
      image: '📱',
      date: '2 horas atrás'
    },
    {
      id: 2,
      title: 'Apartamento 2 quartos - Águas Claras',
      price: 'R$ 2.800/mês',
      location: 'Águas Claras',
      image: '🏠',
      date: '5 horas atrás'
    },
    {
      id: 3,
      title: 'MacBook Air M2 - Seminovo',
      price: 'R$ 7.200',
      location: 'Asa Sul',
      image: '💻',
      date: '1 dia atrás'
    }
  ]

  return (
    <section style={{ padding: '4rem 0' }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <h3 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>Anúncios em Destaque</h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem'
        }}>
          {listings.map((listing) => (
            <div key={listing.id} className="card" style={{ cursor: 'pointer' }}>
              <div style={{
                fontSize: '4rem',
                textAlign: 'center',
                marginBottom: '1rem'
              }}>{listing.image}</div>
              <h4 style={{
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '0.5rem'
              }}>
                {listing.title}
              </h4>
              <p style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#2563EB',
                marginBottom: '0.5rem'
              }}>{listing.price}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.875rem',
                color: '#6b7280'
              }}>
                <span>{listing.location}</span>
                <span>{listing.date}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-primary">Ver Todos os Anúncios</button>
        </div>
      </div>
    </section>
  )
}

// Componente Footer
const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#111827',
      color: 'white',
      padding: '3rem 0'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem'
        }}>
          <div>
            <h4 style={{ fontWeight: 'bold', marginBottom: '1rem' }}>craigslist brasília</h4>
            <p style={{ color: '#9ca3af' }}>Conectando pessoas e comunidades desde 1995</p>
          </div>
          
          <div>
            <h5 style={{ fontWeight: '600', marginBottom: '1rem' }}>Categorias</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Para Venda</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Imóveis</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Empregos</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Serviços</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 style={{ fontWeight: '600', marginBottom: '1rem' }}>Suporte</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Ajuda</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Segurança</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Termos de Uso</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Privacidade</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h5 style={{ fontWeight: '600', marginBottom: '1rem' }}>Outras Cidades</h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>São Paulo</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Rio de Janeiro</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Belo Horizonte</a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Salvador</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid #374151',
          marginTop: '2rem',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#9ca3af'
        }}>
          <p>&copy; 2024 craigslist. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedCategory, setSelectedCategory] = useState('')

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName)
    setCurrentPage('listings')
  }

  const handleLogoClick = () => {
    setCurrentPage('home')
  }

  if (currentPage === 'listings') {
    return <ListingsPage category={selectedCategory} />
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      <Header onLogoClick={handleLogoClick} />
      <HeroSection />
      <Categories onCategoryClick={handleCategoryClick} />
      <FeaturedListings />
      <Footer />
    </div>
  )
}

export default App
