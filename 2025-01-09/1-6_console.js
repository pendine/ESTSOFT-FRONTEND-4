/*
console
 - 화면에 정보를 출력하는 목적
 - 일반사용자에게 유출되서는 안단됨

정보 출력용 로그는 개발단계에서만 사용할것
 1. 성능에 영향을 줌
 2. 최악의 경우에 정보유출

log : 정보출력
info : 정보출력
warn : 경고
error : 심각한 에러
*/
console.info("인포 출력");
console.log("로그 출력");
console.error("에러 출력");