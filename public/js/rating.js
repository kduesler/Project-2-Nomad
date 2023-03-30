const city = document.querySelector('#city-entry').value.trim();
const comment = document.querySelector('#entry-input').value.trim();


const submitcity = async (event) => {
    event.preventDefault();

if ( city && comment) {
    const response = await fetch('/api/entry', {
      method: 'POST',
      body: JSON.stringify({ city, comment }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('.cityform')
document.addEventListener('submit', submitcity);

