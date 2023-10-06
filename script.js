document.addEventListener('DOMContentLoaded', function() {
    fetch('posts')
        .then(response => response.text())
        .then(data => {
            const postList = data.split('\n').filter(Boolean); // Get list of post names
            const postContainer = document.getElementById('post-container');

            postList.forEach(post => {
                const postTitle = post.replace('.html', '').replace(/-/g, ' '); // Convert file name to title
                const postLink = document.createElement('a');
                postLink.href = `posts/${post}`;
                postLink.textContent = postTitle;
                postContainer.appendChild(postLink);
            });
        });
});
