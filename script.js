// Quiz Data
const quizData = [
  {
    question: "What is Artificial Intelligence?",
    options: [
      "A type of computer hardware",
      "Machines that simulate human intelligence",
      "A new programming language",
      "A social media platform"
    ],
    answer: 1
  },
  {
    question: "Which of these is a common use of AI today?",
    options: [
      "Voice assistants",
      "Cooking food",
      "Building houses",
      "Flying airplanes manually"
    ],
    answer: 0
  },
  {
    question: "What is a major concern with AI?",
    options: [
      "It is too slow",
      "It can be biased",
      "It never makes mistakes",
      "It is always ethical"
    ],
    answer: 1
  },
  {
    question: "How can you use AI responsibly?",
    options: [
      "Ignore ethical concerns",
      "Use it for good and verify information",
      "Share private data freely",
      "Let AI make all decisions"
    ],
    answer: 1
  },
  {
    question: "What is machine learning?",
    options: [
      "Teaching computers to follow instructions",
      "A branch of AI where computers learn from data",
      "Robots learning physical tasks",
      "Programming languages specifically for machines"
    ],
    answer: 1
  },
  {
    question: "Which of these is an example of a generative AI?",
    options: [
      "Security cameras with motion detection",
      "Text-to-image generators like DALL-E",
      "Chess playing computers",
      "Email spam filters"
    ],
    answer: 1
  },
  {
    question: "What is the 'AI black box problem'?",
    options: [
      "When AI systems are painted black",
      "When AI crashes and shuts down",
      "When we can't explain how AI reaches decisions",
      "When AI is locked in secure containers"
    ],
    answer: 2
  },
  {
    question: "Which field combines AI with biology?",
    options: [
      "Bioinformatics",
      "Mechanical biology",
      "Computational physics",
      "Chemical engineering"
    ],
    answer: 0
  },
  {
    question: "What is deep learning?",
    options: [
      "Learning that occurs underwater",
      "AI that can think deeply about philosophy",
      "Neural networks with multiple layers",
      "Learning that takes a long time"
    ],
    answer: 2
  },
  {
    question: "Which of these is NOT a common programming language for AI?",
    options: [
      "Python",
      "HTML",
      "R",
      "TensorFlow"
    ],
    answer: 1
  },
  {
    question: "What is Natural Language Processing (NLP)?",
    options: [
      "Teaching computers to understand human languages",
      "Using only natural materials in computers",
      "Processing language while outdoors",
      "Programming without artificial components"
    ],
    answer: 0
  },
  {
    question: "Which technology is the foundation of cryptocurrencies like Bitcoin?",
    options: [
      "Artificial intelligence",
      "Virtual reality",
      "Blockchain",
      "Quantum computing"
    ],
    answer: 2
  },
  {
    question: "What ethical principle states AI should not harm humans?",
    options: [
      "Utilitarian AI",
      "The AI Accord",
      "Asimov's First Law of Robotics",
      "The Turing Principle"
    ],
    answer: 2
  },
  {
    question: "Which profession is LEAST likely to be replaced by AI?",
    options: [
      "Data entry clerk",
      "Creative therapist",
      "Bank teller",
      "Factory worker"
    ],
    answer: 1
  },
  {
    question: "What is the Turing Test designed to evaluate?",
    options: [
      "Computer processing speed",
      "A machine's ability to exhibit human-like intelligence",
      "How quickly AI can solve math problems",
      "The physical capabilities of robots"
    ],
    answer: 1
  }
];

let currentQuiz = 0;
let score = 0;

// Quiz functionality
function loadQuiz() {
  const quizContainer = document.getElementById('quiz-container');
  if (!quizContainer) return;
  
  if (currentQuiz < quizData.length) {
    const q = quizData[currentQuiz];
    quizContainer.innerHTML = `
      <div class="mb-4 font-semibold text-xl">${q.question}</div>
      <div>
        ${q.options.map((opt, i) => `
          <button class="block w-full text-left bg-blue-100 dark:bg-gray-700 dark:text-white hover:bg-blue-200 dark:hover:bg-gray-600 rounded-lg px-4 py-3 mb-3 transition" onclick="selectOption(${i})">${opt}</button>
        `).join('')}
      </div>
      <div class="text-sm text-gray-500 dark:text-gray-300 mt-4">Question ${currentQuiz + 1} of ${quizData.length}</div>
    `;
  } else {
    quizContainer.innerHTML = `
      <div class="text-2xl font-bold mb-4">Quiz Complete!</div>
      <div class="mb-6 text-lg">Your score: <span class="text-blue-600 dark:text-blue-400 font-bold">${score} / ${quizData.length}</span></div>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-md" onclick="restartQuiz()">Try Again</button>
    `;
  }
  
  // Update quiz container colors for dark mode
  updateQuizDarkMode();
}

