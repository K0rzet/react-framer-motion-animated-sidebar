import { MENU } from "./menu.data";
import MenuItem from "./MenuItem";
import styles from "../Sidebar.module.scss"
const Menu = () => {
  return (
    <nav className={styles.menu}>
      {MENU.map((item) => (
        <MenuItem item={item} key={item.link} />
      ))}
    </nav>
  );
};

export default Menu;
