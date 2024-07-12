const express = require('express');
const User = require('../models/User');

const createUser = async(req, res)=>{
   const user = await new User(req.body);
    const userdata = await user.save();

    res.send({
        userdata
    })

};
const getUser = async(req, res)=>{
    const userdata = await User.find();
    res.send({
        userdata
    })
}
const deleteUser = async(req, res)=>{
    const id = req.params.id;
    const isdeleted = await User.findByIdAndDelete(id);
    if (isdeleted){
        res.send({
            message:`User id ${id} is deleted successfully`
        })
    }
}


module.exports = {
    createUser,
    getUser,
    deleteUser
  };