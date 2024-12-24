import "../global.css";
import "../styleguide.css";
import { ElementMasuk } from "./screens/ElementMasuk";
import { ElementDaftar } from "./screens/ElementDaftar";
import { ElementBerandaHover } from "./screens/ElementBerandaHover";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './components/store/store';
import ListView from './screens/ListView/ListView';


const Main = () => {
    return (
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<ElementMasuk />} />
            <Route path="/ElementDaftar" element={<ElementDaftar />} />
            <Route path="/ElementBerandaHover" element={<ElementBerandaHover />} />
            <Route path="/ListView" element={<ListView />} />
          </Routes>
        </Router>
      </Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);

export default Main;


