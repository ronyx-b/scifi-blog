document.querySelector("body").onload = (e) => {
  document.querySelector("#year").innerHTML = (new Date()).getFullYear();
  document.querySelector("#mist").style.opacity = 0;
  setTimeout(() => {
    document.querySelector("#mist").remove();
  }, 3000)
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const header = entry.target.querySelector('h2');
    const content = entry.target.querySelector('.content')

    if (entry.isIntersecting) {
      header.style.opacity = 1;
      content.style.opacity = 1;
	    return;
    }

  });
});

document.querySelectorAll('article').forEach((article => {
  observer.observe(article);
}))
