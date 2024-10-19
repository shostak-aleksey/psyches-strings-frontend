// File: frontend/src/features/StringWithControls/StringWithControls.tsx

import React, { useState } from 'react';
import { FlexContainer } from '@/shared/ui/FlexContainer/FlexContainer';
import { StringCanvas } from '@/shared/ui/Strings/StringCanvas/StringCanvas';
import { GridContainer } from '@/shared/ui/GridContainer/GridContainer';

export const StringWithControls: React.FC = () => {
  const [amplitude, setAmplitude] = useState<number>(40);
  const [damping, setDamping] = useState<number>(0.1);
  const [duration, setDuration] = useState<number>(3000);
  const [frequency, setFrequency] = useState<number>(0.005);

  return (
    <>
      <GridContainer justify="center" customColumns={[1, 2, 2, 2, 4]}>
        <div>
          <label>
            <FlexContainer
              width="230px"
              align="center"
              justify="center"
              gap="8px"
              wrap="wrap"
            >
              <span>Амплитуда</span>
              <input
                type="range"
                value={amplitude}
                onChange={(e) => setAmplitude(Number(e.target.value))}
                min={1}
                max={100}
              />
            </FlexContainer>
          </label>
        </div>
        <div>
          <label>
            <FlexContainer
              width="230px"
              align="center"
              gap="8px"
              justify="center"
              wrap="wrap"
            >
              <span>Демпфирование</span>
              <input
                type="range"
                value={damping}
                onChange={(e) => setDamping(Number(e.target.value))}
                min={0.0001}
                max={5}
                step={0.0001}
              />
            </FlexContainer>
          </label>
        </div>
        <div>
          <label>
            <FlexContainer
              width="230px"
              align="center"
              gap="8px"
              justify="center"
              wrap="wrap"
            >
              <span>Длительность</span>
              <input
                type="range"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                min={3000}
                max={30000}
              />
            </FlexContainer>
          </label>
        </div>
        <div>
          <label>
            <FlexContainer
              width="230px"
              align="center"
              gap="8px"
              justify="center"
              wrap="wrap"
            >
              <span>Частота</span>
              <input
                type="range"
                value={frequency}
                onChange={(e) => setFrequency(Number(e.target.value))}
                min={0.0001}
                max={0.05}
                step={0.0001}
              />
            </FlexContainer>
          </label>
        </div>
      </GridContainer>
      <StringCanvas
        amplitude={amplitude}
        damping={damping}
        duration={duration}
        frequency={frequency}
        height={80}
      />
    </>
  );
};
