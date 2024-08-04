document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.item');
    
    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.2)';
        });

        item.addEventListener('mouseout', () => {
            item.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        });
    });
});
