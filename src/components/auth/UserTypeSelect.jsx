export function UserTypeSelect({ value, onChange }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        User Type
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
      >
        <option value="student">Student</option>
        <option value="company">Company</option>
        <option value="admin">Placement Officer</option>
      </select>
    </div>
  );
}