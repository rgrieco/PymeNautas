document.addEventListener("DOMContentLoaded", () => {
    const postsContainer = document.getElementById('posts');
    const form = document.getElementById('new-post-form');
  
    // Función para obtener y renderizar las entradas
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts');
        const posts = await response.json();
        renderPosts(posts);
      } catch (error) {
        console.error('Error al obtener las entradas:', error);
      }
    }
  
    function renderPosts(posts) {
      postsContainer.innerHTML = '';
      if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No hay entradas.</p>';
        return;
      }
      posts.forEach(post => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.content.substring(0, 100)}...</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Por ${post.author} el ${new Date(post.createdAt).toLocaleDateString()}</small>
            </div>
          </div>
        `;
        postsContainer.appendChild(col);
      });
    }
  
    // Manejo del envío del formulario para crear una nueva entrada
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      const postData = {
        title: formData.get('title'),
        content: formData.get('content'),
        author: formData.get('author')
      };
  
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        });
        if (response.ok) {
          form.reset();
          fetchPosts();
        } else {
          console.error('Error al crear la entrada');
        }
      } catch (error) {
        console.error('Error al crear la entrada:', error);
      }
    });
  
    // Cargar las entradas al iniciar
    fetchPosts();
  });