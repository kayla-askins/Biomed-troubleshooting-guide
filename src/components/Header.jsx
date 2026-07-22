import { useNavigate } from 'react-router-dom'

export default function Header({ title }) {
  const navigate = useNavigate()
  return (
    <div className="topbar">
      <button className="back-btn" onClick={() => navigate('/')} aria-label="Back to home">
        ‹ Home
      </button>
      <span className="topbar-title">{title}</span>
    </div>
  )
}
