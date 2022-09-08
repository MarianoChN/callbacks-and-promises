import { searchHeroe, searchHeroeAsync } from "./promises";


const heroesIds = [ 'juan' ,'ironMan' ,'laPulga' ];
const heroesPromises = heroesIds.map( searchHeroe );


export const getHeroesArr = async () => {

                 
    return await Promise.all( heroesIds.map( searchHeroe ));

    // const heroesArr = [];

    // for( const id of heroesIds ){
    //     heroesArr.push( searchHeroe( id ));
    // }

    // return await Promise.all( heroesArr ); //no usar awaits dentro de loops . for
}

export const getHeroesAwait = async ( id ) => {

    try {

        const heroe = await searchHeroeAsync ( id );
        return heroe;
    }
    catch( err ){
        console.log( 'catch!!');

        return {
            name: 'Nameless' ,
            power: 'Powerless'
        } //si el await falla ,el try y catch puede resolverlo quizas
    }

}



export const heroesLoop = async () => {

    console.time('Heroesloop');

    // const heroes = await Promise.all( heroesPromises );
    // heroes.forEach( console.log );

    for await ( const heroe of heroesPromises ){
        console.log ( heroe );
    }

    // heroesPromises.forEach( async(p) => console.log( await p ));//no funciona bien

    console.timeEnd('Heroesloop');

}


export const heroeIfAwait = async ( id ) => {

    if ( (await searchHeroeAsync( id )).name === 'Tony'){
        console.log('alta facha');
    }
    else{
        console.log( 'cero culo bro' );
    }

}
