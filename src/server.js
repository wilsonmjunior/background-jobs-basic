import 'dotenv/config';
import express from 'express';
import BullBoard from 'bull-board';

import Queue from './app/libs/Queue';

BullBoard.setQueues(Queue.queues.map(queue => queue.bull));

import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// access board with jobs
app.use('/admin/queues', BullBoard.UI);

app.listen(3333, () => {
  console.log('Background jobs executed')
})
