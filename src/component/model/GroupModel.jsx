import React, { useEffect, useState } from "react";
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import SearchBox from "../dashBoard/rightDashBoard/searchbox/SearchBox";
import Input from "../formItem/Input";
import Button from "../formItem/Button";
import SearchUsr from "./SearchUsr";
import { searchAllUser } from "../../features/search/SearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { createGroupApi } from "../../features/group/CreateGroupSlice";
import { chatParticipantsList } from "../../features/participants/participantsSlice";
import { setIsGroupModalOpen } from "../../features/model/ModeSlice";
import SmallScreenLoader from "../dashBoard/SmallScreenLoader";

export default function GroupModel() {
  const { isLoading, data } = useSelector(state => state.searchUser);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]); // State to hold filtered users
  const [groupChatName, setGroupChatName] = useState("")
  const [chatParticipants, setChatParticipants] = useState([])

  const handleNameOnChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  }

  useEffect(() => {
    console.log("calling -> searchAllUser ")
    dispatch(searchAllUser());
  }, []);

  useEffect(() => {
    console.log(`searching ${name} -> from fetch data `);
    const regex = new RegExp(name, 'i');
    const filteredUsers = data!==null?data.filter(user => regex.test(user.name)):[];
    setFilteredUsers(filteredUsers); // Update filtered users
  }, [name,data]);


  const handleGroupChatNameOnChange=(event)=>{
    event.preventDefault();
    console.log(event.target.value)
    setGroupChatName(event.target.value)

  }

  // add participant
  const handleAddParticipant=(data)=>{
    // data is already present in it or not
    const allId=chatParticipants.map(participant=> participant._id)
    console.log("B",allId.includes(data._id));
    if(!allId.includes(data._id)){
    setChatParticipants((prevData)=>{return [...prevData,data]})
    console.log('data in handleAddParticipant :',chatParticipants)
  }else{
    toast.warning(`This user has already been added `)
    console.log('data in handleAddParticipant :',chatParticipants)
  } 
}

// remove participant
const handleRemoveParticipant=(_id)=>{
    setChatParticipants((prevData)=>{
      const updateData=prevData.filter((item)=>item._id!==_id)
      return [...updateData]
    })
  }

const handleSubmitCreateGroup=async(event)=>{
  event.preventDefault();
  dispatch(setIsGroupModalOpen())
  let participantsId=chatParticipants.map((item)=>item._id);
  const formatedData={
    groupChatName,
    chatParticipants:participantsId
  }
  console.log(formatedData);
  // dispatch that data
  const res=await dispatch(createGroupApi(formatedData));
        if(res.payload.success){
            toast.success(res.payload.message);
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
  // close model
  
  // state cleanup
  setGroupChatName("")
  setChatParticipants([])
  
}
  return (
    <>
      <div className="mydarkBG" onClick={() => dispatch(setIsGroupModalOpen())} />
      <div className="mycentered">
        <div className="mymodal">
          <div className="mymodalHeader">
          <h1 className='text-center py-2 myheading'><span className='m-0 half-underline'>Create Group</span></h1>
          </div>
          <button className="mycloseBtn" onClick={() => dispatch(setIsGroupModalOpen())}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="mymodalContent">
            <form action="">
              <div className="GroupNamecontainer">
                <input
                  type="text"
                  className="GroupName"
                  name="groupChatName"
                  value={groupChatName}
                  onChange={handleGroupChatNameOnChange}
                  required
                  placeholder="Enter Group Name"
                />
              </div>
              <SearchBox name={name} handleNameOnChange={handleNameOnChange} />
              <div className="searchedUser">
                {isLoading ? <SmallScreenLoader/> : filteredUsers.length === 0 ? "no user" : filteredUsers.map((user) =>
                  <div key={user._id}> <SearchUsr _id={user._id} name={user.name} photo={user.photo} type={"createGroup"} handleAddButton={handleAddParticipant}/></div>
                )}
              </div>
              <div className='arrayOfSelectedUser '>
                {chatParticipants.map((user) => (
                  // <SelectedUser id={id} key={id} removeFromArray={removeFromArray} />
                  <div key={user._id} className="selectedUser "><span className="userName"> {user.name} </span><span onClick={()=>handleRemoveParticipant(user._id)} className='cutUser'><RiCloseLine /></span></div>
                ))}
              </div>
              <div className="mymodalActions">
                <div className="d-flex justify-content-center " onClick={handleSubmitCreateGroup}>
                  <Button type="submit" value="Create Group" bgColor="#ba9ffb" color="#ffff" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
