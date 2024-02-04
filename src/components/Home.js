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

    return (
        <div className="home">
            {homeData && homeData.map((item) => {
                if (item.data.media && item.data.is_reddit_media_domain) {
                    return (
                        <div className="home__item">
                            <div className="home__item-author">
                                <span>{item.data.subreddit_name_prefixed}</span>
                                <FontAwesomeIcon className="icon" style={{ color: '#cbd5f50e' }} icon={faCircle} />
                                <p>2 hr. ago</p>
                            </div>
                            <p className="home__item-title">{item.data.title}</p>
                            <p className="home__item-description">{item.data.selftext}</p>
                            <div className="home__item-media">
                                <video controls autoPlay loop >
                                    <source src={item.data.media.reddit_video.fallback_url} type="video/mp4" />
                                </video>
                            </div>
                            <div className="home__item-interactions">
                                <div>
                                    <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowsUpDown} />
                                    {item.data.ups}
                                </div>
                                <div>
                                    <FontAwesomeIcon style={{ color: 'white ' }} icon={faComment} />
                                    {item.data.num_comments}
                                </div>
                            </div>
                        </div>
                    )
                } else if (item.data.url_overridden_by_dest && item.data.is_reddit_media_domain) {
                    return (
                        <div className="home__item">
                            <div className="home__item-author">
                                <span>{item.data.subreddit_name_prefixed}</span>
                                <FontAwesomeIcon className="icon" style={{ color: '#cbd5f50e' }} icon={faCircle} />
                                <p>2 hr. ago</p>
                            </div>
                            <p className="home__item-title">{item.data.title}</p>
                            <p className="home__item-description">{item.data.selftext}</p>
                            <div className="home__item-media">
                                <img src={item.data.url_overridden_by_dest} />
                            </div>
                            <div className="home__item-interactions">
                                <div>
                                    <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowsUpDown} />
                                    {item.data.ups}
                                </div>
                                <div>
                                    <FontAwesomeIcon style={{ color: 'white ' }} icon={faComment} />
                                    {item.data.num_comments}
                                </div>
                            </div>
                        </div>
                    )
                } else {
                    return (
                        <div className="home__item">
                            <div className="home__item-author">
                                <span>{item.data.subreddit_name_prefixed}</span>
                                <FontAwesomeIcon className="icon" style={{ color: '#cbd5f50e' }} icon={faCircle} />
                                <p>2 hr. ago</p>
                            </div>
                            <p className="home__item-title">{item.data.title}</p>
                            <p className="home__item-description">{item.data.selftext}</p>
                            <div className="home__item-interactions">
                                <div>
                                    <FontAwesomeIcon style={{ color: 'white' }} icon={faArrowsUpDown} />
                                    {item.data.ups}
                                </div>
                                <div>
                                    <FontAwesomeIcon style={{ color: 'white ' }} icon={faComment} />
                                    {item.data.num_comments}
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Home;


