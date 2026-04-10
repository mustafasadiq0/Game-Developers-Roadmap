export const quizQuestions = [
  {
    id: 1,
    question: "ما هو مستوى خبرتك في البرمجة؟",
    options: [
      { id: "a", text: "مبتدئ تمامًا - لا أعرف أي لغة برمجة", weight: { "game-design": 3, "unity-development": 1, "2d-3d-development": 2 } },
      { id: "b", text: "أعرف أساسيات البرمجة", weight: { "unity-development": 3, "2d-3d-development": 2, "mobile-pc-development": 2 } },
      { id: "c", text: "لدي خبرة جيدة في البرمجة", weight: { "unreal-development": 2, "graphics-programming": 2, "ai-programming": 3 } },
      { id: "d", text: "مطور محترف", weight: { "graphics-programming": 3, "ai-programming": 3, "physics-simulation": 3 } }
    ]
  },
  {
    id: 2,
    question: "ما نوع الألعاب التي تفضل لعبها؟",
    options: [
      { id: "a", text: "ألعاب الألغاز والاستراتيجية", weight: { "game-design": 3, "ai-programming": 2, "2d-3d-development": 1 } },
      { id: "b", text: "ألعاب الأكشن والمغامرات", weight: { "unity-development": 3, "unreal-development": 3, "physics-simulation": 2 } },
      { id: "c", text: "ألعاب المحاكاة والواقعية", weight: { "physics-simulation": 3, "graphics-programming": 2, "unreal-development": 2 } },
      { id: "d", text: "ألعاب الهاتف المحمول", weight: { "mobile-pc-development": 3, "2d-3d-development": 2, "unity-development": 2 } }
    ]
  },
  {
    id: 3,
    question: "ما الذي يثير اهتمامك أكثر في تطوير الألعاب؟",
    options: [
      { id: "a", text: "تصميم القصة وتجربة اللاعب", weight: { "game-design": 3, "unity-development": 1, "2d-3d-development": 1 } },
      { id: "b", text: "البرمجة والتطوير التقني", weight: { "unity-development": 3, "unreal-development": 2, "ai-programming": 2 } },
      { id: "c", text: "الرسوميات والمؤثرات البصرية", weight: { "graphics-programming": 3, "physics-simulation": 2, "unreal-development": 2 } },
      { id: "d", text: "الذكاء الاصطناعي وسلوك الشخصيات", weight: { "ai-programming": 3, "game-design": 1, "unity-development": 1 } }
    ]
  },
  {
    id: 4,
    question: "كم من الوقت يمكنك تخصيصه للتعلم أسبوعيًا؟",
    options: [
      { id: "a", text: "أقل من 5 ساعات", weight: { "game-design": 2, "2d-3d-development": 2, "mobile-pc-development": 2 } },
      { id: "b", text: "5-10 ساعات", weight: { "unity-development": 3, "2d-3d-development": 2, "mobile-pc-development": 2 } },
      { id: "c", text: "10-20 ساعة", weight: { "unreal-development": 2, "ai-programming": 2, "physics-simulation": 2 } },
      { id: "d", text: "أكثر من 20 ساعة", weight: { "graphics-programming": 3, "ai-programming": 3, "physics-simulation": 3 } }
    ]
  },
  {
    id: 5,
    question: "ما هو هدفك الرئيسي من تعلم برمجة الألعاب؟",
    options: [
      { id: "a", text: "هواية شخصية وتطوير مهارات جديدة", weight: { "game-design": 2, "unity-development": 2, "2d-3d-development": 3 } },
      { id: "b", text: "تطوير ألعاب للهاتف المحمول", weight: { "mobile-pc-development": 3, "unity-development": 2, "2d-3d-development": 1 } },
      { id: "c", text: "العمل في شركة ألعاب كبيرة", weight: { "unreal-development": 3, "graphics-programming": 2, "ai-programming": 2 } },
      { id: "d", text: "إنشاء استوديو ألعاب خاص", weight: { "game-design": 3, "unity-development": 2, "mobile-pc-development": 2 } }
    ]
  },
  {
    id: 6,
    question: "ما مستوى اهتمامك بالرياضيات والفيزياء؟",
    options: [
      { id: "a", text: "لا أحب الرياضيات كثيرًا", weight: { "game-design": 3, "unity-development": 2, "mobile-pc-development": 2 } },
      { id: "b", text: "أتعامل مع الرياضيات الأساسية", weight: { "unity-development": 2, "2d-3d-development": 2, "mobile-pc-development": 1 } },
      { id: "c", text: "أحب الرياضيات والفيزياء", weight: { "physics-simulation": 3, "graphics-programming": 2, "ai-programming": 2 } },
      { id: "d", text: "خبير في الرياضيات والفيزياء", weight: { "graphics-programming": 3, "physics-simulation": 3, "ai-programming": 2 } }
    ]
  }
];

