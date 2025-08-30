// Basic contact form validation and submission simulation
const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thanks for contacting me, ${name}! I will get back to you soon.`);
  form.reset();
});

<script defer data-domain="vaibhav123868.github.io/portfolio." src="https://plausible.io/js/script.outbound-links.pageview-props.revenue.tagged-events.js"></script>
<script>window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }</script>
