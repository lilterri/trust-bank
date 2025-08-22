const deploy = document.getElementById('deploy');
const develop = document.getElementById('develop');


function greeCee() {
    document.getElementById('develop').style.display = "none";
    document.getElementById('deploy').style.display = "block";
    document.getElementById('demolish').style.display = "flex";
}

function secTion() {
    document.getElementById('develop').style.display = "block";
    document.getElementById('deploy').style.display = "none";
    document.getElementById('demolish').style.display = "none";
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

const dropdownMenu = document.getElementById('dropdownMenu');
const plusIcon = document.getElementById('plusIcon');
const minusIcon = document.getElementById('minusIcon');

function onPoint() {
  document.getElementById('dropdownMenu').style.display = "block";
  document.getElementById('plusIcon').style.display = "none";
  document.getElementById('minusIcon').style.display = "block";
}

    // Close dropdown when clicking outside
function outPoint() {
  document.getElementById('dropdownMenu').style.display = "none";
  document.getElementById('plusIcon').style.display = "block";
  document.getElementById('minusIcon').style.display = "none";
};