import { useState } from "react";
import Stats from "../Structures/Stats";
import Photobox from "../Structures/Photobox";

import saturn1 from "../assets/planet-saturn.svg";
import saturn2 from '../assets/planet-saturn-internal.svg';
import saturn3 from '../assets/geology-saturn.png';

import base from '../data.json';



export default function Saturn() {
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
           class="activeSaturn"
          cl="jupiterphoto"
              needed={false}
              name={base[5].name}
              src={saturn1}
              text={base[5].overview.content}
              source={base[5].overview.source}
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
              class="activeSaturn"
              cl="jupiterphoto"
              needed={false}
              name={base[5].name}
              src={saturn2}
              text={base[5].structure.content}
              source={base[5].structure.source}
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
              class="activeSaturn"
              
              cl="margin  jupiterphoto"
              needed={true}
              name={base[5].name}
              src={saturn1}
              three={saturn3}
              text={base[5].geology.content}
              source={base[5].geology.source}
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
            <Stats rotation={base[5].rotation} revolution={base[5].revolution} radius={base[5].radius} temp={base[5].temperature}/>
          </div>
        </div>
      </div>
    )
}


