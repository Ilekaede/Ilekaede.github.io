// const loading = document.querySelector('#loader');

// window.addEventListener('load', () => {
//     loading.classList.add('loaded');
// });

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (btn.textContent === 'ダークモードにする') {
        btn.textContent = 'ライトモードにする';
    }
    else {
        btn.textContent = 'ダークモードにする';
    }
});


const thumbnail = document.querySelectorAll('.img-container img');


thumbnail.forEach(thumbnail =>
{
    thumbnail.addEventListener('mouseover', () => {
        thumbnail.animate({opacity: [0, 1]}, 1000);
    });
});









