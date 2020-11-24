import React, {useState, createContext} from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
    // console.log("sidebar");
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
    // console.log("modal");
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <AppContext.Provider
      value={{
        sidebarOpen,
        modalOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  );
};



export const useGlobalContext = () => {
  return React.useContext(AppContext);
};

export { AppContext, AppProvider };