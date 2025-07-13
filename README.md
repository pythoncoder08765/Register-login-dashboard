# Registration, Login & Dashboard Mini Web App

A modern, responsive mini web application built with HTML, CSS, and JavaScript. It features registration, login, and dashboard pages with full client-side validation and localStorage-based authentication. No backend or frameworks required.

## Features
- **Registration**: 10+ fields, profile picture upload, strong validations
- **Login**: Email/password authentication, error feedback
- **Dashboard**: Displays user info, profile picture, logout, session restriction
- **Modern UI**: Responsive, animated, clean design
- **localStorage**: All data stored in browser
- **Session-based access**: Dashboard restricted to logged-in users
- **Show/hide password**: Eye icon toggle
- **Error animations**: Shake effect for invalid input

## Technologies Used
- HTML5
- CSS3 (Flexbox, gradients, responsive design)
- JavaScript (ES6+)
- localStorage API
- Google Fonts (Roboto)
- Font Awesome (icons)

## Validations
- **Full Name**: Required, min 3 chars, no same char 3 times, no digits
- **Email**: Required, valid format (Regex)
- **Password**: Required, min 8 chars, upper, lower, number, special char
- **Confirm Password**: Must match password
- **Phone Number**: Required, exactly 10 digits
- **Gender**: Required
- **Date of Birth**: Must be 18+ years
- **Address**: Required, min 10 chars
- **City**: Required
- **Skills Known**: At least one selected
- **Accept Terms**: Must be checked
- **Profile Picture**: Optional, stored as base64

## How to Run Locally
1. Clone or download this repository.
2. Open `register.html` in your browser to register a new user.
3. Use `login.html` to log in.
4. After login, you'll be redirected to `dashboard.html`.

## How to Deploy on GitHub Pages
1. Create a new public GitHub repository (e.g., `registration-login-dashboard`).
2. Push all project files to the repository.
3. Go to **Settings > Pages** in your repo.
4. Select the `main` branch and `/ (root)` folder.
5. Save and get your live URL (e.g., `https://username.github.io/registration-login-dashboard/register.html`).

## Demo
- **GitHub Pages Live Link**: _[Add your link here after deployment]_ 
- **GitHub Repository**:https://github.com/pythoncoder08765/Register-login-dashboard 

---

**Enjoy your modern, secure, and beautiful registration/login/dashboard app!** 
