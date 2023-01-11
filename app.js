import ReactDOM from 'react-dom/client'
import './index.css'
// <--------------- nested structure using React.createElement() ------------------------->
// const title = React.createElement(
//   "div",
//   {
//     class: "title",
//   },
//   [
//     React.createElement("h1", { id: "h1", key: "Large" }, "I'm a h1 tag"),
//     React.createElement("h2", { id: "h2", key: "Medium" }, "I'm a h2 tag"),
//     React.createElement("h3", { id: "h3", key: "Small" }, "I'm a h3 tag"),
//   ]
// );

// <--------------- same structure using JSX ------------------------->
// const title = (
//   <div className="title">
//     <h1 id="h1" key="Large">
//       I'm a h1 tag
//     </h1>
//     <h2 id="h2" key="Medium">
//       I'm a h2 tag
//     </h2>
//     <h3 id="h3" key="Small">
//       I'm a h3 tag
//     </h3>
//   </div>
// );

// <--------------- functional component of the same structure ------------------------->
// const Title = () => (
//   <div className="title">
//     <h1 id="h1" key="Large">
//       I'm a h1 tag
//     </h1>
//     <h2 id="h2" key="Medium">
//       I'm a h2 tag
//     </h2>
//     <h3 id="h3" key="Small">
//       I'm a h3 tag
//     </h3>
//   </div>
// );

// <--------------- Composition Of Components(component inside component) ------------------------->
// const TeacherInfo = () => {
//   return (
//     <div>
//       <h1>Akshay Saini</h1>
//       <TeacherImg>
//       </TeacherImg>
//     </div>
//   );
// };

// <--------------- Header ------------------------->

const head = <h1>Heading 1</h1> 



