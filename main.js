let heading=document.querySelector('h1')
let button=document.querySelector('button')
button.onclick=()=>{
	setUsername()
}

if(!localStorage.getItem('name')){
	setUsername()
}else{
	let storedName = localStorage.getItem('name')
	heading.textContent=`Mozzilla is cool, ${storedName}`
}

function setUsername(){
	const name=prompt('Please enter your name')
	if(!name){
		setUsername()
	}else{
		localStorage.setItem('name', name)
		heading.textContent=`Mozzilla is cool, ${name}`
	}
}
