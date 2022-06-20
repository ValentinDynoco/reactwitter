import {connect} from "react-redux";
import './Tendances.scss';

const TendancesConnected = ({ tendances }) => {
    // On récupère un chiffre aléatoire pour le nombre de tweets
    const getRandomNumber = () =>{
        return Math.floor(Math.random() * 100000);
    }

    // On met en place la liste des tendances
    const listeTendances = tendances.map((item, index) => {
        return (
            <li key={index}>
                <div className={'name_tendance'}>
                    {item}
                </div>
                <div className={'nb_tweets'}>
                    {getRandomNumber()} k Tweets
                </div>
            </li>
        )
    })

    return (
        <div className={"tendances"}>
            <div className={'title_tendances'}>
                Tendances pour vous
            </div>
            <ul>
                {listeTendances}
            </ul>
        </div>
    )
}

// On récupère la props tendances de redux
const mapStateToProps = (state) => {
    return {
        tendances : state.tendances
    }
}

// On connecte les props qu'on a récupéré à notre interface
const Tendances = connect(mapStateToProps)(TendancesConnected)

export default Tendances;
