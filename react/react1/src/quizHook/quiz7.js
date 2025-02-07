// 요구사항:
// 1. 이미지 URL 배열을 받아서 모든 이미지를 미리 로드하는 커스텀 훅을 만드세요
// 2. 로딩 상태를 반환해야 합니다 (로딩 중/완료/에러)
// 3. 프로그레스 상태도 반환해야 합니다 (0-100%)
// 4. 컴포넌트 언마운트 시 진행 중인 로드를 정리해야 합니다

import React,{ useEffect, useState } from "react";

function useImagePreloader(urls) {
}

// 사용 예시 컴포넌트
function ImageGallery() {
  const urls = [
    'https://i.ibb.co/yBX6kjK/4.png',
    'https://i.ibb.co/Ps2G5K/5.png',
    'https://i.ibb.co/wF4k2g/6.png',
    'https://i.ibb.co/Tx7h5x/7.png',
  ];

  const { loading, progress, error } = useImagePreloader(urls);

  if (error) return <div>Error loading images: {error}</div>;
  if (loading) return <div>Loading... {progress}%</div>;

  return (
    <div>
      {urls.map((url, index) => (
        <img key={index} src={url}  width={100} height={100} />
      ))}
    </div>
  );
}

export default ImageGallery;
