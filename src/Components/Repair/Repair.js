import './Repair.css';
import repairIcon from '../photos/repairIcon.png';
import staticBlue from '../photos/staticBlue.png';

export const Repair = () =>{
    return(
        <div className='bigContainerRepair'>

            <div className='iconAndTitle'>
                <img className='icon' src={repairIcon} alt='icon Repair'/>
                <h2 className='serviceTitle'>Maintenance and Repair</h2>
            </div>

            <div className='textAndImageRepair'>
                <div className='textRepair'>
                <ul className='serviceName'>• Troubleshooting and replacement:
                <li className='liLine'> Antenna & Line equipment</li>
                <li className='liLine'> Replacing antennas, RRU, Coax (sweep tests), Hybrid Cable (fiber optic tests)</li>
                <li className='liLine'> PIM issue and PIM testing</li>
                <li className='liLine'> Indoor/Outdoor Cabinet cleaning and troubleshooting inside installed equipment</li>
                <li className='liLine'> Battery testing and replacement</li>
                <li className='liLine'> Power cables and conduits replacement including digging and trenching</li>
                </ul>
                </div>
                <div className='staticParticles'>
    <img className='staticBlue' src={staticBlue} alt='static blue elements'/>
</div>
            </div>
        </div>
    )
}