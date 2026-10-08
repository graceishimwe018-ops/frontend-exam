export const localDate = (date = new Date()) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
export const monthKey = date => date.slice(0, 7)
export const minutes = time => time ? Number(time.slice(0, 2)) * 60 + Number(time.slice(3, 5)) : 0
export const calculateMinutesLate = (checkIn, expected = '08:00') => checkIn ? Math.max(0, minutes(checkIn) - minutes(expected)) : 0
export const calculateWorkingHours = (inTime, outTime) => {
  if (!inTime || !outTime) return 0
  let duration = minutes(outTime) - minutes(inTime)
  if (duration < 0) duration += 1440
  return Math.round(duration / 60 * 100) / 100
}
export const recordsFor = (records, employeeId, month) => records.filter(r => r.employeeId === employeeId && (!month || monthKey(r.date) === month))
export const summarize = (records) => records.reduce((s, r) => ({ ...s, [r.status]: (s[r.status] || 0) + 1 }), {})
export const attendancePercent = (records, expectedDays) => {
  const denominator = expectedDays ?? records.length
  return denominator ? Math.round((records.filter(r => r.status === 'Present').length / denominator) * 100) : 0
}
export const monthWeekdays = month => {
  if (!month) return 0
  const [y, m] = month.split('-').map(Number)
  let total = 0
  for (let d = new Date(y, m - 1, 1); d.getMonth() === m - 1; d.setDate(d.getDate() + 1)) if (d.getDay() !== 0 && d.getDay() !== 6) total++
  return total
}
export const statusForToday = (employeeId, records, date = localDate()) => records.find(r => r.employeeId === employeeId && r.date === date)?.status || 'Not Marked'
