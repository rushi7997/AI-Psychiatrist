const router = require('express').Router();
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const io = require('socket.io');


let a = 0;

module.exports = (db,io) => {

    const DBase = require('../db/func')(db);

    io.on('connection', (client) => {
        client.on('client', (abc)=> {
            try{
                a++;
                let Get_Ques = async function () {
                    if(a === 1) {
                        let doc = await DBase.getOne_Sub(2);
                        return doc.question;
                    }
                    else if(a === 2){
                        let doc = await DBase.getOne_Sub(3);
                        return doc.question;
                    }
                    else if(a === 3){
                        try{
                            let doc = await DBase.getOne_Main(1);
                            a = a+10;
                            return doc.question;
                        }catch (e) {
                            console.log("a ::",a)
                        }
                    }
                    else if(a === 15){
                        let doc = await DBase.getOne_Sub(102);
                        return doc.question;
                    }
                    else if(a === 16){
                        let doc = await DBase.getOne_Sub(103);
                        return doc.question;
                    }
                    else if(a === 17){
                        let doc = await DBase.getOne_Sub(104);
                        return doc.question;
                    }
                    else if(a === 18){
                        let doc = await DBase.getOne_Sub(105);
                        return doc.question;
                    }
                    else if(a === 19){
                        let doc = await DBase.getOne_Sub(106);
                        return doc.question;
                    }
                    else if(a === 20){
                        let doc = await DBase.getOne_Main(1);
                        return doc.answer;
                    }
                    else if(a === 26){
                        let doc = await DBase.getOne_Sub(202);
                        return doc.question;
                    }
                    else if(a === 27){
                        let doc = await DBase.getOne_Sub(203);
                        return doc.question;
                    }
                    else if(a === 28){
                        let doc = await DBase.getOne_Sub(204);
                        return doc.question;
                    }
                    else if(a === 29){
                        let doc = await DBase.getOne_Sub(205);
                        return doc.question;
                    }
                    else if(a === 30){
                        let doc = await DBase.getOne_Sub(206);
                        return doc.question;
                    }
                    else if(a === 31){
                        let doc = await DBase.getOne_Main(2);
                        return doc.answer;
                    }
                    else if(a === 37){
                        let doc = await DBase.getOne_Sub(302);
                        return doc.question;
                    }
                    else if(a === 38){
                        let doc = await DBase.getOne_Sub(303);
                        return doc.question;
                    }
                    else if(a === 39){
                        let doc = await DBase.getOne_Sub(304);
                        return doc.question;
                    }
                    else if(a === 40){
                        let doc = await DBase.getOne_Sub(305);
                        return doc.question;
                    }
                    else if(a === 41){
                        let doc = await DBase.getOne_Main(3);
                        return doc.answer;
                    }
                    else if(a === 48){
                        let doc = await DBase.getOne_Sub(402);
                        return doc.question;
                    }
                    else if(a === 49){
                        let doc = await DBase.getOne_Sub(403);
                        return doc.question;
                    }
                    else if(a === 50){
                        let doc = await DBase.getOne_Sub(404);
                        return doc.question;
                    }
                    else if(a === 51){
                        let doc = await DBase.getOne_Sub(405);
                        return doc.question;
                    }
                    else if(a === 52){
                        let doc = await DBase.getOne_Main(4);
                        return doc.answer;
                    }
                    else if(a === 59){
                        let doc = await DBase.getOne_Sub(502);
                        return doc.question;
                    }
                    else if(a === 60){
                        let doc = await DBase.getOne_Sub(503);
                        return doc.question;
                    }
                    else if(a === 61){
                        let doc = await DBase.getOne_Sub(504);
                        return doc.question;
                    }
                    else if(a === 62){
                        let doc = await DBase.getOne_Main(5);
                        return doc.answer;
                    }
                };
                let PythonScript = async function (xyz) {
                    let msg = xyz.message;
                    console.log(a);
                    const { stdout, stderr } = await exec('"python" script.py '+msg);

                    let ans;
                    if (a === 1){
                        ans = await DBase.getOne_Sub(1);
                        // console.log(ans);
                        return ans.pos;
                    }
                    else if(a === 2){
                        ans = await DBase.getOne_Sub(2);
                        return ans.pos;
                    }
                    else if(a === 3){
                        ans = await DBase.getOne_Sub(3);
                        return ans.pos;
                    }
                    else if((a>13)&&(a<21)){
                        if(a === 14){
                            if(stdout.includes('positive')){
                                ans = await DBase.getOne_Sub(101);
                                return ans.question;
                            }
                            else if(stdout.includes('negative')){
                                ans = await DBase.getOne_Main(2);
                                a = a+10;
                                return ans.question;
                            }
                        }
                        else if(a === 15){
                            ans = await DBase.getOne_Sub(101);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 16){
                            ans = await DBase.getOne_Sub(102);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 17){
                            ans = await DBase.getOne_Sub(103);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 18){
                            ans = await DBase.getOne_Sub(104);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 19){
                            ans = await DBase.getOne_Sub(105);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 20){
                            ans = await DBase.getOne_Sub(106);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                    }
                    else if((a>24)&&(a<32)){
                        if(a === 25){
                            if(stdout.includes('positive')){
                                ans = await DBase.getOne_Sub(201);
                                return ans.question;
                            }
                            else if(stdout.includes('negative')){
                                ans = await DBase.getOne_Main(3);
                                a = a+10;
                                return ans.question;
                            }
                        }
                        else if(a === 26){
                            ans = await DBase.getOne_Sub(201);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 27){
                            ans = await DBase.getOne_Sub(202);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 28){
                            ans = await DBase.getOne_Sub(203);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 29){
                            ans = await DBase.getOne_Sub(204);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 30){
                            ans = await DBase.getOne_Sub(205);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 31){
                            ans = await DBase.getOne_Sub(206);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                    }
                    else if((a>35)&&(a<42)){
                        if(a === 36){
                            if(stdout.includes('positive')){
                                ans = await DBase.getOne_Sub(301);
                                return ans.question;
                            }
                            else if(stdout.includes('negative')){
                                ans = await DBase.getOne_Main(4);
                                a = a+10;
                                return ans.question;
                            }
                        }
                        else if(a === 37){
                            ans = await DBase.getOne_Sub(301);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 38){
                            ans = await DBase.getOne_Sub(302);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 39){
                            ans = await DBase.getOne_Sub(303);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 40){
                            ans = await DBase.getOne_Sub(304);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 41){
                            ans = await DBase.getOne_Sub(305);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                    }
                    else if((a>46)&&(a<53)){
                        if(a === 47){
                            if(stdout.includes('positive')){
                                ans = await DBase.getOne_Sub(401);
                                return ans.question;
                            }
                            else if(stdout.includes('negative')){
                                ans = await DBase.getOne_Main(5);
                                a = a+10;
                                return ans.question;
                            }
                        }
                        else if(a === 48){
                            ans = await DBase.getOne_Sub(401);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 49){
                            ans = await DBase.getOne_Sub(402);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 50){
                            ans = await DBase.getOne_Sub(403);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 51){
                            ans = await DBase.getOne_Sub(404);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 52){
                            ans = await DBase.getOne_Sub(405);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                    }
                    else if((a>57)&&(a<63)){
                        if(a === 58){
                            if(stdout.includes('positive')){
                                ans = await DBase.getOne_Sub(501);
                                return ans.question;
                            }
                            else if(stdout.includes('negative')){
                                ans = "I am Done!";
                                a = a+10;
                                return ans;
                            }
                        }
                        else if(a === 59){
                            ans = await DBase.getOne_Sub(501);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 60){
                            ans = await DBase.getOne_Sub(502);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 61){
                            ans = await DBase.getOne_Sub(503);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                        else if(a === 62){
                            ans = await DBase.getOne_Sub(504);
                            if(stdout.includes('positive')) return ans.pos;
                            else if(stdout.includes('negative')) return ans.neg;
                        }
                    }
                    console.log('Error!!!');
                };
                let ansx = PythonScript(abc).then((ans)=>{
                    // console.log(ans);
                    io.emit('reply', ans);
                    let que = Get_Ques().then((question) =>{
                        if(question !== undefined){
                            io.emit('reply', question);
                        }
                    });
                });
            }catch (e) {
                console.log("Main Error");
            }
        });
    });

    return router;
};