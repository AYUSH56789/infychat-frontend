import React, { useState } from 'react'
import './Feedback.css'
import Input from '../../../formItem/Input'
import Button from '../../../formItem/Button'
import TextArea from '../../../formItem/TextArea'
import { useDispatch, useSelector } from 'react-redux'
import { feedback } from '../../../../features/feedback/FeedbackSlice'
import { toast } from 'react-toastify'
export default function FeedBack() {
  const dispatch = useDispatch()
  const {isLoading}=useSelector(state=>state.feedback);
  const [feedbackData, setFeedbackData] = useState({
    feedbackusername: "",
    feedbackuseremail: "",
    feedbackusernumber: "",
    feedbackusermessage: "",
  });
  const handleOnChangeFeednackData = (event) => {
    const name = event.target.name
    const value = event.target.value
    setFeedbackData((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleFormDataSubmit = async(event) => {
    event.preventDefault();
    console.log(feedbackData);
    setFeedbackData({
      feedbackusername: "",
      feedbackuseremail: "",
      feedbackusernumber: "",
      feedbackusermessage: "",
    });
    // Dispatch your feedback action here
    const res= await dispatch(feedback(feedbackData))
    console.log(res)
    if(res.payload.success===true){
      toast.success(res.payload.message)
    }
    else{
      toast.error(res.payload.message)
    }
};

  return (
    // <div className=''>
    <div id='feedbackFormContainer' >
      <h1 className='text-center py-2'><span className='m-0 FeatureHeader FeaturehalfUnderline'>Help Us To Improve Infychat</span></h1>
      <form onSubmit={handleFormDataSubmit} className='p-2'>
        <Input type={"text"} name={"feedbackusername"} id={"feedbackusername"} value={feedbackData.feedbackusername} placeholder={"Enter Name"} onChange={handleOnChangeFeednackData} />
        <Input type={"email"} name={"feedbackuseremail"} id={"feedbackuseremail"} value={feedbackData.feedbackuseremail} placeholder={"Enter Email"} onChange={handleOnChangeFeednackData} />
        <Input type={"number"} name={"feedbackusernumber"} id={"feedbackusernumber"} value={feedbackData.feedbackusernumber} placeholder={"Enter Mobile Number"} onChange={handleOnChangeFeednackData} />
        <TextArea id={"feedbackusermessage"} name={"feedbackusermessage"} rows={5} width={'100%'} placeholder={"Give Your Valuable Feedback"} value={feedbackData.feedbackusermessage} onChange={handleOnChangeFeednackData} />
        <div className="py-2 text-center">
          <span style={{ marginRight: "30px" }} >
            <Button type="submit" value={isLoading?"Loading...":"Submit"} bgColor='#ba9ffb' color='#ffff' /></span>
          <Button type="reset" value="Cancel" bgColor="#ffff" color="#ba9ffb" />
        </div>
      </form>
    </div>
    // </div>
  )
}
