const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

ctx.fillStyle = 'black'; //Sección del torso
ctx.beginPath();
ctx.fillRect(133, 365, 133, 35); 
ctx.fillRect(148, 355, 103, 10);
ctx.fillRect(162, 345, 73, 10);

ctx.fillStyle = 'white';    //Sección del cuello
ctx.beginPath();
ctx.fillRect(172, 330, 53, 15);
ctx.fillRect(172, 352, 20, 10);
ctx.fillRect(183, 352, 9, 17);

ctx.fillRect(206, 352, 20, 10);
ctx.fillRect(206, 352, 9, 17);

ctx.fillStyle = '#957D4F';    //Sección del cuello 
ctx.beginPath();
ctx.fillRect(162, 320, 73, 10); // Sección cráneo
ctx.fillRect(148, 310, 103, 10);
ctx.fillRect(123, 300, 153, 10);
ctx.fillRect(103, 290, 193, 10);
ctx.fillRect(83, 250, 233, 40);

ctx.fillRect(102, 210, 205, 40);
ctx.fillRect(118, 185, 177, 25);
ctx.fillRect(130, 175, 152, 10);
ctx.fillRect(140, 165, 130, 10);

ctx.fillStyle = 'black'; //Sección cabello
ctx.beginPath();
ctx.fillRect(307, 205, 10, 45); //Sección cabello derecha
ctx.fillRect(295, 180, 10, 30);
ctx.fillRect(282, 170, 13, 15);
ctx.fillRect(275, 160, 10, 15);

ctx.fillRect(140, 150, 130, 15); //Sección cabello arriba
ctx.fillRect(140, 135, 115, 15);
ctx.fillRect(140, 120, 80, 15);

ctx.fillRect(92, 162, 10, 100);    //Sección cabello izquierda
ctx.fillRect(100, 185, 18, 25);
ctx.fillRect(100, 175, 30, 10);
ctx.fillRect(100, 162, 40, 13);

ctx.fillRect(296, 203, 21, 7);
ctx.fillRect(283, 178, 22, 8);
ctx.fillRect(270, 168, 25, 7);
ctx.fillRect(270, 160, 10, 15);

ctx.fillRect(242, 240, 23, 60); //Sección ojos
ctx.fillRect(138, 240, 23, 60); 

