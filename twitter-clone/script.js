const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page');
const loginModal = document.querySelector('.login-modal');
const modalX = document.querySelector('.login-modal i');
const loginFormBtn = document.querySelector('.login-form-btn');

const goToLoginPage = () => {
  mainPage.style.display = 'none';
  loginPage.style.display = 'grid';
};

middleContent.addEventListener('click', (e) => {
  if (e.target.classList[1] === 'main-btn') {
    goToLoginPage();
  }
});

btnTop.addEventListener('click', (e) => {
  const inputUserInfo = document.querySelector('.user-info');
  const inputPasswod = document.querySelector('.password');

  if (inputUserInfo.value !== '' && inputPasswod.value !== '') {
    mainPage.style.display = 'none';
    newsFeedPage.style.display = 'block';
  } else {
    goToLoginPage();
    loginModal.style.display = 'block';
  }
});

modalX.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

loginFormBtn.addEventListener('click', (e) => {
  const loginUserInfo = document.querySelector('.login-user-info');
  const loginPassword = document.querySelector('.login-password');

  if (loginUserInfo.value !== '' && loginPassword !== '') {
    loginPage.style.display = 'none';
    newsFeedPage.style.display = 'block';
  } else {
    loginModal.style.display = 'block';
  }
});
