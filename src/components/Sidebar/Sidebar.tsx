import { useState } from 'react';
import styles from "./Sidebar.module.css";

export interface MenuItem {
  id: number;
  title: string;
  isActive?: boolean;
  icon?: string;
  path?: string;
  children?: MenuItem[];
}

const sideMenu: MenuItem[] = [
    { id: 0, title: 'Dashboard'},
    { id: 1, title: 'Ventas',    children:
        [
            {id: 2, title: 'Presupuestos'},
            {id: 3, title: 'Pedidos'},
            {id: 4, title: 'Facturas'},
            {id: 5, title: 'Reportes'}, 
        ]},
    { id: 6, title: 'Compras'},
    { id: 7, title: 'Clientes'},
    { id: 8, title: 'RRHH'},
    { id: 9, title: 'Bancos'},
    { id: 10, title: 'Cuentas'},
    { id: 11, title: 'Inventario'},
];

export function Sidebar()
{
    const [activeId, setActiveId] = useState<number | null>(null);
    const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

    const toggleExpand = (id: number) => {
        setExpandedIds(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) newSet.delete(id);
            else newSet.add(id);
            return newSet;
        });
    };

    const handleClick = (id: number, hasChildren: boolean) => {
        if (hasChildren) {
            toggleExpand(id);
        } else {
            setActiveId(id);
        }
    };

    const renderMenuItems = (list: MenuItem[]) => (
        <ul>
            {list.map(({ id, title, children }) => {
                const isExpanded = expandedIds.has(id);
                const isActive = activeId === id;

                return (
                    <li 
                        key={id} 
                        className={`
                            ${styles.menuItemWrapper} 
                            ${children ? styles.hasChildren : ''} 
                            ${isActive ? styles.active : ''} 
                            ${isExpanded ? styles.expanded : ''}`}
                    >
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handleClick(id, !!children);
                            }}
                            className={isActive ? styles.active : ''}
                        >
                            <span className={styles.itemDescription}>{title}</span>
                        </a>

                        {children && (
                        <ul className={isExpanded ? styles.submenuOpen : styles.submenuClosed}>
                            {renderMenuItems(children)}
                        </ul>
)}

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
            <nav>
                {renderMenuItems(sideMenu)}
            </nav>
            <div className={styles.sidebarFooter}>
                <span>v1.0</span>
            </div>
        </aside>
    );
}
