var items = document.querySelectorAll('.accordion > li');

items.forEach(function (item) {
    item.addEventListener('click', function (event) {
        // Prevent event from bubbling up and affecting parent elements
        event.stopPropagation();

        // Toggle the "active" class on the clicked item
        this.classList.toggle('active');

        // Toggle the display of the nested <ul> only for the clicked item
        var nestedList = this.querySelector('ul');
        if (nestedList) {
            // Check if the nested list is currently visible
            if (nestedList.style.display === 'block') {
                nestedList.style.display = 'none'; // Hide it
            } else {
                nestedList.style.display = 'block'; // Show it
            }
        }
    });
});