window.selectOption = function(i) {
  if (i === quizData[currentQuiz].answer) {
    score++;
    showFeedback(true);
  } else {
    showFeedback(false);
  }
  setTimeout(() => {
    currentQuiz++;
    loadQuiz();
  }, 1000);
};

function showFeedback(isCorrect) {
  const quizContainer = document.getElementById('quiz-container');
  const feedbackDiv = document.createElement('div');
  feedbackDiv.className = `fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          ${isCorrect ? 'bg-green-500' : 'bg-red-500'} text-white text-2xl font-bold 
                          px-8 py-4 rounded-lg z-50 animate-fadeIn`;
  feedbackDiv.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
  document.body.appendChild(feedbackDiv);
  
  setTimeout(() => {
    feedbackDiv.remove();
  }, 1000);
}

// Function to handle dark mode changes for quiz
function updateQuizDarkMode() {
  const isDarkMode = document.body.classList.contains('dark');
  const quizContainer = document.getElementById('quiz-container');
  
  if (quizContainer) {
    if (isDarkMode) {
      quizContainer.classList.add('dark:bg-gray-800', 'dark:text-white');
    } else {
      quizContainer.classList.remove('dark:bg-gray-800', 'dark:text-white');
    }
  }
}

window.restartQuiz = function() {
  currentQuiz = 0;
  score = 0;
  loadQuiz();
};

// Section reveal animations
function initSectionReveal() {
  const sections = document.querySelectorAll('.section-reveal');
  
  const revealSection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };
  
  const sectionObserver = new IntersectionObserver(revealSection, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });
  
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

// Create neural connections for brain visualization
function createNeuralConnections() {
  const container = document.querySelector('.neural-connections');
  if (!container) return;
  
  // Clear any existing connections
  container.innerHTML = '';
  
  // Create neural nodes and connections
  for (let i = 0; i < 20; i++) {
    // Create a neural dot
    const dot = document.createElement('div');
    dot.className = 'neural-dot';
    
    // Random position around the brain
    const angle = Math.random() * Math.PI * 2;
    const distance = 70 + Math.random() * 80;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    dot.style.left = `calc(50% + ${x}px)`;
    dot.style.top = `calc(50% + ${y}px)`;
    dot.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(dot);
    
    // Create neural lines connecting to center
    const line = document.createElement('div');
    line.className = 'neural-line';
    
    const length = Math.sqrt(x*x + y*y);
    line.style.width = `${length}px`;
    line.style.left = `calc(50% + ${x < 0 ? x : 0}px)`;
    line.style.top = `calc(50% + ${y < 0 ? y : 0}px)`;
    line.style.transform = `rotate(${Math.atan2(y, x)}rad)`;
    line.style.animationDelay = `${Math.random() * 2}s`;
    
    container.appendChild(line);
  }
}

// Create background particles
function createBackgroundParticles() {
  const container = document.querySelector('.particles-container');
  if (!container) return;
  
  // Clear existing particles
  container.innerHTML = '';
  
  // Create particles
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    particle.style.left = `${x}%`;
    particle.style.top = `${y}%`;
    
    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random opacity
    particle.style.opacity = Math.random() * 0.5 + 0.1;
    
    container.appendChild(particle);
    
    // Animate the particle
    animateParticle(particle);
  }
}

function animateParticle(particle) {
  const duration = Math.random() * 20000 + 10000;
  const xDest = Math.random() * 100;
  const yDest = Math.random() * 100;
  
  particle.animate([
    { left: particle.style.left, top: particle.style.top },
    { left: `${xDest}%`, top: `${yDest}%` }
  ], {
    duration: duration,
    easing: 'linear',
    fill: 'forwards'
  });
  
  setTimeout(() => {
    if (particle.isConnected) {
      animateParticle(particle);
    }
  }, duration);
}

