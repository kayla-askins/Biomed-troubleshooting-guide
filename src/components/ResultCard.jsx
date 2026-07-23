export default function ResultCard({ entry, mode, machine }) {
  return (
    <div className="result-card">
      <div className="result-title">{entry.title}</div>
      <div className="result-match">
        {entry.system}
        {machine ? ` · Machine #${machine}` : ''}
      </div>

      {mode === 'quick' && (
        <>
          <div className="result-section">
            <h4>Most Likely</h4>
            <p>{entry.quick.likely}</p>
          </div>
          <div className="result-section">
            <h4>Quick Checklist</h4>
            <ul>
              {entry.quick.checklist.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="result-section">
            <h4>Next Action</h4>
            <p>{entry.quick.action}</p>
          </div>
        </>
      )}

      {mode === 'detail' && (
        <>
          {entry.detail.causes?.length > 0 && (
            <div className="result-section">
              <h4>Root Causes</h4>
              <ul>
                {entry.detail.causes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {entry.detail.inspection?.length > 0 && (
            <div className="result-section">
              <h4>Inspection Steps</h4>
              <ol>
                {entry.detail.inspection.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            </div>
          )}
          {entry.detail.correctiveActions?.length > 0 && (
            <div className="result-section">
              <h4>Corrective Actions</h4>
              <table className="action-table">
                <thead>
                  <tr>
                    <th>Issue</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {entry.detail.correctiveActions.map((row, i) => (
                    <tr key={i}>
                      <td>{row.issue}</td>
                      <td>{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {entry.detail.notes?.length > 0 && (
            <div className="result-section">
              <h4>Technician Notes</h4>
              <ul>
                {entry.detail.notes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {mode === 'trainme' && (
        <>
          <div className="result-section">
            <h4>Why It Happens</h4>
            <p>{entry.trainme.why}</p>
          </div>
          {entry.trainme.fieldWisdom?.length > 0 && (
            <div className="result-section">
              <h4>Field Wisdom</h4>
              <ul>
                {entry.trainme.fieldWisdom.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {entry.trainme.decisionTree?.length > 0 && (
            <div className="result-section">
              <h4>Decision Tree</h4>
              <ul>
                {entry.trainme.decisionTree.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
          {entry.trainme.mistakes?.length > 0 && (
            <div className="result-section">
              <h4>Common Rookie Mistakes</h4>
              <ul>
                {entry.trainme.mistakes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {entry.escalate && (
        <div className="escalate">⚠ Escalate: {entry.escalate}</div>
      )}
    </div>
  )
}
