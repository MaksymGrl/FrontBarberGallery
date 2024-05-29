const images = [
    {
        preview: './photos/barber1.png',
        original: './photos/barber1.png',
        description: 'Barber Shop 1',
    },
    {
        preview: './photos/barber2.jpg',
        original: './photos/barber2.jpg',
        description: 'Barber Shop 2',
    },
    {
        preview: './photos/barber3.jpeg',
        original: './photos/barber3.jpeg',
        description: 'Barber Shop 3',
    },
    {
        preview: './photos/barber4.jpeg',
        original: './photos/barber4.jpeg',
        description: 'Barber Shop 4',
    },
    {
        preview: './photos/barber5.jpeg',
        original: './photos/barber5.jpeg',
        description: 'Barber Shop 5',
    },
    {
        preview: './photos/barber6.jpeg',
        original: './photos/barber6.jpeg',
        description: 'Barber Shop 6',
    },
    {
        preview: './photos/barber7.jpeg',
        original: './photos/barber7.jpeg',
        description: 'Barber Shop 7',
    },
    {
        preview: './photos/barber8.jpeg',
        original: './photos/barber8.jpeg',
        description: 'Barber Shop 8',
    },
    {
        preview: './photos/barber9.jpeg',
        original: './photos/barber9.jpeg',
        description: 'Barber Shop 9',
    },
    {
        preview: './photos/barber10.jpg',
        original: './photos/barber10.jpg',
        description: 'Barber Shop 10',
    },
    {
        preview: './photos/barber11.jpg',
        original: './photos/barber11.jpg',
        description: 'Barber Shop 11',
    },
    {
        preview: './photos/barber12.jpeg',
        original: './photos/barber12.jpeg',
        description: 'Barber Shop 12',
    }
];

const gallery = document.querySelector('.gallery');

const galleryItems = images.map(({ preview, original, description }) => {
    return `
        <li>
            <img src="${preview}" data-source="${original}" alt="${description}" width="360" height="auto">
        </li>
    `;
}).join('');

gallery.innerHTML = galleryItems;

gallery.addEventListener('click', event => {
    event.preventDefault();
    const { target } = event;
    if (target.nodeName !== 'IMG') return;

    const source = target.dataset.source;
    console.log(source); 

    const instance = basicLightbox.create(`
        <img src="${source}" width="800" height="600" alt="${target.alt}" style="width: 800px; height: 600px; object-fit: cover;">
    `);

    instance.show();
});