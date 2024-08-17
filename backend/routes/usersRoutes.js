const exp = require("express");
const route = exp.Router();
const usersData = require("../models/usersModels");

route.post("/", async (req, res) => {
  try {
    const { name, email, gender, age } = req.body;
    const AddUserData = await usersData.create({
      name: name,
      email: email,
      gender: gender,
      age: age,
    });
    res.status(201).json(AddUserData);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});

route.get("/", async (req, res) => {
  try {
    const userss = await usersData.find();
    res.status(200).json(userss);
  } catch (error) {
    console.log(error);
    res.send(400).json({ error: error.message });
  }
});

route.get("/:id", async (req, res) => {
  try {
    const singleData = await usersData.findById({_id:req.params.id})
    res.status(200).json(singleData)
  } catch (error) {
    console.log(error)
    res.send(400).json({error:error.message})
  }
})

route.delete('/:id', async (req, res) => {
  try {
    await usersData.deleteOne({_id:req.params.id})
    res.status(200).json(() => {
      {error:error.message}
    })
  } catch (error) {
    console.log(error)
    res.send(400);
  }
})

route.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body;
 try {
  const updatedUser = await usersData.findByIdAndUpdate(userId, updatedData,{new : true});
  res.status(201).json(updatedUser)
 } catch (error) {
  console.log(error)
  res.send(400).json({error:error.message})
 }
})

module.exports = route;
