# Cielo Employee Attendance Dashboard

A responsive, frontend only attendance management dashboard for tracking employees, daily attendance, late arrivals, departments, and monthly trends. Employee and attendance information is stored in the browser with localStorage.

## Technologies

- React 18, Vite, and JavaScript ES6+
- React Router
- Material UI, MUI DataGrid, and MUI Icons
- Recharts
- HTML5 and CSS3
- Browser localStorage

## Installation and use

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Create a production build with:

```bash
npm run build
```

## Main features

- Overview dashboard with live summary cards, attendance charts, recent records, late arrivals, and department summary
- Employee and department create, edit, search, and delete workflows
- Attendance record create, edit, filter, sort, and delete workflows, including duplicate employee/date prevention
- Employee detail pages at `/employees/:employeeId`
- Month navigation and employee/department filters in the attendance calendar
- Monthly attendance report and downloadable CSV
- Daily, monthly, employee, department, late, and absence reports with CSV export and browser printing
- Responsive navigation and layouts for desktop, tablet, and mobile

## Screenshots

Screenshots captured from the running app are in `screenshots/`:

- Dashboard: `screenshots/dashboard.png`
- Employees: `screenshots/employees.png`
- Employee details: `screenshots/employee-details.png`
- Attendance records: `screenshots/attendance-records.png`
- Attendance calendar: `screenshots/attendance-calendar.png`
- Monthly report: `screenshots/monthly-report.png`
- Departments: `screenshots/departments.png`
- Reports: `screenshots/reports.png`

## Short demonstration

1. Open the Dashboard to review today’s attendance, late arrivals, absences, and department charts.
2. Use Employees to add or edit a team member, then open that employee’s detail page to see their history.
3. Record attendance with a check-in after the configured start time and see the late warning and minutes calculated.
4. Open the Calendar, select a day, and inspect its attendance records.
5. Review the monthly or department report, apply filters, then export the current data to CSV or print it.

## Attendance calculations

- Expected start time defaults to 08:00 and can be changed on the Attendance page. The setting is saved in localStorage.
- A check-in after the expected start time is automatically marked Late. Minutes late are computed from the two times.
- Working hours are computed from check-in and check-out; overnight values wrap across midnight.
- Attendance percentage is calculated as present days divided by expected weekdays for a monthly report. Late days remain a separate status in summaries.
- Department values are derived from the department's active employees and their attendance records.

## Mock data

On first launch, the app seeds 32 employees, 6 departments, and attendance records across the last 90 days, including present, absent, late, and leave statuses. The generated seed contains more than 150 records and at least 20 late records. Existing browser data is retained on subsequent launches.

## LocalStorage

The app persists `employees`, `departments`, `attendanceRecords`, and `applicationSettings`. CRUD operations update React state and localStorage so refreshes retain changes.

## Future improvements

- Backend API and authenticated user roles
- Database integration and audit history
- Payroll and biometric attendance integrations
- Automated notifications and approval workflows
