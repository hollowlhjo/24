function updateButtonClickCount() {
    let counter = localStorage.getItem('buttonClickCount') || 0;
    counter++;
    localStorage.setItem('buttonClickCount', counter);
    document.getElementById('localButton').innerText = 'Ця кнопка була натиснута: ' + counter + ' раз';
  }

  function updateSessionButtonClickCount() {
    let counter = sessionStorage.getItem('buttonClickCount') || 0;
    counter++;
    sessionStorage.setItem('buttonClickCount', counter);
    document.getElementById('sessionButton').innerText = 'Ця кнопка була натиснута: ' + counter + ' раз';
  }

  function clearStorage() {
    localStorage.removeItem('buttonClickCount');
    sessionStorage.removeItem('buttonClickCount');
    document.getElementById('localButton').innerText = 'Ця кнопка була натиснута: 0 раз';
    document.getElementById('sessionButton').innerText = 'Ця кнопка була натиснута: 0 раз';
  }
  let localCount = localStorage.getItem('buttonClickCount') || 0;
  let sessionCount = sessionStorage.getItem('buttonClickCount') || 0;

  document.getElementById('localButton').innerText = 'Ця кнопка була натиснута: ' + localCount + ' раз';
  document.getElementById('sessionButton').innerText = 'Ця кнопка була натиснута: ' + sessionCount + ' раз';
  function calculateAge() {
    let birthdate = getBirthdateFromCookie();

    if (birthdate === null) {
      birthdate = prompt('Введіть свою дату народження у форматі ДД-ММ-РРРР:');
      setBirthdateCookie(birthdate);
    }

    let today = new Date();
    let birthdateParts = birthdate.split('-');
    let birthdateObj = new Date(birthdateParts[2], birthdateParts[1] - 1, birthdateParts[0]);

    let age = today.getFullYear() - birthdateObj.getFullYear();
    let monthDiff = today.getMonth() - birthdateObj.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateObj.getDate())) {
      age--;
    }

    alert('Ваш вік: ' + age + ' років');
  }

  function getBirthdateFromCookie() {
    let name = 'birthdate=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let cookieParts = decodedCookie.split(';');

    for (let i = 0; i < cookieParts.length; i++) {
      let cookie = cookieParts[i];

      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }

      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }

    return null;
  }

  function setBirthdateCookie(birthdate) {
    var expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);

    document.cookie = 'birthdate=' + birthdate + ';expires=' + expires.toUTCString() + ';path=/';}