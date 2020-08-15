# Submissions

[Link to the demonstration video](https://www.youtube.com/watch?v=gR71QjbmJvo)

[Link to the presentation slides](https://docs.google.com/presentation/d/1YxOG8uyPY6fy_Q7czGD5bJGpYhFRngDTRjdESdkzCLI/edit?usp=sharing)

[Link to the user manual](https://docs.google.com/document/d/1yM8Fy_c3kIlEPvMYso4nH1ZZVMo2aN-5uhWAhb0Vegk/edit?usp=sharing)

[Link to the Psychologist / Staff / Admin Login Page](https://quaranteams-admin.herokuapp.com/#/login)

[Link to The Users(Client) Login Page](https://quaranteams-main.herokuapp.com/login) 

[Link to our humanized chat bot](https://t.me/Quaranteams_bot)

[Link to the DASS-21 Original Question Sets](https://journals.plos.org/plosone/article/file?type=supplementary&id=info:doi/10.1371/journal.pone.0219193.s004#:~:text=The%20Depression%2C%20Anxiety%20and%20Stress,into%20subscales%20with%20similar%20content.)

[Link to the IES-R Original Question Sets](https://www.aerztenetz-grafschaft.de/download/IES-R-englisch-5-stufig.pdf)

[Link to the Backend Main Service GitHub Repo](https://github.com/cosmos-ummc/comet)

[Link to the Client Website GitHub Repo](https://github.com/cosmos-ummc/mayall)

[Link to the Admin Dashboard GitHub Repo](https://github.com/cosmos-ummc/butterfly)

[Link to the Backend Chat Service GitHub Repo](https://github.com/cosmos-ummc/needle)

[Link to the Telegram Chat Bot GitHub Repo](https://github.com/cosmos-ummc/Willman)

# Instructions

This repository is for the main client frontend website. There are several modules included:

- Alert tips module

Daily tips will be provided to the users!

- "Enrich Your Thoughts" module

This module will provide random health feeds for the users to help them improve knowledge in
health care.

- "Especially For You" module

This module will provide personalized health feeds that are co-related to the users' mental health status

- Meditation module

This module will provide random meditations for the users to guide them on exercises that
can help in easing the mental stressfulness.

- Game module

This module will provide random games for the users to enrich their lifestyles with
some games that can help in maintaining good mental health.

- Meeting module

This module will provide 1:1 meeting sessions for the users. Users with moderate / severe / extremely severe health status (Based on reports) 
can choose to create a meeting with their chosen time slots. The consultants will be automatically assigned based on their availability.
Aside from that, users who are in normal or mild condition can also notify for a meeting if
they think they would like to talk to the consultants. The users will be then linked to the video
conferencing sites for one-to-one consultations.

- Chat module

This module includes a complete set of operations for the anonymous chatting. When users enable their
visibility, they will have chances to match with another anonymous friend that has similar personality from time to time.
A pop up will be shown as soon as the users are matched. Chatting is also in real time. If users find the matched friend is not 
a good taste of him / her, they can also block the users permanently.

# Project Setup

- To run the server, first, setup the [Redis Server](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-redis-on-ubuntu-18-04).

- Install [NodeJS](https://nodejs.org/en/) version v12.14.1. 

- Next, clone the repository.

- cd to the project directory and run `npm install` to install the dependencies.

- add the environment variables as follows:

```
REACT_APP_API_URL=<Main backend service URL>
REACT_APP_CHAT_API_URL=<Chat backend service URL>
REACT_APP_PUSHER_KEY=<Pusher key>
REACT_APP_PUSHER_CLUSTER=<Pusher cluster>
```

- run `npm start` to start the service locally.
