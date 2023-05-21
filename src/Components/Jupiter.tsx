import { useState } from "react";
import Stats from "../Structures/Stats";
import Photobox from "../Structures/Photobox";

import jupiter1 from "../assets/planet-jupiter.svg";
import jupiter2 from '../assets/planet-jupiter-internal.svg';
import jupiter3 from '../assets/geology-jupiter.png';
import base from '../data.json';





export default function Jupiter() {

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
           class="activeJupiter"
              needed={false}
              cl="jupiterphoto"
              name={base[4].name}
              src={jupiter1}
              text={base[4].overview.content}
              source={base[4].overview.source}
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
              class="activeJupiter"
              cl="jupiterphoto"
              needed={false}
              name={base[4].name}
              src={jupiter2}
              text={base[4].structure.content}
              source={base[4].structure.source}
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
              class="activeJupiter"
              cl="margin jupiterphoto"
              needed={true}
              name={base[4].name}
              src={jupiter1}
              three={jupiter3}
              text={base[4].geology.content}
              source={base[4].geology.source}
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
            <Stats rotation={base[4].rotation} revolution={base[4].revolution} radius={base[4].radius} temp={base[4].temperature}/>
          </div>
        </div>
      </div>
    )
}

