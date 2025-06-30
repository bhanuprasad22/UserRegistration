import multer from 'multer';


//code copied from https://github.com/expressjs/multer
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'../../piblic/temp')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

export const upload=multer({storage:storage})