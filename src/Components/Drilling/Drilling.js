import './Drilling.css';
import drillingIcon from '../photos/drillingIcon.png';
import drillingOne from '../photos/drillingOne.JPG';
import drillingTwo from '../photos/drillingTwo.JPG';
import Carousel from '../Carousel/Carousel';



export const Drilling =() => {
    const images = [
        { src: drillingOne, alt: 'Drilling One' },
        { src: drillingTwo, alt: 'Drilling Two' }
      ];

    return(
        <div className='bigContainerDrilling'>
            <div className='iconAndTitle'>
                <img className='icon' src={drillingIcon} alt='icon Drilling'/>
                <h2 className='serviceTitle'>Horizontal drilling and Fiber Optic Cable/Conduits pulling</h2>
            </div>

            <div className='textAndImageDrilling'>
                <div className='textDrilling'>
                <ul className='serviceName'>• Horizontal drilling by Vermeer d10x15 s3</ul>
                <ul className='serviceName'>• Conduits pulling</ul>
                <ul className='serviceName'>• Fiber Optic cable pulling</ul>
                <ul className='serviceName'>• Handholes and pedestals installation</ul>
                <ul className='serviceName'>• Fiber splicing</ul>
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