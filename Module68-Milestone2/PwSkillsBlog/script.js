document.addEventListener('DOMContentLoaded', () => {
    const addBlogBtn = document.getElementById('add-blog-btn');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close-btn');
    const blogForm = document.getElementById('blog-form');
    const blogList = document.getElementById('blog-list');

    // Load existing blogs from LocalStorage
    loadBlogs();

    addBlogBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    blogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const poster = document.getElementById('poster').value;
        const description = document.getElementById('description').value;
        const content = document.getElementById('content').value;

        const blog = {
            title,
            poster,
            description,
            content
        };

        addBlog(blog);
        saveBlogToLocalStorage(blog);
        blogForm.reset();
        modal.style.display = 'none';
    });

    function loadBlogs() {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs.forEach(blog => addBlog(blog));
    }

    function addBlog(blog) {
        const blogPost = document.createElement('div');
        blogPost.classList.add('blog-post');

        blogPost.innerHTML = `
            <img src="${blog.poster}" alt="${blog.title}">
            <h3>${blog.title}</h3>
            <p>${blog.description}</p>
            <button onclick="viewBlog('${blog.title}', '${blog.poster}', '${blog.description}', '${blog.content}')">Read</button>
            <button class="delete-btn" onclick="deleteBlog('${blog.title}')">Delete</button>
        `;

        blogList.appendChild(blogPost);
    }

    function saveBlogToLocalStorage(blog) {
        const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
        blogs.push(blog);
        localStorage.setItem('blogs', JSON.stringify(blogs));
    }
});

function viewBlog(title, poster, description, content) {
    localStorage.setItem('currentBlog', JSON.stringify({ title, poster, description, content }));
    window.location.href = 'blog.html';
}

function deleteBlog(title) {
    let blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    blogs = blogs.filter(blog => blog.title !== title);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    window.location.reload();
}
