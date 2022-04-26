const path = require("path");

const usersController = {
  login: (req, res) => {
    res.status(200).render("users/login");
  },
  register: (req, res) => {
    res.status(200).render("users/register");
  },
};

module.exports = usersController;
