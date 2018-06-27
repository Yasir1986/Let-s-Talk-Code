import React from 'react';

const Skills = props => {
    return (
        <div className = "Skills">
            <div className="skills-location">
            <h3><span>2.Skills and Location</span></h3>
            <hr />
            <p>Which is your primary design discipline?*</p>

            <div className="radio-btn-container">
              <input type="radio" id = "btn-1" name="radioBtn" defaultChecked={props.radioBtn === 'btn-1'}  onChange={props.handleSelect} value="Design Research"
               /> <label htmlFor="btn-1">Design Research</label>
              <input type="radio" id = "btn-2" name="radioBtn"  defaultChecked={props.radioBtn === 'btn-2'}  onChange={props.handleSelect} value="Visual Design"/>
                <label htmlFor ="btn-2">Visual Design</label>
              <input type="radio" id="btn-3" name="radioBtn" defaultChecked={props.radioBtn === 'btn-3'}  onChange={props.handleSelect} value="UX Design"/>
              <label htmlFor="btn-3" >UX Design</label>
              <input type="radio" id="btn-4" name="radioBtn" defaultChecked={props.radioBtn === 'btn-4'}  onChange={props.handleSelect} value="Front-end Dev"/>
              <label htmlFor="btn-4">Front-end Dev</label>
            </div>

            <div className="column-container">
              <div className="left-column">
                <p>Do you have experience with any other disciplines?</p>
                <div className="checkbox-container">
                  <input type="checkbox" id ="v-design" name="experience1" defaultChecked={props.checkBox1.experience1 === "v-design"}  onChange={props.handleCheck1}
                  value="Visual Design"/>
                  <label htmlFor="v-design">Visual design</label><br/>
                  <input type="checkbox" id="ux-design" name="experience2" defaultChecked={props.checkBox1.experience2 === "ux-design"}  onChange={props.handleCheck1}
                  value="UX Design"/>
                  <label htmlFor="ux-design">UX Design</label><br/>
                  <input type="checkbox" id="front-end" name="experience3" defaultChecked={props.checkBox1.experience3 === "front-end"}  onChange={props.handleCheck1}
                  value="Front-end Development"/>
                  <label htmlFor="front-end">Front-end Development</label><br/>
                </div>
                </div>
              </div>

              <div className="right-column">
                <p>Where are you interested in working?*</p>
                <p>You must be legally authorized to work without visa sponsorship
                   in the location(s) you choose.</p>
                <div className="checkbox-container">
                  <input type="checkbox" id="austin-texas" name="interested" defaultChecked={props.checkBox2.interested === "austin-texas"} onChange={props.handleCheck2}
                  value="Austin,Texas"/>
                  <label htmlFor="austin-texas">Austin Texas</label><br/> 
                  <input type="checkbox" id="new-york" name="interested1"  defaultChecked={props.checkBox2.interested === "new-york"} onChange={props.handleCheck2}
                  value="New York, New York"/>
                  <label htmlFor="new-york">New York, New York</label><br/>
                  <input type="checkbox" id="canada" name="interested2"  defaultChecked={props.checkBox2.interested === "canada"} onChange={props.handleCheck2}
                  value="Toronto, Canada"/>
                  <label htmlFor="canada">Toronto, Canada</label><br/>
                  <input type="checkbox" id="china" name="interested3"  defaultChecked={props.checkBox2.interested === "china"} onChange={props.handleCheck2}
                  value="Shanghai, China"/>
                  <label htmlFor="china">Shanghai, China</label><br/>
                  <input type="checkbox" id="ireland" name="interested4"  defaultChecked={props.checkBox2.interested === "ireland"} onChange={props.handleCheck2}
                  value="Dublin, Ireland"/>
                  <label htmlFor="ireland">Dublin, Ireland</label><br/>
                  <input type="checkbox" id="uk" name="interested5"  defaultChecked={props.checkBox2.interested === "uk"} onChange={props.handleCheck2}
                  value="Hursley, United Kingdom"/>
                  <label htmlFor="uk">Hursley, United Kingdom</label><br/>
                  <input type="checkbox" id="germany" name="interested6"  defaultChecked={props.checkBox2.interested === "germany"} onChange={props.handleCheck2}
                  value="Boeblingen, Germany"/>
                  <label htmlFor="germany">Boeblingen, Germany</label><br/>
                  <input type="checkbox" id="other-places" name="interested7"  defaultChecked={props.checkBox2.interested === "other-places"} onChange={props.handleCheck2}
                  value="Somewhere else"/>
                  <label htmlFor="other-places">Somewhere else</label><br/>
                </div>
              </div>
            </div>
            </div>
          
        

    );
}


export default Skills;
