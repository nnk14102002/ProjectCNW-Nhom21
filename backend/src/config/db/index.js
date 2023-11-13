const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            'mongodb+srv://admin:DH5Sbr6LgUkXTwum@cluster0.58pn7uy.mongodb.net/?retryWrites=true&w=majority',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            },
        );
        console.log('Success');
    } catch (error) {
        console.log('Failed');
    }
}

module.exports = { connect };
