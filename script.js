document.getElementById('start-automation-btn').addEventListener('click', () => {
    fetch('http://localhost:4000/start-automation')
        .then(response => response.text())
        .then(data => {
            console.log(data);
            alert('Automation started!');
        })
        .catch(error => console.error('Error:', error));
});
