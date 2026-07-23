import { useState, useEffect } from 'react'
import Header from '../components/Header.jsx'
import { loadList, addEntry, removeEntry } from '../utils/storage.js'

const STORAGE_KEY = 'lessons'

const EMPTY_FORM = {
  machine: '',
  symptom: '',
  rootCause: '',
  correctiveAction: '',
  reviewedBy: '',
}

export default function LessonsLearned() {
  const [entries, setEntries] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)

  useEffect(() => {
    setEntries(loadList(STORAGE_KEY))
  }, [])

  function updateField(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.machine.trim() || !form.symptom.trim()) return
    const next = addEntry(STORAGE_KEY, form)
    setEntries(next)
    setForm(EMPTY_FORM)
  }

  function handleDelete(id) {
    setEntries(removeEntry(STORAGE_KEY, id))
  }

  return (
    <div className="screen">
      <Header title="Lessons Learned" />
      <p className="screen-sub">
        Log root causes as you find them. Saved on this device only.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="ll-machine">Machine</label>
        <input
          id="ll-machine"
          type="text"
          value={form.machine}
          onChange={(e) => updateField('machine', e.target.value)}
          placeholder="Machine number"
        />

        <label htmlFor="ll-symptom">Symptom</label>
        <textarea
          id="ll-symptom"
          value={form.symptom}
          onChange={(e) => updateField('symptom', e.target.value)}
          placeholder="What was reported / observed"
        />

        <label htmlFor="ll-cause">Root Cause</label>
        <textarea
          id="ll-cause"
          value={form.rootCause}
          onChange={(e) => updateField('rootCause', e.target.value)}
          placeholder="What was actually wrong"
        />

        <label htmlFor="ll-action">Corrective Action</label>
        <textarea
          id="ll-action"
          value={form.correctiveAction}
          onChange={(e) => updateField('correctiveAction', e.target.value)}
          placeholder="What fixed it"
        />

        <label htmlFor="ll-reviewer">Reviewed by</label>
        <input
          id="ll-reviewer"
          type="text"
          value={form.reviewedBy}
          onChange={(e) => updateField('reviewedBy', e.target.value)}
          placeholder="Name / initials"
        />

        <button type="submit" className="btn" disabled={!form.machine.trim() || !form.symptom.trim()}>
          Save Entry
        </button>
      </form>

      <hr className="section-divider" />

      <h3 className="screen-title" style={{ fontSize: 15 }}>
        Past Entries
        <span className="count-pill">{entries.length}</span>
      </h3>

      {entries.length === 0 ? (
        <div className="empty-state">No entries yet.</div>
      ) : (
        <div className="entry-list">
          {entries.map((entry) => (
            <div key={entry.id} className="entry-card">
              <div className="entry-card-head">
                <span className="entry-card-machine">Machine #{entry.machine}</span>
                <span className="entry-card-date">
                  {new Date(entry.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="entry-field"><b>Symptom:</b> {entry.symptom}</div>
              {entry.rootCause && (
                <div className="entry-field"><b>Root Cause:</b> {entry.rootCause}</div>
              )}
              {entry.correctiveAction && (
                <div className="entry-field"><b>Fix:</b> {entry.correctiveAction}</div>
              )}
              {entry.reviewedBy && (
                <div className="entry-field"><b>Reviewed by:</b> {entry.reviewedBy}</div>
              )}
              <button className="entry-delete" onClick={() => handleDelete(entry.id)}>
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
