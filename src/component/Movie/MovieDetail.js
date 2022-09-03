import { useEffect } from 'react';
import { Icon } from '../../assets/Icons';
import  { BsPlayFill }  from 'react-icons/bs';

function MovieDetail({movieDetail, setMovieDetail}) {
  
  const {name, year, genre, rating, imageURL, overview} = movieDetail;

  // LOCALSTORAGE
useEffect(()=> {
  setMovieDetail(JSON.parse(localStorage.getItem('movieDetail')))
}, [setMovieDetail])

useEffect(() => {
  localStorage.setItem('movieDetail', JSON.stringify(movieDetail));
})
  
  return (
  <div className='h-[500px] flex -mt-10 bg-stone-900 p-8'>
    <img className="object-contain rounded-sm opacity-75 hover:opacity-100 transition-opacity" src={imageURL} alt={name}></img>
    <div className='movie-detail-bg'>
      <div className='bg-neutral-700/50 flex justify-evenly p-5'>
        <div>
          <span className='text-4xl font-semibold text-neutral-100 tracking-wider'>{name}</span>
          <small className='text-neutral-100 ml-1'>{`(${year})`}</small>
        </div>
        <span className='h-10 w-10 rounded-full bg-white text-neutral-800 font-semibold font-text inline-flex items-center justify-center'>{rating}</span>
      </div>
        {genre && <span className='w-80 bg-neutral-700/50 text-neutral-100 my-3 rounded-r-md inline-flex tracking-wider p-2 rounded-sm'>{genre?.toString().toUpperCase().replace(/,/g, ' ● ')}</span>}
        <div>
          <h2 className='ml-3 pl-2 text-neutral-400 font-bold text-xl'>Overview</h2>
          <span className='text-neutral-300 text-xl flex ml-3 mt-1 pl-2 rounded-md'>{overview}</span>
        </div>
        <div className="p-5 text-neutral-100 flex gap-x-5">
          <button className="movie-detail-icon"><Icon name='fillHeart' size={16} /></button>
          <button className="movie-detail-icon"><Icon name='bookmark' size={16} /></button>
          <button className="movie-detail-icon"><Icon name='star' size={16} /></button>
          <button className='flex items-center gap-2 ml-10 group hover:text-zinc-400'>
            <div className="text-4xl group-hover:text-zinc-400"><BsPlayFill /></div>
            Play Trailer
          </button>
        </div>
    </div>
  </div>
  )
}

export default MovieDetail