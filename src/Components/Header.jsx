import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleOut = () => {
        return logOut()
    }

    return (
        <div className='bg-slate-200 '>
            <div className='p-2 flex justify-around'>
                <div >
                    <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-5xl font-bold text-blue-800"><span className='text-red-600'>Ch</span> <span className='text-green-600'>ef</span> UI</a>
                    </div>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-2xl font-semibold'><Link to='/'>Home</Link></li>

                        <li className='text-2xl font-semibold' tabIndex={0}>
                            <Link>Blog</Link>
                            <ul className="p-2 bg-base-100">
                                <li><Link>Blog 1</Link> </li>
                                <li><Link>Blog 2</Link></li>
                            </ul>
                        </li>

                        <li className='text-2xl font-semibold' ><a> Profile </a></li>
                    </ul>
                </div>
                <div>
                    {!user && <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
                    {user && <button onClick={handleOut} className='btn btn-warning'>LogOut</button>}
                </div>
            </div>

        </div>
    );
};

export default Header;