/* ============================================
   TRAVELEASE - MAIN JAVASCRIPT FILE
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initModal();
    initWhatsApp();
    updateFooter();
    initForms();
    initTabs();
    initItinerary();
    initFAQ();
});

// ============================================
// NAVBAR
// ============================================

function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Update logo text from config
    const logoTexts = document.querySelectorAll('.logo-text');
    logoTexts.forEach(el => {
        if (CONFIG && CONFIG.company) {
            el.textContent = CONFIG.company.name;
        }
    });
}

// ============================================
// MOBILE MENU
// ============================================

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// ============================================
// MODAL
// ============================================

function initModal() {
    const modal = document.getElementById('inquiryModal');
    const modalClose = document.getElementById('modalClose');
    const overlay = modal ? modal.querySelector('.modal-overlay') : null;
    
    if (modal && modalClose) {
        modalClose.addEventListener('click', closeModal);
        
        if (overlay) {
            overlay.addEventListener('click', closeModal);
        }
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
    }
}

function openModal(destinationName = '') {
    const modal = document.getElementById('inquiryModal');
    const destinationSelect = document.getElementById('destinationSelect');
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Pre-select destination if provided
        if (destinationName && destinationSelect) {
            const options = destinationSelect.options;
            for (let i = 0; i < options.length; i++) {
                if (options[i].value.toLowerCase() === destinationName.toLowerCase() ||
                    options[i].text.toLowerCase().includes(destinationName.toLowerCase())) {
                    destinationSelect.selectedIndex = i;
                    break;
                }
            }
        }
    }
}

function closeModal() {
    const modal = document.getElementById('inquiryModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Make openModal available globally
window.openModal = openModal;

// ============================================
// WHATSAPP
// ============================================

function initWhatsApp() {
    const whatsappBtn = document.getElementById('whatsappBtn');
    
    if (whatsappBtn && CONFIG && CONFIG.whatsapp) {
        const message = encodeURIComponent(CONFIG.whatsapp.defaultMessage);
        whatsappBtn.href = `https://wa.me/${CONFIG.whatsapp.number}?text=${message}`;
    }
}

function sendWhatsApp(destinationName = '') {
    if (CONFIG && CONFIG.whatsapp) {
        let message = destinationName 
            ? `Hi! I'm interested in the ${destinationName} tour package. Please provide more details.`
            : CONFIG.whatsapp.defaultMessage;
        
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${CONFIG.whatsapp.number}?text=${encodedMessage}`, '_blank');
    }
}

// Make sendWhatsApp available globally
window.sendWhatsApp = sendWhatsApp;

// ============================================
// FOOTER UPDATE
// ============================================

function updateFooter() {
    // Update year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
    
    // Update contact info from config
    if (CONFIG && CONFIG.contact) {
        const addressEl = document.getElementById('footerAddress');
        const phoneEl = document.getElementById('footerPhone');
        const emailEl = document.getElementById('footerEmail');
        
        if (addressEl) addressEl.textContent = CONFIG.contact.address.full;
        if (phoneEl) phoneEl.textContent = CONFIG.contact.phone;
        if (emailEl) emailEl.textContent = CONFIG.contact.email;
    }
}

// ============================================
// FORMS
// ============================================

function initForms() {
    const inquiryForm = document.getElementById('inquiryForm');
    const contactForm = document.getElementById('contactForm');
    
    if (inquiryForm) {
        inquiryForm.addEventListener('submit', handleFormSubmit);
    }
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Add destination from select if exists
    const destinationSelect = form.querySelector('#destinationSelect');
    if (destinationSelect) {
        data.destination = destinationSelect.value;
    }
    
    // Show loading
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    try {
        // Check which submission method to use
        if (CONFIG.forms.useBackend && CONFIG.api.baseUrl) {
            // Submit to Laravel backend
            await submitToBackend(data);
        } else if (CONFIG.forms.formspree.enabled) {
            // Submit to Formspree
            await submitToFormspree(data);
        } else if (CONFIG.forms.emailjs.enabled) {
            // Submit to EmailJS
            await submitToEmailJS(data);
        } else {
            // Fallback: Show data in console and simulate success
            console.log('Form Data:', data);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
        
        // Success
        alert(CONFIG.forms.successMessage);
        form.reset();
        closeModal();
        
    } catch (error) {
        console.error('Form submission error:', error);
        alert(CONFIG.forms.errorMessage);
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

async function submitToBackend(data) {
    const response = await fetch(`${CONFIG.api.baseUrl}${CONFIG.api.endpoints.inquiry}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Backend submission failed');
    }
    
    return response.json();
}

async function submitToFormspree(data) {
    const response = await fetch(`https://formspree.io/f/${CONFIG.forms.formspree.formId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(data)
    });
    
    if (!response.ok) {
        throw new Error('Formspree submission failed');
    }
    
    return response.json();
}

async function submitToEmailJS(data) {
    // Load EmailJS if not already loaded
    if (!window.emailjs) {
        await loadScript('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js');
        emailjs.init(CONFIG.forms.emailjs.publicKey);
    }
    
    return emailjs.send(
        CONFIG.forms.emailjs.serviceId,
        CONFIG.forms.emailjs.templateId,
        data
    );
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// ============================================
// TABS
// ============================================

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabGroup = this.closest('.tabs-container') || this.parentElement.parentElement;
            const targetId = this.dataset.tab;
            
            // Remove active from all tabs in this group
            tabGroup.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            tabGroup.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active to clicked tab
            this.classList.add('active');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ============================================
// ITINERARY ACCORDION
// ============================================

function initItinerary() {
    const itineraryDays = document.querySelectorAll('.itinerary-day-header');
    
    itineraryDays.forEach(header => {
        header.addEventListener('click', function() {
            const day = this.parentElement;
            day.classList.toggle('open');
        });
    });
}

// ============================================
// FAQ ACCORDION
// ============================================

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            faqItem.classList.toggle('open');
        });
    });
}

// ============================================
// DESTINATION CARD CREATOR
// ============================================

function createDestinationCard(dest, id, isInternational = false) {
    const highlightsHTML = dest.highlights.slice(0, 3).map(h => 
        `<span class="highlight-tag">${h}</span>`
    ).join('');
    
    const badge = isInternational 
        ? '<span class="destination-badge visa">Visa Assistance</span>' 
        : '';
    
    return `
        <div class="destination-card">
            <div class="destination-card-image">
                <img src="${dest.image}" alt="${dest.name}" loading="lazy">
                ${badge}
            </div>
            <div class="destination-card-content">
                <div class="destination-card-location">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                    </svg>
                    ${dest.location}
                </div>
                <h3>${dest.name}</h3>
                <div class="destination-card-meta">
                    <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                        ${dest.duration}
                    </span>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                            <circle cx="9" cy="7" r="4"/>
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                        </svg>
                        ${dest.groupSize}
                    </span>
                </div>
                <div class="destination-card-highlights">
                    ${highlightsHTML}
                </div>
                <div class="destination-card-actions">
                    <a href="destination.html?id=${id}" class="btn btn-outline btn-sm">View Itinerary</a>
                    <button onclick="openModal('${dest.name}')" class="btn btn-primary btn-sm">Enquire</button>
                </div>
            </div>
        </div>
    `;
}

// Make it available globally
window.createDestinationCard = createDestinationCard;

// ============================================
// VISA CARD CREATOR
// ============================================

function createVisaCard(visa, id) {
    const docsHTML = visa.documents.slice(0, 4).map(d => 
        `<li>${d}</li>`
    ).join('');
    
    return `
        <div class="visa-card">
            <div class="visa-card-header">
                <span class="visa-flag">${visa.flag}</span>
                <div>
                    <h3>${visa.country}</h3>
                    <span class="visa-type">${visa.visaType}</span>
                </div>
            </div>
            <div class="visa-details">
                <div class="visa-detail-item">
                    <span class="visa-detail-label">Processing Time</span>
                    <span class="visa-detail-value">${visa.processingTime}</span>
                </div>
                <div class="visa-detail-item">
                    <span class="visa-detail-label">Validity</span>
                    <span class="visa-detail-value">${visa.validity}</span>
                </div>
                <div class="visa-detail-item">
                    <span class="visa-detail-label">Stay Duration</span>
                    <span class="visa-detail-value">${visa.stayDuration}</span>
                </div>
            </div>
            <div class="visa-documents">
                <h4>Required Documents</h4>
                <ul>${docsHTML}</ul>
            </div>
            <button onclick="openModal('${visa.country} Visa')" class="btn btn-primary btn-block btn-sm">Apply Now</button>
        </div>
    `;
}

// Make it available globally
window.createVisaCard = createVisaCard;

// ============================================
// URL PARAMETER HELPER
// ============================================

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Make it available globally
window.getUrlParam = getUrlParam;

// ============================================
// FIND DESTINATION BY ID
// ============================================

function findDestination(id) {
    // Check domestic
    if (DESTINATIONS.domestic[id]) {
        return { ...DESTINATIONS.domestic[id], type: 'domestic' };
    }
    // Check international
    if (DESTINATIONS.international[id]) {
        return { ...DESTINATIONS.international[id], type: 'international' };
    }
    return null;
}

// Make it available globally
window.findDestination = findDestination;
