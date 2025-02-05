async function showAvatar() {
  // await 키워드로 then 처리를 생략.
  // 데이터가 여러건이라해도 어차피 async가 반복자(이터러블) 이기 때문에
  // 여러건의 데이터를 불러오는것 또한 문제없음
  try {
    let response = await fetch("1_user.json");
    let user = await response.json();

    console.log(user);
    console.log(user.username);

    let githubRes = await fetch(
      `https://api.github.com/users/${user.username}`
    );
    let githubUser = await githubRes.json();

    let img = document.createElement("img");
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    // async await라고 해서 후속처리를 안쓰는것은 아님.
    // async/await + 체이닝도 가능.
    // await는 then 메서드 자체를 상시 사용가능하도록 처리.
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));

    return githubUser;
  } catch (error) {
    alert("에러발생");
  }
}

showAvatar();

// async와 에러처리
// then은 상시 처리(사실 거의 안쓰게됨.)
// 그렇다면 catch는?
//  -> catch를 추가하는것을 잊었다면 처리되지 않은 프로미스 에러 발생.
//  -> async에서 에러처리 최고의 장점은 try /catch 사용가능.
//  -> catch는 에러별로 처리 하는게 굉장히 까다로운 문법.
