import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import Spinner from '../components/Spinner'

const ShowHive = () => {
    const [book, setBook] = useState [{}];
    const [loading, setLoading] = useState(false);
    const { id } = useParams()
    return (
        <div>ShowHive</div>
    )
}

export default ShowHive