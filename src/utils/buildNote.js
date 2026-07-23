export function buildTmsNote(form) {
  const lines = [
    'TMS SERVICE NOTE',
    `Machine: #${form.machine || '—'}`,
    `Date: ${form.date || '—'}`,
    '',
    'Complaint:',
    form.complaint || '—',
    '',
    'Findings:',
    form.findings || '—',
    '',
    'Corrective Action:',
    form.correctiveAction || '—',
    '',
    'Parts Used:',
    form.partsUsed || 'None',
    '',
    'Verification:',
    form.verification || '—',
    '',
    `Technician: ${form.technician || '—'}`,
  ]
  return lines.join('\n')
}

export function buildEodReport(date, items) {
  const lines = [`EOD REPORT — ${date}`, `Machines serviced: ${items.length}`, '']
  items.forEach((item, i) => {
    lines.push(`${i + 1}. Machine #${item.machine} — ${item.issue}`)
    lines.push(`   Action: ${item.action}`)
    lines.push(`   Status: ${item.status}`)
    lines.push('')
  })
  return lines.join('\n')
}
