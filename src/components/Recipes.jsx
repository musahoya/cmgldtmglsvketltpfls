import React, { useState, useMemo, useEffect } from 'react';
import { 
  Clock, Users, Flame, ChefHat, Star, 
  ExternalLink, Youtube, Search, Filter, X, Check
} from 'lucide-react';
import useStore from '../store/useStore';
import { searchRecipesByIngredients, getYoutubeSearchUrl } from '../services/recipeService';
import RecipeDetail from './RecipeDetail';

const Recipes = () => {
  const { ingredientImages, ingredients, setCurrentTab } = useStore();
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTag, setFilterTag] = useState('all');

  // 모든 재료 수집
  const allIngredients = useMemo(() => {
    const recognized = new Set();
    ingredientImages.forEach(img => {
      img.recognizedIngredients.forEach(ing => recognized.add(ing));
    });
    ingredients.forEach(ing => recognized.add(ing));
    return Array.from(recognized);
  }, [ingredientImages, ingredients]);

  // 레시피 검색
  const recipes = useMemo(() => {
    return searchRecipesByIngredients(allIngredients);
  }, [allIngredients]);

  // 필터링된 레시피
  const filteredRecipes = useMemo(() => {
    let filtered = recipes;
    
    // 검색어 필터
    if (searchTerm) {
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.nameEn.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // 태그 필터
    if (filterTag !== 'all') {
      filtered = filtered.filter(r => r.tags.includes(filterTag));
    }
    
    return filtered;
  }, [recipes, searchTerm, filterTag]);

  // 사용 가능한 태그들
  const availableTags = useMemo(() => {
    const tags = new Set();
    recipes.forEach(r => r.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, [recipes]);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case '쉬움': return 'difficulty-easy';
      case '보통': return 'difficulty-medium';
      case '어려움': return 'difficulty-hard';
      default: return '';
    }
  };

  if (allIngredients.length === 0) {
    return (
      <div className="recipes-container">
        <div className="recipes-header">
          <h2>🍳 추천 레시피</h2>
          <p>재료를 먼저 등록해주세요</p>
        </div>
        <div className="recipes-empty">
          <ChefHat size={64} />
          <h3>재료가 없습니다</h3>
          <p>냉장고 사진을 촬영하거나 재료를 추가하면<br />만들 수 있는 요리를 추천해드립니다!</p>
          <div className="empty-actions">
            <button onClick={() => setCurrentTab('camera')} className="btn btn-primary">
              📷 사진 촬영
            </button>
            <button onClick={() => setCurrentTab('ingredients')} className="btn btn-secondary">
              ✏️ 재료 추가
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (selectedRecipe) {
    return (
      <RecipeDetail 
        recipe={selectedRecipe} 
        onBack={() => setSelectedRecipe(null)}
        userIngredients={allIngredients}
      />
    );
  }

  return (
    <div className="recipes-container">
      <div className="recipes-header">
        <h2>🍳 추천 레시피</h2>
        <p>{allIngredients.length}개 재료로 만들 수 있는 요리 {filteredRecipes.length}개</p>
      </div>

      {/* 현재 재료 표시 */}
      <div className="current-ingredients">
        <h4>내 재료</h4>
        <div className="ingredient-mini-tags">
          {allIngredients.slice(0, 8).map((ing, idx) => (
            <span key={idx} className="mini-tag">{ing}</span>
          ))}
          {allIngredients.length > 8 && (
            <span className="mini-tag more">+{allIngredients.length - 8}</span>
          )}
        </div>
      </div>

      {/* 검색 및 필터 */}
      <div className="recipes-filters">
        <div className="search-box">
          <Search size={20} />
          <input
            type="text"
            placeholder="레시피 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-tags">
          <button 
            className={`filter-tag ${filterTag === 'all' ? 'active' : ''}`}
            onClick={() => setFilterTag('all')}
          >
            전체
          </button>
          {availableTags.slice(0, 6).map((tag, idx) => (
            <button
              key={idx}
              className={`filter-tag ${filterTag === tag ? 'active' : ''}`}
              onClick={() => setFilterTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* 레시피 그리드 */}
      {filteredRecipes.length === 0 ? (
        <div className="no-recipes">
          <p>검색 결과가 없습니다</p>
        </div>
      ) : (
        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <div 
              key={recipe.id} 
              className="recipe-card"
              onClick={() => setSelectedRecipe(recipe)}
            >
              <div className="recipe-image">
                <img src={recipe.image} alt={recipe.name} />
                <div className="recipe-match">
                  <span className="match-percentage">{recipe.matchPercentage}%</span>
                  <span className="match-label">재료 일치</span>
                </div>
                {recipe.hasRequiredIngredients && (
                  <div className="required-badge">
                    <Check size={14} /> 필수 재료 보유
                  </div>
                )}
              </div>
              <div className="recipe-info">
                <h3>{recipe.name}</h3>
                <p className="recipe-name-en">{recipe.nameEn}</p>
                <div className="recipe-meta">
                  <span><Clock size={14} /> {recipe.time}</span>
                  <span className={getDifficultyColor(recipe.difficulty)}>
                    <Flame size={14} /> {recipe.difficulty}
                  </span>
                  <span><Users size={14} /> {recipe.servings}</span>
                </div>
                <div className="recipe-ingredients-preview">
                  {recipe.matchingIngredients.slice(0, 4).map((ing, idx) => (
                    <span key={idx} className="matched-ingredient">{ing}</span>
                  ))}
                  {recipe.matchingIngredients.length > 4 && (
                    <span className="more-ingredients">
                      +{recipe.matchingIngredients.length - 4}
                    </span>
                  )}
                </div>
                <div className="recipe-tags">
                  {recipe.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="recipe-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="recipe-actions">
                <button 
                  className="btn-youtube"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(getYoutubeSearchUrl(recipe.name), '_blank');
                  }}
                >
                  <Youtube size={18} />
                  영상 보기
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipes;
