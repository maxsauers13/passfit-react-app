module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "Lville2019",
    DB: "passfit_db",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };