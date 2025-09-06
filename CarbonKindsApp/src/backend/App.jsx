import { useState, useEffect } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db, auth } from "./config/firebase";
import { 
    collection, 
    getDocs, 
    doc, 
    addDoc, 
    updateDoc, 
    deleteDoc 
} from "firebase/firestore";

function App() {
    const [movieList, setMovieList] = useState([]);

    // States for creating data
    const [movieTitle, setMovieTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState(0);
    const [isGood, setIsGood] = useState(false);

    // State for updating a movie's title
    const [updatedTitle, setUpdatedTitle] = useState("");

    const movieListCollectionRef = collection(db, "movies");

    const getMovieList = async () => {
        try {
            const data = await getDocs(movieListCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setMovieList(filteredData);
        } catch (err) {
            console.error("Error fetching movie list: ", err);
        }
    };

    useEffect(() => {
        getMovieList();
    }, []);

    const addDataToDb = async () => {
        try {
            await addDoc(movieListCollectionRef, {
                title: movieTitle,
                releaseDate: Number(releaseDate),
                isGood: isGood,
                userId: auth?.currentUser?.uid,
            });
            // Re-fetch data to update the UI
            getMovieList();
        } catch (err) {
            console.error("Error adding data: ", err);
        }
    };

    const updateTitle = async (id) => {
        try {
            const movieDoc = doc(db, "movies", id);
            await updateDoc(movieDoc, { title: updatedTitle });
            // Re-fetch data to update the UI
            getMovieList();
        } catch (err) {
            console.error("Error updating title: ", err);
        }
    };

    const deleteElement = async (id) => {
        try {
            const movieDoc = doc(db, "movies", id);
            await deleteDoc(movieDoc); // Await is crucial here
            // Re-fetch data to update the UI
            getMovieList();
        } catch (err) {
            console.error("Error deleting document: ", err);
        }
    };

    return (
        <div>
            <Auth />
            {/* Creating data in the database */}
            <div>
                <h1>Create data for database</h1>
                <input 
                    type="text" 
                    placeholder="Title of a movie" 
                    onChange={(e) => setMovieTitle(e.target.value)}
                />
                <input 
                    type="number" 
                    placeholder="Release date" 
                    onChange={(e) => setReleaseDate(Number(e.target.value))}
                />
                <input 
                    type="checkbox" 
                    id="isGood" 
                    onChange={(e) => setIsGood(e.target.checked)}
                />
                <label htmlFor="isGood">Is this movie good?</label>
                <button onClick={addDataToDb}>Add to db</button>
            </div>
            
            {/* Reading and displaying data from the database */}
            <div>
                {movieList.map((movie) => (
                    <div key={movie.id}>
                        <br />
                        <h2 style={{ color: movie.isGood ? "Green" : "red" }}>
                            {movie.title}
                        </h2>
                        <p>Released: {movie.releaseDate}</p>

                        <div>
                            <input 
                                type="text" 
                                placeholder="Enter new Title" 
                                onChange={(e) => setUpdatedTitle(e.target.value)}
                            />
                            <button onClick={() => updateTitle(movie.id)}>Update Title</button>
                        </div>

                        <div>
                            <button onClick={() => deleteElement(movie.id)}>Delete element</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;