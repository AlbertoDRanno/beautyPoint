const JsonModel = require("../models/jsonModel");
const usersModel = new JsonModel("users");
const { validationResult } = require("express-validator");

const usersController = {
  register: (req, res) => {
    console.log("entrando al método register del userController.js");
    return res.status(200).render("users/register");
  },
  processRegister: (req, res) => {
    const resultValidation = validationResult(req);

    if (resultValidation.errors.length > 0) {
      return res.render("users/register", {
        errors: resultValidation.mapped(),
      });
    }
  },
  login: (req, res) => {
    return res.status(200).render("users/login");
  },
  profile: (req, res) => {
    return res.status(200).render("users/profile");
  },
};

module.exports = usersController;
