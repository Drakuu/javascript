const apiUrl = 'https://jsonplaceholder.typicode.com/users';

fetch(apiUrl)
    .then(response => response.json())
    .then(users => {
        const dataContainer = document.getElementById('data-container');
        let html = '<h2>Anonymous user:</h2>';
        
        users.forEach(user => {
            html += `
                <div style="border: 1px solid #ccc; margin: 10px; padding: 10px;">
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <img src="https://source.unsplash.com/100x100/?${user.username}" alt="https://source.unsplash.com/random/100x100">
                </div>
            `;
        });

        dataContainer.innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });