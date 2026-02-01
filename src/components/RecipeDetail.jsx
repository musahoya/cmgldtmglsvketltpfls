import React, { useState } from 'react';
import { 
  ArrowLeft, Clock, Users, Flame, Heart, Share2, 
  Youtube, ExternalLink, Check, X, ChefHat, Lightbulb,
  PlayCircle
} from 'lucide-react';
import { getYoutubeSearchUrl, getYoutubeVideos } from '../services/recipeService';

const RecipeDetail = ({ recipe, onBack, userIngredients = [] }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([]);

  // 유튜브 비디오 (레시피 객체 전달로 실제 정보 사용)
  const youtubeVideos = getYoutubeVideos(recipe);

  // 재료 보유 여부 확인
  const hasIngredient = (ingredient) => {
    return userIngredients.some(ui => 
      ui.toLowerCase().includes(ingredient.toLowerCase()) ||
      ingredient.toLowerCase().includes(ui.toLowerCase())
    );
  };

  // 단계 완료 토글
  const toggleStepComplete = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(completedSteps.filter(i => i !== index));
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  // 공유하기
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${recipe.name} 레시피`,
          text: `${recipe.name} 만들기 - ${recipe.time}, ${recipe.difficulty}`,
          url: window.location.href
        });
      } catch (err) {
        console.log('공유 취소');
      }
    } else {
      // 클립보드에 복사
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 복사되었습니다!');
    }
  };

  return (
    <div className="recipe-detail">
      {/* 헤더 */}
      <div className="detail-header">
        <button className="btn-back" onClick={onBack}>
          <ArrowLeft size={24} />
        </button>
        <div className="header-actions">
          <button 
            className={`btn-icon ${isFavorite ? 'active' : ''}`}
            onClick={() => setIsFavorite(!isFavorite)}
          >
            <Heart size={24} fill={isFavorite ? '#ff6b6b' : 'none'} />
          </button>
          <button className="btn-icon" onClick={handleShare}>
            <Share2 size={24} />
          </button>
        </div>
      </div>

      {/* 이미지 */}
      <div className="detail-image">
        <img src={recipe.image} alt={recipe.name} />
        <div className="image-overlay">
          <h1>{recipe.name}</h1>
          <p>{recipe.nameEn}</p>
        </div>
        {/* 유튜브 원본 영상 바로가기 */}
        {recipe.youtube && (
          <a 
            href={recipe.youtube.url}
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-badge"
          >
            <Youtube size={16} />
            <span>백종원 원본 영상</span>
          </a>
        )}
      </div>

      {/* 기본 정보 */}
      <div className="detail-info">
        <div className="info-cards">
          <div className="info-card">
            <Clock size={24} />
            <span className="info-value">{recipe.time}</span>
            <span className="info-label">조리시간</span>
          </div>
          <div className="info-card">
            <Flame size={24} />
            <span className="info-value">{recipe.difficulty}</span>
            <span className="info-label">난이도</span>
          </div>
          <div className="info-card">
            <Users size={24} />
            <span className="info-value">{recipe.servings}</span>
            <span className="info-label">분량</span>
          </div>
          <div className="info-card">
            <span className="info-value">{recipe.calories}</span>
            <span className="info-label">칼로리</span>
          </div>
        </div>

        {/* 태그 */}
        <div className="detail-tags">
          {recipe.tags.map((tag, idx) => (
            <span key={idx} className="detail-tag">{tag}</span>
          ))}
        </div>
      </div>

      {/* 재료 섹션 */}
      <div className="detail-section">
        <h2>🥗 필요한 재료</h2>
        <div className="ingredients-checklist">
          {recipe.ingredients.map((ingredient, idx) => {
            const owned = hasIngredient(ingredient);
            const isRequired = recipe.requiredIngredients.includes(ingredient);
            return (
              <div 
                key={idx} 
                className={`ingredient-check ${owned ? 'owned' : 'missing'}`}
              >
                <span className="check-icon">
                  {owned ? <Check size={18} /> : <X size={18} />}
                </span>
                <span className="ingredient-name">
                  {ingredient}
                  {isRequired && <span className="required-mark">*필수</span>}
                </span>
                <span className="ingredient-status">
                  {owned ? '보유중' : '필요'}
                </span>
              </div>
            );
          })}
        </div>
        <p className="ingredients-note">
          <strong>{recipe.matchingIngredients?.length || 0}</strong>개 재료 보유 / 
          총 <strong>{recipe.ingredients.length}</strong>개 필요
        </p>
      </div>

      {/* 조리 순서 */}
      <div className="detail-section">
        <h2>👨‍🍳 조리 순서</h2>
        <div className="cooking-steps">
          {recipe.steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`cooking-step ${completedSteps.includes(idx) ? 'completed' : ''} ${currentStep === idx ? 'current' : ''}`}
              onClick={() => toggleStepComplete(idx)}
            >
              <div className="step-number">
                {completedSteps.includes(idx) ? <Check size={20} /> : idx + 1}
              </div>
              <div className="step-content">
                <p>{step}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="step-progress">
          <div 
            className="progress-bar"
            style={{ width: `${(completedSteps.length / recipe.steps.length) * 100}%` }}
          />
        </div>
        <p className="progress-text">
          {completedSteps.length} / {recipe.steps.length} 단계 완료
        </p>
      </div>

      {/* 요리 팁 */}
      {recipe.tips && (
        <div className="detail-section tips-section">
          <h2><Lightbulb size={20} /> 요리 팁</h2>
          <div className="tip-box">
            <p>{recipe.tips}</p>
          </div>
        </div>
      )}

      {/* 유튜브 동영상 */}
      <div className="detail-section">
        <h2><Youtube size={20} /> 관련 요리 영상</h2>
        <div className="youtube-section">
          {youtubeVideos.map((video) => (
            <a 
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-card"
            >
              <div className="youtube-thumbnail">
                <div className="thumbnail-placeholder">
                  <PlayCircle size={48} />
                </div>
                <span className="youtube-duration">{video.duration}</span>
              </div>
              <div className="youtube-info">
                <h4>{video.title}</h4>
                <p className="youtube-channel">{video.channel}</p>
                <p className="youtube-views">{video.views}</p>
              </div>
            </a>
          ))}
        </div>
        <a 
          href={getYoutubeSearchUrl(recipe.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-youtube-more"
        >
          <Youtube size={20} />
          YouTube에서 더 많은 영상 보기
          <ExternalLink size={16} />
        </a>
      </div>

      {/* 하단 액션 */}
      <div className="detail-bottom-actions">
        <button className="btn btn-large btn-primary" onClick={onBack}>
          <ChefHat size={24} />
          다른 레시피 보기
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
