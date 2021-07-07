import ValidateForm from "./form";
import { Constants } from "./constants/constants";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>{Constants?.appHeading}</h1>
      <ValidateForm />
    </div>
  );
}
