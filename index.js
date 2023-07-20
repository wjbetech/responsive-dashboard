// handle sideLink selection

const sideLinks = document.querySelectorAll('.sidebar .side-menu-top li a');

function handleClick(item) {
    const li = item.parentElement;
    sideLinks.forEach(i => {
        i.parentElement.classList.remove('active');
    });
    li.classList.add('active');
}

sideLinks.forEach(item => {
    item.removeEventListener('click', handleClick); // Remove any existing event listeners
    item.addEventListener('click', () => handleClick(item));
});

// handle sideBar toggle

const menuBar = document.querySelector('.content nav .bx.bx-menu');
const sideBar = document.querySelector('.sidebar');

menuBar.addEventListener('click', () => {
    sideBar.classList.toggle('close');
});

// // handle {...}

// const searchButton = document.querySelector('.content nav form .form-input button');
// const searchButtonIcon = document.querySelector('.content nav form .form-input button .bx');
// const searchForm = document.querySelector('.content nav form');

// searchButton.addEventListener('click', function (event) {
//     if (window.innerWidth < 576) {
//         event.preventDefault;
//         searchForm.classList.toggle('show');
//         if (searchForm.classList.contains('show')) {
//             searchButtonIcon.classList.remove('bx-search', 'bx-x');
//         } else {
//             searchButtonIcon.classList.replace('bx-x', 'bx-search');
//         }
//     }
// })

