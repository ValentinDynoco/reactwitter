export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next){
        return function(action){
            // do your stuff
            return next(action);
        }
    }
}
