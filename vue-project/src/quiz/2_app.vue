<template>
  <div class="post-form">
      <input id="postTitle" type="text" placeholder="제목">
      <textarea id="postBody" placeholder="내용"></textarea>
      <button id="createPostBtn">게시물 작성</button>
  </div>

  <div id="loadingIndicator" class="loading hidden" v-if="loading"> 로딩 중... </div>

  <div id="errorMessage" v-if="error">{{ error }}</div>


  <postsList></postsList>

</template>

<script>
export default{
  data(){
    return{
      posts : []
      , loading : false
      , error : null
    }
  }
  , method(){
  }
  , computed:{
    setError(message) {
      if(message){
       this.error = message;
      }
    }
    , setLoading(){
    }


  }
}

// DOM 요소 선택
const elements = {
    postsList: document.getElementById('postsList'),
    loadingIndicator: document.getElementById('loadingIndicator'),
    errorMessage: document.getElementById('errorMessage'),
    postTemplate: document.getElementById('post-template'),
    titleInput: document.getElementById('postTitle'),
    bodyInput: document.getElementById('postBody'),
    createButton: document.getElementById('createPostBtn')
};

// 게시물 목록 가져오기
async function fetchPosts() {
    try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('게시물을 불러오는데 실패했습니다.');

        posts = await response.json();
        renderPosts();
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}

// 새 게시물 생성
async function createPost() {
    const title = elements.titleInput.value.trim();
    const body = elements.bodyInput.value.trim();

    if (!title || !body) {
        setError('제목과 내용을 모두 입력해주세요.');
        return;
    }

    try {
        setLoading(true);
        setError(null);

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title,
                body,
                userId: 1
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        if (!response.ok) throw new Error('게시물 작성에 실패했습니다.');

        const newPost = await response.json();
        posts.unshift(newPost);
        renderPosts();

        // 입력 폼 초기화
        elements.titleInput.value = '';
        elements.bodyInput.value = '';
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}

// 게시물 수정
async function editPost(post) {
    try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                ...post,
                title: `${post.title} (수정됨)`
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        });

        if (!response.ok) throw new Error('게시물 수정에 실패했습니다.');

        const updatedPost = await response.json();
        const index = posts.findIndex(p => p.id === post.id);
        posts[index] = updatedPost;
        renderPosts();
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}

// 게시물 삭제
async function deletePost(id) {
    try {
        setLoading(true);
        setError(null);

        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        });

        if (!response.ok) throw new Error('게시물 삭제에 실패했습니다.');

        posts = posts.filter(post => post.id !== id);
        renderPosts();
    } catch (error) {
        setError(error.message);
    } finally {
        setLoading(false);
    }
}

// 게시물 목록 렌더링
function renderPosts() {
    elements.postsList.innerHTML = '';
    
    posts.forEach(post => {
        const postElement = elements.postTemplate.content.cloneNode(true);
        
        postElement.querySelector('.post-title').textContent = post.title;
        postElement.querySelector('.post-body').textContent = post.body;
        
        const editBtn = postElement.querySelector('.edit-btn');
        const deleteBtn = postElement.querySelector('.delete-btn');
        
        editBtn.addEventListener('click', () => editPost(post));
        deleteBtn.addEventListener('click', () => deletePost(post.id));
        
        elements.postsList.appendChild(postElement);
    });
}

// 이벤트 리스너 설정
function setupEventListeners() {
    elements.createButton.addEventListener('click', createPost);
}

// 앱 초기화
function initializeApp() {
    setupEventListeners();
    fetchPosts();
}

// DOM 로드 완료 시 앱 초기화
document.addEventListener('DOMContentLoaded', initializeApp);

</script>

<style></style>

