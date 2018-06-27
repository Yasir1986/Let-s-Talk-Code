import React from 'react';

const PersonalInfo= props => {
    return (
        <div className = "Info">
            <form name="myForm" className="main-form" action="#"  method="post">
          <section className="personal-info">
            <h3>1.Personal Information</h3>
            <hr/>
            <div className="name-container">
              <div className="name-email">
                <input type="text" id="fullname" name="Fullname" placeholder="Full Name*"
                className={props.fullNameClass}
                value = {props.fullName}
                onChange = {props.handleChange}
                />
                <input type="email" id="email" name="Email" placeholder="Email*"
                className={props.emailClass}
                value = {props.email}
                onChange = {props.handleChange}
                />
                <input type="email" id="email2" name="Email" placeholder="Re-enter email*"
                 className={props.email2Class}
                 value = {props.email2}
                 onChange = {props.handleChange}
                />
              </div>
              <input type="text" id="phone" name="Phone number" placeholder="Phone#*"
              className={props.phoneClass}
              value = {props.phone}
              onChange = {props.handleChange}
              />
            </div>
            <div className="address-container">
              <input type="text" id="address" name="address" placeholder="Address*"
               className={props.addressClass}
               value = {props.address}
               onChange = {props.handleChange}
              />
              <div className="">
                <input type="text" id="city" name="city" placeholder="City*"
                className={props.cityClass}
                value = {props.city}
                onChange = {props.handleChange}
                />
                <input type="text" id="state1" name="state1" placeholder="State"
                 className={props.state1Class}
                 value = {props.state1}
                 onChange = {props.handleChange}
                />
                <input type="text" id="country" name="Country/Region" placeholder="Country/Region*"
                className={props.countryClass}
                value = {props.country}
                onChange = {props.handleChange}
                />
                <input type="text" id="postal" name="zip/postal code" placeholder="Zip/Postal code"
                 className={props.postalClass}
                 value = {props.postal}
                 onChange = {props.handleChange}
                />
              </div>
              <input type="text" id="storyLine" name="storyLine" placeholder="How did you hear about us"
              className={props.storyLineClass}
              value = {props.storyLine}
              onChange = {props.handleChange}
              />
            </div>
          </section>
          </form>
        </div>
        
        
    );
}


export default PersonalInfo;
