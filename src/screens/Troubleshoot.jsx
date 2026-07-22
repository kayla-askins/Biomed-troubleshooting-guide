import { useState } from 'react'
import Header from '../components/Header.jsx'
import ResultCard from '../components/ResultCard.jsx'
import { matchSymptom } from '../utils/match.js'
import { fallbackEntry } from '../data/knowledgeBase.js'

export default function Troubleshoot() {
  const [symptom, setSymptom] = useState('')
  const [machine, setMachine] = useState('')
  const [result, setResult] = useState(null)
  const [mode, setMode] = useState('quick')

  function handleSubmit(e) {
    e.preventDefault()
    if (!symptom.trim()) return
    const match = matchSymptom(symptom) || fallbackEntry
    setResult(match)
    setMode('quick')
  }

  return (
    <div className="screen">
      <Header title="Troubleshoot" />
      <p className="screen-sub">
        Describe the symptom and when it occurs. Compass will match it against
        known 2008T failure patterns.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="symptom">Symptom &amp; when it occurs</label>
        <textarea
          id="symptom"
          value={symptom}
          onChange={(e) => setSymptom(e.target.value)}
          placeholder="e.g. Low flow alarm partway through treatment, Bibag looks inflated"
        />

        <label htmlFor="machine">Machine number</label>
        <input
          id="machine"
          type="text"
          inputMode="numeric"
          value={machine}
          onChange={(e) => setMachine(e.target.value)}
          placeholder="e.g. 7367"
        />

        <button type="submit" className="btn" disabled={!symptom.trim()}>
          Submit
        </button>
      </form>

      {result && (
        <>
          <div className="mode-tabs">
            <button
              className={`mode-tab ${mode === 'quick' ? 'active' : ''}`}
              onClick={() => setMode('quick')}
              type="button"
            >
              /quick
            </button>
            <button
              className={`mode-tab ${mode === 'detail' ? 'active' : ''}`}
              onClick={() => setMode('detail')}
              type="button"
            >
              /detail
            </button>
            <button
              className={`mode-tab ${mode === 'trainme' ? 'active' : ''}`}
              onClick={() => setMode('trainme')}
              type="button"
            >
              /trainme
            </button>
          </div>
          <ResultCard entry={result} mode={mode} machine={machine.trim()} />
        </>
      )}
    </div>
  )
}
