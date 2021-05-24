"use strict";

const users = {
    id: ["jisu", "개발자", "지수" ],
    pasword: ["123", "123", "12345"],
}
const output = {
    hello: (req, res) => {
        res.render("home/index");
    },
    login: (req, res) => {
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pasword = req.body.pasword;

            
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.pasword[idx] === pasword) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        })
    }, 
}

module.exports = {
    output,
    process,  
};

