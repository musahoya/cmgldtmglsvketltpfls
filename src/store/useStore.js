import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set, get) => ({
      // 저장된 재료 이미지들
      ingredientImages: [],
      
      // 인식된 재료 목록
      ingredients: [],
      
      // 추천 레시피들
      recipes: [],
      
      // 현재 선택된 레시피
      selectedRecipe: null,
      
      // 유튜브 비디오들
      youtubeVideos: [],
      
      // 로딩 상태
      isLoading: false,
      
      // 현재 탭
      currentTab: 'camera',
      
      // 이미지 추가
      addImage: (image) => set((state) => ({
        ingredientImages: [...state.ingredientImages, {
          id: Date.now(),
          url: image,
          createdAt: new Date().toISOString(),
          recognizedIngredients: []
        }]
      })),
      
      // 이미지 삭제
      removeImage: (id) => set((state) => ({
        ingredientImages: state.ingredientImages.filter(img => img.id !== id)
      })),
      
      // 이미지의 인식된 재료 업데이트
      updateImageIngredients: (id, ingredients) => set((state) => ({
        ingredientImages: state.ingredientImages.map(img =>
          img.id === id ? { ...img, recognizedIngredients: ingredients } : img
        )
      })),
      
      // 재료 목록 설정
      setIngredients: (ingredients) => set({ ingredients }),
      
      // 재료 추가
      addIngredient: (ingredient) => set((state) => ({
        ingredients: state.ingredients.includes(ingredient) 
          ? state.ingredients 
          : [...state.ingredients, ingredient]
      })),
      
      // 재료 제거
      removeIngredient: (ingredient) => set((state) => ({
        ingredients: state.ingredients.filter(i => i !== ingredient)
      })),
      
      // 모든 재료 초기화
      clearIngredients: () => set({ ingredients: [] }),
      
      // 레시피 설정
      setRecipes: (recipes) => set({ recipes }),
      
      // 선택된 레시피 설정
      setSelectedRecipe: (recipe) => set({ selectedRecipe: recipe }),
      
      // 유튜브 비디오 설정
      setYoutubeVideos: (videos) => set({ youtubeVideos: videos }),
      
      // 로딩 상태 설정
      setIsLoading: (loading) => set({ isLoading: loading }),
      
      // 탭 변경
      setCurrentTab: (tab) => set({ currentTab: tab }),
      
      // 모든 이미지에서 재료 수집
      getAllIngredients: () => {
        const state = get();
        const allIngredients = new Set(state.ingredients);
        state.ingredientImages.forEach(img => {
          img.recognizedIngredients.forEach(ing => allIngredients.add(ing));
        });
        return Array.from(allIngredients);
      },
      
      // 모든 데이터 초기화
      resetAll: () => set({
        ingredientImages: [],
        ingredients: [],
        recipes: [],
        selectedRecipe: null,
        youtubeVideos: [],
        isLoading: false
      })
    }),
    {
      name: 'fridge-recipe-storage',
    }
  )
);

export default useStore;
