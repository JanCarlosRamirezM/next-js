"use client";

import { useUIStore } from "@/store";
import clsx from "clsx";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";

export const Sidebar = () => {
  const { closeSidebar, isSideMenuOpen } = useUIStore();

  return (
    <div>
      {/* Overlay oscuro */}
      {isSideMenuOpen && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"></div>
          <div
            onClick={() => closeSidebar()}
            className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          ></div>
        </>
      )}

      {/* Sidebar responsivo */}
      <nav
        className={clsx(
          "fixed right-0 top-0 w-full sm:w-[400px] lg:w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300 flex flex-col",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        {/* Botón cerrar */}
        <IoCloseOutline
          size={40}
          className="cursor-pointer absolute top-5 right-5"
          onClick={() => closeSidebar()}
        />

        {/* Contenido con scroll */}
        <div className="mt-20 p-5 overflow-y-auto">
          {/* Buscador */}
          <div className="relative mb-10">
            <IoSearchOutline size={20} className="absolute top-2 left-2" />
            <input
              type="text"
              placeholder="Buscar"
              className="w-full bg-gray-50 rounded pl-10 py-2 pr-10 border-b-2 text-lg sm:text-xl border-gray-200 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Menú */}
          <Link
            href={"/"}
            className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoPersonOutline size={30} />
            <span className="ml-3 text-lg sm:text-xl">Perfil</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoTicketOutline size={30} />
            <span className="ml-3 text-lg sm:text-xl">Ordenes</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-lg sm:text-xl">Ingresar</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-lg sm:text-xl">Salir</span>
          </Link>

          <div className="w-full h-px bg-gray-200 my-10"></div>

          <Link
            href={"/"}
            className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoShirtOutline size={30} />
            <span className="ml-3 text-lg sm:text-xl">Productos</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoTicketOutline size={30} />
            <span className="ml-3 text-lg sm:text-xl">Ordenes</span>
          </Link>

          <Link
            href={"/"}
            className="flex items-center mt-5 p-2 hover:bg-gray-100 rounded transition-all"
          >
            <IoPeopleOutline size={30} />
            <span className="ml-3 text-lg sm:text-xl">Usuarios</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
