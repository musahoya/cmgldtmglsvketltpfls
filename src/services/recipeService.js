// 한국 요리 레시피 데이터베이스
const recipeDatabase = [
  {
    id: 1,
    name: "김치찌개",
    nameEn: "Kimchi Jjigae",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400",
    ingredients: ["김치", "돼지고기", "두부", "양파", "대파", "고춧가루", "마늘"],
    requiredIngredients: ["김치"],
    time: "30분",
    difficulty: "쉬움",
    calories: "250kcal",
    servings: "2인분",
    steps: [
      "돼지고기를 한입 크기로 썰어 냄비에 볶습니다.",
      "김치를 넣고 함께 볶아줍니다.",
      "물을 붓고 끓여줍니다.",
      "두부와 양파를 넣고 10분간 더 끓입니다.",
      "대파를 넣고 마무리합니다."
    ],
    tips: "오래된 김치일수록 더 맛있어요!",
    tags: ["한식", "찌개", "매운맛"]
  },
  {
    id: 2,
    name: "계란말이",
    nameEn: "Rolled Omelette",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400",
    ingredients: ["계란", "당근", "양파", "대파", "소금"],
    requiredIngredients: ["계란"],
    time: "15분",
    difficulty: "보통",
    calories: "180kcal",
    servings: "2인분",
    steps: [
      "계란을 풀고 소금으로 간합니다.",
      "야채를 잘게 다져 계란물에 섞습니다.",
      "팬에 기름을 두르고 약불에서 계란물을 부어줍니다.",
      "가장자리가 익으면 돌돌 말아줍니다.",
      "먹기 좋게 썰어 접시에 담습니다."
    ],
    tips: "약불에서 천천히 익혀야 부드러워요!",
    tags: ["한식", "반찬", "간단요리"]
  },
  {
    id: 3,
    name: "된장찌개",
    nameEn: "Doenjang Jjigae",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
    ingredients: ["된장", "두부", "애호박", "양파", "감자", "대파", "청양고추", "마늘"],
    requiredIngredients: ["된장", "두부"],
    time: "25분",
    difficulty: "쉬움",
    calories: "200kcal",
    servings: "2인분",
    steps: [
      "육수를 준비하고 된장을 풀어줍니다.",
      "감자를 넣고 먼저 익힙니다.",
      "애호박, 양파를 넣고 끓입니다.",
      "두부를 넣고 5분간 더 끓입니다.",
      "대파와 고추를 넣어 마무리합니다."
    ],
    tips: "멸치육수를 사용하면 더 깊은 맛이 나요!",
    tags: ["한식", "찌개", "건강식"]
  },
  {
    id: 4,
    name: "볶음밥",
    nameEn: "Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
    ingredients: ["밥", "계란", "당근", "양파", "대파", "햄", "간장"],
    requiredIngredients: ["밥", "계란"],
    time: "15분",
    difficulty: "쉬움",
    calories: "400kcal",
    servings: "1인분",
    steps: [
      "야채와 햄을 작게 다집니다.",
      "팬에 기름을 두르고 계란을 스크램블합니다.",
      "야채와 햄을 넣고 볶습니다.",
      "밥을 넣고 잘 섞어가며 볶습니다.",
      "간장으로 간을 맞추고 대파를 뿌립니다."
    ],
    tips: "찬밥을 사용하면 더 맛있어요!",
    tags: ["한식", "간단요리", "한그릇"]
  },
  {
    id: 5,
    name: "제육볶음",
    nameEn: "Spicy Pork Stir-fry",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
    ingredients: ["돼지고기", "양파", "대파", "당근", "고추장", "고춧가루", "간장", "마늘", "설탕"],
    requiredIngredients: ["돼지고기", "고추장"],
    time: "25분",
    difficulty: "보통",
    calories: "450kcal",
    servings: "2인분",
    steps: [
      "돼지고기를 먹기 좋게 썰어 양념에 재웁니다.",
      "양념: 고추장 2스푼, 고춧가루 1스푼, 간장 1스푼, 설탕 1스푼, 다진마늘",
      "팬에 고기를 넣고 중불에서 볶습니다.",
      "양파와 당근을 넣고 함께 볶습니다.",
      "대파를 넣고 마무리합니다."
    ],
    tips: "고기를 30분 이상 재우면 더 맛있어요!",
    tags: ["한식", "반찬", "매운맛", "밥도둑"]
  },
  {
    id: 6,
    name: "감자전",
    nameEn: "Potato Pancake",
    image: "https://images.unsplash.com/photo-1619684003317-526b9d3bb29a?w=400",
    ingredients: ["감자", "양파", "대파", "소금", "부침가루"],
    requiredIngredients: ["감자"],
    time: "20분",
    difficulty: "쉬움",
    calories: "220kcal",
    servings: "2인분",
    steps: [
      "감자를 강판에 갈아줍니다.",
      "양파와 대파를 다져 넣습니다.",
      "소금으로 간을 합니다.",
      "팬에 기름을 두르고 동그랗게 부칩니다.",
      "노릇노릇하게 양면을 구워줍니다."
    ],
    tips: "감자 전분물을 빼지 마세요, 바삭해져요!",
    tags: ["한식", "전", "간식"]
  },
  {
    id: 7,
    name: "참치김치볶음밥",
    nameEn: "Tuna Kimchi Fried Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
    ingredients: ["밥", "참치캔", "김치", "계란", "대파", "참기름", "김가루"],
    requiredIngredients: ["밥", "참치캔", "김치"],
    time: "15분",
    difficulty: "쉬움",
    calories: "450kcal",
    servings: "1인분",
    steps: [
      "김치를 잘게 썰어줍니다.",
      "팬에 김치를 볶다가 참치를 넣습니다.",
      "밥을 넣고 잘 섞어가며 볶습니다.",
      "계란 프라이를 얹습니다.",
      "참기름과 김가루를 뿌려 마무리합니다."
    ],
    tips: "참치캔의 기름을 조금 넣으면 고소해요!",
    tags: ["한식", "간단요리", "한그릇"]
  },
  {
    id: 8,
    name: "소고기미역국",
    nameEn: "Beef Seaweed Soup",
    image: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=400",
    ingredients: ["소고기", "미역", "마늘", "국간장", "참기름"],
    requiredIngredients: ["미역", "소고기"],
    time: "40분",
    difficulty: "보통",
    calories: "180kcal",
    servings: "4인분",
    steps: [
      "미역을 물에 불려 준비합니다.",
      "소고기를 참기름에 볶습니다.",
      "불린 미역을 넣고 함께 볶습니다.",
      "물을 붓고 30분간 끓입니다.",
      "국간장과 소금으로 간을 맞춥니다."
    ],
    tips: "미역을 충분히 볶아야 구수해요!",
    tags: ["한식", "국", "건강식", "생일"]
  },
  {
    id: 9,
    name: "오이무침",
    nameEn: "Cucumber Salad",
    image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?w=400",
    ingredients: ["오이", "고춧가루", "마늘", "식초", "설탕", "소금", "참기름"],
    requiredIngredients: ["오이"],
    time: "10분",
    difficulty: "쉬움",
    calories: "50kcal",
    servings: "2인분",
    steps: [
      "오이를 어슷썰기 합니다.",
      "소금에 절여 물기를 뺍니다.",
      "양념장을 만듭니다: 고춧가루, 마늘, 식초, 설탕",
      "오이와 양념장을 버무립니다.",
      "참기름을 둘러 마무리합니다."
    ],
    tips: "절인 후 물기를 꼭 짜주세요!",
    tags: ["한식", "반찬", "상큼"]
  },
  {
    id: 10,
    name: "스팸김치찌개",
    nameEn: "Spam Kimchi Stew",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400",
    ingredients: ["스팸", "김치", "두부", "양파", "대파", "고춧가루"],
    requiredIngredients: ["스팸", "김치"],
    time: "20분",
    difficulty: "쉬움",
    calories: "350kcal",
    servings: "2인분",
    steps: [
      "스팸을 한입 크기로 썹니다.",
      "김치를 팬에 볶다가 스팸을 넣습니다.",
      "물을 붓고 끓입니다.",
      "두부와 양파를 넣습니다.",
      "대파를 넣고 마무리합니다."
    ],
    tips: "스팸을 먼저 구우면 더 고소해요!",
    tags: ["한식", "찌개", "간단요리"]
  },
  {
    id: 11,
    name: "파스타",
    nameEn: "Pasta",
    image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400",
    ingredients: ["파스타면", "베이컨", "양파", "마늘", "크림", "파마산치즈", "올리브오일"],
    requiredIngredients: ["파스타면"],
    time: "25분",
    difficulty: "보통",
    calories: "550kcal",
    servings: "2인분",
    steps: [
      "파스타면을 삶습니다.",
      "베이컨과 마늘을 올리브오일에 볶습니다.",
      "양파를 넣고 투명해질 때까지 볶습니다.",
      "크림을 넣고 소스를 만듭니다.",
      "면을 넣고 버무린 후 치즈를 뿌립니다."
    ],
    tips: "면수를 조금 넣으면 소스가 부드러워요!",
    tags: ["양식", "면요리", "크림"]
  },
  {
    id: 12,
    name: "토마토 계란볶음",
    nameEn: "Tomato Egg Stir-fry",
    image: "https://images.unsplash.com/photo-1482049016gy9-b62191f32c27?w=400",
    ingredients: ["토마토", "계란", "대파", "소금", "설탕"],
    requiredIngredients: ["토마토", "계란"],
    time: "10분",
    difficulty: "쉬움",
    calories: "200kcal",
    servings: "2인분",
    steps: [
      "토마토를 깍둑썰기 합니다.",
      "계란을 풀어 소금으로 간합니다.",
      "팬에 계란을 스크램블합니다.",
      "토마토를 넣고 볶습니다.",
      "설탕을 약간 넣어 맛을 조절합니다."
    ],
    tips: "토마토를 먼저 볶으면 더 달콤해요!",
    tags: ["중식", "간단요리", "건강식"]
  },
  {
    id: 13,
    name: "콩나물국",
    nameEn: "Bean Sprout Soup",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
    ingredients: ["콩나물", "대파", "마늘", "국간장", "소금"],
    requiredIngredients: ["콩나물"],
    time: "15분",
    difficulty: "쉬움",
    calories: "80kcal",
    servings: "2인분",
    steps: [
      "콩나물을 깨끗이 씻습니다.",
      "냄비에 물을 붓고 콩나물을 넣습니다.",
      "뚜껑을 덮고 끓입니다 (중간에 열지 마세요!).",
      "대파와 마늘을 넣습니다.",
      "국간장과 소금으로 간합니다."
    ],
    tips: "끓는 동안 뚜껑을 열면 비린내가 나요!",
    tags: ["한식", "국", "해장", "건강식"]
  },
  {
    id: 14,
    name: "감자조림",
    nameEn: "Braised Potatoes",
    image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400",
    ingredients: ["감자", "간장", "설탕", "올리고당", "마늘", "참기름"],
    requiredIngredients: ["감자"],
    time: "30분",
    difficulty: "쉬움",
    calories: "180kcal",
    servings: "3인분",
    steps: [
      "감자를 깍둑썰기 합니다.",
      "냄비에 감자와 물을 넣고 끓입니다.",
      "간장, 설탕, 올리고당을 넣습니다.",
      "국물이 자작해질 때까지 졸입니다.",
      "참기름을 둘러 마무리합니다."
    ],
    tips: "올리고당을 넣으면 윤기가 나요!",
    tags: ["한식", "반찬", "밑반찬"]
  },
  {
    id: 15,
    name: "부대찌개",
    nameEn: "Army Stew",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
    ingredients: ["햄", "소시지", "라면", "두부", "김치", "콩", "고추장", "대파"],
    requiredIngredients: ["햄", "소시지", "라면"],
    time: "25분",
    difficulty: "쉬움",
    calories: "600kcal",
    servings: "2인분",
    steps: [
      "재료를 먹기 좋게 썹니다.",
      "냄비에 김치를 깔고 재료를 올립니다.",
      "육수와 고추장을 넣습니다.",
      "끓으면 라면을 넣습니다.",
      "대파를 넣고 마무리합니다."
    ],
    tips: "치즈를 올리면 더 맛있어요!",
    tags: ["한식", "찌개", "푸짐"]
  }
];

