import { Card, Input, Space, Tag, Typography } from 'antd';

const { Paragraph, Text, Title } = Typography;

function StepCard({ step, note, onNoteChange }) {
  return (
    <div className={`step-panel step-panel-${step}`}>
      <Space direction="vertical" size="middle" className="step-content">
        <Tag color="blue">Component {step}</Tag>
        <Title level={4}>Step {step} 內容</Title>
        <Paragraph>
          這裡是第 {step} 步的簡易內容。實際專案中可以替換成表單、設定頁、確認頁或其他流程畫面。
        </Paragraph>

        <Card className={`guide-card step-guide-target-${step}`} title="導覽說明測試">
          <Text>Joyride 會在每個步驟中聚焦到這個元件。</Text>
        </Card>

        <label className="note-field">
          <Text strong>Redux 狀態測試</Text>
          <Input value={note} onChange={(event) => onNoteChange(event.target.value)} />
        </label>
      </Space>
    </div>
  );
}

export default StepCard;
