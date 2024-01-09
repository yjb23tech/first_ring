import album_icon from "../public/images/album_icon.png"
import artist_icon from "../public/images/artist_icon.png"
import genre_icon from "../public/images/genre_icon.png"

const Card = (props) => {
    return (
        <div className="itunes-song-metadata">
            <img src={`images/${props.itunes_image_song_art}`} className="itunes-song-cover-art"/>
            <div>
                <h2>{props.itunes_song_name}</h2>
                <div className="itunes-song-details">
                    <div className="info-group">
                        <img src={album_icon} />
                        <p>{props.itunes_album_name}</p>
                    </div>
                    <div className="info-group">
                        <img src={artist_icon} />
                        <p>{props.itunes_artist_name}</p>
                    </div>
                    <div className="info-group">
                        <img src={genre_icon} />
                        <p>{props.itunes_genre_name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card; 