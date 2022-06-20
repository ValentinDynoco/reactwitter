import {connect} from "react-redux";

const ConnectedListeTweets = ({ tweets }) => {
    // On trie la liste des tweets et crée une instance avec la nouvelle liste
    const sortedTweets = tweets.sort(function (a, b){
        return a.date < b.date;
    });

    const listeTweets = sortedTweets.map((item, index) => {
        let formatted_date = item.date.getDate() + "-" + (item.date.getMonth() + 1) + "-" + item.date.getFullYear()


        return (
            <li key={item.id}>
                <div className={'userName_tweet'}>
                    {item.userName} <span className={'user_at'}>@{item.userAt} . <span className={'date_tweet'}>{formatted_date}</span></span>
                </div>
                <div className={'commentaire_tweet'}>
                    {item.commentaire}
                </div>
                <div className={'footer_tweet'}>
                    <div>
                        commentaire 0
                    </div>
                    <div>
                        likes {item.likes}
                    </div>
                    <div>
                        retweet 0
                    </div>
                </div>
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
