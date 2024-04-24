# API Endpoints

### api/signup _(POST)_

##### Expects:

- username (str)
- password (str)
- confirmPassword (str)
- email (str)
- firstName (str)
- lastName (str)

##### Returns:

- a success boolean

### api/login \_(POST)

Logs the user with the username and password in

##### Expects:

- username
- password

##### Returns:

- a success boolean

### api/check-auth _(GET)_

##### Returns:

- an isAuthenticated boolean

### api/get-csrf _(GET)_

##### Returns:

- a CSRF token (str)

### api/set-appointment _(POST)_

##### Expects:

- datetime: a datetime string in ISO-8601 format (YYYY-MM-DDTHH:mm:ss.sssZ)
- doctor: a string (subject to change in the future)

##### Returns:

- a success boolean

### api/get-user-data _(GET)_

##### Returns:

- Most data of the authenticated user (id, user.id, first_name, last_name, email, disability, diagnosis, chat_log, appointments_made), if the user is not authorized a 401 status response is returned

### api/add-to-chat-log _(POST)_

##### Expects:

- log: a string containing the log to be added

##### Returns:

- a success boolean

### api/set-diagnosis _(POST)_

##### Expects:

- diagnosis (str)

##### Returns:

- a success boolean

### api/set-disability

##### Expects:

- disability (str)

##### Returns:

- a success boolean
