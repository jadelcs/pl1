# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?origin=CN+Tower&destination=Casa+Loma&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
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
         "place_id" : "ChIJs6Elz500K4gRT1jWAsHIfGE",
         "types" : [ "establishment", "museum", "point_of_interest", "tourist_attraction" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 43.6785046,
               "lng" : -79.3888881
            },
            "southwest" : {
               "lat" : 43.6427784,
               "lng" : -79.4108392
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "4.9 km",
                  "value" : 4903
               },
               "duration" : {
                  "text" : "17 mins",
                  "value" : 1012
               },
               "end_address" : "1 Austin Terrace, Toronto, ON M5R 1X8, Canada",
               "end_location" : {
                  "lat" : 43.6784635,
                  "lng" : -79.41006999999999
               },
               "start_address" : "290 Bremner Blvd, Toronto, ON M5V 3L9, Canada",
               "start_location" : {
                  "lat" : 43.6439336,
                  "lng" : -79.3888881
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 415
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 92
                     },
                     "end_location" : {
                        "lat" : 43.6427784,
                        "lng" : -79.3937866
                     },
                     "html_instructions" : "Head \u003cb\u003ewest\u003c/b\u003e on \u003cb\u003eFront St W\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qekiGpspcNBRFb@BVHp@BNBRJr@NlAD\\@B\\nCb@hCF^TlAF`@v@~E"
                     },
                     "start_location" : {
                        "lat" : 43.6439336,
                        "lng" : -79.3888881
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1899
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 486
                     },
                     "end_location" : {
                        "lat" : 43.65916259999999,
                        "lng" : -79.4002618
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSpadina Ave.\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "k~jiGdrqcNa@Lm@PIBYHk@TG@w@Za@Lm@RYHkA\\E?kA\\w@VcBh@o@Tc@LeAZuBn@aBd@eBl@oA`@gBb@a@NaAXy@VaAXODuAb@wA^WHODw@TcCt@_Bb@[Ji@PQF]HkA^_Bd@cBf@gBd@wA`@s@RkGpBwAb@MBo@Nm@PCBE@C@C@KBy@VE@E@C@C?CAC?CACAAACAIE"
                     },
                     "start_location" : {
                        "lat" : 43.6427784,
                        "lng" : -79.3937866
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 169
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 43.6603089,
                        "lng" : -79.40063689999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSpadina Crescent\u003c/b\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "wdniGrzrcNKQKQIGGGIEIGKCICOAE?C?C?C?C?C?C@A?EBC?CBE@C@CBEBEBEDGFEFCDEHCFELCFADCJEXAL"
                     },
                     "start_location" : {
                        "lat" : 43.65916259999999,
                        "lng" : -79.4002618
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2008
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 332
                     },
                     "end_location" : {
                        "lat" : 43.6774241,
                        "lng" : -79.4081004
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to continue on \u003cb\u003eSpadina Ave.\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "}kniG~|rcNAJAFCHCDCFEDEFIDEDQDkCt@_Cr@s@T}@V}Ad@QFaBb@}@VkA\\oA^c@L_AXYHm@PG@SHKDWL[TWTWVEDA@IFA@E@OJA?m@ZIRKD[L]HOFQF[JOBw@TuF`BgGfBoA\\{C|@}@XkA\\}Ab@sErA{Bp@u@Ru@R[JE@WH]Ja@LkAZwBn@wAb@C?]LgAZ"
                     },
                     "start_location" : {
                        "lat" : 43.6603089,
                        "lng" : -79.40063689999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 172
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 43.6768831,
                        "lng" : -79.41010849999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eDavenport Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{vqiGrktcN@Lz@rE\\nBN~@"
                     },
                     "start_location" : {
                        "lat" : 43.6774241,
                        "lng" : -79.4081004
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 169
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 43.67824479999999,
                        "lng" : -79.41080839999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eWalmer Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "osqiGdxtcNOVIJEFCFKToA^y@R[HMDC@I??@G?G?CAC?EC"
                     },
                     "start_location" : {
                        "lat" : 43.6768831,
                        "lng" : -79.41010849999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "66 m",
                        "value" : 66
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 43.6785046,
                        "lng" : -79.4100912
                     },
                     "html_instructions" : "\u003cb\u003eWalmer Rd\u003c/b\u003e turns slightly \u003cb\u003eright\u003c/b\u003e and becomes \u003cb\u003eAustin Terrace\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_|qiGp|tcNECEECEACAECIAAEQMw@E_@"
                     },
                     "start_location" : {
                        "lat" : 43.67824479999999,
                        "lng" : -79.41080839999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5 m",
                        "value" : 5
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 8
                     },
                     "end_location" : {
                        "lat" : 43.6784635,
                        "lng" : -79.41006999999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "s}qiG`xtcNFC"
                     },
                     "start_location" : {
                        "lat" : 43.6785046,
                        "lng" : -79.4100912
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "qekiGpspcN|@fHhAzH|AnJsBl@mC`AgA\\kA\\E?cCt@sC~@aI~BuDnAiCr@mEpAuErAwHzBeDbAcKtC_IdCeBf@gBf@mA^SDOEECIEKQUYQMUKYEQ?M@SHSLWZSf@Mx@Kb@YZcHtBaFzAgN|D_A^s@j@]\\SLQJm@ZIRg@Rm@PuBl@ed@tMaJjC_HnBeBh@|@`Fl@nDOV_@p@sDbAUBUEQSMc@SwAFC"
         },
         "summary" : "Spadina Ave.",
         "warnings" : [],
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
