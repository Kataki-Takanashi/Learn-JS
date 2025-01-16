const body = document.body;

//body.append("Hello World!")

for (let i = 1; i < 6 ; i++) {
    const img = document.createElement('img');
    img.src = `https://picsum.photos/200/300?random=${i}`;
    body.appendChild(img);
}