const menuBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.menu__list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('menu__list--open');
})

const listener = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            document.querySelectorAll('.site-list__link').forEach(link => {
                let id = link.getAttribute('href').replace("#", "");
                if (id === entry.target.id) {
                    link.closest('.site-list__item').classList.add("site-list__item--active");
                } else link.closest('.site-list__item').classList.remove("site-list__item--active");
            })

            /* const activeId = entry.target.id;

            document.querySelectorAll('.site-list__item').forEach(item => {
                item.classList.remove('site-list__item--active');
            });

            const activeLink = document.querySelector(`.site-list__link[href="#${activeId}"]`);
            if (activeLink) {
                activeLink.closest('.site-list__item').classList.add('site-list__item--active')
            } */
        }
    })

}, { threshold: 0.5 });

document.querySelectorAll('#slide-0,#slide-1,#slide-2,#slide-3').forEach(link => {
    listener.observe(link);
}
);