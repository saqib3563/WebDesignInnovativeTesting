'use client'
import { createContext, useEffect, useState } from "react";

export const sideBarContext = createContext();

export const SideBarProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(prev => {
      const newOpen = !prev;

      if (newOpen) {
        document.body.classList.add('sidebar-open-body');
      } else {
        document.body.classList.remove('sidebar-open-body');
      }

      return newOpen;
    });
  };

  // ✅ NEW: sidebar ke andar anchor click handler
  useEffect(() => {
    if (!open) return;

    const handleAnchorClick = (e) => {
      const target = e.target.closest('a');
      if (!target) return;

      setOpen(false);
      document.body.classList.remove('sidebar-open-body');
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [open]);

  return (
    <sideBarContext.Provider value={{ open, toggleMenu }}>
      {children}
    </sideBarContext.Provider>
  );
};
