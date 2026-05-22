import { useEffect, useState } from "react";

const steps = [
  { image: "/webtoor/1page.png", text: "구글 플레이 스토어를 클릭하세요" },
  { image: "/webtoor/2page.png", text: "검색버튼을 누르세요." },
  { image: "/webtoor/3page.png", text: "검색에서 웹투어를 클릭하세요." },
  { image: "/webtoor/4page.png", text: "웹투어 옆에 설치버튼을 누르세요" },
  { image: "/webtoor/5page.png", text: "설치된 웹투어를 누르세요." },
  { image: "/webtoor/6page.png", text: "국내항공을 누르세요." },
  { image: "/webtoor/7page.png", text: "출도착지를 고르세요." },
  { image: "/webtoor/8page.png", text: "원하는곳을 클릭하세요." },
  {
    image: "/webtoor/9page.png",
    text: "변경이 되었다면 아래 항공권검색을 누르세요.",
  },
  { image: "/webtoor/10page.png", text: "원하는 항공편을 선택하세요" },
  {
    image: "/webtoor/11page.png",
    text: "중요! 확인을 하고 버튼을 클릭하세요.",
  },
  {
    image: "/webtoor/12page.png",
    text: "금액을 확인하고 예약하기 버튼을 누르세요",
  },
  { image: "/webtoor/13page.png", text: "대기하세요" },
  { image: "/webtoor/14page.png", text: "예약자 정보를 입력하세요" },
  { image: "/webtoor/15page.png", text: "탑승자정보를 입력하세요." },
  { image: "/webtoor/16page.png", text: "규정은 전부동의해주세요" },
  { image: "/webtoor/17page.png", text: "정보를 확인후에 진행해주세요." },
  { image: "/webtoor/18page.png", text: "결제를 진행합니다" },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentStep = steps[currentIndex];

  // 이미지 미리 로딩
  useEffect(() => {
    steps.forEach((step) => {
      const img = new Image();
      img.src = step.image;
    });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? steps.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === steps.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#f3f0df] flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-7xl flex items-center justify-center gap-3 sm:gap-6">
        <button
          onClick={handlePrev}
          className="shrink-0 w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 active:scale-95 transition"
          aria-label="이전"
        >
          <svg
            className="w-6 h-6 sm:w-9 sm:h-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="w-full bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[620px]">
            <div className="bg-gray-50 flex items-center justify-center p-4 sm:p-8">
              <img
                src={currentStep.image}
                alt={`웹투어 사용법 ${currentIndex + 1}`}
                className="w-full h-full max-h-[720px] object-contain rounded-2xl shadow-md bg-white"
              />
            </div>

            <div className="relative flex flex-col justify-center px-6 py-10 sm:px-10 md:px-14 bg-white">
              <div className="absolute top-6 right-6 bg-blue-600 text-white rounded-full px-5 py-2 text-lg sm:text-xl font-bold shadow-md">
                {currentIndex + 1} / {steps.length}
              </div>

              <p className="text-blue-600 text-xl sm:text-2xl font-bold mb-5">
                WEBTOUR GUIDE
              </p>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-8">
                STEP {currentIndex + 1}
              </h1>

              <div className="w-20 h-1.5 bg-blue-600 rounded-full mb-8" />

              <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-snug break-keep">
                {currentStep.text}
              </p>

              <p className="mt-10 text-lg sm:text-xl text-gray-500">
                이전/다음 버튼을 눌러 순서대로 진행하세요.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="shrink-0 w-11 h-11 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:bg-gray-100 active:scale-95 transition"
          aria-label="다음"
        >
          <svg
            className="w-6 h-6 sm:w-9 sm:h-9"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
