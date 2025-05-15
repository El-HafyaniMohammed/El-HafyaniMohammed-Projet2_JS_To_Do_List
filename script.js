const inp = document.getElementById('inp');
const btn = document.getElementById('btn');
const result = document.getElementById('todo-list');

btn.addEventListener('click', function(event) {
  event.preventDefault(); 

  if (inp.value.trim() === '') {
    alert('Please ajouter une tache');
  } else {
    const li = document.createElement('li');
    li.style.listStyleType = 'none'; 
    li.style.padding = '10px'; 
    li.style.margin = '5px 0'; 
    li.style.backgroundColor = '#f0f0f0'; 
    li.style.borderRadius = '5px'; 
    li.innerHTML = inp.value;
    result.appendChild(li);
    inp.value = '';
  }
});
