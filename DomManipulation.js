

function changeTextColor(){
    const heading=document.getElementById('heading')
    heading.style.color='red'
}
function addElement(){
    const div=document.createElement('div')
    div.textContent='Created by Javascript!'
    document.body.appendChild(div)
}
function changeUrl(){
    console.log('hii')
    const img=document.getElementById('myImage')
    img.src='https://isotropic.co/wp-content/uploads/2022/07/image-17.png'
}
document.getElementById('myButton').addEventListener('click',()=>{
changeUrl()
})
changeTextColor()
addElement()
removeElement()
changeUrl()