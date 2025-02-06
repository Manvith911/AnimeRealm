// Update animeData with more anime and working image URLs
const animeData = {
  featured: [
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      description: "A young man fights demons to save his sister and avenge his family.",
      image: "https://image.tmdb.org/t/p/w1280/xUfRZu2mi8jH6SzQEJGP6tjBuYj.jpg",
      rating: "9.5"
    },
    {
      title: "Attack on Titan",
      description: "Humanity fights for survival against man-eating giants.",
      image: "https://image.tmdb.org/t/p/w1280/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
      rating: "9.8"
    },
    {
      title: "Jujutsu Kaisen",
      description: "A high school student joins a secret organization of sorcerers.",
      image: "https://image.tmdb.org/t/p/original/hFWP5HkbVEe40hrXgtCeQxoccHE.jpg",
      rating: "9.3"
    },
    {
      title: "Blue Lock",
      description: "A egoist joins blue lock to become the world's no.1 striker",
      image: "https://pics.filmaffinity.com/blue_lock-470159847-large.jpg",
      rating: "7.2"
    } 
  ],
  trending: [
    {
      title: "One Piece",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/one-piece-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/one-piece-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/one-piece-ep3.mp4" }
      ],
      image: "https://image.tmdb.org/t/p/original/e3NBGiAifW9Xt8xD5tpARskjccO.jpg"
    },
    {
      title: "My Hero Academia",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/my-hero-academia-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/my-hero-academia-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/my-hero-academia-ep3.mp4" }
      ],
      image: "https://image.tmdb.org/t/p/w1280/ivOLM47yJt90P19RH1NvJrAJz9F.jpg"
    },
    {
      title: "Black Clover",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/black-clover-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/black-clover-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/black-clover-ep3.mp4" }
      ],
      image: "https://pics.filmaffinity.com/black_clover-508889490-large.jpg"
    },
    {
      title: "Tokyo Revengers",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/tokyo-revengers-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/tokyo-revengers-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/tokyo-revengers-ep3.mp4" }
      ],
      image: "https://pics.filmaffinity.com/tokyo_revengers-671103404-large.jpg"
    },
    {
      title: "Naruto Shippuden",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/naruto-shippuden-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/naruto-shippuden-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/naruto-shippuden-ep3.mp4" }
      ],
      image: "https://image.tmdb.org/t/p/original/zAYRe2bJxpWTVrwwmBc00VFkAf4.jpg"
    },
    {
      title: "Haikyuu!!",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/haikyuu-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/haikyuu-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/haikyuu-ep3.mp4" }
      ],
      image: "https://pics.filmaffinity.com/haikyuu-446939831-large.jpg"
    },
    {
      title: "Death Note",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/death-note-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/death-note-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/death-note-ep3.mp4" }
      ],
      image: "https://pics.filmaffinity.com/death_note_desu_noto-731986748-large.jpg"
    },
    {
      title: "Dragon Ball Super",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/dragon-ball-super-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/dragon-ball-super-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/dragon-ball-super-ep3.mp4" }
      ],
      image: "https://pics.filmaffinity.com/dragon_ball_super-965587763-large.jpg"
    }
  ],
  latest: [
    {
      title: "Chainsaw Man",
      episode: "Episode 12",
      image: "https://image.tmdb.org/t/p/w1280/npdB6eFzizki0WaZ1OvKcJrWe97.jpg",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/chainsaw-man-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/chainsaw-man-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/chainsaw-man-ep3.mp4" }
      ]
    },
    {
      title: "Spy x Family",
      episode: "Episode 25",
      image: "https://image.tmdb.org/t/p/original/3r4LYFuXrg3G8fepysr4xSLWnQL.jpg",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/spy-x-family-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/spy-x-family-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/spy-x-family-ep3.mp4" }
      ]
    },
    {
      title: "Dr. Stone",
      episode: "Episode 11",
      image: "https://wallpapers.com/images/featured-full/dr-stone-6gc11l8dfl4aps11.jpg",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/dr-stone-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/dr-stone-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/dr-stone-ep3.mp4" }
      ]
    },
    {
      title: "Blue Lock",
      episode: "Episode 24",
      image: "https://pics.filmaffinity.com/blue_lock-819979510-large.jpg",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/blue-lock-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/blue-lock-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/blue-lock-ep3.mp4" }
      ]
    },
    {
      title: "Bungo Stray Dogs",
      episode: "Episode 51",
      image: "https://pics.filmaffinity.com/bungo_stray_dogs-112564035-large.jpg",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/bungo-stray-dogs-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/bungo-stray-dogs-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/bungo-stray-dogs-ep3.mp4" }
      ]
    },
    {
      title: "One Punch Man",
      episode: "Episode 24",
      image: "https://image.tmdb.org/t/p/original/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/one-punch-man-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/one-punch-man-ep2.mp4" },
        { title: "Episode 3", videoUrl: "https://example.com/one-punch-man-ep3.mp4" }
      ]
    }
  ],
  movies: [
    {
      title: "Demon Slayer: Mugen Train",
      description: "Tanjiro and his friends join the Demon Slayer Corps' most powerful swordsman aboard the Mugen Train.",
      image: "https://image.tmdb.org/t/p/w1280/h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      rating: "9.0"
    },
    {
      title: "Your Name",
      description: "Two strangers find themselves linked in a bizarre way.",
      image: "https://image.tmdb.org/t/p/w1280/q719jXXEzOoYaps6babgKnONONX.jpg",
      rating: "9.2"
    }
  ],
  series: [
    {
      title: "Fullmetal Alchemist: Brotherhood",
      description: "Two brothers search for the Philosopher's Stone.",
      image: "https://pics.filmaffinity.com/fullmetal_alchemist_brotherhood-748146576-large.jpg",
      rating: "9.7",
      episodes: [
        { title: "Episode 1", videoUrl: "https://example.com/fma-ep1.mp4" },
        { title: "Episode 2", videoUrl: "https://example.com/fma-ep2.mp4" }
      ]
    }
  ]
};

