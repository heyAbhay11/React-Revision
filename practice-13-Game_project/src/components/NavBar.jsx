import React, { useState } from 'react'
import { Gamepad2 } from 'lucide-react';
import { Search } from 'lucide-react';
import { NavLink } from 'react-router';
import { CircleUserRound } from 'lucide-react';

const NavBar = () => {

    const [value, setValue] = useState('');

    return (
        <div className='w-full flex items-center justify-between py-2 px-8 border-b-2 pb-8 border-[#111111]  text-white'>
            <div className='flex items-center gap-7'>
                <Gamepad2 size={30} />
                <h1 className='font-bold text-2xl'>GameList</h1>
            </div>

            <div className='flex items-center gap-17'>
                <NavLink className='text-xl font-medium opacity-60' to='/'>Home</NavLink>
                <NavLink className='text-xl font-medium opacity-60' to='/games' >Games</NavLink>
                <NavLink className='text-xl font-medium opacity-60' to='/favourite' >Favourite</NavLink>
            </div>

            <div className='flex  items-center gap-9 justify-end '>
                <div className='flex  gap-1 rounded-2xl  items-center bg-[#111111]  '>
                    <input
                        value={value}
                        type='text'
                        placeholder='search games...'
                        onChange={(e) => 
                        setvalue(e.target.value)}

                        className='rounded-2xl w-full '
                    />

                </div>

                <div>
                    <CircleUserRound />
                </div>

            </div>



        </div>
    )
}

export default NavBar
