
export let users = JSON.parse(localStorage.getItem('usersData'));


if(!users)
{
  users=[{
    reg:'1',
    password:'1',
    name:'Hamza Amjad',
    block:0,
    profilePic:'../images/profile pics/Default.jpeg',
    contactNo:'03215720397'
  },{
    reg:'2022-SE-41',
    password:'2022se41',
    name:'Junaid Ali',
    block:0,
    profilePic:'../images/profile pics/Star Nation Dp.jpg',
    contactNo:'03213649137'
  },{
    reg:'2024-CE-01',
    password:'2024ce1',
    name:'Ameer Hamza',
    block:0,
    profilePic:'../images/profile pics/Default.jpeg',
    contactNo:'03233669137'
  },{
    reg:'2024-AI-01',
    password:'2024ai1',
    name:'Yaseen Ahmad Khan',
    block:0,
    profilePic:'../images/profile pics/Default.jpeg',
    contactNo:'03241443901'
  }];
  useDefaultUsersData();
}





export function logIn(tempId, tempPass)
{
  
  let user = '';
  users.forEach((users)=>{
    if(tempId===users.reg && tempPass===users.password)
    {
      localStorage.setItem('key',users.reg);
      user = users.reg;
    }
  });
  return user;
}

export function returnName(reg)
{
  let tempName;
  users.forEach((users)=>{
    if(users.reg === reg)
    {
      tempName = users.name;
    }
  });
  return tempName;
}

export function returnDepartment(reg)
{
  let tempDepart;
  users.forEach((users)=>{
    if(users.reg === reg)
    {
      tempDepart = users.department;
    }
  });
  return tempDepart;
}


export function returnContact(reg)
{
  let tempContact;
  users.forEach((users)=>{
    if(users.reg === reg)
    {
      tempContact = users.contactNo;
    }
  });
  return tempContact;
}

export function returnProfilePic(reg)
{
  let tempPic;
  users.forEach((users)=>{
    if(users.reg === reg)
    {
      tempPic = users.profilePic;
    }
  });
  return tempPic;
}

export function changeProfilePic(reg, newProfile)
{
  users.forEach((users)=>{
    if(users.reg === reg)
    {
      users.profilePic = newProfile;
    }
  });
  console.log('Ye source aya hai ',newProfile);
  saveUsersToStorage();
}

export function verifyBlockStatus(reg)
{
  let status;
  users.forEach((user)=>{
    if(user.reg === reg)
    {
      if(user.block === 0)
      {
        status = false;
      }
      else
      {
        status = true;
      }
    }
  });
  return status;
}

export function blockUser(reg)
{
  users.forEach((user)=>{
    if(user.reg===reg)
    {
      user.block = 1;
      console.log('Yeh banda block ho gya hai sorry : ', user.name);
    }
  });
  saveUsersToStorage();
}

export function unblockUser(reg)
{
  users.forEach((user)=>{
    if(user.reg===reg)
    {
      user.block = 0;
      console.log('Yeh banda Unblock ho gya hai : ', user.name);
    }
  });
  saveUsersToStorage();
}

export function saveUsersToStorage()
{
  localStorage.setItem('usersData',JSON.stringify(users));
}

export function returnBlockStatus(reg)
{
  console.log('Function toh chla hai bbbbb');
  let sta;
  users.forEach((user)=>{
    if(user.reg === reg)
    {
      console.log('Yeh status mila hai : ', user.block);
      if(user.block === 0)
      {
        sta=0;
      }
      if(user.block === 1)
      {
        sta = 1;
      }
    }
  });
  console.log('TYPE IS : ',typeof(parseInt(sta)));
  return sta;
}

saveUsersToStorage();


export function useDefaultUsersData()
{
  users=[{
    reg:'1',
    password:'1',
    name:'Hamza Amjad',
    block:0,
    // department:'Electrical Engineering Department',
    // major:'Electrical Engineering',
    profilePic:'../images/profile pics/Default.jpeg',
    contactNo:'03215720397'
  },{
    reg:'2022-SE-41',
    password:'2022se41',
    name:'Junaid Ali',
    block:0,
    // department:'Computer Science',
    // major:'Software Engineering',
    profilePic:'../images/profile pics/Star Nation Dp.jpg',
    contactNo:'03213649137'
  },{
    reg:'2024-CE-01',
    password:'2024ce1',
    name:'Ameer Hamza',
    block:0,
    // department:'Department of Chemical Engineering',
    // major:'Chemical Engineering',
    profilePic:'../images/profile pics/Default.jpeg',
    contactNo:'03233669137'
  },{
    reg:'2024-AI-01',
    password:'2024ai1',
    name:'Yaseen Ahmad',
    block:0,
    // department:'Department of Artificial Intelligence',
    // major:'Artificial Intelligence',
    profilePic:'../images/profile pics/yasinDP.jpg',
    contactNo:'03241443901'
  }];
  saveUsersToStorage();
}


export function verifyReg(tempReg)
{
  let find = false;
  users.forEach((user)=>{
    if(user.reg === tempReg)
    {
      find = true;
    }
  });
  if(find)
  {
    return true;
  }
  else
  {
    return false;
  }
}

export function addNewUser(nReg, nPass, nName, nSrc, nContact)
{
  const nUser = {
    reg:nReg,
    password:nPass,
    name:nName,
    block:0,
    profilePic:nSrc,
    contactNo:nContact
  };
  users.push(nUser);
  saveUsersToStorage();
  alert(`Registration Successfull with Reg No : ${nReg}`);
}

export function removeUser(tempReg)
{
  let tempArray = [];
  users.forEach((user)=>{
    if(user.reg!==tempReg)
    {
      tempArray.push(user);
    }
  });
  users.length = 0
  users=tempArray;
  saveUsersToStorage();
  console.log('Yeh array bni hai : ', tempArray);
}

