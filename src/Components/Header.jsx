import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleOut = ()=>{
return logOut()
    }

    return (
        <div className='bg-slate-200 rounded-xl'>
            <div className="navbar ">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-4xl text-blue-800">CheafUI</a>
                </div>

                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>

                        <li tabIndex={0}>
                            <Link>Blog</Link>
                            <ul className="p-2 bg-base-100">
                                <li><a>Blog 1</a></li>
                                <li><a>Blog 2</a></li>
                            </ul>
                        </li>

                        <li><a> Profile </a></li>
                    </ul>
                </div>

                <div>
                  {!user &&  <Link to='/login'><button className='btn btn-primary'>Login</button></Link>}
                  {user &&  <button onClick={handleOut} className='btn btn-warning'>LogOut</button>}
                </div>
            </div>
        </div>
    );
};

export default Header;