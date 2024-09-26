import React, { useState } from "react";
import WaitingScreen from "./component/WaitingScreen";

function App() {
  const [isWaiting, setIsWaiting] = useState(true); // State để theo dõi màn hình hiện tại

  const startGame = () => {
    setIsWaiting(false); // Chuyển sang màn hình câu hỏi
  };

  return (
    <div style={backgroundImage}>
      {isWaiting ? <WaitingScreen startGame={startGame} /> : <QuestionScreen />}
    </div>
  );
}
const backgroundImage = {
  backgroundImage: "url('assets/images/background.jpg')", // Đường dẫn từ thư mục public
  height: "100vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default App;
