import { model, Schema } from 'mongoose';

const pollSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  totalVote: {
    type: Number,
    default: 0,
  },
  options: {
    type: [{ name: String, vote: Number }],
  },
});

const Poll = model('Poll', pollSchema);

export default Poll;
