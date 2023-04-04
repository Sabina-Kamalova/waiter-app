import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import Table from './components/pages/Table/Table';
import Tables from './components/pages/Tables/Tables';

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Tables />} />
        <Route path="/table/:id" element={<Table />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  )
}

export default App;