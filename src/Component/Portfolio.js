import React from 'react';

const Portfolio = props => {



    return (
        <div className = "Portfolio">
            <div className="portfolio-container">
            <h3>3.Portfolio</h3>
            <hr/>
            <p>Prove you're IBM's next great designer by showing us who you are.
              What you've done. How you think. Tell us your story.</p>
            <input type="url" id="link" name="portfolio link" placeholder="Portfolio link*"
            className={props.linkClass}
            value = {props.link}
            onChange = {props.handleChange}
            />
            <textarea name="others" rows="8" cols="80"
            placeholder="Anythingelse (another link, availability, etc.)?"></textarea>
          <input className="SubmitBtn" type="submit" id="submitButton" name="button" value="Submit" onClick={props.handleSubmit}/>
        </div>

    </div>
        
        
    );
}


export default Portfolio;
