import { foundedItems } from "./founded.js";

export let lostItemsWithImg = JSON.parse(localStorage.getItem('lostWithImg'));
export let lostItemsWithDes = JSON.parse(localStorage.getItem('lostWithDes'));




//========================================================
//========================================================
//============== LOST DESCRIPTION ARRAY ==================
//========================================================
//========================================================


// export let lostItemsWithDes=[{
//   descriptionDetails:'Here we will provide description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti consectetur at deserunt tempore assumenda dignissimos natus architecto sed possimus veniam provident esse quas, delenitimagni, similique eum odio voluptate.',
//   location:'Mechanical Department',
//   reg:'2024-CE-01',
//   productName: 'LOGO',
//   postID:1
// },{
//   descriptionDetails:'MONEY KI DESCRIPTION Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsum cumque minus voluptatem? Aperiam assumenda placeat perspiciatis itaque sunt officia consequatur, odio eveniet cum similique qui earum voluptatibus. Nulla, delectus?',
//   location:'CS Department',
//   reg:'2022-SE-41',
//   productName: 'MONEY',
//   postID:2
// }];





//========================================================
//================= LOST FOUND ARRAY =====================
//========================================================


// export let lostItemsWithImg = [{
//   picSrc:'../images/lost items/UET logo.png',
//   location:'Mechanical Department',
//   reg:'2022-SE-41',
//   productName: 'Logo',
//   postID:1
// },
// {
//   picSrc:'../images/lost items/W4.jpg',
//   location:'Chemical Department',
//   reg:'2024-CE-01',
//   productName: 'Joker',
//   postID:2
// }];


if(!lostItemsWithImg)
{
  // lostItemsWithImg = [{
  //   picSrc:'../images/lost items/UET logo.png',
  //   location:'Mechanical Department',
  //   reg:'2022-SE-41',
  //   productName: 'Logo',
  //   postID:1
  // },{
  //   picSrc:'../images/lost items/W4.jpg',
  //   location:'Chemical Department',
  //   reg:'2024-CE-01',
  //   productName: 'Joker',
  //   postID:2
  // },{
  //   picSrc:'../images/lost items/airPods.jpeg',
  //   location:'ELECTRICAL DEPARTMENT',
  //   reg:'2024-AI-01',
  //   productName: 'AIR PODS',
  //   postID:3
  // }];
  useDefaultLostData();
}

if(!lostItemsWithDes)
{
  // lostItemsWithDes=[{
  //   descriptionDetails:'Here we will provide description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti consectetur at deserunt tempore assumenda dignissimos natus architecto sed possimus veniam provident esse quas, delenitimagni, similique eum odio voluptate.',
  //   location:'Mechanical Department',
  //   reg:'2024-CE-01',
  //   productName: 'LOGO',
  //   postID:1
  // },{
  //   descriptionDetails:'MONEY KI DESCRIPTION Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsum cumque minus voluptatem? Aperiam assumenda placeat perspiciatis itaque sunt officia consequatur, odio eveniet cum similique qui earum voluptatibus. Nulla, delectus?',
  //   location:'CS Department',
  //   reg:'2022-SE-41',
  //   productName: 'MONEY',
  //   postID:2
  // }]; 
  useDefaultLostData();
}


function saveLostItemsWithImgOnStorage()
{
  localStorage.setItem('lostWithImg', JSON.stringify(lostItemsWithImg));
}

saveLostItemsWithImgOnStorage();


function saveLostItemsWithDesOnStorage()
{
  localStorage.setItem('lostWithDes', JSON.stringify(lostItemsWithDes));
}

saveLostItemsWithDesOnStorage();


export function removeLostItemWithImg(ID)
{
  const id = parseInt(ID);
  const tempArray = [];
  lostItemsWithImg.forEach((lost)=>{
    if(lost.postID !== id)
    {
      tempArray.push(lost);
    }
  });
  lostItemsWithImg.length = 0;
  lostItemsWithImg = tempArray;
  saveLostItemsWithImgOnStorage();
  console.log('REMOVE WALA FUNCTION B CHL GYA HAI');
}

export function removeLostItemWithDes(ID)
{
  const id = parseInt(ID);
  const tempArray = [];
  lostItemsWithDes.forEach((lost)=>{
    if(lost.postID !== id)
    {
      tempArray.push(lost);
    }
  });
  lostItemsWithDes.length = 0;
  lostItemsWithDes = tempArray;
  saveLostItemsWithDesOnStorage();
  console.log('REMOVE WALA FUNCTION B CHL GYA HAI');
}

