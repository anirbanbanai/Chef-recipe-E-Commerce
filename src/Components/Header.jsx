import React, { useContext } from 'react';
import { VscFilePdf } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { CgProfile } from "react-icons/cg";
import 'react-toastify/dist/ReactToastify.css';

import Pdf from "react-to-pdf";
export const ref = React.createRef();


// const ref = React.createRef();

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleOut = () => {
        return logOut()
    }


    return (
        <div className='text-center p-4 sm:flex justify-around items-center bg-slate-200 w-[100%]'>
            <div>
                <h2 className='text-5xl font-bold'>Ch<span className='text-blue-600'>ef</span><span className='text-red-600'>UI</span> </h2>
            </div>
            <div className='mt-4 sm:flex'>
                <Link className='text-2xl font-semibold mr-2' to='/'>Home</Link>

                <h2 className='text-2xl font-semibold mr-2' ><div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="m-1">Blog</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-xl'><Link to='/blog1'>Recipe Blog</Link></li>
                        <li className='text-xl'><Link to='/blog2'> Assignment FAQ</Link></li>
                    </ul>
                </div></h2>


                <Link className='text-2xl font-semibold mr-2' to='/d'>About  </Link>
                <Link className='text-2xl font-semibold mr-2' to='/contact'>Contact Us  </Link>
            </div>
            <div className='mt-4 sm:mt-0 flex items-center justify-center'>
                <div className="tooltip tooltip-bottom" data-tip="Welcome user">
                    <button className="text-4xl mr-3"><CgProfile /></button>
                </div>
                {!user && <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
                {user && <button onClick={handleOut} className='btn btn-warning'>LogOut</button>}

                <div className='ml-3'>
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className='btn btn-warning'><VscFilePdf className='text-3xl'/></button>}
                    </Pdf>
                </div>

            </div>
        </div>
    );
};


export default Header;


