// ===== MAIN JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    initNavbar();
    initMobileMenu();
    initModal();
    initFAQ();
    initTabs();
    initItinerary();
    updateCompanyInfo();
});

// ===== NAVBAR =====
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });

    // Set active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ===== MOBILE MENU =====
function initMobileMenu() {
    const menuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    
    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// ===== MODAL =====
function initModal() {
    const modal = document.getElementById('inquiryModal');
    
    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close modal on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

function openModal(destination = '') {
    const modal = document.getElementById('inquiryModal');
    const destinationInput = document.getElementById('destination');
    
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        if (destinationInput && destination) {
            destinationInput.value = destination;
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

// ===== FORM SUBMISSION =====
async function submitInquiry(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Get form data
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        destination: form.destination.value,
        inquiryType: form.inquiryType ? form.inquiryType.value : 'tour',
        travelDate: form.travelDate ? form.travelDate.value : '',
        travelers: form.travelers ? form.travelers.value : '2',
        message: form.message ? form.message.value : ''
    };

    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        // Option 1: Send to Laravel Backend API
        // Uncomment this when your backend is ready
        /*
        const response = await fetch(CONFIG.api.baseUrl + CONFIG.api.endpoints.inquiries, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Failed to submit inquiry');
        }

        const result = await response.json();
        */

        // Option 2: Send via Email (using EmailJS or similar)
        // You can integrate EmailJS here
        
        // Option 3: Open WhatsApp with pre-filled message
        const whatsappMessage = `
*New Inquiry from Website*
━━━━━━━━━━━━━━━━━
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Destination:* ${formData.destination}
*Type:* ${formData.inquiryType}
*Travel Date:* ${formData.travelDate || 'Not specified'}
*Travelers:* ${formData.travelers}
*Message:* ${formData.message || 'No message'}
━━━━━━━━━━━━━━━━━
        `.trim();

        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Show success message
        alert('Thank you! Your inquiry has been submitted successfully. We will contact you shortly.');
        
        // Ask if user wants to chat on WhatsApp
        if (confirm('Would you like to chat with us on WhatsApp for faster response?')) {
            window.open(`https://wa.me/${CONFIG.contact.phoneLink}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        }

        // Reset form and close modal
        form.reset();
        closeModal();

    } catch (error) {
        console.error('Error submitting inquiry:', error);
        alert('Sorry, there was an error submitting your inquiry. Please try again or contact us directly.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// ===== CONTACT FORM SUBMISSION =====
async function submitContactForm(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    const formData = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        destination: form.destination.value,
        inquiryType: form.inquiryType.value,
        message: form.message.value
    };

    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    try {
        // Send to backend or process
        await new Promise(resolve => setTimeout(resolve, 1000));

        const whatsappMessage = `
*Contact Form Inquiry*
━━━━━━━━━━━━━━━━━
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Interested In:* ${formData.destination}
*Type:* ${formData.inquiryType}
*Message:* ${formData.message}
━━━━━━━━━━━━━━━━━
        `.trim();

        alert('Thank you for contacting us! We will get back to you within 24 hours.');
        
        if (confirm('Chat with us on WhatsApp?')) {
            window.open(`https://wa.me/${CONFIG.contact.phoneLink}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        }

        form.reset();

    } catch (error) {
        alert('Error submitting form. Please try again.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// ===== FAQ TOGGLE =====
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        if (question) {
            question.addEventListener('click', function() {
                // Close other FAQs
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('open');
                    }
                });
                
                // Toggle current FAQ
                item.classList.toggle('open');
            });
        }
    });
}

// ===== TABS =====
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// ===== ITINERARY ACCORDION =====
function initItinerary() {
    const itineraryDays = document.querySelectorAll('.itinerary-day');
    
    itineraryDays.forEach(day => {
        const header = day.querySelector('.day-header');
        
        if (header) {
            header.addEventListener('click', function() {
                // Close others
                itineraryDays.forEach(otherDay => {
                    if (otherDay !== day) {
                        otherDay.classList.remove('open');
                    }
                });
                
                // Toggle current
                day.classList.toggle('open');
            });
        }
    });

    // Open first day by default
    if (itineraryDays.length > 0) {
        itineraryDays[0].classList.add('open');
    }
}

// ===== UPDATE COMPANY INFO FROM CONFIG =====
function updateCompanyInfo() {
    // Update logo text
    const logos = document.querySelectorAll('.logo span, .footer-logo span');
    logos.forEach(logo => {
        logo.textContent = CONFIG.company.name;
    });

    // Update contact info
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.href = `tel:${CONFIG.contact.phone}`;
        if (link.querySelector('span') || link.textContent.includes('+')) {
            link.innerHTML = link.innerHTML.replace(/\+[\d\s-]+/, CONFIG.contact.phone);
        }
    });

    // Update WhatsApp links
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"], .whatsapp-float');
    whatsappLinks.forEach(link => {
        const currentHref = link.getAttribute('href');
        if (currentHref && currentHref.includes('wa.me')) {
            link.href = `https://wa.me/${CONFIG.contact.phoneLink}?text=${encodeURIComponent(CONFIG.whatsapp.generalInquiry)}`;
        }
    });

    // Update email links
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.href = `mailto:${CONFIG.contact.email}`;
    });
}

// ===== HELPER FUNCTIONS =====

// Open WhatsApp with specific tour
function inquireOnWhatsApp(destinationName) {
    const message = CONFIG.whatsapp.tourInquiry.replace('{destination}', destinationName);
    window.open(`https://wa.me/${CONFIG.contact.phoneLink}?text=${encodeURIComponent(message)}`, '_blank');
}

// Open WhatsApp for visa inquiry
function visaInquiryWhatsApp(country) {
    const message = CONFIG.whatsapp.visaInquiry.replace('{country}', country);
    window.open(`https://wa.me/${CONFIG.contact.phoneLink}?text=${encodeURIComponent(message)}`, '_blank');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Make functions globally available
window.openModal = openModal;
window.closeModal = closeModal;
window.submitInquiry = submitInquiry;
window.submitContactForm = submitContactForm;
window.inquireOnWhatsApp = inquireOnWhatsApp;
window.visaInquiryWhatsApp = visaInquiryWhatsApp;
window.scrollToSection = scrollToSection;
