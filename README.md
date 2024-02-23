# UW Energy Network 
The UW Energy Network club website. 

See Designs: https://www.figma.com/file/fol19GgzxT2saUJj9nMSjf/UWEN-Design?type=design&node-id=0%3A1&mode=design&t=6udHGSBJzSbYj5GJ-1

## How to Update Site
1. Navigate to `info` folder
2. Update JSON objects with new information

### Team Member Template - `team.js`
```json
{
        "position": "", // Required
        "name": "", // Required
        "description": "", // Required
        "imageFile": "", // Required
        "linkedin": "", // Required
},
```

### Event Template - `eventsInfo.js`
Note: Events are auto sorted so the order in the file does not affect the order on the page
```json
{
        "date": "", // Required
        "title": "", // Required
        "description": "", // Required
        "imageFile": "", // Required
        "location": "", // Optional
},
```

### Organization Template - `eventsInfo.js`
```json
{
        "title": "", // Required
        "description": "", // Required
        "imageFile": "", // Required
},
```

### Contact Template - `contacts.js`
```json
{
        "title": "", // Required
        "description": "", // Required 
        "imageFile": "", // Required
        "link": "" // Optional
},
```