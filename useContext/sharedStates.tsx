"use client";

import { createContext, useEffect, useRef, useState } from "react";

export const AxiosForSharingStatesAxiosContext = createContext<any>(null);

const SharingStatesContext = ({ children }: any) => {
  const goToTopFast = () => {
    window.scrollTo({ top: 0, left: 0 });
  };
  const goToTopSmooth = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isAuthorizedAdmin, setIsAuthorizedAdmin] = useState<boolean>(false);

  const [openAuthPopUp, setOpenAuthPopUp] = useState<boolean>(false);
  const [activeAuthPopUP, setActiveAuthPopUP] = useState("signin");

  const [openMenuPopUp, setOpenMenuPopUp] = useState<boolean>(false);
  const outOpenMenuPopUpRef = useRef<HTMLElement | null>(null); // Specify the type

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event: any) {
    if (
      outOpenMenuPopUpRef.current &&
      !(outOpenMenuPopUpRef.current as HTMLElement).contains(event.target) // Use 'as' assertion
    ) {
      setOpenMenuPopUp(false);
    }
  }

  // display size
  const [windowSize, setWindowSize] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => {
        setWindowSize([window.innerWidth, window.innerHeight]);
      };

      window.addEventListener("resize", handleWindowResize);

      return () => {
        window.removeEventListener("resize", handleWindowResize);
      };
    }
  }, []);
  // display size

  const [openAddAds, setOpenAddAds] = useState<boolean>(false);

  return (
    <AxiosForSharingStatesAxiosContext.Provider
      value={{
        goToTopFast,
        goToTopSmooth,
        isAuthorized,
        setIsAuthorized,
        isAuthorizedAdmin,
        setIsAuthorizedAdmin,
        openAuthPopUp,
        setOpenAuthPopUp,
        activeAuthPopUP,
        setActiveAuthPopUP,
        windowSize,
        openMenuPopUp,
        setOpenMenuPopUp,
        outOpenMenuPopUpRef,
        openAddAds,
        setOpenAddAds,
      }}
    >
      {children}
    </AxiosForSharingStatesAxiosContext.Provider>
  );
};

export default SharingStatesContext;
