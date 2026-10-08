const names = ['Amina Yusuf','Daniel Mbeki','Grace Ndlovu','James Okafor','Lerato Khumalo','Samuel Mensah','Fatima Bello','Thabo Molefe','Chidi Eze','Zanele Dlamini','Peter Mwangi','Nia Johnson','Kwame Boateng','Maya Patel','Sipho Nkosi','Adaeze Obi','Michael Banda','Nomsa Sibanda','David Kamau','Amara Diallo','Brian Otieno','Kea Mokoena','Esther Achieng','Joseph Kato','Lindiwe Zulu','Omar Farouk','Naledi Moagi','Emeka Nwosu','Tariro Moyo','John Kibet','Ruth Abebe','Kofi Asante']
const departments = ['People & Culture','Engineering','Finance','Marketing','Operations','Customer Success']
const positions = ['Coordinator','Product Designer','Accountant','Software Engineer','Team Lead','Analyst','Specialist','Manager']
export const seedDepartments = departments.map((name, i) => ({ id: `DEP-${String(i + 1).padStart(3, '0')}`, name }))
export const seedEmployees = names.map((name, i) => ({
  id: `EMP-${String(i + 1).padStart(3, '0')}`, name, department: departments[i % departments.length],
  position: positions[(i * 3) % positions.length], email: `${name.toLowerCase().replace(/[^a-z]+/g, '.')}@cielo.co.za`,
  phone: `+27 82 ${String(1000000 + i * 7311).slice(1)}`, status: i === 26 ? 'Inactive' : 'Active',
}))
const pad = n => String(n).padStart(2, '0')
const today = new Date()
const records = []
for (let dayOffset = 0; dayOffset < 90; dayOffset++) {
  const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() - dayOffset)
  if (date.getDay() === 0 || date.getDay() === 6) continue
  const dateText = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`
  for (let i = 0; i < seedEmployees.length; i++) {
    if (seedEmployees[i].status !== 'Active') continue
    if ((i * 7 + dayOffset * 3) % 13 === 0) continue
    const n = (i + dayOffset * 5) % 19
    const status = n === 0 ? 'On Leave' : n === 1 || n === 7 ? 'Absent' : n === 2 || n === 5 || n === 10 ? 'Late' : 'Present'
    const checkIn = status === 'Late' ? `08:${pad(8 + ((i + dayOffset) % 43))}` : status === 'Present' ? `07:${pad(35 + ((i * 5 + dayOffset) % 25))}` : ''
    const outHour = 16 + ((i + dayOffset) % 3)
    records.push({ id: `ATT-${dateText.replaceAll('-', '')}-${String(i + 1).padStart(3, '0')}`, employeeId: seedEmployees[i].id, date: dateText, checkIn, checkOut: checkIn ? `${pad(outHour)}:${pad(10 + ((i * 7) % 45))}` : '', status, remarks: status === 'Late' ? 'Arrived after expected start' : status === 'On Leave' ? 'Approved leave' : '' })
  }
}
export const seedAttendance = records
export const seedSettings = { expectedStart: '08:00' }
