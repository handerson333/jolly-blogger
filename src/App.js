import './App.css';
import { Route } from 'react-router-dom';

import Blogs from './containers/Blogs/Blogs';
import BlogContent from './containers/BlogEdit/BlogContent/BlogContent';
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
