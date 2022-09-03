// Import Swiper 
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Link } from 'react-router-dom';
// Icons
import { Icon } from '../assets/Icons';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Favourites({ favMovieFilter, removeFavourites }) {

    return (
        <div className="flex flex-col gap-y-2">
            <h1 className="text-3xl text-zinc-500 ml-8 -mt-6">My Favourites</h1>
            <Swiper
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                spaceBetween={0}
                pagination={{
                    type: "fraction",
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 768px
                    350: {
                        width: 350,
                        slidesPerView: 1,
                    },
                    450: {
                        width: 450,
                        slidesPerView: 1,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 1,
                    },

                    768: {
                        width: 768,
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    976: {
                        width: 976,
                        slidesPerView: 3,
                    },
                }}>

                <div className='h-[200px] flex flex-wrap'>

                    {favMovieFilter.length === 0
                        ?
                        <div className="text-3xl inline-flex items-center justify-center w-full text-zinc-500 flex-col gap-y-5">
                            <p>Your Favorite List is Empty</p>
                            <Link to='/' className="text-white text-xl bg-orange-400 p-1 rounded-md">Home</Link>
                        </div>
                        :
                        favMovieFilter.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-64 h-[25rem] bg-stone-100 flex flex-col gap-y-2 rounded-md overflow-hidden'>
                                    <img src={movie.imageURL} alt={movie.name} className=" h-72 w-full rounded-sm"></img>
                                    <p className='text-lg text-zinc-600 w-full ml-3 font-semibold'>{`${movie.name.toUpperCase().slice(0, 25)}`}</p>
                                    <p className='text-xs text-zinc-500 ml-3'>By Cihan Yuksel</p>

                                    <ul className='bg-stone-700 rounded-b-md flex'>
                                        <li className='w-1/3 h-10 inline-flex items-center justify-center text-orange-400 '><Icon name='fillHeart' size={24} /></li>
                                        <li className='w-1/3 h-10 inline-flex items-center justify-center bg-orange-400  text-stone-700 font-semibold '>{movie.rating}</li>
                                        <li onClick={() => removeFavourites(movie)} className='w-1/3 h-10 inline-flex items-center justify-center cursor-pointer text-orange-400'><Icon name='favdelete' size={24} /></li>
                                    </ul>

                                </div>
                            </SwiperSlide>
                        ))}

                </div>

            </Swiper>
        </div>
    )
}

export default Favourites;