// Helper function to search through anime data
function searchAnime(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  let results = [];
  
  // Search in featured anime
  results.push(...animeData.featured.filter(anime => 
    anime.title.toLowerCase().includes(searchTerm) ||
    anime.description.toLowerCase().includes(searchTerm)
  ));
  
  // Search in trending anime
  results.push(...animeData.trending.filter(anime => 
    anime.title.toLowerCase().includes(searchTerm)
  ));
  
  // Search in latest anime
  results.push(...animeData.latest.filter(anime => 
    anime.title.toLowerCase().includes(searchTerm)
  ));
  
  return [...new Set(results)]; // Remove duplicates
}

// Function to display search results
function displaySearchResults(results) {
  // Clear existing content
  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.trending').style.display = 'none';
  document.querySelector('.latest').style.display = 'none';
  
  // Remove existing search results if any
  const existingResults = document.querySelector('.search-results');
  if (existingResults) {
    existingResults.remove();
  }
  
  // Create search results section
  const searchResultsSection = document.createElement('section');
  searchResultsSection.className = 'search-results';
  searchResultsSection.innerHTML = `
    <div class="search-header" style="max-width: 1200px; margin: 2rem auto; padding: 0 1rem;">
      <h2>Search Results</h2>
      ${results.length === 0 ? '<p>No results found</p>' : ''}
      <button class="back-button" style="background: var(--primary-color); border: none; color: white; padding: 0.5rem 1rem; border-radius: 20px; cursor: pointer; margin-top: 1rem;">
        Back to Home
      </button>
    </div>
    <div class="anime-grid" style="max-width: 1200px; margin: 0 auto; padding: 0 1rem;">
      ${results.map(anime => `
        <div class="anime-card">
          <img src="${anime.image}" alt="${anime.title}">
          <div class="anime-info">
            <h3>${anime.title}</h3>
            <p>${anime.episodes || anime.episode || ''}</p>
            ${anime.rating ? `<p>Rating: ⭐ ${anime.rating}</p>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
  
  // Insert search results after nav
  document.querySelector('nav').insertAdjacentElement('afterend', searchResultsSection);
  
  // Add event listener to back button
  searchResultsSection.querySelector('.back-button').addEventListener('click', () => {
    searchResultsSection.remove();
    document.querySelector('.hero').style.display = 'block';
    document.querySelector('.trending').style.display = 'block';
    document.querySelector('.latest').style.display = 'block';
    searchInput.value = ''; // Clear search input
  });
}

// Search functionality
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

function handleSearch() {
  const searchTerm = searchInput.value.trim();
  if (searchTerm.length > 0) {
    const results = searchAnime(searchTerm);
    displaySearchResults(results);
  }
}

// Event listeners for search
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    handleSearch();
  }
});

// Function to generate episode list based on anime data
function generateEpisodeList(anime) {
  // Use the actual episodes array from the anime data
  // If no episodes array exists, create an empty array
  const episodes = anime.episodes || [];
  
  return episodes.map((episode, index) => ({
    number: index + 1,
    title: episode.title || `Episode ${index + 1}`,
    videoUrl: episode.videoUrl || `#` // Fallback if no video URL provided
  }));
}

// Featured anime slider
let currentSlide = 0;
let slideInterval;

function createFeaturedSlides() {
  const featuredContainer = document.getElementById('featured');
  if (!featuredContainer) return;
  
  featuredContainer.innerHTML = ''; // Clear existing slides
  
  animeData.featured.forEach((anime, index) => {
    const slide = document.createElement('div');
    slide.className = `featured-slide ${index === 0 ? 'active' : ''}`;
    slide.style.backgroundImage = `url(${anime.image})`;
    
    const info = document.createElement('div');
    info.className = 'featured-info';
    info.innerHTML = `
      <h2>${anime.title}</h2>
      <p>${anime.description}</p>
      <p>Rating: ⭐ ${anime.rating}</p>
    `;
    
    slide.appendChild(info);
    featuredContainer.appendChild(slide);
  });
}

function startSlideshow() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  
  slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  const slides = document.querySelectorAll('.featured-slide');
  if (!slides.length) return;
  
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

