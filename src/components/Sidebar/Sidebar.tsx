import { useState } from "react";
import styles from "./Sidebar.module.css";

export interface MenuItem {
  id: number;
  title: string;
//   isActive?: boolean;
  icon?: string;
  path?: string;
  children?: MenuItem[];
}

interface menuStateProps {
    activeId:   number  | null;
    openId:     Set<number>;
}

const sideMenu: MenuItem[] = [
  { id: 0, title: "Dashboard" },
  {
    id: 1,
    title: "Ventas",
    children: [
      { id: 2, title: "Presupuestos" },
      { id: 3, title: "Pedidos" },
      { id: 4, title: "Facturas" },
      { id: 5, title: "Reportes" },
    ],
  },
  { id: 6, title: "Compras" },
  { id: 7, title: "Clientes" },
  { id: 8, title: "RRHH" },
  { id: 9, title: "Bancos" },
  { id: 10, title: "Cuentas" },
  { id: 11, title: "Inventario" },
];

// export function Sidebar() {
//   const [activeId, setActiveId] = useState<number | null>(null);

//   const renderMenuItems = (list: MenuItem[]) => (
//     <ul>
//       {list.map(({ id, title, children }) => {
//         const isActive = activeId === id;

//         return (
//         <li key={id}
//             className= {   `${styles.menuItemWrapper} 
//                             ${children ? styles.hasChildren : ""} 
//                             ${isActive ? styles.active : ""} 
//                             ${isExpanded ? styles.expanded : ""}`
//                         }>
//             <a href="#" onClick={(e) => { e.preventDefault(); handleClick(id, !!children); }} className={isActive ? styles.active : ""}>
//                 <span className={styles.itemDescription}>{title}</span>
//             </a>

//             {children && (<ul className={isExpanded ? styles.submenuOpen : styles.submenuClosed}> {renderMenuItems(children)}</ul>)}
//         </li>
//         );
//       })}
//     </ul>
//   );

  export function Sidebar() {

  const [menuState, setMenuState] = useState<menuStateProps>({activeId: null, openId: new Set()});

  const handleClick = (id: number, hasChildren: boolean) => {
    setMenuState(prev => ({
        ...prev,
        activeId: id
    }));
  };

  const renderMenuItems = (list: MenuItem[]) => (
    <ul>
      {list.map(({ id, title, children }) => {

        return (
        <li key={id}>
            <a href="#" onClick={(e) => { e.preventDefault(); handleClick(id, !!children); }} className={(menuState.activeId == id) ? styles.active : ""}>
                <span className={styles.itemDescription}>{title}</span>
            </a>
          
        </li>
        );
      })}
    </ul>
  );

  return (
    <aside className={styles.appSidebar}>
      <div className={styles.sidebarHeader}>
        <h3>ERP-PRO</h3>
      </div>
      <nav>{renderMenuItems(sideMenu)}</nav>
      <div className={styles.sidebarFooter}>
        <span>v1.0</span>
      </div>
    </aside>
  );
}
// Si tiene childrens no es seleccionable,
// Pero tiene q poner la clase expandir y crear una ul nueva y llamar al render nuevamente
// este elemento con childrens si se ya se encuentra expandido entonces hayq ue contraerlo
// dentro de cualquier menu sin children hay q marcar si es activo o no.

// puedo crearme un array usarlo de buffer

