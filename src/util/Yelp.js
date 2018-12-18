const apiKey = 'HgQptgOhnoW4_DiBAIl_PZKjTZ1KSCavafqyseNfxCokbz9lWBg_y56f9qhk-w5sCcXQUbZsd2E3xDQ_-VKy07J3xvG6YWuRs6g7tngWv_DdydQZ-QpNEuYnjDsYXHYx';

const Yelp = {
     searchYelp (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
            },
        }).then(response => {
            return response.json();
                }).then(jsonResponse => {
                    if (jsonResponse.businesses) {
                        return jsonResponse.businesses.map(business => {
                            return {
                                id: business.id,
                                imageSrc: business.image_url,
                                name: business.name,
                                address: business.location.address1,
                                city: business.location.city,
                                state: business.location.state,
                                zipCode: business.location.zip_code,
                                category: business.categories.title,
                                rating: business.rating,
                                reviewCount: business.review_count,
                            }
                    })
                }
            })
        }
}

export default Yelp;