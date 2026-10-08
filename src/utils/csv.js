export function downloadCsv(filename, rows) {
  if (!rows.length) return
  const keys = Object.keys(rows[0])
  const escape = value => `"${String(value ?? '').replaceAll('"', '""')}"`
  const csv = [keys.map(escape).join(','), ...rows.map(row => keys.map(key => escape(row[key])).join(','))].join('\r\n')
  const link = document.createElement('a')
  link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv;charset=utf-8;' }))
  link.download = filename
  link.click()
  URL.revokeObjectURL(link.href)
}
