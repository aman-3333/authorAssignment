import express from "express";
import AuthController from "../controllers/AuthController";
import { IBook } from "../models/Book";

import { IUser } from "../models/User";
import BookController from "../controllers/BookController";
import { successResponse, errorResponse } from "../services/apiResponse"
import { ObjectId } from "mongoose";
//import { IBusinessType } from "../models/BusinessType"
const router = express.Router();
///////////////////////////////////////////////authManagement
router.post("/signUp", async (req, res) => {

    try {
        const body = req.body as IUser;
        console.log("body", body);

        const controller = new AuthController();
        const response = await controller.signUp(body);
        console.log("response", response);

        res.status(200).json(successResponse("signUp ", response, res.statusCode));
    } catch (error) {
        console.error("error in signUp", error);
        res.status(500).json(errorResponse("error in signUp", res.statusCode));
    }
});
router.post("/SignIn", async (req, res) => {

    try {
        const body = req.body as IUser;
        console.log("body", body);

        const controller = new AuthController();
        const response = await controller.signIn(body);
        console.log("response", response);

        res.status(200).json(successResponse("product ", response, res.statusCode));
    } catch (error) {
        console.error("error in product", error);
        res.status(500).json(errorResponse("error in product", res.statusCode));
    }
});
router.patch("/resetPasword", async (req, res) => {

    try {
        const body = req.body as IUser;
        console.log("body", body);

        const controller = new AuthController();
        const response = await controller.resetPassword(body);
        console.log("response", response);

        res.status(200).json(successResponse("resetPasword ", response, res.statusCode));
    } catch (error) {
        console.error("error in resetPasword", error);
        res.status(500).json(errorResponse("error in resetPasword", res.statusCode));
    }
});




///////////////////////////////////////////////////////////////////////book
router.post("/", async (req, res) => {
    try {
        const body = req.body as IBook;

        const controller = new BookController();
        const response: IBook = await controller.createBook(body);
        res.status(200).json(successResponse("create  Book", response, res.statusCode));
    } catch (error) {
        console.error("error in create  Book", error);
        res.status(500).json(errorResponse("error in create  Book", res.statusCode));
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const  BookId = req.params.id;

        const body = req.body as IBook;
        const controller = new BookController();
        const response: IBook = await controller.editBook(body,  BookId);
        res.status(200).json(successResponse(" Book update", response, res.statusCode));
    } catch (error) {
        console.error("error in  Book update", error);
        res.status(500).json(errorResponse("error in  Book update", res.statusCode));
    }
});

router.get("/ BookList", async (req, res) => {
    try {
        const controller = new BookController();
        const businessTypeId = req.query.businessTypeId;
        const response: IBook[] = await controller.getBook();
        res.status(200).json(successResponse("get  Book", response, res.statusCode));
    } catch (error) {
        console.error("error in get  Book", error);
        res.status(500).json(errorResponse("error in get  Book", res.statusCode));
    }
});


router.get("/:id", async (req, res) => {
    try {
        const shopId: string = req.params.id;
        const userId = req.body.userId;
        const controller = new BookController();
        const response: IBook = await controller.getBookInfoById(shopId);
        res.status(200).json(successResponse("get  Book by Id ", response, res.statusCode));
    } catch (error) {
        console.error("error in get  Book by Id", error);
        res.status(500).json(errorResponse("error in get  Book by Id", res.statusCode));
    }
});


router.patch("/delete Book/:id", async (req, res) => {
    try {
        const  BookId = req.body. BookId;
        const authorId = req.body.authorId;
        const controller = new BookController();
        const response: IBook = await controller.deleteBook(BookId, authorId);
        res.status(200).json(successResponse("delete  Book", response, res.statusCode));
    } catch (error) {
        console.error("error in delete  Book", error);
        res.status(500).json(errorResponse("error in delete  Book", res.statusCode));
    }
})

export default router;
