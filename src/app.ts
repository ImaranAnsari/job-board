import express from 'express';
import jobRoutes from './routers/job'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("I am working");
});

app.use('/job', jobRoutes);

app.listen(3000);