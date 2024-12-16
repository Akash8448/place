import { UserTypeSelect } from './UserTypeSelect';
import { InputField } from '../common/InputField';

export function AuthForm({ formData, setFormData, handleSubmit, isRegister }) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <UserTypeSelect
        value={formData.userType}
        onChange={(value) => setFormData({ ...formData, userType: value })}
      />

      <InputField
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        required
      />

      <InputField
        label="Password"
        type="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />

      {isRegister && (
        <InputField
          label="Confirm Password"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          required
        />
      )}

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {isRegister ? 'Register' : 'Login'}
      </button>
    </form>
  );
}