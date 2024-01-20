import React, { useState } from 'react';
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CreateHives = () => {

    const [name, setName] = useState('');
    const [owner, setOwner] = useState('');
    const [location, setLocation] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleSaveHive = () => {
        const data = {
            name,
            owner,
            location,
        };
        setLoading(true);
        axios
            .post('http://localhost:5555/hives', data)
            .then(() => {
                setLoading(false);
                navigate('/');
            })
            .catch((err) => {
                setLoading(false);
                alert('An error has occured. Please check console and try again')
                console.log(err)
            });
    }

    return (
        <div className='p-4'>
            <BackButton />
            <h1 className='text-3xl my-4 '>Create Hive</h1>
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
                <button className='p-2 bg-sky-300 m-8' onClick={handleSaveHive}>
                    Save Hive
                </button>

            </div>
        </div>
    )
}

export default CreateHives