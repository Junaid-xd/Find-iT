export let recoveredItemsWithImages = JSON.parse(localStorage.getItem('recoverWithImg'));
export let recoveredItemsWithDescription = JSON.parse(localStorage.getItem('recoverWithDes'));





if(!recoveredItemsWithImages)
{
  useRecoverDefaultData();
}

if(!recoveredItemsWithDescription)
{
  useRecoverDefaultData();
}


function saveRecoverItemsWithImg()
{
  localStorage.setItem('recoverWithImg', JSON.stringify(recoveredItemsWithImages));
}

saveRecoverItemsWithImg();


function saveRecoverItemsWithDes()
{
  localStorage.setItem('recoverWithDes', JSON.stringify(recoveredItemsWithDescription));
}

saveRecoverItemsWithDes();


export function addImgObjToRecoverArray(obj)
{
  let bool = true;
  let len = recoveredItemsWithImages.length;
  let autoID = len;

  while(bool)
  {
    bool = false;
    recoveredItemsWithImages.forEach((recover)=>{
      if(recover.postID===autoID)
      {
        autoID++;
        bool = true;
      }
    });
  }


  const newObj = {
    picSrc : obj.picSrc,
    location : obj.location,
    reg : obj.reg,
    productName : obj.productName,
    postID : Number(autoID)
  };
  

  recoveredItemsWithImages.push(newObj);
  
  saveRecoverItemsWithImg();
  
}


export function addDesObjToRecoverArray(obj)
{
  let bool = true;
  let len = recoveredItemsWithDescription.length;
  let autoID = len;

  while(bool)
  {
    bool = false;
    recoveredItemsWithDescription.forEach((recover)=>{
      if(recover.postID === autoID)
      {
        autoID++;
        bool = true;
      }
    });
  }
  
  

  const newObj = {
    location: obj.location,
    reg:obj.reg,
    productName: obj.productName,
    descriptionDetails:obj.descriptionDetails,
    postID:Number(autoID)
  };
  

  recoveredItemsWithDescription.push(newObj);
  
  saveRecoverItemsWithDes();
  
}


export function useRecoverDefaultData()
{
  recoveredItemsWithImages = [{
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
    reg:'2024-AI-01',
    productName: 'WATCH',
    postID:3
  }];

  recoveredItemsWithDescription = [{
    location:'Chemical Department',
    reg:'1',
    productName: 'NOTHING',
    descriptionDetails:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quae fuga ab similique laudantium, ex unde nostrum aspernatur beatae quibusdam, officiis eos rerum! Omnis earum aperiam molestiae perferendis officia sed pariatur quas magni, impedit porro sunt adipisci ab, quam neque.',
    postID:1
  },{
    location:'HOSTEL B',
    reg:'2024-CE-01',
    productName: 'MOBILE',
    descriptionDetails:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui quae fuga ab similique laudantium, ex unde nostrum aspernatur beatae quibusdam, officiis eos rerum! Omnis earum aperiam molestiae perferendis officia sed pariatur quas magni, impedit porro sunt adipisci ab, quam neque.',
    postID:2
  }];

  saveRecoverItemsWithImg();
  saveRecoverItemsWithDes();
}


function removeImgObjFromRecoverArray(nReg)
{
  let tempArr = [];
  recoveredItemsWithImages.forEach((recover)=>{
    if(recover.reg !== nReg)
    {
      tempArr.push(recover);
    }
  });
  recoveredItemsWithImages.length = 0;
  recoveredItemsWithImages = tempArr;
  saveRecoverItemsWithImg();
}

function removeDesObjFromRecoverArray(nReg)
{
  let tempArr = [];
  recoveredItemsWithDescription.forEach((recover)=>{
    if(recover.reg !== nReg)
    {
      tempArr.push(recover);
    }
  });
  recoveredItemsWithDescription.length = 0;
  recoveredItemsWithDescription = tempArr;
  saveRecoverItemsWithDes();
}

export function removeAllRecoverdPosts(nReg)
{
  removeDesObjFromRecoverArray(nReg);
  removeImgObjFromRecoverArray(nReg);
}