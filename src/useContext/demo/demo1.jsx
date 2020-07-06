import React, { useState, useContext } from 'react';
import { Button } from 'antd';

const themes = {
  light: {
    key: "light",
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    key: "dark",
    foreground: "#fff",
    background: "red"
  }
};

const ThemeContext = React.createContext(themes.light);

function App() {
  const [state, setState] = useState(themes.dark)
  function handelClickThemes() {
    console.log(state.key);
    if (state.key === "dark") {
      setState(themes.light);
      return;
    }
    setState(themes.dark);
  }
  return (
    <ThemeContext.Provider value={state}>
      <Toolbar />
      <Button onClick={() => handelClickThemes()}>change</Button>
    </ThemeContext.Provider>
  );
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return (
    <button style={{ background: theme.background, color: theme.foreground }}>
      I am styled by theme context!
    </button>
  );
}
export default App;