export function returnLostItemWithImgObject(ID)
{
  const id = parseInt(ID);
  let obj;
  lostItemsWithImg.forEach((lost)=>{
    if(lost.postID === id)
    {
      obj=lost;
    }
  });
  // console.log('RETURNING OBJECT : ', obj);
  return obj;
}

export function returnLostItemWithDesObject(ID)
{
  const id = parseInt(ID);
  let obj;
  lostItemsWithDes.forEach((lost)=>{
    if(lost.postID === id)
    {
      obj=lost;
    }
  });
  // console.log('RETURNING OBJECT : ', obj);
  return obj;
}

export function useDefaultLostData()
{
  lostItemsWithImg = [{
    picSrc:'../images/lost items/UET logo.png',
    location:'Mechanical Department',
    reg:'2022-SE-41',
    productName: 'Logo',
    postID:1
  },{
    picSrc:'../images/lost items/W4.jpg',
    location:'Chemical Department',
    reg:'2024-CE-01',
    productName: 'Joker',
    postID:2
  },{
    picSrc:'../images/lost items/airPods.jpeg',
    location:'ELECTRICAL DEPARTMENT',
    reg:'2024-AI-01',
    productName: 'AIR PODS',
    postID:3
  }];


  lostItemsWithDes=[{
    descriptionDetails:'Here we will provide description Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo corrupti consectetur at deserunt tempore assumenda dignissimos natus architecto sed possimus veniam provident esse quas, delenitimagni, similique eum odio voluptate.',
    location:'Mechanical Department',
    reg:'2024-CE-01',
    productName: 'LOGO',
    postID:1
  },{
    descriptionDetails:'MONEY KI DESCRIPTION Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsum cumque minus voluptatem? Aperiam assumenda placeat perspiciatis itaque sunt officia consequatur, odio eveniet cum similique qui earum voluptatibus. Nulla, delectus?',
    location:'CS Department',
    reg:'2022-SE-41',
    productName: 'MONEY',
    postID:2
  }]; 

  saveLostItemsWithImgOnStorage();
  saveLostItemsWithDesOnStorage();
}


export function addImgObjToLostArray(key, nSrc, nLocation, nName)
{
  let bool = true;
  let len = lostItemsWithImg.length;
  console.log('Length : ',len);
  let autoID = len;
  while(bool)
  {
    bool = false;
    lostItemsWithImg.forEach((lost)=>{
      if(lost.postID===autoID)
      {
        autoID++;
        bool = true;
      }
    });
  }
  const nObj = {
    picSrc:nSrc,
    location:nLocation,
    reg:key,
    productName: nName,
    postID:autoID
  };

  console.log('Yeh lost obj with img bna hai : ', nObj);
  lostItemsWithImg.push(nObj);
  saveLostItemsWithImgOnStorage();
}


export function addDesObjToLostArray(key, nDes, nLocation, nName)
{
  let bool = true;
  let len = lostItemsWithDes.length;
  console.log('Length : ',len);
  let autoID = len;
  while(bool)
  {
    bool = false;
    lostItemsWithDes.forEach((lost)=>{
      if(lost.postID===autoID)
      {
        autoID++;
        bool = true;
      }
    });
  }


  const nObj = {
    descriptionDetails:nDes,
    location:nLocation,
    reg:key,
    productName: nName,
    postID:autoID
  };

  console.log('Yeh lost obj with des bna hai : ', nObj);
  lostItemsWithDes.push(nObj);
  saveLostItemsWithDesOnStorage();
}



function removerLostItemWithImgWithReg(reg)
{
  let tempArray = [];
  lostItemsWithImg.forEach((lost)=>{
    if(lost.reg!==reg)
    {
      tempArray.push(lost);
    }
  });
  lostItemsWithImg.length=0;
  lostItemsWithImg = tempArray;
  saveLostItemsWithImgOnStorage();
  console.log('YEH LOST IMG ARRAY I HAI : ', tempArray);

}


function removerLostItemWithDesWithReg(reg)
{
  let tempArray = [];
  lostItemsWithDes.forEach((lost)=>{
    if(lost.reg!==reg)
    {
      tempArray.push(lost);
    }
  });
  lostItemsWithDes.length=0;
  lostItemsWithDes = tempArray;
  saveLostItemsWithDesOnStorage();
  console.log('YEH lost DES ARRAY I HAI : ', tempArray);

}

export function removeAllLostPosts(reg)
{

  console.log('function to chla hai');

  lostItemsWithImg.forEach((lost)=>{
    if(lost.reg === reg)
    {
      removerLostItemWithImgWithReg(lost.reg);
    }
  });

  lostItemsWithDes.forEach((lost)=>{
    if(lost.reg === reg)
    {
      removerLostItemWithDesWithReg(lost.reg);
    }
  });
}
