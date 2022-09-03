import  {AiOutlineSearch}  from 'react-icons/ai';
import { Link, useMatch } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
// Icons
import { Icon } from '../assets/Icons';

function Header({setQuery, favMovieFilter}) {

    const match = useMatch("/favourites");
    const match1 = useMatch("/moviedetail/:id/:name");
  
  return (
    <header className='w-full h-20 z-10 text-xl font-semibold px-5 gap-5 flex items-center bg-white fixed top-0 shadow-md justify-around'>
        <Link to='/' className={`text-orange-400 font-display flex-none font-semibold ${match?.pathname || match1?.pathname ? '' : ""}`}>Cihan Movie Archieve</Link>
  
       {match?.pathname  || match1?.pathname
       ? ""
       : <div className='relative grow'>
            <span className='absolute left-3 top-3'><AiOutlineSearch /></span>
            <input autoFocus type="text" onChange={(e) => setQuery(e.target.value)} placeholder='Search...' className='search-input'></input>
        </div>}

        <div className='relative flex items-center justify-center gap-x-5 '>
          <Link to='/favourites' data-tip="Favourites List">
            <ReactTooltip />
            <Icon name='heart' size={30} />
          </Link>
          {favMovieFilter.length === 0 ? "" : <span className='badge'>{favMovieFilter.length}</span>}
          <Link to ='/add' className='add-btn'>Add</Link>
        </div>
    </header>
  )
}

export default Header