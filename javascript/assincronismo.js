function fetchData() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Dados obtidos');
        }, 1000);
    });
}

// Utilizando promisses
//fetchData()
//    .then(data => console.log(data))
//    .catch(error => console.error(error));


// Utilizando async await
async function getData() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getData();