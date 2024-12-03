import React from "react";
import MenuBar from "../icons/menu_bar";
import MenuIcon from "../icons/menu_icon";
import GirlAvatar from "../icons/girl_avatar";

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
        <div className="menu-left">
          <div className="menu-icon">
            <MenuIcon fill="#2a5adf"/>
          </div>
          <div className="menu-button">
            Page One
          </div>
          <div className="menu-button">
            Page Two
          </div>
          <div className="menu-button">
            Page Tree
          </div>
        </div>
        <div className="menu-right">
          <div className="user-info">
            <div>
              Bem vinda, Jane Doe!
            </div>
            <div>
              Cadastro de usuário
            </div>
            <div>
              Configurações
            </div>
          </div>
          <GirlAvatar />
        </div>
      </div>
    </>
  );
}
export default ResponsiveAppBar;