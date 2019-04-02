So why rest?

| Not using REST      | Using REST                                  |
| ------------------- | ------------------------------------------- |
| `/listAllHubs`      | GET /hubs                                   |
| `/createHub`        | POST /hubs                                  |
| `/updateHub`        | PUT /hubs/:id                               |
| `/deleteHub`        | DELETE /hubs/:id                            |
| `/listHubMessages`  | GET /hubs/:id/messages                      |
| `/countHubMessages` | GET /hubs/:id/messages as an extra property |







https://www.google.com/search?q=query+string+parameters&oq=query+string+parameters&aqs=chrome..69i57j0l5.5033j1j9&sourceid=chrome&ie=UTF-8


https://www.google.com/search
? <--------- Marks the beginning of the query string
q=query+string+parameters <--------- A key/value pair
& <------------ Separator for the next value pair. 
oq=query+string+parameters


req.query = {
    q= query+string+parameters
    q= query+string+parameters
    
}