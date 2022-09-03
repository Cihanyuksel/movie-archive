import { Link } from 'react-router-dom';
import { Icon } from '../../assets/Icons';

function Movie({movie, deleteMovie, addFavourites, getMovieDetail}) {

const {rating, overview, year, name, imageURL, id} = movie;

    // truncate
    const truncateText = (text, length) => `${text.slice(0, length )}...`

    // coloring
    const coloring = rating => {
        if(rating < 6) return 'bg-[#F67280] text-white';
        if(rating >= 6 && rating < 7.5 ) return 'bg-[#F8D49D] text-white';
        if(rating >= 7.5) return 'bg-[#90B77D] text-white';
    }
    
  return (

    <Link to={`moviedetail/${id}/${name}`} onClick={() => getMovieDetail(movie)} className='h-72 w-[600px] min-w-[500px] flex flex-shrink-0 bg-orange-100/20 shadow-md font-text text-zinc-600 text-sm hover:scale-102 hover:bg-neutral-50 hover:rounded-md transition-all'>
        
        <div className='w-1/3 p-4 relative'>
            <img src={imageURL} alt ={name} className='min-h-5/6 h-5/6 min-w-1/3 object-cover absolute bottom-1/3 ' />
        </div>

        <div className='w-2/3 h-72 flex flex-col justify-around'>
            <div className='flex flex-col'>
                
                <div className="flex items-center justify-between mr-5">
                    <h2 className='text-3xl font-semibold'>{name} <small className='text-xs text-zinc-400 select-none'>{year}</small></h2>
                    <span className={`${coloring(rating)} w-9 h-9 mb-3 flex items-center justify-center text-white font-bold mt-5 rounded-full flex-shrink-0`}>{rating}</span>
                </div>

                <span className='my-3 text-zinc-400'>by Cihan Yuksel</span>
                <p className='text-xs leading-5 mr-5'>{truncateText(overview, 150)}</p>
           
            </div>
            <div  className='flex justify-start gap-x-3'>

                <button onClick={(e) =>{ addFavourites(movie); e.preventDefault(); }} className="h-8 w-8 inline-flexitems-center justify-center rounded-sm tracking-widest outline-none"> <Icon name='heart' size={24} /></button>
                <button onClick={(e) =>{ deleteMovie(movie); e.preventDefault(); }} className="h-8 w-8 inline-flex items-center justify-center rounded-sm tracking-widest outline-none"><Icon name='delete' size={24} /></button>
                
            </div>
        </div>
    </Link>
  )
}

export default Movie;