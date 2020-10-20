import React from "react";

function Contact() {
    return(
        <div className="page" id="contact">
            <div className="container">
                <h1>Contact </h1>
                <form>
                  <label>
                    Name:
                    <input type="text" name="name" />
                  </label>
                </form>
                <form>
                  <label>
                    Name:
                    <input type="text" name="name" />
                  </label>
                </form>
                <form>
                  <label>
                    Name:
                    <textarea type="text" name="name" />
                  </label>
                </form>
                <input type="submit" value="Submit" />
            </div>

        </div>
    );
}

export default Contact;