import FormulaireNouveauTweet from "./FormulaireNouveauTweet/FormulaireNouveauTweet";
import ListeTweets from "./ListeTweets/ListeTweets";
import './Tweets.scss'

const Tweets = () => {
    return (
        <div className={"tweets"}>
            <div className={'title_accueil'}>
                Accueil
            </div>
            <FormulaireNouveauTweet />
            <ListeTweets />
        </div>
    )
}

export default Tweets;
