Example Comparison API Call:

{
  "Comps:comps": {
    "-xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
    "-xmlns:Comps": "http://www.zillow.com/static/xsd/Comps.xsd",
    "-xsi:schemaLocation": "http://www.zillow.com/static/xsd/Comps.xsd https://www.zillowstatic.com/vstatic/6ce354c/static/xsd/Comps.xsd",
    "request": {
      "zpid": "8285234",
      "count": "25"
    },
    "message": {
      "text": "Request successfully processed",
      "code": "0"
    },
    "response": {
      "properties": {
        "principal": {
          "zpid": "8285234",
          "links": {
            "homedetails": "
https://www.zillow.com/homedetails/548-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285234_zpid/
",
            "graphsanddata": "
http://www.zillow.com/homedetails/548-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285234_zpid/#charts-and-data
",
            "mapthishome": "http://www.zillow.com/homes/8285234_zpid/",
            "comparables": "http://www.zillow.com/homes/comps/8285234_zpid/"
          },
          "address": {
            "street": "548 W Mountain Sage Dr",
            "zipcode": "85045",
            "city": "Phoenix",
            "state": "AZ",
            "latitude": "33.309275",
            "longitude": "-112.081302"
          },
          "zestimate": {
            "amount": {
              "-currency": "USD",
              "#text": "285621"
            },
            "last-updated": "01/08/2018",
            "oneWeekChange": { "-deprecated": "true" },
            "valueChange": {
              "-duration": "30",
              "-currency": "USD",
              "#text": "476"
            },
            "valuationRange": {
              "low": {
                "-currency": "USD",
                "#text": "271340"
              },
              "high": {
                "-currency": "USD",
                "#text": "299902"
              }
            },
            "percentile": "27"
          },
          "localRealEstate": {
            "region": {
              "-name": "Ahwatukee Foothills",
              "-id": "267900",
              "-type": "neighborhood",
              "zindexValue": "290,700",
              "links": {
                "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
              }
            }
          }
        },
        "comparables": {
          "comp": [
            {
              "-score": "7.0",
              "zpid": "8134268",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/15633-S-5th-Dr-Phoenix-AZ-85045/8134268_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/15633-S-5th-Dr-Phoenix-AZ-85045/8134268_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8134268_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8134268_zpid/"
              },
              "address": {
                "street": "15633 S 5th Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.304049",
                "longitude": "-112.080542"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "386482"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-1492"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "367158"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "405806"
                  }
                },
                "percentile": "57"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "4.0",
              "zpid": "8134265",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/15634-S-5th-Dr-Phoenix-AZ-85045/8134265_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/15634-S-5th-Dr-Phoenix-AZ-85045/8134265_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8134265_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8134265_zpid/"
              },
              "address": {
                "street": "15634 S 5th Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.303758",
                "longitude": "-112.080988"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "353030"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "1073"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "335379"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "377742"
                  }
                },
                "percentile": "50"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "7.0",
              "zpid": "8134264",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/15628-S-5th-Dr-Phoenix-AZ-85045/8134264_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/15628-S-5th-Dr-Phoenix-AZ-85045/8134264_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8134264_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8134264_zpid/"
              },
              "address": {
                "street": "15628 S 5th Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.303927",
                "longitude": "-112.081111"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "352591"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-821"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "334961"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "370221"
                  }
                },
                "percentile": "50"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "8.0",
              "zpid": "8130801",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/1310-W-Thunderhill-Dr-Phoenix-AZ-85045/8130801_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/1310-W-Thunderhill-Dr-Phoenix-AZ-85045/8130801_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8130801_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8130801_zpid/"
              },
              "address": {
                "street": "1310 W Thunderhill Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.304457",
                "longitude": "-112.089062"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "346219"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-3636"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "328908"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "373917"
                  }
                },
                "percentile": "48"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "8.0",
              "zpid": "8130633",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/102-E-South-Fork-Dr-Phoenix-AZ-85048/8130633_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/102-E-South-Fork-Dr-Phoenix-AZ-85048/8130633_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8130633_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8130633_zpid/"
              },
              "address": {
                "street": "102 E South Fork Dr",
                "zipcode": "85048",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.304693",
                "longitude": "-112.074625"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "379275"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-1680"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "360311"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "398239"
                  }
                },
                "percentile": "69"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "6.0",
              "zpid": "8285326",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/319-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285326_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/319-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285326_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285326_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285326_zpid/"
              },
              "address": {
                "street": "319 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "PHOENIX",
                "state": "AZ",
                "latitude": "33.310784",
                "longitude": "-112.07854"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "241076"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-1084"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "229022"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "253130"
                  }
                },
                "percentile": "11"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Gilbert Heights",
                  "-id": "417676",
                  "-type": "neighborhood",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Gilbert/Gilbert-Heights/r_417676/
