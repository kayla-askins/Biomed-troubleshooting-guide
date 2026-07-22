import { Routes, Route } from 'react-router-dom'
import Home from './screens/Home.jsx'
import Troubleshoot from './screens/Troubleshoot.jsx'
import TMSNote from './screens/TMSNote.jsx'
import EODReport from './screens/EODReport.jsx'
import LessonsLearned from './screens/LessonsLearned.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/troubleshoot" element={<Troubleshoot />} />
      <Route path="/tms-note" element={<TMSNote />} />
      <Route path="/eod-report" element={<EODReport />} />
      <Route path="/lessons-learned" element={<LessonsLearned />} />
    </Routes>
  )
}
