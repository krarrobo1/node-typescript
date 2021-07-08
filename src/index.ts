import { app } from './app';
import { config } from './config';
import { connect } from 'mongoose';

const { PORT, APP_NAME, MONGO_URI } = config;


app.listen(PORT, async () => {
    connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("DB Connection ON");
        console.log(`${APP_NAME} listening on ${PORT}`);
    }).catch(err => console.log(err));
});