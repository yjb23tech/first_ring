import { createRoot } from "react-dom/client"; 
import Card from "./components/Card.jsx"

const App = () => {
    return (
        <div>
            <h1>Ruthless.</h1>
            <Card 
                itunes_image_song_art = "track_9_song_art.png"
                itunes_song_name = "Dark Fantasy"
                itunes_album_name = "My Beautiful Dark Twisted Fantasy"
                itunes_artist_name = "Kanye West"
                itunes_genre_name = "Baroque Sophisticated Ignorance"
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)