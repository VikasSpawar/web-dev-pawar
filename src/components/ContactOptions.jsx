import { MdCall, MdEmail} from "react-icons/md"
import {FaGithub, FaLinkedin} from "react-icons/fa"

export const GetInTouch=()=>{





    return(
        <div className=" p-4 text-left ">
       
        <p>Got a project? Reach out and let's work together on something exciting. Big or small. Mobile or web.</p>
        <div className="p-2 text-xl ">
            <div className="flex  max-w-72 gap-x-4 m-4 items-center">
                <a href=" mailto:pawarvikas534@gmail.com">  <MdEmail color="rgb(186,104,200)" size={24}  /> </a>
                <div className="info">
                    <div className="head"></div>
                    <div className="sub-title">  <a id="contact-email" href="mailto:pawarvikas534@gmail.com"></a> pawarvikas534@gmail.com  </div>
                </div>
            </div>
            <div className="flex  max-w-72 gap-x-4 m-4 items-center">
                 <a  href="https://in.linkedin.com/in/vikas-pawar03" target="_blank"> <FaLinkedin color="rgb(186,104,200)" size={24} /> </a>
                <div className="info">
               
                    <div className="sub-title">  <a id="contact-linkedin" href="https://in.linkedin.com/in/vikas-pawar03" target="_blank">Linkedin</a> </div>
                </div>
            </div>
            <div className="flex  max-w-72 gap-x-4 m-4 items-center">
                 <a href="https://github.com/VikasSpawar" target="_blank"> <FaGithub color="rgb(186,104,200)" size={24} /> </a>
                <div className="info">
                  
                    <div className="sub-title"> <a id="contact-github" href="https://github.com/VikasSpawar" target="_blank" >GitHub</a> </div>
                </div>
            </div>

            <div className="flex  max-w-72 gap-x-4 m-4 items-center">
            <MdCall color="rgb(186,104,200)" size={24}/>

               <div className="info">
                  
                   <div id="contact-phone" className="sub-title">+91 7066750126</div>
               </div>
           </div>

            

        </div>
    </div>
    )
}

export const MessageMe=()=>{

    return(
        <div className="  text-black text-left  ">

        <form className="m-4 flex flex-col  " action="https://formsubmit.co/pawarvikas534@gmail.com"  method="POST"    >
     
            <div className="fields  flex gap-x-6 m-2 ">
                <div className="field name w-full ">
                    <input name="user_name" className="outline-[rgb(186,104,200)] w-full p-2 rounded-lg " type="text" placeholder="Name" required/>
                </div>
                <div className="field email w-full">
                    <input name="email" className="outline-[rgb(186,104,200)] w-full p-2 rounded-lg " type="email" placeholder="Email" required/>
                </div>
            </div>
            <div className="field flex gap-x-6 m-2">
                <input className="outline-[rgb(186,104,200)] w-full p-2 rounded-lg "  name="subject" type="text" placeholder="Subject" required/>
            </div>
            <div className="field flex gap-x-6 m-2 h-24">
                <textarea className="outline-[rgb(186,104,200)] w-full p-2 rounded-lg " name="message" cols="30" rows="10" placeholder="Message.." required></textarea>
            </div>
            <div className="text-white text-lg ">
                <button className="bg-[rgb(186,104,200)] px-3 py-2 mx-2 rounded-xl" type="submit">Send message</button>
            </div>
        </form>
    </div>
    )
}