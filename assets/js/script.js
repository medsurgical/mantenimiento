// Countdown Timer
function updateCountdown() {
    // Set the launch date (15 days from now as example)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 15);
    
    function calculateRemaining() {
        const now = new Date().getTime();
        const distance = launchDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
    
    calculateRemaining();
    setInterval(calculateRemaining, 1000);
}

// Initialize countdown when page loads
document.addEventListener('DOMContentLoaded', updateCountdown);

// Add smooth hover effects to brand cards
document.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Logo fallback
const logo = document.getElementById('company-logo');
logo.addEventListener('error', function() {
    this.style.display = 'none';
    const placeholder = document.createElement('div');
    placeholder.className = 'logo-placeholder';
    placeholder.innerHTML = `
        <div style="text-align: center; padding: 40px;">
            <div style="font-size: 4rem; color: #2E8BC0; margin-bottom: 20px;">
                <i class="fas fa-dove"></i>
            </div>
            <h2 style="color: #2E8BC0; font-size: 2.5rem; margin-bottom: 5px;">MedSurgical</h2>
            <p style="color: #6B7280; font-size: 1.2rem;">ecuador</p>
        </div>
    `;
    this.parentNode.appendChild(placeholder);
});

// Track WhatsApp clicks
document.querySelectorAll('.whatsapp-button, .contact-item[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function() {
        // Google Analytics event (if GA is installed)
        if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
                'event_category': 'WhatsApp',
                'event_label': 'Contact Button',
                'value': 1
            });
        }
    });
});

// Console message
console.log('%c MedSurgical Ecuador ', 'background: linear-gradient(135deg, #2E8BC0, #14B8A6); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px;');
console.log('%c Sitio en mantenimiento - Próximamente ', 'color: #6B7280; font-size: 12px;');
console.log('%c Optimizado para SEO y AI ', 'background: #4285F4; color: white; font-size: 12px; padding: 4px 8px; border-radius: 4px;');