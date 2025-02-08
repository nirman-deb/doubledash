/* script.js */

document.addEventListener('DOMContentLoaded', function () {
    // Handle sign-up form submission with extra details
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        // Retrieve input values
        const fullName = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const farmName = document.getElementById('farmName').value;
        const farmSize = document.getElementById('farmSize').value;
        const crops = document.getElementById('crops').value;
        
        // Simulate registration process (backend integration can be added here)
        const signupMessage = document.getElementById('signupMessage');
        signupMessage.innerText = `Thank you, ${fullName}, for signing up! We will contact you at ${email} or ${phone}.`;
        signupForm.reset();
      });
    }
    
    // Handle location sharing for soil test order
    const locationBtn = document.getElementById('locationBtn');
    if (locationBtn) {
      locationBtn.addEventListener('click', function () {
        const locationStatus = document.getElementById('locationStatus');
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              locationStatus.innerHTML = `<p>Location captured: Latitude ${position.coords.latitude}, Longitude ${position.coords.longitude}. Your soil test order has been placed!</p>`;
            },
            function (error) {
              locationStatus.innerHTML = '<p>Unable to retrieve your location. Please try again.</p>';
            }
          );
        } else {
          locationStatus.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
        }
      });
    }
    
    // Handle sell produce form submission
    const sellForm = document.getElementById('sellForm');
    if (sellForm) {
      sellForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const produceName = document.getElementById('produceName').value;
        // Simulate produce listing (backend integration can be added here)
        const sellMessage = document.getElementById('sellMessage');
        sellMessage.innerText = `Your produce (${produceName}) has been listed for sale successfully!`;
        sellForm.reset();
      });
    }
    
    // Handle buy equipment button clicks
    const buyButtons = document.querySelectorAll('.buyBtn');
    buyButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        alert('Equipment added to your cart. Proceed to checkout.');
      });
    });
  
    // Handle Expert Consultancy button click
    const consultBtn = document.getElementById('consultBtn');
    if (consultBtn) {
      consultBtn.addEventListener('click', function () {
        alert('Our agricultural expert will contact you soon for consultancy.');
      });
    }
    
    // Handle Farming Loan button click
    const loanBtn = document.getElementById('loanBtn');
    if (loanBtn) {
      loanBtn.addEventListener('click', function () {
        alert('Loan application process initiated. Our partner will contact you soon.');
      });
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    // Existing functionalities for signup, location sharing, etc.
  
    // Handle sign-up form submission with extra details
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
      signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const fullName = document.getElementById('fullName').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const farmName = document.getElementById('farmName').value;
        const farmSize = document.getElementById('farmSize').value;
        const crops = document.getElementById('crops').value;
        const signupMessage = document.getElementById('signupMessage');
        signupMessage.innerText = `Thank you, ${fullName}, for signing up! We will contact you at ${email} or ${phone}.`;
        signupForm.reset();
      });
    }
    
    // Handle location sharing for soil test order
    const locationBtn = document.getElementById('locationBtn');
    if (locationBtn) {
      locationBtn.addEventListener('click', function () {
        const locationStatus = document.getElementById('locationStatus');
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            function (position) {
              locationStatus.innerHTML = `<p>Location captured: Latitude ${position.coords.latitude}, Longitude ${position.coords.longitude}. Your soil test order has been placed!</p>`;
            },
            function (error) {
              locationStatus.innerHTML = '<p>Unable to retrieve your location. Please try again.</p>';
            }
          );
        } else {
          locationStatus.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
        }
      });
    }
    
    // Handle sell produce form submission
    const sellForm = document.getElementById('sellForm');
    if (sellForm) {
      sellForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const produceName = document.getElementById('produceName').value;
        const sellMessage = document.getElementById('sellMessage');
        sellMessage.innerText = `Your produce (${produceName}) has been listed for sale successfully!`;
        sellForm.reset();
      });
    }
    
    // Handle buy equipment button clicks
    const buyButtons = document.querySelectorAll('.buyBtn');
    buyButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        alert('Equipment added to your cart. Proceed to checkout.');
      });
    });
  
    // Handle Rent equipment button clicks
    const rentButtons = document.querySelectorAll('.rentBtn');
    rentButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        alert('Rental equipment added. Please proceed to checkout for rental confirmation.');
      });
    });
  
    // Other existing event listeners (for consultancy, farming loan, etc.)
    const consultBtn = document.getElementById('consultBtn');
    if (consultBtn) {
      consultBtn.addEventListener('click', function () {
        alert('Our agricultural expert will contact you soon for consultancy.');
      });
    }
    
    const loanBtn = document.getElementById('loanBtn');
    if (loanBtn) {
      loanBtn.addEventListener('click', function () {
        alert('Loan application process initiated. Our partner will contact you soon.');
      });
    }
  });
    