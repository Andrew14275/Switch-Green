// ============================================
// SWITCHGREEN - MAIN JAVASCRIPT
// Utility functions and interactivity
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Switch-Green Portal Loaded');
    
    // Initialize animations
    initAnimations();
    
    // Initialize smooth scrolling
    initSmoothScroll();
});

// ============================================
// ANIMATIONS
// ============================================

function initAnimations() {
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe section elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// DATA EXPORT FUNCTIONS
// ============================================

function exportData(format) {
    const data = getOfficialMNREData();
    
    if (format === 'json') {
        exportJSON(data);
    } else if (format === 'csv') {
        exportCSV(data);
    } else if (format === 'excel') {
        alert('Excel export: Use the CSV download and open in Excel, or implement XLSX library for direct Excel export.');
    }
}

function exportJSON(data) {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const date = new Date().toISOString().split('T')[0];
    link.href = url;
    link.download = `india-renewable-energy-${date}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('JSON file downloaded successfully!');
}

function exportCSV(data) {
    let csv = 'Rank,State,Solar (MW),Wind (MW),Hydro (MW),Biomass (MW),Total (MW)\n';
    
    data.allStates.forEach(state => {
        csv += `${state.rank},${state.name},${state.solar},${state.wind},${state.hydro},${state.biomass},${state.total}\n`;
    });
    
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const date = new Date().toISOString().split('T')[0];
    link.href = url;
    link.download = `india-renewable-energy-${date}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    
    showNotification('CSV file downloaded successfully!');
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Add animation keyframes
if (!document.getElementById('notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatNumber(num) {
    return new Intl.NumberFormat('en-IN').format(num);
}

function formatGW(mw) {
    return (mw / 1000).toFixed(2);
}

function calculatePercentage(part, total) {
    return ((part / total) * 100).toFixed(2);
}

// ============================================
// SEARCH/FILTER FUNCTIONALITY
// ============================================

function initStateSearch() {
    const searchInput = document.getElementById('state-search');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        const rows = document.querySelectorAll('.states-table tbody tr');
        
        rows.forEach(row => {
            const stateName = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
            if (stateName.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// ============================================
// MOBILE MENU TOGGLE (if needed)
// ============================================

function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
}

// ============================================
// PRINT FUNCTIONALITY
// ============================================

function printPage() {
    window.print();
}

// ============================================
// SHARE FUNCTIONALITY
// ============================================

function sharePortal() {
    if (navigator.share) {
        navigator.share({
            title: 'Switch-Green | India\'s Renewable Energy Portal',
            text: 'Check out India\'s renewable energy progress toward 500 GW by 2030!',
            url: window.location.href
        }).then(() => {
            showNotification('Shared successfully!');
        }).catch(err => {
            console.log('Error sharing:', err);
        });
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Link copied to clipboard!');
        });
    }
}

// ============================================
// PROGRESS BAR ANIMATION
// ============================================

window.addEventListener('load', function() {
    const progressFill = document.getElementById('progressFill');
    if (progressFill) {
        setTimeout(function() {
            progressFill.style.width = '40.06%';
        }, 300);
    }
});

// ============================================
// CONSOLE WELCOME MESSAGE
// ============================================

console.log('%c🌱 Switch-Green Portal', 'color: #10b981; font-size: 24px; font-weight: bold;');
console.log('%cIndia\'s Renewable Energy Data Portal', 'color: #6b7280; font-size: 14px;');
console.log('%cData Source: MNRE | Last Updated: October 31, 2025', 'color: #6b7280; font-size: 12px;');
