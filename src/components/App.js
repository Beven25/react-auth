import React from "react"
import Signup from "./Signup";
import { AuthProvider } from "../contexts/AuthContext"
import { Container } from "react-bootstrap"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Container
    className="d-flex align-items-center justify-content-center"
    style={{ minHeight: "100vh" }}
  >
    <div className="w-100" style={{ maxWidth: "400px" }}>
      
      <Router>
        <AuthProvider>
        <Routes>
            <Route path="/signup" component={Signup} />
        </Routes>
        </AuthProvider>
      </Router>
    </div>
  </Container>

    
  )
}


export default App;
