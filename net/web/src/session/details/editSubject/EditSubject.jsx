import { Input, Button } from 'antd';
import { EditSubjectWrapper } from './EditSubject.styled';

export function EditSubject({ subject, setSubject, saveSubject, cancelSubject, strings }) {

  return (
    <EditSubjectWrapper>
      <div className="title">Edit Subject</div>

      <Input placeholder="Subject (optional)" spellCheck="false" autocapitalize="word"
          value={subject} onChange={(e) => setSubject(e.target.value)} />

      <div className="controls">
        <Button key="back" onClick={cancelSubject}>{strings.cancel}</Button>
        <Button key="save" type="primary" onClick={saveSubject}>{strings.save}</Button>
      </div>
    </EditSubjectWrapper>
  );
}

