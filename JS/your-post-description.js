import { foundItemsWithDes } from "./founded.js";
import { lostItemsWithDes } from "./lost.js";
import { returnName } from "./users.js";
import { returnContact } from "./users.js";
import { removeFoundedItemWithDes } from "./founded.js";
import { removeLostItemWithDes } from "./lost.js";
import { returnLostItemWithDesObject } from "./lost.js";
import { returnFoundItemWithDesObject } from "./founded.js";
import { addDesObjToRecoverArray } from "./recover.js";



const key = localStorage.getItem('key');



function renderContent()
{
  var content = document.querySelector('.js-grid');
  content.innerHTML='';
  foundItemsWithDes.forEach((founded)=>{
    if(founded.reg === key)
    {
      content.innerHTML +=`
      <div class="wrapper">
        <div class="des-div">
         ${founded.descriptionDetails}
        </div>
        

        <div class="productName-div pro-name">
          <b>${founded.productName}</b>
        </div>

        <div class="desciption-div css-desciption-div">
          
          <div class="name-div">
            <div class="keyword"><b>Name : </b></div>
            <div class="dynamic-name dynamic">${returnName(founded.reg)}</div>
          </div>

          <div class="reg-div">
            <div class="keyword"><b>Reg No : </b></div>
            <div class="dynamic-reg dynamic">${founded.reg}</div>
          </div>

          <div class="contact-div">
            <div class="keyword"><b>Contact No : </b></div>
            <div class="dynamic-contact dynamic">${returnContact(founded.reg)}</div>
          </div>

          <div class="location-div">
            <div class="keyword"><b>Location : </b></div>
            <div class="dynamic-location dynamic">${founded.location}</div>
          </div>

          <div class="status-div">
            <div class="keyword"><b>Status :</b></div>
            <div class="dynamic current-status">Founded</div>
          </div>
        </div>

        <div class="buttons-div">
          <button class="delete-button" data-delete-postID="${founded.postID}" data-array-name="found">DELETE</button>
          <button class="recover-button" data-recover-postID="${founded.postID}" data-array-name="found">RECOVER</button>
        </div>

    </div>
     `;
    }
  });

  lostItemsWithDes.forEach((lost)=>{
    if(lost.reg === key)
    {
      content.innerHTML +=`
      <div class="wrapper">
        <div class="des-div">
        ${lost.descriptionDetails}
        </div>
        

        <div class="productName-div pro-name">
          <b>${lost.productName}</b>
        </div>

        <div class="desciption-div css-desciption-div">
          
          <div class="name-div">
            <div class="keyword"><b>Name : </b></div>
            <div class="dynamic-name dynamic">${returnName(lost.reg)}</div>
          </div>

          <div class="reg-div">
            <div class="keyword"><b>Reg No : </b></div>
            <div class="dynamic-reg dynamic">${lost.reg}</div>
          </div>

          <div class="contact-div">
            <div class="keyword"><b>Contact No : </b></div>
            <div class="dynamic-contact dynamic">${returnContact(lost.reg)}</div>
          </div>

          <div class="location-div">
            <div class="keyword"><b>Location : </b></div>
            <div class="dynamic-location dynamic">${lost.location}</div>
          </div>

          <div class="status-div">
            <div class="keyword"><b>Status :</b></div>
            <div class="dynamic current-status lost-colour">Missing</div>
          </div>
        </div>

        <div class="buttons-div">
          <button class="delete-button" data-delete-postID="${lost.postID}" data-array-name="lost">DELETE</button>
          <button class="recover-button" data-recover-postID="${lost.postID}" data-array-name="lost">RECOVER</button>
        </div>

    </div>
      `;
    }
  });

  interactiveDeleteButtons();
  interactiveRecoverButtons();
}

renderContent();




function interactiveDeleteButtons()
{
  document.querySelectorAll('.delete-button').forEach((button)=>{
    button.addEventListener('click',()=>{
      const ID = button.getAttribute("data-delete-postID");
      const arrayN = button.getAttribute("data-array-name");
  
      if(arrayN === 'found')
      {
        removeFoundedItemWithDes(ID);
        renderContent();
      }
      else
      {
        removeLostItemWithDes(ID);
        renderContent();
        console.log('Chla toh hai');
      }
    });
  });
}


function interactiveRecoverButtons()
{
  document.querySelectorAll('.recover-button').forEach((button)=>{
    button.addEventListener('click',()=>{
      const ID = button.getAttribute("data-recover-postID");
      const arrayN = button.getAttribute("data-array-name");
      console.log('ID : ', ID, ' Array Name : ',arrayN);
  
      if(arrayN==='lost')
      {
        const obj = returnLostItemWithDesObject(ID);
        removeLostItemWithDes(obj.postID);
        addDesObjToRecoverArray(obj);
        renderContent();
      }
      else
      {
        const obj = returnFoundItemWithDesObject(ID);
        console.log('RETURNING OBJECT : ',obj);
        removeFoundedItemWithDes(obj.postID);
        addDesObjToRecoverArray(obj);
        renderContent();
      }
    });
  });
}