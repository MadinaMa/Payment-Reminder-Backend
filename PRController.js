const PRModel = require('./PRModel');

module.exports.getPR = async (req, res) => {
    const myPR = await PRModel.find();
    res.send(myPR)
}

module.exports.savePRs = async (req,res) => {
    const { title } = req.body;
    PRModel.create ({title})
    .then ((data) => {console.log('Payment is added')
res.send (data)
})
}

module.exports.editPR = async(req,res) => {
    const { _id, title } =req.body;
    PRModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('Payment is edited'))
  }

 module.exports.deletePR = async(req,res) => {
    const {_id} = req.body
    PRModel.findByIdAndDelete(_id)
    .then(() => res.send('Payment is deleted'))
 }





