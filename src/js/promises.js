

const heroes = {
    juan: {
        name:'Juan' ,
        power:'Amigo de los gallos y las gallinas'
    } ,
    ironMan: {
        name:'Tony',
        power:'super riqueza'
    } ,
    laPulga:{
        name:'La Pulga',
        power:'Ser la pulga'
    }
}


export const searchHeroe = ( id ) => {

    const heroe = heroes[id];

    return new Promise( ( resolve ,reject ) =>{
        
        if( heroe ){
            setTimeout(()=> resolve( heroe ) ,1000);
        }
        else{
            reject( `It doesnt exist a heroe with the id ${ id }` );
        }

    });
}

export const searchHeroeAsync = async ( id ) => {

    const heroe = heroes[id];
        
        if( heroe ){
            return heroe;
        }
        else{
            throw `It doesnt exist a heroe with the id ${ id }`; //throw error(`Itdoesnt exist a heroe with the id ${ id }`); si no sabemos el error especifico
        }
}


const slowPromise = new Promise(( resolve ,reject ) => {

    setTimeout(() => resolve( 'Promesa lenta' ), 2000);

});

const midPromise = new Promise(( resolve ,reject ) => {

    setTimeout(() => resolve( 'Promesa media' ), 1500);

});

const quickPromise = new Promise(( resolve ,reject ) => {

    setTimeout(() => resolve( 'Promesa rapida' ), 1000);

});


export {
    slowPromise ,
    midPromise ,
    quickPromise
}