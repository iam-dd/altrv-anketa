// const message = document.querySelector('.message');
// const namePatient = document.getElementById('input__name').value;

// console.log(namePatient);

// message.textContent = namePatient;

const fieldsetsWomen = Array.from(document.querySelectorAll('.form__block_gender_women'));
const fieldsetsMen = Array.from(document.querySelectorAll('.form__block_gender_men'));
const radioWomen = document.getElementById('button_women');
const radioMen = document.getElementById('button_men');
const radioBoth = document.getElementById('button_both');

function showForm(fieldset) {
  fieldset.forEach((element) => {
    element.classList.add('form__block_show');
  });
};

function hideForm(fieldsets) {
  fieldsets.forEach((element) => {
    element.classList.remove('form__block_show');
  });
};


radioWomen.addEventListener('click', (evt) => {
  showForm(fieldsetsWomen);
  hideForm(fieldsetsMen);
});

radioMen.addEventListener('click', (evt) => {
  showForm(fieldsetsMen);
  hideForm(fieldsetsWomen);
});

radioBoth.addEventListener('click', (evt) => {
  showForm(fieldsetsMen);
  showForm(fieldsetsWomen);
});