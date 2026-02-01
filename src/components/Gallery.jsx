import React, { useState } from 'react';
import { Trash2, Eye, Calendar, Tag, ImageOff, RefreshCw } from 'lucide-react';
import useStore from '../store/useStore';

const Gallery = () => {
  const { ingredientImages, removeImage, setCurrentTab } = useStore();
  const [selectedImage, setSelectedImage] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleDelete = (id, e) => {
    e.stopPropagation();
    if (confirm('이 이미지를 삭제하시겠습니까?')) {
      removeImage(id);
      if (selectedImage?.id === id) {
        setSelectedImage(null);
      }
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (ingredientImages.length === 0) {
    return (
      <div className="gallery-container">
        <div className="gallery-header">
          <h2>🖼️ 저장된 재료 사진</h2>
          <p>촬영한 냉장고 재료 사진들이 여기에 저장됩니다</p>
        </div>
        <div className="gallery-empty">
          <ImageOff size={64} />
          <h3>저장된 사진이 없습니다</h3>
          <p>카메라 탭에서 냉장고 재료를 촬영해보세요!</p>
          <button 
            onClick={() => setCurrentTab('camera')} 
            className="btn btn-primary"
          >
            📷 사진 촬영하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h2>🖼️ 저장된 재료 사진</h2>
        <p>총 {ingredientImages.length}개의 사진이 저장되어 있습니다</p>
      </div>

      <div className="gallery-grid">
        {ingredientImages.map((image) => (
          <div 
            key={image.id} 
            className="gallery-item"
            onClick={() => handleImageClick(image)}
          >
            <div className="gallery-image-wrapper">
              <img src={image.url} alt="재료 이미지" />
              <div className="gallery-overlay">
                <button className="btn-icon view-btn">
                  <Eye size={20} />
                </button>
                <button 
                  className="btn-icon delete-btn"
                  onClick={(e) => handleDelete(image.id, e)}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
            <div className="gallery-item-info">
              <div className="gallery-date">
                <Calendar size={14} />
                <span>{formatDate(image.createdAt)}</span>
              </div>
              {image.recognizedIngredients.length > 0 && (
                <div className="gallery-ingredients">
                  <Tag size={14} />
                  <span>{image.recognizedIngredients.slice(0, 3).join(', ')}
                    {image.recognizedIngredients.length > 3 && ` 외 ${image.recognizedIngredients.length - 3}개`}
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 이미지 상세 모달 */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content image-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-image">
              <img src={selectedImage.url} alt="재료 이미지" />
            </div>
            <div className="modal-info">
              <h3>인식된 재료</h3>
              <div className="modal-date">
                <Calendar size={16} />
                <span>{formatDate(selectedImage.createdAt)}</span>
              </div>
              {selectedImage.recognizedIngredients.length > 0 ? (
                <div className="ingredient-tags">
                  {selectedImage.recognizedIngredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">
                      {ingredient}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="no-ingredients">인식된 재료가 없습니다</p>
              )}
              <div className="modal-actions">
                <button 
                  className="btn btn-danger"
                  onClick={() => {
                    handleDelete(selectedImage.id, { stopPropagation: () => {} });
                  }}
                >
                  <Trash2 size={18} />
                  삭제
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
