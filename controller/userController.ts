import userModel from "../model/BookModel";
import express, { Request, Response } from "express";

//Get All user
export const getAlluser = async (req: Request, res: Response) => {
  try {
    const getUser = await userModel.find();
    return res.json(200).json({
      message: `Gotten user ${getUser.length}`,
      data: getUser,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An error occurred while getting all user",
    });
  }
};

//make search

export const searchUser = async (req: Request, res: Response) => {
  try {
    const search = await userModel.find(req.query).sort({ userName: 1 });

    return res.status(200).json({
      message: "Searched data gotten",
      data: search,
    });
  } catch (error) {
    return res.status(404).json({
      message: "An error occurred while serarching all user",
    });
  }
};
