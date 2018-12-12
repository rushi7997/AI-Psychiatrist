const MongoClient =  require('mongodb').MongoClient;
(async () =>{
    const client = await MongoClient.connect('mongodb://localhost:27017');
    const db = client.db('Project');

    let ins_main = () =>{
        let myDocs = [
            {
                category: 1,
                question: "Are you currently pursuing education?",
                answer: "On this note, I would like to say maintaining our mental health,like physical health,is a continuous goal and I really think you have the perseverance and dedication to face any challenge that may come your way.Try to study/work  a little everyday don't count on last moment studies. Take help from a teacher or a friend.Don't try to do all things at once. Don't make plans for whole week make plans for only 5 or 6 days and on other days simply relax or learn something new apart from studies. Listen to music if it helps you to sleep. Take good care of yourself and focus on the things I told you today and work on it until you wish to see me next time. Good bye and take care!"
            },
            {
                category: 2,
                question: "Are you financially stable?",
                answer: "Lastly, I would like to say, for your thinking to be productive you must be optimistic and inspired. The right frame of mind is crucial to your quest for success. Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement. Never put wealth before health. Don’t make decisions on your own. Talk to all those who might be affected by it.Ask a friend for help. Encircle yourself with the people in your position. Always remember you can start from zero. Do regular workout or Yoga. And try out everything I told you and I will see you next time. Goodbye and take care!"
            },
            {
                category: 3,
                question: "Is it about you and your family?",
                answer: "On this note, I believe family is one of nature's masterpieces. This is part of what a family is about, not just love. It’s knowing that your family will be there watching out for you. Nothing else will give you that. Not money. Not fame. Not work. And you are lucky to have one. Try resolving issues. Open up to your family. Discuss the things to the people close to you in your family or your peers. Understand their importance in your life. And also, don’t let any family issues affect your health. Keep in mind whatever we have discussed today and try to imbibe that in your life and I’m sure it will bring you closer to your family. See you next time! Good bye and take care!"
            },{
                category: 4,
                question: "Facing troubles related to relationships?",
                answer: "Finally, nobody can predict the future. You just have to give your all to the relationship you're in and do your best to take care of your partner, communicate and give them every last drop of love you have. I think one of the most important things in a relationship is caring for your significant other through good times and bad. Don't Overthink either your relationship works out or not it will be for the good don't hide things ,open up your feelings,don't make fake promises ,stand by your statement and don't force them to stay. And I hope you have resolved your mental conflicts when we talk next time. Goodbye and take care!"
            },{
                category: 5,
                question: "Are you facing any health related issues?",
                answer: "I would like to say, you should be looking after your health.Exercise regularly and eat plenty.Consult a doctor asap.Try having minimum 8 hours of sleep.Don't stress out,make hoby, watch what you eat. And let me know how much you feel better when we talk next time. Till then, Goodbye and take care!"
            }
        ];
        db.collection('main_questions').insertMany(myDocs);
        console.log("Done!!");
    };
    ins_main();

    let ins = ()=> {
        let docs = [
            {
                category: 1,
                question: "What is your name?",
                pos: "Ahh, I really like your name.",
                neg: " Ahh, I really like your name."
            },
            {
                category: 2,
                question: "Where are you from?",
                pos: "You know what? I love travelling and the place you just mentioned seems like one good place to visit.",
                neg: "You know what? I love travelling and the place you just mentioned seems like one good place to visit."
            },
            {
                category: 3,
                question: "How old are you?",
                pos: "I must say you sound very mature.",
                neg: "I must say you sound very mature."
            },
            {
                category: 101,
                question: "Are you satisfied with your education thus far? Do you think you are doing what you always wanted to do?",
                pos: "Great! So good to see that you are pursuing and accomplishing your dreams.",
                neg: "If you feel you aren't doing what you want to, then you should try and identify what activity during the day fascinates you the most or else what you see around that you could do and trying looking for career options in that field and start researching as to how you can get there. If you feel you are in the right place but your efforts are not enough then you would know where you are lacking efforts and start improving there day by day slowly and gradually and trust me you would make it. "
            },
            {
                category: 102,
                question: "Has low grades been any issue for you? Can you throw some light on it?",
                pos: "Grades may be a parameter for measuring someone's intelligence. However, knowledge is something which plays the most important role. You should however, work regularly and trust yourself and there will surely be results. Try seeking help from your loved ones and your teachers , trust yourself and try narrowing down what is stopping you and work on solving that first.",
                neg: "Then you must be grateful for people who have supported you and all the hard work that has barred fruits."
            },
            {
                category: 103,
                question: "Do you feel being distracted most of time?",
                pos: "Avoid distractions. Start meditating for 10 minutes every day. And jot down a schedule and follow it regularly. It shouldn't be too tight. Just keep one where you can study well and even have leisure time. They say it takes 21 days to form a habit. Usually it takes much less time. Take a step in avoiding them and be regular with it and then you will start noticing you are becoming more focussed.",
                neg: "This strength of yours will surely do wonders for you."
            },
            {
                category: 104,
                question: "What about being stressful close to examinations? Has that been an issue?",
                pos: "Exams can be really stressful. But do know one thing, exams are all about keeping your calm. If you stress too much then you'll end up forgetting things that you prepared. Plan everything and take up tasks accordingly. Don't compromise your health for exams. Eat well, sleep well and with a fresh mind go for it.",
                neg: "Great! It's very critical to keep calm."
            },
            {
                category: 105,
                question: "Do you feel less of yourself when it comes to skills or luck? Why do you feel that way?\n",
                pos: "It's okay!! No one is born with skills to succeed. It takes perseverance and hard work. Some people take more time than others. Everyone has their own clock. Your time also shall come. Just trust your gut and keep on doing what’s best for you.",
                neg: "Being confident in oneself is a skill very less can master and I'm so glad talking to someone who is confident."
            },
            {
                category: 106,
                question: "Do you feel proud of yourself or your achievement?",
                pos: "I'm glad.",
                neg: "No issues! Every good deed you have done thus far would help you someday and that day you'll be proud of yourself."
            },
            {
                category: 201,
                question: "Are you able to make ends meet?",
                pos: " That's great. I really hope that you keep on making money that can sustain your family and I wish you keep on prospering.",
                neg: " If you have little money left at the end of the month, then I feel you should find a way to get a promotion or join a part time job. You need to find ethical ways to make more money and I know you have heard enough of this from everyone. But trust me on this, all this hustle, all this sacrifices will pay off one day and there will be brightness at the end of this tunnel."
            },
            {
                category: 202,
                question: "Do you think not liking your job is the reason why you are not able to be efficient and you ended up not making enough for yourself?",
                pos: "Then look out for doing things that you are good at on the side. Like if your friends or family members feel you are good at decorating the house or amazing at cooking then I feel it is high time you start charging for it and start making money on the side and once this business starts generating enough for you to provide your family make it your permanent job.",
                neg: "We spend around 40 years doing job and you seem fortunate and it seems that you have really worked hard to be where you are and you are loving what you are doing."
            },
            {
                category: 203,
                question: "Do you have debts?",
                pos: "Debt is something that should be dealt with as soon as possible otherwise it just drags us behind and hinders all the progress we may have made. Delay making large purchases. Concentrate on saving more. Be more consistent in completing your installments in time and do that sincerely and get free from it soon.",
                neg: "Then you are not dragged backwards due to debt and you can have freedom to shine and I know you would."
            },
            {
                category: 204,
                question: "Do you feel stressed out for little things and lose your temper and overreact?",
                pos: "I know times can be stressful and one can get grumpy. Everyone goes through this. But what I would recommend is that you keep your calm. Try meditating. Or else take deep breaths. Try talking about your stress with your loved ones. Talk about it. Don’t let the stress eat you up. Communicate. Keep your calm. And then make your decisions.",
                neg: "Stress can be a very difficult thing to handle and calming oneself becomes very crucial."
            },
            {
                category: 205,
                question: "Have you lost your appetite?",
                pos: "Issues like the financial issues can affect not just your mind but can also affect your appetite. Eating at irregular hours or reduction in food consumption due of stress is something you should be avoiding. Don’t forget that with proper nutrition you will be less exhausted and will be a lot more focussed and that would directly or indirectly help you in overcoming most of your problems.",
                neg: "And that’s the right thing to do. Food is like a fuel for all the hard work we do and one shouldn’t simply avoid it."
            },
            {
                category: 206,
                question: "Has this been affecting your sleep?",
                pos: "It is must to have sound sleep for 6-8 hours for the brain to function properly. If you would keep up with this then slowly and gradually you would have mood swings and headaches and eventually would make you less focussed. This will in-turn affect your performance. Don’t let the stress over power you. Have good sleep.",
                neg: "If it is not affecting then keep it up and don’t let your sleep hours go down."
            },
            {
                category: 301,
                question: "Are there quarrels amongst your family which has got you this disturbed?",
                pos: "A calm and more mature conversation is all what is needed. Try to create an environment where all the members would keep their egos aside and talk about what’s been affecting them and then those issues should be addressed. This would bring a better perspective to the root of the problem and then decision can be taken accordingly. Simple rule: communicate.",
                neg: "Where there is love, there will be people who will get hurt and quarrels would be the result and this is common. So, if it is not disturbing you, then it is the best thing for you."
            },
            {
                category: 302,
                question: "Do you feel comfortable while sharing your problems with your family?",
                pos: "That shows that your family is well knit and that’s how it should be.",
                neg: "Sometimes we tend to not share our problems with our family by being shy or thinking that they won’t be able to understand the issues that we go through. But in most cases, they do and they have been through the same situations in their lifetime and would in-turn be the best advisor you could have got. So, open up to them, share your problems and don’t let it eat you up."
            },
            {
                category: 303,
                question: "Do you feel this is because your family expects way too much for you to handle?",
                pos: "It is our family that makes us the person we are. They make a lot of sacrifices just that our necessities are fulfilled. In return, I feel it is not wrong thing to expect. Ultimately those are the people who have done everything in their power for betterment of us and when it comes to giving back they should be at top on your priority list.",
                neg: "Glad to know!"
            },
            {
                category: 304,
                question: "Have you been sleeping properly?",
                pos: "If it is not affecting then keep it up and don’t let your sleep hours go down.",
                neg: "It is must to have sound sleep for 6-8 hours for the brain to function properly. If you would keep up with this then slowly and gradually you would have mood swings and headaches. Don’t let your family issues affect your sleeping hours. Have good sleep."
            },
            {
                category: 305,
                question: "How is your diet?",
                pos: "Family issues can affect not just your mind but can also affect your appetite. Eating at irregular hours or reduction in food consumption is something you should be avoiding. Don’t forget that with proper nutrition you will be less exhausted and more calmer and that would directly or indirectly help you in overcoming most of your problems.",
                neg: "And that’s the right thing to do. Food is like a fuel for all the hard work we do and one shouldn’t simply avoid it. And not just physical health, food is very much essential for mental health as well."
            },
            {
                category: 401,
                question: "Did you recently go through a breakup? Do you wish to move on?",
                pos: "I would say moving on is not that easy. It is by far the toughest part. And I know that right now you aren’t able to forget anything. But you should be calm and try and embrace the reality." +
                    "You should understand what are the exact thoughts of you and your partner on getting back. If your partner isn’t willing to do so, try for a while but then just try and move on. Make new friends. Get in touch with your old friends. Talk to as many people as you can and slowly and gradually you will feel much better.",
                neg: "Alrighty then!"
            },
            {
                category: 402,
                question: "So what is it are you in a relationship,is it beautiful?",
                pos: "Relationships are beautiful. Aren’t they? One gets the companionship of the other person and they both support each other through thick and thin.",
                neg: "If you aren’t in one, it is fine. But if you are in one, no relationship has ever remained a happy relationship. Every relationship has its ups and downs. And I believe, it is during the tough days that one can prove their affection for each other by trying to understand each other."
            },
            {
                category: 403,
                question: "How do you feel about what your partner does for a living?",
                pos: "It is good to know that you are being supportive to your partner.",
                neg: "If you have any issues regarding the same I believe that you should talk about it with your partner. If you just confine those feelings to yourself then you may get irritated on pity things and this feelings will negatively impact other issues."
            },
            {
                category: 404,
                question: "How do you feel about being interrupted by your partner?",
                pos: "It is great to know that you have the understanding amongst yourselves.",
                neg: "If you feel that it is inappropriate of your partner to interrupt you, then just let them know through a mature conversation and don’t let issues like these escalate before either of you two overreact. I’m sure your partner would understand if made understood calmly."
            },
            {
                category: 405,
                question: "You feel freedom with your partner?",
                pos: "It is very important that both the individuals in the relationship have their freedom and it is great to know you have that.",
                neg: "Even in a relationship,there are some insecurities and possessiveness, however, I believe both the individuals should be feeling the freedom upto some extent. If you feel that your decisions or your choices are being suppressed then you should speak up about it before it is too late and that is something that is taken for granted for the rest of your life. If your partner is mature enough, I’m sure the person will understand."
            },
            {
                category: 501,
                question: "Have you seen any doctor?",
                pos: "Keep meeting up with the doctor on regular basis and complete all treatments sincerely.",
                neg: "That is the first thing to do. Go visit a doctor who has good diagnosis ability. Identify what you are suffering and what caused it. Take medicines as per doctor’s prescription and take some rest."
            },
            {
                category: 502,
                question: "Have you been exercising lately?",
                pos: "Keep up doing it and stick to it. Be consistent",
                neg: "Doing exercise wakes up the body and helps fight health issues. The body gets more fitter and becomes capable of fighting diseases which even medicines can’t do. Exercise regularly under a good trainer."
            },
            {
                category: 503,
                question: "Has there been any changes in weight or appetite?",
                pos: "Health related issues can affect not just your mind but can also affect your appetite. Eating at irregular hours or reduction in food consumption is something you should be avoiding. Don’t forget that with proper nutrition you will be less exhausted and less weak physically and that would directly or indirectly help you in fighting with all the diseases.",
                neg: "And that’s the right thing to do. Food is like a medicine that fights many diseases and one shouldn’t simply avoid it. And not just physical health, food is very much essential for mental health as well."
            },
            {
                category: 504,
                question: "Are you sleep deprived?",
                pos: "It is must to have sound sleep for 6-8 hours for the brain to function properly. If you would keep up with this then slowly and gradually you would have mood swings and headaches. Don’t let anything affect your sleeping hours. Have good sleep.",
                neg: "If it is not affecting then keep it up and don’t let your sleep hours go down."
            },
        ];
        db.collection('Sub_Questions').insertMany(docs);
        console.log("Done!");
    };
    // ins();

})();