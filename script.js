// const deploy = document.getElementById('deploy');
// const develop = document.getElementById('develop');
// const demolish = document.getElementById('demolish');

// function greeCee() {
//   develop.classList.add('hidden');
//   deploy.classList.remove('hidden');
//   demolish.classList.remove('hidden'); // shows menu
// }

// function secTion() {
//   develop.classList.remove('hidden');
//   deploy.classList.add('hidden');
//   demolish.classList.add('hidden'); // hides menu
// }


const develop = document.getElementById('develop');
const deploy = document.getElementById('deploy');
const demolish = document.getElementById('demolish');

window.greeCee = function() {
  develop.classList.add('hidden');    // hide hamburger
  deploy.classList.remove('hidden');  // show X

  // Animate menu open
  demolish.style.maxHeight = demolish.scrollHeight + "px";
  // prevent background scrolling while menu is open
  document.body.classList.add('overflow-hidden');
};

window.secTion = function() {
  develop.classList.remove('hidden');  // show hamburger
  deploy.classList.add('hidden');      // hide X

  // Animate menu close
  demolish.style.maxHeight = "0";
  // restore body scrolling
  document.body.classList.remove('overflow-hidden');
};


    // Ensure only one accordion item is open at a time
    const checkboxes = document.querySelectorAll('.accordion input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', () => {
        checkboxes.forEach((cb) => {
          if (cb !== checkbox) cb.checked = false;
          // Update ARIA attributes
          const label = cb.nextElementSibling;
          label.setAttribute('aria-expanded', cb.checked ? 'true' : 'false');
        });
      });
    });

// Dropdown / Personal submenu handling
const dropdownMenu = document.getElementById('dropdownMenu');
const plusIcon = document.getElementById('plusIcon');
const minusIcon = document.getElementById('minusIcon');
const personalToggle = document.getElementById('personalToggle');

// Show submenu
window.onPoint = function() {
  if (!dropdownMenu) return;
  dropdownMenu.classList.remove('hidden');
  if (plusIcon) plusIcon.classList.add('hidden');
  if (minusIcon) minusIcon.classList.remove('hidden');
  if (personalToggle) personalToggle.setAttribute('aria-expanded', 'true');
};

// Hide submenu
window.outPoint = function() {
  if (!dropdownMenu) return;
  dropdownMenu.classList.add('hidden');
  if (plusIcon) plusIcon.classList.remove('hidden');
  if (minusIcon) minusIcon.classList.add('hidden');
  if (personalToggle) personalToggle.setAttribute('aria-expanded', 'false');
};

// Toggle submenu (used by the button)
window.togglePersonal = function() {
  if (!dropdownMenu) return;
  if (dropdownMenu.classList.contains('hidden')) {
    onPoint();
  } else {
    outPoint();
  }
};

// Close the submenu when clicking outside of it
document.addEventListener('click', function(e) {
  const target = e.target;
  if (!dropdownMenu || !personalToggle) return;
  if (!personalToggle.contains(target) && !dropdownMenu.contains(target)) {
    outPoint();
  }
});


