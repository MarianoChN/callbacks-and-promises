

import { getHeroesArr, getHeroesAwait, heroeIfAwait, heroesLoop } from "./js/awaits";

console.time('await');

// getHeroesAwait('juan')
//     .then( heroe => {
//         console.log( heroe )

//         console.timeEnd( 'await' )
//     })
//     .catch( console.warn );

heroesLoop();

heroeIfAwait('juan');


