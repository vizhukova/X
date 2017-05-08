var express = require('express');
var router = express.Router();
var multer  =   require('multer');

var FilesController = require('./../controllers/Files');

var urlToFiles = '/public/uploads/';

var storage =   multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, `./server${urlToFiles}`);
  },
  filename: function (req, file, callback) {
    callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  }
});
var upload = multer({ storage : storage}).array('userPhoto', 12);


router.post('/upload',function(req,res){
    upload(req,res,function(err) {
        if(err) {
            return res.status(400).send({error: "Error uploading file."});
        }

        var files = [];
        res.req.files.map(file => {
            files.push(`${urlToFiles}${file.filename}`);
        });

        FilesController.add(files).then(data => {
            res.send({files: data});
        }).catch(err => {
            var a;
        });
        // res.send({files: files});
    });
});

module.exports = router;