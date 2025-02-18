let toastBox= document.getElementById('toastBox')
let successMsg = '<i class="fa-solid fa-circle-check"></i>Successfully Submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i>There is an error in your code kindly check it';
let invalidMsg = '<i class="fa-sharp fa-solid fa-circle-exclamation"></i>Your code is invalid kindly check it';
function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if (msg.includes('invalid')) {
        toast.classList.add('invalid')
    }
    setTimeout(()=>{
        toast.remove()
    },5000)

}
