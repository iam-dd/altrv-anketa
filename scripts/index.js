// const message = document.querySelector('.message');
// const namePatient = document.getElementById('input__name').value;

// console.log(namePatient);

// message.textContent = namePatient;

const fieldsetsWomen = Array.from(document.querySelectorAll('.form__block_gender_women'));
const radioWomen = document.querySelector('.select__image');


radioWomen.addEventListener('click', (evt) => {
     fieldsetsWomen.forEach((element) => {
      element.classList.add('form__block_show');

    });

 // }

});