// Function to create anime player view
function createAnimePlayer(anime) {
  document.querySelector('nav').style.display = 'block';
  window.scrollTo({ top: 0 });
  
  // Clear main content
  const main = document.querySelector('main');
  main.innerHTML = '';
  
  // Generate episodes list
  const episodes = anime.episodes || [{
    title: anime.title,
    videoUrl: anime.videoUrl || 'https://example.com/video.mp4'
  }];
  
  let currentEpisode = 1;

  const playerContainer = document.createElement('div');
  playerContainer.className = 'anime-player active';
  
  // Create player UI
  playerContainer.innerHTML = `
    <button class="back-to-home">
      <i class="fas fa-arrow-left"></i> Back
    </button>
    <div class="player-container">
      <!-- Episodes Sidebar -->
      <div class="episodes-sidebar">
        <div class="episodes-list">
          <h3>Episodes</h3>
          <div class="episode-grid">
            ${episodes.map(episode => `
              <div class="episode-item ${episode.number === currentEpisode ? 'active' : ''}" 
                   data-episode="${episode.number || 1}"
                   data-video-url="${episode.videoUrl}">
                ${episode.title}
                <div class="episode-progress">
                  <div class="episode-progress-bar" style="width: ${episode.number < currentEpisode ? '100%' : episode.number === currentEpisode ? '45%' : '0%'}"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- Video Container -->
      <div class="video-container">
        <video id="anime-video" controls>
          <source src="${episodes[0].videoUrl}" type="video/mp4">
          Your browser does not support the video element.
        </video>
        <div class="controls">
          <button class="control-btn previous-episode" ${currentEpisode === 1 ? 'disabled' : ''}>
            <i class="fas fa-step-backward"></i>
            Previous
          </button>
          <button class="control-btn next-episode" ${currentEpisode === episodes.length ? 'disabled' : ''}>
            Next
            <i class="fas fa-step-forward"></i>
          </button>
        </div>
      </div>

      <!-- Settings Sidebar -->
      <div class="settings-sidebar">
        <div class="episode-info">
          <h2>${anime.title}</h2>
          <p class="episode-number">Episode ${currentEpisode} of ${episodes.length}</p>
        </div>
        
        <div class="playback-settings">
          <div class="setting-group">
            <label>Audio</label>
            <select>
              <option>Japanese (Original)</option>
              <option>English (Dub)</option>
              <option>Spanish (Dub)</option>
            </select>
          </div>
          <div class="setting-group">
            <label>Subtitles</label>
            <select>
              <option>English</option>
              <option>Español</option>
              <option>Português</option>
              <option>Off</option>
            </select>
          </div>
          <div class="setting-group">
            <label>Quality</label>
            <select>
              <option>1080p (HD)</option>
              <option>720p (HD)</option>
              <option>480p</option>
              <option>360p</option>
              <option>Auto</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  `;

  // Append player to main
  main.appendChild(playerContainer);

  // Add event listeners
  const backButton = playerContainer.querySelector('.back-to-home');
  backButton.addEventListener('click', () => {
    navigateToPage('home');
  });

  // ...rest of the event listeners and functionality remains the same...

  // Function to update episode
  function updateEpisode(newEpisode) {
    if (newEpisode < 1 || newEpisode > episodes.length) return;
    
    currentEpisode = newEpisode;
    const episodeData = episodes[currentEpisode - 1];
    
    // Update video source
    const video = document.getElementById('anime-video');
    video.src = episodeData.videoUrl;
    video.load();
    video.play();
    
    // Update episode title with total episodes count
    document.querySelector('.episode-number').textContent = `Episode ${currentEpisode} of ${episodes.length}`;
    
    // Update episode selection
    document.querySelectorAll('.episode-item').forEach(item => {
      const episodeNum = parseInt(item.dataset.episode);
      item.classList.toggle('active', episodeNum === currentEpisode);
      
      // Update progress bars
      const progressBar = item.querySelector('.episode-progress-bar');
      if (episodeNum < currentEpisode) {
        progressBar.style.width = '100%';
      } else if (episodeNum === currentEpisode) {
        progressBar.style.width = '45%';
      } else {
        progressBar.style.width = '0%';
      }
    });
    
    // Update navigation buttons
    document.querySelector('.previous-episode').disabled = currentEpisode === 1;
    document.querySelector('.next-episode').disabled = currentEpisode === episodes.length;
    
    // Scroll active episode into view
    const activeEpisode = document.querySelector('.episode-item.active');
    activeEpisode.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  // Add click handlers for episodes
  document.querySelectorAll('.episode-item').forEach(item => {
    item.addEventListener('click', () => {
      const episodeNum = parseInt(item.dataset.episode);
      updateEpisode(episodeNum);
    });
  });

  // Add click handlers for navigation buttons
  document.querySelector('.previous-episode').addEventListener('click', () => {
    updateEpisode(currentEpisode - 1);
  });

  document.querySelector('.next-episode').addEventListener('click', () => {
    updateEpisode(currentEpisode + 1);
  });

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      updateEpisode(currentEpisode - 1);
    } else if (e.key === 'ArrowRight') {
      updateEpisode(currentEpisode + 1);
    }
  });

  // Track video progress
  const video = document.getElementById('anime-video');
  video.addEventListener('timeupdate', () => {
    const progress = (video.currentTime / video.duration) * 100;
    const activeEpisode = document.querySelector('.episode-item.active');
    const progressBar = activeEpisode.querySelector('.episode-progress-bar');
    progressBar.style.width = `${progress}%`;
  });

  // Auto-play next episode when current episode ends
  video.addEventListener('ended', () => {
    if (currentEpisode < episodes.length) {
      updateEpisode(currentEpisode + 1);
    }
  });
}

// Function to create grid with pagination and "View All" option
function createAnimeGrid(container, animeList, limit = null, showViewAll = false) {
  const itemsToShow = limit ? animeList.slice(0, limit) : animeList;
  
  container.innerHTML = ''; // Clear existing content
  
  itemsToShow.forEach(anime => {
    const card = document.createElement('div');
    card.className = 'anime-card';
    card.innerHTML = `
      <img src="${anime.image}" alt="${anime.title}">
      <div class="anime-info">
        <h3>${anime.title}</h3>
        ${anime.episodes ? `<p>${anime.episodes.length} Episodes</p>` : 
          (anime.episode ? `<p>${anime.episode}</p>` : '')}
      </div>
    `;
    
    // Add click handler
    card.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => createAnimePlayer(anime), 500);
    });
    
    container.appendChild(card);
  });

  if (showViewAll && animeList.length > limit) {
    const viewAllButton = document.createElement('button');
    viewAllButton.className = 'view-all-btn';
    viewAllButton.textContent = 'View All';
    viewAllButton.addEventListener('click', () => {
      const section = container.closest('section');
      if (section.classList.contains('trending')) {
        navigateToPage('popular');
      } else if (section.classList.contains('latest')) {
        navigateToPage('latest');
      }
    });
    container.appendChild(viewAllButton);
  }
}

// Function to navigate to different pages
function navigateToPage(page) {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  
  // Reset active state
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.remove('active');
  });
  
  // Find and set active link
  const activeLink = document.querySelector(`.nav-links a[href="#${page}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Get the main content area
  const main = document.querySelector('main');

  switch(page) {
    case 'home':
      main.innerHTML = `
        <section class="hero">
          <div class="featured-anime" id="featured">
          </div>
        </section>
        <section class="trending">
          <h2>Trending Now</h2>
          <div class="anime-grid" id="trending">
          </div>
        </section>
        <section class="latest">
          <h2>Latest Episodes</h2>
          <div class="anime-grid" id="latest">
          </div>
        </section>
      `;
      
      setTimeout(() => {
        createFeaturedSlides();
        currentSlide = 0;
        startSlideshow();
        createAnimeGrid(document.getElementById('trending'), animeData.trending, 12, true);
        createAnimeGrid(document.getElementById('latest'), animeData.latest, 12, true);
      }, 100);
      break;
      
    case 'popular':
      main.innerHTML = `
        <section class="popular">
          <h2>Popular Anime</h2>
          <div class="anime-grid">
          </div>
        </section>
      `;
      createAnimeGrid(document.querySelector('.popular .anime-grid'), animeData.trending);
      break;
      
    case 'latest':
      main.innerHTML = `
        <section class="all-latest">
          <h2>Latest Episodes</h2>
          <div class="anime-grid">
          </div>
        </section>
      `;
      createAnimeGrid(document.querySelector('.all-latest .anime-grid'), animeData.latest);
      break;
      
    case 'movies':
      main.innerHTML = `
        <section class="movies">
          <h2>Anime Movies</h2>
          <div class="anime-grid">
          </div>
        </section>
      `;
      // Create grid with clickable cards
      const movieGrid = document.querySelector('.movies .anime-grid');
      animeData.movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
          <img src="${movie.image}" alt="${movie.title}">
          <div class="anime-info">
            <h3>${movie.title}</h3>
            <p>Movie</p>
            ${movie.rating ? `<p>Rating: ${movie.rating}</p>` : ''}
          </div>
        `;
        
        // Simplified click handler - no delay
        card.addEventListener('click', () => {
          createAnimePlayer({
            ...movie,
            episodes: [{ 
              title: movie.title,
              videoUrl: movie.videoUrl || 'https://example.com/movie.mp4'
            }]
          });
        });
        
        movieGrid.appendChild(card);
      });
      break;
      
    case 'tv-series':
      main.innerHTML = `
        <section class="tv-series">
          <h2>TV Series</h2>
          <div class="anime-grid">
          </div>
        </section>
      `;
      // Create grid with clickable cards
      const seriesGrid = document.querySelector('.tv-series .anime-grid');
      animeData.series.forEach(series => {
        const card = document.createElement('div');
        card.className = 'anime-card';
        card.innerHTML = `
          <img src="${series.image}" alt="${series.title}">
          <div class="anime-info">
            <h3>${series.title}</h3>
            <p>${series.episodes ? `${series.episodes.length} Episodes` : ''}</p>
            ${series.rating ? `<p>Rating: ${series.rating}</p>` : ''}
          </div>
        `;
        
        // Simplified click handler - no delay
        card.addEventListener('click', () => createAnimePlayer(series));
        
        seriesGrid.appendChild(card);
      });
      break;

    // ...other cases...
  }

  // Scroll to top when changing pages
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Update the navigation click handlers
document.addEventListener('DOMContentLoaded', () => {
  // Add logo click handler
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    navigateToPage('home');
  });

  // Add navigation handlers
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const page = e.target.getAttribute('href').replace('#', '') || 'home';
      navigateToPage(page);
    });
  });

  // Initially show home page
  navigateToPage('home');
});

// Sign in/Sign up Modal functionality
const signInBtn = document.querySelector('.sign-in-btn');
let isSignIn = true; // Toggle between sign in and sign up forms

function createAuthModal() {
  const modal = document.createElement('div');
  modal.className = 'auth-modal';
  
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <div class="auth-header">
        <h2>${isSignIn ? 'Sign In' : 'Sign Up'}</h2>
        <p>${isSignIn ? 'New to AnimeRealm?' : 'Already have an account?'} 
          <a href="#" class="toggle-auth">${isSignIn ? 'Sign Up' : 'Sign In'}</a>
        </p>
      </div>
      <form class="auth-form">
        ${!isSignIn ? `
          <div class="form-group">
            <label for="username">Display Name (optional)</label>
            <input type="text" id="username" placeholder="Enter display name">
          </div>
          <div class="form-group">
            <label>Gender (optional)</label>
            <div class="gender-options">
              <label>
                <input type="radio" name="gender" value="male"> Male
              </label>
              <label>
                <input type="radio" name="gender" value="female"> Female
              </label>
              <label>
                <input type="radio" name="gender" value="neutral" checked> Prefer not to say
              </label>
            </div>
          </div>
        ` : ''}
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" required>
        </div>
        ${!isSignIn ? `
          <div class="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" required>
          </div>
        ` : ''}
        <button type="submit" class="auth-submit-btn">
          ${isSignIn ? 'Sign In' : 'Sign Up'}
        </button>
      </form>
      <div class="social-auth">
        <p>Or continue with</p>
        <div class="social-buttons">
          <button class="google-btn">
            <i class="fab fa-google"></i> Google
          </button>
          <button class="discord-btn">
            <i class="fab fa-discord"></i> Discord
          </button>
        </div>
      </div>
    </div>
  `;

  // Close modal when clicking outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Close button functionality
  modal.querySelector('.close-btn').addEventListener('click', () => {
    modal.remove();
  });

  // Toggle between sign in and sign up
  modal.querySelector('.toggle-auth').addEventListener('click', (e) => {
    e.preventDefault();
    isSignIn = !isSignIn;
    modal.remove();
    createAuthModal();
  });

  // Form submission
  modal.querySelector('.auth-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = modal.querySelector('#email').value;
    const password = modal.querySelector('#password').value;

    // Validate email domain
    if (!isValidEmailDomain(email)) {
      // Create and show error message
      const errorDiv = document.createElement('div');
      errorDiv.style.color = 'var(--secondary-color)';
      errorDiv.style.marginBottom = '1rem';
      errorDiv.style.fontSize = '0.9rem';
      errorDiv.textContent = 'Please use a valid email domain (e.g., gmail.com, yahoo.com, outlook.com)';
      
      // Remove any existing error message
      const existingError = modal.querySelector('.email-error');
      if (existingError) {
        existingError.remove();
      }
      
      // Add error class for reference
      errorDiv.classList.add('email-error');
      
      // Insert error message after email input
      const emailInput = modal.querySelector('#email');
      emailInput.parentNode.insertBefore(errorDiv, emailInput.nextSibling);
      
      // Add red border to email input
      emailInput.style.borderColor = 'var(--secondary-color)';
      
      // Remove error styling when user starts typing again
      emailInput.addEventListener('input', () => {
        emailInput.style.borderColor = '';
        const errorMsg = modal.querySelector('.email-error');
        if (errorMsg) {
          errorMsg.remove();
        }
      });
      
      return;
    }

    if (isSignIn) {
      console.log('Sign in:', { email, password });
      signIn({ email, password }); // Sign in the user
    } else {
      const username = modal.querySelector('#username').value;
      const confirmPassword = modal.querySelector('#confirm-password').value;
      const gender = modal.querySelector('input[name="gender"]:checked')?.value || 'neutral';
      
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      
      console.log('Sign up:', { username, email, password, gender });
      signIn({ username, email, password, gender }); // Sign in after successful sign up
    }

    modal.remove();
  });

  document.body.appendChild(modal);
}

// Add this function to validate email domains
function isValidEmailDomain(email) {
  const validDomains = [
    'gmail.com',
    'yahoo.com',
    'outlook.com',
    'hotmail.com',
    'aol.com',
    'icloud.com',
    'protonmail.com',
    'mail.com',
    'zoho.com',
    'yandex.com'
  ];
  
  const domain = email.split('@')[1]?.toLowerCase();
  return validDomains.includes(domain);
}

// User state management
let currentUser = null;

function updateNavigation() {
  const navRight = document.querySelector('.nav-right');
  const signInBtn = navRight.querySelector('.sign-in-btn');
  const profileDropdown = navRight.querySelector('.profile-dropdown');
  
  if (currentUser) {
    // Remove sign in button if it exists
    if (signInBtn) {
      signInBtn.remove();
    }
    
    // Remove existing profile dropdown if it exists
    if (profileDropdown) {
      profileDropdown.remove();
    }
    
    // Add new profile dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'profile-dropdown';
    dropdown.innerHTML = `
      <button class="profile-btn">
        <img src="${currentUser.avatar}" alt="Profile" class="profile-avatar">
        <span>${currentUser.username}</span>
        <i class="fas fa-chevron-down"></i>
      </button>
      <div class="dropdown-content">
        <a href="#" class="profile-link"><i class="fas fa-user"></i> Edit Profile</a>
        <a href="#"><i class="fas fa-heart"></i> Watchlist</a>
        <a href="#"><i class="fas fa-history"></i> History</a>
        <a href="#" class="settings-link"><i class="fas fa-cog"></i> Settings</a>
        <div class="dropdown-divider"></div>
        <a href="#" class="sign-out"><i class="fas fa-sign-out-alt"></i> Sign Out</a>
      </div>
    `;
    
    navRight.appendChild(dropdown);
    
    // Toggle dropdown
    const profileBtn = dropdown.querySelector('.profile-btn');
    profileBtn.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });
    
    // Add profile link handler
    dropdown.querySelector('.profile-link').addEventListener('click', (e) => {
      e.preventDefault();
      createProfileModal();
      dropdown.classList.remove('active');
    });
    
    // Add settings link handler
    dropdown.querySelector('.settings-link').addEventListener('click', (e) => {
      e.preventDefault();
      createSettingsModal();
      dropdown.classList.remove('active');
    });
    
    // Handle sign out
    dropdown.querySelector('.sign-out').addEventListener('click', (e) => {
      e.preventDefault();
      signOut();
    });
  } else {
    // Remove profile dropdown if it exists
    if (profileDropdown) {
      profileDropdown.remove();
    }
    
    // Add sign in button if it doesn't exist
    if (!signInBtn) {
      const btn = document.createElement('button');
      btn.className = 'sign-in-btn';
      btn.innerHTML = `
        <i class="fas fa-user"></i>
        Sign In
      `;
      btn.addEventListener('click', createAuthModal);
      navRight.appendChild(btn);
    }
  }
}

