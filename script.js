const list = document.querySelectorAll('.list');

list.forEach((item) => {
    item.addEventListener('click', () => {
        list.forEach((otherItem) => otherItem.classList.remove('active'));
        item.classList.add('active');
    });

    item.addEventListener('mouseover', () => {
        list.forEach((otherItem) => otherItem.classList.remove('active'));
        item.classList.add('active');
    });

    item.addEventListener('mouseout', () => {
        // do nothing, keep the active state
    });
});