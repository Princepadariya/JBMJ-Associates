import { NavLink } from 'react-router-dom'
import {
  LuLayoutGrid, LuBell, LuLink, LuBookOpen, LuFileText, LuFile, LuCalendar,
  LuTag, LuCircleHelp, LuBook, LuTrendingUp,
} from 'react-icons/lu'

export const KB_SECTIONS = [
  { id: 'calculators', label: 'Calculators', icon: LuLayoutGrid },
  { id: 'rate-card', label: 'Rate Card', icon: LuTag },
  { id: 'due-dates', label: 'Due Dates', icon: LuCalendar },
  { id: 'itr-selector', label: 'ITR Helper', icon: LuCircleHelp },
  { id: 'key-sections', label: 'Key Sections', icon: LuBook },
  { id: 'read-financials', label: 'Read Financials', icon: LuTrendingUp },
  { id: 'bulletins', label: 'Bulletins', icon: LuBell },
  { id: 'links', label: 'Links', icon: LuLink },
  { id: 'acts', label: 'Acts', icon: LuBookOpen },
  { id: 'rules', label: 'Rules', icon: LuFileText },
  { id: 'forms', label: 'Forms', icon: LuFile },
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
