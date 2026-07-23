import { useState, useEffect } from 'react'
import Header from '../components/Header.jsx'
import { loadList, addEntry, removeEntry } from '../utils/storage.js'
import { buildTmsNote } from '../utils/buildNote.js'

const STORAGE_KEY = 'tmsNotes'

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

const EMPTY_FORM = {
  machine: '',
  date: todayStr(),
  complaint: '',
  findings: '',
  correctiveAction: '',
  partsUsed: '',
  verification: '',
  technician: '',
}

export default function TMSNote() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [history, setHistory] = useState([])
  const [copyMsg, setCopyMsg] = useState('')

  useEffect(() => {
    setHistory(loadList(STORAGE_KEY))
  }, [])

  function updateField(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  const noteText = buildTmsNote(form)
  const canGenerate = form.machine.trim() && form.complaint.trim()

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(noteText)
      setCopyMsg('Copied to clipboard.')
    } catch {
      setCopyMsg('Could not copy — select and copy manually.')
    }
    setTimeout(() => setCopyMsg(''), 2500)
  }

  function handleSave() {
    if (!canGenerate) return
    const next = addEntry(STORAGE_KEY, form)
    setHistory(next)
  }

  function handleDelete(id) {
    setHistory(removeEntry(STORAGE_KEY, id))
  }

  return (
    <div className="screen">
      <Header title="TMS Note" />
      <p className="screen-sub">
        Fill in the service details — Compass formats a note you can copy
        straight into TMS.
      </p>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="tms-machine">Machine number</label>
        <input
          id="tms-machine"
          type="text"
          value={form.machine}
          onChange={(e) => updateField('machine', e.target.value)}
          placeholder="e.g. 7367"
        />

        <label htmlFor="tms-date">Date</label>
        <input
          id="tms-date"
          type="text"
          value={form.date}
          onChange={(e) => updateField('date', e.target.value)}
        />

        <label htmlFor="tms-complaint">Complaint / reported symptom</label>
        <textarea
          id="tms-complaint"
          value={form.complaint}
          onChange={(e) => updateField('complaint', e.target.value)}
        />

        <label htmlFor="tms-findings">Findings / diagnostics</label>
        <textarea
          id="tms-findings"
          value={form.findings}
          onChange={(e) => updateField('findings', e.target.value)}
        />

        <label htmlFor="tms-action">Corrective action</label>
        <textarea
          id="tms-action"
          value={form.correctiveAction}
          onChange={(e) => updateField('correctiveAction', e.target.value)}
        />

        <label htmlFor="tms-parts">Parts used</label>
        <input
          id="tms-parts"
          type="text"
          value={form.partsUsed}
          onChange={(e) => updateField('partsUsed', e.target.value)}
          placeholder="Optional"
        />

        <label htmlFor="tms-verify">Verification</label>
        <textarea
          id="tms-verify"
          value={form.verification}
          onChange={(e) => updateField('verification', e.target.value)}
          placeholder="How the fix was confirmed"
        />

        <label htmlFor="tms-tech">Technician</label>
        <input
          id="tms-tech"
          type="text"
          value={form.technician}
          onChange={(e) => updateField('technician', e.target.value)}
        />
      </form>

      <div className="note-preview">{noteText}</div>

      <div className="btn-row">
        <button className="btn" onClick={handleCopy} disabled={!canGenerate}>
          Copy Note
        </button>
        <button className="btn btn-secondary" onClick={handleSave} disabled={!canGenerate}>
          Save
        </button>
      </div>
      {copyMsg && <div className="copy-banner">{copyMsg}</div>}

      {history.length > 0 && (
        <>
          <hr className="section-divider" />
          <h3 className="screen-title" style={{ fontSize: 15 }}>
            Saved Notes
            <span className="count-pill">{history.length}</span>
          </h3>
          <div className="entry-list">
            {history.map((h) => (
              <div key={h.id} className="entry-card">
                <div className="entry-card-head">
                  <span className="entry-card-machine">Machine #{h.machine}</span>
                  <span className="entry-card-date">{h.date}</span>
                </div>
                <div className="entry-field"><b>Complaint:</b> {h.complaint}</div>
                <button className="entry-delete" onClick={() => handleDelete(h.id)}>
                  Delete
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
