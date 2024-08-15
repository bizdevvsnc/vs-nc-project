import './Footer.css';
import logo from '../photos/VS&NC INC. Company Logo.jpg';

export const Footer = () =>{
return(
    <div className='footer'>

        <div className='logoAndCorp'>
            <img className='logo' src={logo} alt='logo'/>
            <p className='textfooter'>© 2021 VS & NC Inc.<br></br>
            All rights reserved.</p>
            </div>

            <div className='adress'>
                <h2 className='textfooter'>ADDRESS</h2>
                <p className='textfooter'>1584 Mink st SW,<br></br>Pataskala, OH 43062</p>
            </div>

            <div className='contact'>
                <h2 className='textfooter'>CONTACT</h2>
                <p className='textfooter'>Cell: +1(754)251-97-72<br></br>bizdev@vs-nc.com</p>
                <a className='emaillink' href="mailto:bizdev@vs-nc.com"><button className='btn'>CONTACT US</button></a>
            </div>
    </div>


)
}