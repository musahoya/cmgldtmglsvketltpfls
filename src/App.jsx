import React from 'react';
import useStore from './store/useStore';
import Camera from './components/Camera';
import Gallery from './components/Gallery';
import Ingredients from './components/Ingredients';
import Recipes from './components/Recipes';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  const { currentTab } = useStore();

  const renderContent = () => {
    switch (currentTab) {
      case 'camera':
        return <Camera />;
      case 'gallery':
        return <Gallery />;
      case 'ingredients':
        return <Ingredients />;
      case 'recipes':
        return <Recipes />;
      default:
        return <Camera />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🍳 냉장고 레시피</h1>
        <p>냉장고 속 재료로 만들 수 있는 요리를 찾아보세요!</p>
      </header>
      
      <main className="app-content">
        {renderContent()}
      </main>
      
      <Navigation />
    </div>
  );
}

export default App;
