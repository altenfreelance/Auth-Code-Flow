import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import TestComponent from './TestComponent';
import { Route } from 'react-router-dom';
import {Container, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
      <Container>
        <Row>
          <LoginBtn />
          <LogoutBtn />
        </Row>
        <Route path="/poc" component={TestComponent} />
      </Container>
  );
}

export default App;
