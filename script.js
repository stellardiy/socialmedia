document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('download-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const url = document.getElementById('url-input').value;
        alert('You entered: ' + url + '\nDownload functionality coming soon!');
    });
});
