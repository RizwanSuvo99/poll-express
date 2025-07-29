import Poll from './Poll.mjs';

export const createPollGetController = (req, res, next) => {
  res.render('create');
};

export const createPollPostController = async (req, res, next) => {
  let { title, description, options } = req.body;

  options = options.map((opt) => {
    return {
      name: opt,
      vote: 0,
    };
  });

  let poll = new Poll({
    title,
    description,
    options,
  });

  try {
    await poll.save();
    res.redirect('/polls');
  } catch (error) {
    console.log(error);
  }
};

export const getAllPolls = async (req, res, next) => {
  const polls = await Poll.find();
  res.render('polls', { polls });
};

export const viewPollGetController = async (req, res, next) => {
  let id = req.params.id;
  try {
    let poll = await Poll.findById(id);
    res.render('viewPoll', { poll });
  } catch (error) {
    console.log(error);
  }
};

export const viewPollPostController = async (req, res) => {
  const poll = await Poll.findById(req.params.id);
  const selectedOptionId = req.body.selectedOption;

  const option = poll.options.id(selectedOptionId);
  if (option) {
    option.vote += 1;
    poll.totalVote += 1;
    await poll.save();
  }
  res.redirect(`/polls/${poll._id}`);
}


