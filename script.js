const y=document.getElementById('year'); if(y) y.textContent=new Date().getFullYear();
const forms=document.querySelectorAll('[data-demo-form]');
forms.forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();alert('Demo only — connect this form to your real booking/contact system before publishing.');}));
