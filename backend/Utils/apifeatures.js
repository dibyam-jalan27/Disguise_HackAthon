class ApiFeatures {
    constructor(query, queryStr) {
      this.query = query;
      this.queryStr = queryStr;
    }
  
    search() {
      const keyword = this.queryStr.keyword
        ? {
            name: {
              $regex: this.queryStr.keyword,
              $options: "i",
            },
          }
        : {};
  
      this.query = this.query.find({ ...keyword });
      //console.log(keyword);
      return this;
    }

    paginate() {
        const page = parseInt(this.queryStr.page, 10) || 1;
        const limit = 8; // Set the limit to 5 cities per page
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
    
        this.query = this.query.skip(startIndex).limit(limit);
    
        return this;
      }
}
    module.exports = ApiFeatures;