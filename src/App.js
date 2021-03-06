import './App.css';
import { Route } from 'react-router-dom';

import Blogs from './components/Blogs/Blogs';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path='/' exact component={Blogs} />
      </Layout>
    </div>
  );
}

export default App;
