// src/components/Layout/Layout.tsx
import React from "react";
import type { ReactNode } from "react"; // <--- ¡CAMBIO AQUÍ! Usa 'import type'
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

// Definimos las "props" (propiedades) que este componente va a recibir
interface LayoutProps {
  children: ReactNode; // 'children' es una prop especial de React
}

// Este es nuestro componente Layout. Recibe 'children' como una prop.
export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout-container">
        <Sidebar />
        <main className="main-content-area">{children}</main>
      </div>
    </div>
  );
};
