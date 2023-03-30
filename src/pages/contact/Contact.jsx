import "./contact.css"

export default function Contact() {
  return (
<div className="box">
  <div className="container">
   <form>
   <label htmlFor="fname">First Name</label>
   <input className="tab"type="text" placeholder="Your name.." id="fname" />
   <label htmlFor="lname">Last Name</label>
    <input className="tab" type="text" placeholder="Your last name.." id="lname" />
   <label htmlFor="country">Country</label>
    <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select>

    <label htmlFor="subject">Subject</label>
    <textarea
      id="subject"
      name="subject"
      placeholder="Enter your message.."
      style={{ height: "200px" }}>
    </textarea>
       <input type="submit" value="Submit" />
   </form>
 </div>
</div>
  )
}