function createProfileModal() {
  const modal = document.createElement('div');
  modal.className = 'auth-modal settings-modal';
  
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <div class="auth-header">
        <h2>Edit Profile</h2>
      </div>
      <form class="settings-form">
        <div class="avatar-section">
          <img src="" alt="Profile" class="current-avatar">
          <div class="avatar-controls">
            <button type="button" class="upload-avatar-btn">Upload Photo</button>
            <input type="file" id="avatar-upload" accept="image/*" style="display:none;">
            <button type="button" class="generate-avatar-btn">Generate Random</button>
          </div>
        </div>
        <div class="form-group">
          <label for="settings-username">Display Name</label>
          <input type="text" id="settings-username" placeholder="Enter display name">
        </div>
        <div class="form-group">
          <label for="settings-gender">Gender</label>
          <select id="settings-gender" class="gender-select">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="neutral">Prefer not to say</option>
          </select>
        </div>
        <button type="submit" class="auth-submit-btn">Save Changes</button>
      </form>
    </div>
  `;

  const currentAvatar = modal.querySelector('.current-avatar');
  const uploadInput = modal.querySelector('#avatar-upload');
  const uploadBtn = modal.querySelector('.upload-avatar-btn');
  const generateBtn = modal.querySelector('.generate-avatar-btn');
  const usernameInput = modal.querySelector('#settings-username');
  const genderSelect = modal.querySelector('#settings-gender');
  
  // Set current values
  if (currentUser) {
    currentAvatar.src = currentUser.avatar || `https://api.dicebear.com/7.x/${getAvatarStyle(currentUser.gender)}/svg?seed=default`;
    usernameInput.value = currentUser.username || '';
    genderSelect.value = currentUser.gender || 'neutral';
  }

  // Close button functionality
  const closeBtn = modal.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => modal.remove());

  // Click outside to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.remove();
  });
  
  // Avatar upload
  uploadBtn.addEventListener('click', () => uploadInput.click());
  
  uploadInput.addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size should be less than 5MB');
        return;
      }

      try {
        uploadBtn.disabled = true;
        uploadBtn.textContent = 'Uploading...';
        
        // Use websim upload function
        const url = await window.websim.upload(file);
        
        currentAvatar.src = url;
        uploadBtn.disabled = false;
        uploadBtn.textContent = 'Upload Photo';
      } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload image');
        uploadBtn.disabled = false;
        uploadBtn.textContent = 'Upload Photo';
      }
    }
  });

  // Generate random avatar
  generateBtn.addEventListener('click', () => {
    const randomSeed = Math.random().toString(36).substring(7);
    const avatarStyle = getAvatarStyle(genderSelect.value);
    const newAvatarUrl = `https://api.dicebear.com/7.x/${avatarStyle}/svg?seed=${randomSeed}`;
    currentAvatar.src = newAvatarUrl;
  });

  // Form submission
  modal.querySelector('.settings-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    if (!currentUser) {
      alert('Please sign in first');
      return;
    }

    const newUsername = usernameInput.value.trim() || currentUser.username;
    const newGender = genderSelect.value;
    const newAvatar = currentAvatar.src;

    // Update current user
    currentUser = {
      ...currentUser,
      username: newUsername,
      gender: newGender,
      avatar: newAvatar
    };

    // Save to localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Update navigation and UI
    updateNavigation();

    // Close modal and show notification
    modal.remove();
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Profile updated successfully!';
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
  });

  document.body.appendChild(modal);
}

