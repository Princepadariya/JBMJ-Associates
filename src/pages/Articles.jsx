import { useParams, Navigate, Link } from 'react-router-dom'
import { FiArrowUpRight, FiFileText } from 'react-icons/fi'
import useReveal from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import { articles } from '../data/articles'

const CATEGORY_NAMES = {
  'professional-laws': 'Professional Laws',
  'general': 'General',
}

export default function Articles() {
  const { category } = useParams()
  useReveal([category])

  // If no category is provided or it's invalid, default to the first one or a general landing
  const activeCategory = category && CATEGORY_NAMES[category] ? category : 'professional-laws'

  if (category && !CATEGORY_NAMES[category]) {
    return <Navigate to="/articles/professional-laws" replace />
  }

  const categoryArticles = articles[activeCategory] || []
  const categoryName = CATEGORY_NAMES[activeCategory]

  return (
    <>
      <PageHero
        eyebrow="Articles & PPTs"
        title={categoryName}
        lead={`Read our latest presentations and articles on ${categoryName.toLowerCase()}.`}
        crumb={categoryName}
      />

      <section className="section">
        <div className="container">
          <div className="kb-groups">
            <div className="kb-group reveal">
              <h3 className="kb-group__title">{categoryName}</h3>
              
              {categoryArticles.length === 0 ? (
                <p>No articles available in this category yet.</p>
              ) : (
                <div className="kb-list">
                  {categoryArticles.map((article) => (
                    <a 
                      key={article.id} 
                      className="kb-list__item" 
                      href={article.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      style={{ alignItems: 'center' }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <div style={{
                          backgroundColor: 'rgba(30, 58, 138, 0.1)',
                          color: '#1e3a8a',
                          padding: '0.5rem',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <FiFileText size={20} />
                        </div>
                        <div>
                          <h4 style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {article.title}
                            {article.isNew && (
                              <span style={{
                                backgroundColor: '#e11d48',
                                color: 'white',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                padding: '0.1rem 0.4rem',
                                borderRadius: '4px',
                                textTransform: 'uppercase'
                              }}>
                                New
                              </span>
                            )}
                          </h4>
                        </div>
                      </div>
                      <FiArrowUpRight className="kb-list__arrow" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
