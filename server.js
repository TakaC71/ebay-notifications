const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// GETリクエストを受け取るエンドポイント
app.get('/ebay-notifications', (req, res) => {
    const challengeCode = req.query.challenge_code;
    if (challengeCode) {
        console.log('Received challenge code:', challengeCode);
        res.status(200).send({
            challengeResponse: challengeCode,
        });
    } else {
        res.status(400).send({ error: 'No challenge code received' });
    }
});

// POSTリクエストを受け取るエンドポイント
app.post('/ebay-notifications', (req, res) => {
    const data = req.body;
    console.log('Notification received:', JSON.stringify(data));  // リクエスト内容を表示
    res.status(200).send({ message: 'Notification processed' });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
