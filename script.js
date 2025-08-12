document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Testimonial slider
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    
    function showTestimonial(index) {
        testimonialCards.forEach(card => card.classList.remove('active'));
        testimonialCards[index].classList.add('active');
    }
    
    prevBtn.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentIndex);
    });
    
    nextBtn.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % testimonialCards.length;
        showTestimonial(currentIndex);
    });
    
    // Initialize first testimonial
    showTestimonial(currentIndex);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.section-title, .about-content, .resume-timeline, .skills-grid, .projects-grid, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
    
    // Resume Download Functionality
    const downloadResumeBtn = document.getElementById('downloadResume');
    if (downloadResumeBtn) {
        downloadResumeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Create temporary download link
            const link = document.createElement('a');
            link.href = './asset/zahid_iqbal.pdf';
            link.download = 'Zahid_Iqbal_Resume.pdf';
            link.target = '_blank';
            
            // Append to body and click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            // Show notification
            showNotification('Resume download started!', 'success');
        });
    }
    
    // Enhanced Animation on Scroll
    function enhancedAnimateOnScroll() {
        const animateElements = document.querySelectorAll('.animate-on-scroll, .animate-slide-right, .animate-slide-left, .animate-fade-in, .animate-fade-up, .animate-card');
        
        animateElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate');
            }
        });
    }
    
    window.addEventListener('scroll', enhancedAnimateOnScroll);
    enhancedAnimateOnScroll(); // Run once on page load
    
    // Typing Animation
    const typedTextElement = document.getElementById('typed-text');
    if (typedTextElement) {
        const texts = [
            'React & Next.js',
            'Node.js & Express',
            'Blockchain & Web3',
            'Python & AI',
            'TypeScript',
            'MERN Stack'
        ];
        
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeText() {
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                typedTextElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typedTextElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 2000; // Pause before deleting
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before next word
            }
            
            setTimeout(typeText, typingSpeed);
        }
        
        typeText();
    }
    
    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Add smooth fade-in animation to page load
    window.addEventListener('load', function() {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    });
    
    // Contact Form submission with EmailJS
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
    
    async function handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const submitBtn = form.querySelector('button[type="submit"]');
        
        // Get form values
        const name = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email"]').value.trim();
        const subject = form.querySelector('input[name="subject"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();
        
        // Validation
        if (!name || !email || !message) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const originalText = submitBtn.textContent;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        try {
            // Using EmailJS with your Service ID and Template ID
            await emailjs.send('service_portfolio', 'template_mty3pdv', {
                from_name: name,
                from_email: email,
                subject: subject || 'New message from portfolio',
                message: message
            });
            
            showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            form.reset();
            
        } catch (error) {
            console.error('Error sending email:', error);
            // Fallback to mailto if EmailJS fails
            const mailtoLink = `mailto:zahid@example.com?subject=${encodeURIComponent(subject || 'Portfolio Contact')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            window.open(mailtoLink, '_blank');
            showNotification('Opening your email client...', 'info');
        } finally {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
    
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${getNotificationIcon(type)}"></i>
                <span>${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Close notification
        const closeBtn = notification.querySelector('.notification-close');
        closeBtn.addEventListener('click', () => notification.remove());
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 5000);
    }
    
    function getNotificationIcon(type) {
        switch(type) {
            case 'success': return 'fa-check-circle';
            case 'error': return 'fa-exclamation-circle';
            case 'info': return 'fa-info-circle';
            default: return 'fa-info-circle';
        }
    }
    
    // Newsletter form with validation
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value.trim();
            const submitBtn = this.querySelector('button[type="submit"]');
            
            if (!email) {
                showNotification('Please enter your email address.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Show loading state
            const originalHTML = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
            submitBtn.disabled = true;
            
            // Simulate newsletter subscription (you can integrate with your preferred service)
            setTimeout(() => {
                console.log('Newsletter subscription:', email);
                showNotification('Thank you for subscribing to my newsletter!', 'success');
                emailInput.value = '';
                
                // Restore button
                submitBtn.innerHTML = originalHTML;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
    
    // Add animation class to hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroButtons = document.querySelector('.hero-buttons');
    
    setTimeout(() => {
        heroTitle.style.animation = 'fadeInLeft 1s ease forwards';
    }, 200);
    
    setTimeout(() => {
        heroSubtitle.style.animation = 'fadeInLeft 1s ease forwards';
    }, 400);
    
    setTimeout(() => {
        heroButtons.style.animation = 'fadeInLeft 1s ease forwards';
    }, 600);
    
    setTimeout(() => {
        document.querySelector('.hero-image').style.animation = 'fadeInRight 1s ease forwards';
    }, 800);

    // Initialize Chat Widget
    const chatWidget = new ChatWidget();
    
    // Initialize WhatsApp Widget
    const whatsappWidget = new WhatsAppWidget();
    
    // Welcome message after 3 seconds
    setTimeout(() => {
        if (!chatWidget.isOpen) {
            chatWidget.showNotification("👋 Hi! I'm here to help!");
        }
    }, 3000);
});

// Real-Time Chat Functionality
class ChatWidget {
    constructor() {
        this.isOpen = false;
        this.isMinimized = false;
        this.messageCount = 1;
        this.init();
    }

    init() {
        this.chatToggle = document.getElementById('chatToggle');
        this.chatWidget = document.getElementById('chatWidget');
        this.chatHeader = document.getElementById('chatHeader');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendMessage');
        this.messagesContainer = document.getElementById('chatMessages');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.minimizeBtn = document.getElementById('minimizeChat');
        this.closeBtn = document.getElementById('closeChat');
        this.chatBadge = document.getElementById('chatBadge');
        this.chatNotification = document.getElementById('chatNotification');

        this.bindEvents();
        this.setupAutoResponses();
    }

    bindEvents() {
        // Toggle chat
        this.chatToggle.addEventListener('click', () => {
            this.toggleChat();
        });

        // Minimize chat
        this.minimizeBtn.addEventListener('click', () => {
            this.minimizeChat();
        });

        // Close chat
        this.closeBtn.addEventListener('click', () => {
            this.closeChat();
        });

        // Send message
        this.sendButton.addEventListener('click', () => {
            this.sendMessage();
        });

        // Enter key to send
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });

        // Auto-expand on typing
        this.messageInput.addEventListener('focus', () => {
            if (this.isMinimized) {
                this.expandChat();
            }
        });
    }

    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.chatWidget.classList.add('active');
        this.isOpen = true;
        this.messageCount = 0;
        this.updateBadge();
        setTimeout(() => {
            this.messageInput.focus();
        }, 300);
    }

    closeChat() {
        this.chatWidget.classList.remove('active');
        this.chatWidget.classList.remove('minimized');
        this.isOpen = false;
        this.isMinimized = false;
    }

    minimizeChat() {
        this.chatWidget.classList.add('minimized');
        this.isMinimized = true;
    }

    expandChat() {
        this.chatWidget.classList.remove('minimized');
        this.isMinimized = false;
    }

    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        
        // Show typing indicator
        this.showTyping();
        
        // Auto-respond after delay
        setTimeout(() => {
            this.hideTyping();
            this.generateResponse(message);
        }, 1500 + Math.random() * 1000);
    }

    addMessage(text, sender = 'bot', time = null) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const currentTime = time || new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        if (sender === 'user') {
            messageDiv.innerHTML = `
                <div class="message-avatar">U</div>
                <div class="message-content">
                    <p>${text}</p>
                    <span class="message-time">${currentTime}</span>
                </div>
            `;
        } else {
            messageDiv.innerHTML = `
                <div class="message-avatar">
                    <img src="./asset/zahid.png" alt="Zahid">
                </div>
                <div class="message-content">
                    <p>${text}</p>
                    <span class="message-time">${currentTime}</span>
                </div>
            `;
        }

        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();

        // Show notification if chat is closed
        if (!this.isOpen && sender === 'bot') {
            this.showNotification('New message from Zahid!');
            this.messageCount++;
            this.updateBadge();
        }
    }

    showTyping() {
        this.typingIndicator.style.display = 'flex';
        this.scrollToBottom();
    }

    hideTyping() {
        this.typingIndicator.style.display = 'none';
    }

    scrollToBottom() {
        setTimeout(() => {
            this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
        }, 100);
    }

    updateBadge() {
        if (this.messageCount > 0) {
            this.chatBadge.textContent = this.messageCount;
            this.chatBadge.style.display = 'flex';
        } else {
            this.chatBadge.style.display = 'none';
        }
    }

    showNotification(text) {
        this.chatNotification.textContent = text;
        this.chatNotification.classList.add('show');
        
        setTimeout(() => {
            this.chatNotification.classList.remove('show');
        }, 3000);
    }

    setupAutoResponses() {
        this.responses = {
            greeting: [
                "Hello! Thanks for visiting my portfolio. How can I help you today?",
                "Hi there! I'm Zahid. What would you like to know about my work?",
                "Hey! Great to see you here. What brings you to my portfolio?",
                "Welcome! I'm excited to share my work with you. What interests you most?"
            ],
            skills: [
                "I specialize in Full Stack Development with React, Node.js, and Blockchain technologies. I'm proficient in JavaScript, TypeScript, Python, Solidity, MongoDB, and modern web frameworks.",
                "My technical stack includes: Frontend (React, Next.js, HTML5, CSS3), Backend (Node.js, Express.js), Databases (MongoDB, PostgreSQL), Blockchain (Solidity, Web3), and Languages (JavaScript, TypeScript, Python, C++, Go, Rust).",
                "I'm skilled in the MERN stack, blockchain development, RESTful APIs, and building scalable web applications. I also work with modern tools like Docker, Git, and cloud platforms."
            ],
            projects: [
                "I've built several exciting projects: MetaMask Clone (React + Blockchain), Smart Kisaan (Agricultural platform with AI), Netflix Clone (Frontend showcase), and QR Code Generator (TypeScript backend). Each demonstrates different aspects of my skills!",
                "My portfolio includes blockchain applications, full-stack web platforms, and innovative solutions. The MetaMask clone shows my Web3 expertise, while Smart Kisaan demonstrates my ability to solve real-world problems.",
                "I love creating impactful solutions! From cryptocurrency wallets to agricultural platforms, my projects span various domains and showcase modern development practices."
            ],
            education: [
                "I'm currently pursuing my BS in Computer Science at FAST-NUCES Faisalabad (2022-Present), focusing on software development and blockchain technologies.",
                "My educational background includes Pre-Engineering from Punjab Group of College Lahore (2019-2021) and ongoing Computer Science studies at one of Pakistan's top universities.",
                "I'm a Computer Science student at FAST-NUCES with strong foundations in mathematics, programming, and emerging technologies like blockchain and AI."
            ],
            experience: [
                "I have hands-on experience in full-stack development, blockchain integration, and modern web technologies. I've worked on projects ranging from cryptocurrency wallets to agricultural platforms.",
                "My experience includes developing React applications, building Node.js backends, working with blockchain technologies, and creating user-friendly interfaces for complex systems.",
                "I've gained practical experience through various projects, focusing on clean code, scalable architecture, and user-centric design principles."
            ],
            contact: [
                "You can reach me at zahidmiana56@gmail.com or call me at +92 308 5897061. I'm always open to discussing new opportunities and exciting projects!",
                "Feel free to contact me via email, phone, or through my social media profiles on LinkedIn and GitHub. I respond quickly to all inquiries!",
                "I'd love to hear from you! Use the contact form on my website, send me an email, or connect with me on professional networks."
            ],
            hiring: [
                "Yes, I'm actively looking for full-time opportunities and freelance projects! I'm particularly interested in roles involving blockchain development, full-stack web development, or innovative tech solutions.",
                "I'm available for hire and excited about new challenges! Whether it's a startup, established company, or freelance project, I'm ready to contribute my skills.",
                "Absolutely! I'm open to both remote and on-site opportunities in web development, blockchain, or software engineering roles."
            ],
            location: [
                "I'm based in Faisalabad, Pakistan, but I'm open to remote work and relocation opportunities for the right position.",
                "Currently located in Faisalabad, Pakistan. I'm flexible with work arrangements and open to discussing remote or hybrid opportunities.",
                "I'm from Pakistan and currently studying in Faisalabad, but I'm excited about global opportunities and remote collaborations."
            ],
            technologies: [
                "I work with cutting-edge technologies including React, Node.js, MongoDB, Solidity, TypeScript, Python, Docker, and cloud platforms like AWS and Vercel.",
                "My tech stack covers frontend frameworks (React, Next.js), backend technologies (Node.js, Express), databases (MongoDB, PostgreSQL), blockchain (Solidity, Web3), and modern development tools.",
                "I stay updated with the latest technologies and love working with React, TypeScript, blockchain platforms, AI integration, and modern deployment solutions."
            ],
            portfolio: [
                "This portfolio showcases my best work including blockchain applications, full-stack projects, and modern web solutions. Each project demonstrates different technical skills and problem-solving approaches.",
                "I've designed this portfolio to highlight my technical expertise, project experience, and professional growth. It features glassmorphism design, interactive elements, and comprehensive project showcases.",
                "My portfolio reflects my passion for modern web development, attention to design details, and ability to create engaging user experiences."
            ],
            certificates: [
                "I have certifications in JavaScript, MERN Stack development, and Python programming. I continuously update my skills through online courses and practical projects.",
                "My certifications include JavaScript fundamentals, full-stack development, and Python programming. I believe in continuous learning and staying current with industry standards.",
                "I hold certifications in key technologies and frameworks, demonstrating my commitment to professional development and technical excellence."
            ],
            github: [
                "Check out my GitHub profile @ZahidMiana to see my code, contributions, and project repositories. I maintain clean, well-documented code with proper version control.",
                "My GitHub showcases various projects including blockchain applications, web platforms, and experimental code. I believe in open-source collaboration and knowledge sharing.",
                "Visit my GitHub to explore my coding style, project structure, and technical implementations. I regularly push new projects and updates."
            ],
            linkedin: [
                "Connect with me on LinkedIn for professional networking, project updates, and industry discussions. I'm active in the developer community.",
                "My LinkedIn profile highlights my professional journey, skills, and project achievements. Let's connect and explore collaboration opportunities!",
                "I use LinkedIn to share insights about web development, blockchain technology, and career growth. Feel free to connect and engage!"
            ],
            blockchain: [
                "I'm passionate about blockchain technology and have built several Web3 applications. My MetaMask clone demonstrates my understanding of cryptocurrency wallets and blockchain integration.",
                "Blockchain fascinates me! I work with Solidity for smart contracts, Web3.js for blockchain interaction, and have experience with various blockchain platforms.",
                "I see blockchain as the future of decentralized applications. My projects explore DeFi, wallet development, and smart contract implementation."
            ],
            ai: [
                "I integrate AI capabilities into my projects, like the Smart Kisaan platform which uses AI for agricultural insights. I'm exploring machine learning applications in web development.",
                "AI integration is becoming essential in modern applications. I work with AI APIs, implement intelligent features, and explore automation possibilities.",
                "I'm excited about AI's potential in software development and actively incorporate intelligent features into my projects for enhanced user experiences."
            ],
            future: [
                "I'm excited about emerging technologies like Web3, AI, and advanced frontend frameworks. My goal is to become a leading expert in blockchain and full-stack development.",
                "The future of web development is incredibly exciting! I'm focusing on mastering advanced blockchain concepts, AI integration, and building scalable applications.",
                "I envision myself contributing to innovative tech solutions, possibly starting my own tech company, and mentoring other developers in emerging technologies."
            ],
            collaboration: [
                "I love collaborating with other developers, designers, and entrepreneurs. Whether it's open-source projects, startup ideas, or learning opportunities, I'm always interested!",
                "Collaboration drives innovation! I'm open to joint projects, mentorship opportunities, and building amazing solutions with like-minded professionals.",
                "Let's build something amazing together! I'm always looking for collaboration opportunities in web development, blockchain projects, or innovative startups."
            ],
            default: [
                "That's a great question! I'd love to discuss this in more detail. Feel free to reach out via the contact form, email, or WhatsApp for a comprehensive conversation.",
                "Interesting! For detailed discussions about specific topics or custom requirements, please contact me directly. I'm always happy to provide more information.",
                "Thanks for your curiosity! For in-depth answers or personalized guidance, let's connect through email or schedule a call. I'm here to help!",
                "I appreciate your interest! While I try to cover everything here, some topics deserve a deeper conversation. Let's connect directly to discuss further."
            ]
        };

        // Enhanced keyword mapping for better question understanding
        this.keywordMap = {
            greeting: ['hello', 'hi', 'hey', 'good', 'morning', 'evening', 'greetings'],
            skills: ['skill', 'technology', 'tech', 'programming', 'development', 'coding', 'languages', 'framework', 'tools'],
            projects: ['project', 'work', 'portfolio', 'built', 'created', 'developed', 'application', 'app', 'website'],
            education: ['education', 'study', 'university', 'college', 'degree', 'student', 'learning', 'academic'],
            experience: ['experience', 'worked', 'professional', 'career', 'background', 'expertise'],
            contact: ['contact', 'reach', 'email', 'phone', 'call', 'message', 'connect'],
            hiring: ['hire', 'job', 'available', 'opportunity', 'work', 'employment', 'freelance', 'remote'],
            location: ['location', 'where', 'based', 'from', 'live', 'pakistan', 'faisalabad'],
            technologies: ['react', 'node', 'javascript', 'python', 'blockchain', 'mongodb', 'typescript'],
            portfolio: ['portfolio', 'website', 'design', 'interface', 'ui', 'ux'],
            certificates: ['certificate', 'certification', 'qualified', 'trained', 'course'],
            github: ['github', 'code', 'repository', 'git', 'version'],
            linkedin: ['linkedin', 'professional', 'network', 'profile'],
            blockchain: ['blockchain', 'crypto', 'web3', 'solidity', 'smart', 'contract', 'defi'],
            ai: ['ai', 'artificial', 'intelligence', 'machine', 'learning', 'smart'],
            future: ['future', 'goal', 'plan', 'vision', 'aspiration', 'next'],
            collaboration: ['collaborate', 'partnership', 'team', 'together', 'joint']
        };
    }

    generateResponse(userMessage) {
        const message = userMessage.toLowerCase();
        let responseType = 'default';
        let matchScore = 0;

        // Enhanced keyword matching with scoring
        for (const [category, keywords] of Object.entries(this.keywordMap)) {
            let score = 0;
            for (const keyword of keywords) {
                if (message.includes(keyword)) {
                    score += keyword.length; // Longer, more specific keywords get higher scores
                }
            }
            if (score > matchScore) {
                matchScore = score;
                responseType = category;
            }
        }

        // Special question patterns
        if (message.includes('who are you') || message.includes('about yourself')) {
            responseType = 'greeting';
        } else if (message.includes('what do you do') || message.includes('what is your work')) {
            responseType = 'skills';
        } else if (message.includes('how to contact') || message.includes('get in touch')) {
            responseType = 'contact';
        } else if (message.includes('are you available') || message.includes('looking for work')) {
            responseType = 'hiring';
        } else if (message.includes('where are you') || message.includes('your location')) {
            responseType = 'location';
        } else if (message.includes('show me your work') || message.includes('your projects')) {
            responseType = 'projects';
        } else if (message.includes('your education') || message.includes('where did you study')) {
            responseType = 'education';
        } else if (message.includes('your experience') || message.includes('how long')) {
            responseType = 'experience';
        } else if (message.includes('github') || message.includes('source code')) {
            responseType = 'github';
        } else if (message.includes('linkedin') || message.includes('connect with you')) {
            responseType = 'linkedin';
        } else if (message.includes('future plans') || message.includes('goals')) {
            responseType = 'future';
        } else if (message.includes('work together') || message.includes('collaborate')) {
            responseType = 'collaboration';
        }

        // Get random response from the determined category
        const responses = this.responses[responseType];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        this.addMessage(randomResponse, 'bot');

        // Add follow-up suggestions for better engagement
        setTimeout(() => {
            this.addFollowUpSuggestions(responseType);
        }, 1000);
    }

    addFollowUpSuggestions(responseType) {
        const suggestions = {
            greeting: ["What would you like to know about my projects?", "Interested in my technical skills?", "Want to see my work experience?"],
            skills: ["Want to see these skills in action in my projects?", "Curious about my learning journey?", "Interested in specific technologies?"],
            projects: ["Would you like to know more about any specific project?", "Want to see the live demos?", "Curious about the technical challenges?"],
            education: ["Want to know about my practical experience?", "Interested in my ongoing projects?", "Curious about my future plans?"],
            contact: ["Ready to discuss a project?", "Want to schedule a call?", "Need my resume?"],
            hiring: ["Want to discuss specific requirements?", "Interested in my availability?", "Need to see my portfolio?"]
        };

        const suggestionList = suggestions[responseType] || suggestions.greeting;
        const randomSuggestion = suggestionList[Math.floor(Math.random() * suggestionList.length)];
        
        setTimeout(() => {
            this.addMessage(`💡 ${randomSuggestion}`, 'bot');
        }, 500);
    }
}

// WhatsApp Floating Widget
class WhatsAppWidget {
    constructor() {
        this.isOpen = false;
        this.isDragging = false;
        this.phoneNumber = '+923085897061'; // Your WhatsApp number
        this.init();
    }

    init() {
        this.whatsappFloat = document.getElementById('whatsappFloat');
        this.whatsappWidget = document.getElementById('whatsappWidget');
        this.whatsappClose = document.getElementById('whatsappClose');
        this.whatsappSend = document.getElementById('whatsappSend');
        this.whatsappInput = document.getElementById('whatsappInput');
        this.whatsappNotification = document.getElementById('whatsappNotification');

        this.bindEvents();
        this.makeDraggable();
        this.showNotification();
    }

    bindEvents() {
        // Toggle WhatsApp widget
        this.whatsappFloat.addEventListener('click', (e) => {
            if (!this.isDragging) {
                this.toggleWidget();
            }
        });

        // Close widget
        this.whatsappClose.addEventListener('click', () => {
            this.closeWidget();
        });

        // Send message to WhatsApp
        this.whatsappSend.addEventListener('click', () => {
            this.sendToWhatsApp();
        });

        // Enter key to send
        this.whatsappInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendToWhatsApp();
            }
        });
    }

    makeDraggable() {
        let startX, startY, initialX, initialY;

        this.whatsappFloat.addEventListener('dragstart', (e) => {
            e.dataTransfer.effectAllowed = 'move';
            startX = e.clientX;
            startY = e.clientY;
            const rect = this.whatsappFloat.getBoundingClientRect();
            initialX = rect.left;
            initialY = rect.top;
            this.isDragging = true;
            this.whatsappFloat.classList.add('dragging');
        });

        this.whatsappFloat.addEventListener('dragend', (e) => {
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            const newX = Math.max(30, Math.min(window.innerWidth - 90, initialX + deltaX));
            const newY = Math.max(30, Math.min(window.innerHeight - 90, initialY + deltaY));
            
            this.whatsappFloat.style.right = 'auto';
            this.whatsappFloat.style.bottom = 'auto';
            this.whatsappFloat.style.left = newX + 'px';
            this.whatsappFloat.style.top = newY + 'px';
            
            setTimeout(() => {
                this.isDragging = false;
                this.whatsappFloat.classList.remove('dragging');
            }, 100);
        });

        // Handle drag over document
        document.addEventListener('dragover', (e) => {
            e.preventDefault();
        });

        document.addEventListener('drop', (e) => {
            e.preventDefault();
        });
    }

    toggleWidget() {
        if (this.isOpen) {
            this.closeWidget();
        } else {
            this.openWidget();
        }
    }

    openWidget() {
        this.whatsappWidget.classList.add('active');
        this.isOpen = true;
        this.hideNotification();
        setTimeout(() => {
            this.whatsappInput.focus();
        }, 300);
    }

    closeWidget() {
        this.whatsappWidget.classList.remove('active');
        this.isOpen = false;
    }

    sendToWhatsApp() {
        const message = this.whatsappInput.value.trim();
        if (!message) return;

        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${this.phoneNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
        this.whatsappInput.value = '';
        this.closeWidget();
    }

    showNotification() {
        this.whatsappNotification.style.display = 'flex';
        
        // Hide notification after 10 seconds
        setTimeout(() => {
            this.hideNotification();
        }, 10000);
    }

    hideNotification() {
        this.whatsappNotification.style.display = 'none';
    }
}