const datas = [
    {
        "data": {
          "type": "F",
          "id": "82387",
          "name": "Red Dragon (Chopstix)",
          "uuid": "f8fb93a9-9e43-4294-a5b5-ec8269b99ef5",
          "city": "15",
          "area": "Mahanagar",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "f6etwqizmuaxxe21vxmu",
          "cuisines": [
            "Chinese",
            "Arabian"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 30,
          "slaString": "20-30 MINS",
          "lastMileTravel": 2.4000000953674316,
          "slugs": {
            "restaurant": "red-dragon-chopstick-aliganj-aliganj",
            "city": "lucknow"
          },
          "cityState": "15",
          "address": "B-749, Sector - C, Mahanagar, Next to SBI",
          "locality": "Sector C",
          "parentId": 168369,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 1000,
                "message": ""
              }
            ],
            "totalFees": 3900,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3900",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5701679~p=1~eid=00000185-97df-3fd6-1f02-f8a5006c0109",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.4 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "82387",
            "deliveryTime": 25,
            "minDeliveryTime": 20,
            "maxDeliveryTime": 30,
            "lastMileTravel": 2.4000000953674316,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.8",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic",
        "crouton": {
          "type": "SPECIAL",
          "metaInfo": {
            "bgColor": "#282C3F",
            "icon": "surge_listing_piuzrv",
            "textColor": "#ffffff",
            "title": "High Demand",
            "message": "Surge fee of Rs ₹10 may be applicable"
          }
        }
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "453893",
          "name": "Birinj Biryan",
          "uuid": "de4f92c0-e638-420c-b3d5-fd52071cc458",
          "city": "15",
          "area": "Aliganj",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "hpsfx3uygffggkfctggq",
          "cuisines": [
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 33600,
          "costForTwoString": "₹336 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 0.5,
          "slugs": {
            "restaurant": "birinj-biryan-aliganj-aliganj",
            "city": "lucknow"
          },
          "cityState": "15",
          "address": "7, 377, Vikas Nagar, Lucknow, Uttar Pradesh 226022, India",
          "locality": "Vikas Nagar",
          "parentId": 272756,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "20% off",
            "shortDescriptionList": [
              {
                "meta": "20% off | Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "20% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "20% off up to ₹50 | Use code SWIGGYIT",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 2500,
                "message": ""
              }
            ],
            "totalFees": 5400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "453893",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 0.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic",
        "crouton": {
          "type": "SPECIAL",
          "metaInfo": {
            "bgColor": "#282C3F",
            "icon": "surge_listing_piuzrv",
            "textColor": "#ffffff",
            "title": "High Demand",
            "message": "Surge fee of Rs ₹25 may be applicable"
          }
        }
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "405722",
          "name": "Pizza Cave",
          "uuid": "83f201eb-e833-4788-ba76-c5b0e3025511",
          "city": "15",
          "area": "Tedhi Puliya Chauraha",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "h4kjpulqy11stizobkzb",
          "cuisines": [
            "Pizzas",
            "Italian"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 26,
          "minDeliveryTime": 26,
          "maxDeliveryTime": 26,
          "slaString": "26 MINS",
          "lastMileTravel": 2.299999952316284,
          "slugs": {
            "restaurant": "pizza-cave-aliganj-aliganj",
            "city": "lucknow"
          },
          "cityState": "15",
          "address": "Zaigam Alam, Awadh Plaza, Tedhi Puliya  Chauraha, Kursi Road, JANKIPURAM-Ist &  IInd, Nagar Nigam Food Safety Zone-9,  Lucknow, Uttar Pradesh - 226022",
          "locality": "Tedhi Puliya Chauraha",
          "parentId": 8184,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "30% off",
            "shortDescriptionList": [
              {
                "meta": "30% off | Use JUMBO",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off up to ₹150 on orders above ₹450 | Use code JUMBO",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "30% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use JUMBO",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off up to ₹150 on orders above ₹450 | Use code JUMBO",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 2500,
                "message": ""
              }
            ],
            "totalFees": 5400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "405722",
            "deliveryTime": 26,
            "minDeliveryTime": 26,
            "maxDeliveryTime": 26,
            "lastMileTravel": 2.299999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic",
        "crouton": {
          "type": "SPECIAL",
          "metaInfo": {
            "bgColor": "#282C3F",
            "icon": "surge_listing_piuzrv",
            "textColor": "#ffffff",
            "title": "High Demand",
            "message": "Surge fee of Rs ₹25 may be applicable"
          }
        }
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "609208",
          "name": "STREET PANDA",
          "uuid": "bb901aa6-169a-4226-824d-e56cb049ce48",
          "city": "15",
          "area": "Aliganj",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "ljlpzrifekzxbyeafnys",
          "cuisines": [
            "Chinese",
            "Burgers"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 1.2000000476837158,
          "slugs": {
            "restaurant": "street-panda-aliganj-aliganj",
            "city": "lucknow"
          },
          "cityState": "15",
          "address": "529/KHA/123, KASHIPURI, KHURRAM NAGAR ROAD , Lucknow",
          "locality": "Kashipuri",
          "parentId": 331014,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "distance",
                "fee": 2900,
                "message": ""
              },
              {
                "name": "special",
                "fee": 2500,
                "message": ""
              }
            ],
            "totalFees": 5400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5546480~p=4~eid=00000185-97df-3fd6-1f02-f8a6006c044e",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "609208",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 1.2000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic",
        "crouton": {
          "type": "SPECIAL",
          "metaInfo": {
            "bgColor": "#282C3F",
            "icon": "surge_listing_piuzrv",
            "textColor": "#ffffff",
            "title": "High Demand",
            "message": "Surge fee of Rs ₹25 may be applicable"
          }
        }
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "485706",
          "name": "The Hungry Panda House",
          "uuid": "e5d2109c-821f-4e15-8b49-bf60c13595bd",
          "city": "15",
          "area": "Kashipuri Khurram Nagar",
          "totalRatingsString": "50+ ratings",
          "cloudinaryImageId": "jdhj5soylpaoulslg2c9",
          "cuisines": [
            "North Indian",
            "Snacks",
            "South Indian",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 10000,
          "costForTwoString": "₹100 FOR TWO",
          "deliveryTime": 30,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 30,
          "slaString": "30 MINS",
          "lastMileTravel": 1.2000000476837158,
          "slugs": {
            "restaurant": "the-hungry-panda-house-mahanagar-mahanagar",
            "city": "lucknow"
          },
          "cityState": "15",
          "address": "529/123 kashipuri khurram nagar vikas  nagar",
          "locality": "Kashipuri Khurram Nagar",
          "parentId": 291553,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 2500,
                "message": ""
              }
            ],
            "totalFees": 5400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "485706",
            "deliveryTime": 30,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 30,
            "lastMileTravel": 1.2000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "2.2",
          "totalRatings": 50,
          "new": false
        },
        "subtype": "basic",
        "crouton": {
          "type": "SPECIAL",
          "metaInfo": {
            "bgColor": "#282C3F",
            "icon": "surge_listing_piuzrv",
            "textColor": "#ffffff",
            "title": "High Demand",
            "message": "Surge fee of Rs ₹25 may be applicable"
          }
        }
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "609334",
          "name": "DELICIOUS PANDA",
          "uuid": "7e6b681b-b264-401b-869d-acb90d89d133",
          "city": "15",
          "area": "Aliganj",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "qq51qs1nkt1tmdhsrjid",
          "cuisines": [
            "Chinese",
            "Burgers",
            "Snacks"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "slaString": "27 MINS",
          "lastMileTravel": 1.2000000476837158,
          "slugs": {
            "restaurant": "delicious-panda-aliganj-aliganj",
            "city": "lucknow"
          },
          "cityState": "15",
          "address": "529/KHA/123, KASHIPURI, KHURRAM NAGAR ROAD , Lucknow",
          "locality": "Kashipuri",
          "parentId": 362464,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "60% off",
            "shortDescriptionList": [
              {
                "meta": "60% off | Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "60% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "60% off up to ₹120 | Use code TRYNEW",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 2500,
                "message": ""
              }
            ],
            "totalFees": 5400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "1.2 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "609334",
            "deliveryTime": 27,
            "minDeliveryTime": 27,
            "maxDeliveryTime": 27,
            "lastMileTravel": 1.2000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic",
        "crouton": {
          "type": "SPECIAL",
          "metaInfo": {
            "bgColor": "#282C3F",
            "icon": "surge_listing_piuzrv",
            "textColor": "#ffffff",
            "title": "High Demand",
            "message": "Surge fee of Rs ₹25 may be applicable"
          }
        }
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "494126",
          "name": "Fauji Dhaba - Hygiene & Trusted 24X7",
          "uuid": "e2538b20-63cd-45fa-b472-dbea0431b810",
          "city": "15",
          "area": "Aliganj",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "kfdvuw4wwtkftcg5hrn6",
          "cuisines": [
            "North Indian",
            "Chinese",
            "South Indian",
            "Snacks",
            "Desserts"
          ],
          "tags": [
            
          ],
          "costForTwo": 20000,
          "costForTwoString": "₹200 FOR TWO",
          "deliveryTime": 34,
          "minDeliveryTime": 34,
          "maxDeliveryTime": 34,
          "slaString": "34 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "fauji-dhaba---hygiene-&-trusted-24x7-aliganj-aliganj",
            "city": "lucknow"
          },
          "cityState": "15",
          "address": "PLOTNO.B2-358 SECTOR A ENGINEERING COLLEGE CHAURAHA ALIGANJ SITAPUR ROAD LUCKNOW  226021",
          "locality": "Engineering College Chauraha",
          "parentId": 296952,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "30% off",
            "shortDescriptionList": [
              {
                "meta": "30% off | Use JUMBO",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off up to ₹150 on orders above ₹450 | Use code JUMBO",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "30% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use JUMBO",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "30% off up to ₹150 on orders above ₹450 | Use code JUMBO",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 3500,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 2500,
                "message": ""
              }
            ],
            "totalFees": 6000,
            "message": "",
            "title": "Delivery Charge",
            "amount": "6000",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5676300~p=7~eid=00000185-97df-3fd6-1f02-f8a7006c0772",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "494126",
            "deliveryTime": 34,
            "minDeliveryTime": 34,
            "maxDeliveryTime": 34,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.4",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic",
        "crouton": {
          "type": "SPECIAL",
          "metaInfo": {
            "bgColor": "#282C3F",
            "icon": "surge_listing_piuzrv",
            "textColor": "#ffffff",
            "title": "High Demand",
            "message": "Surge fee of Rs ₹25 may be applicable"
          }
        }
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "482285",
          "name": "Panorama Terrace",
          "uuid": "6f85ae06-03b8-400d-b2e7-232a4c6b85e4",
          "city": "15",
          "area": "Jankipuram",
          "totalRatingsString": "Too Few Ratings",
          "cloudinaryImageId": "irt01ft0paf7wtaote23",
          "cuisines": [
            "North Indian",
            "Indian",
            "Chinese",
            "Tandoor",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 30000,
          "costForTwoString": "₹300 FOR TWO",
          "deliveryTime": 33,
          "minDeliveryTime": 33,
          "maxDeliveryTime": 33,
          "slaString": "33 MINS",
          "lastMileTravel": 0.699999988079071,
          "slugs": {
            "restaurant": "panorama-terrace-jankipuram-jankipuram",
            "city": "lucknow"
          },
          "cityState": "15",
          "address": "4TH FLOOR R S PLAZA RING ROAD,",
          "locality": "Vikas Nagar",
          "parentId": 289630,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 2900,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 2500,
                "message": ""
              }
            ],
            "totalFees": 5400,
            "message": "",
            "title": "Delivery Charge",
            "amount": "5400",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "0.6 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "482285",
            "deliveryTime": 33,
            "minDeliveryTime": 33,
            "maxDeliveryTime": 33,
            "lastMileTravel": 0.699999988079071,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "--",
          "totalRatings": 0,
          "new": false
        },
        "subtype": "basic",
        "crouton": {
          "type": "SPECIAL",
          "metaInfo": {
            "bgColor": "#282C3F",
            "icon": "surge_listing_piuzrv",
            "textColor": "#ffffff",
            "title": "High Demand",
            "message": "Surge fee of Rs ₹25 may be applicable"
          }
        }
      }
]

