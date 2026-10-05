import { useState } from 'react';
import { Button, Space, Steps, Typography } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentStep } from './store/stepSlice.js';
import TourJoyride from './components/TourJoyride.jsx';
import StepOne from './components/StepOne.jsx';
import StepTwo from './components/StepTwo.jsx';
import StepThree from './components/StepThree.jsx';
import StepFour from './components/StepFour.jsx';
import StepFive from './components/StepFive.jsx';

const { Title, Text } = Typography;

const stepItems = [
  { title: 'Step 1', subTitle: 'Component 1' },
  { title: 'Step 2', subTitle: 'Component 2' },
  { title: 'Step 3', subTitle: 'Component 3' },
  { title: 'Step 4', subTitle: 'Component 4' },
  { title: 'Step 5', subTitle: 'Component 5' },
];

function App() {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.step.currentStep);
  const [tourRun, setTourRun] = useState(false);

  const startTour = () => {
    dispatch(setCurrentStep(1));
    setTourRun(true);
  };

  const handleStepChange = (nextZeroBasedStep) => {
    dispatch(setCurrentStep(nextZeroBasedStep + 1));
  };

  return (
    <main className="app-shell">
      <TourJoyride run={tourRun} onStop={() => setTourRun(false)} />

      <section className="demo-frame">
        <Space className="toolbar" align="center">
          <Button
            data-testid="start-tour-button"
            type="primary"
            icon={<QuestionCircleOutlined />}
            onClick={startTour}
          >
            使用教學
          </Button>
          <Text type="secondary">點擊後會從第一步重新開始導覽。</Text>
        </Space>

        <section className="steps-card app-steps">
          <Steps
            current={currentStep - 1}
            items={stepItems}
            onChange={handleStepChange}
            responsive
          />
        </section>

        <section className="content-card">
          <div className="content-heading">
            <Title level={3}>步驟細節</Title>
            <Text type="secondary">目前顯示 Component {currentStep}</Text>
          </div>
          {currentStep === 1 && <StepOne />}
          {currentStep === 2 && <StepTwo />}
          {currentStep === 3 && <StepThree />}
          {currentStep === 4 && <StepFour />}
          {currentStep === 5 && <StepFive />}
        </section>
      </section>
    </main>
  );
}

export default App;
