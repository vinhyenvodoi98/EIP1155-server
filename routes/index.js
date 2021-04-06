const { token } = require('morgan');

const router = require('express').Router();
// const helper = require('../helpers/blockchain');

const erc1155 = {
  // "0x71ae1bbf286A1106829338680d3867fA9D0f531B":{
    "0000000000000000000000000000000000000000000000000000000000000001":"https://gateway.ipfs.io/ipfs/QmQ7LUrbJSDzieXiED8NWAFMQgd2SSbiV7sHkineP7nCeN",
    "0000000000000000000000000000000000000000000000000000000000000002":"https://gateway.ipfs.io/ipfs/QmV91omB61Y4NfM1JHf4EGD8tXYPhbKptCvfVByP3PEFXd",
  // }
}

// router.get('/:addressToken/:id', async (req, res) => {
//   let { addressToken, id } = req.params;
//   try {
//     res.status(200).json(erc1155[addressToken][id]);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

router.get('/:id.json', async (req, res) => {
  let { id } = req.params;
  try {
    res.status(200).json(erc1155[id]);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;