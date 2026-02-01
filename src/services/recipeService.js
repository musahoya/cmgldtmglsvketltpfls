// 백종원 유튜브 인기 레시피 데이터베이스
// 출처: 백종원의 요리비책, 집밥백선생 등 유튜브 채널

const recipeDatabase = [
  {
    id: 1,
    name: "김치찌개",
    nameEn: "Kimchi Jjigae",
    image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400",
    youtube: {
      videoId: "qWbHSOplcvY",
      title: "해외여행 갔을때 제일 생각나는 음식 김치찌개",
      channel: "백종원의 요리비책",
      views: "1900만회",
      url: "https://www.youtube.com/watch?v=qWbHSOplcvY"
    },
    ingredients: ["돼지고기 목살", "신김치", "두부", "양파", "대파", "청양고추", "고춧가루", "다진마늘", "새우젓"],
    requiredIngredients: ["신김치", "돼지고기"],
    time: "30분",
    difficulty: "쉬움",
    calories: "250kcal",
    servings: "2~3인분",
    steps: [
      "돼지고기(목살) 1컵(130g)을 준비합니다.",
      "신김치 3컵(390g)을 먹기 좋게 썰어줍니다.",
      "냄비에 돼지고기, 김치, 물 3컵(540ml)을 넣고 끓입니다.",
      "고춧가루 1.5스푼, 다진마늘 1스푼을 넣습니다.",
      "두부, 양파, 청양고추를 넣고 10분 더 끓입니다.",
      "대파를 넣고 마무리합니다."
    ],
    tips: "새우젓 한 큰술 넣고 30분 끓이면 고기가 부드럽고 맛있어요! 설탕 1/2큰술은 단맛이 안 나고 맛을 살려줍니다.",
    tags: ["한식", "찌개", "매운맛", "백종원", "인기"]
  },
  {
    id: 2,
    name: "된장찌개",
    nameEn: "Doenjang Jjigae",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400",
    youtube: {
      videoId: "ffuakdFmuh4",
      title: "된장찌개 맛이 없다고요? 이것만 기억하세요",
      channel: "백종원의 요리비책",
      views: "1200만회",
      url: "https://www.youtube.com/watch?v=ffuakdFmuh4"
    },
    ingredients: ["된장", "두부", "애호박", "양파", "감자", "대파", "청양고추", "다진마늘", "고춧가루", "쌀뜨물", "대패삼겹살"],
    requiredIngredients: ["된장", "두부"],
    time: "25분",
    difficulty: "쉬움",
    calories: "200kcal",
    servings: "2~3인분",
    steps: [
      "쌀뜨물 7컵을 준비합니다 (없으면 물 사용).",
      "된장 4숟가락을 풀어줍니다.",
      "감자, 무를 먼저 넣고 끓입니다.",
      "애호박, 양파를 넣고 끓입니다.",
      "두부를 넣고 5분간 더 끓입니다.",
      "다진마늘 0.5숟가락, 고춧가루 0.5숟가락을 넣습니다.",
      "대파와 청양고추를 넣어 마무리합니다."
    ],
    tips: "대패삼겹살을 먼저 볶고 시작하면 훨씬 맛있어요! 쌀뜨물을 쓰면 국물이 구수해집니다.",
    tags: ["한식", "찌개", "건강식", "백종원", "인기"]
  },
  {
    id: 3,
    name: "제육볶음",
    nameEn: "Spicy Pork Stir-fry",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
    youtube: {
      videoId: "j7s9VRsrm9o",
      title: "대파 듬뿍! 삼겹살로 만든 대파 제육볶음",
      channel: "백종원의 요리비책",
      views: "850만회",
      url: "https://www.youtube.com/watch?v=j7s9VRsrm9o"
    },
    ingredients: ["돼지고기 앞다리살", "대파", "양배추", "당근", "양파", "청양고추", "홍고추", "고추장", "고춧가루", "간장", "설탕", "다진마늘", "굴소스", "올리고당"],
    requiredIngredients: ["돼지고기", "고추장"],
    time: "25분",
    difficulty: "보통",
    calories: "450kcal",
    servings: "4인분",
    steps: [
      "돼지고기 앞다리살 600g을 준비합니다.",
      "양념장: 설탕 2스푼, 고추장 2스푼, 간장 2스푼, 고춧가루 2스푼, 다진마늘 1스푼, 굴소스 1스푼, 올리고당 1스푼",
      "고기에 양념장을 넣고 잘 버무립니다.",
      "달군 팬에 고기를 먼저 볶습니다 (불맛 포인트!).",
      "대파 2대, 양배추, 양파를 넣고 함께 볶습니다.",
      "청양고추, 홍고추를 넣고 마무리합니다."
    ],
    tips: "고기를 먼저 센불에서 볶아 불맛을 내는 게 포인트! 대파를 듬뿍 넣으면 단맛이 나서 더 맛있어요.",
    tags: ["한식", "볶음", "매운맛", "밥도둑", "백종원", "인기"]
  },
  {
    id: 4,
    name: "계란말이",
    nameEn: "Rolled Omelette",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400",
    youtube: {
      videoId: "T7YJviWhquo",
      title: "달걀말이는 과정보다 결과가 중요해요",
      channel: "백종원의 요리비책",
      views: "1100만회",
      url: "https://www.youtube.com/watch?v=T7YJviWhquo"
    },
    ingredients: ["계란", "대파", "당근", "양파", "소금", "설탕", "물"],
    requiredIngredients: ["계란"],
    time: "15분",
    difficulty: "보통",
    calories: "180kcal",
    servings: "2인분",
    steps: [
      "계란 6개(왕란 5개)를 준비합니다.",
      "계란에 물 100ml, 소금 1/3큰술, 설탕 1/3큰술을 넣고 풀어줍니다.",
      "대파, 당근, 양파를 잘게 다져 계란물에 섞습니다.",
      "팬에 기름을 두르고 약불에서 계란물을 조금씩 부어줍니다.",
      "가장자리가 익으면 돌돌 말아줍니다.",
      "이 과정을 반복하며 두툼하게 말아줍니다.",
      "먹기 좋게 썰어 접시에 담습니다."
    ],
    tips: "설탕을 넣으면 촉촉하고 부드러워요! 물을 넣어야 푹신푹신해집니다. 약불에서 천천히!",
    tags: ["한식", "반찬", "간단요리", "도시락", "백종원", "인기"]
  },
  {
    id: 5,
    name: "볶음밥",
    nameEn: "Fried Rice",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
    youtube: {
      videoId: "kR77WlHRZrs",
      title: "백종원의 쿠킹로그 - 불맛 달걀볶음밥",
      channel: "백종원의 요리비책",
      views: "980만회",
      url: "https://www.youtube.com/watch?v=kR77WlHRZrs"
    },
    ingredients: ["밥", "계란", "대파", "당근", "간장", "참기름", "소금", "후추", "MSG"],
    requiredIngredients: ["밥", "계란"],
    time: "15분",
    difficulty: "쉬움",
    calories: "400kcal",
    servings: "1인분",
    steps: [
      "밥 1공기(200g), 계란 2개, 대파 1/2컵을 준비합니다.",
      "팬에 식용유를 두르고 대파를 볶아 파기름을 냅니다.",
      "대파를 한쪽으로 밀고 계란을 넣어 스크램블합니다.",
      "간장 1스푼을 팬 가장자리에 눌려서 불맛을 냅니다.",
      "밥을 넣고 잘 섞어가며 센불에서 볶습니다.",
      "소금, 후추, 참기름으로 마무리합니다."
    ],
    tips: "간장을 팬에 눌려서 캐러멜화시키면 불맛이 나요! 찬밥을 쓰면 더 고슬고슬해집니다. MSG 조금 넣으면 감칠맛 UP!",
    tags: ["한식", "간단요리", "한그릇", "백종원", "인기"]
  },
  {
    id: 6,
    name: "떡볶이",
    nameEn: "Tteokbokki",
    image: "https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=400",
    youtube: {
      videoId: "t4Es8mwdYlE",
      title: "한국의 No.1 길거리 음식 - 떡볶이",
      channel: "백종원의 요리비책",
      views: "1500만회",
      url: "https://www.youtube.com/watch?v=t4Es8mwdYlE"
    },
    ingredients: ["떡볶이떡", "어묵", "양배추", "대파", "양파", "고추장", "고춧가루", "간장", "설탕", "다진마늘"],
    requiredIngredients: ["떡볶이떡", "고추장"],
    time: "20분",
    difficulty: "쉬움",
    calories: "380kcal",
    servings: "2인분",
    steps: [
      "떡볶이떡 400g, 어묵 4장을 준비합니다.",
      "물 2컵에 설탕 4스푼, 간장 2스푼, 고추장 1스푼, 고춧가루 1.5스푼을 넣어 양념장을 만듭니다.",
      "냄비에 양념장과 떡을 넣고 끓입니다.",
      "떡이 부드러워지면 어묵, 양배추, 양파를 넣습니다.",
      "대파를 넣고 국물이 자작해질 때까지 졸입니다."
    ],
    tips: "설탕을 충분히 넣어야 분식집 맛이 나요! 국물이 자작해질 때까지 졸여주세요.",
    tags: ["한식", "분식", "매운맛", "간식", "백종원", "인기"]
  },
  {
    id: 7,
    name: "찜닭",
    nameEn: "Braised Chicken",
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400",
    youtube: {
      videoId: "kfGi3rTct8c",
      title: "집에서 만드는 찜닭, 배달 못 시킬때 딱!",
      channel: "백종원의 요리비책",
      views: "750만회",
      url: "https://www.youtube.com/watch?v=kfGi3rTct8c"
    },
    ingredients: ["닭", "감자", "고구마", "당근", "당면", "대파", "표고버섯", "청양고추", "홍고추", "간장", "설탕", "맛술", "물엿", "다진마늘", "생강가루", "참기름", "후추"],
    requiredIngredients: ["닭"],
    time: "60분",
    difficulty: "보통",
    calories: "550kcal",
    servings: "3~4인분",
    steps: [
      "닭 1마리(1~1.2kg)를 토막내어 준비합니다.",
      "양념장: 간장 2/3컵, 맛술 1/2컵, 설탕 1/2컵, 물엿 1/2컵, 다진마늘 1큰술, 생강가루 1작은술, 참기름 3큰술",
      "감자 1/2개, 고구마 1개, 당근 1/2개를 큼직하게 썹니다.",
      "냄비에 닭과 양념장, 물 1컵을 넣고 끓입니다.",
      "감자, 고구마, 당근을 넣고 중불에서 30분 조립니다.",
      "당면, 대파, 청양고추를 넣고 5분 더 조립니다."
    ],
    tips: "캐러멜 소스 1/2큰술을 넣으면 색이 더 예뻐요! 당면은 마지막에 넣어야 불지 않아요.",
    tags: ["한식", "조림", "안동찜닭", "손님접대", "백종원", "인기"]
  },
  {
    id: 8,
    name: "순두부찌개",
    nameEn: "Soft Tofu Stew",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
    youtube: {
      videoId: "GP8_7D5eM6A",
      title: "저녁으로 순두부찌개 어때요?!",
      channel: "백종원의 요리비책",
      views: "680만회",
      url: "https://www.youtube.com/watch?v=GP8_7D5eM6A"
    },
    ingredients: ["순두부", "다진돼지고기", "바지락", "양파", "대파", "청양고추", "계란", "고춧가루", "다진마늘", "간장", "참기름", "소금"],
    requiredIngredients: ["순두부"],
    time: "20분",
    difficulty: "쉬움",
    calories: "220kcal",
    servings: "1인분",
    steps: [
      "뚝배기에 참기름과 식용유를 넣고 고춧가루를 볶아 고추기름을 냅니다.",
      "다진 돼지고기 80g을 넣고 볶습니다.",
      "양파, 대파를 넣고 볶습니다.",
      "물 360ml(종이컵 2컵)를 넣고 끓입니다.",
      "순두부 1봉지를 넣고 끓입니다.",
      "바지락, 청양고추를 넣고 간장, 소금으로 간을 합니다.",
      "계란을 올려 마무리합니다."
    ],
    tips: "고추기름을 먼저 내면 훨씬 맛있어요! 바지락 대신 조개류나 해물을 넣어도 좋아요.",
    tags: ["한식", "찌개", "매운맛", "혼밥", "백종원", "인기"]
  },
  {
    id: 9,
    name: "잡채",
    nameEn: "Japchae",
    image: "https://images.unsplash.com/photo-1633478062482-790e3bb22b89?w=400",
    youtube: {
      videoId: "DNj3YiaP42s",
      title: "같은 재료 다른 색깔? 잡채의 마법 재료",
      channel: "백종원의 요리비책",
      views: "920만회",
      url: "https://www.youtube.com/watch?v=DNj3YiaP42s"
    },
    ingredients: ["당면", "돼지고기", "시금치", "당근", "양파", "표고버섯", "목이버섯", "계란", "간장", "설탕", "참기름", "다진마늘", "소금", "후추", "통깨"],
    requiredIngredients: ["당면"],
    time: "40분",
    difficulty: "보통",
    calories: "350kcal",
    servings: "4인분",
    steps: [
      "당면 250g을 삶아 물기를 빼고 간장, 참기름으로 밑간합니다.",
      "시금치는 데쳐서 양념합니다.",
      "돼지고기는 채썰어 간장, 설탕, 다진마늘로 양념해 볶습니다.",
      "당근, 양파, 표고버섯을 각각 볶습니다.",
      "계란은 황백으로 지단을 부쳐 채썹니다.",
      "모든 재료를 큰 볼에 담고 간장 8숟가락, 설탕 2숟가락, 참기름, 통깨로 버무립니다."
    ],
    tips: "재료를 각각 따로 볶아야 색이 선명해요! 당면에 간장을 먼저 버무려야 색이 고르게 배요.",
    tags: ["한식", "명절", "잔치음식", "손님접대", "백종원", "인기"]
  },
  {
    id: 10,
    name: "소불고기",
    nameEn: "Bulgogi",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400",
    youtube: {
      videoId: "nVzwOOJLt24",
      title: "초간단 재료로 명품 소불고기 만드는 황금 레시피",
      channel: "백종원의 요리비책",
      views: "1050만회",
      url: "https://www.youtube.com/watch?v=nVzwOOJLt24"
    },
    ingredients: ["소고기 불고기용", "양파", "대파", "표고버섯", "당근", "청양고추", "홍고추", "간장", "설탕", "물엿", "맛술", "다진마늘", "참기름", "후추", "배즙"],
    requiredIngredients: ["소고기"],
    time: "30분",
    difficulty: "쉬움",
    calories: "400kcal",
    servings: "3~4인분",
    steps: [
      "소고기 불고기용 500g에 설탕 2큰술, 물엿 1큰술을 넣고 10분 재웁니다.",
      "양념장: 간장 5큰술, 맛술 1큰술, 다진마늘 1.5큰술, 참기름 1.5큰술, 후추",
      "양파, 대파, 당근, 표고버섯을 채썹니다.",
      "고기에 양념장을 넣고 버무립니다.",
      "야채와 버섯을 넣고 잘 섞습니다.",
      "팬에 볶거나 전골냄비에 국물 자작하게 끓입니다."
    ],
    tips: "배즙이나 사과즙을 넣으면 고기가 더 연해져요! 설탕을 먼저 재워야 간장이 잘 배요.",
    tags: ["한식", "볶음", "손님접대", "명절", "백종원", "인기"]
  },
  {
    id: 11,
    name: "부대찌개",
    nameEn: "Army Stew",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400",
    youtube: {
      videoId: "-MvfUUPB5-Y",
      title: "더 이상의 부대찌개는 없습니다! 이걸로 끝내겠습니다",
      channel: "백종원의 요리비책",
      views: "620만회",
      url: "https://www.youtube.com/watch?v=-MvfUUPB5-Y"
    },
    ingredients: ["스팸", "소시지", "라면", "두부", "김치", "만두", "팽이버섯", "양파", "대파", "청양고추", "홍고추", "떡", "고추장", "고춧가루", "간장", "다진마늘", "설탕"],
    requiredIngredients: ["스팸", "소시지", "김치"],
    time: "25분",
    difficulty: "쉬움",
    calories: "600kcal",
    servings: "3~4인분",
    steps: [
      "양념장: 다진마늘 1큰술, 국간장 2큰술, 고춧가루 2큰술, 고추장 2큰술, 설탕 1큰술",
      "냄비에 김치 1컵을 깔고 재료를 보기 좋게 배치합니다.",
      "스팸, 소시지, 두부, 만두, 떡을 올립니다.",
      "양념장을 재료 위에 올립니다.",
      "물 600~700ml를 붓고 끓입니다.",
      "끓으면 라면사리와 대파, 고추를 넣습니다."
    ],
    tips: "사골육수 없이도 양념장만으로 깊은 맛이 나요! 치즈를 올리면 더 맛있어요.",
    tags: ["한식", "찌개", "푸짐", "회식", "백종원", "인기"]
  },
  {
    id: 12,
    name: "감자조림",
    nameEn: "Braised Potatoes",
    image: "https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400",
    youtube: {
      videoId: "3gQwydGHIG8",
      title: "감자조림, 간단하지만 든든한 반찬",
      channel: "백종원의 요리비책",
      views: "580만회",
      url: "https://www.youtube.com/watch?v=3gQwydGHIG8"
    },
    ingredients: ["감자", "양파", "당근", "간장", "설탕", "올리고당", "다진마늘", "참기름", "통깨", "식용유"],
    requiredIngredients: ["감자"],
    time: "30분",
    difficulty: "쉬움",
    calories: "180kcal",
    servings: "3인분",
    steps: [
      "감자 400g을 깍둑썰기 합니다.",
      "조림장: 물 1.5컵, 간장 1/2컵, 설탕 2숟가락, 올리고당 2숟가락, 다진마늘 1숟가락, 식용유 1숟가락, 참기름 1숟가락",
      "냄비에 감자와 조림장을 넣고 끓입니다.",
      "양파, 당근을 넣습니다.",
      "중불에서 국물이 자작해질 때까지 졸입니다.",
      "통깨를 뿌려 마무리합니다."
    ],
    tips: "감자를 부서지지 않게 하려면 너무 젓지 말고 냄비를 흔들어주세요! 버터를 넣고 밥에 비벼먹으면 최고!",
    tags: ["한식", "반찬", "밑반찬", "도시락", "백종원", "인기"]
  },
  {
    id: 13,
    name: "김치볶음밥",
    nameEn: "Kimchi Fried Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400",
    youtube: {
      videoId: "kimchi_fried_rice",
      title: "백종원의 고슬고슬 매콤한 김치볶음밥",
      channel: "백종원의 요리비책",
      views: "720만회",
      url: "https://www.youtube.com/watch?v=kimchi_fried_rice"
    },
    ingredients: ["밥", "김치", "스팸", "대파", "계란", "고춧가루", "간장", "참기름", "김가루", "설탕", "통깨"],
    requiredIngredients: ["밥", "김치"],
    time: "15분",
    difficulty: "쉬움",
    calories: "450kcal",
    servings: "1인분",
    steps: [
      "신김치 1종이컵(160g)을 잘게 썹니다.",
      "팬에 대파 흰부분을 볶아 파기름을 냅니다.",
      "스팸(또는 참치)과 김치를 넣고 볶습니다.",
      "설탕 약간, 고춧가루를 넣고 볶습니다.",
      "간장을 팬 가장자리에 눌려 불맛을 냅니다.",
      "밥을 넣고 센불에서 볶습니다.",
      "참기름, 김가루, 통깨로 마무리하고 계란 프라이를 올립니다."
    ],
    tips: "간장을 팬에 눌려서 캐러멜화시키면 불맛이 나요! 김치국물을 조금 넣어도 좋아요.",
    tags: ["한식", "간단요리", "한그릇", "혼밥", "백종원", "인기"]
  },
  {
    id: 14,
    name: "콩나물국",
    nameEn: "Bean Sprout Soup",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
    youtube: {
      videoId: "bean_sprout_soup",
      title: "시원한 콩나물국 끓이는 법",
      channel: "백종원의 요리비책",
      views: "450만회",
      url: "https://www.youtube.com/results?search_query=백종원+콩나물국"
    },
    ingredients: ["콩나물", "대파", "청양고추", "다진마늘", "국간장", "소금", "새우젓"],
    requiredIngredients: ["콩나물"],
    time: "15분",
    difficulty: "쉬움",
    calories: "80kcal",
    servings: "2~3인분",
    steps: [
      "콩나물 300g을 깨끗이 씻습니다.",
      "냄비에 물 4컵을 붓고 콩나물을 넣습니다.",
      "뚜껑을 꼭 덮고 센불에서 끓입니다 (중간에 절대 열지 마세요!).",
      "끓기 시작하면 7분간 더 끓입니다.",
      "다진마늘 1/2숟가락, 국간장, 소금으로 간합니다.",
      "대파와 청양고추를 넣어 마무리합니다."
    ],
    tips: "끓는 동안 뚜껑을 열면 비린내가 나요! 새우젓을 조금 넣으면 감칠맛이 UP!",
    tags: ["한식", "국", "해장", "건강식", "백종원", "간단요리"]
  },
  {
    id: 15,
    name: "오이무침",
    nameEn: "Cucumber Salad",
    image: "https://images.unsplash.com/photo-1626957341926-98752fc2ba90?w=400",
    youtube: {
      videoId: "cucumber_salad",
      title: "아삭아삭 오이무침 만들기",
      channel: "백종원의 요리비책",
      views: "380만회",
      url: "https://www.youtube.com/results?search_query=백종원+오이무침"
    },
    ingredients: ["오이", "고춧가루", "다진마늘", "식초", "설탕", "소금", "참기름", "통깨"],
    requiredIngredients: ["오이"],
    time: "10분",
    difficulty: "쉬움",
    calories: "50kcal",
    servings: "2인분",
    steps: [
      "오이 2개를 어슷썰기 합니다.",
      "소금 1/2숟가락을 넣고 10분간 절입니다.",
      "물기를 꼭 짜줍니다.",
      "양념장: 고춧가루 1숟가락, 다진마늘 1/2숟가락, 식초 1숟가락, 설탕 1/2숟가락",
      "오이와 양념장을 버무립니다.",
      "참기름, 통깨를 뿌려 마무리합니다."
    ],
    tips: "절인 후 물기를 꼭 짜야 양념이 잘 배요! 냉장고에서 차갑게 먹으면 더 맛있어요.",
    tags: ["한식", "반찬", "상큼", "간단요리", "백종원", "여름"]
  },
  {
    id: 16,
    name: "소고기미역국",
    nameEn: "Beef Seaweed Soup",
    image: "https://images.unsplash.com/photo-1607330289024-1535c6b4e1c1?w=400",
    youtube: {
      videoId: "seaweed_soup",
      title: "생일에 꼭 먹어야 하는 소고기미역국",
      channel: "백종원의 요리비책",
      views: "520만회",
      url: "https://www.youtube.com/results?search_query=백종원+소고기미역국"
    },
    ingredients: ["소고기", "건미역", "다진마늘", "국간장", "참기름", "소금"],
    requiredIngredients: ["미역", "소고기"],
    time: "40분",
    difficulty: "보통",
    calories: "180kcal",
    servings: "4인분",
    steps: [
      "건미역 30g을 물에 20분 불립니다.",
      "소고기(양지, 사태) 150g을 작게 썹니다.",
      "냄비에 참기름 2숟가락을 두르고 소고기를 볶습니다.",
      "불린 미역을 넣고 함께 볶습니다 (중요!).",
      "물 8컵을 붓고 30분간 끓입니다.",
      "국간장 2숟가락, 다진마늘 1숟가락, 소금으로 간을 맞춥니다."
    ],
    tips: "미역을 충분히 볶아야 구수해요! 국간장으로 간을 해야 색이 맑아요.",
    tags: ["한식", "국", "건강식", "생일", "산후조리", "백종원"]
  },
  {
    id: 17,
    name: "닭볶음탕",
    nameEn: "Braised Spicy Chicken",
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?w=400",
    youtube: {
      videoId: "chicken_stew",
      title: "매콤 달콤 닭볶음탕 만들기",
      channel: "백종원의 요리비책",
      views: "680만회",
      url: "https://www.youtube.com/results?search_query=백종원+닭볶음탕"
    },
    ingredients: ["닭", "감자", "당근", "양파", "대파", "청양고추", "홍고추", "간장", "고춧가루", "고추장", "설탕", "다진마늘", "맛술", "후추"],
    requiredIngredients: ["닭", "감자"],
    time: "40분",
    difficulty: "보통",
    calories: "480kcal",
    servings: "3~4인분",
    steps: [
      "닭 1마리를 토막내어 핏물을 빼줍니다.",
      "양념장: 간장 4숟가락, 고춧가루 3숟가락, 고추장 1숟가락, 설탕 2숟가락, 다진마늘 1숟가락, 맛술 2숟가락",
      "감자, 당근, 양파를 큼직하게 썹니다.",
      "냄비에 닭을 깔고 감자, 당근, 양파를 올립니다.",
      "양념장과 물 1.5컵을 넣고 끓입니다.",
      "중불에서 30분간 조립니다.",
      "대파, 청양고추를 넣고 마무리합니다."
    ],
    tips: "닭을 먼저 데치면 잡내가 없어요! 고추장은 적게 넣어야 깔끔해요.",
    tags: ["한식", "조림", "매운맛", "푸짐", "백종원", "인기"]
  },
  {
    id: 18,
    name: "두부조림",
    nameEn: "Braised Tofu",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    youtube: {
      videoId: "tofu_jorim",
      title: "대패두부조림, 8년전 집밥백선생 레시피!",
      channel: "백종원의 요리비책",
      views: "280만회",
      url: "https://www.youtube.com/results?search_query=백종원+두부조림"
    },
    ingredients: ["두부", "대패삼겹살", "대파", "청양고추", "홍고추", "간장", "고춧가루", "다진마늘", "설탕", "참기름", "통깨"],
    requiredIngredients: ["두부"],
    time: "20분",
    difficulty: "쉬움",
    calories: "250kcal",
    servings: "2인분",
    steps: [
      "두부 1모를 1cm 두께로 썹니다.",
      "팬에 두부를 노릇하게 굽습니다.",
      "양념장: 간장 3숟가락, 고춧가루 1숟가락, 다진마늘 1숟가락, 설탕 1숟가락, 물 1/2컵",
      "대패삼겹살을 두부 위에 올립니다.",
      "양념장을 붓고 중불에서 조립니다.",
      "대파, 청양고추를 넣고 참기름, 통깨로 마무리합니다."
    ],
    tips: "두부는 노릇하게 구워야 부서지지 않아요! 대패삼겹살 대신 다진고기도 OK!",
    tags: ["한식", "반찬", "밑반찬", "밥도둑", "백종원", "간단요리"]
  },
  {
    id: 19,
    name: "어묵볶음",
    nameEn: "Stir-fried Fish Cake",
    image: "https://images.unsplash.com/photo-1534938665420-4193effeacc4?w=400",
    youtube: {
      videoId: "fish_cake",
      title: "어묵볶음 맛있게 만드는 법",
      channel: "백종원의 요리비책",
      views: "420만회",
      url: "https://www.youtube.com/results?search_query=백종원+어묵볶음"
    },
    ingredients: ["어묵", "양파", "당근", "대파", "청양고추", "간장", "고춧가루", "설탕", "올리고당", "다진마늘", "참기름", "통깨"],
    requiredIngredients: ["어묵"],
    time: "15분",
    difficulty: "쉬움",
    calories: "180kcal",
    servings: "2인분",
    steps: [
      "어묵 200g을 먹기 좋게 썹니다.",
      "어묵을 끓는 물에 데쳐 기름기를 빼줍니다.",
      "양념장: 간장 2숟가락, 고춧가루 1/2숟가락, 설탕 1숟가락, 올리고당 1숟가락, 다진마늘 1/2숟가락",
      "팬에 양파, 당근을 볶습니다.",
      "어묵과 양념장을 넣고 볶습니다.",
      "대파, 청양고추를 넣고 참기름, 통깨로 마무리합니다."
    ],
    tips: "어묵을 데치면 기름기가 빠져서 더 맛있어요! 매운맛을 원하면 고춧가루를 더 넣으세요.",
    tags: ["한식", "반찬", "밑반찬", "도시락", "백종원", "간단요리"]
  },
  {
    id: 20,
    name: "계란찜",
    nameEn: "Steamed Egg",
    image: "https://images.unsplash.com/photo-1482049016gy9-b62191f32c27?w=400",
    youtube: {
      videoId: "steamed_egg",
      title: "부드러운 계란찜 만드는 비법",
      channel: "백종원의 요리비책",
      views: "350만회",
      url: "https://www.youtube.com/results?search_query=백종원+계란찜"
    },
    ingredients: ["계란", "새우젓", "대파", "당근", "물", "참기름"],
    requiredIngredients: ["계란"],
    time: "15분",
    difficulty: "쉬움",
    calories: "150kcal",
    servings: "2인분",
    steps: [
      "계란 4개를 풀어줍니다.",
      "물 1컵(계란과 1:1 비율)을 넣고 잘 섞습니다.",
      "새우젓 1/2숟가락으로 간을 합니다.",
      "대파, 당근을 잘게 다져 넣습니다.",
      "뚝배기에 담고 중약불에서 저어가며 익힙니다.",
      "부풀어 오르면 뚜껑을 덮고 약불에서 5분 더 익힙니다.",
      "참기름을 둘러 마무리합니다."
    ],
    tips: "계란과 물의 비율은 1:1이 황금비율! 중간에 저어줘야 부드러워요.",
    tags: ["한식", "반찬", "부드러움", "아이반찬", "백종원", "간단요리"]
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
  const query = encodeURIComponent(`백종원 ${recipeName} 레시피`);
  return `https://www.youtube.com/results?search_query=${query}`;
};

// 유튜브 비디오 정보 가져오기
export const getYoutubeVideos = (recipe) => {
  // 레시피에 유튜브 정보가 있으면 실제 정보 사용
  if (recipe && recipe.youtube) {
    return [
      {
        id: recipe.youtube.videoId,
        title: recipe.youtube.title,
        thumbnail: `https://img.youtube.com/vi/${recipe.youtube.videoId}/mqdefault.jpg`,
        channel: recipe.youtube.channel,
        views: recipe.youtube.views,
        duration: "",
        url: recipe.youtube.url
      },
      {
        id: `search_${Date.now()}_1`,
        title: `${recipe.name} 만들기 - 만개의레시피`,
        thumbnail: `https://img.youtube.com/vi/default/mqdefault.jpg`,
        channel: "만개의레시피",
        views: "조회수 다수",
        duration: "",
        url: getYoutubeSearchUrl(recipe.name)
      },
      {
        id: `search_${Date.now()}_2`,
        title: `초간단 ${recipe.name} 레시피`,
        thumbnail: `https://img.youtube.com/vi/default/mqdefault.jpg`,
        channel: "요리 유튜버",
        views: "조회수 다수",
        duration: "",
        url: getYoutubeSearchUrl(recipe.name)
      }
    ];
  }

  // 기본 검색 결과
  const recipeName = recipe?.name || '요리';
  return [
    {
      id: `video_${Date.now()}_1`,
      title: `${recipeName} 만들기 - 백종원의 요리비책`,
      thumbnail: `https://img.youtube.com/vi/default/mqdefault.jpg`,
      channel: "백종원의 요리비책",
      views: "조회수 다수",
      duration: "",
      url: getYoutubeSearchUrl(recipeName)
    },
    {
      id: `video_${Date.now()}_2`,
      title: `맛있는 ${recipeName} 황금레시피`,
      thumbnail: `https://img.youtube.com/vi/default/mqdefault.jpg`,
      channel: "만개의레시피",
      views: "조회수 다수",
      duration: "",
      url: getYoutubeSearchUrl(recipeName)
    }
  ];
};

export default {
  searchRecipesByIngredients,
  getAllRecipes,
  getRecipeById,
  getYoutubeSearchUrl,
  getYoutubeVideos
};
