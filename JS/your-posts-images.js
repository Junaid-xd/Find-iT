import { foundedItems } from "./founded.js";
import { returnName } from "./users.js";
import { returnContact } from "./users.js";
import { lostItemsWithImg } from "./lost.js";
import { removeFoundedItemWithImg } from "./founded.js";
import { removeLostItemWithImg } from "./lost.js";
import { returnLostItemWithImgObject } from "./lost.js";
import { returnFoundItemWithImgObject } from "./founded.js";
import { addImgObjToRecoverArray } from "./recover.js";


const key = localStorage.getItem('key');

export function renderContent()
{
  var content = document.querySelector('.js-grid');
  content.innerHTML = '';
  foundedItems.forEach((founded)=>{
    if(founded.reg === key)
    {
      content.innerHTML +=`
        <div class="wrapper">
          <div class="img-div">
            <img src="${founded.picSrc}" class="css-content-img">
          </div>


          <div class="productName-div">
            <b>${founded.productName}</b>
          </div>

          <div class="desciption-div css-desciption-div">
            
            <div class="name-div">
              <div class="keyword"><b>Reported By : </b></div>
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
              <div class="dynamic current-status"><b>Founded</b></div>
            </div>

            <div class="buttons-div">
              <button class="delete-button" data-delete-postID="${founded.postID}" data-array-name="found">DELETE</button>
              <button class="recover-button" data-recover-postID="${founded.postID}" data-array-name="found">RECOVER</button>
            </div>
          </div>
        </div>
      `;
    }
  });

  lostItemsWithImg.forEach((lost)=>{
    if(lost.reg === key)
    {
      content.innerHTML +=`
        <div class="wrapper">
          <div class="img-div">
            <img src="${lost.picSrc}" class="css-content-img">
          </div>


          <div class="productName-div">
            <b>${lost.productName}</b>
          </div>

          <div class="desciption-div css-desciption-div">
            
            <div class="name-div">
              <div class="keyword"><b>Reported By : </b></div>
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
              <div class="dynamic current-status lost-status"><b>Missing</b></div>
            </div>

            <div class="buttons-div">
              <button class="delete-button" data-delete-postID="${lost.postID}" data-array-name="lost">DELETE</button>
              <button class="recover-button" data-recover-postID="${lost.postID}" data-array-name="lost">RECOVER</button>
            </div>
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
        removeFoundedItemWithImg(ID);
        renderContent();
      }
      else
      {
        removeLostItemWithImg(ID);
        renderContent();
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
  
      if(arrayN==='lost')
      {
        const obj = returnLostItemWithImgObject(ID);
        removeLostItemWithImg(obj.postID);
        addImgObjToRecoverArray(obj);
        renderContent();
      }
      else
      {
        const obj = returnFoundItemWithImgObject(ID);
        removeFoundedItemWithImg(obj.postID);
        addImgObjToRecoverArray(obj);
        renderContent();
      }
    });
  });
}

