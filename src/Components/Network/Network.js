import './Network.css';
import networkIcon from '../photos/networkIcon.png';
import networkOne from '../photos/networkOne.JPG';
import networkTwo from '../photos/networkTwo.JPG';
import networkThree from '../photos/networkThree.png';
import networkFour from '../photos/networkFour.png';
import Carousel from '../Carousel/Carousel';

export const Network =() =>{

    const images = [
        { src: networkOne, alt: 'Network One' },
        { src: networkTwo, alt: 'Network Two' },
        { src: networkThree, alt: 'Network Three' },
        { src: networkFour, alt: 'Network Four' }
      ];

    return(
        <div className='bigContainerNetwork'>

            <div className='iconAndTitle'>
                <img className='icon' src={networkIcon} alt='icon Network'/>
                <h2 className='serviceTitle'>Network Equipment Installation</h2>
            </div>

            <div className='textAndImageNetwork'>
                <div className='textNetwork'>
                <ul className='serviceName'>• Power plant</ul>
                <ul className='serviceName'>• IXR or any different type of routers</ul>
                <ul className='serviceName'>• Power booster</ul>
                <ul className='serviceName'>• Baseband</ul>
                <ul className='serviceName'>• GPS module</ul>

                </div>

                <div className='flyersMainContainer'>
    <div className='flyersContainer'>
      <Carousel images={images}/>
    </div>
</div>
            </div>
        </div>
    )
}