function getAvatarStyle(gender) {
  switch(gender?.toLowerCase()) {
    case 'male':
      return 'avataaars';
    case 'female':
      return 'lorelei';
    default:
      return 'bottts'; // Neutral/robot style for unspecified gender
  }
}

function createSettingsModal() {
  const modal = document.createElement('div');
  modal.className = 'auth-modal settings-modal';
  
  // Load saved settings from localStorage
  const savedSettings = JSON.parse(localStorage.getItem('userSettings')) || {
    theme: 'dark',
    language: 'en',
    notifications: {
      email: false,
      push: false
    }
  };
  
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <div class="auth-header">
        <h2>Settings</h2>
      </div>
      <form class="settings-form">
        <div class="form-group">
          <label>Theme</label>
          <select class="theme-select">
            <option value="dark" ${savedSettings.theme === 'dark' ? 'selected' : ''}>Dark Theme</option>
            <option value="light" ${savedSettings.theme === 'light' ? 'selected' : ''}>Light Theme</option>
          </select>
        </div>
        <div class="form-group">
          <label>Notifications</label>
          <div class="notification-options">
            <label>
              <input type="checkbox" name="notifications" value="email" ${savedSettings.notifications.email ? 'checked' : ''}> 
              Email Notifications
            </label>
            <label>
              <input type="checkbox" name="notifications" value="push" ${savedSettings.notifications.push ? 'checked' : ''}>
              Push Notifications
            </label>
          </div>
        </div>
        <div class="form-group">
          <label>Language</label>
          <select class="language-select">
            <option value="en" ${savedSettings.language === 'en' ? 'selected' : ''}>English</option>
            <option value="jp" ${savedSettings.language === 'jp' ? 'selected' : ''}>日本語</option>
            <option value="es" ${savedSettings.language === 'es' ? 'selected' : ''}>Español</option>
          </select>
        </div>
        <button type="submit" class="auth-submit-btn">Save Settings</button>
      </form>
    </div>
  `;

  // Handle close button
  const closeBtn = modal.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    modal.remove();
  });

  // Handle click outside modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });

  // Apply theme change
  function applyTheme(theme) {
    const root = document.documentElement;
    if (theme === 'light') {
      root.style.setProperty('--background-dark', '#f5f5f5');
      root.style.setProperty('--background-light', '#ffffff');
      root.style.setProperty('--text-color', '#333333');
      root.style.setProperty('--text-muted', '#666666');
    } else {
      root.style.setProperty('--background-dark', '#1a1a1a');
      root.style.setProperty('--background-light', '#2d2d2d');
      root.style.setProperty('--text-color', '#ffffff');
      root.style.setProperty('--text-muted', '#888888');
    }
  }

  // Apply language change
  function applyLanguage(lang) {
    const translations = {
      en: {
        home: 'Home',
        movies: 'Movies',
        tvSeries: 'TV Series',
        popular: 'Popular',
        latest: 'Latest',
        trending: 'Trending Now',
        latestEpisodes: 'Latest Episodes'
      },
      jp: {
        home: 'ホーム',
        movies: '映画',
        tvSeries: 'TVシリーズ',
        popular: '人気',
        latest: '最新',
        trending: '今話題',
        latestEpisodes: '最新エピソード'
      },
      es: {
        home: 'Inicio',
        movies: 'Películas',
        tvSeries: 'Series de TV',
        popular: 'Popular',
        latest: 'Último',
        trending: 'Tendencias',
        latestEpisodes: 'Últimos Episodios'
      }
    };

    // Update navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks[0].textContent = translations[lang].home;
    navLinks[1].textContent = translations[lang].movies;
    navLinks[2].textContent = translations[lang].tvSeries;
    navLinks[3].textContent = translations[lang].popular;
    navLinks[4].textContent = translations[lang].latest;

    // Update section headings
    document.querySelector('.trending h2').textContent = translations[lang].trending;
    document.querySelector('.latest h2').textContent = translations[lang].latestEpisodes;
  }

  // Handle form submission
  modal.querySelector('.settings-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const theme = modal.querySelector('.theme-select').value;
    const language = modal.querySelector('.language-select').value;
    const emailNotif = modal.querySelector('input[value="email"]').checked;
    const pushNotif = modal.querySelector('input[value="push"]').checked;
    
    // Save settings to localStorage
    const settings = {
      theme,
      language,
      notifications: {
        email: emailNotif,
        push: pushNotif
      }
    };
    localStorage.setItem('userSettings', JSON.stringify(settings));
    
    // Apply changes
    applyTheme(theme);
    applyLanguage(language);
    
    // Show success notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Settings saved successfully!';
    document.body.appendChild(notification);
    
    // Remove the modal
    const modalElement = document.querySelector('.settings-modal');
    if (modalElement) {
      modalElement.remove();
    }
    
    setTimeout(() => notification.remove(), 3000);
  });

  document.body.appendChild(modal);
}

function signIn(userData) {
  currentUser = {
    username: userData.username || userData.email.split('@')[0],
    email: userData.email,
    gender: userData.gender || 'neutral', 
    avatar: userData.avatar || `https://api.dicebear.com/7.x/${getAvatarStyle(userData.gender)}/svg?seed=${userData.email}`
  };
  
  // Store user data in localStorage
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  
  updateNavigation();
}

