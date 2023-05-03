import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { CgProfile } from "react-icons/cg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleOut = () => {
        return logOut()
    }
    const notify = () => toast('Favorite addeed');

    return (
        <div className='text-center p-4 sm:flex justify-around items-center bg-slate-200 w-[100%]'>
            <div>
                <h2 className='text-5xl font-bold'>Ch<span className='text-blue-600'>ef</span><span className='text-red-600'>UI</span> </h2>
            </div>
            <div className='mt-4'>
                <Link className='text-2xl font-semibold mr-2' to='/'>Home</Link>

                <Link className='text-2xl font-semibold mr-2' ><div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="m-1">Blog</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-xl'><Link to='/blog1'>Recipe Blog</Link></li>
                        <li className='text-xl'><Link to='/blog2'> Assignment FAQ</Link></li>
                    </ul>
                </div></Link>


                <Link className='text-2xl font-semibold mr-2' to='/d'>About  </Link>
                <Link className='text-2xl font-semibold mr-2' to='/'>Contact Us  </Link>
            </div>
            <div className='mt-4 sm:mt-0 flex items-center'>
                <div className="tooltip tooltip-bottom" data-tip="Welcome user">
                    <button className="text-4xl mr-3"><CgProfile /></button>
                </div>
                {!user && <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
                {user && <button onClick={handleOut} className='btn btn-warning'>LogOut</button>}
                <div>
                    <button onClick={notify}>Toast</button>
                    <ToastContainer></ToastContainer>
                </div>
            </div>
        </div>
    );
};


export default Header;


{/* <div className='p-2 flex justify-around'>
                <div >
                    <div className="flex items-center">
                        <h2 className='text-3xl sm:text-5xl font-bold'>Ch<span className='text-blue-600'>ef</span><span className='text-red-600'>UI</span> </h2>
                    </div>
                </div>
                <div className="">
                    <ul className="menu menu-horizontal ">
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
            </div> */}