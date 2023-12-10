import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StringInterpolation from './StringInterpolation'
import Box1 from './boxes/box1'
import Quiz from './quiz/quiz'
import Button from './props/Button';
import Counter from './useState/counter'
import ShowBox from './useState/show-box'
import ImprovedCounter from './useState/improved-counter'
import Parent from './forms-and-parent/parent-chiled/Parent'
import Checkbox from './forms-and-parent/Checkbox'
import SurveyForm from './forms-and-parent/Form'
import Massage from './data-massaging/massage'
import VideoPlayer from './useRef/VideoPlayer'
import ImageToggle from './useRef/Images'
import FavoriteColor from './useEffect/FavoriteColor'
import Box from './useEffect/Box'
import ChangingBox from './useEffect/ChangingBox'
import Spinner from './useEffect/Spinner'
import InputFocus from './useEffect/InputFocus'
import Todo from './Todo/Todo'
import Avatar from './API/Avatar'
import { GiftsProvider } from './context/gifts-provider'
import Grandfather from './context/Grandfather'
import Main from './context/mood-change/Main'

function App() {
  // for spinner
  // const [timerActive, setTimerActive] = useState(true);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('first')
  //     setTimerActive(false);
  //     clearInterval(timer); 
  //   }, 5000); 

  //   return () => clearInterval(timer); 
  // }, []);

  return (
    <>
      <div>
        {/* <StringInterpolation/> */}
        {/* <Box1/> */}
        {/* <Quiz/> */}
        {/* <Button isImportant={true} text="Important" />
      <Button isImportant={false} text="Not Important" /> */}
      {/* <Counter/> */}
      {/* <ShowBox/> */}
      {/* <ImprovedCounter/> */}
      {/* <Parent/> */}
      {/* <Checkbox/> */}
      {/* <SurveyForm/> */}
      {/* <Massage/> */}
      {/* <VideoPlayer/> */}
      {/* <ImageToggle/> */}
      {/* <FavoriteColor/> */}
      {/* <h1>Boxes Example</h1>
      <div className="box-container">
        <Box size="small" />
        <Box size="medium" />
        <Box size="large" />
      </div> */}
      {/* <ChangingBox/> */}
{/* 
      {timerActive ? (
        <Spinner />
      ) : (
        <div>
          <h1>Timer has finished!</h1>
        </div>
      )} */}

      {/* <InputFocus/> */}
      {/* <Todo/> */}
      {/* <Avatar/> */}
      {/* <GiftsProvider>
      <Grandfather />
    </GiftsProvider> */}

    {/* <Main/> */}
      </div>
    </>
  )
}

export default App