function signOut() {
  currentUser = null;
  localStorage.removeItem('currentUser');
  updateNavigation();
}

// Show modal when clicking sign in button
signInBtn.addEventListener('click', createAuthModal);

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  const chatContainer = document.getElementById('chat-container');
  const chatToggle = document.getElementById('chat-toggle');
  const minimizeBtn = document.querySelector('.minimize-chat');
  const closeBtn = document.querySelector('.close-chat');
  const chatHeader = document.querySelector('.chat-header');

  let chatOpen = false;

  // Chat toggle functionality
  chatToggle?.addEventListener('click', () => {
    chatContainer.classList.remove('collapsed');
    chatToggle.style.display = 'none';
    chatOpen = true;
    scrollToBottom();
  });

  // Minimize chat
  minimizeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    chatContainer.classList.add('collapsed');
    chatToggle.style.display = 'flex';
    chatOpen = false;
  });

  // Close chat
  closeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    chatContainer.classList.add('collapsed');
    chatToggle.style.display = 'flex';
    chatOpen = false;
  });

  // Toggle chat on header click
  chatHeader?.addEventListener('click', () => {
    if (!chatOpen) {
      chatContainer.classList.remove('collapsed');
      chatToggle.style.display = 'none';
      chatOpen = true;
      scrollToBottom();
    }
  });

  // Initialize chat
  initializeChat();

  // Try to restore user session from localStorage
  const savedUser = localStorage.getItem('currentUser');
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateNavigation();
  }

  // Load home page content
  createFeaturedSlides();
  createAnimeGrid(document.getElementById('trending'), animeData.trending, 12, true);
  createAnimeGrid(document.getElementById('latest'), animeData.latest, 12, true);
  
  // Auto-advance featured slider
  startSlideshow();
});