// Animated counters
function animateCounters() {
  const counters = document.querySelectorAll('.counter-item [data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 30); // Update every 30ms
    let current = 0;
    
    const updateCounter = () => {
      current += step;
      if (current < target) {
        counter.textContent = Math.round(current);
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target;
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        updateCounter();
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  });
}

// Reveal cards on scroll
function initCardReveal() {
  const cards = document.querySelectorAll('.card-reveal');
  
  const revealCard = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('is-visible');
        }, 150 * Array.from(document.querySelectorAll('.card-reveal')).indexOf(entry.target) % 5);
        observer.unobserve(entry.target);
      }
    });
  };
  
  const cardObserver = new IntersectionObserver(revealCard, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });
  
  cards.forEach(card => {
    cardObserver.observe(card);
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      menuBtn.innerHTML = mobileMenu.classList.contains('hidden') 
        ? '<i class="fas fa-bars"></i>' 
        : '<i class="fas fa-times"></i>';
    });
    
    // Close menu when clicking on a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target) && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });
    
    // Make sure mobile menu is visible initially when loaded on mobile devices
    if (window.innerWidth < 768) {
      // Position it correctly
      const header = document.querySelector('header');
      if (header) {
        mobileMenu.style.top = header.offsetHeight + 'px';
      }
    }
  }
}

// Smooth scrolling for in-page links only
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only process anchor links (not page links)
      if (href.startsWith('#') && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Application showcase navigation - Replace with a simplified version since we no longer have carousel
function initAppShowcase() {
  // Simplified function that just adds hover effects or other interactions if needed
  const showcaseItems = document.querySelectorAll('.app-showcase .grid > div');
  
  if (!showcaseItems.length) return;
  
  // Add any showcase-specific functionality here if needed
  // For now, we'll just leave this as a placeholder since the grid layout doesn't need special handling
}

// Typing effect
function initTypingEffect() {
  const typingText = document.querySelector('.typing-text');
  const typingResponse = document.querySelector('.typing-response');
  const cursor = document.querySelector('.typing-cursor');
  
  if (!typingText || !typingResponse || !cursor) return;
  
  const text = typingText.textContent;
  typingText.textContent = '';
  let charIndex = 0;
  
  // Simulate typing for input
  function typeInput() {
    if (charIndex < text.length) {
      typingText.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeInput, 80 + Math.random() * 40);
    } else {
      setTimeout(startResponse, 800);
    }
  }
  
  // Simulate AI response
  function startResponse() {
    const responses = [
      "Artificial Intelligence (AI) refers to computer systems designed to mimic human intelligence and perform tasks that typically require human cognition such as learning, problem-solving, decision-making, and language understanding.",
      
      "AI systems can learn from data, recognize patterns, and make decisions with minimal human intervention. Modern AI applications include virtual assistants, recommendation systems, autonomous vehicles, and image recognition.",
      
      "The field continues to advance rapidly, with significant breakthroughs in areas like deep learning, natural language processing, and computer vision transforming how we interact with technology."
    ];
    
    let responseIndex = 0;
    let charIndex = 0;
    const currentResponse = responses.join("\n\n");
    
    function typeResponse() {
      if (charIndex < currentResponse.length) {
        typingResponse.textContent += currentResponse.charAt(charIndex);
        charIndex++;
        
        // Scroll to bottom of container
        typingResponse.parentElement.scrollTop = typingResponse.parentElement.scrollHeight;
        
        // Slow down for punctuation
        const nextChar = currentResponse.charAt(charIndex);
        const delay = ['.', '!', '?', ','].includes(nextChar) ? 500 : 20 + Math.random() * 20;
        
        setTimeout(typeResponse, delay);
      }
    }
    
    // Start typing response
    typeResponse();
  }
  
  // Trigger typing animation when section is visible
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      typeInput();
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  
  observer.observe(typingText.parentElement.parentElement.parentElement);
}

// Pledge button - only on pages with the pledge button
function initPledgeButton() {
  const pledgeBtn = document.getElementById('pledgeBtn');
  const pledgeMsg = document.getElementById('pledgeMsg');
  if (pledgeBtn && pledgeMsg) {
    pledgeBtn.addEventListener('click', () => {
      pledgeMsg.classList.remove('hidden');
      pledgeBtn.disabled = true;
      pledgeBtn.classList.add('opacity-50');
    });
  }
}

