import User from "../models/userModel.js"
import { STATUS_CODES } from "http"
import { StatusCodes } from "http-status-codes"
import jwt from "jsonwebtoken"

export const signUp = async(req, res) => {
    try {
        const {name, email, password} = req.body

        if(!name || !email || !password) {
          return res.status(StatusCodes.BAD_REQUEST).
          json({
            success: false,
            message:'Please provide name, email and password'
          })
        }

        const newUser = await User.create(req.body)
        const token = jwt.sign({id:newUser._id}, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN
        } )
        res.status(StatusCodes.CREATED).
        json({
            success: true,
            token,
            data:{
                newUser
            },
            message: 'newUser created successfully'
        })

    } catch(err){
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).
      json({
        success: false,
        message:err.message
      })
    }
}

export const login = async(req, res) => {
    try {
      const {email, password} = req.body
      if(!email || !password) {
        res.status(StatusCodes.BAD_REQUEST).
        json({
          success: false,
          message: 'Please provide email and password'
        })
      }
       const user = await User.findOne({email:email}).select(+password)
       if(!user || (!await user.validPassword(password, user.password))) {
        res.status(StatusCodes.UNAUTHORIZED).
        json({
          success: false,
          message: 'Invalid email or password'
        })
       }
       const token = jwt.sign({email}, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
       })
       res.status(StatusCodes.ACCEPTED).
       json({
        success: true,
        token,
        user
       })

    }catch(err) {
       res.status(StatusCodes.INTERNAL_SERVER_ERROR).
      json({
        success: false,
        message:err.message
      })
    }
}

