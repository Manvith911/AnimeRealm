// Modify the profile modal creation and handling
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
  modal.querySelector('.settings-form').addEventListener('submit', (e) => {
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

// Modify the view all button handler in createAnimeGrid
function createAnimeGrid(container, animeList, limit = null, showViewAll = false) {
  const itemsToShow = limit ? animeList.slice(0, limit) : animeList;
  
  const gridContainer = document.createElement('div');
  gridContainer.className = 'anime-grid';
  
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
    
    gridContainer.appendChild(card);
  });

  container.innerHTML = ''; // Clear existing content
  container.appendChild(gridContainer);

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

// Add or update the chat initialization and event handling code
function initializeChat() {
  const chatContainer = document.querySelector('.chat-container');
  const chatToggle = document.querySelector('.chat-toggle');
  const minimizeBtn = document.querySelector('.minimize-chat');
  const closeBtn = document.querySelector('.close-chat');
  const chatHeader = document.querySelector('.chat-header');
  
  if (!chatContainer || !chatToggle || !minimizeBtn || !closeBtn || !chatHeader) {
    console.error('Chat elements not found');
    return;
  }

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
    e.stopPropagation(); // Prevent event from bubbling to header
    chatContainer.classList.add('collapsed');
    chatToggle.style.display = 'flex';
    chatOpen = false;
  });

  // Close chat
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling to header
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

  // Update chat header with current user
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  if (currentUser) {
    chatToggle.style.display = 'flex';
    const chatHeaderTitle = chatHeader.querySelector('h3');
    if (chatHeaderTitle) {
      chatHeaderTitle.innerHTML = `<i class="fas fa-comments"></i> Chat as ${currentUser.username}`;
    }
  } else {
    chatToggle.style.display = 'none';
    chatContainer.classList.add('collapsed');
  }
}

// Call initializeChat after DOM content is loaded and when user signs in/out
document.addEventListener('DOMContentLoaded', () => {
  initializeChat();

  // Add logo click handler
  const logo = document.querySelector('.logo');
  logo.addEventListener('click', () => {
    navigateToPage('home');
  });

  // Initialize home page
  navigateToPage('home');
});

// Update the sign in function to reinitialize chat
const originalSignIn = window.signIn || function() {};
window.signIn = function(userData) {
  originalSignIn.call(this, userData);
  initializeChat();
};

// Update the sign out function to reinitialize chat
const originalSignOut = window.signOut || function() {};
window.signOut = function() {
  originalSignOut.call(this);
  initializeChat();
};

// Helper function to scroll chat to bottom
function scrollToBottom() {
  const chatMessages = document.querySelector('.chat-messages');
  if (chatMessages) {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Ensure updateNavigation is called after any user data changes
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
  
  // Update chat header with new username
  const chatHeader = document.querySelector('.chat-header h3');
  if (chatHeader && currentUser) {
    chatHeader.innerHTML = `<i class="fas fa-comments"></i> Chat as ${currentUser.username}`;
  }
}

// Update the movies and TV series handlers in navigateToPage function
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
      // ...existing home case...
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
        
        // Add click handler
        card.addEventListener('click', () => {
          createAnimePlayer(movie);
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
        
        // Add click handler
        card.addEventListener('click', () => {
          createAnimePlayer(series);
        });
        
        seriesGrid.appendChild(card);
      });
      break;

    // ...rest of the cases...
  }
}

// Update createAnimePlayer to remove the delay
function createAnimePlayer(anime) {
  // Remove nav display none
  document.querySelector('nav').style.display = 'block';
  
  // Clear main content immediately
  const main = document.querySelector('main');
  main.innerHTML = '';
  
  // Create player UI immediately
  const playerContainer = document.createElement('div');
  playerContainer.className = 'anime-player active';
  
  // Generate episodes list
  const episodes = generateEpisodeList(anime);
  let currentEpisode = 1;

  // Only create player if there are episodes
  if (episodes.length === 0) {
    alert('No episodes available for this anime');
    return;
  }

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
                   data-episode="${episode.number}"
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

  // Append player to main immediately
  main.appendChild(playerContainer);

  // Add event listeners
  const backButton = playerContainer.querySelector('.back-to-home');
  backButton.addEventListener('click', () => {
    navigateToPage('home');
  });

  // Rest of the event listeners and functionality
  // ...existing episode handling code...
}