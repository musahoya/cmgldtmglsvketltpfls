import React from 'react';
import { Camera, Image, Leaf, ChefHat } from 'lucide-react';
import useStore from '../store/useStore';

const Navigation = () => {
  const { currentTab, setCurrentTab, ingredientImages, ingredients } = useStore();

  // 재료 총 개수 계산
  const totalIngredients = React.useMemo(() => {
    const recognized = new Set();
    ingredientImages.forEach(img => {
      img.recognizedIngredients.forEach(ing => recognized.add(ing));
    });
    ingredients.forEach(ing => recognized.add(ing));
    return recognized.size;
  }, [ingredientImages, ingredients]);

  const tabs = [
    { id: 'camera', label: '촬영', icon: Camera },
    { id: 'gallery', label: '갤러리', icon: Image, badge: ingredientImages.length },
    { id: 'ingredients', label: '재료', icon: Leaf, badge: totalIngredients },
    { id: 'recipes', label: '레시피', icon: ChefHat },
  ];

  return (
    <nav className="bottom-nav">
      {tabs.map(({ id, label, icon: Icon, badge }) => (
        <button
          key={id}
          className={`nav-item ${currentTab === id ? 'active' : ''}`}
          onClick={() => setCurrentTab(id)}
        >
          <div className="nav-icon-wrapper">
            <Icon size={24} />
            {badge > 0 && <span className="nav-badge">{badge}</span>}
          </div>
          <span className="nav-label">{label}</span>
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
