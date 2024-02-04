import { useDispatch, useSelector } from "react-redux";
import { loadHomeData, selectHome } from "../features/homeSlice";
import { useEffect } from "react";
import "../styles/Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDown, faComment, faCircle } from '@fortawesome/free-solid-svg-icons'


const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadHomeData())
    }, [])

    const homeData = useSelector(selectHome);

    useEffect(() => {

        homeData.map((item) => {

            if (item.data.media) {
                // console.log(`
                // Title: ${item.data.title}
                // Author: ${item.data.subreddit_name_prefixed}
                // Opis: ${item.data.selftext}
                // Filmik: ${item.data.media.reddit_video.fallback_url}
                // Liczba polubień: ${item.data.ups}
                // Liczba Komentarzy: ${item.data.num_comments}
                // Link do postu: ${item.data.url}
                // `)
            } else {
                console.log(`
                Title: ${item.data.title}
                Author: ${item.data.subreddit_name_prefixed}
                Opis: ${item.data.selftext}
                Zdjęcie: ${item.data.url_overridden_by_dest}
                Liczba polubień: ${item.data.ups}
                Liczba Komentarzy: ${item.data.num_comments}
                Link do postu: ${item.data.url}
                `)
            }
        })

    }, [homeData])


    return (
        <div className="home">
            <div className="home__item">
                <div className="home__item-author">
                    <span>Author</span>
                    <FontAwesomeIcon className="icon"  style={{ color: '#cbd5f50e' }} icon={faCircle} />
                    <p>2 hr. ago</p>
                </div>
                <p className="home__item-title">Tytuł</p>
                <p className="home__item-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <div className="home__item-img">
                    <img src="https://i.redd.it/i3l7t5kgr5gc1.jpeg" />
                </div>
                <div className="home__item-interactions">
                    <div>
                        <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowsUpDown} />
                        2K
                    </div>
                    <div>
                        <FontAwesomeIcon style={{ color: 'white ' }} icon={faComment} />
                        952
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;



