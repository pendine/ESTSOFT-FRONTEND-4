class BlogApp {
    constructor() {
        this.posts = [];
        this.loading = false;
        this.error = null;

        // DOM 요소
        this.postsList = document.getElementById('postsList');
        this.loadingIndicator = document.getElementById('loadingIndicator');
        this.errorMessage = document.getElementById('errorMessage');
        this.postTemplate = document.getElementById('post-template');

        // 폼 요소
        this.titleInput = document.getElementById('postTitle');
        this.bodyInput = document.getElementById('postBody');
        this.createButton = document.getElementById('createPostBtn');

        // 이벤트 리스너 설정
        this.createButton.addEventListener('click', () => this.createPost());

        // 초기 데이터 로드
        this.fetchPosts();
    }

    // 로딩 상태 표시 관리
    setLoading(isLoading) {
        this.loading = isLoading;
        this.loadingIndicator.classList.toggle('hidden', !isLoading);
    }

    // 에러 메시지 표시 관리
    setError(message) {
        this.error = message;
        this.errorMessage.textContent = message;
        this.errorMessage.classList.toggle('hidden', !message);
    }

    // 게시물 목록 가져오기
    async fetchPosts() {
        try {
            this.setLoading(true);
            this.setError(null);

            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) throw new Error('게시물을 불러오는데 실패했습니다.');

            this.posts = await response.json();
            this.renderPosts();
        } catch (error) {
            this.setError(error.message);
        } finally {
            this.setLoading(false);
        }
    }

    // 새 게시물 생성
    async createPost() {
        const title = this.titleInput.value.trim();
        const body = this.bodyInput.value.trim();

        if (!title || !body) {
            this.setError('제목과 내용을 모두 입력해주세요.');
            return;
        }

        try {
            this.setLoading(true);
            this.setError(null);

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
            this.posts.unshift(newPost);
            this.renderPosts();

            // 입력 폼 초기화
            this.titleInput.value = '';
            this.bodyInput.value = '';
        } catch (error) {
            this.setError(error.message);
        } finally {
            this.setLoading(false);
        }
    }

    // 게시물 수정
    async editPost(post) {
        try {
            this.setLoading(true);
            this.setError(null);

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
            const index = this.posts.findIndex(p => p.id === post.id);
            this.posts[index] = updatedPost;
            this.renderPosts();
        } catch (error) {
            this.setError(error.message);
        } finally {
            this.setLoading(false);
        }
    }

    // 게시물 삭제
    async deletePost(id) {
        try {
            this.setLoading(true);
            this.setError(null);

            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
                method: 'DELETE'
            });

            if (!response.ok) throw new Error('게시물 삭제에 실패했습니다.');

            this.posts = this.posts.filter(post => post.id !== id);
            this.renderPosts();
        } catch (error) {
            this.setError(error.message);
        } finally {
            this.setLoading(false);
        }
    }

    // 게시물 목록 렌더링
    renderPosts() {
        this.postsList.innerHTML = '';
        
        this.posts.forEach(post => {
            const postElement = this.postTemplate.content.cloneNode(true);
            
            postElement.querySelector('.post-title').textContent = post.title;
            postElement.querySelector('.post-body').textContent = post.body;
            
            const editBtn = postElement.querySelector('.edit-btn');
            const deleteBtn = postElement.querySelector('.delete-btn');
            
            editBtn.addEventListener('click', () => this.editPost(post));
            deleteBtn.addEventListener('click', () => this.deletePost(post.id));
            
            this.postsList.appendChild(postElement);
        });
    }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    new BlogApp();
});
