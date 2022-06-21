// On créer la fonction d'ajouter un Tweet qu'on récupérer et appeler dans nos pages
export function ajouterTweet (payload) {
    return function(dispatch) {
        return fetch("/api/post_tweet", {
            method : "POST",
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(payload)
        })
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "POST_TWT", payload : payload });
            });
    };
}

export function getData() {
    return function(dispatch) {
        return fetch("/api/get_tweets")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: "GET_TWT", payload: json.tweets[0] });
            });
    };
}
