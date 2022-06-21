module.exports = (sequelize, Sequelize) => {
    return sequelize.define("tweet", {
        userName: {
            type: Sequelize.STRING
        },
        userAt: {
            type: Sequelize.STRING
        },
        commentaire: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        likes : {
            type : Sequelize.INTEGER
        }
    });
};
