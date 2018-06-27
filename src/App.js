import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import PersonalInfo from './Component/PersonalInfo';
import Skills from './Component/Skills';
import Footer from './Component/Footer';
import Portfolio from './Component/Portfolio';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom';

class App extends Component {
    constructor (props) {
      super (props)

   this.state = {
     fullName: '', fullNameClass: '',
     phone: '', phoneClass: '',
     email: '', emailClass: '',
     email2: '', email2Class: '',
     address: '', addressClass: '',
     city: '', cityClass: '',
     state1: '', state1Class: '',
     country: '', countryClass: '',
     postal: '', postalClass: '',
     storyLine: '', storyLineClass: '',
     link: '', linkClass: '',
     radioBtn: 'btn-1',
     checkBox1: {experience1:'v-design' ,experience2:'', experience3:''},
     checkBox2: {interested:'austin-texas' , interested1:'', interested2:'', interested3:'', interested4:'', interested5:'', interested6:'', interested7:''}
   };
  }

  handleSubmit = e =>{
    {
      e.preventDefault();
      const { 
              fullName,phone,email,email2,address,city,state1,country, 
              postal,storyLine,link,checkBox1, checkBox2
            } = this.state;
      let errorMessage = [];
      
      if (!fullName || fullName === '' || fullName===' ' || !/^[a-zA-Z][ a-z|A-Z]{1,49}$/.test(fullName)){
        errorMessage.push("Name: Ckeck the name input!");                
      }
  
      if (!phone || phone==='' || phone===' ' || !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(phone)){
        errorMessage.push("Phone: Enter Finnish format number!");       
      }
  
      if (!email || email==='' || email===' ' || !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email)){
        errorMessage.push("Email: Check your email!");       
      }
  
      if (!email2 || email2==='' || email2===' ' || !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(email2) || email!==email2){
        errorMessage.push("Re-enter Email: Please enter same email address!");        
      }
  
      if (!address || address==='' || address===' ' || !/[a-zA-Z\-'\s]+/.test(address)){
        errorMessage.push("Address: Can't be empty!");       
      }
  
      if (!city || this.state.city==='' || city===' ' || !/^[a-zA-Z]+$/.test(city)){
        errorMessage.push("City: Please enter proper name of the city!");       
      }
  
      if (!state1 || state1==='' || state1===' ' || !/^[a-zA-Z]+$/.test(state1)){
        errorMessage.push("State: Can't be empty!");       
      }
      if (!country ||country==='' || country===' ' || !/^[a-zA-Z]+$/.test(country)){
        errorMessage.push("CountryRegion: Can't be empty!");       
      }
      if (!postal || postal==='' || postal===' ' || !/^[0-9]+$/.test(postal)){
        errorMessage.push("ZipPostalCode: Can't be empty!");       
      }
      if (!storyLine || storyLine==='' || storyLine===' ' || !/[a-zA-Z\-'\s]+/.test(storyLine)){
        errorMessage.push("Hear About Us: Please Tell where you heard about us?");         
      }
      if(!checkBox1.experience1 && !checkBox1.experience2 && !checkBox1.experience3 ) {
        errorMessage.push("Please check at least one checkbox!");
      }
      if(!checkBox2.interested && !checkBox2.interested1 && !checkBox2.interested2 && !checkBox2.interested3 && !checkBox2.interested4 && !checkBox2.interested5 && !checkBox2.interested6 && !checkBox2.interested7) {
          errorMessage.push("Please check at least one checkbox from where are you interested to work?");
      }
      if (!link || link==='' || link===' ' || !/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(link)){
        errorMessage.push("PortfolioLink: Can't be empty!");  
      }   
      
      if(errorMessage.length){
        alert(errorMessage.join("\n"))
      } 
      else{alert('Thanks for your information. Form submitted!')};
    }
  }




   handleCheck1(e){
    const myObj=this.state.checkBox1;
    switch(e.target.id){
      case 'v-design':myObj.experience1= this.state.checkBox1.experience1 === 'v-design'? '':'v-design'; break;
      case 'ux-design':myObj.experience2= this.state.checkBox1.experience2 === 'ux-design'? '':'ux-design'; break;
      case 'front-end':myObj.experience3= this.state.checkBox1.experience3 === 'front-end'? '':'front-end'; break;
    }
    this.setState({checkBox1:myObj});
   }

   handleCheck2(e){
    const myObj=this.state.checkBox2;
    switch(e.target.id){
      case 'austin-texas':myObj.interested= this.state.checkBox2.interested === 'austin-texas'? '':'austin-texas'; break;
      case 'new-york':myObj.interested1= this.state.checkBox2.interested1 === 'new-york'? '':'new-york'; break;
      case 'canada':myObj.interested2= this.state.checkBox2.interested2 === 'canada'? '':'canada'; break;
      case 'china':myObj.interested3= this.state.checkBox2.interested3 === 'china'? '':'china'; break;
      case 'ireland':myObj.interested4= this.state.checkBox2.interested4 === 'ireland'? '':'ireland'; break;
      case 'uk':myObj.interested5= this.state.checkBox2.interested5 === 'uk'? '':'uk'; break;
      case 'germany':myObj.interested6= this.state.checkBox2.interested6 === 'germany'? '':'germany'; break;
      case 'other-places':myObj.interested7= this.state.checkBox2.interested7 === 'other-places'? '':'other-places'; break;
    }
    this.setState({checkBox2:myObj});
   }

    handleSelect (e){
      this.setState({radioBtn: e.target.id})
    }

    handleChange = e => {
      switch  (e.target.id){
        case 'fullname':this.setState({fullName: e.target.value, fullNameClass: /^[a-zA-Z][ a-z|A-Z]{1,49}$/.test(e.target.value) ? '' : 'invalid'});
        break;
   
        case 'phone':this.setState({phone: e.target.value, phoneClass: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value) ? '' : 'invalid'});
        break;

        case 'email':this.setState({email: e.target.value, emailClass: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.target.value) ? '' : 'invalid'});
        break;

        case 'email2':this.setState({email2: e.target.value, email2Class: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e.target.value) ? '' : 'invalid'});
        break;

