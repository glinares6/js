/* 
    https://developer.mozilla.org/es/docs/web/API/window/matchmedia*/

    // mql=window.matchMedia(mediaquery(string))

    /*mql-> viene de lmedia query ,list,que es objeto que se crea con el metodo_
    mediaquerystring=es cualquer media query valida con css

    Horientaion en css
    https://developer.mozilla.org/es/docs/Web/CSS/Media_Queries/Using_media_queries
    */ 


    // console.log(innerWidth);
    const title=document.getElementById('title')
    const mql=matchMedia('(min-width:400px) and (orientation:landscape)')

    const applyMatchMedia=mql=>{
        mql.matches ?
        // no se debe usar nunca?
        document.body.style.backgroundColor='red'
        // si es correcto
        // title.classList.add('clase que sea')
        : document.body.style.backgroundColor='royalblue'
    
    // console.log(mql);
    }
    addEventListener('resize',()=>applyMatchMedia(mql))
    // como saber cuando el evento siempre se aplique
    addEventListener('DOMContentLoaded',()=> applyMatchMedia(mql))
    