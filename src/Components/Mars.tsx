import { useState } from "react";
import Stats from "../Structures/Stats";
import Photobox from "../Structures/Photobox";

import mars1 from "../assets/planet-mars.svg";
import mars2 from '../assets/planet-mars-internal.svg';
import mars3 from '../assets/geology-mars.png';
import base from '../data.json';



export default function Mars() {

    const[state, setState] = useState(1);
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
           class="activeMars"
              needed={false}
              name={base[3].name}
              src={mars1}
              text={base[3].overview.content}
              source={base[3].overview.source}
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
              class="activeMars"
              needed={false}
              name={base[3].name}
              src={mars2}
              text={base[3].structure.content}
              source={base[3].structure.source}
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
              one={color.one}
              two={color.two}
              threes={color.three}
              class="activeMars"
              cl="margin"
              needed={true}
              name={base[3].name}
              src={mars1}
              three={mars3}
              text={base[3].geology.content}
              source={base[3].geology.source}
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
            <Stats rotation={base[3].rotation} revolution={base[3].revolution} radius={base[3].radius} temp={base[3].temperature}/>
          </div>
        </div>
      </div>
    )
}


