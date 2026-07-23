import { Link } from 'react-router-dom'
import CompassMark from '../components/CompassMark.jsx'

const NAV_ITEMS = [
  {
    to: '/troubleshoot',
    icon: '🔧',
    label: 'Troubleshoot',
    sub: 'Describe a symptom, get a field checklist',
  },
  {
    to: '/tms-note',
    icon: '📋',
    label: 'TMS Note',
    sub: 'Build a formatted work-order note',
  },
  {
    to: '/eod-report',
    icon: '📊',
    label: 'EOD Report',
    sub: 'Log today’s machines, generate a summary',
  },
  {
    to: '/lessons-learned',
    icon: '📚',
    label: 'Lessons Learned',
    sub: 'Root cause log, saved on this device',
  },
]

export default function Home() {
  return (
    <div className="screen">
      <div className="brand">
        <CompassMark />
        <span className="brand-name">Compass</span>
        <span className="brand-tag">Fresenius 2008T field reference</span>
      </div>

      <div className="nav-grid">
        {NAV_ITEMS.map((item) => (
          <Link key={item.to} to={item.to} className="nav-btn">
            <span className="nav-icon">{item.icon}</span>
            <span>
              {item.label}
              <span className="nav-btn-sub">{item.sub}</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="footer-note">
        Field reference only. Follow facility policy and manufacturer service
        documentation for all repairs and patient-facing decisions.
      </div>
    </div>
  )
}
