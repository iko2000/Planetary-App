import { useState } from "react"
import Photobox from "../Structures/Photobox"
import Stats from "../Structures/Stats"
import venus2 from '../assets/geology-venus.png';
import venus1 from '../assets/planet-venus.svg';
import venus3 from '../assets/planet-venus-internal.svg';
import base from '../data.json';




export default function Venus() {

  const [state, setState] = useState(1);
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
          class="activeVenus"
              needed={false}
              name={base[1].name}
              src={venus1}
              text={base[1].overview.content}
              source={base[1].overview.source}
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
              class="activeVenus"
              needed={false}
              name={base[1].name}
              src={venus3}
              text={base[1].structure.content}
              source={base[1].structure.source}
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
              class="activeVenus"
              cl="margin"
              needed={true}
              name={base[1].name}
              src={venus1}
              three={venus2}
              text={base[1].geology.content}
              source={base[1].geology.source}
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
            <Stats rotation={base[1].rotation} revolution={base[1].revolution} radius={base[1].radius} temp={base[1].temperature}/>
          </div>
        </div>
      </div>
    )
}


