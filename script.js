const labels = document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    ///splits letters into an array
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
        .join('')
})