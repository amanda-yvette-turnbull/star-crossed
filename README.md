# star-crossed
The dating app written in and by the stars
Link to the backend can be found [here]([url](https://github.com/amanda-yvette-turnbull/star-crossed-api))

## Database info:
### Users 
  | Row Name | Data Type | Summary |
  | --- | --- | --- |
  | id | increments | Primary Key |
  | auth0_id | string | Key from auth client |
  | name | string | Display name |
  | age | integer | |
  | gender | string | |
  | preference | string | Stringified array containing gender preferences |
  | bio | string | Profile bio |
  | birthday | string | Used to determine star sign |
  | image | string | File Path to user image |
  | star_sign_id | integer | Joins to table star_signs |
  | matches | string | Stringified array of matches. This is used to build queries to show your convos |
  | compatibility | string | Stringified array of compatibility preferences |
  

### star_signs 
  | Row Name | Data Type | Summary |
  | --- | --- | --- |
  | id | increments | Primary Key |
  | date_range | string | Compared to user’s birthday to determine sign |
  | name | string | |
  | blurb | string | |
  | image | string | File Path to icon image |
  | default_compatibility | string | Stringified array of compatibility info used as the default for users of this sign |
  

### conversations 
  | Row Name | Data Type | Summary |
  | --- | --- | --- |
  | id | increments | Primary Key |
  | participants | string | Joins with user.user_id using info from user.matches |
  | messages | string | Stringified array of message ids in chronological order, joins to messages.id |
  | read | string | Flag to show if there are new messages |
  

### messages 
  | Row Name | Data Type | Summary |
  | --- | --- | --- |
  | id | increments | Primary Key |
  | user_id | integer | Joins to users.id |
  | date | string | |
  | contents | string | |
  
  ---

## API client - server

### Users 
| Method | API Function Name | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- | --- |
| Get | fetchUsers | /api/v1/users | No | Get a list of users from the DB | Array of Objects|
| Get | fetchUser | /api/v1/users/:id | Yes | Get an individual users details | Object |
| Post | addUser | /api/v1/users | Yes | Add user to database | Array of single object |
| Patch | editUser | /api/v1/users/:id | Yes | Update a user | status(200) |
| Delete | removeUser | /api/v1/users/:id | Yes | Delete a user | status(200) |

### Starsigns 
| Method | API Function Name | Endpoint | Protected | Usage | Response |
| --- | --- | --- | --- | --- | --- |
| Get | fetchSigns | /api/v1/starsigns | No | Get a list of star signs from the DB | Array of Objects|
| Get | fetchSign | /api/v1/starsigns/:id | Yes | Get a star sign's details | Object |
| Patch | editSign | /api/v1/starsigns/:id | Yes | Update a star sign | status(200) |

  ---

## Views/Components (Client Side)

  | name | purpose |
  | --- | --- |
  | App | Apps entry point/base component |
  | Landing | Landing page with logo entry button | 
  | Login | Login page to identify if user is authenticated or needs an account |
  | Signup | Page for user to create account |
  | Personal Profile | Shows users profile + options to edit each field |
  | Home | shows you a potential match, can swipe through them|
  | Chats | Shows all chats in chronological order |
  | Chat | Show a chat with the users name, startsign, and the most recent chat |
  | Nav | Navbar component |
  
