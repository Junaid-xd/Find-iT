let admin = JSON.parse(localStorage.getItem('admin'));


if(!admin)
{
  admin = [{
    name:'Junaid Ali',
    id:'admin1',
    password:'admin1'
  }];
}




export function adminLogin(tempID, tempPass)
{
  let found = false;
  admin.forEach((admin)=>{
    if(tempID === admin.id && tempPass=== admin.password)
    {
      found = true;
    }
  });

  if(found)
  {
    return true;
  }
  else
  {
    return false;
  }
}

export function returnAdminName(tempID)
{
  let name;
  admin.forEach((admin)=>{
    if(admin.id===tempID)
    {
      name = admin.name;
    }
  });
  return name;
}

export function addAdmin(nName, nID, nPass)
{
  let tempAdmin = {
    name:nName,
    id:nID,
    password:nPass
  };
  admin.push(tempAdmin);
  saveAdminToStorage();
  console.log(admin);
}

function saveAdminToStorage()
{
  localStorage.setItem('admin', JSON.stringify(admin));
}