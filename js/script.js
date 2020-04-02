const btn = document.getElementById('btn');
const headinh = document.getElementById('heading');
const btn_sm = document.querySelector('.btn-sm');

btn.addEventListener('click', function() {
  headinh.innerHTML = 'Не бзди!';
  btn_sm.classList.add('show');
});

btn_sm.addEventListener('click', function() {
  headinh.innerHTML = 'Нажмите, чтобы не бздець!';
  btn_sm.classList.remove('show');
});
