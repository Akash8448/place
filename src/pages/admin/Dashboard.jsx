import { Routes, Route } from 'react-router-dom';
import Students from './Students';
import Companies from './Companies';
import Reports from './Reports';
import Settings from './Settings';

function AdminDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow">
          <nav className="space-y-2">
            <NavLink to="/admin/students">Students</NavLink>
            <NavLink to="/admin/companies">Companies</NavLink>
            <NavLink to="/admin/reports">Reports</NavLink>
            <NavLink to="/admin/settings">Settings</NavLink>
          </nav>
        </div>

        <div className="md:col-span-3 bg-white p-6 rounded-lg shadow">
          <Routes>
            <Route path="students" element={<Students />} />
            <Route path="companies" element={<Companies />} />
            <Route path="reports" element={<Reports />} />
            <Route path="settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block px-4 py-2 rounded hover:bg-indigo-50 hover:text-indigo-600"
    >
      {children}
    </Link>
  );
}