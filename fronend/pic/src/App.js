import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import BgIcon from './assets/img/cta-bg.jpg';

var sectionStyle = {
  backgroundImage: `url(${BgIcon})`,
  width: '100%',
  height: '500px',
};

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100" style={sectionStyle}>
        <header>
          <Navbar bg="light" variant="light" expand="lg">
            <Container>
              <Navbar.Brand>REAL-TIME CHAT</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <a href="/admin" className="nav-link" target="_blank">
                    Admin
                  </a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/admin" element={<AdminPage />}></Route>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer className="mt-auto">
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import BgIcon from './assets/img/cta-bg.jpg';

var sectionStyle = {
  backgroundImage: `url(${BgIcon})`,
  width: '100%',
  height: '500px',
};

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100" style={sectionStyle}>
        <header>
          <Navbar bg="light" variant="light" expand="lg">
            <Container>
              <Navbar.Brand>REAL-TIME CHAT</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <a href="/admin" className="nav-link" target="_blank">
                    Admin
                  </a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/admin" element={<AdminPage />}></Route>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer className="mt-auto">
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import BgIcon from './assets/img/cta-bg.jpg';

var sectionStyle = {
  backgroundImage: `url(${BgIcon})`,
  width: '100%',
  height: '500px',
};

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100" style={sectionStyle}>
        <header>
          <Navbar bg="light" variant="light" expand="lg">
            <Container>
              <Navbar.Brand>REAL-TIME CHAT</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <a href="/admin" className="nav-link" target="_blank">
                    Admin
                  </a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/admin" element={<AdminPage />}></Route>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer className="mt-auto">
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import BgIcon from './assets/img/cta-bg.jpg';

var sectionStyle = {
  backgroundImage: `url(${BgIcon})`,
  width: '100%',
  height: '500px',
};

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100" style={sectionStyle}>
        <header>
          <Navbar bg="light" variant="light" expand="lg">
            <Container>
              <Navbar.Brand>REAL-TIME CHAT</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto  w-100  justify-content-end">
                  <a href="/admin" className="nav-link" target="_blank">
                    Admin
                  </a>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/admin" element={<AdminPage />}></Route>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Container>
        </main>
        <footer className="mt-auto">
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

export default App;