// 재료 기반 레시피 검색
export const searchRecipesByIngredients = (ingredients) => {
  if (!ingredients || ingredients.length === 0) {
    return recipeDatabase;
  }

  const normalizedIngredients = ingredients.map(i => i.toLowerCase().trim());
  
  const scoredRecipes = recipeDatabase.map(recipe => {
    // 일치하는 재료 수 계산
    const matchingIngredients = recipe.ingredients.filter(ri => 
      normalizedIngredients.some(ui => 
        ri.toLowerCase().includes(ui) || ui.includes(ri.toLowerCase())
      )
    );
    
    // 필수 재료 일치 여부
    const hasRequiredIngredients = recipe.requiredIngredients.every(ri =>
      normalizedIngredients.some(ui => 
        ri.toLowerCase().includes(ui) || ui.includes(ri.toLowerCase())
      )
    );
    
    // 점수 계산 (일치율 + 필수재료 보너스)
    const matchScore = matchingIngredients.length / recipe.ingredients.length;
    const requiredBonus = hasRequiredIngredients ? 0.5 : 0;
    
    return {
      ...recipe,
      matchingIngredients,
      matchScore: matchScore + requiredBonus,
      matchPercentage: Math.round((matchingIngredients.length / recipe.ingredients.length) * 100),
      hasRequiredIngredients
    };
  });

  // 점수순 정렬, 0점 제외
  return scoredRecipes
    .filter(r => r.matchScore > 0)
    .sort((a, b) => b.matchScore - a.matchScore);
};

