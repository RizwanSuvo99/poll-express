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
