
import React, { useEffect, useState } from "react";
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import SearchBox from "../dashBoard/rightDashBoard/searchbox/SearchBox";
import SearchUsr from "./SearchUsr";
import { useDispatch, useSelector } from "react-redux";
import { searchUserApi } from "../../features/search/SearchSlice";
import { createOneToOneChatApi } from "../../features/one-to-one/OneToOneChatCreate";
import { chatParticipantsList } from "../../features/participants/participantsSlice";
import { toast } from "react-toastify";
import { setIsSearchModalOpen } from "../../features/model/ModeSlice";
import SmallScreenLoader from "../dashBoard/SmallScreenLoader";


export default function Modal() {
  const {isLoading, data}=useSelector(state=>state.searchUser)
  const mode=useSelector(state=>state.theme)
  const dispatch=useDispatch()
  const[name,setName]=useState("")
  const [filteredUsers, setFilteredUsers] = useState([]); // State to hold filtered users
const handleNameOnChange=(event)=>{
  event.preventDefault();
  console.log(event.target.value);
  setName(event.target.value)
}

useEffect(()=>{
  // search user using
  dispatch(searchUserApi())
  console.log("render using useeffect")
},[])

useEffect(() => {
  console.log(`searching ${name} -> from fetch data `);
  const regex = new RegExp(name, 'i');
  const filteredUsers = data!==null?data.filter(user => regex.test(user.name)):[];
  setFilteredUsers(filteredUsers); // Update filtered users
}, [name,data]);

// call add to create one-to-one chat
const handleCreateOneToOneChat = async(data) => {
  console.log("add user",data);
    // dispatch that data
    const res=await dispatch(createOneToOneChatApi(data));
    if(res.payload.success){
        toast.success(res.payload.message);
        await dispatch(setIsSearchModalOpen())
        const resp=await dispatch(chatParticipantsList());
        if(resp.payload.success){
          // navigate('/dashboard')
          // toast.success("ready to navigate");
        }
        else{
            toast.error("somthing went wrong");
        }
    }
    else{
        toast.error(res.payload.message);
    }
// pending
}

    console.log("model is render")
  return (
    <>
      <div className="mydarkBG" onClick={() => dispatch(setIsSearchModalOpen())} />
      <div className="mycentered">
        <div className="mymodal">
          <div className=" mymodalHeader">
            <h5 className=" myheading">Search New User</h5>
          </div>
          <button className=" mycloseBtn" onClick={() => dispatch(setIsSearchModalOpen())}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className=" mymodalContent">
            <SearchBox name={name} handleNameOnChange={handleNameOnChange}/>
            {/* done */}
            
            <div className="searchedUser">
            {isLoading ? <SmallScreenLoader/> : filteredUsers.length === 0 ? <div id='rightDashBoardDefault' style={{marginTop:"10px", fontSize:'20px'}} className={mode.dark ? " dark-rightDashBoardDefault" : ""}>All User Is Your Friend</div>: filteredUsers.map((user) =>
                  <div key={user._id}> <SearchUsr _id={user._id} name={user.name} photo={user.photo} type={"createOneToOneChat"} handleAddButton={handleCreateOneToOneChat}/></div>
            )
            }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
