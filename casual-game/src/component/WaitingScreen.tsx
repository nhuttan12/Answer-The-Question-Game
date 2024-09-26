import React from 'react'

interface WaitingScreenProps {
  startGame: () => void; // Hàm không nhận tham số và không trả về gì
}

const WaitingScreen: React.FC<WaitingScreenProps> = ({ startGame }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4 text-white">Chào Mừng Đến Với Ai Là Triệu Phú!</h1>
      <button
        className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 transition"
        onClick={startGame}
      >
        Bắt Đầu Chơi
      </button>
    </div>  
  )
}

export default WaitingScreen