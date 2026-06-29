import { NavLink } from 'react-router-dom'
import {
  FiGrid, FiBell, FiLink, FiBookOpen, FiFileText, FiFile, FiCalendar,
  FiTag, FiHelpCircle, FiBook, FiTrendingUp,
} from 'react-icons/fi'

export const KB_SECTIONS = [
  { id: 'calculators', label: 'Calculators', icon: FiGrid },
  { id: 'rate-card', label: 'Rate Card', icon: FiTag },
  { id: 'due-dates', label: 'Due Dates', icon: FiCalendar },
  { id: 'itr-selector', label: 'ITR Helper', icon: FiHelpCircle },
  { id: 'key-sections', label: 'Key Sections', icon: FiBook },
  { id: 'read-financials', label: 'Read Financials', icon: FiTrendingUp },
  { id: 'bulletins', label: 'Bulletins', icon: FiBell },
  { id: 'links', label: 'Links', icon: FiLink },
  { id: 'acts', label: 'Acts', icon: FiBookOpen },
  { id: 'rules', label: 'Rules', icon: FiFileText },
  { id: 'forms', label: 'Forms', icon: FiFile },
]

/* Horizontal sub-navigation shared across all Knowledge Bank pages. */
export default function KnowledgeNav() {
  return (
    <div className="kb-tabs" role="tablist">
      {KB_SECTIONS.map((s) => {
        const Icon = s.icon
        return (
          <NavLink
            key={s.id}
            to={`/knowledge/${s.id}`}
            className={({ isActive }) => `kb-tab ${isActive ? 'is-active' : ''}`}
          >
            <Icon /> {s.label}
          </NavLink>
        )
      })}
    </div>
  )
}
