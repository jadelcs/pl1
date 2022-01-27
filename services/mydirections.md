# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJmzrzi9Y0K4gRgXUc3sTY7RU&destination=place_id:ChIJ3flrK2IzK4gRsoLymGpVn1g&departure_time=now&mode=transit&transit_mode=subway&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJmzrzi9Y0K4gRgXUc3sTY7RU",
         "types" : [ "establishment", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ3flrK2IzK4gRsoLymGpVn1g",
         "types" : [ "neighborhood", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.6773281,
               "lng" : -79.37910160000001
            },
            "southwest" : {
               "lat" : 43.642855,
               "lng" : -79.41024299999999
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "arrival_time" : {
                  "text" : "2:08pm",
                  "time_zone" : "America/Toronto",
                  "value" : 1643310522
               },
               "departure_time" : {
                  "text" : "1:40pm",
                  "time_zone" : "America/Toronto",
                  "value" : 1643308829
               },
               "distance" : {
                  "text" : "6.0 km",
                  "value" : 5978
               },
               "duration" : {
                  "text" : "28 mins",
                  "value" : 1693
               },
               "end_address" : "Casa Loma, Toronto, ON, Canada",
               "end_location" : {
                  "lat" : 43.6767841,
                  "lng" : -79.41024299999999
               },
               "start_address" : "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
               "start_location" : {
                  "lat" : 43.642855,
                  "lng" : -79.38718730000001
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 854
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 613
                     },
                     "end_location" : {
                        "lat" : 43.6458618,
                        "lng" : -79.379192
                     },
                     "html_instructions" : "Walk to Union Station",
                     "polyline" : {
                        "points" : "{~jiG|hpcNIo@Ea@AIAMAS?U@]@_@Sg@ACAC?A?C?S?G?GKm@AGOaAEm@Gi@[]EGUWEGCECAC?A?KBGBYHi@NIBA?A??AAC?CAGE]CQE]CQU_Bm@yECWEUAMEYAG?AAA?AA?A?GBUFA?A??AA?Gk@YHA?A??AAA?ACMKcAQ_BGo@CUEYGo@S_BK{@Ea@e@NE@"
                     },
                     "start_location" : {
                        "lat" : 43.642855,
                        "lng" : -79.38718730000001
                     },
                     "steps" : [
                        {
                           "distance" : {
                              "text" : "86 m",
                              "value" : 86
                           },
                           "duration" : {
                              "text" : "1 min",
                              "value" : 62
                           },
                           "end_location" : {
                              "lat" : 43.6429469,
                              "lng" : -79.3861395
                           },
                           "html_instructions" : "Head \u003cb\u003eeast\u003c/b\u003e toward \u003cb\u003eThe PATH - Skywalk\u003c/b\u003e",
                           "polyline" : {
                              "points" : "{~jiG|hpcNIo@Ea@AIAMAS?U@]@_@"
                           },
                           "start_location" : {
                              "lat" : 43.642855,
                              "lng" : -79.38718730000001
                           },
                           "travel_mode" : "WALKING"
                        },
                        {
                           "distance" : {
                              "text" : "0.5 km",
                              "value" : 503
                           },
                           "duration" : {
                              "text" : "6 mins",
                              "value" : 356
                           },
                           "end_location" : {
                              "lat" : 43.64499199999999,
                              "lng" : -79.381638
                           },
                           "html_instructions" : "Continue onto \u003cb\u003eThe PATH - Skywalk\u003c/b\u003e",
                           "polyline" : {
                              "points" : "m_kiGjbpcNSg@ACAC?A?C?S?G?GKm@AGOaAEm@Gi@[]EGUWEGCECAC?A?KBGBYHi@NIBA?A??AAC?CAGE]CQE]CQU_Bm@yECWEUAMEYAG?AAA?AA?A?GBUFA?A??AA?Gk@"
                           },
                           "start_location" : {
                              "lat" : 43.6429469,
                              "lng" : -79.3861395
                           },
                           "travel_mode" : "WALKING"
                        },
                        {
                           "distance" : {
                              "text" : "0.2 km",
                              "value" : 239
                           },
                           "duration" : {
                              "text" : "3 mins",
                              "value" : 174
                           },
                           "end_location" : {
                              "lat" : 43.6456412,
                              "lng" : -79.37910160000001
                           },
                           "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eThe PATH - Union-VIA-GO\u003c/b\u003e",
                           "maneuver" : "turn-left",
                           "polyline" : {
                              "points" : "elkiGffocNYHA?A??AAA?ACMKcAQ_BGo@CUEYGo@S_BK{@Ea@"
                           },
                           "start_location" : {
                              "lat" : 43.64499199999999,
                              "lng" : -79.381638
                           },
                           "travel_mode" : "WALKING"
                        },
                        {
                           "distance" : {
                              "text" : "26 m",
                              "value" : 26
                           },
                           "duration" : {
                              "text" : "1 min",
                              "value" : 21
                           },
                           "end_location" : {
                              "lat" : 43.6458618,
                              "lng" : -79.379192
                           },
                           "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBay St.\u003c/b\u003e",
                           "maneuver" : "turn-left",
                           "polyline" : {
                              "points" : "gpkiGjvncNe@NE@"
                           },
                           "start_location" : {
                              "lat" : 43.6456412,
                              "lng" : -79.37910160000001
                           },
                           "travel_mode" : "WALKING"
                        }
                     ],
                     "travel_mode" : "WALKING"
                  },
                  {
                     "distance" : {
                        "text" : "4.7 km",
                        "value" : 4652
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 697
                     },
                     "end_location" : {
                        "lat" : 43.6748552,
                        "lng" : -79.40708099999999
                     },
                     "html_instructions" : "Subway towards Yonge-University to Vaughan Metropolitan Centre Station",
                     "polyline" : {
                        "points" : "smkiGv_ocNoAh@ZfCJt@Dn@@r@Cn@Ed@Qx@Un@Yn@o@|@o@r@w@p@_Ap@_Aj@m@Zi@VA?yBhAuBjAkAr@kB|@{@^wBr@a@NsDhAoBn@oC|@MDkDfAeDhAA@GB{Bp@i@ReCv@A?yCfAoA^mA^eCx@WFeFbBE@kCx@}ARqA@}@@i@@q@?e@Ds@J_AL{@RcAV}@^{@`@_An@y@n@y@p@qA|@iAv@wE|Aq@TiAd@}Ar@mAv@c@f@Wr@Q|@I`A@`AJxAPlCZ~Ch@fEf@~DPrAfA~ILhAH|@H`AHjAAxAU~@]l@a@b@e@Vy@TaBd@_GdBKBwJrCuOvEA?Io@"
                     },
                     "start_location" : {
                        "lat" : 43.6452213,
                        "lng" : -79.3806034
                     },
                     "transit_details" : {
                        "arrival_stop" : {
                           "location" : {
                              "lat" : 43.6748552,
                              "lng" : -79.40708099999999
                           },
                           "name" : "Dupont"
                        },
                        "arrival_time" : {
                           "text" : "2:02pm",
                           "time_zone" : "America/Toronto",
                           "value" : 1643310139
                        },
                        "departure_stop" : {
                           "location" : {
                              "lat" : 43.6452213,
                              "lng" : -79.3806034
                           },
                           "name" : "Union Station"
                        },
                        "departure_time" : {
                           "text" : "1:50pm",
                           "time_zone" : "America/Toronto",
                           "value" : 1643309442
                        },
                        "headsign" : "Yonge-University to Vaughan Metropolitan Centre Station",
                        "line" : {
                           "agencies" : [
                              {
                                 "name" : "TTC",
                                 "phone" : "1 (416) 393-4636",
                                 "url" : "https://www.ttc.ca/"
                              }
                           ],
                           "color" : "#f2bf14",
                           "name" : "Line 1 Yonge–University",
                           "short_name" : "1",
                           "text_color" : "#000000",
                           "vehicle" : {
                              "icon" : "//maps.gstatic.com/mapfiles/transit/iw2/6/subway2.png",
                              "name" : "Subway",
                              "type" : "SUBWAY"
                           }
                        },
                        "num_stops" : 8
                     },
                     "travel_mode" : "TRANSIT"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 472
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 382
                     },
                     "end_location" : {
                        "lat" : 43.6767841,
                        "lng" : -79.41024299999999
                     },
                     "html_instructions" : "Walk to Casa Loma, Toronto, ON, Canada",
                     "polyline" : {
                        "points" : "ugqiGfftcNC@MDODOFOBYHcAZSDcBf@ODoA^C@]Jy@T@Rn@hDHf@TlA@LJl@HZBR"
                     },
                     "start_location" : {
                        "lat" : 43.67498920000001,
                        "lng" : -79.4072396
                     },
                     "steps" : [
                        {
                           "distance" : {
                              "text" : "0.3 km",
                              "value" : 279
                           },
                           "duration" : {
                              "text" : "4 mins",
                              "value" : 238
                           },
                           "end_location" : {
                              "lat" : 43.6773281,
                              "lng" : -79.4081637
                           },
                           "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eSpadina Rd\u003c/b\u003e toward \u003cb\u003eMacpherson Ave\u003c/b\u003e",
                           "polyline" : {
                              "points" : "ugqiGfftcNC@MDODOFOBYHcAZSDcBf@ODoA^C@]Jy@T"
                           },
                           "start_location" : {
                              "lat" : 43.67498920000001,
                              "lng" : -79.4072396
                           },
                           "travel_mode" : "WALKING"
                        },
                        {
                           "distance" : {
                              "text" : "0.2 km",
                              "value" : 193
                           },
                           "duration" : {
                              "text" : "2 mins",
                              "value" : 144
                           },
                           "end_location" : {
                              "lat" : 43.6767841,
                              "lng" : -79.41024299999999
                           },
                           "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDavenport Rd\u003c/b\u003e",
                           "maneuver" : "turn-left",
                           "polyline" : {
                              "points" : "ivqiG~ktcN@Rn@hDHf@TlA@LJl@HZBR"
                           },
                           "start_location" : {
                              "lat" : 43.6773281,
                              "lng" : -79.4081637
                           },
                           "travel_mode" : "WALKING"
                        }
                     ],
                     "travel_mode" : "WALKING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "{~jiG|hpcNSiBAi@B}@Wo@?a@]_CMwAa@e@_@e@GAMBuA`@CAWoBwAyKEC_@JCAGk@YHA?A?k@gFe@_EQ}Ak@P~BxGoAh@f@|DFbBItAQx@Un@Yn@o@|@o@r@w@p@_Ap@_Aj@wAr@{BhAaE~BgD|A}L|D}CbAqIpCoDjAgCv@iFfBqMdEqCz@}ARqA@gBBwADsBX_Cj@yB`AyB~AkCnBiAv@wE|A{Bz@}Ar@mAv@c@f@Wr@Q|@I`A@`AJxAPlCZ~CpAfKxArLVfCRlCAxAU~@]l@a@b@e@Vy@TaJjC{[nJIo@Y^QFiAZwJrC@Rn@hD^tBLz@Ln@"
         },
         "summary" : "",
         "warnings" : [
            "Walking directions are in beta. Use caution – This route may be missing sidewalks or pedestrian paths."
         ],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
