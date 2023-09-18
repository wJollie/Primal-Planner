document.addEventListener('DOMContentLoaded', function () {
  const logoutButton = document.querySelector('#logout');

  logoutButton.addEventListener('click', async function () {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      window.location.replace('/');
    } else {
      alert('Failed to log out.');
    }
  });
});