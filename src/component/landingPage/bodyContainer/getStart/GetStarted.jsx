import React from 'react'
import Button from '../../../formItem/Button'
import './GetStarted.css'
export default function GetStarted() {
  return (
    <div style={{background:"#ba9ffb29", padding:"5% 5%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",textAlign:"justify"}}>
      <h1 className='text-center p-2'><span className='m-0 FeatureHeader FeaturehalfUnderline'>Ready to get started?</span></h1>
      <p className='getReadyDisc' >Experience the power of InfyChat. Sign up now and take the first step towards seamless communication.</p>
      <div className="loginsignupbtn">
                    <span style={{ marginRight: "30px" }} >
                        <Button type="button" value="Sign  Up" bgColor='#ba9ffb' color='#ffff' /></span>
                    <Button type="button" value="Tour The App" bgColor="#ffff" color="#ba9ffb" />
                </div>
    </div>
  )
}
