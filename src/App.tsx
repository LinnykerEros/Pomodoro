import { Button } from "./components/button/Button";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div className="App">
        <Button variant="primary" />
        <Button variant="secondary" />
        <Button variant="danger" />
        <Button variant="success" />
        <Button />
      </div>
    </ThemeProvider>
  );
}

export { App };
