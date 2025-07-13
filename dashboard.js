const user = JSON.parse(localStorage.getItem('sessionUser'));
if (!user) {
  window.location.href = 'login.html';
}

document.getElementById('userName').textContent = user.name;
document.getElementById('userEmail').textContent = user.email;
document.getElementById('userPhone').textContent = user.phone;
document.getElementById('userGender').textContent = user.gender;
document.getElementById('userDob').textContent = user.dob;
document.getElementById('userAddress').textContent = user.address;
document.getElementById('userCity').textContent = user.city;
document.getElementById('userSkills').textContent = user.skills.join(', ');
if (user.profilePic) {
  document.getElementById('profilePic').src = user.profilePic;
} else {
  document.getElementById('profilePic').src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(user.name);
}

document.getElementById('logoutBtn').addEventListener('click', function() {
  localStorage.removeItem('sessionUser');
  window.location.href = 'login.html';
}); 