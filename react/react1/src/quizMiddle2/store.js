// 요구사항:
// 1. API 요청 결과를 캐시하여 중복 요청 방지
// 2. 캐시 만료 시간 설정 가능
// 3. 강제로 캐시를 무시하고 새로운 요청을 보낼 수 있는 옵션 추가
// 4. 캐시된 데이터 크기 제한 설정

// apiCacheMiddleware.js
const createApiCacheMiddleware = (options = {}) => {

  const { cacheKey, ignoreCacheParam , ignoreCacheQuery}= options

  // 여기에 코드를 작성하세요
  const cleanOldCache = () => {
// 뭐 여기서 배열이든 객체든 스토어든
// 저장한 데이터들 전부 확인하고
// 오래된것들을 제거하는 로직 쓰면 돼겠지.
// 저장자체를 어떻게 관리하냐인거고
  }

  return (
    // 주기적으로 오래된 캐시 정리
    cleanOldCache();

    // 캐시된 데이터가 있고, 강제 새로고침이 아닌 경우
    if (cache.has(cacheKey) && !ignoreCacheParam) {
      const cachedData = cache.get(cacheKey);
      return Promise.resolve(cachedData.data);
    }

    // 새로운 요청 실행
    return next(action).then(result => {
      // 성공한 경우에만 캐시
      if (!result.error) {
        enforceMaxSize();
        cache.set(cacheKey, {
          timestamp: Date.now(),
          data: result
        });
      }
      return result;
    });
  );
}

// 사용 예시:
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(
      createApiCacheMiddleware({
        maxAge: 5 * 60 * 1000, // 5분
        maxSize: 100, // 최대 100개 요청 캐시
        ignoreCacheQuery: 'fresh' // ?fresh=true로 캐시 무시 가능
      })
    )
});