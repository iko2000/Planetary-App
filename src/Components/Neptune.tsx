import { useState } from "react";
import Stats from "../Structures/Stats";
import Photobox from "../Structures/Photobox";

import neptune1 from "../assets/planet-neptune.svg";
import neptune2 from '../assets/planet-neptune-internal.svg';
import neptune3 from '../assets/geology-neptune.png';
import base from '../data.json';



export default function Neptune() {

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
                 class="activeNeptune"
              needed={false}
              name={base[7].name}
              src={neptune1}
              text={base[7].overview.content}
              source={base[7].overview.source}
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
              class="activeNeptune"
              needed={false}
              name={base[7].name}
              src={neptune2}
              text={base[7].structure.content}
              source={base[7].structure.source}
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
              class="activeNeptune"
              cl="margin"
              needed={true}
              name={base[7].name}
              src={neptune1}
              three={neptune3}
              text={base[7].geology.content}
              source={base[7].geology.source}
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
            <Stats rotation={base[7].rotation} revolution={base[7].revolution} radius={base[7].radius} temp={base[7].temperature}/>
          </div>
        </div>
      </div>
    )
}

