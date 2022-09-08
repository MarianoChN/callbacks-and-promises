
import { searchHeroe as searchHeroeCallBack } from './js/callbacks';
import { searchHeroe } from './js/promises';
import './styles.css';

const heroeId1 = 'laPulga';
const heroeId2 = 'juan2';


// searchHeroe( heroeId1 ,( err ,heroe1 ) =>{

//     if( err ){ return console.error( err ); 
//     searchHeroe( heroeId2 ,( err ,heroe2 ) =>{
//         if( err ){ return console.error( err ); 
//         console.log(`The heroes ${ heroe1.name } and ${ heroe2.name } are coming`)
//         //callbackhell ... 
//     } );
// } );

// searchHeroe( heroeId1 ).then( heroe1 => {
//      // console.log(`The heroe ${ heroe.name } is coming`)
//      searchHeroe( heroeId2 ).then( heroe2 => {
//          console.log(`The heroes ${ heroe1.name } and ${ heroe2.name } are coming`);

//     })
        //promisehell ...
// })

Promise.all( [ searchHeroe(heroeId1) ,searchHeroe(heroeId2) ] ).then( ([ heroe1 ,heroe2 ]) => {

    console.log(`The heroes ${ heroe1.name } and ${ heroe2.name } are coming`);

}).catch( err => {

    alert(err)

}).finally( () =>{

    console.log('the promise.all ended')
    
});



console.log('end of the program');