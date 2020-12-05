const mongoose = require('mongoose')

// mongodb://127.0.0.1:27017/
mongoose.connect('mongodb+srv://user:seachipsibass@cluster0.ikrlc.mongodb.net/quicktrace?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})
