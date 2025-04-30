import { Link } from "react-router";
import logo from "../assets/images/logo.png";
import data from "../services/data.service";

function Header() {
	// only for developing uses
	return (
		<>
			<nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
				<div className="navbar-brand">
					<Link className="navbar-item" to="./home.html">
						<figure
							className="image"
							style={{
								maxWidth: "20px",
							}}
						>
							<img className="is-rounded is-square" src={logo} alt="icon" />
						</figure>
						<b>PLP</b>
					</Link>
					<a
						role="button"
						className="navbar-burger"
						data-target="navMenu"
						aria-label="menu"
						aria-expanded="false"
					>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
					</a>
				</div>
				<div className="navbar-menu" id="navMenu">
					<div className="navbar-start">
						<Link className="navbar-item" id="navHome" to="/">
							{data.navbar.home}
						</Link>
						<Link className="navbar-item" id="navGroups" to="/clubs">
							{data.navbar.groups}
						</Link>
						<Link className="navbar-item" id="navEvents" to="/events">
							{data.navbar.events}
						</Link>
						<div className="navbar-item has-dropdown is-hoverable">
							<a className="navbar-link" id="navMore" href="./workInProgress.html">
								{data.navbar.more}
							</a>
							<div className="navbar-dropdown">
								<a className="navbar-item" id="navInstagram" href="">
									{data.navbar.instagram}
								</a>
								<a className="navbar-item" id="navRednote" href="">
									{data.navbar.rednote}
								</a>
								<a
									className="navbar-item"
									id="navSponsor"
									href="./workInProgress.html"
								>
									{data.navbar.sponsor}
								</a>
								<a
									className="navbar-item"
									id="navOurTeam"
									href="./workInProgress.html"
								>
									{data.navbar.ourTeam}
								</a>
								<hr className="navbar-divider" />
								<a
									className="navbar-item"
									id="navContactUs"
									href="./workInProgress.html"
								>
									{data.navbar.contactUS}
								</a>
							</div>
						</div>
					</div>
					<div className="navbar-end">
						<div className="navbar-item">
							<div className="buttons">
								<a className="button is-dark" href="#">
									EN
								</a>
								<a className="button is-dark" href="#">
									中
								</a>
								<a className="button is-primary" id="navAboutUs" href="./home.html">
									<strong>{data.navbar.aboutUs}</strong>
								</a>
								<a className="button is-light" id="navJoinUs" href="./joinUs.html">
									{data.navbar.joinUs}
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
export default Header;
