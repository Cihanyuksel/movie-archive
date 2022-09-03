import { Grid } from 'react-loader-spinner';
import Movie from './Movie';
import { useState } from 'react';
import ScrollUp from '../../assets/ScrollUp';

function MovieList({ loading, query, filtered, deleteMovie, addFavourites, getMovieDetail }) {

  const [loadMore, setLoadMore] = useState(6);

  // SLICE
  const slice = filtered.slice(0, loadMore)

  //  LOAD MORE
  const loadMoreFunc = () => {
    setLoadMore(loadMore + 6)
  }

  return (
    <>
      <main className='w-full flex flex-wrap gap-x-8 gap-y-16 justify-center items-center my-20'> {/* rselative */}

        <span className='absolute top-52 right-3 font-bold text-zinc-600 tracking-wider'>{query ? `${filtered.length} results found` : ""}</span>

        {loading ? <div className='w-auto h-auto absolute inset-0'><div className='flex items-center justify-center relative top-1/2 left-1/2 -translate-x-1/2 '><Grid color="#fb923c" secondaryColor="#f5760e" height={70} width={70} /></div></div> :

          slice.map((movie, i) => (

            <Movie
              key={i}
              movie={movie}
              deleteMovie={deleteMovie}
              addFavourites={addFavourites}
              loadMoreFunc={loadMoreFunc}
              getMovieDetail={getMovieDetail}
            />
          ))}

      </main>

      {filtered.length === 0
        ? <span className='inline-flex items-center justify-center w-full font-mono'>There are no movies that matched your query.</span>
        : <button className={`load-more-btn ${query !== "" && 'bg-zinc-400'} ${filtered.length === slice.length && 'hidden'}`} disabled={query !== ""} onClick={() => loadMoreFunc()}>Load More</button>}

      <ScrollUp />
    </>
  )
}

export default MovieList;