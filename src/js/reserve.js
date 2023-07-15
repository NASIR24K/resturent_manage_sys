
  $(document).ready(function() {
    $('#date').datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 0
      });
  
      // Initialize Timepicker
      $('#time').selectmenu();
    $('#reservation-form').submit(function(e) {
      e.preventDefault();
      
      // Perform form validation here
      // You can use jQuery validation plugins or custom JavaScript code
      
      // Example of simple validation
      var name = $('#name').val();
      var email = $('#email').val();
      var phone = $('#phone').val();
      var date = $('#date').val();
      var time = $('#time').val();
      
      if (name.trim() === '' || email.trim() === '' || phone.trim() === '' || date.trim() === '' || time.trim() === '') {
        alert('Please fill out all the required fields.');
        return false;
      }
      
      // Process the reservation form submission here
      
      // Optionally, you can reset the form after successful submission
      // $('#reservation-form')[0].reset();
    });
  });
