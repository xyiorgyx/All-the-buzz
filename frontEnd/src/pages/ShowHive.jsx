import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowHive = () => {
    const [hive, setHive] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams()


    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/hives/${id}`)
            .then((res) => {
                setHive(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                setLoading(false);
            })
    }, [])
    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4'>Show Hive</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div className='flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4'>
                    <div className='my-4 '>
                        <span className='text-xl mr-4 text-gray-500'> Id </span>
                        <span>{hive._id}</span>                     
                    </div>
                    <div className='my-4 '>
                        <span className='text-xl mr-4 text-gray-500'> Name </span>
                        <span>{hive.name}</span>                     
                    </div>
                    <div className='my-4 '>
                        <span className='text-xl mr-4 text-gray-500'> Owner </span>
                        <span>{hive.owner}</span>                     
                    </div>
                    <div className='my-4 '>
                        <span className='text-xl mr-4 text-gray-500'> Location </span>
                        <span>{hive.location}</span>                     
                    </div>
                    <div className='my-4 '>
                        <span className='text-xl mr-4 text-gray-500'> Created At: </span>
                        <span>{new Date(hive.createdAt).toString()}</span>                     
                    </div>
                    <div className='my-4 '>
                        <span className='text-xl mr-4 text-gray-500'> Updated At: </span>
                        <span>{new Date(hive.updatedAt).toString()}</span>                     
                    </div>
                </div>
            )}
        </div>
    )
}

export default ShowHive