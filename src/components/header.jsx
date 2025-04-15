import { FaCartShopping } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, Links } from "react-router-dom";

export default function Header(){
    return(
        <header  className="w-full h-[70px] shadow-xl flex justify-center items-center relative bg-accent text-white">
            <img
                src="/logo.png"
                alt="logo"
                className="w-[60px] h-[60px] object-cover border-[3px] absolute left-1 rounded-full"
            />
            <div className="hidden w-[450px] md:flex justify-evenly items-center">
                <Link to="/" className="hidden md:block text-[22px] m-1">Home</Link>
                <Link to="/contact" className="hidden md:block text-[22px] m-1">Contact</Link>
                <Link to="/gallery" className="hidden md:block text-[22px] m-1">Gallery</Link>
                <Link to="/items" className="hidden md:block text-[22px] m-1">Items</Link>
                <Link
					to="/booking"
					className="hidden md:block text-[22px] font-bold m-1 absolute right-24"
				>
					<FaCartShopping />
				</Link>
			<GiHamburgerMenu
				className="absolute right-5 text-[24px] md:hidden"
				onClick={() => {
					setNavPanelOpen(true);
				}}
			/>
            </div>
        </header>
    );
}