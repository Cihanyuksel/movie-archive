import { useState } from 'react';
import axios from 'axios';
import { ThreeDots } from  'react-loader-spinner';
import {useNavigate } from 'react-router-dom';
// toastify
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddForm() {

    const [data, setData] = useState({
        name: "",
        rating: "",
        imageURL: "",
        overview: "",
        year: ""
    })

    const [spin, setSpin] = useState(false)
    let navigate = useNavigate();

    const handle = e => {
        const newData = {...data}
        newData[e.target.name] = e.target.value;
        setData(newData)
        // console.log(newData)
    }

    // Add Movie
    // const submit = async e => {
    //     e.preventDefault();
    //     setSpin(true)
    //     await axios.post('http://www.localhost:3002/movies', {
    //         name: data.name,
    //         rating: +(data.rating),
    //         overview: data.overview,
    //         imageURL: data.imageURL,
    //         year: +(data.year)
    //     })
    //     .then(resp => {
    //         console.log(resp.data)
    //     }).catch(err => {
    //         console.log(err)
    //     })
    //     setTimeout(()=> setSpin(false), 1000)
    // }

    const {name, rating, overview, year, imageURL} = data;

    const handleSubmit = e => {
        e.preventDefault();
        setSpin(true)
        axios({
            method: 'post',
            url: 'http://www.localhost:3002/movies',
            data: {
                name,
                rating,
                overview,
                imageURL,
                year
            }})
            .then(resp => console.log(resp.data))
            .catch(err => console.log(err));
            
            setTimeout(()=> setSpin(false), 1000)
            toast.success("Movie Added", {
                theme: "light",
                hideProgressBar: false
            })
            setTimeout(()=> navigate("/"), 1000)
    }
    
  return (
        <div className='h-screen flex flex-col items-center'>
            <form onSubmit={e => handleSubmit(e)} className='w-5/12 flex flex-col justify-center gap-2'>
                <input disabled placeholder='Fill The Form To Add a Movie...' className='bg-gray-200 h-10 rounded-sm p-2' />
                <label htmlFor='name'>Name</label>
                <input type="text" onChange={e => handle(e)} value={data.name} name="name" id='name' required className='addform-input' />
                <label htmlFor='rating'>Rating</label>
                <input type="number" onChange={e => handle(e)} value={data.rating} name='rating' id='rating' className='addform-input' max={10} />
                <label htmlFor='image'>image URL</label>
                <input type="text" onChange={e => handle(e)} value={data.imageURL} name='imageURL' id='image' className='addform-input' />
                <label htmlFor='year'>Year</label>
                <input type="number" onChange={e => handle(e)} value={data.year} name='year' id='year' className='addform-input' max={2022} min={1900} />
                <label htmlFor='overview'>Overview</label>
                <textarea onChange={e => handle(e)} value={data.overview} name="overview" id='overview' className="border-[1px] border-zinc-200 outline-none p-2" cols={100} rows={5} />
                <button type='submit' className='bg-orange-500 text-white h-10 rounded-sm outline-none w-1/6 self-end inline-flex items-center justify-center'>{spin ? <ThreeDots  color="#fff" height={30} width={30}/> : "Add Movie"}</button>

            </form>
        </div>
  )
}

export default AddForm