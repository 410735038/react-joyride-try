import { useDispatch, useSelector } from 'react-redux';
import StepCard from './StepCard.jsx';
import { updateComponent5Note } from '../store/component5Slice.js';

function StepFive() {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.component5.note);

  return <StepCard step={5} note={note} onNoteChange={(value) => dispatch(updateComponent5Note(value))} />;
}

export default StepFive;