        case 'address':this.setState({address: e.target.value, addressClass: /[a-zA-Z\-'\s]+/.test(e.target.value) ? '' : 'invalid'});
        break;


        case 'city':this.setState({city: e.target.value, cityClass: /^[a-zA-Z]+$/.test(e.target.value) ? '' : 'invalid'});
        break;

        case 'state1':this.setState({state1: e.target.value, state1Class: /^[a-zA-Z]+$/.test(e.target.value) ? '' : 'invalid'});
        break;

        case 'country':this.setState({country: e.target.value, countryClass: /^[a-zA-Z]+$/.test(e.target.value) ? '' : 'invalid'});
        break;
        
        
        case 'postal':this.setState({postal: e.target.value, postalClass: /^[0-9]+$/.test(e.target.value) ? '' : 'invalid'});
        break;


        case 'storyLine':this.setState({storyLine: e.target.value, storyLineClass: /[a-zA-Z\-'\s]+/.test(e.target.value) ? '' : 'invalid'});
        break;

        case 'link':this.setState({link: e.target.value, linkClass: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(e.target.value) ? '' : 'invalid'});
        break;

    }
    }




  render() {
    

    return (
      <div className="MainContainer">
          
          <Header />

          <Router>
            <div>
                <ul>
                  <li><NavLink exact to="/">Personal Information</NavLink></li>
                  <li><NavLink exact to="Skills">Skills and Location</NavLink></li>
                  <li><NavLink exact to="Portfolio">Portfolio</NavLink></li>
                </ul>


               <Route exact path ="/" 
                render={()=> {
                  return(
                    <PersonalInfo handleChange={this.handleChange.bind(this)}
                                  fullName={this.state.fullName}
                                  fullNameClass={this.state.fullNameClass}
                                  phone={this.state.phone}
                                  phoneClass={this.state.phoneClass}
                                  email={this.state.email}
                                  emailClass={this.state.emailClass}
                                  email2={this.state.email2}
                                  email2Class={this.state.email2Class}
                                  address={this.state.address}
                                  addressClass={this.state.addressClass}
                                  city={this.state.city}
                                  cityClass={this.state.cityClass}
                                  state1={this.state.state1}
                                  state1Class={this.state.state1Class}
                                  country={this.state.country}
                                  countryClass={this.state.countryClass}
                                  postal={this.state.postal}
                                  postalClass={this.state.postalClass}
                                  storyLine={this.state.storyLine}
                                  storyLineClass={this.state.storyLineClass}
                    />
                  );
                }}
               />
               <Route exact path ="/Skills" 
                render = {() => {
                    return(
                      <Skills 
                          handleSelect = {this.handleSelect.bind(this)}
                          handleCheck1 = {this.handleCheck1.bind(this)}
                          checkBox1 = {this.state.checkBox1}
                          radioBtn = {this.state.radioBtn}
                          handleCheck2 = {this.handleCheck2.bind(this)}
                          checkBox2 = {this.state.checkBox2}
                          />
                    );
                }
                }
               />
               <Route exact path ="/Portfolio" 
                  render={() => {
                    return(
                      <Portfolio handleChange={this.handleChange.bind(this)}
                                  link={this.state.link}
                                  linkClass={this.state.linkClass}
                                  handleSubmit={this.handleSubmit}
                                  />
                    );
                  }}              
               />
            </div>
          </Router>
          

          <Footer />



      </div>
    );
  }
}





export default App;
