import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import Table from './components/pages/Table/Table';
import Tables from './components/pages/Tables/Tables';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Tables />} />
        <Route path="/table/:id" element={<Table />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App;