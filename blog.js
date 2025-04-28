 // Simple animation trigger
 document.addEventListener('DOMContentLoaded', function() {
    const articles = document.querySelectorAll('article');
    
    articles.forEach((article, index) => {
        // Delay animation for each article
        article.style.animationDelay = $;{index * 1.2}s;
    });
});