import { useState } from 'react';
import styles from "./Sidebar.module.css"; // Importa los estilos específicos del Sidebar

interface MenuItem {
  id: number;
  title: string;
  isActive: boolean;
}

const sideMenu: MenuItem[] = [
  { id: 0, title: 'Dashboard', isActive: false },
  { id: 1, title: 'Ventas', isActive: false },
  { id: 2, title: 'Compras', isActive: false },
  { id: 3, title: 'Clientes', isActive: false },
  { id: 4, title: 'RRHH', isActive: false },
  { id: 5, title: 'Bancos', isActive: false },
  { id: 6, title: 'Cuentas', isActive: false },
  { id: 7, title: 'Inventario', isActive: false },
];

export function Sidebar()
{
    const [list, setList] = useState<MenuItem[]>(sideMenu);
  
    // funcion que es llamado dentro de la funcion anonima de onClick en cada <a>
    const handleisActive = (id: number) => 
    {   
        // se pasa por funcion el nuevo objeto, prevItems es a su vez el anterior LIST
        setList(prevItems =>
        
            // usar en map ({}) devuelve un objeto literal, son solo (devuelve texto?) y usar {} devuelve codigo
        // newList es una copia de sideMenu modificada
            prevItems.map(item => ({
            // Esto hace que se copien las propiedades de cada objeto
            ...item,
             //Solo el seleccionado activo evito tener q mapear por offset
            // esto cambia el estado solo de la propiedad de isActive, el resto se copiaron igual
            isActive: item.id === id
      })));
    };
    // la funcion  al ser flecha retorna lo que esta entre () que en este caso es lo que sale de MAP
    const renderMenuItems = () => (
        
        list.map(({id, title, isActive})  => (
            <li key={id}>
            <a href="#" onClick={() => handleisActive(id)} className={isActive ? styles.active : ''}>
                <span className={styles.itemDescription}>{title}</span>
            </a>
        </li>
        ))
    );

    return ( 
       <aside className={styles.appSidebar}>
            <div className={styles.sidebarHeader}>
                {/* Aquí podríamos poner un logo o el nombre del ERP */}
                <h3>ERP-PRO</h3>
            </div>
            <nav>
                <ul>{renderMenuItems()}</ul>
            </nav>
            {/* Podríamos añadir un footer al sidebar si es necesario */}
            <div className={styles.sidebarFooter}>
                <span>v1.0</span>
            </div>
        </aside>
    );
}
