let string="";
let buttons=doucment.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    console.log(e.target)
    string=string + e.target.innerHTML;
    doucment.querySelector('input').value=string;
  })
})

