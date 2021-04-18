var remove = document.querySelector('.delete-slider'),
del = document.querySelectorAll('.del'),
next = document.querySelector('.next'),
prev = document.querySelector('.prev'),
index = 0;

prev.addEventListener('click',()=>{
index < del.length-1 ? index++: index = 0; 
remove.style.marginLeft = `-${index*2*100}%`;
});

next.addEventListener('click',()=>{
index > 0  ? index--: index = del.length-1 ; 
remove.style.marginLeft = `-${index*2*100}%`
});
