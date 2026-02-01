import React, { useState, useMemo } from 'react';
import { Plus, X, Search, ChefHat, Trash2, Sparkles } from 'lucide-react';
import useStore from '../store/useStore';

const Ingredients = () => {
  const { 
    ingredientImages, 
    ingredients, 
    addIngredient, 
    removeIngredient, 
    clearIngredients,
    setCurrentTab 
  } = useStore();
  
  const [newIngredient, setNewIngredient] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // 모든 인식된 재료 수집
  const allRecognizedIngredients = useMemo(() => {
    const recognized = new Set();
    ingredientImages.forEach(img => {
      img.recognizedIngredients.forEach(ing => recognized.add(ing));
    });
    return Array.from(recognized);
  }, [ingredientImages]);

  // 전체 재료 목록 (인식 + 수동 추가)
  const allIngredients = useMemo(() => {
    const combined = new Set([...allRecognizedIngredients, ...ingredients]);
    return Array.from(combined);
  }, [allRecognizedIngredients, ingredients]);

  // 검색 필터링
  const filteredIngredients = useMemo(() => {
    if (!searchTerm) return allIngredients;
    return allIngredients.filter(ing => 
      ing.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [allIngredients, searchTerm]);

  // 재료 추가
  const handleAddIngredient = () => {
    const trimmed = newIngredient.trim();
    if (trimmed && !allIngredients.includes(trimmed)) {
      addIngredient(trimmed);
      setNewIngredient('');
    }
  };

  // 엔터 키 처리
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddIngredient();
    }
  };

  // 빠른 추가 재료 목록
  const quickAddIngredients = [
    '계란', '양파', '마늘', '대파', '당근', '감자', 
    '두부', '김치', '고추장', '간장', '된장', '참기름',
    '소금', '설탕', '우유', '버터', '치즈', '밥'
  ].filter(ing => !allIngredients.includes(ing));

  return (
    <div className="ingredients-container">
      <div className="ingredients-header">
        <h2>🥬 내 재료 목록</h2>
        <p>인식된 재료와 직접 추가한 재료를 관리하세요</p>
      </div>

      {/* 재료 검색 */}
      <div className="search-box">
        <Search size={20} />
        <input
          type="text"
          placeholder="재료 검색..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 재료 추가 입력 */}
      <div className="add-ingredient">
        <input
          type="text"
          placeholder="재료 직접 추가..."
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddIngredient} className="btn btn-primary">
          <Plus size={20} />
          추가
        </button>
      </div>

      {/* 빠른 추가 */}
      {quickAddIngredients.length > 0 && (
        <div className="quick-add">
          <h4><Sparkles size={16} /> 빠른 추가</h4>
          <div className="quick-add-tags">
            {quickAddIngredients.slice(0, 12).map((ing, idx) => (
              <button
                key={idx}
                className="quick-tag"
                onClick={() => addIngredient(ing)}
              >
                + {ing}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 재료 목록 */}
      <div className="ingredients-list">
        <div className="list-header">
          <h4>내 재료 ({filteredIngredients.length}개)</h4>
          {allIngredients.length > 0 && (
            <button 
              className="btn-text btn-danger"
              onClick={() => {
                if (confirm('모든 수동 추가 재료를 삭제하시겠습니까?')) {
                  clearIngredients();
                }
              }}
            >
              <Trash2 size={16} />
              전체 삭제
            </button>
          )}
        </div>

        {filteredIngredients.length === 0 ? (
          <div className="empty-list">
            <p>재료가 없습니다</p>
            <span>사진을 촬영하거나 재료를 직접 추가해보세요</span>
          </div>
        ) : (
          <div className="ingredient-tags-list">
            {filteredIngredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                <span className="ingredient-name">{ingredient}</span>
                <span className="ingredient-source">
                  {allRecognizedIngredients.includes(ingredient) ? '📷' : '✏️'}
                </span>
                {!allRecognizedIngredients.includes(ingredient) && (
                  <button 
                    className="remove-btn"
                    onClick={() => removeIngredient(ingredient)}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 레시피 찾기 버튼 */}
      <div className="find-recipe-section">
        <button 
          className="btn btn-large btn-primary"
          onClick={() => setCurrentTab('recipes')}
          disabled={allIngredients.length === 0}
        >
          <ChefHat size={24} />
          이 재료로 만들 수 있는 요리 찾기
          <span className="ingredient-count">{allIngredients.length}개 재료</span>
        </button>
      </div>

      {/* 통계 */}
      <div className="ingredients-stats">
        <div className="stat-item">
          <span className="stat-value">{ingredientImages.length}</span>
          <span className="stat-label">촬영한 사진</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{allRecognizedIngredients.length}</span>
          <span className="stat-label">인식된 재료</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">{ingredients.length}</span>
          <span className="stat-label">직접 추가</span>
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
