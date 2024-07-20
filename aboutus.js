document.addEventListener('DOMContentLoaded', function() {
    const ourStorySection = document.getElementById('ourStorySection');
    
    ourStorySection.addEventListener('mouseover', function() {
        ourStorySection.style.color = ' #ff7e5f';
        ourStorySection.style.backgroundColor = '#fccec2'; // Change to your desired color
    });

    ourStorySection.addEventListener('mouseout', function() {
        ourStorySection.style.color = '';
        ourStorySection.style.backgroundColor = ''; // Resets to the original color
    });
});
