import { useState, useEffect, useMemo } from 'react'
import Header from '../components/Header.jsx'
import { loadList, addEntry, removeEntry } from '../utils/storage.js'
import { buildEodReport } from '../utils/buildNote.js'

const STORAGE_KEY = 'eodItems'
const STATUSES = ['Resolved', 'Escalated', 'Monitoring']

function todayStr() {
  return new Date().toISOString().slice(0, 10)
}

const EMPTY_ITEM = { machine: '', issue: '', action: '', status: STATUSES[0] }

export default function EODReport() {
  const [date, setDate] = useState(todayStr())
  const [allItems, setAllItems] = useState([])
  const [item, setItem] = useState(EMPTY_ITEM)
  const [copyMsg, setCopyMsg] = useState('')

  useEffect(() => {
    setAllItems(loadList(STORAGE_KEY))
  }, [])

  const itemsForDate = useMemo(
    () => allItems.filter((i) => i.date === date),
    [allItems, date],
  )

  const pastDates = useMemo(() => {
    const counts = {}
    allItems.forEach((i) => {
      counts[i.date] = (counts[i.date] || 0) + 1
    })
    return Object.entries(counts).sort((a, b) => (a[0] < b[0] ? 1 : -1))
  }, [allItems])

  function updateField(field, value) {
    setItem((f) => ({ ...f, [field]: value }))
  }

  function handleAdd(e) {
    e.preventDefault()
    if (!item.machine.trim() || !item.issue.trim()) return
    const next = addEntry(STORAGE_KEY, { ...item, date })
    setAllItems(next)
    setItem(EMPTY_ITEM)
  }

  function handleDelete(id) {
    setAllItems(removeEntry(STORAGE_KEY, id))
  }

  const reportText = buildEodReport(date, itemsForDate)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(reportText)
      setCopyMsg('Copied to clipboard.')
    } catch {
      setCopyMsg('Could not copy — select and copy manually.')
    }
    setTimeout(() => setCopyMsg(''), 2500)
  }

  return (
    <div className="screen">
      <Header title="EOD Report" />
      <p className="screen-sub">
        Log each machine touched today, then generate a shareable summary.
      </p>

      <label htmlFor="eod-date">Date</label>
      <input id="eod-date" type="text" value={date} onChange={(e) => setDate(e.target.value)} />

      <form onSubmit={handleAdd}>
        <label htmlFor="eod-machine">Machine number</label>
        <input
          id="eod-machine"
          type="text"
          value={item.machine}
          onChange={(e) => updateField('machine', e.target.value)}
          placeholder="e.g. 7367"
        />

        <label htmlFor="eod-issue">Issue</label>
        <input
          id="eod-issue"
          type="text"
          value={item.issue}
          onChange={(e) => updateField('issue', e.target.value)}
          placeholder="e.g. Low flow alarm"
        />

        <label htmlFor="eod-action">Action taken</label>
        <input
          id="eod-action"
          type="text"
          value={item.action}
          onChange={(e) => updateField('action', e.target.value)}
          placeholder="e.g. Replaced Bibag vent filter"
        />

        <label htmlFor="eod-status">Status</label>
        <select id="eod-status" value={item.status} onChange={(e) => updateField('status', e.target.value)}>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <button type="submit" className="btn" disabled={!item.machine.trim() || !item.issue.trim()}>
          Add to Report
        </button>
      </form>

      {itemsForDate.length > 0 && (
        <div className="entry-list">
          {itemsForDate.map((i) => (
            <div key={i.id} className="entry-card">
              <div className="entry-card-head">
                <span className="entry-card-machine">Machine #{i.machine}</span>
                <span className="entry-card-date">{i.status}</span>
              </div>
              <div className="entry-field"><b>Issue:</b> {i.issue}</div>
              {i.action && <div className="entry-field"><b>Action:</b> {i.action}</div>}
              <button className="entry-delete" onClick={() => handleDelete(i.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="note-preview">{reportText}</div>
      <div className="btn-row">
        <button className="btn" onClick={handleCopy} disabled={itemsForDate.length === 0}>
          Copy Report
        </button>
      </div>
      {copyMsg && <div className="copy-banner">{copyMsg}</div>}

      {pastDates.length > 0 && (
        <>
          <hr className="section-divider" />
          <h3 className="screen-title" style={{ fontSize: 15 }}>Past Reports</h3>
          <div className="entry-list">
            {pastDates.map(([d, count]) => (
              <button
                key={d}
                className="nav-btn"
                style={{ padding: '12px 14px' }}
                onClick={() => setDate(d)}
                type="button"
              >
                <span>
                  {d}
                  <span className="nav-btn-sub">{count} machine{count === 1 ? '' : 's'}</span>
                </span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
