const adminRoutes = require("./admin");
const userRoutes = require("./user");
const path = require("path");

const constructorMethod = app => {
  app.use("/admin", adminRoutes);
  app.use("/addlaptop", adminRoutes);
  app.use("/addedlaptop", adminRoutes);
  app.use("/updatelaptop/:id", adminRoutes);
  app.use("/updatedlaptop", adminRoutes);
  app.use("/deletelaptop/:id", adminRoutes);
  app.use("/user", userRoutes);
  app.use("/contact", userRoutes);
  app.use("/register", userRoutes);
  app.use("/login", userRoutes);
  app.use("/search", userRoutes);
  app.use("/completeprofile", userRoutes);
  app.use("/profile", userRoutes);
  app.use("/demo", userRoutes);
  app.use("/user/laptops/laptopdetail", userRoutes);

  app.use("*", (req, res) => {
    res.sendStatus(404);
  });
};

module.exports = constructorMethod;