// Initialize Firebase and chat functionality
const firebaseConfig = {
  apiKey: "AIzaSyBFxa9B0YtWqS_zBFaSyaFIyiCOe4TsRQM",
  authDomain: "animerealm-chat.firebaseapp.com",
  projectId: "animerealm-chat",
  databaseURL: "https://animerealm-chat-default-rtdb.firebaseio.com",
  storageBucket: "animerealm-chat.appspot.com",
  messagingSenderId: "773267181222",
  appId: "1:773267181222:web:4f3e5e6c6272671e12b321"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const chatRef = database.ref('messages');

function initializeChat() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (!currentUser) {
    document.getElementById('chat-toggle').style.display = 'none';
    document.getElementById('chat-container').classList.add('collapsed');
    return;
  }

  const chatToggle = document.getElementById('chat-toggle');
  const chatContainer = document.getElementById('chat-container');
  const chatMessages = document.querySelector('.chat-messages');
  const messageInput = document.querySelector('.chat-input input');
  const sendButton = document.querySelector('.send-message');
  const minimizeBtn = document.querySelector('.minimize-chat');
  const closeBtn = document.querySelector('.close-chat');
  const chatHeader = document.querySelector('.chat-header');

  // Show chat toggle button
  chatToggle.style.display = 'flex';

  // Update chat header
  const chatHeaderTitle = document.querySelector('.chat-header h3');
  chatHeaderTitle.innerHTML = `<i class="fas fa-comments"></i> Chat as ${currentUser.username}`;

  let chatOpen = false;

  // Chat toggle functionality
  chatToggle.addEventListener('click', () => {
    chatContainer.classList.remove('collapsed');
    chatToggle.style.display = 'none';
    chatOpen = true;
    scrollToBottom();
  });

  // Minimize chat
  minimizeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    chatContainer.classList.add('collapsed');
    chatToggle.style.display = 'flex';
    chatOpen = false;
  });

  // Close chat
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    chatContainer.classList.add('collapsed');
    chatToggle.style.display = 'flex';
    chatOpen = false;
  });

  // Toggle chat on header click
  chatHeader.addEventListener('click', () => {
    if (!chatOpen) {
      chatContainer.classList.remove('collapsed');
      chatToggle.style.display = 'none';
      chatOpen = true;
      scrollToBottom();
    }
  });

  // Listen for messages
  chatRef.on('child_added', (snapshot) => {
    const message = snapshot.val();
    displayMessage(message);
    scrollToBottom();
  });

  // Send message
  function sendMessage() {
    const text = messageInput.value.trim();
    if (text) {
      const message = {
        text,
        timestamp: Date.now(),
        user: {
          id: currentUser.email,
          username: currentUser.username,
          avatar: currentUser.avatar
        }
      };

      chatRef.push(message);
      messageInput.value = '';
    }
  }

  // Send button click
  sendButton.addEventListener('click', sendMessage);

  // Enter key press
  messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
}

