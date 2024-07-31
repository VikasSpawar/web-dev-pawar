import { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    // initial state values here
    username: '',
    isLoggedIn: false,
    toolTip:'',
   
  });

const handleToolTip=(toolTipData)=>{
  setState({...state,toolTip:""})

setTimeout(() => {
  
    setState({...state,toolTip:toolTipData})
}, 300);


}
  
    

  
   
  const login = (username) => {
    setState({ username, isLoggedIn: true });
  };

  const logout = () => {
    setState({ username: '', isLoggedIn: false });
  };

  return (
    <MyContext.Provider value={{ state, login, logout ,handleToolTip}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };



