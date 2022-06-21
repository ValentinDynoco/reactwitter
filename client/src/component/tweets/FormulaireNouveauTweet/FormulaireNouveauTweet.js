import {useState} from "react";
import {connect} from "react-redux";
import {ajouterTweet} from "../../../redux/actionCreators/actionCreator";
import axios from "axios";

const ConnectedFormulaireNouveauTweet = ({ ajouterTweet }) => {
    // On initialise la variable du tweet et de son setter
    const [tweet, setTweet] = useState('');

    // Lorsque le champ textarea change, ça change la valeur tweet
    const handleChange = (evt) => {
        setTweet(evt.target.value)
    }

    // Quand on clique sur Tweeter, ça envoie à redux le nouveau tweet à ajouter
    const handleClick = () => {
        // https://randomuser.me/api/
        axios.get('https://randomuser.me/api/').then(response => {
            let newTweet = {
                userName : response.data.results[0].name.first + ' ' + response.data.results[0].name.last,
                userAt : (response.data.results[0].name.first + response.data.results[0].name.last).toLowerCase(),
                commentaire : tweet,
                date : new Date(),
                likes : 0
            }
            ajouterTweet(newTweet)
            setTweet('');
        }).catch(error => console.log(error))
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

// On connecte le composant avec nos props et fonctions
const FormulaireNouveauTweet = connect(null, { ajouterTweet })(ConnectedFormulaireNouveauTweet)

export default FormulaireNouveauTweet;
