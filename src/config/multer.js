import multer from 'multer';
import multers3 from 'multer-s3';
import aws from 'aws-sdk';
import path from 'path';

// aws.config.update({
//     accessKeyId:"AKIA2Z5YFWMLL3LIHP5H",
//         secretAccessKey:"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"
// })
const s3 = new aws.S3({
    accessKeyId:"AKIA2Z5YFWMLL3LIHP5H",
        secretAccessKey:"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"
});
const uploads3 = multer({
    storage: multers3({
        s3: s3,
        bucket: "practice-purpose",
        acl:"public-read",
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
          },      
        key: function(req, file, cb){
            cb(null, file.originalname);
        }
    })
})
// const storage = multer.diskStorage({
//     destination: './uploads/images',
//     filename: (req, file, cb) => {
//         return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)

//     }
// });
// const upload = multer({ storage: storage });

export default uploads3;