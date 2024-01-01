import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillCodeSandboxCircle, AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md'

const HiveTables = ({ hives }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
                    <thead>
                        <tr >
                            <th className='border border-slate-600 rounded-md'>No</th>
                            <th className='border border-slate-600 rounded-md'>Name</th>
                            <th className='border border-slate-600 rounded-md'>Owner</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Location</th>
                            <th className='border border-slate-600 rounded-md max-md:hidden'>Year Created</th>
                            <th className='border border-slate-600 rounded-md'>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hives.map((hive, index) => (
                            <tr key={hive._id} className='h-8'>
                                <td className='border border-slate-700 rounded-md text-center' >
                                    {index + 1}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {hive.name}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {hive.owner}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {hive.location}
                                </td>
                                <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
                                    {hive.createdAt}
                                </td>
                                <td className='flex justify-center gap-x-4'>
                                    <Link to={`/hives/details/${hive._id}`}>
                                        <BsInfoCircle className='text-2xl text-green-800' />
                                    </Link>
                                    <Link to={`/hives/edit/${hive._id}`}>
                                        <AiOutlineEdit className='text-2xl text-yellow-600' />
                                    </Link>
                                    <Link to={`/hives/delete/${hive._id}`}>
                                        <MdOutlineDelete className='text-2xl text-red-600' />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
  )
}

export default HiveTables