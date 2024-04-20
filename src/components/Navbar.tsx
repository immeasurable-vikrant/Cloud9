import cloud9Logo from '/cloud9.svg';
import "./styles.css";

const Navbar = () => {
	return (
		<nav className="navbar__container">
			<a href="/">
				<img src={cloud9Logo} className="logo" alt="cloud" />
			</a>
			<ul className="navbar">
				<li className="nav__item"><a href="/">Home</a></li>
				<li className="nav__item"><a  href="/about">About</a></li>
			</ul>
		</nav>
	);
};

export default Navbar;
