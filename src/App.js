import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import PatientForm from "./components/PatientForm";

function App() {
  return (
    <main style={{ height: "100vh", width: "100%" }}>
      <PatientForm />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
        integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
        crossorigin="anonymous"
      />
    </main>
  );
}

export default App;
