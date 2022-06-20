import './Sidebar.scss';

const Sidebar = () => {
    return (
        <div className={"sidebar"}>
            <div className={'img_sidebar'}>
                <img src="/assets/twitter.png" alt="logo twitter"/>
            </div>
            <div className={'liste_options'}>
                <div className={'accueil'}>
                    <div className={'img_accueil'}>
                        <img src="/assets/accueil.svg" alt="logo accueil"/>
                    </div>
                    <div className={'title_accueil'}>
                        Accueil
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
