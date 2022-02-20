document.addEventListener('mousemove', function(e){

    const r = Math.round(e.pageX * 255 / window.innerWidth)
    const b = Math.round(e.pageY * 255 / window.innerHeight)

    const color = `rgb(${r}, 0, ${b})`

    document.body.style.backgroundColor = color;

    // const r = event.clientX
    // const g = Math.floor(Math.random() * 256);
    // const b = event.clientY
  
    // event.target.style.backgroundColor = `rgb(${r},${g},${b})`
    // console.log(`rgb(${r},${g},${b})`)
    console.log (color);

});