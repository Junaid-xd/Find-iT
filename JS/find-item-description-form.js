import { addDesObjToFoundedArray } from "./founded.js";




const key = localStorage.getItem('key');


function createPost()
{
  document.querySelector('.post-btn').addEventListener('click',()=>{
    const tempDes = document.querySelector('.js-des-input').value;
    const tempProName = document.querySelector('.js-name-input').value;
    const tempLoc = document.querySelector('.js-location-input').value;

    if(tempProName!=='' && tempLoc!=='' && tempDes!=='')
    {
      addDesObjToFoundedArray(key, tempDes, tempLoc, tempProName);
      document.querySelector('.js-des-input').value = '';
      document.querySelector('.js-name-input').value = '';
      document.querySelector('.js-location-input').value = '';
      alert('Post SuccessFull !!');
    }
    else
    {
      alert('Please fill all the fields');
    }    
  });
}

createPost();