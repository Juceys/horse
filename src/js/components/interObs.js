// Intersection Observer API
var options = {
  root: null,
  rootMargin: '5px',
  threshold: 0.8
}

let callback = function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  })
};

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim')
targets.forEach(target => {
  observer.observe(target);
})

