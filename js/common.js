//http://youmightnotneedjquery.com/
export function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

//https://github.com/daneden/animate.css
export function animateCSS(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

export function animateCSSFaster(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName, "faster")

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName, "faster")
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}

export function add_hide_cls(element){
  const node = document.querySelector(element)
  if(node) 
    node.classList.add('hide')
  else
    console.log("could not find node! add")
}

export function remove_hide_cls(element){
  const node = document.querySelector(element)
  if(node) 
    node.classList.remove('hide')
  else
    console.log("could not find node! remove")
}