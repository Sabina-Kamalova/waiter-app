import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound/NotFound';
import Table from './components/pages/Table/Table';
import Tables from './components/pages/Tables/Tables';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTables } from './redux/tablesRedux';
import { fetchStatus } from './redux/statusRedux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchStatus()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Tables />} />
        <Route path="/table/:tableId" element={<Table />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App;