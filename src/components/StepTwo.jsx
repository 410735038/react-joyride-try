import { useDispatch, useSelector } from 'react-redux';
import StepCard from './StepCard.jsx';
import { updateComponent2Note } from '../store/component2Slice.js';

function StepTwo() {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.component2.note);

  return <StepCard step={2} note={note} onNoteChange={(value) => dispatch(updateComponent2Note(value))} />;
}

export default StepTwo;
