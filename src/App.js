import '@/App.less';//这里的@是在craco.config.js中webpack中配置的别名
import Home from './pages/home/index';

function App() {
  return (
    <div>
      <Home></Home>
    </div>
  );
}

export default App;
