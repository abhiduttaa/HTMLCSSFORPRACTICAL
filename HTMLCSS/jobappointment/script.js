// Open the modal and set the job title
function scheduleAppointment(jobTitle) {
    const modal = document.getElementById('appointmentModal');
    const title = document.getElementById('jobTitle');
    title.innerText = jobTitle;
    modal.style.display = 'block';
  }
  
  // Close the modal
  function closeModal() {
    const modal = document.getElementById('appointmentModal');
    modal.style.display = 'none';
  }
  
  // Handle form submission
  document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
  
    alert(`Appointment confirmed for ${name} on ${date}. You will receive a confirmation email at ${email}.`);
  
    closeModal();
  });
  
  // Close modal if user clicks outside the modal content
  window.onclick = function(event) {
    const modal = document.getElementById('appointmentModal');
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
  