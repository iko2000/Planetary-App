import { useState } from "react";
import Stats from "../Structures/Stats";
import Photobox from "../Structures/Photobox";

import earth1 from "../assets/planet-earth.svg";
import earth2 from '../assets/planet-earth-internal.svg';
import earth3 from '../assets/geology-earth.png';
import base from '../data.json';




export default function Earth() {
      
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
             class="activeEarth"
              needed={false}
              name="Earth"
              src={earth1}
              text={base[2].overview.content}
              source={base[2].overview.source}
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
              class="activeEarth"
              needed={false}
              name="Earth"
              src={earth2}
              text={base[2].structure.content}
              source={base[2].structure.source}
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
              class="activeEarth"
              cl="margin"
              needed={true}
              name="Earth"
              src={earth1}
              three={earth3}
              text={base[2].geology.content}
              source={base[2].geology.source}
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
            <Stats rotation={base[2].rotation} revolution={base[2].revolution} radius={base[2].radius} temp={base[2].temperature}/>
          </div>
        </div>
      </div>
    )
}

