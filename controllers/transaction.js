const fetch = require("node-fetch");
const config = require('config')
exports.postTransactions = async (req, res) => {
    try {
        const LOGIN = config.get('login');
        const PASSWORD = config.get('pass');
        const APIKEY = config.get('apikey');
        const data = await req.body;
        const TEXT = data.message;
        const PHONE = data.phone
        console.log(data)
        if (data.phone && data.message) {
            await fetch(
                `https://sms.ru/sms/send?api_id=${APIKEY}&to[380934281256]=${TEXT}&json=1`, {
                    method: 'POST',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    referrerPolicy: 'no-referrer',
                    body: JSON.stringify(data)
                })
                .then(res => {
                    if (res.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    res.status(200).json({
                        success: true,
                        data: data
                    });
                })
        } else {
            res.status(400).json({
                message: 'Data should be not a Null',
                success: false
            })
        }

    } catch (e) {
        res.status(500).json({
            message: `Error ${e.message}`,
            success: false
        })
    }
};

exports.getTransactions = async (req, res) => {
    try {
        res.status(200).json('Get all smsService');

    } catch (e) {
        res.status(500).json({message: `Error ${e.message}`})
    }

};
