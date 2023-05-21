import { useState } from "react";
import Stats from "../Structures/Stats";
import Photobox from "../Structures/Photobox";

import uranus1 from "../assets/planet-uranus.svg";
import uranus2 from '../assets/planet-uranus-internal.svg';
import uranus3 from '../assets/geology-uranus.png';
import base from '../data.json';


export default function Uranus() {
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
           class="activeUranus"
              needed={false}
              name={base[6].name}
              src={uranus1}
              text={base[6].overview.content}
              source={base[6].overview.source}
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
              class="activeUranus"
              needed={false}
              name={base[6].name}
              src={uranus2}
              text={base[6].structure.content}
              source={base[6].structure.source}
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
              class="activeUranus"
              cl="margin"
              needed={true}
              name={base[6].name}
              src={uranus1}
              three={uranus3}
              text={base[6].geology.content}
              source={base[6].geology.source}
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
            <Stats rotation={base[6].rotation} revolution={base[6].revolution} radius={base[6].radius} temp={base[6].temperature}/>
          </div>
        </div>
      </div>
    )
}


