import React, { useState } from 'react';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom';

const DeleteHive = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {id} = useParams();

    const handleDeleteHive = () => {
        setLoading(true);
        axios
            .delete(`http://localhost:5555/hives/${id}`)
            .then(() => {
                setLoading(false);
                navigate('/');
               }) 
               .catch((err) => {
                setLoading(false);
                alert('An error has occured. Please check console and try again')
                console.log(err)
            })

    }
    return (
        <div className='p-4'>
            <BackButton/>
            <h1 className='text-3xl my-4'>Delete Hive</h1>
            {loading ? <Spinner/> :'' }
            <div className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto'>
            <h3 className='text-2xl '>Are you sure you want to delete this Hive?</h3>
            <button className='p-4 bg-red-600 text-white m-8 w-full'
            onClick={handleDeleteHive}>Yes, Delete it!</button>
            </div>
        </div>
    )
}

export default DeleteHive