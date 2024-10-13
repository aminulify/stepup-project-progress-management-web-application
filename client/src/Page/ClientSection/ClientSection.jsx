import './ClientSection.css';
import img1 from '../../../public/clients/3.png';
import img2 from '../../../public/clients/4.png';
import img3 from '../../../public/clients/5.png';
import img4 from '../../../public/clients/6.png';
import img5 from '../../../public/clients/7.png';
import img6 from '../../../public/clients/8.png';
import img7 from '../../../public/clients/9.png';
import img8 from '../../../public/clients/10.png';

const ClientSection = () => {
    
    return (
        <section className='mb-10 -z-10'>
            <h2 className="text-center font-medium text-[var(--primaryFontColor)] text-xl">Trusted by 2 million+ teams</h2>
            <div className='absolute md:top-[250px] top-[250px] md:w-[300px] w-[100px] h-[100px] lighting-effect -z-20'></div>
            <div className='absolute -z-20 md:top-[100px] top-[90px] right-0 md:w-[250px] w-[100px] h-[100px] lighting2-effect'></div>
            
            <div className="logos">
                <div className='py-8 border-t-[1.5px] border-b-[1.5px] border-purple-200'>
                <div className="logo-slide">
                    <img src={img1} alt="Our Clients" />
                    <img src={img2} alt="Our Clients" />
                    <img src={img3} alt="Our Clients" />
                    <img src={img4} alt="Our Clients" />
                    <img src={img5} alt="Our Clients" />
                    <img src={img6} alt="Our Clients" />
                    <img src={img7} alt="Our Clients" />
                    <img src={img8} alt="Our Clients" />
                    <img src={img1} alt="Our Clients" />
                    <img src={img2} alt="Our Clients" />
                    <img src={img3} alt="Our Clients" />
                    <img src={img4} alt="Our Clients" />
                    <img src={img5} alt="Our Clients" />
                    <img src={img6} alt="Our Clients" />
                    <img src={img7} alt="Our Clients" />
                    <img src={img8} alt="Our Clients" />
                </div>
                </div>
               
            </div>
        </section>
    );
};

export default ClientSection;