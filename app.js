// State Management
const STATE = {
    currentPage: 'home',
    currentArticleId: null,
    selectedCategory: 'all',
    searchQuery: '',
    articles: [
        {
            id: "1",
            title: "Artificial Intelligence Revolutionizing Healthcare in 2025",
            slug: "ai-healthcare-2025",
            excerpt: "Discover how AI is transforming medical diagnosis and patient care delivery",
            content: "<h2>Introduction</h2><p>Artificial intelligence has become a game-changer in the healthcare industry. From diagnostic imaging to personalized treatment plans, AI is revolutionizing how we approach medicine.</p><h2>Key Applications</h2><p>AI-powered diagnostic tools can now detect diseases with accuracy rates exceeding 98%. Machine learning algorithms analyze patient data to predict health risks before symptoms appear.</p>",
            category: "Tech",
            tags: ["AI", "Healthcare", "Innovation"],
            author: "Dr. Sarah Chen",
            date: "2025-11-18",
            featured_image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
            status: "published",
            views: 2840,
            is_featured: true
        },
        {
            id: "2",
            title: "Startup Funding Trends: Series A Becomes More Challenging",
            slug: "startup-funding-trends-2025",
            excerpt: "Analysis of how Series A funding landscape has shifted in 2025",
            content: "<h2>The Shift in VC Funding</h2><p>Series A funding has become increasingly competitive. VCs now demand higher revenue multiples and clearer paths to profitability before committing capital.</p>",
            category: "Business",
            tags: ["Startups", "Funding", "VC"],
            author: "John Martinez",
            date: "2025-11-17",
            featured_image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
            status: "published",
            views: 1540,
            is_featured: true
        },
        {
            id: "3",
            title: "Minimalist Interior Design: Less is More",
            slug: "minimalist-design-guide",
            excerpt: "A complete guide to creating beautiful minimalist spaces",
            content: "<h2>Core Principles</h2><p>Minimalism isn't about having nothing—it's about having the right things. Focus on quality over quantity.</p>",
            category: "Design",
            tags: ["Design", "Minimalism", "Interior"],
            author: "Emma Wilson",
            date: "2025-11-16",
            featured_image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop",
            status: "published",
            views: 980,
            is_featured: true
        },
        {
            id: "4",
            title: "Remote Work: Building a Productive Home Office",
            slug: "remote-work-home-office",
            excerpt: "Tips for creating an ergonomic and productive workspace at home",
            content: "<h2>Workspace Setup</h2><p>A proper home office setup is crucial for productivity and health. Invest in a good chair, desk, and lighting.</p>",
            category: "Lifestyle",
            tags: ["Remote Work", "Productivity", "Home Office"],
            author: "Michael Zhang",
            date: "2025-11-15",
            featured_image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800&h=400&fit=crop",
            status: "published",
            views: 1203,
            is_featured: false
        },
        {
            id: "5",
            title: "Web Development: Latest JavaScript Frameworks",
            slug: "javascript-frameworks-2025",
            excerpt: "Comparing top JavaScript frameworks and their use cases",
            content: "<h2>Framework Landscape</h2><p>The JavaScript ecosystem continues to evolve with new frameworks and improvements to existing ones.</p>",
            category: "Tech",
            tags: ["JavaScript", "Web Dev", "Frameworks"],
            author: "Dr. Sarah Chen",
            date: "2025-11-14",
            featured_image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=400&fit=crop",
            status: "published",
            views: 2100,
            is_featured: false
        },
        {
            id: "6",
            title: "Sustainable Business Practices",
            slug: "sustainable-business",
            excerpt: "How companies are adopting eco-friendly practices",
            content: "<h2>Corporate Sustainability</h2><p>More companies are realizing that sustainability isn't just good for the planet—it's good for business too.</p>",
            category: "Business",
            tags: ["Sustainability", "Business", "Corporate"],
            author: "John Martinez",
            date: "2025-11-13",
            featured_image: "https://images.unsplash.com/photo-1556740712-a01ebb03aebf?w=800&h=400&fit=crop",
            status: "published",
            views: 845,
            is_featured: false
        },
        {
            id: "7",
            title: "UX Design Principles Every Designer Should Know",
            slug: "ux-design-principles",
            excerpt: "Essential UX principles for creating user-friendly interfaces",
            content: "<h2>Core UX Principles</h2><p>Great UX design is about understanding user needs and creating solutions that are both functional and delightful.</p>",
            category: "Design",
            tags: ["UX", "Design", "User Experience"],
            author: "Emma Wilson",
            date: "2025-11-12",
            featured_image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
            status: "published",
            views: 1567,
            is_featured: false
        },
        {
            id: "8",
            title: "Mental Health Awareness in the Workplace",
            slug: "mental-health-workplace",
            excerpt: "Creating supportive work environments for mental wellness",
            content: "<h2>Workplace Mental Health</h2><p>Employers are increasingly recognizing the importance of mental health support in creating productive workplaces.</p>",
            category: "Lifestyle",
            tags: ["Mental Health", "Workplace", "Wellness"],
            author: "Michael Zhang",
            date: "2025-11-11",
            featured_image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
            status: "published",
            views: 756,
            is_featured: false
        },
        {
            id: "9",
            title: "Cloud Computing: The Future of Infrastructure",
            slug: "cloud-computing-future",
            excerpt: "Why cloud computing is reshaping enterprise infrastructure",
            content: "<h2>Cloud Infrastructure Evolution</h2><p>Cloud computing has moved from being an alternative to becoming the standard for infrastructure deployment.</p>",
            category: "Tech",
            tags: ["Cloud", "Infrastructure", "Technology"],
            author: "Dr. Sarah Chen",
            date: "2025-11-10",
            featured_image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
            status: "draft",
            views: 0,
            is_featured: false
        },
        {
            id: "10",
            title: "Cybersecurity Best Practices for Small Teams",
            slug: "cybersecurity-small-teams",
            excerpt: "Essential security measures for small development teams",
            content: "<h2>Security Essentials</h2><p>Small teams often overlook critical security practices. Here are the essentials every team should implement.</p>",
            category: "Tech",
            tags: ["Security", "DevOps", "Best Practices"],
            author: "Dr. Sarah Chen",
            date: "2025-11-20",
            featured_image: "https://images.unsplash.com/photo-1550439062-1d5142147f17?w=800&h=400&fit=crop",
            status: "scheduled",
            scheduled_for: "2025-11-25",
            views: 0,
            is_featured: false
        }
    ],
    categories: [
        { id: "1", name: "Tech", slug: "tech", color: "#00BCD4", icon: "⚙️" },
        { id: "2", name: "Business", slug: "business", color: "#4CAF50", icon: "💼" },
        { id: "3", name: "Design", slug: "design", color: "#FF5722", icon: "🎨" },
        { id: "4", name: "Lifestyle", slug: "lifestyle", color: "#9C27B0", icon: "✨" }
    ],
    isLoggedIn: false,
    currentUser: null,
    adminCredentials: {
        email: "admin@example.com",
        password: "g>|NfK5omI7y]+A;6*",
        name: "Administrator",
        role: "ADMIN"
    },
    editingArticle: null,
    adminPage: 'dashboard',
    articlesPerPage: 6,
    currentArticlePage: 1,
    carouselIndex: 0,
    autosaveTimer: null,
    lastSaved: null,
    codeLanguages: [
        { name: 'JavaScript', value: 'javascript', prism: 'javascript' },
        { name: 'Python', value: 'python', prism: 'python' },
        { name: 'Java', value: 'java', prism: 'java' },
        { name: 'C++', value: 'cpp', prism: 'cpp' },
        { name: 'HTML', value: 'html', prism: 'markup' },
        { name: 'CSS', value: 'css', prism: 'css' },
        { name: 'SQL', value: 'sql', prism: 'sql' },
        { name: 'Bash', value: 'bash', prism: 'bash' },
        { name: 'JSON', value: 'json', prism: 'json' },
        { name: 'XML', value: 'xml', prism: 'xml' },
        { name: 'Plain Text', value: 'plaintext', prism: 'plaintext' }
    ]
};

