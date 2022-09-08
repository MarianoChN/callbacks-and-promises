
import { searchHeroe ,searchHeroeAsync } from './js/promises';

// slowPromise.then( message => console.log ( message ) ); 
// midPromise.then(console.log);
// quickPromise.then(console.log);

// Promise.race( [ slowPromise ,midPromise ,quickPromise ] )
//     .then( console.log )
//     .catch( console.warn );

searchHeroe( 'juan2' ).then( console.log ).catch( console.warn ); 

searchHeroeAsync( 'ironMan2' ).then( heroe => console.log( heroe ) ).catch( console.warn );