// Display a chat message
function displayMessage(message) {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const chatMessages = document.querySelector('.chat-messages');
  
  // Check if message already exists
  const messageId = `message-${message.timestamp}-${message.user.id}`;
  if (document.getElementById(messageId)) {
    return; // Skip if message already displayed
  }
  
  const messageElement = document.createElement('div');
  messageElement.id = messageId; // Add unique ID to message
  
  const isSentByCurrentUser = currentUser && message.user.id === currentUser.email;
  messageElement.className = `message ${isSentByCurrentUser ? 'sent' : 'received'}`;

  messageElement.innerHTML = `
    <div class="message-header">
      <img src="${message.user.avatar}" alt="${message.user.username}">
      <span>${message.user.username}</span>
    </div>
    <div class="message-text">${message.text}</div>
  `;

  chatMessages.appendChild(messageElement);
}

// Scroll chat to bottom
function scrollToBottom() {
  const chatMessages = document.querySelector('.chat-messages');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Update original sign in/out functions to handle chat
const originalSignIn = signIn;
signIn = function(userData) {
  originalSignIn.call(this, userData);
  initializeChat();
};

const originalSignOut = signOut;
signOut = function() {
  originalSignOut.call(this);
  initializeChat();
};

// Initialize chat on page load
document.addEventListener('DOMContentLoaded', () => {
  initializeChat();
});