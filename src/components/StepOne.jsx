import { useDispatch, useSelector } from 'react-redux';
import StepCard from './StepCard.jsx';
import { updateComponent1Note } from '../store/component1Slice.js';

function StepOne() {
  const dispatch = useDispatch();
  const note = useSelector((state) => state.component1.note);

  return <StepCard step={1} note={note} onNoteChange={(value) => dispatch(updateComponent1Note(value))} />;
}

export default StepOne;
