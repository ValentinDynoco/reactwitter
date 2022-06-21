import {connect} from "react-redux";
import {getData} from "../../../redux/actionCreators/actionCreator";
import {useEffect} from "react";

const ConnectedListeTweets = ({ tweets, getData }) => {
    useEffect(() => {
        getData();
    }, [getData]);

    // On trie la liste des tweets et crée une instance avec la nouvelle liste
    const sortedTweets = tweets.sort(function (a, b){
        return a.date < b.date;
    });


    const listeTweets = sortedTweets.map((item, index) => {
        const dateWithFormat = new Date(item.date);

        let formatted_date = dateWithFormat.getDate() + "-" + (dateWithFormat.getMonth() + 1) + "-" + dateWithFormat.getFullYear()

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
const ListeTweets = connect(mapStateToProps, { getData })(ConnectedListeTweets)

export default ListeTweets;
