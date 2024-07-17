import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "RED", value: "red here" },
    { label: "GREEN", value: "green here" },
    { label: "BLUE", value: "blue here" },
  ];

  return (
    <Dropdown options={options} selection={selection} onSelect={handleSelect} />
  );
}
export default App;
