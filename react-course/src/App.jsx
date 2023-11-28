import { useState } from 'react'
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



function App() {

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
      <ImageToggle/>
      </div>
    </>
  )
}

export default App
