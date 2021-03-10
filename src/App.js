import './App.css';
import { Route } from 'react-router-dom';

import Blogs from './components/Blogs/Blogs';
import BlogContent from './components/BlogEdit/BlogContent/BlogContent';
import Layout from './containers/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Route path='/edit' exact component={BlogContent} />
        <Route path='/' exact component={Blogs} />
      </Layout>
    </div>
  );
}

export default App;
