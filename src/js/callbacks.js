
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

export const searchHeroe = ( id ,callback ) => {

    const heroe = heroes[id];

    if ( heroe ){
        callback( null ,heroe )
    }
    else{
        //error
        callback(`It doesnt exist a heroe with the id ${ id }`);
    }

    // callback( heroe );

};