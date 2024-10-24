import { Link } from "react-router-dom"
const Navbar = () => {
  return (
    <div className="lg:px-24 px-4 lg:pt-10 flex flex-wrap items-center py-2 bg-[#F0F0F0] ">
    <Link className="flex-1 flex justify-between items-center" to="/">
        <img src="/logo3.svg"  alt="logo" className="w-56 h-20"/>
    </Link>

    <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
      <svg className="fill-current text-gray-900"
        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
        <title>menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />

    <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
            <ul className="md:flex items-center justify-between text-xl font-sans  text-gray-700 pt-4 md:pt-0 lg:gap-10 lg:pr-10">
                <li><Link className="md:p-4 px-0 block" to="/about">About us</Link></li>
                <li><Link className="md:p-4 px-0 block" to="/services">Service</Link></li>
                <li><Link className="md:p-4 px-0 block" to="/contact">Contact us</Link></li>
                <li><Link className="md:p-4 px-0 block md:mb-0 mb-2" to="/signIn">SignIn</Link></li>
            </ul>
        </nav>
    </div>
</div>
  )
}

export default Navbar