export const pathRecommendations = {
  "game-design": {
    title: "تصميم الألعاب",
    description: "أنت مناسب لمجال تصميم الألعاب! تركز على الإبداع وتجربة اللاعب أكثر من التفاصيل التقنية المعقدة.",
    nextSteps: [
      "ابدأ بتعلم أساسيات تصميم الألعاب",
      "جرب أدوات بسيطة مثل Construct 3 أو GameMaker",
      "ادرس ألعابك المفضلة وحلل آليات اللعب فيها",
      "ابدأ بإنشاء نماذج أولية بسيطة"
    ]
  },
  "unity-development": {
    title: "تطوير باستخدام Unity",
    description: "Unity هو الخيار المثالي لك! محرك متوازن يجمع بين سهولة التعلم والقوة التقنية.",
    nextSteps: [
      "حمل Unity Hub وابدأ بالدروس التفاعلية",
      "تعلم أساسيات لغة C#",
      "اتبع دورات Unity الرسمية",
      "ابدأ بمشاريع صغيرة وتدرج للأكبر"
    ]
  },
  "unreal-development": {
    title: "تطوير باستخدام Unreal Engine",
    description: "Unreal Engine مناسب لطموحاتك! محرك قوي للألعاب عالية الجودة والمشاريع الاحترافية.",
    nextSteps: [
      "حمل Unreal Engine وتعلم واجهة المحرر",
      "ابدأ بـ Blueprints قبل الانتقال لـ C++",
      "اتبع دورات Unreal الرسمية",
      "ركز على تعلم أساسيات الإضاءة والمواد"
    ]
  },
  "graphics-programming": {
    title: "برمجة الرسوميات",
    description: "أنت مهيأ لبرمجة الرسوميات! مجال متقدم يتطلب معرفة عميقة بالرياضيات والبرمجة.",
    nextSteps: [
      "تعلم أساسيات OpenGL أو DirectX",
      "ادرس الرياضيات المتقدمة للرسوميات",
      "تعلم لغات الشيدرز (HLSL/GLSL)",
      "ابدأ بمشاريع رسوميات بسيطة"
    ]
  },
  "ai-programming": {
    title: "الذكاء الاصطناعي للألعاب",
    description: "مجال الذكاء الاصطناعي يناسبك! تركز على إنشاء سلوكيات ذكية ومعقدة للشخصيات.",
    nextSteps: [
      "تعلم أساسيات الذكاء الاصطناعي",
      "ادرس Behavior Trees و State Machines",
      "تعلم خوارزميات Pathfinding",
      "جرب Unity ML-Agents للتعلم الآلي"
    ]
  },
  "2d-3d-development": {
    title: "تطوير ألعاب 2D و3D",
    description: "أنت مناسب لتطوير الألعاب العام! مسار متوازن يغطي جوانب مختلفة من تطوير الألعاب.",
    nextSteps: [
      "ابدأ بألعاب 2D البسيطة",
      "تعلم أساسيات النمذجة ثلاثية الأبعاد",
      "جرب محركات مختلفة (Unity, Godot)",
      "ركز على تعلم الأساسيات قبل التخصص"
    ]
  },
  "mobile-pc-development": {
    title: "تطوير للمنصات المختلفة",
    description: "أنت مهتم بالوصول لجمهور واسع! تركز على تطوير ألعاب للمنصات المختلفة.",
    nextSteps: [
      "تعلم Unity للتطوير متعدد المنصات",
      "ادرس متطلبات كل منصة",
      "تعلم تحسين الأداء للأجهزة المحمولة",
      "افهم عمليات النشر والتسويق"
    ]
  },
  "physics-simulation": {
    title: "محاكاة الفيزياء والمؤثرات",
    description: "أنت مناسب لمحاكاة الفيزياء! مجال تقني يركز على إنشاء تجارب واقعية ومثيرة.",
    nextSteps: [
      "تعلم أساسيات الفيزياء في الألعاب",
      "ادرس محركات الفيزياء المختلفة",
      "تعلم إنشاء أنظمة الجسيمات",
      "جرب أدوات متقدمة مثل Houdini"
    ]
  }
};

