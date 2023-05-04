import React, { useContext } from 'react';
import { VscFilePdf } from "react-icons/vsc";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import { CgProfile } from "react-icons/cg";
import 'react-toastify/dist/ReactToastify.css';
import Marquee from "react-fast-marquee";
import Pdf from "react-to-pdf";
export const ref = React.createRef();


// const ref = React.createRef();

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleOut = () => {
        return logOut()
    }

    console.log(user)
    return (
       <div className='bg-slate-200 text-center w-[100%]'>
         <div className=' p-4 sm:flex justify-around items-center '>
            <div>
                <h2 className='text-5xl font-bold'>Ch<span className='text-blue-600'>ef</span><span className='text-red-600'>UI</span> </h2>
            </div>
            <div className='mt-4 sm:flex'>
                <NavLink className='text-2xl font-semibold mr-2' to='/'>Home</NavLink>

                <h2 className='text-2xl font-semibold mr-2' ><div className="dropdown dropdown-hover">
                    <label tabIndex={0} className="m-1">Blog</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li className='text-xl'><NavLink to='/blog1'>Recipe Blog</NavLink></li>
                        <li className='text-xl'><NavLink to='/blog2'> Assignment FAQ</NavLink></li>
                    </ul>
                </div></h2>


                <NavLink className='text-2xl font-semibold mr-2' to='/register'>Register</NavLink>
                <NavLink className='text-2xl font-semibold mr-2' to='/d'>Random  </NavLink>
            </div>
            <div className='mt-4 sm:mt-0 flex items-center justify-center'>

                <div>
                    {
                        user && <div className="tooltip tooltip-bottom" data-tip={user.displayName}><img className='rounded-full w-[60px] mr-5' src={user.photoURL === 'null' ? <CgProfile /> : user.photoURL} alt="" /></div>
                    }
                </div>
                <div className="tooltip tooltip-bottom" data-tip="Welcome user">
                    <button className="text-4xl mr-3"><CgProfile /></button>
                </div>

                {!user && <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
                {user && <button onClick={handleOut} className='btn btn-warning'>LogOut</button>}

                <div className='ml-3 tooltip tooltip-bottom md:tooltip-left' data-tip="You need to go home for Download pdf">
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf} className='btn btn-warning'><VscFilePdf className='text-3xl' /></button>}
                    </Pdf>
                </div>

            </div>
           
        </div>
        <div className='bg-blue-200 p-5 flex'>
            <div>
                <button className='btn btn-warning'>Latest</button>
            </div>
                <Marquee speed={80}>
                In addition to these technical skills, a successful chef must also possess a strong work ethic, excellent time management skills, and a keen eye for detail. You must be able to work quickly and efficiently under pressure, manage a team of cooks and assistants, and maintain a high level of quality in everything you do.
                </Marquee>
            </div>
       </div>
    );
};


export default Header;


