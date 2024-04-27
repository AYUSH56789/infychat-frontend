import React, { useEffect } from "react";
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import { setIsProfileModalOpen } from "../../features/model/ModeSlice";
import Button from "../formItem/Button";
import Language from "../icon/Language";
import Key from "../icon/Key";
import Hide from "../icon/Hide";
import { getUserDetailsApi } from "../../features/details/DetailSlice";
import SmallScreenLoader from "../dashBoard/SmallScreenLoader";

export default function ProfileModel() {
    const { isLoading, udata } = useSelector(state => state.details);
    const dispatch = useDispatch();

    useEffect( () => {
         dispatch(getUserDetailsApi());
    }, []);

    console.log('udata', udata);
    return (
        <>
                <div>
                    <div className="mydarkBG" onClick={() => dispatch(setIsProfileModalOpen())} />
                    <div className="mycentered">
                        <div className="mymodal">
                            <div className="mymodalHeader">
                                <h1 className='text-center py-2 myheading'><span className='m-0 half-underline'>Profile</span></h1>
                            </div>
                            <button className="mycloseBtn" onClick={() => dispatch(setIsProfileModalOpen())}>
                                <RiCloseLine style={{ marginBottom: "-3px" }} />
                            </button>
                            <div className="mymodalContent">
                            {isLoading && !udata? (
                <SmallScreenLoader/> // Render loading message while udata is loading
            ) : ( <>
                {udata && // Add null check for udata 
                <>
                                <div style={{ display:'flex',justifyContent:'center',borderRadius:'50px'}}>
                                    <div style={{ padding:'5px',border:'2px dashed #ff00f8',borderRadius:'50px'}}>
                                        <img src={udata.photo} width={'80px'} height={'80px'} alt="" style={{borderRadius:'50px'}} />
                                    </div>
                                </div>
                                <h4 style={{ display:'flex',color:"black",justifyContent:'center', margin:"10px 0px 0px 0px" }}>{udata.name}</h4>
                                <p style={{ display:'flex',color: "#BA9FFB",justifyContent:'center', margin:"0px 0px 10px 0px" }}>{udata.email}</p>
                                <hr id='hrSearchStyle' />
                                <div style={{ textAlignLast: 'start' }} >
                                    <div style={{display:'flex'}}>
                                        <span style={{ margin:'6px 10px'}}>Language</span>
                                        <span style={{marginLeft:"auto",marginTop:'6px ',marginRight: '5px', opacity: '0.7'}}><div style={{display:"flex"}}>{udata.language} <Language size={20} color={"#ba9ffb"}/></div></span>
                                    </div>
                                    <hr id='hrSearchStyle' />
                                    <div style={{display:'flex'}}>
                                        <span style={{ margin:'6px 10px'}}>Check Scheduled Message</span>
                                        <span style={{marginLeft:"auto",marginTop:'6px ',marginRight: '10px', opacity: '0.7'}}>{udata.scheduledMesage ? udata.scheduledMesage.messageCount : 'N/A'}</span>
                                    </div>
                                    <hr id='hrSearchStyle' />
                                    <div style={{display:'flex'}}>
                                        <span style={{ margin:'6px 10px'}}>Encryption key</span>
                                        <span style={{marginLeft:"auto",marginTop:'6px ',marginRight: '5px', opacity: '0.7'}}><Key size={20} color={"#ba9ffb"}/></span>
                                    </div>
                                    <hr id='hrSearchStyle' />
                                    <div style={{display:'flex'}}>
                                        <span style={{ margin:'6px 10px'}}>See Hide Users</span>
                                        <span style={{marginLeft:"auto",marginTop:'6px ',marginRight: '5px', opacity: '0.7'}}><Hide size={20} color={"#ba9ffb"}/></span>
                                    </div>
                                    <hr id='hrSearchStyle' />
                                </div>
                                <div className="mymodalActions py-2">
                                    <div className="d-flex justify-content-center "  style={{paddingRight:"5px"}} >
                                        <Button type="submit" value="Export Chat" bgColor="#ba9ffb" color="#ffff" />
                                    </div>
                                    <div className="d-flex justify-content-center " style={{paddingLeft:"5px"}} >
                                        <Button type="submit" value="Delete Account" bgColor="#ba9ffb" color="#ffff" />
                                    </div>
                                </div></>} </>)}
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
};