// Chatbot functionality
function initChatbot() {
  // Create chatbot elements
  const chatbotButton = document.createElement('div');
  chatbotButton.className = 'chatbot-button';
  chatbotButton.innerHTML = '<i class="fas fa-comment-dots"></i>';
  
  const chatbotContainer = document.createElement('div');
  chatbotContainer.className = 'chatbot-container hidden';
  
  chatbotContainer.innerHTML = `
    <div class="chatbot-header">
      <div class="flex items-center">
        <i class="fas fa-robot mr-2 text-blue-300"></i>
        <h3>AI Assistant</h3>
      </div>
      <button class="chatbot-close"><i class="fas fa-times"></i></button>
    </div>
    <div class="chatbot-messages"></div>
    <div class="chatbot-input">
      <input type="text" placeholder="Ask something about AI...">
      <button><i class="fas fa-paper-plane"></i></button>
    </div>
  `;
  
  document.body.appendChild(chatbotButton);
  document.body.appendChild(chatbotContainer);
  
  // Get elements
  const chatbotClose = chatbotContainer.querySelector('.chatbot-close');
  const chatbotMessages = chatbotContainer.querySelector('.chatbot-messages');
  const chatbotInput = chatbotContainer.querySelector('input');
  const chatbotSend = chatbotContainer.querySelector('.chatbot-input button');
  
  // Toggle chatbot
  chatbotButton.addEventListener('click', () => {
    chatbotContainer.classList.toggle('hidden');
    chatbotButton.classList.toggle('active');
    if (!chatbotContainer.classList.contains('hidden')) {
      // Add welcome message if first time
      if (chatbotMessages.children.length === 0) {
        addBotMessage("Hello! I'm your AI assistant. How can I help you with your AI questions today?");
      }
      chatbotInput.focus();
    }
  });
  
  // Close chatbot
  chatbotClose.addEventListener('click', () => {
    chatbotContainer.classList.add('hidden');
    chatbotButton.classList.remove('active');
  });
  
  // Send message
  const sendMessage = () => {
    const message = chatbotInput.value.trim();
    if (message) {
      addUserMessage(message);
      chatbotInput.value = '';
      
      // Process after a short delay to simulate thinking
      setTimeout(() => {
        const response = generateResponse(message);
        addBotMessage(response);
      }, 600);
    }
  };
  
  // Send on button click
  chatbotSend.addEventListener('click', sendMessage);
  
  // Send on enter key
  chatbotInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
  
  // Add user message to chat
  function addUserMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message user-message';
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Add bot message to chat
  function addBotMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot-message';
    messageElement.innerHTML = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }
  
  // Simple response generation based on keywords
  function generateResponse(message) {
    const messageLower = message.toLowerCase();
    
    // Common AI questions and responses
    if (messageLower.includes('what is ai') || messageLower.includes('define ai')) {
      return "Artificial Intelligence (AI) refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect.";
    }
    else if (messageLower.includes('machine learning') || messageLower.includes('ml')) {
      return "Machine Learning is a subset of AI that enables a system to learn from data rather than through explicit programming. It uses algorithms to identify patterns in data and make decisions with minimal human intervention.";
    }
    else if (messageLower.includes('deep learning')) {
      return "Deep Learning is a subset of machine learning that uses neural networks with several layers (hence 'deep'). It's particularly good at recognizing patterns and is used for image and speech recognition, among many other applications.";
    }
    else if (messageLower.includes('neural network')) {
      return "Neural networks are computing systems inspired by the biological neural networks in human brains. They consist of layers of interconnected nodes or 'neurons' that process data and learn to recognize patterns.";
    }
    else if (messageLower.includes('history of ai') || messageLower.includes('ai history')) {
      return "AI research began in the 1950s, with the term coined at the Dartmouth Conference in 1956. It has gone through cycles of optimism and 'AI winters'. Major breakthroughs came in the 2010s with deep learning, and in the 2020s with large language models like GPT.";
    }
    else if (messageLower.includes('chatgpt') || messageLower.includes('gpt')) {
      return "ChatGPT is a large language model developed by OpenAI. It's trained on vast amounts of text data to generate human-like responses and can handle a wide range of topics and tasks.";
    }
    else if (messageLower.includes('ai ethics') || messageLower.includes('ethical ai')) {
      return "AI ethics involves ensuring AI systems are designed and used responsibly, addressing issues like bias, privacy, accountability, and transparency. As AI becomes more powerful, ethical considerations become increasingly important.";
    }
    else if (messageLower.includes('ai jobs') || messageLower.includes('career in ai')) {
      return "Careers in AI include data scientist, machine learning engineer, AI researcher, robotics engineer, and AI ethicist. These roles typically require knowledge of programming, statistics, and domain expertise.";
    }
    else if (messageLower.includes('future of ai')) {
      return "The future of AI may include more advanced general AI, better integration into everyday life, improved healthcare diagnostics, autonomous systems, and addressing significant societal challenges. However, it also raises important ethical and regulatory questions.";
    }
    else if (messageLower.includes('hello') || messageLower.includes('hi') || messageLower.includes('hey')) {
      return "Hello! How can I help you with AI topics today?";
    }
    else if (messageLower.includes('thank')) {
      return "You're welcome! Is there anything else you'd like to know about AI?";
    }
    else {
      return "That's an interesting question about AI. While I'm a simple demonstration chatbot, I'd encourage you to explore the various sections of this website to learn more about AI concepts, applications, and impacts.";
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all features
  initMobileMenu();
  initSmoothScrolling();
  
  // Features that depend on page-specific elements
  const quizContainer = document.getElementById('quiz-container');
  if (quizContainer) {
    loadQuiz();
  }
  
  if (document.querySelector('.particles-container')) {
    createBackgroundParticles();
  }
  
  if (document.querySelector('.neural-connections')) {
    createNeuralConnections();
  }
  
  initCardReveal();
  initSectionReveal();
  
  if (document.querySelector('.counter-item')) {
    animateCounters();
  }
  
  if (document.querySelector('.app-showcase')) {
    initAppShowcase();
  }
  
  if (document.querySelector('.typing-text')) {
    initTypingEffect();
  }
  
  // Initialize pledge button
  initPledgeButton();
  
  // Initialize chatbot
  initChatbot();
  
  // Resize handler for neural connections
  window.addEventListener('resize', () => {
    if (document.querySelector('.neural-connections')) {
      createNeuralConnections();
    }
  });

  // Dark mode toggle
  const darkToggle = document.createElement('button');
  darkToggle.innerHTML = '🌙';
  darkToggle.title = 'Toggle dark mode';
  darkToggle.className = 'ml-4 px-2 py-1 rounded bg-gray-200 hover:bg-gray-300 text-xl';
  
  if (document.querySelector('header nav')) {
    document.querySelector('header nav').appendChild(darkToggle);
    darkToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark');
      darkToggle.innerHTML = document.body.classList.contains('dark') ? '☀️' : '🌙';
      
      // Update quiz colors when dark mode changes
      updateQuizDarkMode();
      
      // Save dark mode preference to localStorage
      localStorage.setItem('darkMode', document.body.classList.contains('dark'));
    });
  }
  
  // Create enhanced mobile version of dark mode toggle for small screens
  const mobileDarkToggle = document.createElement('button');
  mobileDarkToggle.innerHTML = '🌙';
  mobileDarkToggle.title = 'Toggle dark mode';
  mobileDarkToggle.className = 'mobile-dark-toggle';
  document.body.appendChild(mobileDarkToggle);
  
  mobileDarkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    mobileDarkToggle.innerHTML = document.body.classList.contains('dark') ? '☀️' : '🌙';
    
    // Add haptic feedback animation
    mobileDarkToggle.classList.add('animate-tap');
    setTimeout(() => {
      mobileDarkToggle.classList.remove('animate-tap');
    }, 300);
    
    // Update quiz colors when dark mode changes
    updateQuizDarkMode();
    
    // Save dark mode preference to localStorage
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
  });
  
  // Show mobile dark toggle only on small screens
  function updateDarkToggleVisibility() {
    if (window.innerWidth < 768) {
      mobileDarkToggle.style.display = 'flex';
    } else {
      mobileDarkToggle.style.display = 'none';
    }
  }
  
  // Initialize toggle visibility
  updateDarkToggleVisibility();
  
  // Update on resize
  window.addEventListener('resize', updateDarkToggleVisibility);
  
  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
    if (darkToggle) {
      darkToggle.innerHTML = '☀️';
    }
    mobileDarkToggle.innerHTML = '☀️';
    updateQuizDarkMode();
  }

  // Add scroll event for navbar background
  const header = document.querySelector('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('bg-blue-900/95', 'backdrop-blur-sm');
      } else {
        header.classList.remove('bg-blue-900/95', 'backdrop-blur-sm');
      }
    });
    
    // Fix for mobile menu positioning on scroll
    if (window.innerWidth < 768) {
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenu) {
        mobileMenu.style.top = header.offsetHeight + 'px';
      }
    }
  }
  
  // Add window resize handler for menu positioning
  window.addEventListener('resize', () => {
    const header = document.querySelector('header');
    const mobileMenu = document.getElementById('mobileMenu');
    if (header && mobileMenu && window.innerWidth < 768) {
      mobileMenu.style.top = header.offsetHeight + 'px';
    }
  });
}); 