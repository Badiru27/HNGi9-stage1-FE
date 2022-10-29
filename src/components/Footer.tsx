import zuri from '../../src/images/zuri.png';
import i4g from '../../src/images/I4G.png';

export default function Footer(){
    return(
        <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row border-t pt-5 mt-20 flex-row justify-between text-sm text-gray-500'>
            <img height={10} width={120}  src={zuri} alt="zuri logo" />
            <p>HNG Internship 9 Frontend Task</p>
            <img height={10} width={100} src={i4g} alt="i4g logo" />
        </div>
    )
}