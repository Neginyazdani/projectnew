$(document).ready(()=>{
    let h2 = $("h2");
    let img =$("img");
    let h1 = $("h1");
    let tl= new TimelineLite();


tl.pause();

tl
.add('intro')
.to(h1,7,{x:300,y:100,ease:AudioBufferSourceNode.easeOut})
.from(h2,7,{x:-200},'+=3')
.from(img,7,{autoAlpha:0,delay:1},'intro');
$("#play").click(()=>{
    tl.play();

})
$("#pause").click(()=>{
    tl.pause();

})
$("#restart").click(()=>{
    tl.restart();

})
$("#reverse").click(()=>{
    tl.reverse();

})
$("#resume").click(()=>{
    tl.resume();

})
$("#speedup").click(()=>{
    tl.timeScale(6);

})
$("#speeddown").click(()=>{
    tl.timeScale(0.5);

})
$("#seek").click(()=>{
    tl.seek(5);

})
$("#progress").click(()=>{
    tl.progress(0.5);

});