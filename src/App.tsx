import "./App.css";

import React, { useEffect, useState } from "react";
import Counter from "./components/Counter/Counter";
import TextEditor from "./components/TextEditor/TextEditor";
import DisplayData from "./components/DisplayData/DisplayData";
import Form from "./components/Form/Form";

const App: React.FC = () => {
  const [unsavedChanges, setUnsavedChanges] = useState(false);

  useEffect(() => {
    const handleWindowClose = (e: BeforeUnloadEvent) => {
      if (unsavedChanges) {
        e.preventDefault();
        e.returnValue = ""; // This message will be shown to the user by the browser
      }
    };

    window.addEventListener("beforeunload", handleWindowClose);

    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, [unsavedChanges]);

  const handleUnsavedChanges = () => {
    setUnsavedChanges(true);
  };

  const handleSavedChanges = () => {
    setUnsavedChanges(false);
  };

  return (
    <div className="container">
      <section className="section1">
        <Counter></Counter>
        <TextEditor></TextEditor>
      </section>
      <section className="section2">
        <Form 
          onUnsavedChanges={handleUnsavedChanges}
          onSavedChanges={handleSavedChanges}
        />
        <DisplayData></DisplayData>
      </section>
    </div>
  );
};

export default App;