",
                    "forSaleByOwner": "
http://www.zillow.com/gilbert-heights-gilbert-az/fsbo/
",
                    "forSale": "http://www.zillow.com/gilbert-heights-gilbert-az/"
                  }
                }
              }
            },
            {
              "-score": "8.0",
              "zpid": "8134549",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/16204-S-1st-St-Phoenix-AZ-85048/8134549_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/16204-S-1st-St-Phoenix-AZ-85048/8134549_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8134549_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8134549_zpid/"
              },
              "address": {
                "street": "16204 S 1st St",
                "zipcode": "85048",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.300742",
                "longitude": "-112.078999"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "394386"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-841"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "374667"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "414105"
                  }
                },
                "percentile": "72"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "11.0",
              "zpid": "8134324",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/15820-S-7th-Dr-Phoenix-AZ-85045/8134324_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/15820-S-7th-Dr-Phoenix-AZ-85045/8134324_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8134324_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8134324_zpid/"
              },
              "address": {
                "street": "15820 S 7th Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.302445",
                "longitude": "-112.08522"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "473087"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-9046"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "425778"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "496741"
                  }
                },
                "percentile": "77"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "5.0",
              "zpid": "8285261",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/312-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285261_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/312-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285261_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285261_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285261_zpid/"
              },
              "address": {
                "street": "312 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.311101",
                "longitude": "-112.078449"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "247219"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-3900"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "234858"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "259580"
                  }
                },
                "percentile": "14"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "7.0",
              "zpid": "8130807",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/15415-S-13th-Ave-Phoenix-AZ-85045/8130807_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/15415-S-13th-Ave-Phoenix-AZ-85045/8130807_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8130807_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8130807_zpid/"
              },
              "address": {
                "street": "15415 S 13th Ave",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.303686",
                "longitude": "-112.088314"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "327165"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "629"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "310807"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "343523"
                  }
                },
                "percentile": "41"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "5.0",
              "zpid": "8285338",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/425-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285338_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/425-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285338_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285338_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285338_zpid/"
              },
              "address": {
                "street": "425 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.310218",
                "longitude": "-112.07952"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "252907"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-159"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "240262"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "265552"
                  }
                },
                "percentile": "17"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "5.0",
              "zpid": "82828324",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/15550-S-5th-Ave-UNIT-106-Phoenix-AZ-85045/82828324_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/15550-S-5th-Ave-UNIT-106-Phoenix-AZ-85045/82828324_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/82828324_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/82828324_zpid/"
              },
              "address": {
                "street": "15550 S 5th Ave UNIT 106",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.305824",
                "longitude": "-112.082453"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "270144"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-2036"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "256637"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "283651"
                  }
                },
                "percentile": "23"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "4.0",
              "zpid": "50200955",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/524-W-Mountain-Sage-Dr-Phoenix-AZ-85045/50200955_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/524-W-Mountain-Sage-Dr-Phoenix-AZ-85045/50200955_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/50200955_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/50200955_zpid/"
              },
              "address": {
                "street": "524 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.30986",
                "longitude": "-112.080727"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "247397"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-943"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "235027"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "259767"
                  }
                },
                "percentile": "14"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "10.0",
              "zpid": "8134406",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/632-W-Mountain-Vista-Dr-Phoenix-AZ-85045/8134406_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/632-W-Mountain-Vista-Dr-Phoenix-AZ-85045/8134406_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8134406_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8134406_zpid/"
              },
              "address": {
                "street": "632 W Mountain Vista Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.302405",
                "longitude": "-112.082489"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "424544"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "8026"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "403317"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "445771"
                  }
                },
                "percentile": "65"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "4.0",
              "zpid": "8285350",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/511-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285350_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/511-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285350_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285350_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285350_zpid/"
              },
              "address": {
                "street": "511 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.309527",
                "longitude": "-112.080302"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "255406"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "223"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "242636"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "268176"
                  }
                },
                "percentile": "18"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "3.0",
              "zpid": "8285328",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/327-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285328_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/327-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285328_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285328_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285328_zpid/"
              },
              "address": {
                "street": "327 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.310549",
                "longitude": "-112.078616"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "325977"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-832"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "309678"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "342276"
                  }
                },
                "percentile": "40"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "2.0",
              "zpid": "8285319",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/233-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285319_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/233-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285319_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285319_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285319_zpid/"
              },
              "address": {
                "street": "233 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.310738",
                "longitude": "-112.07796"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "294593"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-1207"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "279863"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "309323"
                  }
                },
                "percentile": "29"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "3.0",
              "zpid": "8285313",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/217-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285313_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/217-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285313_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285313_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285313_zpid/"
              },
              "address": {
                "street": "217 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.310845",
                "longitude": "-112.077447"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "290988"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-502"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "276439"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "305537"
                  }
                },
                "percentile": "29"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "1.0",
              "zpid": "50200958",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/438-W-Mountain-Sage-Dr-Phoenix-AZ-85045/50200958_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/438-W-Mountain-Sage-Dr-Phoenix-AZ-85045/50200958_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/50200958_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/50200958_zpid/"
              },
              "address": {
                "street": "438 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.310353",
                "longitude": "-112.080129"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "291851"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "322"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "277258"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "306444"
                  }
                },
                "percentile": "29"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "4.0",
              "zpid": "8285292",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/43-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285292_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/43-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285292_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285292_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285292_zpid/"
              },
              "address": {
                "street": "43 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.311235",
                "longitude": "-112.075587"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "309915"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-3380"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "294419"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "325411"
                  }
                },
                "percentile": "33"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "2.0",
              "zpid": "8285290",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/30-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285290_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/30-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285290_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285290_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285290_zpid/"
              },
              "address": {
                "street": "30 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.311926",
                "longitude": "-112.075471"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "299890"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-2523"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "284896"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "314884"
                  }
                },
                "percentile": "31"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "2.0",
              "zpid": "8285277",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/204-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285277_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/204-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285277_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285277_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285277_zpid/"
              },
              "address": {
                "street": "204 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.311568",
                "longitude": "-112.077205"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "309829"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-980"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "294338"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "325320"
                  }
                },
                "percentile": "33"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "2.0",
              "zpid": "8285256",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/328-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285256_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/328-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285256_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285256_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285256_zpid/"
              },
              "address": {
                "street": "328 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.311082",
                "longitude": "-112.079068"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "285595"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "702"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "271315"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "299875"
                  }
                },
                "percentile": "27"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "2.0",
              "zpid": "8285250",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/410-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285250_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/410-W-Mountain-Sage-Dr-Phoenix-AZ-85045/8285250_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285250_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285250_zpid/"
              },
              "address": {
                "street": "410 W Mountain Sage Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.310823",
                "longitude": "-112.079539"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "296479"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-2304"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "281655"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "311303"
                  }
                },
                "percentile": "30"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            },
            {
              "-score": "11.0",
              "zpid": "8285220",
              "links": {
                "homedetails": "
https://www.zillow.com/homedetails/15435-S-4th-Dr-Phoenix-AZ-85045/8285220_zpid/
",
                "graphsanddata": "
http://www.zillow.com/homedetails/15435-S-4th-Dr-Phoenix-AZ-85045/8285220_zpid/#charts-and-data
",
                "mapthishome": "http://www.zillow.com/homes/8285220_zpid/",
                "comparables": "http://www.zillow.com/homes/comps/8285220_zpid/"
              },
              "address": {
                "street": "15435 S 4th Dr",
                "zipcode": "85045",
                "city": "Phoenix",
                "state": "AZ",
                "latitude": "33.305995",
                "longitude": "-112.080531"
              },
              "zestimate": {
                "amount": {
                  "-currency": "USD",
                  "#text": "527296"
                },
                "last-updated": "01/08/2018",
                "oneWeekChange": { "-deprecated": "true" },
                "valueChange": {
                  "-duration": "30",
                  "-currency": "USD",
                  "#text": "-2718"
                },
                "valuationRange": {
                  "low": {
                    "-currency": "USD",
                    "#text": "500931"
                  },
                  "high": {
                    "-currency": "USD",
                    "#text": "558934"
                  }
                },
                "percentile": "86"
              },
              "localRealEstate": {
                "region": {
                  "-name": "Ahwatukee Foothills",
                  "-id": "267900",
                  "-type": "neighborhood",
                  "zindexValue": "290,700",
                  "links": {
                    "overview": "
http://www.zillow.com/local-info/AZ-Phoenix/Ahwatukee-Foothills/r_267900/
",
                    "forSaleByOwner": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/fsbo/
",
                    "forSale": "
http://www.zillow.com/ahwatukee-foothills-phoenix-az/
"
                  }
                }
              }
            }
          ]
        }
      }
    }
  }
}