
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const clearBtn = document.getElementById('clearBtn');

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();

      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const phoneError = document.getElementById('phoneError');
      

      // Clear previous error messages
      nameError.textContent = '';
      emailError.textContent = '';
      phoneError.textContent = '';

      let isValid = true;

      // Name validation
      if (name === '') {
        nameError.textContent = 'Name is required.';
        isValid = false;
      }

      // Email validation
      if (email === '') {
        emailError.textContent = 'Email is required.';
        isValid = false;
      } else if (!email.endsWith('@gmail.com')) {
        emailError.textContent = 'Email must end with @gmail.com';
        isValid = false;
      }

      // Phone validation (optional, but must be 10 digits if filled)
      if (phone !== '') {
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phone)) {
          phoneError.textContent = 'Phone number must be 10 digits.';
          isValid = false;
        }
      }

      if (isValid) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Cannot submit. Please check your inputs.");
      }
    });

    clearBtn.addEventListener('click', function () {
      form.reset(); 
      document.getElementById('nameError').textContent = '';
      document.getElementById('emailError').textContent = '';
      document.getElementById('messageError').textContent = '';
    });
  });
