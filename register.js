// Registration Form Logic
const form = document.getElementById('registrationForm');
const togglePasswordIcons = document.querySelectorAll('.toggle-password');
const profilePicInput = document.getElementById('profilePic');
const profilePreview = document.getElementById('profilePreview');
let profilePicBase64 = '';

// Show/hide password
if (togglePasswordIcons) {
  togglePasswordIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      const target = document.getElementById(this.dataset.target);
      if (target.type === 'password') {
        target.type = 'text';
        this.innerHTML = '<i class="fa fa-eye-slash"></i>';
      } else {
        target.type = 'password';
        this.innerHTML = '<i class="fa fa-eye"></i>';
      }
    });
  });
}

if (profilePicInput) {
  profilePicInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(evt) {
        profilePicBase64 = evt.target.result;
        profilePreview.innerHTML = `<img src="${profilePicBase64}" alt="Profile Preview" />`;
      };
      reader.readAsDataURL(file);
    } else {
      profilePicBase64 = '';
      profilePreview.innerHTML = '';
    }
  });
}

function validateName(name) {
  if (!name || name.length < 3) return 'Full Name must be at least 3 characters.';
  if (/([a-zA-Z])\1{2,}/.test(name)) return 'No character can repeat 3 times in a row.';
  if (/\d/.test(name)) return 'Full Name cannot contain digits.';
  return '';
}

function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!email) return 'Email is required.';
  if (!re.test(email)) return 'Invalid email format.';
  return '';
}

function validatePassword(password) {
  if (!password) return 'Password is required.';
  if (password.length < 8) return 'Password must be at least 8 characters.';
  if (!/[A-Z]/.test(password)) return 'Password must include an uppercase letter.';
  if (!/[a-z]/.test(password)) return 'Password must include a lowercase letter.';
  if (!/[0-9]/.test(password)) return 'Password must include a number.';
  if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) return 'Password must include a special character.';
  return '';
}

function validateConfirmPassword(password, confirmPassword) {
  if (password !== confirmPassword) return 'Passwords do not match.';
  return '';
}

function validatePhone(phone) {
  if (!phone) return 'Phone number is required.';
  if (!/^\d{10}$/.test(phone)) return 'Phone number must be exactly 10 digits.';
  return '';
}

function validateGender() {
  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) return 'Please select your gender.';
  return '';
}

function validateDOB(dob) {
  if (!dob) return 'Date of Birth is required.';
  const dobDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const m = today.getMonth() - dobDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }
  if (age < 18) return 'You must be at least 18 years old.';
  return '';
}

function validateAddress(address) {
  if (!address || address.length < 10) return 'Address must be at least 10 characters.';
  return '';
}

function validateCity(city) {
  if (!city) return 'Please select a city.';
  return '';
}

function validateSkills() {
  const skills = document.querySelectorAll('input[name="skills"]:checked');
  if (skills.length === 0) return 'Select at least one skill.';
  return '';
}

function validateTerms() {
  const terms = document.getElementById('terms');
  if (!terms.checked) return 'You must accept the terms and conditions.';
  return '';
}

function showFieldError(field, message) {
  document.getElementById('error' + field).textContent = message || '';
}

function clearAllErrors() {
  [
    'FullName', 'Email', 'Password', 'ConfirmPassword', 'Phone',
    'Gender', 'Dob', 'Address', 'City', 'Skills', 'Terms'
  ].forEach(f => showFieldError(f, ''));
}

function validateAllFields() {
  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const phone = document.getElementById('phone').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value;
  const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(cb => cb.value);
  const terms = document.getElementById('terms').checked;

  let valid = true;

  let err = validateName(name);
  showFieldError('FullName', err);
  if (err) valid = false;

  err = validateEmail(email);
  showFieldError('Email', err);
  if (err) valid = false;

  err = validatePassword(password);
  showFieldError('Password', err);
  if (err) valid = false;

  err = validateConfirmPassword(password, confirmPassword);
  showFieldError('ConfirmPassword', err);
  if (err) valid = false;

  err = validatePhone(phone);
  showFieldError('Phone', err);
  if (err) valid = false;

  err = validateGender();
  showFieldError('Gender', err);
  if (err) valid = false;

  err = validateDOB(dob);
  showFieldError('Dob', err);
  if (err) valid = false;

  err = validateAddress(address);
  showFieldError('Address', err);
  if (err) valid = false;

  err = validateCity(city);
  showFieldError('City', err);
  if (err) valid = false;

  err = validateSkills();
  showFieldError('Skills', err);
  if (err) valid = false;

  err = validateTerms();
  showFieldError('Terms', err);
  if (err) valid = false;

  return valid;
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  clearAllErrors();
  if (!validateAllFields()) return;

  const name = document.getElementById('fullName').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value.trim();
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const dob = document.getElementById('dob').value;
  const address = document.getElementById('address').value.trim();
  const city = document.getElementById('city').value;
  const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map(cb => cb.value);

  // Check if user already exists
  let users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.some(u => u.email === email)) {
    showFieldError('Email', 'User with this email already exists.');
    return;
  }

  // Save user
  users.push({
    name,
    email,
    password,
    phone,
    gender,
    dob,
    address,
    city,
    skills,
    profilePic: profilePicBase64
  });
  localStorage.setItem('users', JSON.stringify(users));
  alert('Registration successful! Please login.');
  window.location.href = 'login.html';
});

// Live validation on input
const fieldMap = {
  fullName: validateName,
  email: validateEmail,
  password: validatePassword,
  confirmPassword: (v) => validateConfirmPassword(document.getElementById('password').value, v),
  phone: validatePhone,
  dob: validateDOB,
  address: validateAddress,
  city: validateCity
};
Object.keys(fieldMap).forEach(id => {
  document.getElementById(id).addEventListener('input', function() {
    showFieldError(id.charAt(0).toUpperCase() + id.slice(1), fieldMap[id](this.value));
  });
});
// Gender, skills, terms live validation
Array.from(document.querySelectorAll('input[name="gender"]')).forEach(radio => {
  radio.addEventListener('change', () => showFieldError('Gender', validateGender()));
});
Array.from(document.querySelectorAll('input[name="skills"]')).forEach(cb => {
  cb.addEventListener('change', () => showFieldError('Skills', validateSkills()));
});
document.getElementById('terms').addEventListener('change', () => showFieldError('Terms', validateTerms())); 