import React, { useState } from "react";
import './Modal.css'
import { RiCloseLine } from "react-icons/ri";
import { setIsScheduleMessageModelOpen } from "../../features/model/ModeSlice";
import { useDispatch , useSelector} from "react-redux";
import Button from "../formItem/Button";
import { toast } from "react-toastify";
import { scheduleChatApi } from "../../features/message/MessageSlice";


export default function ScheduleMessageModel() {
    const { chatData } = useSelector (state => state.details);
    const { data } = useSelector (state => state.login);
    const dispatch = useDispatch();

    const [scheduleForm, setScheduleForm] = useState({
        scheduleMessage: "",
        scheduleDate: "",
        scheduleTime: ""
    });

    const onChangeInput = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setScheduleForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const onSubmitScheduleMessage = async (event) => {
        event.preventDefault();
        const scheduleFormData = {
            scheduleMessage: scheduleForm.scheduleMessage ,
            scheduleDate: scheduleForm.scheduleDate ,
            scheduleTime: scheduleForm.scheduleTime,
            chatId: chatData._id,
            members: chatData.members,
            sender:{
                _id:data.userId,
                name:data.name,
                photo:data.photo,
            }
        }
        console.log(scheduleFormData);
        const resp = await dispatch(scheduleChatApi(scheduleFormData))
        if (resp) {
            await dispatch(setIsScheduleMessageModelOpen(false));
            toast.success("you message schedule successfully.")
        }
    };

    const handleCloseModal = () => {
        dispatch(setIsScheduleMessageModelOpen(false));
    };

    return (
        <>
            <div className="mydarkBG" onClick={handleCloseModal} />
            <div className="mycentered">
                <div className="mymodal">
                    <div className="mymodalHeader">
                        <h1 className='text-center py-2 myheading'><span className='m-0 half-underline'>Schedule Message</span></h1>
                    </div>
                    <button className="mycloseBtn" onClick={handleCloseModal}>
                        <RiCloseLine style={{ marginBottom: "-3px" }} />
                    </button>
                    <div className="mymodalContent">
                        <form action="" onSubmit={onSubmitScheduleMessage}>
                            <div className="MessageSchedularcontainer">
                                <input
                                    type="text"
                                    className="scheduleMessage"
                                    name="scheduleMessage"
                                    value={scheduleForm.scheduleMessage}
                                    onChange={onChangeInput}
                                    required
                                    placeholder="Type Message"
                                />
                            </div>
                            <div className="MessageSchedularcontainer">
                                <input
                                    type="date"
                                    className="scheduleMessage"
                                    name="scheduleDate"
                                    value={scheduleForm.scheduleDate}
                                    onChange={onChangeInput}
                                    required
                                // placeholder="Select Date and Time" 
                                />
                                <div className="verticalLine"></div>
                                <input
                                    type="time"
                                    className="scheduleMessage"
                                    name="scheduleTime"
                                    value={scheduleForm.scheduleTime}
                                    onChange={onChangeInput}
                                    required
                                // placeholder="Select Date and Time" 
                                />
                            </div>
                            <div className="mymodalActions">
                                <div className="d-flex justify-content-center">
                                    <Button type="submit" value="Schedule Message" bgColor="#ba9ffb" color="#ffff" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
