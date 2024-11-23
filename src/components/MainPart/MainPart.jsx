import ImageBlock from '../ImageBlock/ImageBlock';
import MyJubmotron from '../MyJubmotron/MyJubmotron';
import Screen from '../Screen/Screen';
import Instruction from '../Instruction/Instruction';

import './MainPart.css';

export default function MainPart() {
  return (
    <>
      <div className="main-part">
        <MyJubmotron />
        <ImageBlock />
        <Screen />
      </div>
      <Instruction />
    </>
  );
}
