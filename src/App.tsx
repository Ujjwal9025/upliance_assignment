import "./App.css";

import React, { useEffect, useState } from 'react';
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
        e.returnValue = ''; // This message will be shown to the user by the browser
      }
    };

    window.addEventListener('beforeunload', handleWindowClose);

    return () => {
      window.removeEventListener('beforeunload', handleWindowClose);
    };
  }, [unsavedChanges]);

  const handleUnsavedChanges = () => {
    setUnsavedChanges(true);
  };

  const handleSavedChanges = () => {
    setUnsavedChanges(false);
  };

  return (
    <div>
      <Counter></Counter>
      <Form onUnsavedChanges={handleUnsavedChanges} onSavedChanges={handleSavedChanges} />
      <TextEditor></TextEditor>
      <DisplayData></DisplayData>
    </div>
  );
};

export default App;
