import { Drilling } from '../Drilling/Drilling';
import { Network } from '../Network/Network';
import { Repair } from '../Repair/Repair';
import { Wireless } from '../Wireless/Wireless';
import './OurServices.css';

export const OurServices = () =>{
    return(
<div className='background'>
<div className='lineWithTitle'>
<div className='lineOurServices'></div>
<h1 className='titleParagOurServices'>OUR SERVICES</h1>
</div>
<Wireless/>
<Network/>
<Repair/>
<Drilling/>
</div>
    )
}