import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
// import { useAuth0 } from "@auth0/auth0-react";

function Sidebar() {
	// const { logout } = useAuth0();
	const [sidebar, setSidebar] = useState(false);
	const showSidebar = () => setSidebar(!sidebar);

	return (
		<>
			<IconContext.Provider value={{ color: "#fff" }}>
				<div className="nav-bar">
					<button className="menu-bar sidebarButton">
						<FaIcons.FaBars onClick={showSidebar} />
					</button>
				</div>
				<nav className={sidebar ? "nav-menu active" : "nav-menu"}>
					<ul className="nav-menu-items" onClick={showSidebar}>
						<li className="navbar-toggle">
							<Link to="#" className="menu-bar">
								<AiIcons.AiOutlineClose />
							</Link>
						</li>
						{SidebarData.map((item, index) => {
							if (item.title === "Log Out") {
								return (
									<li key={index} className={item.CName}>
										<a href={item.path}>
											{item.icons}
											<span>{item.title}</span>
										</a>
									</li>
								);
							} else {
								return (
									<li key={index} className={item.CName}>
										<Link to={item.path}>
											{item.icons}
											<span>{item.title}</span>
										</Link>
									</li>
								);
							}
						})}
					</ul>
				</nav>
			</IconContext.Provider>
		</>
	);
}

export default Sidebar;
