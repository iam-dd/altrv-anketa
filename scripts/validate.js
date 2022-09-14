const settings = {
  formSelector: '.form',
  inputSelector: '.input',
  submitButtonSelector: '.button_type_submit',
  inactiveButtonClass: 'button_state_disable',
  inputErrorClass: 'input_type_error',
  errorClass: 'input_error_visible'
};


// Валидируем инпуты

function validationInput(form, input, settings) {
  if (!input.validity.valid) {
    showError(form, input, settings);
  }
  else {
    hideError(form, input, settings);
  }
};

//Показываем ошибку

function showError(form, input, settings) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.add(settings.inputErrorClass);
  error.textContent = input.validationMessage;
  error.classList.add(settings.errorClass);
};

//Скрываем ошибку

function hideError(form, input, settings) {
  const error = form.querySelector(`.${input.id}-error`);
  input.classList.remove(settings.inputErrorClass);
  error.textContent = '';
  error.classList.remove(settings.errorClass);
};

//Функция валидации

const enableValidation = (settings) => {
  const forms = Array.from(document.querySelectorAll(settings.formSelector));
  forms.forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, settings);
  });

};

//Устанавливаем слушатель на инпуты

const setEventListeners = (form, settings) => {
  const inputs = Array.from(form.querySelectorAll(settings.inputSelector));
  const button = form.querySelector(settings.submitButtonSelector);
  toggleButtonState(inputs, button);
  inputs.forEach((input) => {
    input.addEventListener('input', () => {
      validationInput(form, input, settings);
      toggleButtonState(inputs, button);
    });

  });
};

// Если поле не валидное

const hasInvalidInput = (inputs) => {
  return inputs.some((input) => {
    return !input.validity.valid;
  });
};

//меняем состояние кнопки submit

const toggleButtonState = (inputs, button) => {
  if (hasInvalidInput(inputs)) {
    button.classList.add(settings.inactiveButtonClass);
    button.disabled = true;
    button.value = 'Disabled';
  }
  else {
    button.classList.remove(settings.inactiveButtonClass);
    button.disabled = false;
    button.value = 'Enabled';
  }
};



enableValidation(settings);




