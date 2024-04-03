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

# Project Documentation

## Backend APIs

### Base URL
https://heliverse-full-stack-assignment.onrender.com



### GET /api/users
Retrieve all users with pagination support and optional filters.

#### Parameters
- `page` (optional): Page number for pagination.
- `limit` (optional): Number of items per page (for pagination).
- `first_name` (optional): Filter users by first name.
- `gender` (optional): Filter users by gender.
- `available` (optional): Filter users by availability.
- `domain` (optional): Filter users by domain.

#### Example Usage

- **Example Request to fetch all user profiles with pagination** `GET https://heliverse-full-stack-assignment.onrender.com/api/users?page=1&limit=5`

- **Example Response**

```json

{
    "next": {
        "page": 2,
        "limit": 5
    },
    "result": [
        {
            "_id": "660cc4779ad2b3384633ff7e",
            "id": 1,
            "first_name": "Anet",
            "last_name": "Doe",
            "email": "adoe0@comcast.net",
            "gender": "Female",
            "avatar": "https://robohash.org/sintessequaerat.png?size=50x50&set=set1",
            "domain": "Sales",
            "available": false,
            "__v": 0
        },
        {
            "_id": "660cc4779ad2b3384633ff7f",
            "id": 2,
            "first_name": "Honoria",
            "last_name": "Caughte",
            "email": "hcaughte1@google.com.br",
            "gender": "Female",
            "avatar": "https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1",
            "domain": "Finance",
            "available": true,
            "__v": 0
        },
        {
            "_id": "660cc4779ad2b3384633ff80",
            "id": 3,
            "first_name": "Wiley",
            "last_name": "Boarder",
            "email": "wboarder2@xing.com",
            "gender": "Male",
            "avatar": "https://robohash.org/laboriosamdolorepossimus.png?size=50x50&set=set1",
            "domain": "Marketing",
            "available": false,
            "__v": 0
        },
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
            "_id": "660cc4779ad2b3384633ff82",
            "id": 5,
            "first_name": "Horst",
            "last_name": "Grastye",
            "email": "hgrastye4@dmoz.org",
            "gender": "Male",
            "avatar": "https://robohash.org/utquirepudiandae.png?size=50x50&set=set1",
            "domain": "Finance",
            "available": false,
            "__v": 0
        }
    ]
}

```


- **Example Request to GET users with filters** `GET https://heliverse-full-stack-assignment.onrender.com/api/users?page=1&limit=20&first_name=Honoria&gender=Female&available=true&domain=Finance`

- **Example Response:**
  
  ```json
  {
    "result": [
        {
            "_id": "660cc4779ad2b3384633ff7f",
            "id": 2,
            "first_name": "Honoria",
            "last_name": "Caughte",
            "email": "hcaughte1@google.com.br",
            "gender": "Female",
            "avatar": "https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1",
            "domain": "Finance",
            "available": true,
            "__v": 0
        }
    ]
}
``

### GET /api/users/:id
Retrieve a user profile with specific ID.

#### Example Usage

- **Example Request to fetch a user with id 522** `GET https://heliverse-full-stack-assignment.onrender.com/api/users/522`

- **Example Response**
```json
{
    "success": "true",
    "userProfile": {
        "_id": "660cc4779ad2b33846340187",
        "id": 522,
        "first_name": "Kessia",
        "last_name": "Record",
        "email": "krecordeh@scribd.com",
        "gender": "Female",
        "avatar": "https://robohash.org/deseruntrepellatex.png?size=50x50&set=set1",
        "domain": "Finance",
        "available": true,
        "__v": 0
    }
}
```
## POST /api/users
Creates a new user profile and returns the created document back

#### Example Usage

**Example Request**
`POST https://heliverse-full-stack-assignment.onrender.com/api/users`

**Request Body**
```json
{
    "first_name": "Suresh",
    "last_name": "Bhatt",
    "gender": "Male",
    "available": false,
    "avatar": "https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1",
    "email": "dev.sureshbhatt@gmail.com",
    "domain": "IT"
}
```

**Example Response**
```json
{
    "Created User": {
        "id": 1002,
        "first_name": "Suresh",
        "last_name": "Bhatt",
        "email": "dev.sureshbhatt@gmail.com",
        "gender": "Male",
        "avatar": "https://robohash.org/temporibusporrolaboriosam.png?size=50x50&set=set1",
        "domain": "IT",
        "available": false,
        "_id": "660d950f3193022859da116f",
        "__v": 0
    },
    "success": "true"
}
```