"use client"
;import React from 'react'


import Style from "../../styles/subscription.module.css"
import Subscription from '@/subscription/Subscription'
const SubscriptionPage = () => {

  const subscriptionData = [
    {
      plan:"STARTER",
      price:"$5/mo",
      popular:"",
      service:["Automated Reporting", "Faster Processing", "Customizations"],
      info:"Literally you probably haven't heard of them jean shorts."
    },
    {
      plan:"STARTER",
      price:"$5/mo",
      popular:"",
      service:["Automated Reporting", "Faster Processing", "Customizations"],
      info:"Literally you probably haven't heard of them jean shorts."
    },
    {
      plan:"STARTER",
      price:"$5/mo",
      popular:"",
      service:["Automated Reporting", "Faster Processing", "Customizations"],
      info:"Literally you probably haven't heard of them jean shorts."
    },
    {
      plan:"STARTER",
      price:"$5/mo",
      popular:"",
      service:["Automated Reporting", "Faster Processing", "Customizations"],
      info:"Literally you probably haven't heard of them jean shorts."
    },
    {
      plan:"STARTER",
      price:"$5/mo",
      popular:"",
      service:["Automated Reporting", "Faster Processing", "Customizations"],
      info:"Literally you probably haven't heard of them jean shorts."
    },
  ]
  return (
    <div className={Style.subscription}>
      <div className={Style.subscription_box}>
        <div className={Style.subscription_box_info}>
          <h1>Subscription</h1>
          <p>Pricing to fit the needs of any company size.</p>
        </div>
        <div className={Style.subscription_box_box}>
          {
            subscriptionData.map((el, i) => (
              <Subscription key={i +1} i={1} el={el}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default SubscriptionPage