import React from 'react';
import { Header } from '../components/Header';

import mainRight from '../images/main-right.png';
import mainLeft from '../images/main-left.png';
import greenLine from '../images/green-line.png';

export default function Main() {
  return (
    <>
      <div className="z-10">
        <Header links />
      </div>

      <div className="flex w-screen h-max">
        <div className="flex w-screen h-max pl-[58px]">
          <img
            src={mainRight}
            alt="main image"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              zIndex: -10,
              height: '110%',
            }}
          />
          <img
            src={mainLeft}
            alt="main image"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: -100,
              zIndex: -10,
              //   height: "100%",
            }}
          />
          <div className="pt-24 pl-24">
            <h1 className="text-[90px] font-bold pt-16 pb-[106px] font-display leading-extra-tight">
              Make a <br />
              Better <br />
              Diagnosis
            </h1>
            <img
              src={greenLine}
              alt="line image"
              style={{
                width: '479px',
                height: '26px',
              }}
            />
            <div className="w-80">
              <p className="text-[22px] font-medium pt-16 ">
                Transforming Healthcare: Bridging Gaps in Diagnosis for Enhanced
                Patient Well-being and Inclusive Care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
