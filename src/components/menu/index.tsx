import MenuBar from "../icons/menu_bar";
import MenuIcon from "../icons/menu_icon";
import GirlAvatar from "../icons/girl_avatar";
import Carousel from "../carousel";

function ResponsiveAppBar() {

  return (
    <>
      <div className="menu-divider">
        <MenuBar className="shape-fill"/>
      </div>
      <div className="menu-bar">
        <div className="menu-left">
          <div className="menu-icon">
            <MenuIcon />
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
          <div className="menu-button">
            Page Four
          </div>
        </div>
        <div className="menu-right">
          <div className="user-info">
            <div style={{marginRight: "1rem"}}>
              Bem vinda, Jane Doe!
            </div>
            <div className="menu-button" style={{fontSize: "1rem", fontWeight: 500}}>
              Perfil
            </div>
            <div className="menu-button" style={{fontSize: "1rem", fontWeight: 500}}>
              Configurações
            </div>
          </div>
          <GirlAvatar />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
    </>
  );
}
export default ResponsiveAppBar;