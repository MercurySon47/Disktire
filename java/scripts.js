// ===== ИКОНКИ НАВИГАЦИИ =====
document.querySelectorAll('.icon-hover').forEach(icon => {
    icon.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    
    icon.addEventListener('mouseup', function() {
        this.style.transform = 'scale(1.15)';
    });
    
    icon.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ===== СЧЕТЧИКИ ТОВАРОВ =====
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для всех счетчиков
    document.querySelectorAll('.decrement-btn').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            if (value > parseInt(input.min)) {
                input.value = value - 1;
            }
        });
    });
    
    document.querySelectorAll('.increment-btn').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            if (value < parseInt(input.max)) {
                input.value = value + 1;
            }
        });
    });
    
    // Запрещаем ввод с клавиатуры в счетчики
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('keydown', function(e) {
            e.preventDefault();
        });
    });
    
    // ===== КНОПКИ "В КОРЗИНУ" =====
    document.querySelectorAll('.cart-btn').forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.cart-card');
            const title = card.querySelector('.card-title').textContent;
            const price = card.querySelector('.text-danger').textContent;
            const quantity = card.querySelector('.quantity-input').value;
            
            // Сохраняем оригинальный текст и класс
            const originalText = this.textContent;
            const originalClass = this.className;
            
            // Визуальный фидбэк
            this.textContent = 'Добавлено!';
            this.classList.remove('btn-primary');
            this.classList.add('btn-success');
            
            // Здесь можно добавить логику для реальной корзины
            console.log(`Добавлено в корзину: ${title}, ${quantity} шт., ${price}`);
            
            // Показываем уведомление
            showNotification(`Товар "${title}" добавлен в корзину (${quantity} шт.)`);
            
            // Возвращаем исходное состояние через 2 секунды
            setTimeout(() => {
                this.textContent = originalText;
                this.className = originalClass;
            }, 2000);
        });
    });
    
    // ===== УВЕДОМЛЕНИЯ =====
    function showNotification(message) {
        // Создаем элемент уведомления
        const notification = document.createElement('div');
        notification.className = 'notification alert alert-success alert-dismissible fade show';
        notification.style.cssText = `
            position: fixed;
            top: 80px;
            right: 20px;
            z-index: 10000;
            min-width: 300px;
            animation: slideIn 0.3s ease;
        `;
        
        notification.innerHTML = `
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            <strong>Успешно!</strong> ${message}
        `;
        
        // Добавляем в тело документа
        document.body.appendChild(notification);
        
        // Удаляем через 5 секунд
        setTimeout(() => {
            if (notification.parentNode) {
                notification.classList.remove('show');
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }
        }, 5000);
    }
    
    // Анимация для уведомления
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .notification {
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
    `;
    document.head.appendChild(style);
});

// ===== ПОИСК =====
const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-icon');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
}

function performSearch(query) {
    if (query.trim() !== '') {
        console.log('Поиск:', query);
        // Здесь можно добавить логику поиска
        
        // Подсветка найденных карточек
        document.querySelectorAll('.cart-card').forEach(card => {
            const title = card.querySelector('.card-title').textContent.toLowerCase();
            const text = card.querySelector('.card-text').textContent.toLowerCase();
            
            if (title.includes(query.toLowerCase()) || text.includes(query.toLowerCase())) {
                card.style.boxShadow = '0 0 0 2px #0d6efd';
                card.style.transform = 'scale(1.02)';
                
                setTimeout(() => {
                    card.style.boxShadow = '';
                    card.style.transform = '';
                }, 2000);
            }
        });
    }
}