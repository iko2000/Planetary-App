import Photobox from "../Structures/Photobox";
import mercury1 from "../assets/planet-mercury.svg";
import { useState } from "react";
import Stats from "../Structures/Stats";
import mercury2 from "../assets/planet-mercury-internal.svg"
import mercury3 from "../assets/geology-mercury.png";
import base from '../data.json';


export default function Mercury() {
  const [state, setState] = useState(1);
  const [need, setNeed] = useState(false);
  const [color, setColor] = useState({
    one: true,
    two: false,
    three: false
  })


  return (
    <div className="planet">
      <div className="planetbox">
        <div className="floor1">
        {state === 1 ?   <Photobox
            one={color.one}
            two={color.two}
            threes={color.three}
            class="activeMercury"
            needed={false}
            name={base[0].name}
            src={mercury1}
            text={base[0].overview.content}
            source={base[0].overview.source}
            step1={() => {
                setState(1);
                setColor({
                  one: true,
                  two: false,
                  three: false
                })
            }}
            step2={() => {
                setState(2);
                setColor({
                  one: false,
                  two: true,
                  three: false
                })
            }}
            step3={() => {
                setState(3);
                setColor({
                  one: false,
                  two: false,
                  three: true
                })
            }}
          /> : ''}
        {
            state === 2 ?   <Photobox
            one={color.one}
            two={color.two}
            threes={color.three}
            class="activeMercury"
            needed={false}
            name={base[0].name}
          
            src={mercury2}
            text={base[0].structure.content}
            source={base[0].structure.source}
            step1={() => {
                setState(1);
                setColor({
                  one: true,
                  two: false,
                  three: false
                })
            }}
            step2={() => {
                setState(2);
                setColor({
                  one: false,
                  two: true,
                  three: false
                })
            }}
            step3={() => {
                setState(3);
                setColor({
                  one: false,
                  two: false,
                  three: true
                })
            }}
          /> :
          ''
        }
        {
            state === 3 ? <Photobox
            cl="margin"
            one={color.one}
            two={color.two}
            threes={color.three}
            class="activeMercury"
            needed={true}
            name={base[0].name}
            src={mercury1}
            three={mercury3}
            text={base[0].geology.content}
            source={base[0].geology.source}
            step1={() => {
                setState(1);
                setColor({
                  one: true,
                  two: false,
                  three: false
                })
            }}
            step2={() => {
                setState(2);
                setColor({
                  one: false,
                  two: true,
                  three: false
                })
            }}
            step3={() => {
                setState(3);
                setColor({
                  one: false,
                  two: false,
                  three: true
                })
            }}
          /> :
          ''
        }
        </div>
        <div className="floor2">
          <Stats rotation={base[0].rotation} revolution={base[0].revolution} radius={base[0].radius} temp={base[0].temperature}/>
        </div>
      </div>
    </div>
  );
}
