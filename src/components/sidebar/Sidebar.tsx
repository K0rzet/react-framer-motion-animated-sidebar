import Menu from "./menu/Menu";
import styles from "./Sidebar.module.scss";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useAtom } from "jotai";
import { isCollapsedAtom } from "../../store";
import { m } from "framer-motion";
import cn from "clsx";
import { useRef, useState } from "react";
const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useAtom(isCollapsedAtom);
  const hoverTimeoutRef = useRef<number | null>(null);
  const toggleSideBar = () => {
    if (isCollapsed) {
      setIsCanHover(false);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      hoverTimeoutRef.current = setTimeout(() => {
        setIsCanHover(true);
      }, 1000);
    }
    setIsCollapsed(!isCollapsed);
  };

  const [isCanHover, setIsCanHover] = useState(true);

  return (
    <m.aside
      className={cn(styles.sidebar, {
        [styles.collapsed]: isCollapsed,
        [styles.canHover]: isCanHover,
      })}
      animate={{ width: isCollapsed ? 50 : 224 }}
      transition={{ type: "spring", stiffness: 300, damping: 23 }}
    >
      <button className={styles.toggle} onClick={toggleSideBar}>
        {isCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </button>
      <Menu />
    </m.aside>
  );
};

export default Sidebar;
