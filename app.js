let gridBtn = document.querySelector('.grid');
let singleBtn = document.querySelector('.single');
let grid = document.querySelector('.Post');
let single = document.querySelector('.verticle');
singleBtn.addEventListener('click',(e)=>{
    console.log('single');
grid.style.display = 'none';
single.style.display = 'flex';
})
gridBtn.addEventListener('click',(e)=>{
    console.log('grid');
grid.style.display = 'grid';
single.style.display = 'none';
})