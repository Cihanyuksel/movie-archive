// CSS
import '../src/tailwind.css';
import '../src/customSwiper.css';
// REACT
import { useEffect, useState } from 'react';
import {Route, Routes } from 'react-router-dom';
// COMPONENTS
import Header from './component/Header'
import MovieList from './component/Movie/MovieList'
import MovieDetail from './component/Movie/MovieDetail';
import AddForm from './component/AddForm';
import Filter from './component/Filter';
import Favourites from './component/Favourites';
import Page404 from './404';
// TOASTIFY
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// AXIOS
import axios from 'axios';

function App() {

const [movies, setMovies] = useState([]);
const [filtered, setFiltered] = useState([]);
const [favMovie, setFavMovie] = useState([]);
const [movieDetail, setMovieDetail] = useState([]);
const [loading, setLoading] = useState(false);
const [activeGenre, setActiveGenre] = useState("all");
const [query, setQuery] = useState("");

useEffect(() => {
  getMovies();
}, [])

// GET MOVIES
const getMovies = async () => {
  setLoading(true)
  const resp = await axios.get('http://www.localhost:3002/movies');
  
  setMovies(resp.data)
  setFiltered(resp.data)
  setLoading(false)
}

// GET MOVIE DETAIL 
const getMovieDetail = async movie => {

    const resp = await axios.get(`http://www.localhost:3002/movies/${movie.id}`)
    console.log(resp.data)
    setMovieDetail(resp.data)
}

// FAVOURITES
const addFavourites = movie => {

  let newFavList = [...favMovie, movie];
  console.log(movie)
  setFavMovie(newFavList)
}

// REMOVE FAVOURITES
const removeFavourites = movie => {
  const newFavList = favMovie.filter(m => m.id !== movie.id)

  setFavMovie(newFavList);
}

const favMovieFilter = favMovie.filter((m, p) => {
  return favMovie.indexOf(m) === p;
})

// LOCALSTORAGE
useEffect(()=> {
  setFavMovie(JSON.parse(localStorage.getItem('favMovie')))
}, [])

useEffect(() => {
  localStorage.setItem('favMovie', JSON.stringify(favMovieFilter));
})

// FILTERED MOVİE
useEffect(() => {

  if(activeGenre === "all") {
    setFiltered(movies);
    return
  }
  
  const filtered = movies.filter((movie) => movie.genre?.indexOf(activeGenre) >= 0)
  setFiltered(filtered)
  
}, [activeGenre, movies])

// SEARCH MOVIE
useEffect(() => {

  const search = movies.filter((movie) => movie.name.toLowerCase().indexOf(query.toLowerCase()) !== -1).sort((a,b) => a.id < b.id ? 1 : a.id > b.id ? -1 : 0)

  setFiltered(search)
}, [query, movies])
  
// DELETE MOVIE
const deleteMovie = movie => {
  axios.delete(`http://www.localhost:3002/movies/${movie.id}`)

  const newMovieList = movies.filter(m => {
    return  m.id !== movie.id;
  })
  setMovies(newMovieList)

  toast.success("Deleted Successful", {
    theme: "light",
    })
}

return (
    <div>
      <ToastContainer
        autoClose={1000}
        limit={1}
        hideProgressBar = {true}/>

        <Header setQuery={setQuery} favMovieFilter={favMovieFilter}/>
        <Filter setActiveGenre={setActiveGenre} />
        <Routes>      
            <Route path='/add' element={<AddForm />} />     
            <Route path='/favourites' element={  <Favourites
              favMovieFilter = {favMovieFilter}
              removeFavourites = {removeFavourites}

            />} />     
            <Route path='/' element= { <MovieList 
            loading={loading}
            query={query} 
            setQuery={setQuery}
            setFiltered={setFiltered}
            filtered={filtered}
            deleteMovie={deleteMovie}
            addFavourites={addFavourites}
            getMovieDetail={getMovieDetail}
            />} />
            <Route path='moviedetail/:id/:name' element= { <MovieDetail movieDetail={movieDetail} setMovieDetail={setMovieDetail} />} />
            <Route path='*' element= {<Page404 />} />
        </Routes>        
    </div>
  );
}

export default App;