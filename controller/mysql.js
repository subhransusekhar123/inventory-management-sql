const product = require("../model/dbconnect");
const postdata = async (req, res) => {
  console.log(req.body,"req.body");
  try {
    if (product) {
      const Ram = await product.create({
        name:req.body.name,
        quantity:req.body.quantity,
        price:req.body.price,
        image:req.body.image,
        supplier:req.body.supplier
      });
      res.send(Ram);
    } else {
      res.send("problm with connected");
    }
  } catch (error) {
    console.log("appjs err", error);
  }
};

const getdata = async (req, res) => {
  try {
    const userget = await product.findAll();
    res.send(userget);
  } catch (error) {
    res.send("err");
  }
};

const updatedata = async (req, res) => {
  // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;
  let id = req.params.id;

  try {
    await product.update(
      req.body,
      {
        where: {
          id: id,
        },
      }
    );
    res.send("data updated");
  } catch (error) {
    res.send("err");
  }
};
const deletedata = async (req, res) => {
  try {
    // Delete everyone named "Jane"
    const id = req.params.id;
    await product.destroy({
      where: {
        id: id,
      },
    });
    res.send("data deleted");
  } catch (error) {
    console.log("err");
  }
};

module.exports = {
  postdata,
  getdata,
  updatedata,
  deletedata,
};