const Title = () => {
    return (
    <>
    <img className="img" src="https://www.tkom.it/wp-content/uploads/2015/02/Villa-Food-600x6001.jpg" alt="" />
    </>
    )
}


const   Header = () => { //functional jsx component. React is all about componenets
    return (
        <div className="main_header">
        <Title></Title>
        <div className="header_elements">
            <ul>
                <li key='1'>Home</li>
                <li key='2'>About</li>
                <li key='3'>Conatct</li>
                <li key='4'>Cart</li>
            </ul>
        </div>
        </div>
    )
}
const Restaurant = ({name,cloudinaryImageId,cuisines,costForTwoString,avgRating}) => {
    return (
        <div className="body_items">
            <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`}  alt=""/>
            <div className='inner_items'>
            <h3>{name }</h3>
            <h4 className='cuisines'>{cuisines.join(",")}</h4>
            </div>
            <div className='price'>
            <h4 style={{backgroundColor:"orange",padding:"5px"}}>{avgRating}</h4>
            <h4>{costForTwoString}</h4>
            </div>
        </div>
        
    )
}
const Body = () => {
   return (
    <div class="dinner_list">
    {
        datas.map((info) => <Restaurant {... info.data}/>)
    }
    </div>
   )
}

const Apps = () => (
    <>
  <Header/>
  <Body/>
  </>
)


const root = ReactDOM.createRoot(document.getElementById("root"))//React starts from whichever element has id root
root.render(<Apps/>)