import {
  addNewProduct,
  updateProduct,
  deleteProduct
} from "./actions/products";
import { addNewMessage, deleteMessage } from "./actions/messages";
import { addNewReview, deleteReview } from "./actions/reviews";
export const createSocketMiddleWare = socket => {
  let eventFlag = false;
  return store => next => action => {
    if (!eventFlag) {
      eventFlag = true;
      socket.on("new product", data => {
        next(addNewProduct(data.createdProduct));
      });
      socket.on("update product", data => {
        next(updateProduct(data));
      });
      socket.on("delete product", data => {
        next(deleteProduct(data));
      });
      socket.on("new message", data => {
        next(addNewMessage(data));
      });
      socket.on("delete message", data => {
        next(deleteMessage(data));
      });
      socket.on("new review", data => {
        next(addNewReview(data));
      });
      socket.on("delete review", data => {
        next(deleteReview(data));
      });
    }
    return next(action);
  };
};
