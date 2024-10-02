import LeftSection from './LeftSection';
import RightSection from './RightSection';

export default function MainPage(){
  return (
    <>
      <div className="background"></div>
      <main className='wrapper'>
        <LeftSection/>
        <RightSection/>
      </main>
    </>
  );
}