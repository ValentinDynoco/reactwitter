// On créer la fonction d'ajouter un Tweet qu'on récupérer et appeler dans nos pages
export function ajouterTweet (payload) {
    return {
        type : 'ADD_TWT',
        payload
    }
}
