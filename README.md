# How to Use the Application

## Homepage

- **Action:** Select profiles based on domain and availability.
- **Note:** Only profiles with availability (true) and unique domains can be added.

## Creating a Team

- **Action:** After selecting profiles, navigate to the "My Team" option from the top navigation bar.
- **Steps:**
  1. This page lists all selected user profiles.
  2. Enter a name for your created team.
  3. Click on "Create Team" button.

## Team Creation Alert

- **Action:** Upon successful team creation, the browser window will throw an alert message confirming the team's creation.
- **Note:** Copy the ID from the alert message for further actions.

## Fetching Team Details

- **Action:** Use the copied team ID to fetch team details.
- **Endpoint:** `GET /api/team/:id`
- **Example Request:** `GET https://heliverse-full-stack-assignment.onrender.com/api/team/660d893cd95962dc3bec1ef9`
- **Example Response:**
  
  ```json
  {
      "_id": "660d893cd95962dc3bec1ef9",
      "teamName": "Suresh Bhatt's test team",
      "user": [
          {
              "_id": "660cc4779ad2b3384633ff81",
              "id": 4,
              "first_name": "Brett",
              "last_name": "Ivetts",
              "email": "bivetts3@netlog.com",
              "gender": "Agender",
              "avatar": "https://robohash.org/ullamsuntet.png?size=50x50&set=set1",
              "domain": "Finance",
              "available": true,
              "__v": 0
          },
          {
              "_id": "660cc4779ad2b3384633ff85",
              "id": 8,
              "first_name": "Janos",
              "last_name": "Le Noire",
              "email": "jlenoire7@sakura.ne.jp",
              "gender": "Male",
              "avatar": "https://robohash.org/praesentiumquasicorporis.png?size=50x50&set=set1",
              "domain": "Management",
              "available": true,
              "__v": 0
          },
          {
              "_id": "660cc4779ad2b3384633ff83",
              "id": 6,
              "first_name": "Monique",
              "last_name": "Wilbud",
              "email": "mwilbud5@state.gov",
              "gender": "Female",
              "avatar": "https://robohash.org/maximequiomnis.png?size=50x50&set=set1",
              "domain": "IT",
              "available": true,
              "__v": 0
          }
      ],
      "__v": 0
  }
```