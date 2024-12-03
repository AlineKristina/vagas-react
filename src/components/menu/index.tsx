import React from "react";
import MenuBar from "../icons/menu_bar";
import MenuIcon from "../icons/menu_icon";

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="menu-divider">
        <MenuBar className="shape-fill"/>
      </div>
      <div className="menu-bar">
        <div className="menu-icon">
          <MenuIcon fill="rgb(0, 157, 255)"/>
        </div>
        <div className="menu-buttton">
          Page One
        </div>
        <div className="menu-buttton">
          Page Two
        </div>
        <div className="menu-buttton">
          Page Tree
        </div>
      </div>
    </>
  );
}
export default ResponsiveAppBar;