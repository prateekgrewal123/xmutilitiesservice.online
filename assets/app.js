
document.querySelectorAll('[data-menu]').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const nav=document.querySelector('.links');
    if(!nav) return;
    nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
    nav.style.position='absolute';nav.style.right='4%';nav.style.top='70px';
    nav.style.flexDirection='column';nav.style.alignItems='stretch';
    nav.style.background='#fff';nav.style.padding='16px';nav.style.border='1px solid #e7ebf2';
    nav.style.borderRadius='16px';nav.style.boxShadow='0 20px 50px rgba(16,26,42,.12)';
  });
});
document.querySelectorAll('form[data-contact]').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const d=new FormData(form);
    const subject=encodeURIComponent('Website inquiry - '+(d.get('service')||'General'));
    const body=encodeURIComponent('Name: '+(d.get('name')||'')+'\nEmail: '+(d.get('email')||'')+'\nPhone: '+(d.get('phone')||'')+'\nService: '+(d.get('service')||'')+'\n\nProject details:\n'+(d.get('message')||''));
    window.location.href='mailto:support@xmutilitiesservice.online?subject='+subject+'&body='+body;
  });
});