// 모든 레시피 가져오기
export const getAllRecipes = () => recipeDatabase;

// 레시피 ID로 검색
export const getRecipeById = (id) => recipeDatabase.find(r => r.id === id);

// 유튜브 검색 URL 생성
export const getYoutubeSearchUrl = (recipeName) => {
  const query = encodeURIComponent(`${recipeName} 레시피 만들기`);
  return `https://www.youtube.com/results?search_query=${query}`;
};

// 유튜브 검색 결과 (시뮬레이션 - 실제로는 API 필요)
export const getYoutubeVideos = (recipeName) => {
  // 데모용 비디오 데이터
  const demoVideos = [
    {
      id: `video_${Date.now()}_1`,
      title: `${recipeName} 만들기 - 백종원의 요리비책`,
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
      channel: "백종원의 요리비책",
      views: "120만회",
      duration: "8:32",
      url: getYoutubeSearchUrl(recipeName)
    },
    {
      id: `video_${Date.now()}_2`,
      title: `맛있는 ${recipeName} 레시피 황금비율`,
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
      channel: "만개의레시피",
      views: "85만회",
      duration: "6:15",
      url: getYoutubeSearchUrl(recipeName)
    },
    {
      id: `video_${Date.now()}_3`,
      title: `초간단 ${recipeName} - 자취생도 가능!`,
      thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg`,
      channel: "요리왕비룡",
      views: "45만회",
      duration: "5:48",
      url: getYoutubeSearchUrl(recipeName)
    }
  ];
  
  return demoVideos;
};

export default {
  searchRecipesByIngredients,
  getAllRecipes,
  getRecipeById,
  getYoutubeSearchUrl,
  getYoutubeVideos
};
