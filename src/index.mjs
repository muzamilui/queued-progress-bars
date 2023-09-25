import "./styles.css";

let root = document.querySelector('#app')
let btn = document.querySelector('.btn')
let count = 0;
function add(){
  if(count === 0){
    renderProgress(2)
  }
  count += 1
}
btn.addEventListener('click',add)

const renderProgress = (n=3) => {
  let elm = document.createElement('div');
  elm.classList.add('progressBar');
    elm.style = `transition: width ${n}s ease;`
  root.appendChild(elm);
  setTimeout(()=>{
      elm.classList.add('width');
  },50)
elm.addEventListener('transitionend', () => {
    count -= 1;
    if (count >= 1) {
      renderProgress();
    }
  });
  elm.removeEventListener('transitionend',()=>{})
}

