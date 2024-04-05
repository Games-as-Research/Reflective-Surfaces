import { createContext } from "react";

const DataContext = createContext(null);
const DataProvider = (props) => {
  function HelloWorld() {
    console.log("Hello World!");
  }

  return (
    <DataContext.Provider value={{ HelloWorld }}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataProvider };
