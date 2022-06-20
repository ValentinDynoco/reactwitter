import {useState} from "react";
import {connect} from "react-redux";
import {ajouterTweet} from "../../../redux/actionCreators/actionCreator";

const ConnectedFormulaireNouveauTweet = ({ tweets, ajouterTweet }) => {
    // On initialise la variable du tweet et de son setter
    const [tweet, setTweet] = useState('');

    // Lorsque le champ textarea change, ça change la valeur tweet
    const handleChange = (evt) => {
        setTweet(evt.target.value)
    }

    // Quand on clique sur Tweeter, ça envoie à redux le nouveau tweet à ajouter
    const handleClick = () => {
        console.log('click')
        console.log(tweet)
        let newTweet = {
            id : tweets.length,
            commentaire : tweet,
            date : new Date(),
            likes : 0
        }
        ajouterTweet(newTweet)
        setTweet('');
    }

    return (
        <div className={"nouveau_tweet"}>
            <div>
                <textarea value={tweet} onChange={(e) => handleChange(e)} placeholder={'Quoi de neuf ?'} className={'textarea_new_tweet'}></textarea>
            </div>
            <div className={'btn_tweeter'}>
                <button disabled={ tweet === '' } onClick={() => handleClick()} type={'button'}>Tweeter</button>
            </div>
        </div>
    )
}

// On récupère la liste des tweets de redux
const mapStateToProps = (state) => {
    return {
        tweets : state.tweets
    }
}

// On récupère la fonction ajouterTweet de redux
const mapDispatchToProps = (dispatch) => {
    return {
        ajouterTweet : (tweet) => dispatch(ajouterTweet(tweet))
    }
}

// On connecte le composant avec nos props et fonctions
const FormulaireNouveauTweet = connect(mapStateToProps, mapDispatchToProps)(ConnectedFormulaireNouveauTweet)

export default FormulaireNouveauTweet;
