import { useState } from 'react'
import { rateCardTables } from '../data/rateCard'

export default function RateCard() {
  const [active, setActive] = useState(rateCardTables[0].id)
  const table = rateCardTables.find((t) => t.id === active)

  return (
    <div className="ratecard">
      <div className="ratecard__switch">
        {rateCardTables.map((t) => (
          <button
            key={t.id}
            className={`ratecard__tab ${active === t.id ? 'is-active' : ''}`}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {table.note && <p className="ratecard__note">{table.note}</p>}

      <div className="ratecard__table-wrap">
        <table className="ratecard__table">
          <thead>
            <tr>
              {table.columns.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i}>
                {row.map((cell, j) => (
                  <td key={j} className={j === 0 ? 'ratecard__td--key' : ''}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
