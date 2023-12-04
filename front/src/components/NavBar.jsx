
import { BsFillMortarboardFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "../context/AuthContext";

export default function NavBar() {

    const {authenticated, logout, admin} = useContext(Context)
    console.log(admin)
  return (
    <nav className="flex px-24 h-16 border-b-2 border-purple-500 justify-between items-center">
        <div className="logo flex items-center gap-4 text-xl">
            <BsFillMortarboardFill className="text-4xl text-purple-500"/>
            <h1>Academic News</h1>
        </div>
        <ul className="flex gap-4 text-xl items-center">
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                {authenticated ? <Link to='/notices/school/Sudario-Ferreira'>Escolas</Link> : <></>}
            </li>
            <li>
                <Link to='/sobrenos'>Sobre nós</Link>
            </li>
            <li>
                <Link to='/parcerias'>Parcerias</Link>
            </li>
        </ul>
        <div className="actions flex gap-4 font-bold">
            {!authenticated && <button className="bg-purple-500 px-6 py-2  text-white"><Link to='/'>Registar</Link></button>}
            {!authenticated && <button><Link to='/login'>Login</Link></button>}
            {authenticated && <button onClick={logout}><Link to='/login'>Sair</Link></button>}
        </div>
    </nav>
  )
}
