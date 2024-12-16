export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateName = (name) => {
  return name.length >= 2;
};

export const validatePhone = (phone) => {
  const re = /^\d{10}$/;
  return re.test(phone);
};

export const validateCompanyName = (name) => {
  return name.length >= 2;
};

export const validateJobTitle = (title) => {
  return title.length >= 3;
};

export const validateSalary = (salary) => {
  return !isNaN(salary) && salary > 0;
};