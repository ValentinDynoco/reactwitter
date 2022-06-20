const initialState = {
    tweets : [], // Les différents tweets qui seront ajoutés
    utilisateurs : [],
    tendances : ['Paris', 'Président', 'Réchauffement Climatique', 'Pokémon'] // Les tendances qui apparaitront dans la colonne
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        // Le cas où on ajoute un Tweet
        case 'ADD_TWT' : // {id : 1, libelle : 'text', date : 00/00/00, likes : 0}
            return Object.assign({}, state, {
                tweets : state.tweets.concat(action.payload)
            })

        // Le cas où on le supprime
        case 'RMV_TWT' : // 18

            break

        default :
            return state
    }
    return state
}

export default rootReducer
