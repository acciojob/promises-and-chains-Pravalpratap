document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Retrieve the input values
    const age = parseInt(document.getElementById('age').value, 10);
    const name = document.getElementById('name').value.trim();

    // Validate the inputs
    if (isNaN(age) || name === '') {
        alert('Please fill in both fields.');
        return;
    }

    // Create a promise based on age
    const checkAge = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age > 18) {
                resolve(name);
            } else {
                reject(name);
            }
        }, 4000); // 4 seconds delay
    });

    // Handle promise resolution and rejection
    checkAge.then(name => {
        alert(`Welcome, ${name}. You can vote.`);
    }).catch(name => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
