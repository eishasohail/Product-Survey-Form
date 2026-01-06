function submitFeedback() {
    // Get the values inside the function, when the button is clicked or Enter is pressed
    const username = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const job = document.getElementById('job').value;
    const designation = document.getElementById('designation').value;
    const productType = document.getElementById('productType').value;
    const feedback = document.getElementById('feedbackText').value;
    const experience = document.getElementById('userExperience').value; // Fixed typo here

    // Update the inner HTML of the elements with the user's input
    document.getElementById('userName').innerHTML = username;
    document.getElementById('userAge').innerHTML = age;
    document.getElementById('userEmail').innerHTML = email;
    document.getElementById('userJob').innerHTML = job;
    document.getElementById('userDesignation').innerHTML = designation;
    document.getElementById('userProductChoice').innerHTML = productType;
    document.getElementById('userFeedback').innerHTML = feedback;
    document.getElementById('userExperienceText').innerHTML = experience; // Added this for experience

    // Show a confirmation alert
    alert('Thank you for your valuable feedback');

    // Display the user info section
    document.getElementById('userInfo').style.display = 'block';
}

// Add event listener to handle the submit button click
const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;

// Add event listener for "Enter" key press to trigger submit
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
