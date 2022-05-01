const scheme = (window.matchMedia('(prefers-color-scheme: dark)').matches)

let logo = document.getElementById('header-logo');

if(scheme == true) {
    logo.src='./images/Dollarwich - Dark-no-text.png';
}
