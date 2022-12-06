import { Router } from "express";
import { login_required } from "../middlewares/login_required.js";
import { commentService } from "../services/commentService.js";

const commentRouter = Router();

//댓글 생성
commentRouter.post("/comment", login_required, async function (req, res, next) {
    try {
        const user_id = req.currentUserId;
        const { content } = req.body;

        const comment = {
            user_id,
            content,
        };

        console.log("comment ===>", comment);

        const newComment = await commentService.addComment(comment);

        return res.status(201).json(newComment);
    } catch (err) {
        next(err);
    }
});

//해당 댓글 불러오기
commentRouter.get(
    "/comment/:id",
    login_required,
    async function (req, res, next) {
        try {
            const { id } = req.params;

            const getComment = await commentService.getComment(id);

            return res.status(201).json(getComment);
        } catch (err) {
            next(err);
        }
    }
);

//해당 커뮤니티 글의 전체 댓글 불러오기
commentRouter.get(
    "/comment",
    login_required,
    async function (req, res, next) {}
);

//해당 댓글 수정하기
commentRouter.put("/comment", login_required, async function (req, res, next) {
    try {
        const { _id, content } = req.body;

        const newInput = { _id, content };

        const updateComment = await commentService.updateComment(newInput);

        return res.status(201).json(updateComment);
    } catch (err) {
        next(err);
    }
});
//해당 댓글 삭제하기
commentRouter.delete(
    "/comment",
    login_required,
    async function (req, res, next) {
        try {
            const { _id } = req.body;
            await commentService.deleteComment(_id);

            return res.status(201).json({ message: "Comment Deleted" });
        } catch (err) {
            next(err);
        }
    }
);

export { commentRouter };
