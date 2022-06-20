
const observer = new IntersectionObserver(entries => {
    console.log(entries);


    if(entries[0].intersectionRatio >= 1) {
        entries[0].target.classList.add('animated-off')
    }
    entries[0].target.classList.add('.animated-off');
}, {
    threshold: [0, 100, 1]

    
})

// escrever no console entries cada vez que movimentar o scroll pelo elemento

Array.from(document.querySelectorAll('.animated')).forEach(element => {
    observer.observe(document.querySelector('.animated'))
})



    


