// must restart server whenever you make changes in next.config
module.exports = {
  env: {
    MONGO_SRV:
      "mongodb+srv://philchh:Fever0909@reactreserve-ugwjf.mongodb.net/test?retryWrites=true&w=majority",
    JWT_SECRET: "asdffdsaasdf",
    CLOUDINARY_URL:
      "https://api.cloudinary.com/v1_1/pchampagne001/image/upload",
    STRIPE_SECRET_KEY: "<insert-stripe-secret-key>"
  }
};
