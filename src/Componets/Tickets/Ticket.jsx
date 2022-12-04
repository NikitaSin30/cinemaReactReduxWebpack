import  "./Ticket.css";

function Ticket() {
   return (
      <div className="page__ticket ticket">
         <div  className='ticket__priceLogo' >
            <h2 className="ticket__price">12100</h2>
            <div>
               <img className="ticket__logo" src="/S7 Logo.png" alt="компания лого" />
            </div>
         </div>
         <div className="ticket__transfer">
            <div className="ticket__block ticket__there">
               <p>A - B</p>
               <p>ss</p>
               <p>ss</p>
               <p>ss</p>
               <p>ss</p>
               <p>ss</p>
            </div>
            <div className="ticket__block ticket__back">
               <p>A - B</p>
               <p>ss</p>
               <p>ss</p>
               <p>ss</p>
               <p>ss</p>
               <p>ss</p>
            </div>
         </div>
      </div>
   );
}

export default Ticket;
