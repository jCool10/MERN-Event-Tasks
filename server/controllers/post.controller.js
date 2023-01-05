import responseHandler from '../handlers/response.handler.js';
import postModel from '../models/post.model.js';

const create = async (req, res) => {
  try {
    const { title, complete, priority, timeStart, timeEnd, date } = req.body;

    const newPost = new postModel({
      title,
      complete,
      priority,
      timeStart,
      timeEnd,
      date,
      user: req.user.id,
    });

    console.log(newPost);
    await newPost.save();

    responseHandler.created(res, newPost);
  } catch (error) {
    responseHandler.error(res);
  }
};

const get = async (req, res) => {
  try {
    const post = await postModel.find({ user: req.user.id });

    responseHandler.ok(res, post);
  } catch (error) {
    responseHandler.error(res);
  }
};

const update = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, description, url, status } = req.body;

    const post = await postModel.findOneAndUpdate({ id: postId, user: req.user.id }, {});
  } catch (error) {
    responseHandler.error(res);
  }
};

const remove = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await postModel.findOne({ _id: postId, user: req.user.id });

    if (!post) return responseHandler.notfound(res);

    await post.remove();

    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { create, get, update, remove };
