import badiru from '../../src/images/badiru.jpeg'
export default function Profile() {
    return (
        <div className="flex flex-col py-10 items-center justify-center space-x-5">
        <img
          className="rounded-full"
          src={badiru}
          height={40}
          width={80}
          alt="badiru"
        />
         <h1 className='font-bold'>Badiru Sulaimon</h1>
      </div>
    );
}