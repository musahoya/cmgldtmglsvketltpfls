import React, { useRef, useState, useCallback } from 'react';
import { Camera as CameraIcon, Upload, X, Check, RotateCcw, ImagePlus } from 'lucide-react';
import useStore from '../store/useStore';

const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  
  const { addImage, updateImageIngredients, setCurrentTab } = useStore();

  // 카메라 시작
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'environment', width: 1280, height: 720 }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreaming(true);
      }
    } catch (err) {
      console.error('카메라 접근 오류:', err);
      alert('카메라를 사용할 수 없습니다. 카메라 권한을 확인해주세요.');
    }
  };

  // 카메라 중지
  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
      setIsStreaming(false);
    }
  };

  // 사진 촬영
  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0);
      const imageData = canvas.toDataURL('image/jpeg', 0.8);
      setCapturedImage(imageData);
      stopCamera();
    }
  };

  // 파일 업로드 처리
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCapturedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 재료 인식 (시뮬레이션)
  const analyzeImage = useCallback(async () => {
    setIsAnalyzing(true);
    
    // 시뮬레이션: 실제로는 AI API를 사용
    const possibleIngredients = [
      ['계란', '우유', '버터', '치즈'],
      ['양파', '당근', '감자', '마늘'],
      ['돼지고기', '김치', '두부', '대파'],
      ['토마토', '오이', '양상추', '파프리카'],
      ['닭고기', '양념장', '고추장', '간장'],
      ['콩나물', '미역', '참기름', '소금'],
      ['스팸', '라면', '소시지', '김치'],
      ['파스타면', '베이컨', '크림', '파마산치즈']
    ];
    
    // 랜덤으로 재료 선택
    const randomIngredients = possibleIngredients[Math.floor(Math.random() * possibleIngredients.length)];
    
    // API 호출 시뮬레이션을 위한 딜레이
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsAnalyzing(false);
    return randomIngredients;
  }, []);

  // 이미지 저장 및 분석
  const saveAndAnalyze = async () => {
    if (capturedImage) {
      // 이미지 저장
      addImage(capturedImage);
      
      // 재료 인식
      const ingredients = await analyzeImage();
      
      // 가장 최근 이미지 ID 가져오기
      const state = useStore.getState();
      const latestImage = state.ingredientImages[state.ingredientImages.length - 1];
      
      if (latestImage) {
        updateImageIngredients(latestImage.id, ingredients);
      }
      
      // 재료 탭으로 이동
      setCapturedImage(null);
      setCurrentTab('ingredients');
    }
  };

  // 다시 촬영
  const retakePhoto = () => {
    setCapturedImage(null);
    startCamera();
  };

  return (
    <div className="camera-container">
      <div className="camera-header">
        <h2>📷 냉장고 재료 촬영</h2>
        <p>냉장고 속 재료를 촬영하거나 사진을 업로드하세요</p>
      </div>

      <div className="camera-view">
        {!isStreaming && !capturedImage && (
          <div className="camera-placeholder">
            <div className="placeholder-content">
              <CameraIcon size={64} />
              <p>카메라를 시작하거나<br />사진을 업로드하세요</p>
              <div className="camera-buttons">
                <button onClick={startCamera} className="btn btn-primary">
                  <CameraIcon size={20} />
                  카메라 시작
                </button>
                <button onClick={() => fileInputRef.current?.click()} className="btn btn-secondary">
                  <Upload size={20} />
                  사진 업로드
                </button>
              </div>
            </div>
          </div>
        )}

        {isStreaming && (
          <div className="camera-live">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="camera-video"
            />
            <div className="camera-controls">
              <button onClick={stopCamera} className="btn-icon btn-cancel">
                <X size={24} />
              </button>
              <button onClick={capturePhoto} className="btn-capture">
                <CameraIcon size={32} />
              </button>
              <button onClick={() => fileInputRef.current?.click()} className="btn-icon">
                <ImagePlus size={24} />
              </button>
            </div>
          </div>
        )}

        {capturedImage && (
          <div className="captured-image">
            <img src={capturedImage} alt="촬영된 이미지" />
            {isAnalyzing && (
              <div className="analyzing-overlay">
                <div className="spinner"></div>
                <p>재료 인식 중...</p>
              </div>
            )}
            {!isAnalyzing && (
              <div className="image-actions">
                <button onClick={retakePhoto} className="btn btn-secondary">
                  <RotateCcw size={20} />
                  다시 촬영
                </button>
                <button onClick={saveAndAnalyze} className="btn btn-primary">
                  <Check size={20} />
                  저장 및 분석
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
      />

      <div className="camera-tips">
        <h4>📌 촬영 팁</h4>
        <ul>
          <li>재료가 잘 보이도록 밝은 곳에서 촬영하세요</li>
          <li>여러 재료를 한 번에 촬영할 수 있어요</li>
          <li>냉장고 문을 활짝 열고 촬영하면 좋아요</li>
        </ul>
      </div>
    </div>
  );
};

export default Camera;
