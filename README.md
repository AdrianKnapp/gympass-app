# App
Gympass style app.

## FRs (Functional requirements)
- [ ] Should be able to register a user.
- [ ] Should be able to login.
- [ ] Should be able to get the profile of a logged user.
- [ ] Should be able to get the quantity of check-ins from the logged user.
- [ ] Should be able to user get his check-in history.
- [ ] Should be able to user search for a gym in his location.
- [ ] Should be able to user search for a gym by name.
- [ ] Should be able to user makes a check-in.
- [ ] Should be able to gym validate a check-in from a user.
- [ ] Should be able to register a gym.

## BRs (Business rules)
- [ ] User should not be able to register with an already registered email.
- [ ] User should not be able to make 2 check-ins in the same day.
- [ ] User should not be able to make a check-in if he is not about (100m) from the gym.
- [ ] The check-in just can be validate till 20 minutes after the check-in.
- [ ] The check-in just can be validate by the gym admin.
- [ ] The gym just can be registered by admins.

## NFR (Non-functional requirements)
- [ ] The users password should be encrypted.
- [ ] The data should be stored in a PostgreSQL database.
- [ ] Every data list should be paginated with 20 items per page.
- [ ] The user should be identified by a JWT token.