import React, { useState } from 'react'

const ListingsPage = ({ category = 'Para Venda' }) => {
  const [viewMode, setViewMode] = useState('grid') // 'grid' ou 'list'
  const [sortBy, setSortBy] = useState('recent')
  const [priceRange, setPriceRange] = useState({ min: '', max: '' })

  const listings = [
    {
      id: 1,
      title: 'iPhone 15 Pro Max 256GB - Seminovo',
      price: 6500,
      location: 'Asa Norte',
      date: '2 horas atrás',
      image: '📱',
      description: 'iPhone em perfeito estado, sem riscos, com caixa e carregador original.'
    },
    {
      id: 2,
      title: 'MacBook Air M2 - 8GB RAM 256GB SSD',
      price: 7200,
      location: 'Asa Sul',
      date: '5 horas atrás',
      image: '💻',
      description: 'MacBook Air M2 usado por apenas 6 meses, ideal para trabalho e estudos.'
    },
    {
      id: 3,
      title: 'Samsung Galaxy S24 Ultra - Novo',
      price: 5800,
      location: 'Águas Claras',
      date: '1 dia atrás',
      image: '📱',
      description: 'Galaxy S24 Ultra lacrado, cor titanium, 512GB de armazenamento.'
    },
    {
      id: 4,
      title: 'iPad Pro 12.9" com Apple Pencil',
      price: 4200,
      location: 'Taguatinga',
      date: '2 dias atrás',
      image: '📱',
      description: 'iPad Pro em excelente estado com Apple Pencil 2ª geração incluído.'
    },
    {
      id: 5,
      title: 'Dell XPS 13 - Intel i7 16GB RAM',
      price: 4800,
      location: 'Plano Piloto',
      date: '3 dias atrás',
      image: '💻',
      description: 'Notebook Dell XPS 13 ultrabook, processador i7, 16GB RAM, 512GB SSD.'
    },
    {
      id: 6,
      title: 'AirPods Pro 2ª Geração - Lacrado',
      price: 1200,
      location: 'Asa Norte',
      date: '4 dias atrás',
      image: '🎧',
      description: 'AirPods Pro 2ª geração lacrado, com cancelamento ativo de ruído.'
    }
  ]

  const filteredListings = listings.filter(listing => {
    if (priceRange.min && listing.price < parseInt(priceRange.min)) return false
    if (priceRange.max && listing.price > parseInt(priceRange.max)) return false
    return true
  })

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Header */}
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
          <div style={{ display: 'flex', alignItems: 'center' }}>
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
          
          <nav style={{ fontSize: '0.875rem', color: '#6b7280' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#2563EB' }}>craigslist</a>
            <span style={{ margin: '0 0.5rem' }}>&gt;</span>
            <span>{category}</span>
          </nav>
        </div>
      </header>

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '2rem 1rem',
        display: 'grid',
        gridTemplateColumns: '250px 1fr',
        gap: '2rem'
      }}>
        {/* Sidebar com Filtros */}
        <aside style={{
          backgroundColor: 'white',
          padding: '1.5rem',
          borderRadius: '0.5rem',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          height: 'fit-content'
        }}>
          <h3 style={{
            fontSize: '1.125rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: '#1f2937'
          }}>Filtros</h3>

          {/* Filtro de Preço */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>Preço</label>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="number"
                placeholder="Mín"
                value={priceRange.min}
                onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem'
                }}
              />
              <input
                type="number"
                placeholder="Máx"
                value={priceRange.max}
                onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem'
                }}
              />
            </div>
          </div>

          {/* Filtro de Localização */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>Localização</label>
            <select style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '0.875rem'
            }}>
              <option>Todas as regiões</option>
              <option>Asa Norte</option>
              <option>Asa Sul</option>
              <option>Águas Claras</option>
              <option>Taguatinga</option>
              <option>Plano Piloto</option>
            </select>
          </div>

          {/* Filtro de Data */}
          <div>
            <label style={{
              display: 'block',
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#374151',
              marginBottom: '0.5rem'
            }}>Publicado</label>
            <select style={{
              width: '100%',
              padding: '0.5rem',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              fontSize: '0.875rem'
            }}>
              <option>Qualquer data</option>
              <option>Hoje</option>
              <option>Últimos 3 dias</option>
              <option>Última semana</option>
              <option>Último mês</option>
            </select>
          </div>
        </aside>

        {/* Área Principal */}
        <main>
          {/* Header da Listagem */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '1.5rem'
          }}>
            <div>
              <h2 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: '#1f2937',
                margin: 0
              }}>{category}</h2>
              <p style={{
                color: '#6b7280',
                margin: '0.25rem 0 0 0'
              }}>{filteredListings.length} anúncios encontrados</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Ordenação */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                style={{
                  padding: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem'
                }}
              >
                <option value="recent">Mais recentes</option>
                <option value="price-low">Menor preço</option>
                <option value="price-high">Maior preço</option>
              </select>

              {/* Toggle de Visualização */}
              <div style={{ display: 'flex', border: '1px solid #d1d5db', borderRadius: '0.375rem' }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: viewMode === 'grid' ? '#2563EB' : 'white',
                    color: viewMode === 'grid' ? 'white' : '#6b7280',
                    border: 'none',
                    borderRadius: '0.375rem 0 0 0.375rem',
                    cursor: 'pointer'
                  }}
                >
                  ⊞
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: viewMode === 'list' ? '#2563EB' : 'white',
                    color: viewMode === 'list' ? 'white' : '#6b7280',
                    border: 'none',
                    borderRadius: '0 0.375rem 0.375rem 0',
                    cursor: 'pointer'
                  }}
                >
                  ☰
                </button>
              </div>
            </div>
          </div>

          {/* Lista de Anúncios */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: viewMode === 'grid' ? 'repeat(auto-fill, minmax(300px, 1fr))' : '1fr',
            gap: '1.5rem'
          }}>
            {filteredListings.map((listing) => (
              <div key={listing.id} style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                padding: '1.5rem',
                cursor: 'pointer',
                transition: 'box-shadow 0.2s',
                display: viewMode === 'list' ? 'flex' : 'block',
                gap: viewMode === 'list' ? '1rem' : '0'
              }}>
                <div style={{
                  fontSize: viewMode === 'list' ? '2rem' : '3rem',
                  textAlign: viewMode === 'list' ? 'left' : 'center',
                  marginBottom: viewMode === 'list' ? 0 : '1rem',
                  minWidth: viewMode === 'list' ? '60px' : 'auto'
                }}>
                  {listing.image}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#1f2937',
                    marginBottom: '0.5rem',
                    lineHeight: '1.4'
                  }}>
                    {listing.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: '#2563EB',
                    marginBottom: '0.5rem'
                  }}>
                    R$ {listing.price.toLocaleString()}
                  </p>
                  
                  {viewMode === 'list' && (
                    <p style={{
                      fontSize: '0.875rem',
                      color: '#6b7280',
                      marginBottom: '0.5rem',
                      lineHeight: '1.4'
                    }}>
                      {listing.description}
                    </p>
                  )}
                  
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
              </div>
            ))}
          </div>

          {/* Paginação */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem',
            marginTop: '2rem'
          }}>
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'white',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }}>
              Anterior
            </button>
            
            {[1, 2, 3, 4, 5].map(page => (
              <button key={page} style={{
                padding: '0.5rem 1rem',
                backgroundColor: page === 1 ? '#2563EB' : 'white',
                color: page === 1 ? 'white' : '#374151',
                border: '1px solid #d1d5db',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}>
                {page}
              </button>
            ))}
            
            <button style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'white',
              border: '1px solid #d1d5db',
              borderRadius: '0.375rem',
              cursor: 'pointer'
            }}>
              Próximo
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}

export default ListingsPage
