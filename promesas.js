const datos = [1,2,3,4,5];

const getDataPromise = new Promise(
    (resolve, reject) => {
        setTimeout(() => {
            //resolve(datos);
            reject('No se pudo :/')
        }, 3000)
    }
)

//console.log(getDataPromise);

console.log('Inicia promesa');

getDataPromise.then((result) => {
    console.log(result);
    console.log('Termina promesa')
}).catch(error => console.log(error));