// Utility Functions
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.style.backgroundColor = type === 'error' ? 'var(--color-red-500)' : 'var(--color-primary)';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function showModal(content, onConfirm) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div style="background: white; padding: 32px; border-radius: 12px; max-width: 400px; width: 90%;">
            <p style="font-size: 18px; margin-bottom: 24px; color: var(--color-text);">${content}</p>
            <div style="display: flex; gap: 12px; justify-content: flex-end;">
                <button onclick="this.closest('.modal').remove()" style="padding: 10px 20px; border: 1px solid var(--color-border); background: white; border-radius: 6px; cursor: pointer;">Cancel</button>
                <button id="confirmBtn" style="padding: 10px 20px; border: none; background: var(--color-red-500); color: white; border-radius: 6px; cursor: pointer;">Confirm</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.querySelector('#confirmBtn').onclick = () => {
        onConfirm();
        modal.remove();
    };
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function calculateReadTime(content) {
    const text = content.replace(/<[^>]*>/g, '');
    const words = text.split(/\s+/).length;
    const minutes = Math.ceil(words / 200);
    return `${minutes} min read`;
}

function generateSlug(title) {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Navigation
function navigate(page, params = {}) {
    STATE.currentPage = page;
    if (params.articleId) STATE.currentArticleId = params.articleId;
    if (params.adminPage) STATE.adminPage = params.adminPage;
    render();
    window.scrollTo(0, 0);
}

// Article Functions
function getPublishedArticles() {
    const now = new Date();
    return STATE.articles.filter(article => {
        if (article.status === 'published') return true;
        if (article.status === 'scheduled' && article.scheduled_for) {
            const scheduledDate = new Date(article.scheduled_for);
            if (scheduledDate <= now) {
                article.status = 'published';
                return true;
            }
        }
        return false;
    });
}

function getFilteredArticles() {
    let articles = getPublishedArticles();
    if (STATE.selectedCategory !== 'all') {
        articles = articles.filter(a => a.category === STATE.selectedCategory);
    }
    if (STATE.searchQuery) {
        const query = STATE.searchQuery.toLowerCase();
        articles = articles.filter(a => 
            a.title.toLowerCase().includes(query) ||
            a.excerpt.toLowerCase().includes(query) ||
            a.author.toLowerCase().includes(query)
        );
    }
    return articles;
}

function getFeaturedArticles() {
    return getPublishedArticles().filter(a => a.is_featured).slice(0, 5);
}

function getRelatedArticles(article) {
    return getPublishedArticles()
        .filter(a => a.id !== article.id && a.category === article.category)
        .slice(0, 3);
}

function incrementViews(articleId) {
    const article = STATE.articles.find(a => a.id === articleId);
    if (article) article.views++;
}

// Admin Functions
function login(email, password) {
    if (email === STATE.adminCredentials.email && password === STATE.adminCredentials.password) {
        STATE.isLoggedIn = true;
        STATE.currentUser = {
            email: STATE.adminCredentials.email,
            name: STATE.adminCredentials.name,
            role: STATE.adminCredentials.role
        };
        navigate('admin', { adminPage: 'dashboard' });
        showToast('Login successful!');
        return true;
    }
    showToast('Invalid credentials', 'error');
    return false;
}

function logout() {
    STATE.isLoggedIn = false;
    STATE.currentUser = null;
    navigate('home');
    showToast('Logged out successfully');
}

function saveArticle(articleData) {
    if (articleData.id) {
        const index = STATE.articles.findIndex(a => a.id === articleData.id);
        if (index !== -1) {
            STATE.articles[index] = { ...STATE.articles[index], ...articleData };
            showToast('Article updated successfully!');
        }
    } else {
        const newArticle = {
            ...articleData,
            id: String(Date.now()),
            views: 0,
            is_featured: false
        };
        STATE.articles.unshift(newArticle);
        showToast('Article created successfully!');
    }
    STATE.lastSaved = new Date();
}

function deleteArticle(articleId) {
    showModal('Are you sure you want to delete this article?', () => {
        STATE.articles = STATE.articles.filter(a => a.id !== articleId);
        showToast('Article deleted successfully');
        render();
    });
}

function handleImageUpload(input) {
    const file = input.files[0];
    if (!file) return;
    
    if (file.size > 5 * 1024 * 1024) {
        showToast('Image size must be less than 5MB', 'error');
        return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
        const imageUrl = e.target.result;
        updateImagePreview(imageUrl);
        document.getElementById('imageUrlInput').value = imageUrl;
    };
    reader.readAsDataURL(file);
}

function updateImagePreview(url) {
    if (!url) return;
    const preview = document.getElementById('imagePreview');
    const container = document.getElementById('imagePreviewContainer');
    if (preview && container) {
        preview.src = url;
        container.style.display = 'block';
    }
}

function removeImage() {
    const input = document.getElementById('imageUrlInput');
    const preview = document.getElementById('imagePreview');
    const container = document.getElementById('imagePreviewContainer');
    if (input) input.value = '';
    if (preview) preview.src = '';
    if (container) container.style.display = 'none';
    document.getElementById('imageUpload').value = '';
}

function updateWordCount() {
    const editor = document.getElementById('editor');
    const wordCountEl = document.getElementById('wordCount');
    if (editor && wordCountEl) {
        const text = editor.innerText || '';
        const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
        wordCountEl.textContent = `${words} word${words !== 1 ? 's' : ''}`;
    }
}

function updateExcerptCounter(textarea) {
    const counter = document.getElementById('excerptCounter');
    if (counter) {
        const length = textarea.value.length;
        counter.textContent = `${length}/160`;
        counter.style.color = length >= 150 && length <= 160 ? 'var(--color-primary)' : length > 160 ? 'var(--color-red-500)' : 'var(--color-text-secondary)';
    }
}

function updateMetaTitleCounter(input) {
    const counter = document.getElementById('metaTitleCounter');
    if (counter) {
        const length = input.value.length;
        counter.textContent = `${length}/60`;
        counter.style.color = length >= 50 && length <= 60 ? 'var(--color-primary)' : length > 60 ? 'var(--color-red-500)' : 'var(--color-text-secondary)';
    }
}

function updateMetaDescCounter(textarea) {
    const counter = document.getElementById('metaDescCounter');
    if (counter) {
        const length = textarea.value.length;
        counter.textContent = `${length}/160`;
        counter.style.color = length >= 150 && length <= 160 ? 'var(--color-primary)' : length > 160 ? 'var(--color-red-500)' : 'var(--color-text-secondary)';
    }
}

function showCodeBlockModal() {
    const modal = document.createElement('div');
    modal.className = 'code-modal';
    modal.innerHTML = `
        <div class="code-modal-content">
            <div class="code-modal-header">
                <h2 style="font-size: 20px; font-weight: 600; margin: 0;">Insert Code Block</h2>
                <button onclick="this.closest('.code-modal').remove()" style="padding: 6px 12px; background: white; border: 1px solid var(--color-border); border-radius: 6px; cursor: pointer; font-size: 14px;">✕</button>
            </div>
            <div class="code-modal-body">
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Language</label>
                    <select id="codeLanguageSelect" style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px; background: white; cursor: pointer;">
                        ${STATE.codeLanguages.map(lang => `<option value="${lang.value}">${lang.name}</option>`).join('')}
                    </select>
                </div>
                <div style="margin-bottom: 20px;">
                    <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Code</label>
                    <textarea id="codeTextarea" class="code-textarea" placeholder="Paste or type your code here...\n\nPress Tab to indent\nPress Shift+Tab to outdent"></textarea>
                </div>
            </div>
            <div class="code-modal-footer">
                <button onclick="this.closest('.code-modal').remove()" style="padding: 10px 20px; border: 1px solid var(--color-border); background: white; border-radius: 6px; cursor: pointer; font-size: 14px;">Cancel</button>
                <button onclick="insertCodeBlock()" style="padding: 10px 24px; background: var(--color-primary); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">Insert Code Block</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    const textarea = modal.querySelector('#codeTextarea');
    textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;
            const value = textarea.value;
            
            if (e.shiftKey) {
                const lineStart = value.lastIndexOf('\n', start - 1) + 1;
                if (value.substring(lineStart, lineStart + 4) === '    ') {
                    textarea.value = value.substring(0, lineStart) + value.substring(lineStart + 4);
                    textarea.selectionStart = textarea.selectionEnd = start - 4;
                }
            } else {
                textarea.value = value.substring(0, start) + '    ' + value.substring(end);
                textarea.selectionStart = textarea.selectionEnd = start + 4;
            }
        }
    });
    
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

function insertCodeBlock() {
    const languageSelect = document.getElementById('codeLanguageSelect');
    const codeTextarea = document.getElementById('codeTextarea');
    const editor = document.getElementById('editor');
    
    if (!languageSelect || !codeTextarea || !editor) return;
    
    const language = languageSelect.value;
    const code = codeTextarea.value;
    
    if (!code.trim()) {
        showToast('Please enter some code', 'error');
        return;
    }
    
    const languageObj = STATE.codeLanguages.find(l => l.value === language);
    const languageName = languageObj ? languageObj.name : language;
    const prismLang = languageObj ? languageObj.prism : language;
    
    const escapedCode = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
    
    const codeBlockId = 'code-block-' + Date.now();
    const codeBlockHTML = `
        <div class="code-block-container" data-language="${language}" data-code-id="${codeBlockId}">
            <div class="code-block-header">
                <span class="code-block-language">${languageName}</span>
                <button class="code-block-copy-btn" onclick="copyCodeBlock('${codeBlockId}')">📋 Copy</button>
            </div>
            <div class="code-block-content">
                <pre class="line-numbers"><code class="language-${prismLang}">${escapedCode}</code></pre>
            </div>
        </div>
        <p><br></p>
    `;
    
    editor.focus();
    document.execCommand('insertHTML', false, codeBlockHTML);
    
    document.querySelector('.code-modal').remove();
    
    setTimeout(() => {
        if (window.Prism) {
            Prism.highlightAll();
        }
    }, 100);
    
    showToast('Code block inserted successfully!');
}

function copyCodeBlock(codeBlockId) {
    const codeBlock = document.querySelector(`[data-code-id="${codeBlockId}"]`);
    if (!codeBlock) return;
    
    const codeElement = codeBlock.querySelector('code');
    if (!codeElement) return;
    
    const code = codeElement.textContent;
    
    const textarea = document.createElement('textarea');
    textarea.value = code;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    
    try {
        document.execCommand('copy');
        const btn = codeBlock.querySelector('.code-block-copy-btn');
        if (btn) {
            const originalText = btn.textContent;
            btn.textContent = '✓ Copied!';
            btn.classList.add('copied');
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        }
        showToast('Code copied to clipboard!');
    } catch (err) {
        showToast('Failed to copy code', 'error');
    }
    
    document.body.removeChild(textarea);
}

function showArticlePreview() {
    const form = document.getElementById('articleForm');
    if (!form) return;
    
    const formData = getFormData(form);
    const category = STATE.categories.find(c => c.name === formData.category);
    
    setTimeout(() => {
        if (window.Prism) {
            Prism.highlightAll();
        }
    }, 100);
    
    const previewHTML = `
        <div class="modal" onclick="if(event.target === this) this.remove()">
            <div style="background: white; border-radius: 12px; max-width: 900px; width: 90%; max-height: 90vh; overflow-y: auto; position: relative;">
                <div style="position: sticky; top: 0; background: white; padding: 16px 24px; border-bottom: 1px solid var(--color-border); display: flex; justify-content: space-between; align-items: center; z-index: 10;">
                    <h2 style="font-size: 18px; font-weight: 600; margin: 0;">Article Preview</h2>
                    <button onclick="this.closest('.modal').remove()" style="padding: 8px 16px; background: var(--color-red-500); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px;">Close</button>
                </div>
                <div style="padding: 48px;">
                    <span style="display: inline-block; padding: 6px 16px; background: ${category.color}; color: white; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 20px;">
                        ${category.icon} ${formData.category}
                    </span>
                    <h1 style="font-size: 36px; font-weight: 700; margin-bottom: 16px; line-height: 1.2; color: var(--color-text);">${formData.title}</h1>
                    <p style="font-size: 18px; color: var(--color-text-secondary); margin-bottom: 24px;">${formData.excerpt}</p>
                    <div style="display: flex; gap: 16px; padding-bottom: 24px; border-bottom: 1px solid var(--color-border); margin-bottom: 32px; flex-wrap: wrap;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 18px;">
                                ${formData.author.charAt(0)}
                            </div>
                            <div>
                                <div style="font-weight: 600; color: var(--color-text);">${formData.author}</div>
                                <div style="font-size: 14px; color: var(--color-text-secondary);">${formatDate(formData.date)}</div>
                            </div>
                        </div>
                    </div>
                    ${formData.featured_image ? `<img src="${formData.featured_image}" alt="${formData.title}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 32px;" />` : ''}
                    <div style="font-size: 18px; line-height: 1.8; color: var(--color-text);">
                        ${formData.content}
                    </div>
                    ${formData.tags.length > 0 ? `
                        <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--color-border);">
                            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                                ${formData.tags.map(tag => `<span style="padding: 6px 16px; background: var(--color-gray-200); color: var(--color-text); border-radius: 16px; font-size: 14px;">#${tag}</span>`).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', previewHTML);
}

function startAutosave() {
    if (STATE.autosaveTimer) clearInterval(STATE.autosaveTimer);
    STATE.autosaveTimer = setInterval(() => {
        const form = document.getElementById('articleForm');
        if (form) {
            const formData = getFormData(form);
            if (formData.title) {
                const statusEl = document.getElementById('autosaveStatus');
                if (statusEl) statusEl.textContent = 'Saving...';
                saveArticle(formData);
                setTimeout(() => {
                    if (statusEl) {
                        const now = new Date();
                        const seconds = Math.floor((now - STATE.lastSaved) / 1000);
                        statusEl.textContent = `Saved ${seconds}s ago`;
                    }
                }, 500);
            }
        }
    }, 10000);
}

function getFormData(form) {
    const formData = new FormData(form);
    const data = {
        title: formData.get('title'),
        slug: formData.get('slug'),
        excerpt: formData.get('excerpt'),
        content: document.getElementById('editor').innerHTML,
        category: formData.get('category'),
        tags: Array.from(document.querySelectorAll('.tag-item')).map(t => t.textContent.trim().replace('×', '')),
        author: formData.get('author'),
        date: formData.get('date'),
        featured_image: formData.get('featured_image'),
        status: formData.get('status'),
        scheduled_for: formData.get('scheduled_for') || null,
        meta_title: formData.get('meta_title') || formData.get('title'),
        meta_description: formData.get('meta_description') || formData.get('excerpt'),
        canonical_url: formData.get('canonical_url') || ''
    };
    if (STATE.editingArticle) {
        data.id = STATE.editingArticle.id;
        data.views = STATE.editingArticle.views;
        data.is_featured = STATE.editingArticle.is_featured;
    }
    return data;
}

// Components
function Header() {
    return `
        <header style="background: white; border-bottom: 1px solid var(--color-border); position: sticky; top: 0; z-index: 50; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <div style="max-width: 1280px; margin: 0 auto; padding: 16px 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
                <div style="display: flex; align-items: center; gap: 32px;">
                    <div onclick="navigate('home')" style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                        <div style="width: 48px; height: 48px; border-radius: 8px; background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 16px;">N07</div>
                        <h1 style="font-size: 24px; font-weight: 700; color: var(--color-primary); margin: 0;">Noname07New</h1>
                    </div>
                    <nav style="display: flex; gap: 24px;">
                        <a href="#" onclick="navigate('home'); return false;" style="color: var(--color-text); text-decoration: none; font-weight: 500; font-size: 15px;">Home</a>
                        <a href="#" onclick="navigate('admin'); return false;" style="color: var(--color-text); text-decoration: none; font-weight: 500; font-size: 15px;">Admin</a>
                    </nav>
                </div>
                <div style="display: flex; align-items: center; gap: 16px;">
                    <input 
                        type="text" 
                        placeholder="Search articles..." 
                        value="${STATE.searchQuery}"
                        onkeyup="STATE.searchQuery = this.value; render();"
                        style="padding: 10px 16px; border: 1px solid var(--color-border); border-radius: 8px; width: 250px; font-size: 14px;"
                    />
                    ${STATE.isLoggedIn ? `
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <span style="font-size: 14px; color: var(--color-text-secondary);">${STATE.currentUser.name}</span>
                            <button onclick="logout()" style="padding: 8px 16px; background: var(--color-red-500); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px;">Logout</button>
                        </div>
                    ` : `
                        <button onclick="navigate('admin')" style="padding: 10px 20px; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500; font-size: 14px;">Login</button>
                    `}
                </div>
            </div>
        </header>
    `;
}

function Footer() {
    return `
        <footer style="background: var(--color-charcoal-800); color: white; margin-top: 80px; padding: 40px 20px; text-align: center;">
            <div style="max-width: 1280px; margin: 0 auto;">
                <h3 style="font-size: 20px; margin-bottom: 12px;">Noname07New</h3>
                <p style="color: var(--color-gray-300); margin-bottom: 20px;">Your source for the latest news in Tech, Business, Design, and Lifestyle</p>
                <div style="display: flex; gap: 24px; justify-content: center; margin-bottom: 20px;">
                    ${STATE.categories.map(cat => `<span style="color: var(--color-gray-300);">${cat.icon} ${cat.name}</span>`).join('')}
                </div>
                <p style="color: var(--color-gray-400); font-size: 14px;">&copy; 2025 Noname07New. All rights reserved.</p>
            </div>
        </footer>
    `;
}

function Carousel() {
    const featured = getFeaturedArticles();
    if (featured.length === 0) return '';
    
    const current = featured[STATE.carouselIndex % featured.length];
    const category = STATE.categories.find(c => c.name === current.category);
    
    setTimeout(() => {
        STATE.carouselIndex = (STATE.carouselIndex + 1) % featured.length;
        render();
    }, 5000);
    
    return `
        <div style="position: relative; height: 500px; border-radius: 16px; overflow: hidden; margin-bottom: 40px;">
            <img src="${current.featured_image}" alt="${current.title}" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); display: flex; flex-direction: column; justify-content: flex-end; padding: 48px;">
                <span style="display: inline-block; padding: 6px 16px; background: ${category.color}; color: white; border-radius: 20px; font-size: 14px; font-weight: 600; width: fit-content; margin-bottom: 16px;">
                    ${category.icon} ${current.category}
                </span>
                <h2 onclick="navigate('article', {articleId: '${current.id}'}); incrementViews('${current.id}');" style="font-size: 36px; color: white; margin-bottom: 12px; cursor: pointer; max-width: 800px;">${current.title}</h2>
                <p style="font-size: 18px; color: rgba(255,255,255,0.9); margin-bottom: 16px; max-width: 700px;">${current.excerpt}</p>
                <div style="display: flex; gap: 16px; align-items: center; color: rgba(255,255,255,0.8); font-size: 14px;">
                    <span>${current.author}</span>
                    <span>•</span>
                    <span>${formatDate(current.date)}</span>
                    <span>•</span>
                    <span>👁️ ${current.views.toLocaleString()} views</span>
                </div>
            </div>
            <div style="position: absolute; bottom: 24px; right: 48px; display: flex; gap: 8px;">
                ${featured.map((_, i) => `
                    <div class="carousel-dot ${i === STATE.carouselIndex % featured.length ? 'active' : ''}" onclick="STATE.carouselIndex = ${i}; render();"></div>
                `).join('')}
            </div>
        </div>
    `;
}

function CategoryFilter() {
    return `
        <div style="display: flex; gap: 12px; margin-bottom: 32px; flex-wrap: wrap; justify-content: center;">
            <button 
                onclick="STATE.selectedCategory = 'all'; STATE.currentArticlePage = 1; render();" 
                style="padding: 10px 24px; border: 2px solid ${STATE.selectedCategory === 'all' ? 'var(--color-primary)' : 'var(--color-border)'}; background: ${STATE.selectedCategory === 'all' ? 'var(--color-primary)' : 'white'}; color: ${STATE.selectedCategory === 'all' ? 'white' : 'var(--color-text)'}; border-radius: 24px; cursor: pointer; font-weight: 500; font-size: 15px; transition: all 0.2s;"
            >
                All Articles
            </button>
            ${STATE.categories.map(cat => `
                <button 
                    onclick="STATE.selectedCategory = '${cat.name}'; STATE.currentArticlePage = 1; render();" 
                    style="padding: 10px 24px; border: 2px solid ${STATE.selectedCategory === cat.name ? cat.color : 'var(--color-border)'}; background: ${STATE.selectedCategory === cat.name ? cat.color : 'white'}; color: ${STATE.selectedCategory === cat.name ? 'white' : 'var(--color-text)'}; border-radius: 24px; cursor: pointer; font-weight: 500; font-size: 15px; transition: all 0.2s;"
                >
                    ${cat.icon} ${cat.name}
                </button>
            `).join('')}
        </div>
    `;
}

function ArticleCard(article) {
    const category = STATE.categories.find(c => c.name === article.category);
    return `
        <div class="article-card" style="background: white; border-radius: 12px; overflow: hidden; border: 1px solid var(--color-border); cursor: pointer;" onclick="navigate('article', {articleId: '${article.id}'}); incrementViews('${article.id}');">
            <img src="${article.featured_image}" alt="${article.title}" style="width: 100%; height: 200px; object-fit: cover;" loading="lazy" />
            <div style="padding: 20px;">
                <span style="display: inline-block; padding: 4px 12px; background: ${category.color}; color: white; border-radius: 16px; font-size: 12px; font-weight: 600; margin-bottom: 12px;">
                    ${category.icon} ${article.category}
                </span>
                <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 8px; color: var(--color-text); line-height: 1.4;">${article.title}</h3>
                <p style="font-size: 14px; color: var(--color-text-secondary); margin-bottom: 16px; line-height: 1.6;">${article.excerpt}</p>
                <div style="display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: var(--color-text-secondary);">
                    <span>${article.author}</span>
                    <span>👁️ ${article.views.toLocaleString()}</span>
                </div>
                <div style="font-size: 12px; color: var(--color-text-secondary); margin-top: 8px;">${formatDate(article.date)}</div>
            </div>
        </div>
    `;
}

function ArticlesGrid() {
    const filtered = getFilteredArticles();
    const start = (STATE.currentArticlePage - 1) * STATE.articlesPerPage;
    const articles = filtered.slice(start, start + STATE.articlesPerPage);
    const hasMore = filtered.length > start + STATE.articlesPerPage;
    
    if (articles.length === 0) {
        return `<div style="text-align: center; padding: 60px 20px; color: var(--color-text-secondary);"><p style="font-size: 18px;">No articles found</p></div>`;
    }
    
    return `
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; margin-bottom: 40px;">
            ${articles.map(article => ArticleCard(article)).join('')}
        </div>
        ${hasMore ? `
            <div style="text-align: center;">
                <button onclick="STATE.currentArticlePage++; render(); window.scrollTo({top: 600, behavior: 'smooth'});" style="padding: 12px 32px; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 500;">Load More</button>
            </div>
        ` : ''}
    `;
}

function HomePage() {
    return `
        ${Header()}
        <main style="max-width: 1280px; margin: 0 auto; padding: 40px 20px;">
            ${Carousel()}
            <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 24px; text-align: center;">Latest Articles</h2>
            ${CategoryFilter()}
            ${ArticlesGrid()}
        </main>
        ${Footer()}
    `;
}

function ArticlePage() {
    const article = STATE.articles.find(a => a.id === STATE.currentArticleId);
    if (!article) return '<div>Article not found</div>';
    
    const category = STATE.categories.find(c => c.name === article.category);
    const related = getRelatedArticles(article);
    
    setTimeout(() => {
        if (window.Prism) {
            Prism.highlightAll();
        }
    }, 100);
    
    return `
        ${Header()}
        <main style="max-width: 900px; margin: 0 auto; padding: 40px 20px;">
            <div class="breadcrumb">
                <a href="#" onclick="navigate('home'); return false;">Home</a>
                <span>/</span>
                <a href="#" onclick="STATE.selectedCategory = '${article.category}'; navigate('home'); return false;">${article.category}</a>
                <span>/</span>
                <span>${article.title}</span>
            </div>
            
            <article style="background: white; padding: 48px; border-radius: 12px; border: 1px solid var(--color-border); margin-bottom: 40px;">
                <span style="display: inline-block; padding: 6px 16px; background: ${category.color}; color: white; border-radius: 20px; font-size: 14px; font-weight: 600; margin-bottom: 20px;">
                    ${category.icon} ${article.category}
                </span>
                <h1 style="font-size: 40px; font-weight: 700; margin-bottom: 24px; line-height: 1.2;">${article.title}</h1>
                
                <div style="display: flex; gap: 24px; align-items: center; padding-bottom: 24px; border-bottom: 1px solid var(--color-border); margin-bottom: 32px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 18px;">
                            ${article.author.charAt(0)}
                        </div>
                        <div>
                            <div style="font-weight: 600; color: var(--color-text);">${article.author}</div>
                            <div style="font-size: 14px; color: var(--color-text-secondary);">${formatDate(article.date)}</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 16px; font-size: 14px; color: var(--color-text-secondary);">
                        <span>⏱️ ${calculateReadTime(article.content)}</span>
                        <span>👁️ ${article.views.toLocaleString()} views</span>
                    </div>
                    <div style="margin-left: auto; display: flex; gap: 8px;">
                        <button onclick="navigator.share ? navigator.share({title: '${article.title}', url: window.location.href}) : alert('Sharing not supported')" style="padding: 8px 16px; border: 1px solid var(--color-border); background: white; border-radius: 6px; cursor: pointer; font-size: 14px;">📤 Share</button>
                    </div>
                </div>
                
                <img src="${article.featured_image}" alt="${article.title}" style="width: 100%; height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 32px;" />
                
                <div style="font-size: 18px; line-height: 1.8; color: var(--color-text);">
                    ${article.content}
                </div>
                
                <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--color-border);">
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        ${article.tags.map(tag => `
                            <span style="padding: 6px 16px; background: var(--color-gray-200); color: var(--color-text); border-radius: 16px; font-size: 14px;">#${tag}</span>
                        `).join('')}
                    </div>
                </div>
            </article>
            
            ${related.length > 0 ? `
                <section>
                    <h2 style="font-size: 24px; font-weight: 700; margin-bottom: 24px;">Related Articles</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px;">
                        ${related.map(a => ArticleCard(a)).join('')}
                    </div>
                </section>
            ` : ''}
        </main>
        ${Footer()}
    `;
}

function AdminSidebar() {
    const menuItems = [
        { id: 'dashboard', label: '📊 Dashboard', icon: '📊' },
        { id: 'articles', label: '📝 Articles', icon: '📝' },
        { id: 'categories', label: '🏷️ Categories', icon: '🏷️' },
    ];
    
    return `
        <div class="sidebar">
            <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 32px;">
                <div style="width: 40px; height: 40px; border-radius: 6px; background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 14px;">N07</div>
                <h2 style="font-size: 18px; font-weight: 700; color: white;">Noname07New</h2>
            </div>
            ${menuItems.map(item => `
                <a href="#" onclick="navigate('admin', {adminPage: '${item.id}'}); return false;" class="${STATE.adminPage === item.id ? 'active' : ''}">
                    ${item.label}
                </a>
            `).join('')}
            <div style="position: absolute; bottom: 20px; left: 20px; right: 20px;">
                <button onclick="logout()" style="width: 100%; padding: 12px; background: var(--color-red-500); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 500;">Logout</button>
            </div>
        </div>
    `;
}

function AdminDashboard() {
    const totalArticles = STATE.articles.length;
    const published = STATE.articles.filter(a => a.status === 'published').length;
    const drafts = STATE.articles.filter(a => a.status === 'draft').length;
    const totalViews = STATE.articles.reduce((sum, a) => sum + a.views, 0);
    
    const stats = [
        { label: 'Total Articles', value: totalArticles, color: 'var(--color-primary)', icon: '📝' },
        { label: 'Published', value: published, color: '#4CAF50', icon: '✅' },
        { label: 'Drafts', value: drafts, color: '#FF9800', icon: '📄' },
        { label: 'Total Views', value: totalViews.toLocaleString(), color: '#9C27B0', icon: '👁️' }
    ];
    
    return `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
                <h1 style="font-size: 32px; font-weight: 700;">Dashboard</h1>
                <button onclick="navigate('admin', {adminPage: 'edit'}); STATE.editingArticle = null;" style="padding: 12px 24px; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">+ New Article</button>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin-bottom: 40px;">
                ${stats.map(stat => `
                    <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
                        <div style="font-size: 36px; margin-bottom: 8px;">${stat.icon}</div>
                        <div style="font-size: 32px; font-weight: 700; color: ${stat.color}; margin-bottom: 4px;">${stat.value}</div>
                        <div style="font-size: 14px; color: var(--color-text-secondary);">${stat.label}</div>
                    </div>
                `).join('')}
            </div>
            
            <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
                <h2 style="font-size: 20px; font-weight: 600; margin-bottom: 20px;">Recent Articles</h2>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--color-border);">
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Title</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Category</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Status</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Views</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${STATE.articles.slice(0, 5).map(article => {
                                const statusColors = {
                                    published: '#4CAF50',
                                    draft: '#FF9800',
                                    scheduled: '#2196F3'
                                };
                                return `
                                    <tr style="border-bottom: 1px solid var(--color-border);">
                                        <td style="padding: 16px; font-size: 14px;">${article.title}</td>
                                        <td style="padding: 16px; font-size: 14px;">${article.category}</td>
                                        <td style="padding: 16px;">
                                            <span style="padding: 4px 12px; background: ${statusColors[article.status]}; color: white; border-radius: 12px; font-size: 12px; font-weight: 600;">${article.status}</span>
                                        </td>
                                        <td style="padding: 16px; font-size: 14px;">${article.views.toLocaleString()}</td>
                                        <td style="padding: 16px; font-size: 14px; color: var(--color-text-secondary);">${formatDate(article.date)}</td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function AdminArticles() {
    const [statusFilter, setStatusFilter] = [STATE.adminStatusFilter || 'all', (v) => { STATE.adminStatusFilter = v; render(); }];
    const [searchQuery, setSearchQuery] = [STATE.adminSearchQuery || '', (v) => { STATE.adminSearchQuery = v; render(); }];
    
    let filtered = STATE.articles;
    if (statusFilter !== 'all') {
        filtered = filtered.filter(a => a.status === statusFilter);
    }
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(a => 
            a.title.toLowerCase().includes(query) ||
            a.author.toLowerCase().includes(query)
        );
    }
    
    return `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
                <h1 style="font-size: 32px; font-weight: 700;">Articles</h1>
                <button onclick="navigate('admin', {adminPage: 'edit'}); STATE.editingArticle = null;" style="padding: 12px 24px; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 500;">+ New Article</button>
            </div>
            
            <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
                <div style="display: flex; gap: 16px; margin-bottom: 24px; flex-wrap: wrap;">
                    <input 
                        type="text" 
                        placeholder="Search articles..." 
                        value="${searchQuery}"
                        oninput="STATE.adminSearchQuery = this.value; render();"
                        style="flex: 1; min-width: 250px; padding: 10px 16px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px;"
                    />
                    <select onchange="STATE.adminStatusFilter = this.value; render();" style="padding: 10px 16px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px; background: white; cursor: pointer;">
                        <option value="all" ${statusFilter === 'all' ? 'selected' : ''}>All Status</option>
                        <option value="published" ${statusFilter === 'published' ? 'selected' : ''}>Published</option>
                        <option value="draft" ${statusFilter === 'draft' ? 'selected' : ''}>Draft</option>
                        <option value="scheduled" ${statusFilter === 'scheduled' ? 'selected' : ''}>Scheduled</option>
                    </select>
                </div>
                
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="border-bottom: 2px solid var(--color-border);">
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Title</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Author</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Category</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Status</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Views</th>
                                <th style="text-align: left; padding: 12px; font-weight: 600; color: var(--color-text-secondary); font-size: 14px;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${filtered.map(article => {
                                const statusColors = {
                                    published: '#4CAF50',
                                    draft: '#FF9800',
                                    scheduled: '#2196F3'
                                };
                                return `
                                    <tr style="border-bottom: 1px solid var(--color-border);">
                                        <td style="padding: 16px; font-size: 14px; max-width: 300px;">${article.title}</td>
                                        <td style="padding: 16px; font-size: 14px;">${article.author}</td>
                                        <td style="padding: 16px; font-size: 14px;">${article.category}</td>
                                        <td style="padding: 16px;">
                                            <span style="padding: 4px 12px; background: ${statusColors[article.status]}; color: white; border-radius: 12px; font-size: 12px; font-weight: 600;">${article.status}</span>
                                        </td>
                                        <td style="padding: 16px; font-size: 14px;">${article.views.toLocaleString()}</td>
                                        <td style="padding: 16px;">
                                            <div style="display: flex; gap: 8px;">
                                                <button onclick="STATE.editingArticle = STATE.articles.find(a => a.id === '${article.id}'); navigate('admin', {adminPage: 'edit'});" style="padding: 6px 12px; background: var(--color-primary); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Edit</button>
                                                <button onclick="deleteArticle('${article.id}')" style="padding: 6px 12px; background: var(--color-red-500); color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 12px;">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                `;
                            }).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function AdminEditArticle() {
    const article = STATE.editingArticle;
    const isNew = !article;
    
    setTimeout(() => {
        if (!STATE.editorInitialized) {
            STATE.editorInitialized = true;
            startAutosave();
            
            const titleInput = document.getElementById('titleInput');
            if (titleInput) {
                titleInput.addEventListener('input', (e) => {
                    const slugInput = document.getElementById('slugInput');
                    if (slugInput && isNew) {
                        slugInput.value = generateSlug(e.target.value);
                    }
                });
            }
            
            const editor = document.getElementById('editor');
            if (editor) {
                editor.addEventListener('input', updateWordCount);
                editor.addEventListener('paste', () => setTimeout(updateWordCount, 10));
                editor.addEventListener('keydown', (e) => {
                    if (e.ctrlKey && e.altKey && e.key === 'c') {
                        e.preventDefault();
                        showCodeBlockModal();
                    }
                });
                updateWordCount();
            }
            
            const statusRadios = document.querySelectorAll('input[name="status"]');
            statusRadios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    const scheduledSection = document.getElementById('scheduledSection');
                    if (scheduledSection) {
                        scheduledSection.style.display = e.target.value === 'scheduled' ? 'block' : 'none';
                    }
                });
            });
            
            const imageUrlInput = document.getElementById('imageUrlInput');
            if (imageUrlInput && imageUrlInput.value) {
                updateImagePreview(imageUrlInput.value);
            }
            
            const excerptInput = document.getElementById('excerptInput');
            if (excerptInput) {
                updateExcerptCounter(excerptInput);
            }
            
            const metaTitleInput = document.getElementById('metaTitleInput');
            if (metaTitleInput) {
                updateMetaTitleCounter(metaTitleInput);
            }
            
            const metaDescInput = document.getElementById('metaDescInput');
            if (metaDescInput) {
                updateMetaDescCounter(metaDescInput);
            }
        }
    }, 100);
    
    return `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
                <h1 style="font-size: 32px; font-weight: 700;">${isNew ? 'Create New Article' : 'Edit Article'}</h1>
                <div style="display: flex; gap: 12px; align-items: center;">
                    ${STATE.lastSaved ? `<span style="font-size: 14px; color: var(--color-text-secondary);">Last saved: ${STATE.lastSaved.toLocaleTimeString()}</span>` : ''}
                    <button onclick="navigate('admin', {adminPage: 'articles'})" style="padding: 10px 20px; border: 1px solid var(--color-border); background: white; border-radius: 6px; cursor: pointer; font-size: 14px;">Cancel</button>
                </div>
            </div>
            
            <form id="articleForm" onsubmit="event.preventDefault(); saveArticle(getFormData(this)); navigate('admin', {adminPage: 'articles'});" style="background: white; padding: 32px; border-radius: 12px; border: 1px solid var(--color-border);">
                <div style="display: grid; gap: 24px;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Title *</label>
                        <input 
                            id="titleInput"
                            type="text" 
                            name="title" 
                            value="${article?.title || ''}" 
                            required
                            style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 16px;"
                        />
                    </div>
                    
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Slug *</label>
                        <input 
                            id="slugInput"
                            type="text" 
                            name="slug" 
                            value="${article?.slug || ''}" 
                            required
                            style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px; font-family: monospace;"
                        />
                    </div>
                    
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px; display: flex; justify-content: space-between; align-items: center;">
                            <span>Excerpt *</span>
                            <span id="excerptCounter" style="font-size: 12px; font-weight: 400; color: var(--color-text-secondary);">0/160</span>
                        </label>
                        <textarea 
                            id="excerptInput"
                            name="excerpt" 
                            required
                            rows="3"
                            maxlength="160"
                            oninput="updateExcerptCounter(this)"
                            style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px; font-family: inherit; resize: vertical;"
                        >${article?.excerpt || ''}</textarea>
                        <p style="font-size: 12px; color: var(--color-text-secondary); margin-top: 4px;">Recommended: 150-160 characters</p>
                    </div>
                    
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Content * <span style="font-weight: 400; color: var(--color-text-secondary); font-size: 13px;">(Full WYSIWYG Editor)</span></label>
                        <div class="editor-menu">
                            <button type="button" onclick="document.execCommand('bold')" title="Bold (Ctrl+B)"><strong>B</strong></button>
                            <button type="button" onclick="document.execCommand('italic')" title="Italic (Ctrl+I)"><em>I</em></button>
                            <button type="button" onclick="document.execCommand('underline')" title="Underline (Ctrl+U)"><u>U</u></button>
                            <button type="button" onclick="document.execCommand('strikeThrough')" title="Strikethrough"><s>S</s></button>
                            <button type="button" onclick="document.execCommand('formatBlock', false, 'h1')" title="Heading 1">H1</button>
                            <button type="button" onclick="document.execCommand('formatBlock', false, 'h2')" title="Heading 2">H2</button>
                            <button type="button" onclick="document.execCommand('formatBlock', false, 'h3')" title="Heading 3">H3</button>
                            <button type="button" onclick="document.execCommand('insertUnorderedList')" title="Bullet List">• List</button>
                            <button type="button" onclick="document.execCommand('insertOrderedList')" title="Numbered List">1. List</button>
                            <button type="button" onclick="document.execCommand('formatBlock', false, 'blockquote')" title="Blockquote">❝ Quote</button>
                            <button type="button" onclick="showCodeBlockModal()" title="Insert Code Block (Ctrl+Alt+C)" style="font-weight: 600;">&lt;/&gt; Code</button>
                            <button type="button" onclick="const url = prompt('Enter URL:'); if(url) document.execCommand('createLink', false, url);" title="Insert Link">🔗 Link</button>
                            <button type="button" onclick="const url = prompt('Enter image URL:'); if(url) document.execCommand('insertImage', false, url);" title="Insert Image">🖼️ Image</button>
                            <button type="button" onclick="document.execCommand('insertHorizontalRule')" title="Horizontal Rule">—</button>
                            <button type="button" onclick="document.execCommand('undo')" title="Undo (Ctrl+Z)">↶ Undo</button>
                            <button type="button" onclick="document.execCommand('redo')" title="Redo (Ctrl+Y)">↷ Redo</button>
                        </div>
                        <div 
                            id="editor"
                            contenteditable="true" 
                            class="editor-content"
                            style="min-height: 400px;"
                        >${article?.content || '<p>Start writing your article here... Use the toolbar above for formatting.</p>'}</div>
                        <div style="margin-top: 8px; font-size: 13px; color: var(--color-text-secondary); display: flex; justify-content: space-between;">
                            <span id="wordCount">0 words</span>
                            <span>Auto-save: <span id="autosaveStatus">Active</span></span>
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                        <div>
                            <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Category *</label>
                            <select name="category" required style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px; background: white; cursor: pointer;">
                                ${STATE.categories.map(cat => `
                                    <option value="${cat.name}" ${article?.category === cat.name ? 'selected' : ''}>${cat.icon} ${cat.name}</option>
                                `).join('')}
                            </select>
                        </div>
                        
                        <div>
                            <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Author *</label>
                            <input 
                                type="text" 
                                name="author" 
                                value="${article?.author || STATE.currentUser?.name || ''}" 
                                required
                                style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px;"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Tags</label>
                        <div class="tag-input" id="tagInput">
                            ${(article?.tags || []).map(tag => `
                                <span class="tag-item">${tag}<button type="button" onclick="this.parentElement.remove()">×</button></span>
                            `).join('')}
                            <input 
                                type="text" 
                                placeholder="Add tag..." 
                                onkeydown="if(event.key === 'Enter') { event.preventDefault(); const val = this.value.trim(); if(val) { const tag = document.createElement('span'); tag.className = 'tag-item'; tag.innerHTML = val + '<button type=\"button\" onclick=\"this.parentElement.remove()\">×</button>'; this.parentElement.insertBefore(tag, this); this.value = ''; } }"
                                style="border: none; outline: none; padding: 6px; min-width: 150px; font-size: 14px;"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Featured Image *</label>
                        <div style="border: 2px dashed var(--color-border); border-radius: 8px; padding: 24px; text-align: center; background: var(--color-gray-200);">
                            <input 
                                type="file" 
                                id="imageUpload"
                                accept="image/jpeg,image/png,image/gif,image/webp"
                                style="display: none;"
                                onchange="handleImageUpload(this)"
                            />
                            <input 
                                type="url" 
                                id="imageUrlInput"
                                name="featured_image" 
                                value="${article?.featured_image || ''}" 
                                required
                                placeholder="Or paste image URL here"
                                style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px; margin-bottom: 12px;"
                                oninput="updateImagePreview(this.value)"
                            />
                            <button type="button" onclick="document.getElementById('imageUpload').click()" style="padding: 10px 20px; background: var(--color-primary); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 14px; margin-bottom: 8px;">📤 Upload Image</button>
                            <p style="font-size: 12px; color: var(--color-text-secondary); margin: 0;">Accepted: JPG, PNG, GIF, WebP (Max 5MB)</p>
                        </div>
                        <div id="imagePreviewContainer" style="margin-top: 16px; ${article?.featured_image ? '' : 'display: none;'}">
                            <img id="imagePreview" src="${article?.featured_image || ''}" alt="Preview" style="width: 100%; max-width: 500px; border-radius: 8px; border: 1px solid var(--color-border); display: block;" />
                            <div style="margin-top: 12px; display: flex; gap: 12px;">
                                <button type="button" onclick="document.getElementById('imageUpload').click()" style="padding: 8px 16px; background: white; border: 1px solid var(--color-border); border-radius: 6px; cursor: pointer; font-size: 13px;">Change Image</button>
                                <button type="button" onclick="removeImage()" style="padding: 8px 16px; background: var(--color-red-500); color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 13px;">Remove Image</button>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Publish Date *</label>
                        <input 
                            type="date" 
                            name="date" 
                            value="${article?.date || new Date().toISOString().split('T')[0]}" 
                            required
                            style="padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px;"
                        />
                    </div>
                    
                    <div style="border: 1px solid var(--color-border); border-radius: 8px; padding: 20px; background: var(--color-bg-1);">
                        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px; color: var(--color-text);">🔍 SEO Settings</h3>
                        
                        <div style="margin-bottom: 16px;">
                            <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px; display: flex; justify-content: space-between;">
                                <span>Meta Title</span>
                                <span id="metaTitleCounter" style="font-size: 12px; font-weight: 400; color: var(--color-text-secondary);">0/60</span>
                            </label>
                            <input 
                                id="metaTitleInput"
                                type="text" 
                                name="meta_title" 
                                maxlength="60"
                                value="${article?.meta_title || article?.title || ''}"
                                oninput="updateMetaTitleCounter(this)"
                                placeholder="SEO-friendly title (60 chars max)"
                                style="width: 100%; padding: 10px; border: 1px solid var(--color-border); border-radius: 6px; font-size: 14px; background: white;"
                            />
                        </div>
                        
                        <div style="margin-bottom: 16px;">
                            <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px; display: flex; justify-content: space-between;">
                                <span>Meta Description</span>
                                <span id="metaDescCounter" style="font-size: 12px; font-weight: 400; color: var(--color-text-secondary);">0/160</span>
                            </label>
                            <textarea 
                                id="metaDescInput"
                                name="meta_description" 
                                maxlength="160"
                                rows="2"
                                oninput="updateMetaDescCounter(this)"
                                placeholder="Brief description for search engines (160 chars max)"
                                style="width: 100%; padding: 10px; border: 1px solid var(--color-border); border-radius: 6px; font-size: 14px; font-family: inherit; resize: vertical; background: white;"
                            >${article?.meta_description || article?.excerpt || ''}</textarea>
                        </div>
                        
                        <div>
                            <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Canonical URL</label>
                            <input 
                                type="url" 
                                name="canonical_url" 
                                value="${article?.canonical_url || ''}"
                                placeholder="https://noname07new.com/article-url"
                                style="width: 100%; padding: 10px; border: 1px solid var(--color-border); border-radius: 6px; font-size: 14px; background: white;"
                            />
                        </div>
                    </div>
                    
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 12px; font-size: 14px;">Status *</label>
                        <div style="display: flex; gap: 24px;">
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="radio" name="status" value="draft" ${!article || article.status === 'draft' ? 'checked' : ''} />
                                <span>Draft</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="radio" name="status" value="published" ${article?.status === 'published' ? 'checked' : ''} />
                                <span>Published</span>
                            </label>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="radio" name="status" value="scheduled" ${article?.status === 'scheduled' ? 'checked' : ''} />
                                <span>Scheduled</span>
                            </label>
                        </div>
                    </div>
                    
                    <div id="scheduledSection" style="display: ${article?.status === 'scheduled' ? 'block' : 'none'};">
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Scheduled For</label>
                        <input 
                            type="datetime-local" 
                            name="scheduled_for" 
                            value="${article?.scheduled_for || ''}" 
                            style="padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px;"
                        />
                    </div>
                    
                    <div style="display: flex; gap: 12px; flex-wrap: wrap; justify-content: space-between; padding-top: 24px; border-top: 2px solid var(--color-border);">
                        <div style="display: flex; gap: 12px;">
                            ${!isNew ? `
                                <button type="button" onclick="deleteArticle('${article.id}')" style="padding: 12px 24px; background: var(--color-red-500); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500;">🗑️ Delete</button>
                            ` : ''}
                        </div>
                        <div style="display: flex; gap: 12px;">
                            <button type="button" onclick="const form = document.getElementById('articleForm'); const data = getFormData(form); data.status = 'draft'; saveArticle(data);" style="padding: 12px 24px; border: 1px solid var(--color-primary); background: white; color: var(--color-primary); border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500;">💾 Save Draft</button>
                            <button type="button" onclick="showArticlePreview()" style="padding: 12px 24px; border: 1px solid var(--color-border); background: white; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500;">👁️ Preview</button>
                            <button type="button" onclick="const form = document.getElementById('articleForm'); const data = getFormData(form); data.status = 'scheduled'; const datetime = prompt('Schedule for (YYYY-MM-DD HH:MM):'); if(datetime) { data.scheduled_for = datetime; saveArticle(data); navigate('admin', {adminPage: 'articles'}); }" style="padding: 12px 24px; border: 1px solid var(--color-border); background: white; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 500;">📅 Schedule</button>
                            <button type="submit" style="padding: 12px 32px; background: #4CAF50; color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600;">✅ Publish Now</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    `;
}

function AdminCategories() {
    return `
        <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
                <h1 style="font-size: 32px; font-weight: 700;">Categories</h1>
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px;">
                ${STATE.categories.map(cat => {
                    const count = STATE.articles.filter(a => a.category === cat.name).length;
                    return `
                        <div style="background: white; padding: 24px; border-radius: 12px; border: 1px solid var(--color-border); text-align: center;">
                            <div style="font-size: 48px; margin-bottom: 12px;">${cat.icon}</div>
                            <h3 style="font-size: 20px; font-weight: 600; margin-bottom: 8px;" style="color: ${cat.color};">${cat.name}</h3>
                            <p style="color: var(--color-text-secondary); font-size: 14px;">${count} article${count !== 1 ? 's' : ''}</p>
                            <div style="width: 40px; height: 4px; background: ${cat.color}; margin: 16px auto 0; border-radius: 2px;"></div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function AdminLogin() {
    return `
        ${Header()}
        <div style="min-height: 80vh; display: flex; align-items: center; justify-content: center; padding: 20px;">
            <div style="background: white; padding: 48px; border-radius: 16px; border: 1px solid var(--color-border); max-width: 400px; width: 100%; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
                <div style="display: flex; justify-content: center; margin-bottom: 24px;">
                    <div style="width: 64px; height: 64px; border-radius: 12px; background: var(--color-primary); display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 24px;">N07</div>
                </div>
                <h1 style="font-size: 28px; font-weight: 700; margin-bottom: 8px; text-align: center;">Noname07New</h1>
                <p style="color: var(--color-text-secondary); text-align: center; margin-bottom: 32px; font-size: 14px;">Admin Login</p>
                
                <form onsubmit="event.preventDefault(); const email = this.email.value; const password = this.password.value; login(email, password);">
                    <div style="margin-bottom: 20px;">
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Email</label>
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Enter your email"
                            required
                            style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px;"
                        />
                    </div>
                    
                    <div style="margin-bottom: 24px;">
                        <label style="display: block; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            placeholder="Enter your password"
                            required
                            style="width: 100%; padding: 12px; border: 1px solid var(--color-border); border-radius: 8px; font-size: 14px;"
                        />
                    </div>
                    
                    <button type="submit" style="width: 100%; padding: 14px; background: var(--color-primary); color: white; border: none; border-radius: 8px; cursor: pointer; font-size: 16px; font-weight: 600;">Login</button>
                </form>
            </div>
        </div>
        ${Footer()}
    `;
}

function AdminPanel() {
    if (!STATE.isLoggedIn) {
        return AdminLogin();
    }
    
    let content = '';
    switch (STATE.adminPage) {
        case 'dashboard':
            content = AdminDashboard();
            break;
        case 'articles':
            content = AdminArticles();
            break;
        case 'edit':
            content = AdminEditArticle();
            break;
        case 'categories':
            content = AdminCategories();
            break;
        default:
            content = AdminDashboard();
    }
    
    return `
        ${AdminSidebar()}
        <div class="admin-content">
            ${content}
        </div>
    `;
}

// Main Render Function
function render() {
    const app = document.getElementById('app');
    if (!app) return;
    
    let html = '';
    switch (STATE.currentPage) {
        case 'home':
            html = HomePage();
            break;
        case 'article':
            html = ArticlePage();
            break;
        case 'admin':
            html = AdminPanel();
            break;
        default:
            html = HomePage();
    }
    
    app.innerHTML = html;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    render();
});

render();