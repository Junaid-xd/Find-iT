
export let foundedItems = JSON.parse(localStorage.getItem('foundedItemsImg'));

export let foundItemsWithDes = JSON.parse(localStorage.getItem('foundedItemsDes'));




if(!foundedItems)
{
  // foundedItems = [{
  //   picSrc:'../images/founded items/wallet.jpeg',
  //   location:'Near Cafe',
  //   reg:'1',
  //   productName: 'Wallet',
  //   postID:1
  // },{
  //   picSrc:'../images/founded items/Bag.jpg',
  //   location:'CS Department',
  //   reg:'2022-SE-41',
  //   productName: 'Ladies Bag',
  //   postID:2
  // },{
  //   picSrc:'../images/founded items/watch.jpg',
  //   location:'Main Library',
  //   reg:'2024-CE-01',
  //   productName: 'WATCH',
  //   postID:3
  // },{
  //   picSrc:'../images/founded items/keys.png',
  //   location:'GROUND',
  //   reg:'2024-AI-01',
  //   productName: 'KEYS',
  //   postID:4
  // }];
  useDefaultFoundData();
}


if(!foundItemsWithDes)
{
  // foundItemsWithDes=[{
  //   location:'Chemical Department',
  //   reg:'1',
  //   productName: 'NOTHING',
  //   descriptionDetails:'FOUNDED ITEMS WITH DESCRIPTION PAGE',
  //   postID:1
  // },{
  //   location:'HOSTEL A GROUND',
  //   reg:'2022-SE-41',
  //   productName: 'BAT',
  //   descriptionDetails:'MJY 1 BAT MELA HAI JO MEIN WAPIS NAI KRU GA Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsum cumque minus voluptatem? Aperiam assumenda placeat perspiciatis itaque sunt officia consequatur, odio eveniet cum similique qui earum voluptatibus. Nulla, delectus?',
  //   postID:2
  // }];
  useDefaultFoundData();
}

export function saveFoundedWithImgToStorage()
{
  localStorage.setItem('foundedItemsImg',JSON.stringify(foundedItems));
}

saveFoundedWithImgToStorage();


export function saveFoundedWithDesToStorage()
{
  localStorage.setItem('foundedItemsDes',JSON.stringify(foundItemsWithDes));
}

saveFoundedWithDesToStorage();


export function removeFoundedItemWithImg(ID)
{
  const id = parseInt(ID);
  const tempArray = [];
  foundedItems.forEach((found)=>{
    if(found.postID !== id)
    {
      tempArray.push(found);
    }
  });

  foundedItems.length = 0;
  foundedItems = tempArray;
  saveFoundedWithImgToStorage();
}

export function removeFoundedItemWithDes(ID)
{
  const id = parseInt(ID);
  const tempArray = [];
  foundItemsWithDes.forEach((found)=>{
    if(found.postID !== id)
    {
      tempArray.push(found);
    }
  });

  foundItemsWithDes.length = 0;
  foundItemsWithDes = tempArray;
  saveFoundedWithDesToStorage();
}

export function returnFoundItemWithImgObject(ID)
{
  const id = parseInt(ID);
  let obj;
  foundedItems.forEach((found)=>{
    if(found.postID == id)
    {
      obj=found;
    }
  });
  return obj;
}

export function returnFoundItemWithDesObject(ID)
{
  const id = parseInt(ID);
  let obj;
  foundItemsWithDes.forEach((found)=>{
    if(found.postID == id)
    {
      obj=found;
    }
  });
  return obj;
}

export function useDefaultFoundData()
{
  foundedItems = [{
    picSrc:'../images/founded items/wallet.jpeg',
    location:'Near Cafe',
    reg:'1',
    productName: 'Wallet',
    postID:1
  },{
    picSrc:'../images/founded items/Bag.jpg',
    location:'CS Department',
    reg:'2022-SE-41',
    productName: 'Ladies Bag',
    postID:2
  },{
    picSrc:'../images/founded items/watch.jpg',
    location:'Main Library',
    reg:'2024-CE-01',
    productName: 'WATCH',
    postID:3
  },{
    picSrc:'../images/founded items/keys.png',
    location:'Health Care',
    reg:'2024-AI-01',
    productName: 'KEYS',
    postID:4
  }];



  foundItemsWithDes=[{
    location:'Chemical Department',
    reg:'1',
    productName: 'NOTHING',
    descriptionDetails:'FOUNDED ITEMS WITH DESCRIPTION PAGE',
    postID:1
  },{
    location:'HOSTEL A GROUND',
    reg:'2022-SE-41',
    productName: 'BAT',
    descriptionDetails:'MJY 1 BAT MELA HAI JO MEIN WAPIS NAI KRU GA Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit ipsum cumque minus voluptatem? Aperiam assumenda placeat perspiciatis itaque sunt officia consequatur, odio eveniet cum similique qui earum voluptatibus. Nulla, delectus?',
    postID:2
  }];

  saveFoundedWithImgToStorage();
  saveFoundedWithDesToStorage();
}

export function addImgObjToFoundedArray(key, nSrc, nLocation, nName)
{
  let bool = true;
  let len = foundedItems.length;
  console.log('Length : ',len);
  let autoID = len;
  while(bool)
  {
    bool = false;
    foundedItems.forEach((found)=>{
      if(found.postID===autoID)
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

  console.log('Yeh obj bna hai : ', nObj);
  foundedItems.push(nObj);
  saveFoundedWithImgToStorage();


  foundedItems.forEach((found)=>{
    console.log(found);
  });
}

export function addDesObjToFoundedArray(key, nDes, nLocation, nName)
{
  let bool = true;
  let len = foundItemsWithDes.length;
  console.log('Length : ',len);
  let autoID = len;
  while(bool)
  {
    bool = false;
    foundItemsWithDes.forEach((found)=>{
      if(found.postID===autoID)
      {
        autoID++;
        bool = true;
      }
    });
  }

  const nObj = {
    location:nLocation,
    reg:key,
    productName: nName,
    descriptionDetails:nDes,
    postID:autoID
  };

  console.log('Yeh obj bna hai : ', nObj);
  foundItemsWithDes.push(nObj);
  saveFoundedWithDesToStorage();
}

function removerFoundItemWithImgWithReg(reg)
{
  let tempArray = [];
  foundedItems.forEach((found)=>{
    if(found.reg!==reg)
    {
      tempArray.push(found);
    }
  });
  foundedItems.length=0;
  foundedItems = tempArray;
  saveFoundedWithImgToStorage();
  console.log('YEH FOUNDED IMG ARRAY I HAI : ', tempArray);

}

function removerFoundItemWithDesWithReg(reg)
{
  let tempArray = [];
  foundItemsWithDes.forEach((found)=>{
    if(found.reg!==reg)
    {
      tempArray.push(found);
    }
  });
  foundItemsWithDes.length=0;
  foundItemsWithDes = tempArray;
  saveFoundedWithDesToStorage();
  console.log('YEH FOUNDED DES ARRAY I HAI : ', tempArray);
}


export function removeAllFoundedPosts(reg)
{
  foundedItems.forEach((found)=>{
    if(found.reg === reg)
    {
      removerFoundItemWithImgWithReg(found.reg) ;
    }
  });

  foundItemsWithDes.forEach((found)=>{
    if(found.reg === reg)
    {
      removerFoundItemWithDesWithReg(found.reg);
    }
  });
}