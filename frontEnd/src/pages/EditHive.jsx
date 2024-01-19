import React, { useEffect, useState } from 'react';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';

const EditHive = () => {
    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`http://localhost:5555/hives/${id}`)
            .then((res) => {
                setName(res.data.name);
                setOwner(res.data.owner);
                setLocation(res.data.location);
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                alert('An error has occured. Please check console and try again')
                console.log(err)
            })
    }, [])

    const handleEditHive = () => {
        const data = {
            name,
            owner,
            location,
        };
        setLoading(true);
        axios
            .put(`http://localhost:5555/hives/${id}`, data)
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
            <BackButton />
            <h1 className='text-3xl my-4 '>Edit Hive</h1>
            {loading ? <Spinner /> : ''}
            <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
                <label className='text-xl mr-4 text-gray-500'>Name</label>
                <input
                    type='text'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border-2 border-gray-500 px-4 py-2 w-full'
                />

                <div className='my-4'>
                    <label className='text-xl mr-4 text-gray-500'>Owner</label>
                    <input
                        type='text'
                        value={owner}
                        onChange={(e) => setOwner(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <div className='my-2'>
                    <label className='text-xl mr-4 text-gray-500'>Location</label>
                    <input
                        type='text'
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className='border-2 border-gray-500 px-4 py-2 w-full'
                    />
                </div>
                <button className='p-2 bg-sky-300 m-8' onClick={handleEditHive}>
                    Edit Hive
                </button>

            </div>
        </div>
    )
}

export default EditHive