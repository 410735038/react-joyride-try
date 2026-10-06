import { useMemo, useState } from 'react';
import { ACTIONS, EVENTS, Joyride, STATUS } from 'react-joyride';
import { useDispatch } from 'react-redux';
import { setCurrentStep } from '../store/stepSlice.js';

function TourJoyride({ run, onStop }) {
  const dispatch = useDispatch();
  const [tourStepIndex, setTourStepIndex] = useState(0);

  const tourSteps = useMemo(
    () => [
      {
        target: '.app-steps',
        content: '這是導覽，將導覽第一步到第五步驟。',
        skipBeacon: true,
        placement: 'bottom',
        data: { appStep: 1 },
      },
      ...[1, 2, 3, 4, 5].flatMap((appStep) => [
        {
          target: `.step-panel-${appStep}`,
          content: `這是第 ${appStep} 步，這裡可以放此步驟的主要說明文字。`,
          skipBeacon: true,
          placement: 'top',
          data: { appStep },
        },
        {
          target: `.step-guide-target-${appStep}`,
          content: `這是 Step ${appStep} 的「導覽說明測試」元件，可用來說明此區塊的細節。`,
          skipBeacon: true,
          placement: 'bottom',
          data: { appStep },
        },
      ]),
    ],
    [],
  );

  const moveTourTo = (nextIndex) => {
    const nextStep = tourSteps[nextIndex];

    if (!nextStep) {
      setTourStepIndex(0);
      onStop();
      return;
    }

    dispatch(setCurrentStep(nextStep.data.appStep));
    window.setTimeout(() => {
      setTourStepIndex(nextIndex);
    }, 80);
  };

  const handleTourCallback = (data) => {
    const { action, index, status, type } = data;
    const isFinished = [STATUS.FINISHED, STATUS.SKIPPED].includes(status);

    if (isFinished) {
      setTourStepIndex(0);
      onStop();
      return;
    }

    if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      const nextIndex = index + (action === ACTIONS.PREV ? -1 : 1);
      moveTourTo(nextIndex);
    }
  };

  return (
    <Joyride
      continuous
      onEvent={handleTourCallback}
      options={{
        buttons: ['skip', 'back', 'close', 'primary'],
        primaryColor: '#1677ff',
        showProgress: true,
        textColor: '#1f2937',
        zIndex: 1200,
      }}
      run={run}
      scrollToFirstStep
      stepIndex={tourStepIndex}
      steps={tourSteps}
      locale={{
        back: '上一步',
        close: '關閉',
        last: '完成',
        next: '下一步',
        nextWithProgress: '下一步（第 {current} / {total} 步）',
        skip: '跳過',
      }}
    />
  );
}

export default TourJoyride;
