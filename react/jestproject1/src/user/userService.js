export const saveUser = async (user) => {
  // 실제로는 데이터베이스에 저장하는 코드
  return await db.users.save(user);
};