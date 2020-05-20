const axios = require('axios')

const getPhoto = async (req, res) => {
  
  
  try {
    const tag = req.query.tag
    const text = req.query.text || ""
    const page = req.query.page
    const per_page = 12;
    const extras = "owner_name,tags,views,description,url_q,url_l";
   
 
    const photos = await axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=f5ff73b3b7aca7f78ffb4ae8c2a39ccb&page=${page}&per_page=${per_page}&extras=${extras}&text=${text}&tags=${tag}&format=json&nojsoncallback=1&safe_search=3&safe=3`)
    const data = photos.data.photos
    console.log(data)
        res.status(200).json({
          success: true,
          data: data
        })
  } catch (err) {
    res.status(422).json({
      success: false,
      message: err
    })
  } 
}


module.exports = {
  getPhoto
};