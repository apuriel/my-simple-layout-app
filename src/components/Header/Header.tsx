// src/components/Header/Header.tsx
import React from "react";
import "./Header.css"; // Importa los estilos específicos de este componente

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-title">Mi ERP Simple</div>
      <nav className="header-nav">
        <a href="#">Usuario</a>
        <a href="#">Configuración</a>
      </nav>
    </header>
  );
};
