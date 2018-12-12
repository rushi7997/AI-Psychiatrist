module.exports = (db) => ({

    getOne_Sub: (cat)=>{
        // const Question = db.collection('Sub_Questions');
        return db.collection('Sub_Questions').findOne({category: cat});
    },
    getOne_Main: (cat)=>{
        // const Question = db.collection('main_questions');
        return db.collection('main_questions').findOne({category: cat});
    }
});