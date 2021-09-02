const imageList = [{
        preview: 'images/ferrari_preview.jpg',
        source: 'images/ferrari.jpg',
        alt: 'Ferrari'
    },
    {
        preview: 'images/hundai_preview.jpg',
        source: 'images/hundai.jpg',
        alt: 'Hundai'
    },
    {
        preview: 'images/mustang_preview.jpg',
        source: 'images/mustang.jpg',
        alt: 'Mustang'
    },
    {
        preview: 'images/tesla_preview.jpg',
        source: 'images/tesla.jpg',
        alt: 'tesla'
    },
    {
        preview: 'images/honda_preview.jpg',
        source: 'images/honda.jpg',
        alt: 'honda'
    },
    {
        preview: 'images/landrover_preview.jpg',
        source: 'images/landrover.jpg',
        alt: 'Landrover'
    },
    {
        preview: 'images/bugatti_preview.jpg',
        source: 'images/bugatti.jpg',
        alt: 'Bugatti'
    },
    {
        preview: 'images/mercedes_preview.jpg',
        source: 'images/mercedes.jpg',
        alt: 'Mercedes'
    },
    {
        preview: 'images/volvo_preview.jpg',
        source: 'images/volvo.jpg',
        alt: 'Volvo'
    },
    {
        preview: 'images/suzuki_preview.jpg',
        source: 'images/suzuki.jpg',
        alt: 'Suzuki'
    },
    {
        preview: 'images/kia_preview.jpg',
        source: 'images/kia.jpg',
        alt: 'Kia'
    },
    {
        preview: 'images/cherry_preview.jpg',
        source: 'images/cherry.jpg',
        alt: 'Cherry'
    },
    {
        preview: 'images/camaro_preview.jpg',
        source: 'images/camaro.jpg',
        alt: 'Camaro'
    }
];


let buttonArrowDown = document.querySelector('.arrow_down');
let buttonArrowUp = document.querySelector('.arrow_up');
let list = document.querySelector('.list');

let input = document.querySelector('.input');
let wrapper = document.querySelector('.wrapper');
let inputInner = document.querySelector('.input_inner');





for (let i = 0; i < imageList.length; i++) {
    const img = `<div class="car_field">
    <img src='${imageList[i].preview}' alt='${imageList[i].alt}' data-source='${imageList[i].source}' data-i='${i}' class="img_size_cars">
    <span>${imageList[i].alt}</span>
</div>`;
    list.innerHTML += img; 
}

let carFields = document.querySelectorAll('.car_field');
for (let i = 0; i < carFields.length; i++) {
    carFields[i].addEventListener('click', function (event) {
        inputInner.innerHTML = carFields[i].innerHTML;
        wrapper.classList.toggle('is-opened');
        console.log(carFields[i], event.target);
    })
}
buttonArrowDown.addEventListener('click', function () {
    wrapper.classList.toggle('is-opened');
})