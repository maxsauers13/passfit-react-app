module.exports = (sequelize, Sequelize) => {
    const Passfit = sequelize.define("passfit", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Passfit;
  };
  