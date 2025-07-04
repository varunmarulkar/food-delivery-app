import { useState } from "react";


function onlineCheckStatus(){
const [onlineStatus,setOnlineStatus]=useState(true)

window.addEventListener("online", () => {
    setOnlineStatus(false)
  });
  
 
  window.ononline = () => {
    setOnlineStatus(true)
  };

  return onlineStatus
  
}

export default onlineCheckStatus