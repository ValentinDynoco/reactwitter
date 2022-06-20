import {connect} from "react-redux";

const ConnectedListeTweets = ({ tweets }) => {
    // On trie la liste des tweets et crée une instance avec la nouvelle liste
    const sortedTweets = tweets.sort(function (a, b){
        return a.date < b.date;
    });

    const listeTweets = sortedTweets.map((item, index) => {
        return (
            <li key={item.id}>
                {item.commentaire}
            </li>
        )
    })


    return (
        <div className={"liste_tweets"}>
            <ul>
                {listeTweets}
            </ul>
        </div>
    )
}

// On récupère la liste des tweets de redux
const mapStateToProps = (state) => {
    return {
        tweets : state.tweets
    }
}

// On connecte le composant avec nos props et fonctions
const ListeTweets = connect(mapStateToProps)(ConnectedListeTweets)

export default ListeTweets;
