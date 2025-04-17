// Dark/Light Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeToggle.querySelector('i');
    
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
}

// Daily Special Rotation
const dailySpecials = [
    {
        name: "Chicken Karahi",
        description: "Slow-cooked chicken in rich tomato gravy with fresh coriander",
        price: "Rs. 320"
    },
    {
        name: "Beef Pulao",
        description: "Fragrant rice with tender beef pieces and caramelized onions",
        price: "Rs. 280"
    },
    {
        name: "Chapli Kabab",
        description: "Spiced minced meat patties with special seasoning",
        price: "Rs. 350 (6 pieces)"
    },
    {
        name: "Haleem",
        description: "Slow-cooked wheat, barley and meat porridge with spices",
        price: "Rs. 200"
    },
    {
        name: "Nihari",
        description: "Slow-cooked beef shank in a rich, spicy gravy",
        price: "Rs. 300"
    }
];

function updateDailySpecial() {
    const today = new Date().getDay(); // 0-6
    const special = dailySpecials[today % dailySpecials.length];
    
    document.getElementById('todaysSpecial').textContent = special.name;
    document.getElementById('specialDesc').textContent = special.description;
    document.getElementById('specialPrice').textContent = special.price;
    
    // Update the special option in order modal
    const specialOption = document.getElementById('specialOption');
    specialOption.textContent = `${special.name} (${special.price})`;
    specialOption.value = special.name;
}

// Modal Functions
function openOrderModal() {
    document.getElementById('orderModal').style.display = 'flex';
}

function openEventModal() {
    document.getElementById('eventModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('orderModal').style.display = 'none';
    document.getElementById('eventModal').style.display = 'none';
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModal();
    }
});

// Form Submissions
document.getElementById('orderForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('orderName').value;
    const item = document.getElementById('orderItem').value;
    const quantity = document.getElementById('orderQuantity').value;
    
    alert(`Thank you, ${name}! Your order for ${quantity} ${item} has been received. We will call you shortly to confirm.`);
    
    // Reset form
    e.target.reset();
    closeModal();
});

document.getElementById('eventForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('eventName').value;
    const eventType = document.getElementById('eventType').value;
    
    alert(`Thank you, ${name}! Your ${eventType} booking request has been received. We will contact you soon to discuss details.`);
    
    // Reset form
    e.target.reset();
    closeModal();
});

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

// Initialize
updateDailySpecial();